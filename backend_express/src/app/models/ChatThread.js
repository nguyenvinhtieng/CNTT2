const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChatThread = new Schema(
    {
        users: [{ type: Schema.Types.ObjectId, ref: "User" }],
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model("ChatThread", ChatThread);
