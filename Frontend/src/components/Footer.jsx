import React from "react";
import "../styles/components/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footerBackground">
      <div className="d-flex justify-content-around footerContainer pt-3 pb-3">
        <div>
          <div>All Rights @2024 Reserved</div>
          <div>Designed By Lee Zhu Tung</div>
        </div>

        <div className="text-center">
            <h2>What are you waiting for?</h2><h3>Just <span className="voiceOutFooter">Voice Out</span></h3>
        </div>
        <div>
            <p className="mb-0"><FontAwesomeIcon icon={faInstagram} /><span>My Instagram</span></p>
            <p className="mb-0"><FontAwesomeIcon icon={faFacebook} /><span>My Facebook</span></p>
            <p className="mb-0"><FontAwesomeIcon icon={faTwitter} /><span>My Twitter</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
