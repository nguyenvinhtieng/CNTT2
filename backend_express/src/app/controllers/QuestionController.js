const multiparty = require("multiparty");
const QuestionModel = require("../models/Question");
const Question = require("../models/Question");
const uploadFile = require("../../utils/uploadFile");
const uploadImage = require("../../utils/uploadImage");
class QuestionController {
    async getQuestionDetail(req, res) {
        let slug = req.params.slug;
        try {
            if(!slug) {
                return res.json({ status: false, message: "Không có slug" });
            }
            let question = await QuestionModel.findOne({ slug }).populate("author");
            if(!question) {
                return res.json({ status: false, message: "Không có câu hỏi" });
            }
            return res.json({ status: true, message: "Lấy câu hỏi thành công", question });
        } catch (err) {
            return res.status(500).json({ status: false, message: "Có lỗi xảy ra" });
        }
    }
    async getPagination(req, res) {
        try {
            const page = req.query.page ? parseInt(req.query.page) : 0;
            const SKIP = 10; 
            const questions = await Question.find({})
                                .populate("author")
                                .sort({createdAt: -1})
                                .skip(page * SKIP)
                                .limit(SKIP);
            return res.json({ status: true, message: "Lấy các câu hỏi thành công", questions: questions });
        } catch (err) {
            return res.json({ status: false, message: "Có lỗi xảy ra" });
        }
    }
    async addQuestion(req, res) {
        const user = req.user;
        try {
            const form = new multiparty.Form();
            form.parse(req, async (err, fields, files) => {
                if (err) return res.status(500).json({ status: false, message: "Có lỗi xảy ra" });
                let title = fields.title[0];
                let content = fields.content[0];
                let tags = fields.tags;
                let files_data = [];
                if (files.files.length > 0) {
                    for(const file of files.files) {
                        let fileType = file.headers["content-type"].split("/")[0];
                        if (fileType == "image") {
                            let result = await uploadImage(file);
                            let file_link = result.secure_url;
                            files_data.push({type: "image", url: file_link, public_id: result.public_id})
                        }else {
                            let file_link = await uploadFile(file);
                            files_data.push({type: "file", url: file_link})
                        }
                    }
                }

                let q = new Question({
                    author: user._id,
                    title: title,
                    content: content,
                    tags: tags,
                    files: files_data,
                })
                await q.save();
                let questionNew = await QuestionModel.findOne({_id: q._id })
                return res.status(200).json({ status: true, message: "Tạo câu hỏi thành công",  question: questionNew});
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
