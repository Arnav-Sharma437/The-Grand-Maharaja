import foodRaw from "./foodMenu.json";
import drinksRaw from "./drinksMenu.json";
import { MenuCategory } from "@/types/menu";

export const FOOD_CATEGORIES: MenuCategory[] = (foodRaw as any[]).map((cat) => ({
  id: cat.id,
  title: cat.title,
  type: "food" as const,
  items: cat.items.map((item: any) => ({
    name: item.name,
    price: item.price || "",
    description: item.description || "",
    isSignature: Boolean(item.isSignature),
    tags: Array.isArray(item.tags) ? item.tags : [],
    chilli: item.chilli || "",
  })),
}));

export const DRINKS_CATEGORIES: MenuCategory[] = (drinksRaw as any[]).map((cat) => ({
  id: cat.id,
  title: cat.title,
  type: "drinks" as const,
  colHeaders: Array.isArray(cat.colHeaders) ? cat.colHeaders : [],
  items: cat.items.map((item: any) => {
    const rawPrices: string[] = Array.isArray(item.prices) ? item.prices : [];
    const hasColPrices = rawPrices.length > 1;
    const singlePrice =
      item.price || (rawPrices.length === 1 ? rawPrices[0] : "");

    return {
      name: item.name,
      price: singlePrice,
      prices: hasColPrices ? rawPrices : undefined,
      description: item.description || "",
      isSignature: Boolean(item.isSignature),
      tags: Array.isArray(item.tags) ? item.tags : [],
      chilli: item.chilli || "",
    };
  }),
}));

export const ALL_MENU_CATEGORIES: MenuCategory[] = [
  ...FOOD_CATEGORIES,
  ...DRINKS_CATEGORIES,
];

export const MENU_STATS = {
  totalFoodCategories: FOOD_CATEGORIES.length,
  totalFoodItems: FOOD_CATEGORIES.reduce((acc, cat) => acc + cat.items.length, 0),
  totalDrinksCategories: DRINKS_CATEGORIES.length,
  totalDrinksItems: DRINKS_CATEGORIES.reduce((acc, cat) => acc + cat.items.length, 0),
  totalItems:
    FOOD_CATEGORIES.reduce((acc, cat) => acc + cat.items.length, 0) +
    DRINKS_CATEGORIES.reduce((acc, cat) => acc + cat.items.length, 0),
};
