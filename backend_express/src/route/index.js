const Auth = require("./AuthRoute");
const Post = require("./PostRoute");
const Comment = require("./CommentRoute");
const Question = require("./QuestionRoute");

function route(app) {
    app.use("/api", Auth);
    app.use("/api/post", Post);
    app.use("/api/comment", Comment);
    app.use("/api/question", Question);
}

module.exports = route;
