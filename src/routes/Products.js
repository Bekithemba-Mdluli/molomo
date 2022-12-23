import ProductTabs from "../components/ProductTabs";
import Intro from "../components/Intro";

function Products() {
  document.body.classList.remove("no-scroll");
  return (
    <>
      <Intro text="Products" />
      <div className="container">
        <ProductTabs />
      </div>
    </>
  );
}

export default Products;
