import React, { useState } from "react";
import "./Modal.css";

import placeholder from "../images/placeholder.webp";

function Modal() {
  const [show] = useState(true);

  return (
    <>
      <div className={show === true ? "show modal" : "hide"}>
        <div className="modal__img">
          <img src={placeholder} alt="img" />
        </div>
        <div className="modal__content">
          <h1>Product 3</h1>
          <p>
            sectetur adipiscing elit. Etiam eu turpis molestie, dictum est a,
            mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus
            sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas
            eget condimentum velit, sit amet feugiat lectus. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque
            ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu
            tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis
            diam sit amet lacinia. Aliquam in elementum tellus.
          </p>
        </div>
      </div>
      <div className="backdrop"></div>
    </>
  );
}

export default Modal;
