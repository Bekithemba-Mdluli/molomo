import React from "react";

import "./Header.css";
import logo from "../images/logo.png";

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__nav-img">
          <img src={logo} alt="Molomo logo" />
        </div>

        <ul className="header__nav-list">
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
            <a className="number" href="/">
              +27 23 456 7890
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
