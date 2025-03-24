const Thoughts = require('../models/thoughts')

const addThoughtsService = async (data) => {
    const thought = new Thoughts(data);
    await thought.save();

    message = "Thank you for sharing your thoughts";

    return message;
}

const getThoughtsService = async () => {
    const data = await Thoughts.find();

    return data;
}

module.exports = {
    addThoughtsService,
    getThoughtsService
}