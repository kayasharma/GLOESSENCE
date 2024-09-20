import React, { useContext } from "react";
import "./Css/Shopcat.css";
import { Shopcontext } from "../components/Context/Shopcontext";

import Item from "../components/Item/Item";

const Shopcategory = (props) => {
  const { all_product } = useContext(Shopcontext);
  // Check the category prop

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12 </span> out of 36 products
        </p>
        <div className="shop-category-sort">sort by </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.Category === item.Category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>

      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};

export default Shopcategory;
