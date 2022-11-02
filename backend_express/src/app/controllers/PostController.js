const multiparty = require('multiparty')

const PostModel = require('../models/Post')
const uploadImages = require('../../utils/uploadImage');

class PostController {
    async get(req, res, next) {
        return res.json({ message: "Hello World slug" });
    }
    async create(req, res, next) {
        const user = req.user
        try{
            const form = new multiparty.Form();
            form.parse(req, async (err, fields, files) => {
                if (err) return res.status(500).json({status: false, message: "Có lỗi xảy ra"});
                let title = fields.title[0];
                let content = fields.content[0];
                let tags = fields.tags;
                // validate
                if (!title || !content) {
                    return res.status(400).json({status: false, message: "Tiêu đề và nội dung không được để trống"});
                }
                if (tags.length > 5) {
                    return res.status(400).json({status: false, message: "Tối đa 5 tags"});
                }

                let thumbnail_link = ''; // set to default image later
                if (files.thumbnail[0].size > 0) {
                    thumbnail_link = await uploadImages(files.thumbnail[0])
                }
                const post = new PostModel({
                    author_username: user.username,
                    author_name: user.fullname,
                    title,
                    content,
                    thumbnail: thumbnail_link,
                    tags: tags,
                })
                await post.save()
                return res.status(200).json({status: true, message: "Tạo bài viết thành công", post: post});
            })
        }
        catch(error) {
            return res.status(500).json({status: false ,message: "Có lỗi xảy ra"});
        }
    } 
    getPagination(req, res, next) {
        return res.json({ message: "Hello World getPagination" });
    }
}

module.exports = new PostController();
