// app/page.tsx
"use client";

import { useState } from "react";
import { mockFoods, mockCategories } from "./data/mockData";
import { FoodCard } from "./components/FoodCard";
import { CartDrawer } from "./components/CartDrawer";
import { useCart } from "./context/CartContext";

// 1. ЗААВАЛ "export default function Home()" гэж бичсэн байх ёстой!
export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const { getCartCount } = useCart();

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white flex flex-col justify-between">
      {/* Header Хэсэг */}
      <header className="bg-[#111111] px-6 py-4 border-b border-gray-800 flex justify-between items-center sticky top-0 z-40">
        <div className="flex items-center gap-6">
          <span className="text-xl font-extrabold text-orange-500 tracking-wider">
            FOOD DELIVERY
          </span>
        </div>
        <button
          onClick={() => setIsCartOpen(true)}
          className="bg-orange-500 text-white px-4 py-2 rounded-xl font-bold flex items-center gap-2">
          🛒 Сагс ({getCartCount()})
        </button>
      </header>

      {/* Үндсэн агуулга */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 md:p-6">
        {/* 2. Өмнөх алхам дээр оруулсан шинэ баннер */}
        <div className="w-full mb-8 rounded-3xl overflow-hidden shadow-2xl bg-[#111111] border border-gray-800">
          <div className="w-full relative aspect-[1200/500] sm:aspect-[1600/600] md:aspect-[2.4/1]">
            <img
              src="/images/hero-banner.jpg"
              alt="Today's Offer Banner"
              className="w-full h-full object-cover object-center select-none"
            />
          </div>
        </div>

        {/* Хоолны цэснүүд */}
        <div className="space-y-10">
          {mockCategories.map((category) => {
            const categoryFoods = mockFoods.filter(
              (food) => food.categoryId === category.id,
            );
            if (categoryFoods.length === 0) return null;

            return (
              <section key={category.id} className="space-y-4">
                <h3 className="text-xl font-bold text-gray-200 border-l-4 border-orange-500 pl-3">
                  {category.name}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {categoryFoods.map((food) => (
                    <FoodCard key={food.id} food={food} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>

      {/* Сагсны Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
} // 3. Энэ хаалт зөв хаагдсан эсэхийг шалгаарай!
