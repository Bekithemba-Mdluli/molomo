import React from "react";
import Details from "../components/Details";
import Header from "../components/Header";
import Socials from "../components/Socials";

import bg from "../images/welding.jpg";

import "./Home.css";
function Home() {
  return (
    <div className="home">
      <div className="home__hero">
        <Header />
        <div className="home__hero-content">
          <Socials />
          <h1 className="home__title">
            A Catchy Title Typed Over Multiple Lines
          </h1>
        </div>
      </div>

      {/* <div className="home__contentent"> */}

      {/* <div className="home__image">
        <img src={bg} alt="Welding" />
      </div> */}
      {/* </div> */}
      <Details />
      <h1>Debug</h1>
    </div>
  );
}

export default Home;
