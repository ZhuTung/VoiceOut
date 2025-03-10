const express = require('express')
const c_Accounts = require('../controllers/c_Accounts')
const route = express.Router()

const {
    useLogin,
    useRegister
} = c_Accounts

route.post("/login", useLogin)
route.post("/register", useRegister)

module.exports = route