const express = require('express');
const c_Advices = require('../controllers/c_Advices');
const route = express.Router()

const {
    useAddAdvices,
    useGetAdvices
} = c_Advices

route.get("/get-advices/:email", useGetAdvices);

route.post("/add-advices", useAddAdvices);

module.exports = route