const express = require("express");
const router = express.Router();

const CommentController = require("../app/controllers/CommentController");
const checkLogin = require("../app/middleware/checkLogin");

router.get("/:post_id", CommentController.get);
router.post("/:post_id", checkLogin, CommentController.post);
router.delete("/");
router.put("/");

module.exports = router;
