import React from "react";
import Navbar from "../../components/Navbar";
import useGetAdvices from "../../web-utils/hooks/useGetAdvices";

const MentorAdvice = () => {
  const email = localStorage.getItem("userEmail");
  const data = useGetAdvices(email);

  return (
    <div>
      <div>
        <Navbar type="client-mentor" user="Client"></Navbar>
      </div>

      <div className="container">
        <div>
            {data && data.map((row) => 
            <div>
                <p>{row.advice}</p>
                <p>{row.mentorName}</p>
        </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default MentorAdvice;
