import React, { useState } from 'react';
import pic1 from './images/pic1.jpg';

const Modal = () => {
  // useState hook to manage the state of the modal
  const [isOpen, setIsOpen] = useState(false);

  // function to open the modal
  const openModal = () => {
    setIsOpen(true);
  }

  // function to close the modal
  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div className='show'>
      {/* button to open the modal */}
      <button onClick={openModal}>Read more?</button>

      {/* modal component */}
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            {/* modal header */}
            <div className="modal-header">
              {/* button to close the modal */}
              <button onClick={closeModal}>X</button>
            </div>
            {/* modal body */}
            <div className="modal-body">
                  <div className="readMoreConentImg">
                    <img className="readMoreConentImg" src={pic1} alt="img" />
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
            {/* modal footer */}
            {/* <div className="modal-footer">
              <button onClick={closeModal}>Close</button>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
