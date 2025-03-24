import axios from "axios";

const login = async (accountData) => {
  try {
    const response = await axios.post(
      "http://localhost:3100/accounts/login",
      accountData
    );

    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export default login;
