import React from "react";
import Details from "../components/Details";
import Header from "../components/Header";
import Panel from "../components/Panel";
import Services from "../components/Services";
import Slider from "../components/Slider";

import "./Home.css";
function Home() {
  return (
    <div className="home">
      <div className="hero">
        <Header />
        <Panel />
        <div className="home__title">
          <h1>A Catchy Title typed over multiple lines</h1>
        </div>
        <Slider />
      </div>
      <Details />
      <Services />
    </div>
  );
}

export default Home;
