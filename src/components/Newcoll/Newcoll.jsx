import React from "react";
import "./Newcoll.css";
import new_collection from "../assests/new_collections";
import Item from "../Item/Item.jsx";
import new_collections from "../assests/new_collections";
const Newcoll = () => {
  return (
    <div className="newcollection">
      <h1>NEW COLLECTION</h1>
      <hr />
      <div className="collections">
        {new_collections.map((item, i) => {
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
        })}
      </div>
    </div>
  );
};

export default Newcoll;
