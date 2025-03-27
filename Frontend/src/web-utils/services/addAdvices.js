import axios from "axios";

const addAdvices = async (advice) => {
    try {
        const response = await axios.post(
            "http://localhost:3100/advices/add-advices",
            advice
        );

        return response.data.message;
    }
    catch (error) {
        throw error.response;
    }
}

export default addAdvices;