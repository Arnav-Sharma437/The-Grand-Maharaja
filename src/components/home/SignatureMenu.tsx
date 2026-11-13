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
    title: "Veg Special Maharaja",
    price: "£10.99",
    description: "Assorted garden vegetables cooked in our Chef's signature rich spiced royal gravy",
    image: "/images/food/veg-maharaja.jpg",
    alt: "Veg Special Maharaja royal curry at The Grand Maharaja",
  },
  {
    title: "Daal Makhani",
    price: "£8.99",
    description: "Whole black lentils slow-cooked with tomatoes, cream, and butter for a velvety texture",
    image: "/images/food/food-tgm-signature-dal-maharaja.jpg",
    alt: "Daal Makhani slow-simmered black lentils at The Grand Maharaja",
  },
  {
    title: "Dahi Puri",
    price: "£6.49",
    description: "Crispy puris loaded with spiced potatoes, sweetened yogurt, tangy chutneys and sev",
    image: "/images/food/food-tgm-royal-street-chaat.jpg",
    alt: "Dahi Puri freshly served at The Grand Maharaja",
  },
  {
    title: "The Royal Kulfi Delight",
    price: "£5.99",
    description: "Traditional Indian ice cream, rich, creamy, and infused with saffron and pistachios",
    image: "/images/food/food-tgm-royal-dessert.jpg",
    alt: "The Royal Kulfi Delight dessert at The Grand Maharaja",
  },
];

// Authentic Bar & Drinks Menu from The Grand Maharaja Official Drinks Menu
const BAR_DRINKS_MENU = [
  {
    title: "Madri (Draught)",
    price: "£5.49",
    description: "Crisp European draught lager poured fresh from tap (Pint: £5.49 / Half: £3.49)",
    image: "/images/icons/partner-beverage-madri.jpg",
    alt: "Madri Draught Beer at The Grand Maharaja",
  },
  {
    title: "Famous Grouse",
    price: "£3.49",
    description: "Fine blended Scotch whisky served neat, with ice, or mixer (Single: £3.49 / Double: £5.99)",
    image: "/images/icons/partner-beverage-famous_grouse.jpg",
    alt: "Famous Grouse Scotch Whisky at The Grand Maharaja",
  },
  {
    title: "Courvoisier VS",
    price: "£4.49",
    description: "Prestige French brandy with oak notes and floral bouquet (Single: £4.49 / Double: £7.49)",
    image: "/images/icons/partner-beverage-courvoisier.jpg",
    alt: "Courvoisier French Brandy at The Grand Maharaja",
  },
  {
    title: "Virgin Passionfruit Mojito",
    price: "£6.49",
    description: "Refreshing crushed mint, fresh lime, and aromatic passionfruit with sparkling soda",
    image: "/images/food/food-tgm-royal-mocktails.jpg",
    alt: "Virgin Passionfruit Mojito Mocktail at The Grand Maharaja",
  },
  {
    title: "J2O Apple & Raspberry",
    price: "£3.49",
    description: "Signature fruit blend, artisanal juice cordials & refreshing cold beverages",
    image: "/images/icons/partner-beverage-j20.jpg",
    alt: "J2O Apple and Raspberry Drink at The Grand Maharaja",
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
            Purity-certified vegetarian dining with genuine North &amp; South Indian flavours, street
            delicacies, and sizzlers paired with a fully licensed international bar.
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
                        <span className="font-playfair font-semibold text-base sm:text-[17px] text-[#8C6E2E] dark:text-[#D4AF37] shrink-0 group-hover:scale-105 transition-transform duration-200">
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
