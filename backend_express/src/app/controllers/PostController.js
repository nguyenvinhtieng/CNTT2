const PostModel = require('../models/Post')
const cloudinary = require('../../config/cloudinary')
const fs = require('fs');

class PostController {
    async get(req, res, next) {
        return res.json({ message: "Hello World slug" });
    }
    async create(req, res, next) {
        try{
            if(req.body.title === '' ||req.body.content ===''||req.body.tags===''){
                return res.json({
                    code:1,
                    message:'Vui lòng không để trống'
                })
            }else{
                const {path} = req.file
                console.log(path)
                const result = await cloudinary.v2.uploader.upload(path)
                const newPost = new PostModel({
                    author_username: req.body.author_username,
                    author_name: req.body.author_name,
                    title: req.body.title,
                    content: req.body.content,
                    thumbnail: result.secure_url,
                    tags: req.body.tags,
                    pin: req.body.pin,
                    slug: req.body.slug,
                })
                await newPost.save()    
                await fs.unlinkSync(path)
                return res.json({code:0,newPost, message: "Thêm Post thành công" }); 
            }
        }
        catch(error) {
            // console.log(error)
            return res.json({code:1,message:"Có lỗi"})
        }
    }
    getPagination(req, res, next) {
        return res.json({ message: "Hello World getPagination" });
    }
}

module.exports = new PostController();
