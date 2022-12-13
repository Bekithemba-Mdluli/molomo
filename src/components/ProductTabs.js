import "./ProductTabs.css";
import pic1 from './images/pic1.jpg';
import pic2 from './images/pic2.jpg';

  const ProductTabs = () => {
    return (
      <>
        <section class="services">
          <div class="container">
              <div class="row">
                  <div class="section-title">
                    <h1> Products we offer </h1>
                  </div>
              </div>
              <div class="row">
                <div class="service-items">
                    <div class="row">

                    <div class="item">
                        <div className="item-inner">
                          <img className="item-inner" src={pic1} alt="img" />
                          <h3 className="productDescription">Product 1</h3>
                          {/* onClick={()=>{ alert('alert'); }} */}
                          <button className="btn" type="button">Read more?</button>                              
                          <div class="read-more-cont">
                              {/* href="url" */}                             
                                <img className="readMoreConent" src={pic1} alt="img" />
                                <img className="readMoreConent" src={pic2} alt="img" />
                                <span className="close-button"> &times;</span>
                                <p className="readMoreConent"> 
                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusm.
                                </p>   
                          </div>
                        </div>
                    </div>

                    </div>
                  </div>
                </div>
            </div>
        </section>
      </>
    );
  };
  
  export default ProductTabs;
  