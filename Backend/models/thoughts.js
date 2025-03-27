const mongoose = require('mongoose');

const ThoughtsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    thought: { type: String, required: true },
    email: { type: String, required: true },
    name: { type: String },
});

module.exports = mongoose.model('Thoughts', ThoughtsSchema);