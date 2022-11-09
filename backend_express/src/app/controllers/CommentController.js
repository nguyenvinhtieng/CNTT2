const multiparty = require("multiparty");

const Comment = require("../models/Comment");

class CommentController {
    async get(req, res) {
        const post_id = req.params.post_id;
        try {
            Comment.find({}, (err, result) => {
                if (err) return res.status(500).json({ status: false, message: "Có lỗi xảy ra" });
                if (result) {
                    return res.status(200).json({ status: true, message: "Các bình luận của bài viết" + post_id, comments: result });
                }
                return res.status(400).json({ status: false, message: "Không có bài post này" });
            });
        } catch (error) {
            return res.status(500).json({ status: false, message: "Có lỗi xảy ra" });
        }
    }
    async post(req, res) {
        const post_id = req.params.post_id;
        const user = req.user;
        try {
            const form = new multiparty.Form();
            form.parse(req, async (err, fields, files) => {
                if (err) return res.status(500).json({ status: false, message: err.message });
                if (fields.content == "" || fields.content == undefined) {
                    return res.status(400).json({ status: false, message: "Comment không được để trống" });
                }

                let content = fields.content[0];
                let reply_id = fields.reply_id ? fields.reply_id[0] : null;
                const comment = new Comment({
                    author_username: user.username,
                    author_name: user.fullname,
                    post_id: post_id,
                    content: content,
                    reply_id: reply_id,
                });
                await comment.save();
                return res.status(200).json({ status: true, message: "Tạo comment thành công", comment: comment });
            });
        } catch (error) {
            return res.status(500).json({ status: false, message: error.message });
        }
    }
    async delete(req, res) {
        const id = req.params.id;
        try {
            Comment.findByIdAndDelete(id, (err, result) => {
                if (err) return res.status(500).json({ status: false, message: err.message });
                if (result) {
                    return res.status(200).json({ status: true, message: `Xóa thành công bình luận ${id} ` });
                }
                return res.status(200).json({ status: false, message: `Không có bình luận này` });
            });
        } catch (error) {
            return res.status(500).json({ status: false, message: error.message });
        }
    }
    async update(req, res) {
        const id = req.params.id;
        try {
            const oldComment = await Comment.findById(id).exec();
            const form = new multiparty.Form();
            form.parse(req, async (err, fields, files) => {
                if (err) return res.status(500).json({ status: false, message: err.message });

                let newcomment = fields.content ? fields.content[0] : oldComment.content;
                if (newcomment == "" || newcomment == undefined) {
                    return res.status(400).json({ status: false, message: "Bình luận không thể để trống" });
                }
                Comment.findByIdAndUpdate(id, { content: newcomment }, (err, result) => {
                    if (err) return res.status(500).json({ status: false, message: err.message });
                    if (result) {
                        return res.status(200).json({ status: true, message: `Cập nhật thành công bình luận ${id} ` });
                    }
                    return res.status(200).json({ status: false, message: `Không có bình luận này` });
                });
            });
        } catch (error) {
            return res.status(500).json({ status: false, message: error.message });
        }
    }
}

module.exports = new CommentController();
