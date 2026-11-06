"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Wine } from "lucide-react";

// Authentic Signature Food Dishes from thegrandmaharaja.co.uk
const SIGNATURE_FOOD_DISHES = [
  {
    title: "Manchow Soup",
    price: "£5.99",
    description: "Chinese Vegetarian soup made with mixed vegetables & crispy noodles",
    image: "/images/food/msoup.jpg",
    alt: "The Grand Maharaja Manchow Soup",
  },
  {
    title: "Cheese Chips",
    price: "£4.49",
    description: "Chips come with freshly grated bubbling cheese",
    image: "/images/food/Cheesy-Chips.jpg",
    alt: "The Grand Maharaja Cheese Chips",
  },
  {
    title: "Malai Kofta",
    price: "£10.99",
    description: "Paneer (Indian Cheese) Dumplings in Creamy Royal Cashew Sauce",
    image: "/images/food/Best-Malai-Kofta-recipe.jpg",
    alt: "The Grand Maharaja Royal Malai Kofta",
  },
  {
    title: "Boondi Raita",
    price: "£2.99",
    description: "Yogurt with soft mini bread puffs and authentic Indian seasoning",
    image: "/images/food/BOONDI-RAITA-500x500-1.jpg",
    alt: "The Grand Maharaja Boondi Raita",
  },
  {
    title: "Plain Dosa",
    price: "£5.49",
    description: "Crisp & soft golden rice & lentil crepe with traditional accompaniments",
    image: "/images/food/Plain-Dosa.jpg",
    alt: "The Grand Maharaja Plain Dosa",
  },
];

// Authentic Bar & Drinks Menu from thegrandmaharaja.co.uk
const BAR_DRINKS_MENU = [
  {
    title: "Madri (Draught)",
    price: "£3.95",
    description: "Crisp European draught beer poured fresh from tap",
    image: "/images/icons/partner-beverage-madri.jpg",
    alt: "Madri Draught Beer at The Grand Maharaja",
  },
  {
    title: "Famous Grouse",
    price: "£3.49",
    description: "Fine blended Scotch whisky served neat, with ice, or chosen mixer",
    image: "/images/icons/partner-beverage-famous_grouse.jpg",
    alt: "Famous Grouse Scotch Whisky at The Grand Maharaja",
  },
  {
    title: "Courvoisier",
    price: "£4.45",
    description: "Prestige French brandy with oak notes and floral bouquet",
    image: "/images/icons/partner-beverage-courvoisier.jpg",
    alt: "Courvoisier French Brandy at The Grand Maharaja",
  },
  {
    title: "Smirnoff Vodka",
    price: "£3.75",
    description: "Triple-distilled pure vodka served with citrus or selected cordials",
    image: "/images/icons/partner-beverage-smirnoff.jpg",
    alt: "Smirnoff Vodka at The Grand Maharaja",
  },
  {
    title: "J2O Apple & Raspberry",
    price: "£3.25",
    description: "Signature soft drink, artisanal juice blends & sparkling refreshments",
    image: "/images/icons/partner-beverage-j20.jpg",
    alt: "J2O Apple and Raspberry Drink at The Grand Maharaja",
  },
];

export function SignatureMenu() {
  return (
    <section className="relative w-full bg-[#F5F1EB]/60 py-16 sm:py-20 lg:py-24">
      {/* 1400px Strict Container */}
      <div
        className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10"
        style={{ maxWidth: "1400px" }}
      >
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#9B7B34]">
            HERITAGE GASTRONOMY
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-[46px] font-semibold text-[#1A1A1A] tracking-tight mt-1.5">
            Signature &Agrave; La Carte &amp; Bar
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#555555] leading-relaxed mt-3">
            Purity-certified vegetarian dining with genuine Gujarati &amp; Punjabi traditions paired
            with a fully licensed international bar.
          </p>
        </div>

        {/* 2-Column Cards Grid: Food Menu (Left) + Bar Menu (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-10 items-stretch">
          {/* Card 1: Signature Dishes (Food Menu) */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EBE6DC] shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col justify-between">
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between pb-5 border-b border-[#F0EBE3]">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] inline-block shrink-0" />
                  <h3 className="font-playfair text-xl sm:text-2xl font-semibold text-[#1A1A1A]">
                    Signature Dishes
                  </h3>
                </div>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#9B7B34]">
                  PURE VEGETARIAN
                </span>
              </div>

              {/* Dishes List */}
              <div className="divide-y divide-[#F0EBE3]/70 my-5">
                {SIGNATURE_FOOD_DISHES.map((dish) => (
                  <div
                    key={dish.title}
                    className="flex items-start gap-3.5 sm:gap-4 py-3.5 first:pt-1 last:pb-1 group"
                  >
                    {/* Dish Thumbnail */}
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 bg-[#F5F1EB] border border-[#EBE6DC]/80">
                      <Image
                        src={dish.image}
                        alt={dish.alt}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 56px, 64px"
                      />
                    </div>

                    {/* Dish Title, Price, Description */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between gap-2">
                        <h4 className="font-playfair text-base sm:text-[17px] font-semibold text-[#1A1A1A] group-hover:text-[#7D6328] transition-colors">
                          {dish.title}
                        </h4>
                        <span className="font-playfair font-semibold text-base sm:text-[17px] text-[#8C6E2E] shrink-0">
                          {dish.price}
                        </span>
                      </div>
                      <p className="text-xs text-[#666666] leading-relaxed mt-0.5 font-sans">
                        {dish.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 border-t border-[#F0EBE3]">
              <Link
                href="/images/menu/the-grand-maharaja-food-menu-889.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 bg-[#7D6328] hover:bg-[#6B531F] text-white text-xs font-semibold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 shadow-sm transition-all duration-200"
              >
                <span>VIEW FULL FOOD MENU</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 2: The Grand Maharaja's Bar (Drinks Menu) */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EBE6DC] shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col justify-between">
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between pb-5 border-b border-[#F0EBE3]">
                <div className="flex items-center gap-2.5">
                  <Wine className="w-5 h-5 text-[#8C6E2E] shrink-0" />
                  <h3 className="font-playfair text-xl sm:text-2xl font-semibold text-[#1A1A1A]">
                    The Grand Maharaja&apos;s Bar
                  </h3>
                </div>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#9B7B34]">
                  FULLY LICENSED BAR
                </span>
              </div>

              {/* Drinks List */}
              <div className="divide-y divide-[#F0EBE3]/70 my-5">
                {BAR_DRINKS_MENU.map((drink) => (
                  <div
                    key={drink.title}
                    className="flex items-start gap-3.5 sm:gap-4 py-3.5 first:pt-1 last:pb-1 group"
                  >
                    {/* Drink Thumbnail */}
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 bg-[#F5F1EB] border border-[#EBE6DC]/80">
                      <Image
                        src={drink.image}
                        alt={drink.alt}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 56px, 64px"
                      />
                    </div>

                    {/* Drink Title, Price, Description */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between gap-2">
                        <h4 className="font-playfair text-base sm:text-[17px] font-semibold text-[#1A1A1A] group-hover:text-[#7D6328] transition-colors">
                          {drink.title}
                        </h4>
                        <span className="font-playfair font-semibold text-base sm:text-[17px] text-[#8C6E2E] shrink-0">
                          {drink.price}
                        </span>
                      </div>
                      <p className="text-xs text-[#666666] leading-relaxed mt-0.5 font-sans">
                        {drink.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 border-t border-[#F0EBE3]">
              <Link
                href="/images/menu/the-grand-maharaja-drinks-menu-835.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 bg-[#1E1B18] hover:bg-[#312B25] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 shadow-sm transition-all duration-200"
              >
                <span>VIEW BAR &amp; DRINKS MENU</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignatureMenu;
