import Product from "./Product";

import "./ProductTabs.css";

import storage from "../images/locker.webp";
import mezzanine from "../images/mezzanine.webp";
import racking from "../images/racking.webp";
import shelving from "../images/shelving.webp";

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
    <div className="products">
      {products.map((p) => (
        <Product key={p.id} name={p.title} image={p.img} url={p.url} />
      ))}
    </div>
  );
};

export default ProductTabs;
