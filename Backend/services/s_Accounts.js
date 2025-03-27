const Account = require('../models/account');

const loginService = async (data) => {
    let result = {
        success: true,
        category: "",
        message: ""
    }

    const accountExists = await Account.findOne( { email: data.email });

    if(!accountExists) {
        result.success = false;
        result.message = "Account did not exists";
        return result;
    }

    if(data.password === accountExists.password) {
        result.success = true;
        result.message = "Login Success"
        result.category = accountExists.category
        result.email = accountExists.email
        result.name = accountExists.name
    }
    else{
        result.success = false;
        result.message = "Incorrect Password";
    }

    return result;
}

const registerService = async (data) => {
    let result = {
        success: true,
        message: ""
    }

    const accountExists = await Account.findOne( {email: data.email });

    if(accountExists) {
        result.success = false,
        result.message = "Email already exists"
    }
    else {
        const account = new Account(data);
        await account.save();

        result.success = true,
        result.message = "Account created! You will be redirected to login"
    }
    return result
}

module.exports = {
    loginService,
    registerService,
}