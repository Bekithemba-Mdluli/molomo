import React from "react";

function Social({ image, name, url }) {
  return (
    <>
      <a className="social__link" href={url}>
        <img className="social" src={image} alt={name} />
      </a>
    </>
  );
}

export default Social;
