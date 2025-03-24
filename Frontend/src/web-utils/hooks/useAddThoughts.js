import addThoughts from "../services/addThoughts";

const useAddThoughts = () => {
    const createThoughts = async (thought) => {
        try{
            const response = await addThoughts(thought);
            return response;
        }
        catch (err) {
            throw err;
        }
    };

    return createThoughts;
};

export default useAddThoughts;