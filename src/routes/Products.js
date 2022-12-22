import ProductTabs from "../components/ProductTabs";
// import Footer from "../components/Footer";
// import Footer2 from "../components/Footer2";
import Intro from "../components/Intro";

function Products() {
  document.body.classList.remove("no-scroll");
  return (
    <>
      <Intro text="Products" />
      <div className="container">
        <ProductTabs />
      </div>

      {/* <Footer2 /> */}
    </>
  );
}

export default Products;
