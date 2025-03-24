import getThoughts from "../services/getThoughts";
import { useState, useEffect } from "react";

const useGetThoughts = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getThoughts();
      setThoughts(data);
    };

    fetchData();
  }, []);

  return thoughts.data;
};

export default useGetThoughts;
