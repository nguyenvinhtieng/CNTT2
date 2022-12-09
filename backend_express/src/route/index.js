const Auth = require("./AuthRoute");
const Post = require("./PostRoute");
const Comment = require("./CommentRoute");
const Question = require("./QuestionRoute");
const Bookmark = require("./BookMarkRoute");
const AnswerRoute = require("./AnswerRoute");
const ManageRoute = require("./ManageRoute");
const ReportRoute = require("./ReportRoute");

function route(app) {
    app.use("/api", Auth);
    app.use("/api/post", Post);
    app.use("/api/comment", Comment);
    app.use("/api/bookmark", Bookmark);
    app.use("/api/question", Question);
    app.use("/api/answer", AnswerRoute);
    app.use("/api/manage", ManageRoute);
    app.use("/api/report", ReportRoute);
}

module.exports = route;
