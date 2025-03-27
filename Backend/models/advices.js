const mongoose = require('mongoose');

const AdvicesSchema = new mongoose.Schema({
    advice: { type: String, required: true },
    mentorName: { type: String, required: true },
    clientEmail: { type: String, required: true }
});

module.exports = mongoose.model("Advices", AdvicesSchema);