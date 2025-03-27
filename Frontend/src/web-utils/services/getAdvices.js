import axios from "axios";

const getAdvices = async (email) => {
    try {
        const response = await axios.get(
            `http://localhost:3100/advices/get-advices/${email}`
        );

        return response.data;
    }
    catch (error) {
        throw error;
    }
}

export default getAdvices;