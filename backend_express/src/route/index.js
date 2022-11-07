const Auth = require("./AuthRoute");
const Post = require("./PostRoute");
const Comment = require("./CommentRoute");

function route(app) {
    app.use("/api", Auth);
    app.use("/api/post", Post);
    app.use("/api/comment", Comment);
}

module.exports = route;
