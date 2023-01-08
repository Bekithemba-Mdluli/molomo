import React from "react";

import storage from "../images/storage32.webp";
import mezzanine from "../images/mezzanine32.webp";
import racking from "../images/racking32.webp";
import shelving from "../images/shelving32.webp";

import Service from "./Service";

import "./Services.css";

function Services() {
  const services = [
    {
      title: "Racking",
      img: racking,
      text: "Molomo Trading And Projects offers a wide variety of racking to suit your needs. Looking for the perfect platform on which to display your products? Searching for an easy storage place that allows those needed items to be close at hand?",
      url: "/products/racking",
    },
    {
      title: "Shelving",
      img: shelving,
      text: "Herein lies the beauty of our products: we manufacture our shelving solutions in all sizes and various shapes, so they are able to bear the weight of light, medium and heavy duty goods, and do so effortlessly in all contexts, whether for retail or warehouse purposes.",
      url: "/products/shelving",
    },
    {
      title: "Mezzanine",
      img: mezzanine,
      text: "Mezzanine Floors enable the full working height of a building to be utilised to the maximum by doubling the surface area. Mezzanine Floors can be used as storage areas, fabrication areas, packing areas and offices among many other uses.",
      url: "/products/mezzanine",
    },
    {
      title: "Storage",
      img: storage,
      text: "Molomo Trading And Projects has been consistently locking up the competition when it comes to helping you lock up your goods. Our lockers are of the highest quality with several unique features that set us firmly at the top of the podium in the locker and storage lockers game.",
      url: "/products/storage",
    },
  ];

  return (
    <div className="con">
      <div>
        <h1>Products</h1>
        <span className="ruler"></span>
      </div>
      <div className="services">
        {services.map((s, i) => (
          <Service
            key={i}
            img={s.img}
            text={s.text}
            title={s.title}
            url={s.url}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
