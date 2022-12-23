import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "../images/logo.webp";
import menu from "../images/icons/icon-menu.webp";

import "./Header.css";
import MobileNav from "./MobileNav";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  // const [isActive, setIsActive] = useState(true);
  // TODO FIX NO SCROLL BUG

  const handleNav = () => {
    setIsOpen(!isOpen);
    // console.log(isOpen);

    isOpen
      ? document.body.classList.remove("no-scroll")
      : document.body.classList.add("no-scroll");
  };

  let activeStyle = {
    textDecoration: "underline",
    // backgroundColor: "green",
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
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            // className={({ isActive }) => (isActive ? activeStyle : undefined)}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/products"
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/contact"
          >
            Contact
          </NavLink>
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
