import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shopcategory from "./pages/Shopcategory";
import Loginsi from "./pages/Loginsi";
import Shop from "./pages/Shop";
import Footer from "./components/Footer/Footer";
import serum_banner from "./components/assests/skincare-product-banner-ads-holographic-spheres-elements-d-illustration-129156371.webp";
import facewash_banner from "./components/assests/skincare-product-banner-ads-plant-watercolor-decorations-d-illustration-129156291.webp";
import cream_banner from "./components/assests/fragrance-advertising-banner-template-glass-260nw-2147941849.webp";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Productdisplay from "./components/Productdisplay/Productdisplay";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/Serum"
            element={<Shopcategory banner={serum_banner} Category="serum" />}
          />
          <Route
            path="/FaceWash"
            element={
              <Shopcategory banner={facewash_banner} Category="FaceWash" />
            }
          />
          <Route
            path="/Cream"
            element={<Shopcategory banner={cream_banner} Category="Cream" />}
          />
          <Route path="/Product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Loginsi" element={<Loginsi />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
