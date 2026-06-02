// app/components/AuthLayout.tsx
"use client";

import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-[#111111] text-white flex flex-col md:flex-row font-sans">
      {/* ЗҮҮН ТАЛ - БҮРТГҮҮЛЭХ / НЭВТРЭХ ФОРМ ХЭСЭГ */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 sm:p-12 lg:p-20 z-10">
        <div className="w-full max-w-md space-y-8">
          {/* Лого хэсэг */}

          {children}
        </div>
      </div>

      {/* БАРУУН ТАЛ - ЧИНИЙ ОРУУЛСАН ХҮРГЭЛТИЙН ЗУРАГ (`delivery.jpg`) */}
      <div className="hidden md:block w-1/2 relative bg-[#1A1A1A]">
        <img
          src="/images/delivery.jpg"
          alt="Food Delivery Service"
          className="w-full h-full object-cover object-center select-none rounded-2xl"
        />
        {/* Figma дээрх шиг зургийг бага зэрэг зөөлрүүлэх харанхуй маск */}
        <div className="absolute inset-0 bg-black/10" />
      </div>
    </div>
  );
}
