const Account = require('../models/account');

const loginService = async (data) => {
    return data;
}

const registerService = async (data) => {
    const usernameExists = await Account.findOne( {email: data.email });

    if(usernameExists) {
        return {
            success: false,
            message: "Email already exists"
        };
    }
    else {
        const account = new Account(data);
        const savedAccount = await account.save();
        
        return {
            success: true,
            message: `Account created successfully for ${savedAccount.email}`
        };
    }
}

module.exports = {
    loginService,
    registerService
}