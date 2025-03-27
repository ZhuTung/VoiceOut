import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import "../../styles/pages/Client/mainpage.css";
import Button from "../../components/Button";
import useAddThoughts from "../../web-utils/hooks/useAddThoughts";
import { ToastContainer } from "react-toastify";
import { Toast } from "../../components/Toast";

const ClientMainpage = () => {
  const [title, setTitle] = useState("");
  const [thought, setThought] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const addThought = useAddThoughts();

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    const storedName = localStorage.getItem("userName");
    setEmail(storedEmail);
    setName(storedName);
  });

  const handleSubmit = async () => {
    if (!(thought && title)) {
      Toast.error("Please do not fill in the blank.");
    } else {
      try {
        const data = {
          title,
          thought,
          email,
          name,
        };

        const response = await addThought(data);
        Toast.success(response);
      } catch (error) {
        Toast.error(error);
      }

      setTitle("");
      setThought("");
    }
  };

  return (
    <div>
      <ToastContainer />
      <div>
        <Navbar type="client-mentor" user="Client"></Navbar>
      </div>

      <div className="container">
        <h3 className="text-center mt-3 mb-3 pt-2 pb-2">
          Share your pain, share your thoughts to us
        </h3>

        <div>
          <input
            name="title"
            id="title"
            className="txtTitle"
            placeholder="Enter your title"
          ></input>
        </div>

        <div>
          <textarea
            name="thoughts"
            id="thoughts"
            className="txtArea"
            value={thought}
            onChange={(e) => setThought(e.target.value)}
            placeholder="Share your thoughts..."
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

export default ClientMainpage;
