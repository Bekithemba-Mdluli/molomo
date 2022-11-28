import React from "react";

import welding from "../images/icons/icon-welding.png";
import storage from "../images/icons/icon-warehouse.png";

import Service from "./Service";

import "./Services.css";

function Services() {
  const services = [
    {
      title: "Welding",
      img: welding,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Storage",
      img: storage,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Welding",
      img: welding,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Storage",
      img: storage,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Welding",
      img: welding,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Storage",
      img: storage,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="con">
      <div>
        <h1>Products</h1>
        <span className="ruler"></span>
      </div>
      <div className="services">
        {services.map((s) => (
          <Service img={s.img} text={s.text} title={s.title} />
        ))}
      </div>
    </div>
  );
}

export default Services;
