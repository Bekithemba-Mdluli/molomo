import React from 'react'
import pic from '../images/pic.jpg';
import pic2 from '../images/pic2.jpg';
import pic3 from '../images/pic3.jpg';
import './About.css';

function About() {
  return (
    <div className="about">
      <h1 className="about-us">About Us</h1>
      <div className="about_img">
        <img src={pic} alt="construction"></img>
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
      <h1 className="heading2">Mission | Vision</h1>
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