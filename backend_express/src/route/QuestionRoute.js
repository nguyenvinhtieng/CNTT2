const express = require("express");
const router = express.Router();

const QuestionController = require("../app/controllers/QuestionController");
const checkLogin = require("../app/middleware/checkLogin");

router.get("/", QuestionController.getPagination);
router.get("/:slug", QuestionController.getQuestionDetail);
router.post("/", checkLogin, QuestionController.addQuestion);
router.delete("/:slug", QuestionController.delete);
router.put("/:slug", QuestionController.edit);

module.exports = router;
