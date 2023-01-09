import React from "react";
import Social from "./Social";

import "./Panel.css";

import instagram from "../images/icons/icon-instagram.webp";
import linkedIn from "../images/icons/icon-linkedin.webp";
import facebook from "../images/icons/icon-facebook.webp";

const socialM = [
  {
    img: instagram,
    name: "Instagram",
    url: "https://www.instagram.com/krostshelving/",
  },
  {
    img: linkedIn,
    name: "LinkedIn",
    url: "https://za.linkedin.com/company/krost-shelving",
  },
  {
    img: facebook,
    name: "Facebook",
    url: "https://www.facebook.com/krostshelving",
  },
];

function Panel() {
  return (
    <div className="panel hide-for-mobile">
      {socialM.map((e, i) => (
        <Social key={i} image={e.img} name={e.name} url={e.url} />
      ))}
    </div>
  );
}

export default Panel;
