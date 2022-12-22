import React from "react";

import { Link } from "react-router-dom";

function Service({ img, title, text, url }) {
  return (
    <div className="service">
      <div className="service__img">
        <img src={img} alt="Building" />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>

      <Link to={url} className="button">
        read more
      </Link>
    </div>
  );
}

export default Service;
