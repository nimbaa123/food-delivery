// app/components/FoodCard.tsx
import React from "react";
import { Food } from "../types/food";
import { useCart } from "../context/CartContext";

interface FoodCardProps {
  food: Food;
}

export const FoodCard: React.FC<FoodCardProps> = ({ food }) => {
  const { addToCart } = useCart();

  return (
    <div className="border border-gray-800 rounded-2xl p-3 bg-[#222222] text-white flex flex-col justify-between h-full hover:border-gray-700 transition-all shadow-sm">
      <div>
        {/* Зургийн хэсэг */}
        <div className="w-full h-32 bg-gray-950 rounded-xl overflow-hidden mb-2 flex items-center justify-center relative">
          {food.image ? (
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-600 text-xs">📸 Зураггүй</span>
          )}
        </div>

        {/* Нэр */}
        <div className="flex justify-between items-start mb-1">
          <h4 className="font-bold text-sm text-gray-100 truncate w-full">
            {food.name}
          </h4>
        </div>

        {/* Орц */}
        <p className="text-gray-400 text-[11px] line-clamp-2 mb-3 h-8">
          {food.ingredients}
        </p>
      </div>

      {/* Үнэ болон Нэмэх товч */}
      <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-800">
        <span className="font-extrabold text-orange-500 text-sm">
          {food.price.toLocaleString()}₮
        </span>
        <button
          onClick={() => addToCart(food)}
          className="bg-orange-500 text-white text-xs px-2.5 py-1.5 rounded-lg font-bold hover:bg-orange-600 transition-colors">
          + Нэмэх
        </button>
      </div>
    </div>
  );
};
