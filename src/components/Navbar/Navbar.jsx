import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assests/logo.png";
// Optional if you have other CSS

import cart_icon from "../assests/cart_icon.png";
import Loginsi from "../../pages/Loginsi";
import { Shopcontext } from "../Context/Shopcontext";

function Navbar() {
  const { getTotalCartItems } = useContext(Shopcontext);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" className="logo" />
        <p>GLOESSENCE</p>
      </div>
      <ul className="nav-menu">
        <li className="list-item">
          <Link to="/" className="nav-link">
            SHOP
          </Link>
        </li>
        <li className="list-item">
          <Link to="/Serum" className="nav-link">
            MAKE-UP
          </Link>
        </li>
        <li className="list-item">
          <Link to="/FaceWash" className="nav-link">
            SKINCARE
          </Link>
        </li>
        <li className="list-item">
          <Link to="/Cream" className="nav-link">
            PERFUMES
          </Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="Loginsi">
          <button className="login-button">LOGIN</button>
        </Link>
        <Link to="Cart">
          <img src={cart_icon} alt="Cart" className="cart-icon" />
        </Link>
        <div className="cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}

export default Navbar;
