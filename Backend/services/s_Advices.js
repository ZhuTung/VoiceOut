const Advices = require('../models/advices')

const addAdvicesService = async (data) => {
    const thought = new Advices(data);
    await thought.save();

    message = "Your advice wil truly help the one that needs. Thank you for playing your part";

    return message;
}

const getAdvicesService = async (email) => {
    const data = await Advices.find({ clientEmail: email });

    return data;
}

module.exports = {
    addAdvicesService,
    getAdvicesService
}