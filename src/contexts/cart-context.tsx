"use client";
import { ReactNode, createContext, use, useContext, useState } from "react";

interface CartItems {
  productId: string;
  quantity: number;
}

interface CartContextType {
  items: CartItems[];
  addItem: (productId: string) => void;
}

const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItems[]>([]);

  function addItem(productId: string) {
    setCartItems(prev => {
      const productExists = prev.some(item => item.productId === productId);
      if (productExists) {
        return prev.map(item => {
          if (item.productId === productId) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
      } else {
        return [...prev, { productId, quantity: 1 }];
      }
    });
  }
  return (
    <CartContext.Provider value={{ items: cartItems, addItem }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
