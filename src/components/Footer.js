import "./FooterStyles.css";
import facebook from "./images/icons/icon-facebook.png";
import instagram from "./images/icons/icon-instagram.png";
import linkedIn from "./images/icons/icon-linkedin.png";

// const Footer = () => {
//   return (
//     <div className="footer">
//       <div className="footer-left">
//           <a>Copytight &copy; website owner all rights reserved</a>
//           {/* <p className="creators">Created by Isaac, Gift and Themba</p> */}
//       </div>

//       <div  className="footer-centre">
//         <a href="https://www.krostshelving.com/">
//           Powered by — KROST SHELVING AND RACKING
//         </a>
//       </div>

//       <div className="footer-right">
//         <a href="https://www.instagram.com/"  className="footer-link">
//           <img src={instagram} alt="instagram icon" />
//         </a>
//         <a href="https://www.facebook.com/"  className="footer-link">
//           <img src={facebook} alt="facebook icon" />
//         </a>
//         <a href="https://www.linkedin.com/"  className="footer-link">
//           <img src={linkedIn} alt="linked in icon" />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <p>Copytight &copy; website owner all rights reserved</p>
      <p>
        <a href="https://www.krostshelving.com/">
          Powered by — KROST SHELVING AND RACKING
        </a>
      </p>
      <ul>
        <li>
          <a href="https://www.instagram.com/"  className="footer-link">
            <img src={instagram} alt="instagram icon" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/"  className="footer-link">
            <img src={facebook} alt="facebook icon" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/"  className="footer-link">
            <img src={linkedIn} alt="linked in icon" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
