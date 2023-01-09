import Product from "./Product";

import "./ProductTabs.css";

import storage from "../images/locker42.webp";
import mezzanine from "../images/mezzanine42.webp";
import racking from "../images/racking42.webp";
import shelving from "../images/shelving42.webp";

const ProductTabs = () => {
  const products = [
    {
      title: "Racking",
      img: racking,
      url: "/products/racking",
    },
    {
      title: "Shelving",
      img: shelving,
      url: "/products/shelving",
    },
    {
      title: "Mezzanine",
      img: mezzanine,
      url: "/products/mezzanine",
    },
    {
      title: "Storage",
      img: storage,
      url: "/products/storage",
    },
  ];

  return (
    <>
      <div className="products__text">
        <h1>Products We Offer</h1>
        <span className="ruler"></span>
      </div>
      <div className="products">
        {products.map((p) => (
          <Product key={p.id} name={p.title} image={p.img} url={p.url} />
        ))}
      </div>
    </>
  );
};

export default ProductTabs;
