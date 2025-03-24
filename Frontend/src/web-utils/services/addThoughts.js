import axios from "axios";

const addThoughts = async (thought) => {
    try {
        const response = await axios.post(
            "http://localhost:3100/thoughts/add-thoughts",
            thought
        );

        return response.data.message;
    }
    catch (error) {
        throw error.response;
    }
}

export default addThoughts;