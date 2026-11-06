import { HeroBanner, SpecialDishes } from "@/components/home";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col w-full bg-white">
      {/* 1. Hero / Banner Section with #F5F1EB (60%) warm ivory background */}
      <HeroBanner />

      {/* 2. Special For You / Delicious Dishes Section with White (#FFFFFF) background */}
      <SpecialDishes />

      {/* Subsequent sections will continue to alternate backgrounds */}
    </main>
  );
}
