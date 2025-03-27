import getAdvices from "../services/getAdvices";
import { useState, useEffect } from "react";

const useGetAdvices = (email) => {
  const [advices, setAdvices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAdvices(email);
      setAdvices(data);
    };

    fetchData();
  }, []);

  return advices.data;
};

export default useGetAdvices;
