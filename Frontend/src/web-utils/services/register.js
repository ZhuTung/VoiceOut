import axios from "axios";

const register = async (accountData) => {
  try {
    const response = await axios.post(
      "http://localhost:3100/accounts/register",
      accountData
    );
    return response.data.message;
  } catch (error) {
    throw error.response.data.message;
  }
};

export default register;
