const multiparty = require("multiparty");

const Post = require("../models/Post");
const PostVote = require("../models/PostVote");
const uploadImages = require("../../utils/uploadImage");
const Comment = require("../models/Comment");

class PostController {
    async get(req, res, next) {
        let slug = req.params.slug;

        try {
            let post = await Post.findOne({ slug: slug}).populate('author').lean();
            if (!post) {
                return res.status(404).json({ status: false, message: "Không tìm thấy bài viết" });
            }
            let comments = await Comment.find({ post: post._id }).populate('author');
            post.comments = comments;
            let votes = await PostVote.find({ post: post._id });
            post.votes = votes;
            return res.status(200).json({ status: true, post: post });
        } catch (err) {
            return res.json({ status: false, message: "Có lỗi xảy ra" });
        }
    }

    async create(req, res, next) {
        const user = req.user;
        try {
            const form = new multiparty.Form();
            form.parse(req, async (err, fields, files) => {
                if (err) {
                    return res.status(500).json({ status: false, message: "Có lỗi xảy ra" });
                }
                let title = fields.title[0];
                let tldr = fields.tldr[0];
                let content = fields.content[0];
                let tags = fields.tags;
                let status = fields.saveOption[0];
                // validate
                if (!title || !content) {
                    return res.status(400).json({ status: false, message: "Tiêu đề và nội dung không được để trống" });
                }
                if (tags.length > 5) {
                    return res.status(400).json({ status: false, message: "Tối đa 5 tags" });
                }

                let thumbnail_link = ""; // set to default image later
                if(files.thumbnail) {
                    if (files?.thumbnail[0]?.size > 0) {
                        thumbnail_link = await uploadImages(files.thumbnail[0]);
                    }
                }
                
                const post = new Post({
                    author: user._id,
                    title,
                    tldr,
                    content,
                    thumbnail: thumbnail_link,
                    tags: tags,
                    status,
                });
                await post.save();
                let postNew = await Post.findOne({ _id: post._id }).populate('author').lean();
                postNew.votes = [];
                postNew.comments = [];
                return res.status(200).json({ status: true, message: "Tạo bài viết thành công", post: postNew });
            });
        } catch (error) {
            return res.status(500).json({ status: false, message: "Có lỗi xảy ra" });
        }
    }
    async getMyPost(req, res, next) {
        const user = req.user;
        try {
            const posts = await Post.find({ author: user._id })
                .sort({ createdAt: -1 })
                .populate('author')
                .lean();
            return res.status(200).json({ status: true, message: "Lấy bài viết thành công", posts: posts });
        } catch (error) {
            return res.status(500).json({ status: false, message: "Có lỗi xảy ra" });
        }
    }
    async getPostUser(req, res, next) {
        const user_id = req.body.user_id;
        try {
            const posts = await Post.find({ author: user_id })
                .sort({ createdAt: -1 })
                .populate('author')
                .lean();
            return res.status(200).json({ status: true, message: "Lấy bài viết thành công", posts: posts });
        } catch (error) {
            return res.status(500).json({ status: false, message: "Có lỗi xảy ra" });
        }
    }
    // localhost:3001/api/post?page=5
    async getPagination(req, res, next) {
        try {
            const page = req.query.page ? parseInt(req.query.page) : 0;
            const SKIP = 10; 
            const posts = await Post.find({})
                .sort({createdAt: -1})
                .populate('author')
                .skip(page*SKIP)
                .limit(SKIP)
                .lean();
            for(const [index, p] of posts.entries()) {
                posts[index].votes = await PostVote.find({ post_id: p._id }).lean();
                posts[index].comments = await Comment.find({ post_id: p._id }).populate('author');
            }

            return res.status(200).json({ status: true, message: "Lấy bài viết thành công", posts: posts });
        } catch (error) {
            console.log(error)
            return res.status(500).json({ status: false, message: error.message });
        }
    }
    async votePost(req, res, next) {
        const user = req.user;
        const { post_id, type } = req.body;
        try {
            if(type !== "upvote" && type !== "downvote") {
                return res.json({ status: false, message: "Thông tin không hợp lệ" });
            }
            const voted = await PostVote.findOne({ post_id: post_id, user: user._id });
            if(voted) {
                if(voted.type === type) {
                    await PostVote.findOneAndDelete({ post_id: post_id, user: user._id });
                    // return res.json({ status: true, message: "Bạn đã vote bài viết này rồi" });
                }else {
                    await PostVote.findOneAndUpdate({ post_id: post_id, user: user._id }, { type: type });
                }
            }else {
                const vote = new PostVote({
                    post_id: post_id,
                    user: user._id,
                    type: type,
                });
                await vote.save();
            }
            const post = await Post.findOne({ _id: post_id}).populate('author').lean();
            post.votes = await PostVote.find({ post_id: post_id }).lean();
            return res.json({ status: true, message: "Vote thành công", post: post });
        } catch (error) {
            return res.json({ status: false, message: "Có lỗi xảy ra" });
        }
    }
    async deletePost(req, res, next) {
        const user = req.user;
        try {
            const { post_id } = req.body;
            let post = await Post.findOne({ _id: post_id});
            if(post.author.toString() !== user._id.toString() && user.role !== "admin") {
                return res.json({ status: false, message: "Bạn không có quyền xóa bài viết này" });
            }
            await Post.findOneAndDelete({ _id: post_id});
            await PostVote.deleteMany({ post_id: post_id });
            await Comment.deleteMany({ post_id: post_id })
            return res.json({ status: true, message: "Xóa bài viết thành công" });
        } catch (error) {
            return res.status(500).json({ status: false, message: "Có lỗi xảy ra" });
        }
    }

    async updatePost(req, res, next) {
        const user = req.user;
        try {
            const form = new multiparty.Form();
            form.parse(req, async (err, fields, files) => {
                if (err) {
                    return res.status(500).json({ status: false, message: "Có lỗi xảy ra" });
                }
                let title = fields.title[0];
                let tldr = fields.tldr[0];
                let content = fields.content[0];
                let tags = fields.tags;
                let status = fields.saveOption[0];
                let post_id = fields.post_id[0];
                // validate
                if (!title || !content) {
                    return res.status(400).json({ status: false, message: "Tiêu đề và nội dung không được để trống" });
                }
                if (tags.length > 5) {
                    return res.status(400).json({ status: false, message: "Tối đa 5 tags" });
                }
                let post = await Post.findOne({ _id: post_id});
                if(!post) {
                    return res.status(400).json({ status: false, message: "Bài viết không tồn tại" });
                }
                if(post.author.toString() !== user._id.toString() && user.role !== "admin") {
                    return res.status(400).json({ status: false, message: "Bạn không có quyền sửa bài viết này" });
                }
                let thumbnail_link = post.thumbnail_link; 
                if(files.thumbnail) {
                    if (files?.thumbnail[0]?.size > 0) {
                        thumbnail_link = await uploadImages(files.thumbnail[0]);
                    }
                }

                let postNew = await Post.findOneAndUpdate({ _id: post_id }, {
                    title: title,
                    tldr: tldr,
                    content: content,
                    tags: tags,
                    status: status,
                    thumbnail_link: thumbnail_link,
                }, { new: true
                }).populate('author').lean();
                postNew.votes = await PostVote.find({ post_id: post_id }).lean();
                postNew.comments = await Comment.find({ post : post_id }).populate('author').lean();
                return res.status(200).json({ status: true, message: "Tạo bài viết thành công", post: postNew });
            });
        } catch (error) {
            return res.status(500).json({ status: false, message: "Có lỗi xảy ra" });
        }
    }
}

module.exports = new PostController();
