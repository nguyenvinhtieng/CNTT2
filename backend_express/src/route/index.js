const Auth = require("./AuthRoute");
const Post = require("./PostRoute");
const Comment = require("./CommentRoute");
const Question = require("./QuestionRoute");
const Bookmark = require("./BookMarkRoute");
const AnswerRoute = require("./AnswerRoute");

function route(app) {
    app.use("/api", Auth);
    app.use("/api/post", Post);
    app.use("/api/comment", Comment);
    app.use("/api/bookmark", Bookmark);
    app.use("/api/question", Question);
    app.use("/api/answer", AnswerRoute);
}

module.exports = route;
