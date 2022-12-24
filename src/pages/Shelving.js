import React from "react";
import Intro from "../components/Intro";

import rackingIMG from "../images/shelving.webp";

import "./Products.css";

function Racking() {
  document.body.classList.remove("no-scroll");
  const shelving = {
    title: "Extraordinary Shelving Solutions",
  };

  return (
    <>
      <Intro text={shelving.title} />

      <div className="container">
        <div className="racking">
          <div className="racking__img">
            <img src={rackingIMG} alt="Racking" />
          </div>
          <div>
            <h2>{shelving.title}</h2>
            <span className="ruler"></span>
          </div>

          <div className="racking__content">
            <h4 className="racking__content-heading">Commercial Shelving</h4>

            <p>
              Herein lies the beauty of our products: we manufacture our own
              industrial and commercial shelving solution, in all shapes and
              sizes so that they are able to bear the weight of light-, medium-
              and heavy- duty goods, and to do so effortlessly in all contexts,
              whether for retail or warehouse purposes.
            </p>

            <p>
              Krost Shelving and Racking prides itself on its professionalism,
              and supplies many factories and businesses with shelving solution.
              We make it our mission to maximise the use of shelf storage space,
              and design unique shelving units to suit every individual storage
              need.
            </p>

            <h4 className="racking__content-heading">Industrial Shelving</h4>

            <p>
              Krost Shelving and Racking is the industrial shelving and racking
              leader in South Africa, and has more than 170 staff members. The
              Krost team encourages a hands-on policy, giving our personal
              undivided attention to the shelving and racking needs of every
              individual company or business.
            </p>

            <p>
              This is why we will also offer our expert advice to clients on
              what shelving solutions will be appropriate for their unique
              requirements, in order to save them time, money and space.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Racking;
