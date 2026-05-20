// app/components/CategoryMenu.tsx
import React from "react";
import { Category } from "../types/food";

interface CategoryMenuProps {
  categories: Category[];
  selectedCategory: string; // Одоо сонгогдсон байгаа ангиллын ID
  onSelectCategory: (id: string) => void; // Ангилал солигдоход ажиллах функц
}

export const CategoryMenu: React.FC<CategoryMenuProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex gap-3 overflow-x-auto pb-4 my-6 no-scrollbar">
      {/* "Бүгд" гэсэн товчлуур - Бүх хоолыг зэрэг харуулахад ашиглана */}
      <button
        onClick={() => onSelectCategory("all")}
        className={`px-6 py-2 rounded-full font-medium transition-colors whitespace-nowrap ${
          selectedCategory === "all"
            ? "bg-orange-500 text-white"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}>
        Бүгд
      </button>

      {/* Бусад ангиллуудыг датагаас гогцоодож харуулах */}
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelectCategory(category.id)}
          className={`px-6 py-2 rounded-full font-medium transition-colors whitespace-nowrap ${
            selectedCategory === category.id
              ? "bg-orange-500 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}>
          {category.name}
        </button>
      ))}
    </div>
  );
};
