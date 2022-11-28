import React from "react";

function Service({ img, title, text }) {
  return (
    <div className="service">
      <div>
        <img src={img} alt="Building" />
      </div>
      <h3>{title}</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <a className="button" href="/">
        See Services
      </a>
    </div>
  );
}

export default Service;
