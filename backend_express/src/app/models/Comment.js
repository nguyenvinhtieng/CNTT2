const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Comment = new Schema(
    {
        author_username: { type: String },
        author_name: { type: String },
        post_id: { type: Schema.Types.ObjectId, ref: "Post" },
        content: { type: String },
        reply_id: { type: String },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model("Comment", Comment);
