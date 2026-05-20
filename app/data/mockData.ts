// app/data/mockData.ts
import { Category, Food } from "../types/food";

export const mockCategories: Category[] = [
  { id: "appetizers", name: "Appetizers" },
  { id: "salads", name: "Salads" },
  { id: "main-dishes", name: "Main Dishes" },
];

export const mockFoods: Food[] = [
  // Appetizers ангиллын хоолнууд
  {
    id: "a1",
    name: "Finger food",
    image: "",
    price: 12000,
    ingredients: "Амтлагчтай зууш",
    categoryId: "appetizers",
  },
  {
    id: "a2",
    name: "Craven premium",
    image: "",
    price: 15000,
    ingredients: "Дээд зэргийн зууш",
    categoryId: "appetizers",
  },
  {
    id: "a3",
    name: "Baguette",
    image: "",
    price: 8000,
    ingredients: "Франц талхтай зууш",
    categoryId: "appetizers",
  },

  // Salads ангиллын хоолнууд
  {
    id: "s1",
    name: "Ceasar Salad",
    image: "",
    price: 14500,
    ingredients: "Тахианы махтай цезарь салат",
    categoryId: "salads",
  },
  {
    id: "s2",
    name: "Greek Salad",
    image: "",
    price: 13000,
    ingredients: "Грек загварын шинэ ногооны салат",
    categoryId: "salads",
  },
];
