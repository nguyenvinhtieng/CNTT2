const jwt = require("jsonwebtoken");
const { secret_key } = require("../../credentials");

async function checkLogin(req, res, next) {
    let header = req.headers.authorization;
    let token = header && header.split(" ")[1];
    if (!token) {
        return res.json({ success: false, message: "Chưa được xác thực" });
    }
    try {
        let decoded = jwt.verify(token, secret_key);
        const user = decoded.user;
        req.user = user;
        next();
    } catch (error) {
        return res.json({ success: false, message: "Có lỗi xảy ra" });
    }
}

module.exports = checkLogin;
