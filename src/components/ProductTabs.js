import Product from "./Product";

import "./ProductTabs.css";

import placeholder from "../images/product.webp";

const ProductTabs = () => {
  const products = [
    { id: 1, name: "Product 1", image: placeholder },
    { id: 2, name: "Product 2", image: placeholder },
    { id: 3, name: "Product 3", image: placeholder },
    { id: 4, name: "Product 4", image: placeholder },
    { id: 5, name: "Product 5", image: placeholder },
    { id: 6, name: "Product 6", image: placeholder },
  ];

  return (
    <div className="products">
      {products.map((p) => (
        <Product key={p.id} name={p.name} image={p.image} />
      ))}
    </div>
  );
};

export default ProductTabs;
