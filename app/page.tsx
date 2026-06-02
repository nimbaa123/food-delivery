// app/page.tsx
"use client";

import { useState } from "react";
import { mockFoods, mockCategories } from "./data/mockData";
import { FoodCard } from "./components/FoodCard";
import { CartDrawer } from "./components/CartDrawer";
import { useCart } from "./context/CartContext";

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const { getCartCount } = useCart();

  return (
    <div className="min-h-screen bg-[#333333] text-white flex flex-col justify-between">
      {/* HEADER ХЭСЭГ */}
      <header className="bg-[#111111] px-6 py-4 border-b border-gray-800 sticky top-0 z-40">
        <div className="max-w-6xl w-full mx-auto flex justify-between items-center">
          {/* ЛОГО (NomNom) */}
          <div className="flex items-center gap-3">
            <img
              src="/images/Screenshot 2024-12-17 at 18.02.18 1 (Traced).svg"
              alt="NomNom Logo"
              className="w-8 h-8 select-none object-contain"
            />
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-white tracking-wider leading-none">
                NomNom
              </span>
              <span className="text-[10px] text-gray-400 font-medium mt-1">
                Swift delivery
              </span>
            </div>
          </div>

          {/* БАЙРШИЛ СОНГОХ */}
          <div className="hidden sm:flex items-center bg-[#1A1A1A] border border-gray-800 rounded-full px-4 py-2 gap-2 cursor-pointer hover:bg-[#222222] transition-colors">
            <img
              src="/images/Location Icon.svg"
              alt="Location"
              className="w-4 h-4 object-contain"
            />
            <span className="text-xs font-semibold text-gray-300">
              Delivery address:{" "}
              <span className="text-[#E53935]">Add Location</span>
            </span>
            <img
              src="/images/Chevron Icon.svg"
              alt="Arrow"
              className="w-3 h-3 opacity-60 object-contain"
            />
          </div>

          {/* БАРУУН ТАЛЫН ТОВЧЛУУРУУД */}
          <div className="flex items-center gap-3">
            {/* Сагсны товчлуур */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center relative hover:bg-gray-100 transition-colors shadow-md">
              <img
                src="/images/shopping-cart.svg"
                alt="Cart"
                className="w-5 h-5 invert object-contain"
              />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#E53935] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#111111]">
                  {getCartCount()}
                </span>
              )}
            </button>

            {/* Профайл товчлуур */}
            <button className="w-10 h-10 rounded-full bg-[#E53935] flex items-center justify-center hover:bg-[#D32F2F] transition-colors shadow-md">
              <img
                src="/images/user.svg"
                alt="User Profile"
                className="w-5 h-5 object-contain"
              />
            </button>
          </div>
        </div>
      </header>

      {/* ҮНДСЭН АГУУЛГА */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 md:p-6">
        {/* Баннер хэсэг */}
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
                <h3 className="text-xl font-bold text-gray-200 border-l-4 border-[#E53935] pl-3">
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

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}
