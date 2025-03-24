import { useState } from "react";
import register from "../services/register";

const useRegister = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const registerAcc = async (accountData) => {
        try {
            setIsLoading(true);
            setError(null);
            const response = await register(accountData);
            return response;
        }
        catch (err) {
            setError(err);
            throw err;
        }
        finally {
            setIsLoading(false);
        }
    };

    return { registerAcc, isLoading, error };
};

export default useRegister;