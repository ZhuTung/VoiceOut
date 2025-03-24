const s_Thoughts = require("../services/s_Thoughts");

const { 
    addThoughtsService,
    getThoughtsService
} = s_Thoughts;

const useAddThoughts = async (req, res) => {
  const data = req.body;
  const result = await addThoughtsService(data);

  return res.status(200).send({
    message: result
  });
};

const useGetThoughts = async (req, res) => {
    const data = await getThoughtsService();

    return res.status(200).send({
        data: data
    })
}

module.exports = {
    useAddThoughts,
    useGetThoughts
}
