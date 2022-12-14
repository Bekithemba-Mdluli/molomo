import React from "react";

import { Link } from "react-router-dom";

function MobileNav() {
  return (
    <ul className={"header__itemsD hide-for-mobile"}>
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
  );
}

export default MobileNav;
