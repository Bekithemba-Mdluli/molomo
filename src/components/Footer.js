import "./FooterStyles.css";
import facebook from "./images/icons/icon-facebook.png";
import instagram from "./images/icons/icon-instagram.png";
import linkedIn from "./images/icons/icon-linkedin.png";

const Footer = () => {
  return (
    <div className="footer">
      {/* <div className="bottom"> */}
      <div>
        <a>Copytight &copy; website owner all rights reserved</a>
        <p className="creators">Created by Isaac, Gift and Themba</p>
      </div>
      <div>
        <a href="https://www.krostshelving.com/">
          Powered by — KROST SHELVING AND RACKING
        </a>
      </div>
      <div className="footer__icons">
      <a href="https://www.instagram.com/">
          <img src={instagram} alt="instagram icon" />
        </a>
        <a href="https://www.facebook.com/">
          <img src={facebook} alt="facebook icon" />
        </a>
        <a href="https://www.linkedin.com/">
          <img src={linkedIn} alt="linked in icon" />
        </a>
      </div>
    </div>
    // </div>
  );
};

export default Footer;

