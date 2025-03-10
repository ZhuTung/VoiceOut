import React from "react";
import "../styles/components/Navbar.css";
import Button from "./Button";

const Navbar = () => {
    
  return (
    <div className="blackNav">
      <div className="container d-flex justify-content-between">
        <div>
        <h1 className="h1Logo"><a href="/">VoiceOut</a></h1>
        </div>

        <div className="d-flex align-items-center">
          <ul className="d-flex">
            <li><a href="#seek-help">Seek Help</a></li>
            <li><a href="#contact-us">Contact Us</a></li>
            <li><a href="#about-us">About Us</a></li>
          </ul>

          <Button white to="/login">Login</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
