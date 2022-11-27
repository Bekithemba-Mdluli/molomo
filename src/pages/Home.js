import React from "react";
import Header from "../components/Header";
import Socials from "../components/Socials";

import bg from "../images/welding.jpg";

import "./Home.css";
function Home() {
  return (
    <div className="home">
      <Header />
      <Socials />
      <h1 className="home__title">A Catchy Title Typed Over Multiple Lines</h1>
      <div className="home__image">
        <img src={bg} alt="Welding" />
      </div>
    </div>
  );
}

export default Home;
