const fetch = require("node-fetch")
const { backend_laravel, secret_key} = require("../../credentials")
const jwt = require('jsonwebtoken');

class AuthController {
    async login(req, res, next) {
        try {
            const {username, password} = req.body;

            if(username == "" || password == "") {
                return res.json({status: false, message: "Tên đăng nhập hoặc mật khẩu không được để trống"});
            }

            const resp = await fetch(`${backend_laravel}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username,
                    password
                })
            });
            const data = await resp.json();
            if(data.status) {
                return res.json({status: false, message: "Tên đăng nhập hoặc mật khẩu không đúng"});
            }else {
                let userData = data.user;
                let token = jwt.sign({ user: userData }, secret_key);
                return res.json({status: true, message: "Đăng nhập thành công", token});
            }
        } catch(e) {
            return res.json({status: false, message: "Có lỗi xảy ra"});
        }
    }

    register(req, res, next) {
        return res.json({ message: "Hello World" });
    }
    forgotPass(req, res, next) {
        return res.json({ message: "Hello World" });
    }
    changePass(req, res, next) {
        return res.json({ message: "Hello World" });
    }
}

module.exports = new AuthController();
