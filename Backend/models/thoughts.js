const mongoose = require('mongoose');

const ThoughtsSchema = new mongoose.Schema({
    thought: { type: String, required: true }
});

module.exports = mongoose.model('Thoughts', ThoughtsSchema);