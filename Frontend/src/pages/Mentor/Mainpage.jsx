import React, { useEffect } from "react";
import useGetThoughts from "../../web-utils/hooks/useGetThoughts";
import { ToastContainer } from "react-toastify";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import "../../styles/pages/Mentor/mainpage.css";
const MentorMainpage = () => {
  const data = useGetThoughts();

  console.log(data);
  return (
    <div>
      <ToastContainer />
      <div>
        <Navbar type="client-mentor"></Navbar>
      </div>

      <div className="container">
        <div>
          {data &&
            data.map((thought) => (
              <div className="thoughtContainer">
                <p className="m-0">{thought.thought}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MentorMainpage;
