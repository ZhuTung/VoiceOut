import React from "react";
import "../styles/components/Navbar.css";
import Button from "./Button";

const Navbar = ({ type }) => {
  const userType = "Client";
  return (
    <div>
      {type == "home" && (
        <div className="blackNav">
          <div className="container d-flex justify-content-between">
            <div>
              <h1 className="h1Logo">
                <a href="/">VoiceOut</a>
              </h1>
            </div>

            <div className="d-flex align-items-center">
              <ul className="d-flex">
                <li>
                  <a href="#seek-help">Seek Help</a>
                </li>
                <li>
                  <a href="#contact-us">Contact Us</a>
                </li>
                <li>
                  <a href="#about-us">About Us</a>
                </li>
              </ul>

              <Button white to="/login">
                Login
              </Button>
            </div>
          </div>
        </div>
      )}

      {type == "client-mentor" && (
        <div className={userType === "Mentor" ? "blueNav" : "redNav"}>
          <div className="container d-flex justify-content-end">
            <div className="w-25 pt-md-2">
              <div className="d-flex flex-row justify-content-around">
                <div>
                  <p className="pt-1 pb-2 m-0 text-center">Hello, Test</p>
                </div>
                <div>
                  <Button white to="/">
                    Log Out
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
