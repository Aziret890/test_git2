import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="header">
          <h1>AZIRET</h1>
          <nav>
            <Link to={"/menu"}>
              <li>Menu</li>
            </Link>
            <Link to={"/order"}>
              <li>order</li>
            </Link>
            <Link to={"/"}>
              <li>crate</li>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
