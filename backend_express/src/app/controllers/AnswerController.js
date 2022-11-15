const multiparty = require("multiparty");
const AnswerModel = require("../models/Answer");

class AnswerController {
    async get(req, res) {
        const question_id = req.params.question_id;
        try {
            await AnswerModel.find({ question_id: question_id }).exec((err, result) => {
                if (err) return res.status(500).json({ status: false, message: "Có lỗi xảy ra" });
                if (result) {
                    return res.status(200).json({ status: true, message: "Các câu trả lời của câu hỏi", answer: result });
                }
                return res.status(400).json({ status: false, message: "Không có câu hỏi này" });
            });
        } catch (err) {
            return res.status(500).json({ status: false, message: "Có lỗi xảy ra" });
        }
    }
    async post(req, res) {
        const question_id = req.params.question_id;
        const user = req.user;
        try {
            const form = new multiparty.Form();
            form.parse(req, async (err, fields, files) => {
                if (err) return res.status(500).json({ status: false, message: "Có lỗi xảy ra" });
                if (fields.content == "" || fields.content == undefined) {
                    return res.status(400).json({ status: false, message: "Câu trả lời không được để trống" });
                }
                const newAnswer = new AnswerModel({
                    author_username: user.username,
                    author_name: user.fullname,
                    question_id: question_id,
                    content: fields.content[0],
                });
                await newAnswer.save();
                return res.status(200).json({ status: true, message: "Thêm thành công câu trả lời", answer: newAnswer });
            });
        } catch (err) {
            return res.status(500).json({ status: false, message: "Có lỗi xảy ra" });
        }
    }
}
module.exports = new AnswerController();
