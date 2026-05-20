// app/components/CartDrawer.tsx
"use client";

import React from "react";
import { useCart } from "../context/CartContext";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { cartItems, addToCart, removeFromCart, getCartTotal, clearCart } =
    useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Арын бүдгэрүүлсэн хэсэг (Overlay) - Дарвал хаагдана */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* Сагсны үндсэн цонх */}
      <div className="relative w-full max-w-md h-full bg-white shadow-xl flex flex-col z-10 animate-fade-in-right">
        {/* Толгой хэсэг */}
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">Миний сагс</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-700 text-lg">
            ✕
          </button>
        </div>

        {/* Хоолнуудын жагсаалт */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              Сагс хоосон байна.
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.food.id}
                className="flex gap-4 p-3 border rounded-xl bg-gray-50">
                <img
                  src={item.food.image || "/images/soup.png"}
                  alt={item.food.name}
                  className="w-16 h-16 rounded-lg object-cover bg-gray-200"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">
                      {item.food.name}
                    </h4>
                    <p className="text-orange-500 font-bold text-xs">
                      {(item.food.price * item.quantity).toLocaleString()}₮
                    </p>
                  </div>

                  {/* Тоо ширхэг өөрчлөх товчлуурууд */}
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() => removeFromCart(item.food.id)}
                      className="w-6 h-6 rounded-md border flex items-center justify-center bg-white hover:bg-gray-100 text-sm">
                      -
                    </button>
                    <span className="text-sm font-medium w-4 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => addToCart(item.food)}
                      className="w-6 h-6 rounded-md border flex items-center justify-center bg-white hover:bg-gray-100 text-sm">
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Хөл хэсэг (Нийт үнэ болон Захиалах товч) */}
        {cartItems.length > 0 && (
          <div className="p-4 border-t bg-white">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600 font-medium">Нийт төлөх:</span>
              <span className="text-xl font-extrabold text-gray-900">
                {getCartTotal().toLocaleString()}₮
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={clearCart}
                className="col-span-1 border border-red-500 text-red-500 py-3 rounded-xl text-sm font-medium hover:bg-red-50 transition-colors">
                Устгах
              </button>
              <button
                onClick={() => alert("Захиалга хийгдлээ!")}
                className="col-span-2 bg-orange-500 text-white py-3 rounded-xl font-bold hover:bg-orange-600 transition-colors text-center">
                Захиалга өгөх
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
