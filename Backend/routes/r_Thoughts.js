const express = require('express');
const c_Thoughts = require('../controllers/c_Thoughts');
const route = express.Router()

const {
    useAddThoughts,
    useGetThoughts
} = c_Thoughts

route.get("/get-thoughts", useGetThoughts);

route.post("/add-thoughts", useAddThoughts);

module.exports = route