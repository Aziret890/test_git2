import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
function Header() {
    return (
        <header>
            <div className="container">
                <div className="header">
                    <h1>Online store</h1>
                    <nav className="nav">
                        <Link to={"/menu"} className="nav__link">
                            <li>Menu</li>
                        </Link>
                        <Link to={"/order"} className="nav__link">
                            <li>Order</li>
                        </Link>
                        <Link to={"/"} className="nav__link">
                            <li>Create</li>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
