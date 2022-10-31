const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Answer = new Schema({
    author_username: { type: String },
    author_name: { type: String },
    content: { type: String },
    is_confirm: { type: Boolean, default: false }, 
}, {
    timestamps: true,
});

module.exports = mongoose.model('Answer', Answer);