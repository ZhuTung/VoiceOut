import addAdvices from "../services/addAdvices";

const useAddAdvices = () => {
    const createAdvices = async (advice) => {
        try{
            const response = await addAdvices(advice);
            return response;
        }
        catch (err) {
            throw err;
        }
    };

    return createAdvices;
};

export default useAddAdvices;