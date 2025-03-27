import React from "react";
import "../styles/components/Navbar.css";
import Button from "./Button";

const Navbar = ({ type, user }) => {
  const userType = user;

  const name = localStorage.getItem("userName");

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
          <div className="container d-flex justify-content-between">
            <div>
              <h1>
                <a
                  href={userType === "Mentor" ? "/mentor-home" : "client-home"}
                  style={{
                    color: userType === "Mentor" ? "white" : "black",
                    textDecoration: "none",
                  }}
                >
                  VoiceOut
                </a>
              </h1>
            </div>
            <div
              className={`${userType === "Mentor" ? "w-25" : "w-50"} pt-md-2`}
            >
              <div className="d-flex flex-row justify-content-around">
                {userType === "Client" && (
                  <div className="pt-1 pb-2 m-0">
                    <a href="/mentor-advice" className="link">
                      Mentor's Advice
                    </a>
                  </div>
                )}

                <div>
                  <p
                    className="pt-1 pb-2 m-0 text-center"
                    style={{ color: userType === "Mentor" ? "white" : "black" }}
                  >
                    Hello, {name}
                  </p>
                </div>

                {userType === "Mentor" && (
                  <div>
                    <Button white to="/">
                      Log Out
                    </Button>
                  </div>
                )}

                {userType === "Client" && (
                  <div>
                    <Button black to="/">
                      Log Out
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
