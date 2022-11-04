const multiparty = require("multiparty");

const PostModel = require("../models/Post");
const uploadImages = require("../../utils/uploadImage");
const Post = require("../models/Post");

class PostController {
    async get(req, res, next) {
        let slug = req.params.slug;
        try {
            PostModel.findOne({ slug: slug }, (err, result) => {
                if (err) return res.status(500).json({ status: false, message: "Có lỗi xảy ra" });
                if (result) {
                    return res.status(200).json({ status: true, message: "Thông tin bài viết", post: result });
                }
                return res.status(400).json({ status: false, message: "Không có bài post này" });
            });
        } catch (err) {
            return res.status(500).json({ status: false, message: "Có lỗi xảy ra" });
        }
    }

    async create(req, res, next) {
        const user = req.user;
        try {
            const form = new multiparty.Form();
            form.parse(req, async (err, fields, files) => {
                if (err) return res.status(500).json({ status: false, message: "Có lỗi xảy ra" });
                let title = fields.title[0];
                let content = fields.content[0];
                let tags = fields.tags;
                // validate
                if (!title || !content) {
                    return res.status(400).json({ status: false, message: "Tiêu đề và nội dung không được để trống" });
                }
                if (tags.length > 5) {
                    return res.status(400).json({ status: false, message: "Tối đa 5 tags" });
                }

                let thumbnail_link = ""; // set to default image later
                if (files.thumbnail[0].size > 0) {
                    thumbnail_link = await uploadImages(files.thumbnail[0]);
                }
                const post = new PostModel({
                    author_username: user.username,
                    author_name: user.fullname,
                    title,
                    content,
                    thumbnail: thumbnail_link,
                    tags: tags,
                });
                await post.save();
                return res.status(200).json({ status: true, message: "Tạo bài viết thành công", post: post });
            });
        } catch (error) {
            return res.status(500).json({ status: false, message: "Có lỗi xảy ra" });
        }
    }

    // localhost:3001/api/post?skip=5
    async getPagination(req, res, next) {
        try {
            const skip = req.query.skip ? parseInt(req.query.skip) : 0;
            const LIMIT = 5; // load 5 posts 1 time
            const postlimit = await PostModel.find({}).skip(skip).limit(LIMIT);

            return res.status(200).json({ status: true, message: "Hello World getPagination", posts: postlimit });
        } catch (error) {
            return res.status(500).json({ status: false, message: error.message });
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
            const oldPost = await PostModel.findOne({ slug: slug }).exec();
            const form = new multiparty.Form();

            form.parse(req, async (err, fields, files) => {
                if (err) return res.status(500).json({ status: false, message: "Có lỗi xảy ra" });

                //new info, take new if not take old
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
                    return res.status(400).json({ status: false, message: "Không có bài post này" });
                });
            });
        } catch (error) {
            return res.status(500).json({ status: false, message: "Có lỗi xảy ra" });
        }
    }
}

module.exports = new PostController();
