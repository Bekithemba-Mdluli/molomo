import React, { useState } from "react";

import logo from "../images/logo.png";
import menu from "../images/icons/icon-menu.png";

import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);

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

      <ul
        className={"header__items hide-for-desktop"}
        style={{ display: isOpen ? "block" : "none" }}
      >
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Products</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
        <li>
          <a href="/">
            <span className="number">+27 23 456 7890</span>
          </a>
        </li>
      </ul>

      <ul className={"header__itemsD hide-for-mobile"}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Products</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
        <li>
          <a href="/">
            <span className="number">+27 23 456 7890</span>
          </a>
        </li>
      </ul>

      <div
        className="backdrop"
        style={{ display: isOpen ? "block" : "none" }}
        onClick={handleNav}
      ></div>
    </header>
  );
}

export default Header;
