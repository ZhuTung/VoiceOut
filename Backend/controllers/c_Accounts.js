const s_Accounts = require('../services/s_Accounts')

const {
    loginService,
    registerService,
} = s_Accounts

const useLogin = async (req, res) => {
    try {
        const data = req.body;
        const result = await loginService(data);

        if(!result.success) {
            res.status(400).send({
                message: result.message
            });
        }
        else {
            res.status(200).send({
                message: result.message,
                category: result.category,
                email: result.email,
                name: result.name
            });
        }
    }
    catch (err) {
        res.status(500).send("Error in request:", err);
    }
}

const useRegister = async (req, res) => {
    try {
        const data = req.body;
        const result = await registerService(data);

        if(!result.success){
            res.status(400).send({
                message: result.message
            });
        }
        else {
            res.status(200).send({
                message: result.message
            });
        }
    }
    catch (err) {
        res.status(500).send("Error in request:", err);
    }
}


module.exports = {
    useLogin,
    useRegister
}