const multiparty = require("multiparty");
const User = require("../models/User");
const Comment = require("../models/Comment");

class ManageController {
    async getUsers(req, res) {
        try {
            const users = await User.find({})
            return res.status(200).json({ status: true, message: "Danh sách tất cả người dùng", users: users });
        }catch(error) {
            return res.status(500).json({ status: false, message: error.message });
        }
    }
    async changeStatusUser(req, res) {
        try {
            const { user_id, status } = req.body;
            if(user_id == "" || user_id == undefined) {
                return res.json({ status: false, message: "Không có user_id" });
            }
            if(status == "" || status == undefined) {
                return res.json({ status: false, message: "Không có status" });
            }

            await User.findOneAndUpdate({ _id: user_id }, { $set: { status: status } });
            return res.json({ status: true, message: "Thay đổi trạng thái thành công" });
        }catch(err) {
            return res.status(500).json({ status: false, message: error.message });
        }
    }
}

module.exports = new ManageController();
