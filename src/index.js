import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles/globalStyles";
import App from "./App";
import CartProvider from "./context/CartContext";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <GlobalStyles />
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
