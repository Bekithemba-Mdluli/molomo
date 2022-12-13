import React from 'react'
import pic2 from '../images/pic2.jpg';
import pic3 from '../images/pic3.jpg';
import './About.css';

function About() {
  // const myStyle={
  // backgroundImage: "url(./images/pic.jpg)",
  // width: "10%",
  // height: "100px"
  //}
  return (
    <div className="about">
      <div className="about_img">
        <div className='image'></div>
        {/*<div style={myStyle}></div>*/}
        <h1 className="about-us">About Us</h1> 
        {/*<img src={pic} alt="construction"></img>*/}
      </div>
      <h1 className="heading">Services that we provide</h1>
      <div className="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis.
        </p>
      </div>
      <div className="img2">
        <img src={pic2} alt="construction2"></img>
      </div>
      {/* Mission | Value*/}
      <h1 className="heading2">Mission</h1>
      <div className="content2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis.
        </p>
      </div>
      <div className="img3">
        <img src={pic3} alt="construction3"></img>
      </div>
    </div>
  )
}

export default About;