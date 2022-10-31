const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;
mongoose.plugin(slug);

const Question = new Schema({
    author_username: { type: String },
    author_name: { type: String },
    title: { type: String },
    content: { type: String },
    tags: { type: Array, default: [] },
    pin: { type: Boolean, default: false },
    slug: { type: String, slug: "title", unique: true },
    status: { type: Boolean, default: false }, // false: not resolved, true: resolved
}, {
    timestamps: true,
});

module.exports = mongoose.model('Question', Question);