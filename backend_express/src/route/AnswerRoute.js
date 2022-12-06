const express = require("express");
const router = express.Router();

const AnswerController = require("../app/controllers/AnswerController");
const checkLogin = require("../app/middleware/checkLogin");

// router.get("/:question_id", AnswerController.get);
router.post("/", checkLogin, AnswerController.addAnswer);
// router.delete("/:id", AnswerController.delete);
// router.put("/:id", AnswerController.edit);

module.exports = router;
