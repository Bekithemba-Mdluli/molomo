import React from "react";

function Product({ name, image, url }) {
  return (
    <div
      className="product"
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(${image})`,
      }}
    >
      <div className="product__content">
        <h2>{name}</h2>
        <a href={url}>Read More</a>
      </div>
    </div>
  );
}

export default Product;
