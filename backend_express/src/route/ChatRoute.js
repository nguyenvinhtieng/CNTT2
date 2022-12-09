const express = require("express");
const router = express.Router();

const ChatController = require("../app/controllers/ChatController");
const checkLogin = require("../app/middleware/checkLogin");

router.post("/create-thread", checkLogin, ChatController.createThread);
router.get("/get-all-thread", checkLogin, ChatController.getAllThread);
router.post("/chat",checkLogin, ChatController.getAllThread);
router.post("/delete",checkLogin, ChatController.deleteChat);

module.exports = router;
