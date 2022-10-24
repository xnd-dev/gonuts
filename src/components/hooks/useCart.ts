import React from "react";
import { CartContext, CartContextType } from "../../context/CartContext";

export function useCart(){
    return React.useContext(CartContext) as CartContextType;  
  }