import React, { useContext } from "react";
import { Shopcontext } from "../components/Context/Shopcontext";
import { useParams } from "react-router-dom";
import Breakdrums from "../components/Breakdrums/Breakdrums";
import Productdisplay from "../components/Productdisplay/Productdisplay";
import Dricption from "../components/Dricption/Dricption";
import Relatedproducts from "../components/Relatedproducts/Relatedproducts";

const Product = () => {
  const { all_product } = useContext(Shopcontext);
  const { productId } = useParams();

  // Attempt to find the product by ID
  const Product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breakdrums product={Product} />
      <Productdisplay product={Product} />
      <Dricption product={Product} />
      <Relatedproducts />
    </div>
  );
};

export default Product;
