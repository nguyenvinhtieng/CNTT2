const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostReaction = new Schema({
    post_id: { type: String },
    username: { type: String },
    type: { type: String, default: "like" },
}, {
    timestamps: true,
});

module.exports = mongoose.model('PostReaction', PostReaction);