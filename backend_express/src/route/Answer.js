const express = require("express");
const router = express.Router();

const AnswerController = require("../app/controllers/AnswerController");
const checkLogin = require("../app/middleware/checkLogin");

router.get("/:question_id", AnswerController.get);
router.post("/:question_id", checkLogin, AnswerController.post);

module.exports = router;
