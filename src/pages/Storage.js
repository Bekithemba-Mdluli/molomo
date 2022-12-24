import React from "react";
import Intro from "../components/Intro";

import rackingIMG from "../images/locker.webp";

import "./Products.css";

function Racking() {
  document.body.classList.remove("no-scroll");
  const racking = {
    title: "Storage Lockers",
  };

  return (
    <>
      <Intro text={racking.title} />

      <div className="container">
        <div className="racking">
          <div className="racking__img">
            <img src={rackingIMG} alt="Racking" />
          </div>
          <div>
            <h2>{racking.title}</h2>
            <span className="ruler"></span>
          </div>

          <div className="racking__content">
            <h4 className="racking__content-heading">
              Storage lockers manufacturer and supplier of quality steel lockers
            </h4>

            <p>
              Our storage lockers are of the highest quality with several unique
              features that set us firmly at the top of the podium in the locker
              and storage lockers game. Krost Shelving and Racking has been
              consistently locking up the competition when it comes to helping
              you lock up your goods.
            </p>

            <p>
              If you are looking for the ultimate storage locker for your
              school, business, factory, hospital or any other premises, look no
              further than Krost. Here we have a range of staff lockers, work
              lockers and storage solutions available for the best prices across
              the web.
            </p>

            <p>
              Our lockers are larger than the normal lockers and can therefore
              cater for bulkier items such as motorbike helmets.
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
