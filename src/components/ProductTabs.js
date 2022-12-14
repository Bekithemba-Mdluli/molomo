// import React, { useState } from "react";

// import "./ProductTabs.css";
// import Modal from "./Modal";
import Product from "./Product";

import "./ProductTabs.css";

import placeholder from "../images/product.webp";

const ProductTabs = () => {
  // const [show, setShow] = useState(false);
  const products = [
    { id: 1, name: "Product 1", image: placeholder },
    { id: 2, name: "Product 2", image: placeholder },
    { id: 3, name: "Product 3", image: placeholder },
    { id: 4, name: "Product 4", image: placeholder },
    { id: 5, name: "Product 5", image: placeholder },
    { id: 6, name: "Product 6", image: placeholder },
  ];

  // const foo = () => {
  //   setShow(!show);
  // };

  return (
    <div className="products">
      {products.map((p, i) => (
        <Product key={i} name={p.name} image={p.image} />
      ))}
    </div>
  );
};

export default ProductTabs;
