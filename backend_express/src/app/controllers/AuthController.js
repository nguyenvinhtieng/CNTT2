const fetch = require("node-fetch")
const { backend_laravel, secret_key} = require("../../credentials")
const jwt = require('jsonwebtoken');
const User = require("../models/User")
const Bookmark = require("../models/Bookmark")
const multiparty = require("multiparty");
const uploadImages = require("../../utils/uploadImage");


class AuthController {
    async fetchDataUser(req, res, next) {
        let user = req.user;
        try {
            const data = await User.findOne({_id: user._id}).lean();
            const bookmarks = await Bookmark.find({user_id: user._id}).populate("post");
            data.bookmarks = bookmarks;
            return res.json({status: true, message: "Lấy dữ liệu thành công", user: data});
        }catch(e) {
            return res.json({status: false, message: "Có lỗi xảy ra"});
        }
    }

    async fetchUserInfo(req, res, next) {
        try {
            const {slug} = req.body;
            const user = await User.findOne({profileSlug: slug});
            if(!user) {
                return res.json({status: false, message: "Không tìm thấy user này"});
            }
            return res.json({status: true, message: "Lấy dữ liệu thành công", user});
        } catch(e) {
            return res.json({status: false, message: "Lỗi server"});
        }
    }

    async changeAvatar(req, res, next) {
        const user = req.user;
        try {
            const form = new multiparty.Form();
            form.parse(req, async (err, _, files) => {
                if (err) {
                    return res.json({ status: false, message: "Có lỗi xảy ra" });
                }
                if(files.avatar) {
                    if (files?.avatar[0]?.size > 0) {
                        let avatar_link = await uploadImages(files.avatar[0]);
                        if(avatar_link) {
                            let userFind = await User.findOneAndUpdate({ _id: user._id }, { avatar: avatar_link }, { new: true });
                            return res.json({ status: true, message: "Cập nhật ảnh đại diện thành công", avatar_link });
                        }
                    }else {
                        res.json({ status: false, message: "Ảnh không hợp lệ" });
                    }
                }else {
                    return res.json({ status: false, message: "Không tìm thấy ảnh" });
                }


            });
        }catch(err) {
            return res.json({ status: false, message: "Có lỗi xảy ra" });
        }
    }
    async userUpdate(req, res, next) {
        const user = req.user;
        try {
            const { fullname, interesting, github, facebook, twitter, linkedin, website, instagram} = req.body;
            let interstingUser = interesting.split("~~");
            if(interstingUser.length == 1 && interstingUser[0] == "") {
                interstingUser = [];
            }
            const userFind = await User.findOneAndUpdate({_id: user._id}, {fullname, interesting: interstingUser, github, facebook, twitter, linkedin, website, instagram}, {new: true});
            return res.json({status: true, message: "Cập nhật thành công", user: userFind});
        }catch(err) {
            return res.json({ status: false, message: "Có lỗi xảy ra" });
        }
    }
    async login(req, res, next) {
        try {
            const {username, password} = req.body;

            if(username == "" || password == "") {
                return res.json({status: false, message: "Tên đăng nhập hoặc mật khẩu không được để trống"});
            }
            const user = await User.findOne({username});
            console.log("User: ", username);
            if(!user) {
                return res.json({status: false, message: "Tài khoản hoặc mật khẩu không đúng"});   
            }
            let token = jwt.sign({ user }, secret_key);
            return res.json({status: true, message: "Đăng nhập thành công", token, user});

            // const resp = await fetch(`${backend_laravel}/login`, {
            //     method: "POST",
            //     headers: { "Content-Type": "application/json" },
            //     body: JSON.stringify({
            //         username,
            //         password
            //     })
            // });
            // const data = await resp.json();
            // if(data.status) {
            //     return res.json({status: false, message: "Tên đăng nhập hoặc mật khẩu không đúng"});
            // }else {
            //     let userData = data.user;
            //     let token = jwt.sign({ user: userData }, secret_key);
            //     return res.json({status: true, message: "Đăng nhập thành công", token});
            // }
        } catch(e) {
            return res.json({status: false, message: "Có lỗi xảy ra"});
        }
    }
    async fakeLogin(req, res, next) {
        try {
            const {username, password} = req.body;
            let userData = {
                username: "User default",
                password,
                fullname: "Nguyễn Văn A",
                email: "v@gmail.com",
                phone: "0123456789",
                role: "user"
            };
            let token = jwt.sign({ user: userData }, secret_key);
            return res.json({status: true, message: "Đăng nhập thành công", token, user: userData});
        } catch(e) {
            return res.json({status: false, message: "Có lỗi xảy ra"});
        }
    }
    async register(req, res, next) {
        // register
        try {
            const {username, password, name, email} = req.body;

            if(username == "" || password == "" || name == "" || email == "") {
                return res.json({status: false, message: "Vui lòng điền đầy đủ thông tin"});
            }

            const oldUser = await User.findOne({username});
            if(oldUser) {
                return res.json({status: false, message: "Tên đăng nhập đã tồn tại"});
            }
            const oldUser2 = await User.findOne({email});
            if(oldUser2) {
                return res.json({status: false, message: "Email đã tồn tại"});
            }

            const user = new User({
                username,
                password,
                fullname: name,
                email
            })
            // fetch Data to server


            await user.save();
            return res.json({status: true, message: "Đăng ký thành công"});
        }catch(err) {
            return res.json({ status: false, message: "Có lỗi xảy ra" });
        }
    }
    forgotPass(req, res, next) {
        return res.json({ message: "Hello World" });
    }
    changePass(req, res, next) {
        return res.json({ message: "Hello World" });
    }
}

module.exports = new AuthController();
