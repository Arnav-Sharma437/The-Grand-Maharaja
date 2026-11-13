"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Wine } from "lucide-react";
import { RoyalBackgroundGlow } from "@/components/ui/RoyalBackgroundGlow";

// Authentic Signature Food Dishes from The Grand Maharaja Official Menu
const SIGNATURE_FOOD_DISHES = [
  {
    title: "Paneer Shashlik Sizzler",
    price: "£12.99",
    description: "Marinated cottage cheese skewered with bell peppers and onions on a sizzling hot plate",
    image: "/images/food/food-tgm-royal-tandoori-paneer.jpg",
    alt: "Paneer Shashlik Sizzler freshly prepared at The Grand Maharaja",
  },
  {
    title: "Royal Kaju Lasaniya",
    price: "£12.99",
    description: "Whole roasted cashews in a fiery garlic and rich tomato gravy, an imperial delicacy",
    image: "/images/food/Kaju-Paneer.png",
    alt: "Royal Kaju Lasaniya curry at The Grand Maharaja",
  },
  {
    title: "Paneer Tikka Masala",
    price: "£10.99",
    description: "Grilled cottage cheese simmered in a velvety spiced tomato and butter gravy",
    image: "/images/food/restaurant-style-paneer-makhani-recipe.webp",
    alt: "Paneer Tikka Masala at The Grand Maharaja",
  },
  {
    title: "TGM Special Biryani (with Raita)",
    price: "£10.49",
    description: "Fragrant basmati rice layered with garden vegetables & saffron, served with cooling raita",
    image: "/images/food/veg-biryani-and-raita.jpg",
    alt: "TGM Special Biryani with Raita at The Grand Maharaja",
  },
  {
    title: "Daal Makhani",
    price: "£8.99",
    description: "Whole black lentils slow-cooked with tomatoes, fresh dairy cream, and churned butter",
    image: "/images/food/food-tgm-signature-dal-maharaja.jpg",
    alt: "Daal Makhani slow-simmered black lentils at The Grand Maharaja",
  },
];

// Authentic Premium Spirits & Draught Bar Menu from The Grand Maharaja Official Drinks Menu
const BAR_DRINKS_MENU = [
  {
    title: "JW Black Label (12 Year)",
    price: "£3.99 / £5.99",
    description: "Iconic 12-year blended Scotch whisky with rich smokiness and complex malt character",
    image: "/images/icons/partner-beverage-jw-black-label.jpg",
    alt: "Johnnie Walker Black Label 12 Year Scotch Whisky at The Grand Maharaja",
  },
  {
    title: "Glenfiddich (12 Year Single Malt)",
    price: "£4.99 / £7.49",
    description: "Prestige Speyside single malt Scotch aged in fine American oak and European sherry casks",
    image: "/images/icons/partner-beverage-glenfiddich.jpg",
    alt: "Glenfiddich 12 Year Single Malt Scotch at The Grand Maharaja",
  },
  {
    title: "Courvoisier VS Cognac",
    price: "£4.99 / £6.99",
    description: "Prestige French luxury Cognac with subtle notes of spring blossoms and toasted oak",
    image: "/images/icons/partner-beverage-courvoisier.jpg",
    alt: "Courvoisier VS French Cognac at The Grand Maharaja",
  },
  {
    title: "Grey Goose Luxury Vodka",
    price: "£5.49 / £6.99",
    description: "Top-shelf French wheat vodka distilled in Cognac region for unmatched velvety smoothness",
    image: "/images/icons/partner-beverage-grey-goose.jpg",
    alt: "Grey Goose Luxury French Vodka at The Grand Maharaja",
  },
  {
    title: "Kingfisher Premium Draught",
    price: "£4.99 / £3.49",
    description: "The King of Indian draught lagers poured ice-cold fresh from the bar tap (Pint / Half)",
    image: "/images/icons/partner-beverage-kingfisher.jpg",
    alt: "Kingfisher Premium Draught Beer at The Grand Maharaja",
  },
];

export function SignatureMenu() {
  return (
    <section className="relative w-full bg-[#F5F1EB]/60 dark:bg-[#14120E] py-16 sm:py-20 lg:py-24 overflow-hidden transition-colors duration-200">
      {/* Live Royal Background Effects */}
      <RoyalBackgroundGlow variant="warm" particleCount={36} showMandala={true} />

      {/* 1400px Strict Container */}
      <div
        className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10"
        style={{ maxWidth: "1400px" }}
      >
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#9B7B34] dark:text-[#D4AF37]">
            HERITAGE GASTRONOMY
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-[46px] font-semibold text-[#1A1A1A] dark:text-[#F5F1EB] tracking-tight mt-1.5">
            Signature &Agrave; La Carte &amp; Bar
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#555555] dark:text-[#A8A194] leading-relaxed mt-3">
            Purity-certified vegetarian dining featuring royal sizzlers, cashew gravies, and biryanis paired
            with our fully licensed premium spirits &amp; international bar.
          </p>
        </div>

        {/* 2-Column Cards Grid: Food Menu (Left) + Bar Menu (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-10 items-stretch">
          {/* Card 1: Signature Dishes (Food Menu) */}
          <div className="card-hover-elevate bg-white dark:bg-[#181511] rounded-3xl p-6 sm:p-8 border border-[#EBE6DC] dark:border-[#2C261D] shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:border-[#9B7B34]/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] flex flex-col justify-between transition-all duration-300">
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between pb-5 border-b border-[#F0EBE3] dark:border-[#221D16]">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]"></span>
                  </span>
                  <h3 className="font-playfair text-xl sm:text-2xl font-semibold text-[#1A1A1A] dark:text-[#F5F1EB]">
                    Signature Dishes
                  </h3>
                </div>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#9B7B34] dark:text-[#D4AF37]">
                  PURE VEGETARIAN
                </span>
              </div>

              {/* Dishes List */}
              <div className="divide-y divide-[#F0EBE3]/70 dark:divide-[#221D16] my-5">
                {SIGNATURE_FOOD_DISHES.map((dish) => (
                  <div
                    key={dish.title}
                    className="flex items-start gap-3.5 sm:gap-4 p-2.5 -mx-2.5 rounded-xl hover:bg-[#FAF6EE] dark:hover:bg-[#1D1914] transition-all duration-200 group cursor-pointer"
                  >
                    {/* Dish Thumbnail */}
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 bg-[#F5F1EB] dark:bg-[#201C16] border border-[#EBE6DC]/80 dark:border-[#2C261D] shadow-xs group-hover:border-[#9B7B34]/50 transition-colors">
                      <Image
                        src={dish.image}
                        alt={dish.alt}
                        fill
                        className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 640px) 56px, 64px"
                      />
                    </div>

                    {/* Dish Title, Price, Description */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between gap-2">
                        <h4 className="font-playfair text-base sm:text-[17px] font-semibold text-[#1A1A1A] dark:text-[#F5F1EB] group-hover:text-[#7D6328] dark:group-hover:text-[#D4AF37] transition-colors">
                          {dish.title}
                        </h4>
                        <span className="font-playfair font-semibold text-base sm:text-[17px] text-[#8C6E2E] dark:text-[#D4AF37] shrink-0 group-hover:scale-105 transition-transform duration-200">
                          {dish.price}
                        </span>
                      </div>
                      <p className="text-xs text-[#666666] dark:text-[#A0988A] leading-relaxed mt-0.5 font-sans">
                        {dish.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 border-t border-[#F0EBE3] dark:border-[#221D16]">
              <Link
                href="/menu?tab=food"
                className="shimmer-hover w-full py-3.5 px-6 bg-[#7D6328] hover:bg-[#6B531F] dark:bg-[#8C6E2E] dark:hover:bg-[#A38137] text-white text-xs font-semibold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 shadow-sm hover:shadow-[0_8px_20px_rgba(125,99,40,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group/btn"
              >
                <span>VIEW FULL FOOD MENU</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: The Grand Maharaja's Bar (Drinks Menu) */}
          <div className="card-hover-elevate bg-white dark:bg-[#181511] rounded-3xl p-6 sm:p-8 border border-[#EBE6DC] dark:border-[#2C261D] shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:border-[#9B7B34]/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] flex flex-col justify-between transition-all duration-300">
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between pb-5 border-b border-[#F0EBE3] dark:border-[#221D16]">
                <div className="flex items-center gap-2.5">
                  <Wine className="w-5 h-5 text-[#8C6E2E] dark:text-[#D4AF37] shrink-0 transition-transform duration-300 hover:rotate-12" />
                  <h3 className="font-playfair text-xl sm:text-2xl font-semibold text-[#1A1A1A] dark:text-[#F5F1EB]">
                    The Grand Maharaja&apos;s Bar
                  </h3>
                </div>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#9B7B34] dark:text-[#D4AF37]">
                  FULLY LICENSED BAR
                </span>
              </div>

              {/* Drinks List */}
              <div className="divide-y divide-[#F0EBE3]/70 dark:divide-[#221D16] my-5">
                {BAR_DRINKS_MENU.map((drink) => (
                  <div
                    key={drink.title}
                    className="flex items-start gap-3.5 sm:gap-4 p-2.5 -mx-2.5 rounded-xl hover:bg-[#FAF6EE] dark:hover:bg-[#1D1914] transition-all duration-200 group cursor-pointer"
                  >
                    {/* Drink Thumbnail */}
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 bg-[#F5F1EB] dark:bg-[#201C16] border border-[#EBE6DC]/80 dark:border-[#2C261D] shadow-xs group-hover:border-[#9B7B34]/50 transition-colors">
                      <Image
                        src={drink.image}
                        alt={drink.alt}
                        fill
                        className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 640px) 56px, 64px"
                      />
                    </div>

                    {/* Drink Title, Price, Description */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between gap-2">
                        <h4 className="font-playfair text-base sm:text-[17px] font-semibold text-[#1A1A1A] dark:text-[#F5F1EB] group-hover:text-[#7D6328] dark:group-hover:text-[#D4AF37] transition-colors">
                          {drink.title}
                        </h4>
                        <span className="font-playfair font-semibold text-xs sm:text-sm text-[#8C6E2E] dark:text-[#D4AF37] shrink-0 whitespace-nowrap group-hover:scale-105 transition-transform duration-200">
                          {drink.price}
                        </span>
                      </div>
                      <p className="text-xs text-[#666666] dark:text-[#A0988A] leading-relaxed mt-0.5 font-sans">
                        {drink.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 border-t border-[#F0EBE3] dark:border-[#221D16]">
              <Link
                href="/menu?tab=drinks"
                className="shimmer-hover w-full py-3.5 px-6 bg-[#1E1B18] hover:bg-[#312B25] dark:bg-[#2A241C] dark:hover:bg-[#383126] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 shadow-sm hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 border border-transparent dark:border-[#383126] group/btn"
              >
                <span>VIEW BAR &amp; DRINKS MENU</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignatureMenu;
