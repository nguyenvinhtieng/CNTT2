const express = require("express");
const router = express.Router();

const QuestionController = require("../app/controllers/QuestionController");
const checkLogin = require("../app/middleware/checkLogin");

router.get("/:slug", QuestionController.get);
router.get("/", QuestionController.getAll);
router.post("/", checkLogin, QuestionController.post);
router.delete("/:slug", QuestionController.delete);
router.put("/:slug", QuestionController.edit);

module.exports = router;
