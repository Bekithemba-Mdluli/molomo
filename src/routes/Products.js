import ProductTabs from "../components/ProductTabs";
// import Footer from "../components/Footer";
// import Footer2 from "../components/Footer2";
import Intro from "../components/Intro";

function Products() {
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
