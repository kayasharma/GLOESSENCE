import React from "react";
import arrow_icon from "../assests/breadcrum_arrow.png";
import "./Breakdrums.css";

const Breakdrums = (props) => {
  const { product } = props;

  return (
    <div className="breakdrums">
      HOME <img src={arrow_icon} alt="Arrow Icon" /> SHOP
      <img src={arrow_icon} alt="Arrow Icon" />
      {product.Category} <img src={arrow_icon} alt="Arrow Icon" />
      {product.name}
    </div>
  );
};

export default Breakdrums;
