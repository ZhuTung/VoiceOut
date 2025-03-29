import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import "../../styles/pages/Mentor/givehelp.css";
import { ToastContainer } from "react-toastify";
import { Toast } from "../../components/Toast";
import useAddAdvices from "../../web-utils/hooks/useAddAdvices";

const GiveHelp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const client = location.state?.row;

  const clientTitle = client.title
  const clientEmail = client.email
  const mentorName = localStorage.getItem("userName")

  const [advice, setAdvice] = useState("");

  const addAdvice = useAddAdvices();

  const handleSubmit = async () => {
      if(!advice){
        Toast.error("Please do not fill in the blank.")
      }
      else {
        try{
          const body = {
            advice,
            mentorName,
            clientTitle,
            clientEmail
          };
  
          const response = await addAdvice(body);
          Toast.success(response);

          setTimeout(() => {
            navigate("/mentor-home");
          }, 3000)
        }
        catch (error) {
          Toast.error(error);
        }
      }
      
      setAdvice("");
    }

  return (
    <div>
        <ToastContainer></ToastContainer>
      <div>
        <Navbar type="client-mentor" user="Mentor"></Navbar>
      </div>

      <div className="container mt-3">
        <div>
          <p>From: {client.name}</p>
          <p>{client.thought}</p>
        </div>

        <div>
          <textarea
            name="thoughts"
            id="thoughts"
            className="txtArea"
            value={advice}
            placeholder="Share your advice..."
            onChange={(e) => setAdvice(e.target.value)}
          ></textarea>
        </div>

        <div className="d-flex justify-content-center pt-3">
          <Button black className="md-btn" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GiveHelp;
