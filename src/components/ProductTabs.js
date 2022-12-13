import React, { useState } from 'react'

import "./ProductTabs.css";
import Modal from './Modal'
import pic1 from './images/pic1.jpg';
import pic2 from './images/pic2.jpg';
import pic3 from './images/pic1.jpg';
import pic4 from './images/pic2.jpg';
import pic5 from './images/pic2.jpg';
import pic6 from './images/pic2.jpg';

  const ProductTabs = () => {
    const [show, setShow] = useState(false);

    const foo = () => {
      setShow(!show)
    }

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
                          <img className="item-inner" src={pic2} alt="img" />
                          <h3 className="productDescription">Product 1</h3>
                            <button onClick={foo} className="btn" type="button">Read more?</button>
                              {/* MODAL */}
                              <div className={show === true? 'show': 'hide'}>
                                <div class="readMore">
                                  <div className="readMoreConentImg">
                                    <img className="readMoreConentImg" src={pic2} alt="img" />
                                  </div>
                                  <div className="readMoreConentDes">
                                    <h1>
                                      Product 1
                                    </h1>
                                    <p className="readMoreConentDes"> 
                                      sectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. 
                                      Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
                                      Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                                      Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. 
                                      Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.                                
                                    </p>                              
                                  </div>
                              </div>
                            </div>
                        </div>

                        <div className="item-inner">
                          <img className="item-inner" src={pic1} alt="img" />
                          <h3 className="productDescription">Product 2</h3>
                            <button onClick={foo} className="btn" type="button">Read more?</button>
                              {/* MODAL */}
                              <div className={show === true? 'show': 'hide'}>
                                <div class="readMore">
                                  <div className="readMoreConentImg">
                                    <img className="readMoreConentImg" src={pic1} alt="img" />
                                  </div>
                                  <div className="readMoreConentDes">
                                    <h1>
                                      Product 2
                                    </h1>
                                    <p className="readMoreConentDes"> 
                                      sectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. 
                                      Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
                                      Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                                      Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. 
                                      Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.                                
                                    </p>                              
                                  </div>
                              </div>
                            </div>
                        </div>

                        <div className="item-inner">
                          <img className="item-inner" src={pic3} alt="img" />
                          <h3 className="productDescription">Product 3</h3>
                            <button onClick={foo} className="btn" type="button">Read more?</button>
                              {/* MODAL */}
                              <div className={show === true? 'show': 'hide'}>
                                <div class="readMore">
                                  <div className="readMoreConentImg">
                                    <img className="readMoreConentImg" src={pic3} alt="img" />
                                  </div>
                                  <div className="readMoreConentDes">
                                    <h1>
                                      Product 3
                                    </h1>
                                    <p className="readMoreConentDes"> 
                                      sectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. 
                                      Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
                                      Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                                      Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. 
                                      Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.                                
                                    </p>                              
                                  </div>
                              </div>
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

