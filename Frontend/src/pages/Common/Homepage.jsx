import React from "react";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import Footer from "../../components/Footer";

const Homepage = () => {
  return (
    <div>
      <Navbar type="home"></Navbar>
      <main>
      <div className="text-center mt-5 pb-3">
        <h1>
          Here me out!
          <br />
          You do not have to fight your battle <span>Alone!!!</span>
        </h1>
      </div>

      <Card border>
        <p>Testing 123!</p>
      </Card>
      </main>
      
      <Footer></Footer>
    </div>
  );
};

export default Homepage;
