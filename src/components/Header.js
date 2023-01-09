import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../images/logo.webp";
import menu from "../images/icons/icon-menu.webp";

import "./Header.css";
import MobileNav from "./MobileNav";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = () => {
    setIsOpen(!isOpen);

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
        className={
          isOpen
            ? "header__items open hide-for-desktop"
            : "header__items hide-for-desktop"
        }
        // style={{ display: isOpen ? "block" : "none" }}
        style={{ overflowY: isOpen ? "auto" : "hidden" }}
      >
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "activeM" : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            // className={({ isActive }) => (isActive ? activeStyle : undefined)}
            className={({ isActive }) => (isActive ? "activeM" : undefined)}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "activeM" : undefined)}
            to="/products"
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "activeM" : undefined)}
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

      <MobileNav />
      <div
        className="backdrop"
        style={{ display: isOpen ? "block" : "none" }}
        onClick={handleNav}
      ></div>
    </header>
  );
}

export default Header;
