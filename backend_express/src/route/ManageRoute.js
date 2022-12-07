const express = require('express');
const router = express.Router();

const ManageController = require('../app/controllers/ManageController.js');
const checkLogin = require('../app/middleware/checkLogin.js')

router.get("/users", checkLogin, ManageController.getUsers);
router.post("/change-status-user", checkLogin, ManageController.changeStatusUser);

module.exports = router;
