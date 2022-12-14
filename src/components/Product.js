import React from "react";

function Product({ name, image }) {
  return (
    <div className="product" style={{ backgroundImage: `url(${image})` }}>
      <div className="product__content">
        <h2>{name}</h2>
        <button>Read More</button>
      </div>
    </div>
  );
}

export default Product;
