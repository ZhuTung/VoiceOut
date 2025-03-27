const s_Advices = require("../services/s_Advices");

const { 
    addAdvicesService,
    getAdvicesService
} = s_Advices;

const useAddAdvices = async (req, res) => {
  const data = req.body;
  console.log(data)
  const result = await addAdvicesService(data);

  return res.status(200).send({
    message: result
  });
};

const useGetAdvices = async (req, res) => {
    const email = req.params.email;
    const data = await getAdvicesService(email);

    return res.status(200).send({
        data: data
    })
}

module.exports = {
    useAddAdvices,
    useGetAdvices
}
