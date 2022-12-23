import React from "react";

import { NavLink } from "react-router-dom";

function MobileNav() {
  return (
    <ul className={"header__itemsD hide-for-mobile"}>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "activeD" : undefined)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "activeD" : undefined)}
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? "activeD" : undefined)}
        >
          Products
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "activeD" : undefined)}
        >
          Contact
        </NavLink>
      </li>
      <li>
        <a href="tel:+27234567890">
          <span className="number">+27 23 456 7890</span>
        </a>
      </li>
    </ul>
  );
}

export default MobileNav;
