import React, { useContext } from "react";
import "./Productdisplay.css";
import star_icon from "../assests/star_icon.png";
import star_dull_icon from "../assests/star_dull_icon.png";
import { Shopcontext } from "../Context/Shopcontext";

const Productdisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(Shopcontext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
        </div>
        <div className="productdisplay-image">
          <img
            className="productdisplay-main-img"
            src={product.image}
            alt={product.name}
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_dull_icon} alt="star" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-prices-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-prices-new">
            ${product.new_price}
          </div>
          <div className="productdisplay-right-discription"></div>
          <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-size">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
          </div>
          <button
            onClick={() => {
              addToCart(product.id);
            }}
          >
            ADD TO CART
          </button>
          <p className="productdisplay-right-category">
            <span>Category:</span> skincare, makeup & perfumes
          </p>
          <p className="productdisplay-right-category">
            <span>Tags:</span> new arrivals
          </p>
        </div>
      </div>
    </div>
  );
};

export default Productdisplay;
