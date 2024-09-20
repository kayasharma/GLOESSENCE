import React from "react";
import "./Offer.css";
import exclusive from "../assests/—Pngtree—skin care products and cosmetics_15223073.png";
const Offer = () => {
  return (
    <div className="offer">
      <div className="offer-left">
        <h1>Exclusive Offers For You</h1>

        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offer-right">
        <img src={exclusive} alt="" />
      </div>
    </div>
  );
};

export default Offer;
