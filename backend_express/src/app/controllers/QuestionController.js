const multiparty = require("multiparty");
const QuestionModel = require("../models/Question");

class QuestionController {
    async get(req, res) {
        let slug = req.params.slug;
        try {
            await QuestionModel.findOne({ slug: slug }).exec((err, result) => {
                if (err) return res.status(500).json({ status: false, message: "Có lỗi xảy ra" });
                if (result) {
                    return res.status(200).json({ status: true, message: "Thông tin các câu hỏi", question: result });
                }
                return res.status(400).json({ status: false, message: "Không có bài câu hỏi này" });
            });
        } catch (err) {
            return res.status(500).json({ status: false, message: "Có lỗi xảy ra" });
        }
    }
    async getAll(req, res) {
        try {
            await QuestionModel.find().exec((err, result) => {
                if (err) return res.status(500).json({ status: false, message: "Có lỗi xảy ra" });
                if (result) {
                    return res.status(200).json({ status: true, message: "Thông tin các câu hỏi", question: result });
                }
                return res.status(400).json({ status: false, message: "Không có bài câu hỏi này" });
            });
        } catch (err) {
            return res.status(500).json({ status: false, message: "Có lỗi xảy ra" });
        }
    }
    async post(req, res) {
        const user = req.user;
        try {
            const form = new multiparty.Form();
            form.parse(req, async (err, fields, files) => {
                if (err) return res.status(500).json({ status: false, message: "Có lỗi xảy ra" });
                if (fields.title == "" || fields.title == undefined) {
                    return res.status(400).json({ status: false, message: "Tiêu đề không được để trống" });
                }
                if (fields.content == "" || fields.content == undefined) {
                    return res.status(400).json({ status: false, message: "Nội dung không được để trống" });
                }
                if (fields.tags == "" || fields.tags == undefined) {
                    return res.status(400).json({ status: false, message: "Tags không được để trống" });
                } else if (fields.tags.length > 5) {
                    return res.status(400).json({ status: false, message: "Tối đa 5 tags" });
                }
                let title = fields.title[0];
                let content = fields.content[0];
                let tags = fields.tags;
                const newQuestion = new QuestionModel({
                    author_username: user.username,
                    author_name: user.fullname,
                    title: title,
                    content: content,
                    tags: tags,
                });
                await newQuestion.save();
                return res.status(200).json({ status: true, message: "Tạo câu hỏi thành công", question: newQuestion });
            });
        } catch (err) {
            return res.status(500).json({ status: false, message: "Có lỗi xảy ra" });
        }
    }
    async delete(req, res) {
        let slug = req.params.slug;
        try {
            await QuestionModel.findOneAndDelete({ slug: slug }).exec((err, result) => {
                if (err) return res.status(500).json({ status: false, message: "Có lỗi xảy ra" });
                if (result) {
                    return res.status(200).json({ status: true, message: `Xóa thành công câu hỏi ${slug}` });
                }
                return res.status(400).json({ status: false, message: `Không có câu hỏi ${slug}` });
            });
        } catch (err) {
            return res.status(500).json({ status: false, message: "Có lỗi xảy ra" });
        }
    }
    async edit(req, res) {
        let slug = req.params.slug;
        try {
            const oldQuestion = await QuestionModel.findOne({ slug: slug }).exec;
            const form = new multiparty.Form();
            form.parse(req, async (err, fields, files) => {
                if (err) return res.status(500).json({ status: false, message: "Có lỗi xảy ra" });

                if (fields.title == "" || fields.title == undefined) {
                    return res.status(400).json({ status: false, message: "Tiêu đề không được để trống" });
                }
                if (fields.content == "" || fields.content == undefined) {
                    return res.status(400).json({ status: false, message: "Nội dung không được để trống" });
                }
                if (fields.tags == "" || fields.tags == undefined) {
                    return res.status(400).json({ status: false, message: "Tags không được để trống" });
                } else if (fields.tags.length > 5) {
                    return res.status(400).json({ status: false, message: "Tối đa 5 tags" });
                }

                let title = fields.title ? fields.title[0] : oldQuestion.title;
                let content = fields.content ? fields.content[0] : oldQuestion.content;
                let tags = fields.tags ? fields.tags[0] : oldQuestion.tags;

                const editQuestion = {
                    title: title,
                    content: content,
                    tags: tags,
                };

                await QuestionModel.findOneAndUpdate({ slug: slug }, editQuestion, { new: true }).exec((err, result) => {
                    if (err) return res.status(500).json({ status: false, message: "Có lỗi xảy ra" });
                    if (result) {
                        return res.status(200).json({ status: true, message: "Cập nhật câu hỏi thành công", question: result });
                    }
                    return res.status(400).json({ status: false, message: "Không có bài post này" });
                });
            });
        } catch (err) {
            return res.status(500).json({ status: false, message: "Có lỗi xảy ra" });
        }
    }
}
module.exports = new QuestionController();
