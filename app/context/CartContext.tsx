// app/context/CartContext.tsx
"use client";

import React, { createContext, useContext, useState } from "react";
import { Food, CartItem } from "../types/food";

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (food: Food) => void;
  removeFromCart: (foodId: string) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Сагсанд хоол нэмэх
  const addToCart = (food: Food) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.food.id === food.id);
      if (existingItem) {
        // Хэрэв өмнө нь нэмэгдсэн байвал тоог нь 1-ээр ихэсгэнэ
        return prevItems.map((item) =>
          item.food.id === food.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      // Шинээр нэмэгдэж байвал жагсаалтад оруулна
      return [...prevItems, { food, quantity: 1 }];
    });
  };

  // Сагснаас хоол хасах / устгах
  const removeFromCart = (foodId: string) => {
    setCartItems(
      (prevItems) =>
        prevItems
          .map((item) =>
            item.food.id === foodId
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          )
          .filter((item) => item.quantity > 0), // Хэрэв тоо нь 0 болчихвол жагсаалтаас устгана
    );
  };

  // Сагсыг хоослох
  const clearCart = () => setCartItems([]);

  // Нийт төлөх үнийг бодох
  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.food.price * item.quantity,
      0,
    );
  };

  // Сагсанд байгаа нийт хоолны тоо ширхэг (Багж дээр харуулахад)
  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
        getCartCount,
      }}>
      {children}
    </CartContext.Provider>
  );
};

// Бусад компонент дээр хялбар дуудаж ашиглах custom hook
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart hook нь CartProvider дотор ашиглагдах ёстой.");
  }
  return context;
};
