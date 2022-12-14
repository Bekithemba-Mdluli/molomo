import React from "react";
// import pic2 from "../images/pic2.jpg";
import pic3 from "../images/placeholder.webp";
import "./About.css";
// import Footer from "./Footer2";
// import Header from "./Header";
import Intro from "./Intro";

function About() {
  // const myStyle={
  // backgroundImage: "url(./images/pic.jpg)",
  // width: "10%",
  // height: "100px"
  //}
  return (
    <div className="about">
      {/* <div className="about__intro">
        <Header />
        <h1>About</h1>
      </div> */}
      <Intro text="About" />

      <div className="about__content">
        <div className="about__content-img">
          {/* added an id... was struggling on adjusting images on small device */}
          <img src={pic3} id="pic1" alt="construction2"></img>
        </div>

        <div className="about__content-text">
          <h2>
            What They are about and mission I{" "}
            <span className="underline">Guess</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis.
          </p>
        </div>
      </div>

      <div className="about__content invert">
        <div className="about__content-img">
          <img src={pic3} id="pic2" alt="construction2"></img>
        </div>

        <div className="about__content-text">
          <h2>
            What They are about and mission I{" "}
            <span className="underline">Guess</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis.
          </p>
        </div>
      </div>

      {/* <div className="about_img">
          <div className="image"></div>
          <h1 className="about-us">About Us</h1>
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
        </div> */}
    </div>
  );
}

export default About;
