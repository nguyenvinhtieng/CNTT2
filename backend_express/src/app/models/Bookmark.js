const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Bookmark = new Schema({
    post_id: { type: String },
    username: { type: String },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Bookmark', Bookmark);