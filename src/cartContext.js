import React, { createContext, useReducer } from 'react'
import cartReducer from './cartReducer';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}
