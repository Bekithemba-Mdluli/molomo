import React from "react";
import Intro from "../components/Intro";

import rackingIMG from "../images/mezzanine.webp";

import "./Products.css";

function Racking() {
  document.body.classList.remove("no-scroll");
  const racking = {
    title: "Mezzanine Floor Solutions",
  };

  return (
    <>
      <Intro text={racking.title} />

      <div className="container">
        <div className="racking">
          <div className="racking__img">
            <img src={rackingIMG} alt="Racking" loading="lazy" />
          </div>
          <div>
            <h2>{racking.title}</h2>
            <span className="ruler"></span>
          </div>

          <div className="racking__content">
            <h4 className="racking__content-heading">
              Krost Mezzanine Floor Solutions
            </h4>

            <p>
              Krost Shelving & Racking is a large Mezzanine Floor supplier. All
              our warehouse storage solutions are quick, clean, and easy to
              install, resulting in minimal disruption to your business. <br />
              The solid mezzanine flooring solutions add extra floor space
              within the shell of an existing building. By doubling the surface
              area, industrial mezzanine floors enable the full working height
              of a building to be utilised. <br />
              They are custom designed and manufactured, according to
              engineering specifications, to suit all clients’ specific
              requirements <br />
              Mezzanine Flooring system can be used as storage areas,
              fabrication areas, packing areas and offices, among many other
              uses. Because the structure, dimensions and location are easily
              changed, the possible uses are practically endless. <br />
              Installing a mezzanine floor is the most cost effective way of
              optimizing your existing space because all your fixed costs are
              already covered. <br />
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
