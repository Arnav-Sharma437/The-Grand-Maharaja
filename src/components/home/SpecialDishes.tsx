"use client";

import React from "react";
import Image from "next/image";
import { RoyalBackgroundGlow } from "@/components/ui/RoyalBackgroundGlow";

// Authentic curated dishes from The Grand Maharaja Official Menu
const CURATED_DISHES = [
  {
    category: "VEG CURRIES",
    title: "Daal Makhani",
    price: "£8.99",
    description:
      "Whole black lentils slow-cooked with tomatoes, cream, and butter for a velvety royal texture.",
    image: "/images/food/food-tgm-signature-dal-maharaja.jpg",
    alt: "The Grand Maharaja Daal Makhani",
  },
  {
    category: "PURI DELIGHTS",
    title: "Dahi Puri",
    price: "£6.49",
    description:
      "Crispy hollow puris filled with potatoes, topped with sweetened yogurt, tangy chutneys and sev.",
    image: "/images/food/food-tgm-royal-street-chaat.jpg",
    alt: "The Grand Maharaja Dahi Puri",
  },
  {
    category: "SIGNATURE MOCKTAIL",
    title: "Virgin Passionfruit Mojito",
    price: "£6.49",
    description:
      "Refreshing crushed mint, fresh lime, and aromatic passionfruit purée topped with sparkling soda.",
    image: "/images/food/food-tgm-royal-mocktails.jpg",
    alt: "The Grand Maharaja Virgin Passionfruit Mojito",
  },
  {
    category: "SWEET TEMPTATION",
    title: "The Royal Kulfi Delight",
    price: "£5.99",
    description:
      "Traditional Indian ice cream, rich, creamy, and infused with saffron, cardamom, and roasted pistachios.",
    image: "/images/food/food-tgm-royal-dessert.jpg",
    alt: "The Grand Maharaja The Royal Kulfi Delight Dessert",
  },
];

export function SpecialDishes() {
  return (
    <section className="relative w-full bg-white dark:bg-[#0D0C0A] py-16 sm:py-20 lg:py-24 overflow-hidden transition-colors duration-200">
      {/* Live Royal Background Effects */}
      <RoyalBackgroundGlow variant="section" particleCount={32} showMandala={true} />

      {/* 1400px Strict Container */}
      <div
        className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10"
        style={{ maxWidth: "1400px" }}
      >
        {/* Section Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#9B7B34] dark:text-[#D4AF37]">
              SPECIAL FOR YOU
            </p>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#1A1A1A] dark:text-[#F5F1EB] tracking-tight mt-1.5">
              Try Some Delicious Dishes
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#555555] dark:text-[#A8A194] max-w-md leading-relaxed font-sans">
            Every creation is prepared adhering to royal Indian gastronomic standards with fresh
            herbs, unadulterated churned dairy, and sacred care.
          </p>
        </div>

        {/* Main Content Grid: Large Highlight Card (Left) + 4 Curated Dish Cards (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-stretch">
          {/* Left Column: Main Course Highlight Card */}
          <div className="card-hover-elevate lg:col-span-7 flex flex-col justify-between bg-[#FAF8F5] dark:bg-[#161310] rounded-2xl p-4 sm:p-5 border border-[#EBE6DC] dark:border-[#2C261D] shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:border-[#9B7B34]/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] group transition-all duration-500">
            {/* Image with Badges */}
            <div className="relative w-full h-[300px] sm:h-[380px] lg:h-[420px] rounded-xl overflow-hidden bg-[#1A1A1A]">
              <Image
                src="/images/food/food-tgm-royal-tandoori-paneer.jpg"
                alt="Paneer Shashlik Sizzler - Served on sizzling hot plate at The Grand Maharaja"
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />

              {/* Top Left Badge: THE EMPEROR'S SIZZLERS */}
              <div className="absolute top-4 left-4 z-10 bg-white/95 dark:bg-[#1C1813]/95 backdrop-blur-xs text-[#1A1A1A] dark:text-[#F5F1EB] text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm">
                THE EMPEROR&apos;S SIZZLERS
              </div>

              {/* Top Right Badge: • SIZZLING HOT PLATTER with Pulsing Live Indicator */}
              <div className="absolute top-4 right-4 z-10 bg-[#0D3826] text-[#F3E5AB] text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
                </span>
                <span>SIZZLING HOT PLATTER</span>
              </div>
            </div>

            {/* Bottom Dish Info */}
            <div className="pt-4 sm:pt-5">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="font-playfair text-xl sm:text-2xl font-semibold text-[#1A1A1A] dark:text-[#F5F1EB] group-hover:text-[#9B7B34] dark:group-hover:text-[#D4AF37] transition-colors">
                  Paneer Shashlik Sizzler
                </h3>
                <span className="font-playfair text-base sm:text-lg font-semibold text-[#8C6E2E] dark:text-[#D4AF37]">
                  Chef&apos;s Signature &bull; &pound;12.99
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#555555] dark:text-[#A8A194] leading-relaxed mt-2 font-sans">
                Chunks of paneer marinated in aromatic spices, skewered with bell peppers and onions,
                served sizzling on a hot cast-iron platter.
              </p>
            </div>
          </div>

          {/* Right Column: 4 Curated Dish Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3.5 sm:gap-4">
            {CURATED_DISHES.map((dish) => (
              <div
                key={dish.title}
                className="bg-white dark:bg-[#14120E] rounded-xl p-3 sm:p-3.5 border border-[#EBE6DC] dark:border-[#28221A] shadow-sm hover:shadow-md hover:border-[#9B7B34]/60 hover:translate-x-1.5 transition-all duration-300 flex items-center gap-4 group cursor-pointer"
              >
                {/* Dish Thumbnail */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden shrink-0 bg-[#F5F1EB] dark:bg-[#1E1B15]">
                  <Image
                    src={dish.image}
                    alt={dish.alt}
                    fill
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 96px, 112px"
                  />
                </div>

                {/* Dish Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-[#9B7B34] dark:text-[#D4AF37]">
                      {dish.category}
                    </p>
                    <span className="font-playfair font-semibold text-xs sm:text-sm text-[#8C6E2E] dark:text-[#D4AF37] shrink-0">
                      {dish.price}
                    </span>
                  </div>
                  <h4 className="font-playfair text-base sm:text-lg font-semibold text-[#1A1A1A] dark:text-[#F5F1EB] group-hover:text-[#7D6328] dark:group-hover:text-[#D4AF37] transition-colors mt-0.5 truncate">
                    {dish.title}
                  </h4>
                  <p className="text-xs sm:text-[13px] text-[#666666] dark:text-[#A8A194] leading-relaxed mt-1 line-clamp-2 font-sans">
                    {dish.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpecialDishes;
