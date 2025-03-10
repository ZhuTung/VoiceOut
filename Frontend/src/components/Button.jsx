import React from "react";
import "../styles/components/Button.css";
import { useNavigate } from "react-router-dom";

const Button = ({ onClick, children, black, white, to }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if(to) {
            navigate(to);
        }
        else if(onClick){
            onClick();
        }
    };

  return (
    <div>
      {black && (
        <div>
          <button className="black-btn" onClick={handleClick}>
            {children}
          </button>
        </div>
      )}

      {white && (
        <div>
          <button className="white-btn" onClick={handleClick}>
            {children}
          </button>
        </div>
      )}
    </div>
  );
};

export default Button;
