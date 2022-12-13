import React from "react";
import Social from "./Social";

import "./Panel.css";

import instagram from "../images/icons/icon-instagram.webp";
import linkedIn from "../images/icons/icon-linkedin.webp";
import facebook from "../images/icons/icon-facebook.webp";

const socialM = [
  { img: instagram, name: "Instagram" },
  { img: linkedIn, name: "LinkedIn" },
  { img: facebook, name: "Facebook" },
];

function Panel() {
  return (
    <div className="panel hide-for-mobile">
      {socialM.map((e, i) => (
        <Social key={i} image={e.img} name={e.name} />
      ))}
    </div>
  );
}

export default Panel;
