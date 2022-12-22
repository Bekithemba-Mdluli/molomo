import React from "react";

function Service({ img, title, text }) {
  return (
    <div className="service">
      <div className="service__img">
        <img src={img} alt="Building" />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>

      <a className="button" href="/">
        read more
      </a>
    </div>
  );
}

export default Service;
