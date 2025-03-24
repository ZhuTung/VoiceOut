import axios from "axios";

const getThoughts = async () => {
    try {
        const response = await axios.get(
            "http://localhost:3100/thoughts/get-thoughts"
        );

        return response.data;
    }
    catch (error) {
        throw error;
    }
}

export default getThoughts;