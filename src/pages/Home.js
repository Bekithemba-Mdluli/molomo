import React from "react";
import Header from "../components/Header";
import Panel from "../components/Panel";
import Slider from "../components/Slider";

import "./Home.css";
function Home() {
  return (
    <div className="home">
      <Header />
      <Panel />
      <div className="home__title">
        <h1>A Catchy Title typed over multiple lines</h1>
      </div>
      <Slider />
    </div>
  );
}

export default Home;
