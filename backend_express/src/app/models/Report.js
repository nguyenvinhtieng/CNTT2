const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Report = new Schema({
    username: { type: String },
    type: { type: String, default: "post" }, // post or comment or question
    report_for: { type: String },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Report', Report);