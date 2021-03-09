import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity = 1) => {
    const itemInCart = cart.find(prod => prod.id === item.id);
    const amount = parseInt(quantity);

    if (!itemInCart) {
      setCart(oldCart => [...oldCart, { ...item, quantity: amount }]);
    } else {
      const newItem = {
        ...itemInCart,
        quantity: itemInCart.quantity + amount,
      };
      setCart(oldCart => [
        ...oldCart.filter(prod => prod.id !== newItem.id),
        newItem,
      ]);
    }
  };

  const removeItem = id => {
    setCart(oldCart => oldCart.filter(item => item.id !== id));
  };

  const changeQuantity = (id, quantity) => {
    const amount = parseInt(quantity);
    if (isNaN(amount)) return;

    setCart(oldCart => {
      const oldItem = oldCart.find(item => item.id === id);
      const index = oldCart.indexOf(oldItem);
      const newItems = [...oldCart];
      newItems.splice(index, 1, { ...oldItem, quantity: amount });
      return newItems;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, changeQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
