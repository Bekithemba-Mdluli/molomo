import React from "react";

import placeholder from "../images/placeholder.webp";

import "./Details.css";

function Details() {
  return (
    <div className="details">
      <div className="details__left">
        <h2>
          What They are about and mission I{" "}
          <span className="underline">Guess</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis.
        </p>
        <div className="details__left-btn">
          <a className="button" href="/">
            Contact
          </a>
        </div>
      </div>

      <div className="details__right">
        <div className="details__right-img">
          <img src={placeholder} alt="information" />
        </div>
      </div>
    </div>
  );
}

export default Details;
