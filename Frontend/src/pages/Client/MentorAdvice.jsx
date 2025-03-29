import React from "react";
import Navbar from "../../components/Navbar";
import useGetAdvices from "../../web-utils/hooks/useGetAdvices";
import Card from "../../components/Card";
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
          {data &&
            data
              .filter((row) => row.clientEmail === email)
              .map((row) => (
                <Card border>
                  <div>
                    <h4 className="pt-2 pb-2">For your help: {row.clientTitle}</h4>
                    <p>{row.advice}</p>
                    <p>From your dear mentor, {row.mentorName}</p>
                  </div>
                </Card>
              ))}
        </div>
      </div>
    </div>
  );
};

export default MentorAdvice;
