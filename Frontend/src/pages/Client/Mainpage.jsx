import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import '../../styles/pages/Client/mainpage.css'
import Button from "../../components/Button";
import useAddThoughts from "../../web-utils/hooks/useAddThoughts";
import { ToastContainer } from "react-toastify";
import { Toast } from "../../components/Toast";

const ClientMainpage = () => {
  const [thought, setThought] = useState("");

  const addThought = useAddThoughts();

  const handleSubmit = async () => {
    if(!thought){
      Toast.error("Please do not fill in the blank.")
    }
    else {
      try{
        const data = {
          thought
        };

        const response = await addThought(data);
        Toast.success(response);
      }
      catch (error) {
        Toast.error(error);
      }
    }
    

    setThought("");

  }
  return (
    <div>
      <ToastContainer />
      <div>
        <Navbar type="client-mentor"></Navbar>
      </div>

      <div className="container">
        <h3 className="text-center mt-3 mb-3 pt-2 pb-2">Share your pain, share your thoughts to us</h3>

        <div>
          <textarea name="thoughts" id="thoughts" className="txtArea" value={thought} onChange={(e) => setThought(e.target.value)}>
          </textarea>
        </div>

        <div className="d-flex justify-content-center pt-3">
          <Button black className="md-btn" onClick={handleSubmit}>Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default ClientMainpage;
