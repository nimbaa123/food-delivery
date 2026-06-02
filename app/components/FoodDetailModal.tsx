// app/components/FoodDetailModal.tsx
"use client";

import { useState } from "react";

interface FoodItem {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
}

interface FoodDetailModalProps {
  food: FoodItem | null;
  onClose: () => void;
  onAddToCart: (food: FoodItem, quantity: number) => void;
}

export function FoodDetailModal({
  food,
  onClose,
  onAddToCart,
}: FoodDetailModalProps) {
  const [quantity, setQuantity] = useState(1);

  if (!food) return null;

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      {/* Гадуурх талбай дээр дарахад хаагдана */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Модал контент */}
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-[#1A1A1A] border border-gray-800 p-6 text-white shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Хаах товчлуур (X) */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-white transition-colors">
          ✕
        </button>

        {/* Хоолны зураг */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-900 mb-4">
          <img
            src={food.image || "/images/hero-banner.jpg"}
            alt={food.name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Хоолны мэдээлэл */}
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-bold tracking-tight">{food.name}</h3>
            <span className="text-lg font-bold text-[#E53935]">
              ${(food.price * quantity).toFixed(2)}
            </span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            {food.description ||
              "Fresh ingredients mixed with delicious herbs, spices, and baked to perfection."}
          </p>
        </div>

        {/* Тоо ширхэг сонгох болон Сагслах хэсэг */}
        <div className="mt-6 flex items-center justify-between border-t border-gray-800 pt-4">
          <div className="flex items-center space-x-1 bg-gray-900 border border-gray-800 rounded-xl p-1">
            <button
              onClick={handleDecrease}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-lg font-semibold text-gray-400 hover:bg-gray-800 hover:text-white transition-colors">
              —
            </button>
            <span className="w-10 text-center font-bold text-sm">
              {quantity}
            </span>
            <button
              onClick={handleIncrease}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-lg font-semibold text-[#E53935] hover:bg-gray-800 transition-colors">
              +
            </button>
          </div>

          <button
            onClick={() => onAddToCart(food, quantity)}
            className="flex-1 ml-4 py-3 bg-[#E53935] hover:bg-[#D32F2F] text-white font-semibold text-sm rounded-xl transition-colors shadow-lg shadow-[#E53935]/10">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
