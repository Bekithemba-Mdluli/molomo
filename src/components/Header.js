import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../images/logo.webp";
import menu from "../images/icons/icon-menu.webp";

import "./Header.css";
import MobileNav from "./MobileNav";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = () => {
    setIsOpen(!isOpen);
    // console.log(isOpen);

    isOpen
      ? document.body.classList.remove("no-scroll")
      : document.body.classList.add("no-scroll");
  };

  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Molomo Logo" />
      </div>

      <div className="header__menu hide-for-desktop" onClick={handleNav}>
        <img src={menu} alt="Hamburger menu" />
      </div>
      {/* <Router> */}
      <ul
        className={"header__items hide-for-desktop"}
        style={{ display: isOpen ? "block" : "none" }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <a href="/">
            <span className="number">+27 23 456 7890</span>
          </a>
        </li>
      </ul>
      {/* </Router> */}

      <MobileNav />
      <div
        className="backdrop"
        style={{ display: isOpen ? "block" : "none" }}
        onClick={handleNav}
      ></div>
    </header>
    // </Router>
  );
}

export default Header;
