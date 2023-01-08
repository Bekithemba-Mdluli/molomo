import ProductTabs from "../components/ProductTabs";
import Intro from "../components/Intro";
import Footer from "../components/Footer";

function Products() {
  document.body.classList.remove("no-scroll");
  return (
    <>
      <Intro text="Products" />
      <div className="container">
        <ProductTabs />
      </div>
      <Footer />
    </>
  );
}

export default Products;
