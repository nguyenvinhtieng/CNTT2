const multiparty = require("multiparty");

const Post = require("../models/Post");
const PostVote = require("../models/PostVote");
const uploadImages = require("../../utils/uploadImage");
const Comment = require("../models/Comment");

class PostController {
    async get(req, res, next) {
        let slug = req.params.slug;

        try {
            Post.findOne({ slug: slug }, (err, result) => {
                if (err) return res.status(500).json({ status: false, message: "Có lỗi xảy ra" });
                if (result) {
                    return res.status(200).json({ status: true, message: "Thông tin bài viết", post: result });
                }
                return res.json({ status: false, message: "Không có bài post này" });
            });
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
                return res.status(200).json({ status: true, message: "Tạo bài viết thành công", post: post });
            });
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
    async delete(req, res, next) {
        let slug = req.params.slug;
        try {
            Post.findOneAndDelete({ slug: slug }, (err, result) => {
                if (err) return res.status(500).json({ status: false, message: "Có lỗi xảy ra" });
                if (result) {
                    return res.status(200).json({ status: true, message: `Xóa thành công post ${slug}` });
                }
                return res.status(400).json({ status: false, message: "Không có bài post này" });
            });
        } catch (error) {
            return res.status(500).json({ status: false, message: "Có lỗi xảy ra" });
        }
    }

    async edit(req, res, next) {
        let slug = req.params.slug;
        try {
            const oldPost = await Post.findOne({ slug: slug }).exec();
            const form = new multiparty.Form();

            form.parse(req, async (err, fields, files) => {
                if (err) return res.status(500).json({ status: false, message: "Có lỗi xảy ra" });

                //new info
                let title = fields.title ? fields.title[0] : oldPost.title;
                let content = fields.content ? fields.content[0] : oldPost.content;
                let thumbnail = files.thumbnail ? files.thumbnail[0] : oldPost.thumbnail;
                let tags = fields.tags ? fields.tags : oldPost.tags;

                // validate
                if (!title || !content) {
                    return res.status(400).json({ status: false, message: "Tiêu đề và nội dung không được để trống" });
                }
                if (tags.length > 5) {
                    return res.status(400).json({ status: false, message: "Tối đa 5 tags" });
                }

                let thumbnail_link = "";
                if (thumbnail.size > 0) {
                    thumbnail_link = await uploadImages(files.thumbnail[0]);
                } else {
                    thumbnail_link = oldPost.thumbnail;
                }

                let editPost = {
                    title: title,
                    content: content,
                    thumbnail: thumbnail_link,
                    tags: tags,
                };
                Post.findOneAndUpdate({ slug: slug }, editPost, { new: true }, (err, result) => {
                    if (err) return res.status(500).json({ status: false, message: "Có lỗi xảy ra" });
                    if (result) {
                        return res.status(200).json({ status: true, message: "Cập nhật Thông tin bài viết thành công", post: result });
                    }
                    return res.status(400).json({ status: false, message: `Không có bài viết ${slug}` });

                    return res.status(400).json({ status: false, message: "Không có bài post này" });
                });
            });
        } catch (error) {
            return res.status(500).json({ status: false, message: "Có lỗi xảy ra" });
        }
    }
}

module.exports = new PostController();
