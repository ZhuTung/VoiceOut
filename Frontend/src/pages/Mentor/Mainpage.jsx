import React from "react";
import useGetThoughts from "../../web-utils/hooks/useGetThoughts";
import { ToastContainer } from "react-toastify";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { useNavigate } from "react-router-dom";

const MentorMainpage = () => {
  const data = useGetThoughts();
  const navigate = useNavigate();

  const handleGiveHelp = (row) => {
    navigate("/give-help", { state: { row } });
  };

  return (
    <div>
      <ToastContainer />
      <div>
        <Navbar type="client-mentor" user="Mentor"></Navbar>
      </div>

      <div className="container">
        <div>
          {data &&
            data.map((row) => (
              <Card border>
                <h4>{row.title}</h4>
                <p className="m-0 pb-2">{row.thought}</p>
                <p className="m-0">By: {row.name}</p>
                <div className="d-flex justify-content-end pb-1">
                  <Button black onClick={() => handleGiveHelp(row)}>
                    Give Help
                  </Button>
                </div>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MentorMainpage;
