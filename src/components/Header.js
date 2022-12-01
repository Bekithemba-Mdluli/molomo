import React, { useState } from "react";

import "./Header.css";
import logo from "../images/logo.png";
import menu from "../images/icons/icon-menu.png";
// import Socials from "./Socials";

function Header() {
  const [scroll, setScroll] = useState(false);

  const handleNav = () => {
    setScroll(!scroll);
    console.log(scroll);

    scroll
      ? document.body.classList.remove("no-scroll")
      : document.body.classList.add("no-scroll");
  };

  return (
    <header className="header no">
      <nav className="header__nav">
        <div className="header__nav-img">
          <img src={logo} alt="Molomo logo" />
        </div>

        <ul className="header__nav-list hide-for-mobile">
          <li>
            <a className="active" href="/">
              Home
            </a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a className="active" href="/">
              Products
            </a>
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

        <img
          onClick={handleNav}
          className="nav-img hide-for-desktop "
          src={menu}
          alt="menu"
        />
        <div
          className={
            scroll ? "backdrop hide-for-desktop" : "hide hide-for-desktop"
          }
          onClick={handleNav}
        ></div>

        <div className={scroll ? "hide-for-desktop" : "hide hide-for-desktop"}>
          <ul className="header__nav-list hide-for-desktop">
            <li>
              <a className="active" href="/">
                Home
              </a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a className="active" href="/">
                Products
              </a>
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
        </div>
      </nav>
      {/* <Socials /> */}
    </header>
  );
}

export default Header;
