import React from "react";
import Intro from "../components/Intro";
// import ProductInfo from "../components/ProductInfo";

// import storage from "../images/locker.webp";
// import mezzanine from "../images/mezzanine.webp";
import rackingIMG from "../images/racking.webp";
// import shelving from "../images/shelving.webp";

import "./Products.css";

function Racking() {
  const racking = {
    title: "Racking",
  };

  return (
    <>
      <Intro text={racking.title} />

      <div className="container">
        <div className="racking">
          <div className="racking__img">
            <img src={rackingIMG} alt="Racking image" />
          </div>
          <div>
            <h2>{racking.title}</h2>
            <span className="ruler"></span>
          </div>

          <div className="racking__content">
            <h4 className="racking__content-heading">
              Racking Systems: Light, Medium & Heavy Duty
            </h4>

            <p>
              Krost Shelving and Racking offers a wide variety of racking
              systems to suit your unique warehouse needs. Looking for the
              perfect platform on which to display your products? Searching for
              an easy storage place that allows those needed items to be close
              at hand? Then we’re the shelving company to turn to.
            </p>

            <p>
              Racking systems allow for maximum storage capacity, improved
              accessibility, and the ability to store heavier items if required.
              Racking is the ideal storage for various industries, and is
              designed according to the storage requirement. Industrial
              warehouses can use racking for bulk storage, and commercial
              businesses can use it for storing smaller items.
            </p>

            <h4 className="racking__content-heading">
              Regardless of your requirement, KROST has exactly what you need
              with our quick-install racking systems.
            </h4>

            <p>
              We have been installing some of the biggest racking storage
              solutions in South Africa since 1965. When we are doing the job,
              satisfaction is guaranteed. After all, with more than half a
              century’s experience, we’ve perfected our trade to match any
              requirement.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Racking;
