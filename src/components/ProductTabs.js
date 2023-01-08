import React, { useState } from 'react'
// import React from 'react';
import "./ProductTabs.css";
import Modal from './Modal'; 
import pic1 from './images/pic1.jpg';
import pic2 from './images/pic2.jpg';
import pic3 from './images/pic3.jpg';
import pic4 from './images/pic4.jpg';
import pic5 from './images/pic5.jpg';
import pic6 from './images/pic6.jpg';

  const ProductTabs = (props) => {
    // event handler function to open the modal
    const handleOpenModal = () => {
    // open the modal by setting the isOpen state to true
    props.setIsOpen(false);
  }

    return (
      <>

        <div class="section-title">
          <h1> Products we offer </h1>
        </div>

        <div className="boxes">
          <div className="box">
            <h3 className="productDescription">Product 1</h3>
            <img src={pic1} />
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <Modal isOpen={props.isOpen} setIsOpen={props.setIsOpen} />
          </div>

          <div className="box">
            <h3 className="productDescription">Product 2</h3>
            <img src={pic2} />
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <Modal isOpen={props.isOpen} setIsOpen={props.setIsOpen} />
          </div>

          <div className="box">
            <h3 className="productDescription">Product 3</h3>
            <img src={pic3} />
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <Modal isOpen={props.isOpen} setIsOpen={props.setIsOpen} />
          </div>

          <div className="box">
            <h3 className="productDescription">Product 4</h3>
            <img src={pic4} />
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <Modal isOpen={props.isOpen} setIsOpen={props.setIsOpen} />
          </div>

          <div className="box">
            <h3 className="productDescription">Product 5</h3>
            <img src={pic5} />
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <Modal isOpen={props.isOpen} setIsOpen={props.setIsOpen} />
          </div>

          <div className="box">
            <h3 className="productDescription">Product 6</h3>
            <img src={pic6} />
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <Modal isOpen={props.isOpen} setIsOpen={props.setIsOpen} />
          </div>
        </div>
      </>
    );
  };
  
  export default ProductTabs;
