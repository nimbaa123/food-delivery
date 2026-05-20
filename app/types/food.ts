// src/types/index.ts

// 1. Ангилал (Жишээ нь: Пицца, Шөл, Ундаа)
export interface Category {
  id: string;
  name: string;
}

// 2. Хоолны мэдээлэл
export interface Food {
  id: string;
  name: string;
  image: string;
  price: number;
  ingredients: string;
  categoryId: string; // Аль ангилалд хамаарахыг заана
}

// 3. Хэрэглэгчийн мэдээлэл
export interface User {
  id: string;
  name: string;
  email: string;
  role: "USER" | "ADMIN";
}
// app/types/food.ts-ийн төгсгөлд нэмэх:
export interface CartItem {
  food: Food;
  quantity: number; // Хэдэн ширхэг захиалсан бэ
}
