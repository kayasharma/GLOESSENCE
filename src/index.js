import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import ShopcontextProvider from "./components/Context/Shopcontext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ShopcontextProvider>
    <App />
  </ShopcontextProvider>
);
