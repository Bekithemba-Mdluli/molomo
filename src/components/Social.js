import React from "react";

function Social({ image, name }) {
  return (
    <>
      <img className="social" src={image} alt={name} />
    </>
  );
}

export default Social;
