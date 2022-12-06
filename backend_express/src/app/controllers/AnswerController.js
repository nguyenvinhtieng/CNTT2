const multiparty = require("multiparty");
const Answer = require("../models/Answer");

class AnswerController {
    async addAnswer(req, res) {
        const user = req.user;
        try {
            const { question_id, content, reply_id } = req.body;
            if(!question_id || !content) {
                return res.json({ status: false, message: "Thiếu thông tin" });
            }
            let answer = new Answer({
                author: user._id,
                question_id,
                content,
                reply_id
            });
            await answer.save();
            let newAnswer = await Answer.findById(answer._id).populate("author").lean();
            return res.json({ status: true, message: "Thêm câu trả lời thành công", answer: newAnswer });
        } catch (err) {
            return res.status(500).json({ status: false, message: "Có lỗi xảy ra" });
        }
    }
    
}
module.exports = new AnswerController();
