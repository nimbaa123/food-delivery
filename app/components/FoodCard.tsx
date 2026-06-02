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
    <div className="bg-white rounded-3xl p-4 flex flex-col justify-between h-full shadow-md border border-gray-100 transition-transform duration-200 hover:scale-[1.02]">
      <div>
        {/* Хоолны зураг (Бөөрөнхий булантай) */}
        <div className="w-full h-40 bg-gray-50 rounded-2xl overflow-hidden mb-4 relative flex items-center justify-center">
          {food.image ? (
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-400 text-xs">📸 Зураггүй</span>
          )}
        </div>

        {/* Нэр болон Үнэ (Нэг мөрөнд) */}
        <div className="flex justify-between items-baseline mb-2 gap-2">
          <h4 className="font-extrabold text-base text-[#E53935] tracking-tight truncate flex-1">
            {food.name}
          </h4>
          <span className="font-extrabold text-gray-900 text-sm whitespace-nowrap">
            ${food.price.toFixed(2)}
          </span>
        </div>

        {/* Тайлбар бичвэр */}
        <p className="text-gray-500 text-xs font-medium leading-relaxed line-clamp-2 mb-4">
          {food.ingredients}
        </p>
      </div>

      {/* Нэмэх товчлуур (Баруун доод буланд) */}
      <div className="flex justify-end mt-auto">
        <button
          onClick={() => addToCart(food)}
          className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-600 font-bold hover:bg-[#E53935] hover:text-white hover:border-[#E53935] transition-all shadow-sm text-sm">
          +
        </button>
      </div>
    </div>
  );
};
