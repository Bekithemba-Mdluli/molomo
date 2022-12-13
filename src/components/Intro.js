import React from "react";
import Header from "./Header";

import "./Intro.css";

function Intro({ text }) {
  return (
    <div className="about__intro">
      <Header />
      <h1>{text}</h1>
    </div>
  );
}

export default Intro;
