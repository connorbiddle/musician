import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = item => {
    const itemInCart = cart.find(prod => prod.id === item.id);
    if (!itemInCart) {
      setCart(oldCart => [...oldCart, { ...item, quantity: 1 }]);
    } else {
      const newItem = { ...itemInCart, quantity: itemInCart.quantity + 1 };
      setCart(oldCart => [
        ...oldCart.filter(prod => prod.id !== newItem.id),
        newItem,
      ]);
    }
  };

  useEffect(() => {
    console.log("Cart changed:", cart);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
