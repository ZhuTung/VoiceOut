import { useState } from "react";
import login from "../services/login";

const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const loginAcc = async (accountData) => {
        try {
            setIsLoading(true);
            setError(null);
            const response = await login(accountData);
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

    return { loginAcc, isLoading, error };
};

export default useLogin;