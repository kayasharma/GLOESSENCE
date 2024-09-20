import React from "react";
import "./Footer.css";
import footer_logo from "../assests/logo_big.png";
import instagram_icon from "../assests/instagram_icon.png";
import pintrest_icon from "../assests/pintester_icon.png";
import whatsapp_icon from "../assests/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>GLOESSENCE</p>
      </div>
      <ul className="footer-link">
        <li>company</li>
        <li>products</li>
        <li>offices</li>
        <li>about</li>
        <li>contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pintrest_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
