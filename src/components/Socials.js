import React from "react";
import Social from "./Social";

import "./Socials.css";

import instagram from "../images/icons/icon-instagram.png";
import linkedIn from "../images/icons/icon-linkedin.png";
import facebook from "../images/icons/icon-facebook.png";

const socialM = [
  { img: instagram, name: "Instagram" },
  { img: linkedIn, name: "LinkedIn" },
  { img: facebook, name: "Facebook" },
];

function Socials() {
  return (
    <div className="socials">
      {socialM.map((e, i) => (
        <Social key={i} image={e.img} name={e.name} />
      ))}
    </div>
  );
}

export default Socials;
