import React from "react";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import Footer from "../../components/Footer";

const Homepage = () => {
  return (
    <div className="homeBody">
      <Navbar type="home"></Navbar>
      <main>
        <div className="text-center mt-5 pb-3">
          <h1>
            Here me out!
            <br />
            You do not have to fight your battle <span>Alone!!!</span>
          </h1>
        </div>

        <Card id="seek-help" border>
          <h3 className="text-center pb-3">Seek Help</h3>
          <p>
            At <b>Voice Out</b>, we believe that no one should suffer in
            silence. Life can be overwhelming, and sometimes, simply venting
            isn’t enough. That’s why <b>Voice Out</b> is here—to provide a safe
            space where you can find the support and guidance you need. Whether
            you're struggling with personal challenges, mental health concerns,
            or just need someone to listen, reaching out can be the first step
            toward healing.
            <br />
            <br />
            Seeking help is not a sign of weakness; it’s an act of strength. It
            allows you to gain clarity, feel heard, and connect with resources
            that can truly make a difference in your life. By using our
            platform, you’re not alone—there’s a community ready to support you.
            Take that step today because your voice matters, and so does your
            well-being.
          </p>
        </Card>

        <Card id="intentions">
          <div className="text-center pt-3 pb-3">
            <h3>The Intentions</h3>
            <div className="gridContainer">
              <div
                className="item item-1"
                data-text="Hear the Voice within you, the one longing to be understood."
              >
                Hear the Voice
              </div>
              <div
                className="item item-2"
                data-text="Surrender Your Heart to a space where you can express without fear."
              >
                Surrender Your Heart
              </div>
              <div
                className="item item-3"
                data-text="Let your emotions flow freely, because Words Heal You—they bring comfort, clarity, and the strength to move forward."
              >
                Words Heals You
              </div>
            </div>
          </div>
        </Card>

        <Card id="about-us" border>
          <div>
            <h3 className="text-center pb-3">About Us</h3>
            <p>
              <b>Voice Out</b> is a platform built to give people a safe and
              judgment-free space to express their thoughts, emotions, and
              struggles. We understand that life can be overwhelming, and
              sometimes, all you need is a place to vent or seek support. Our
              mission is to break the stigma around emotional expression and
              mental well-being by providing a space where everyone feels heard
              and valued.
              <br />
              <br />
              Whether you need to share your thoughts, connect with others who
              understand, or seek professional guidance, <b>Voice Out</b> is
              here for you. We believe that speaking up is the first step toward
              healing, and no one should have to face their struggles alone.
              Your voice matters—let it be heard.
            </p>
          </div>
        </Card>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default Homepage;
