"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Utensils,
  Wine,
  Download,
  ChevronDown,
  Phone,
  Calendar,
  Sparkles,
} from "lucide-react";
import {
  FOOD_CATEGORIES,
  DRINKS_CATEGORIES,
  ALL_MENU_CATEGORIES,
} from "@/data/menuData";
import { MenuCategory } from "@/types/menu";

export function MenuExplorer() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab");

  // Tab state: "food" | "drinks" | "all"
  const [activeTab, setActiveTab] = useState<"food" | "drinks" | "all">(() => {
    if (initialTab === "drinks") return "drinks";
    if (initialTab === "all") return "all";
    return "food"; // Default to Food Menu for instant luxury culinary impact
  });

  // Track expanded category IDs. Default: all open so content is ALWAYS visible
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>(() => {
    const map: Record<string, boolean> = {};
    ALL_MENU_CATEGORIES.forEach((cat) => {
      map[cat.id] = true;
    });
    return map;
  });

  // Sync tab with URL if param changes
  useEffect(() => {
    if (initialTab === "food" || initialTab === "drinks" || initialTab === "all") {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  // Toggle single category dropdown
  const toggleCategory = (id: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Determine current categories to display
  const currentCategories: MenuCategory[] =
    activeTab === "food"
      ? FOOD_CATEGORIES
      : activeTab === "drinks"
      ? DRINKS_CATEGORIES
      : ALL_MENU_CATEGORIES;

  // Determine correct PDF download link
  const currentPdfUrl =
    activeTab === "drinks"
      ? "/images/menu/the-grand-maharaja-drinks-menu-835.pdf"
      : activeTab === "all"
      ? "/images/menu/the-grand-maharaja-complete-menu-893.pdf"
      : "/images/menu/the-grand-maharaja-food-menu-889.pdf";

  return (
    <div className="w-full">
      {/* 1. Elegant Header Bar with Quick Switcher (Exact Royal Style) */}
      <div className="bg-[#FAF8F5] dark:bg-[#15120E] border-b border-[#EAE3D6] dark:border-[#262017] py-8 sm:py-10 transition-colors duration-200">
        <div
          className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex flex-col md:flex-row md:items-center justify-between gap-6"
          style={{ maxWidth: "1400px" }}
        >
          {/* Left: Royal Section Title & Subtitle */}
          <div>
            <div className="flex items-center gap-3">
              <h2 className="font-playfair text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#1A1A1A] dark:text-[#F5F1EB] tracking-tight">
                OUR MENU
              </h2>
              <span className="hidden sm:inline-block w-12 h-[2px] bg-[#9B7B34] dark:bg-[#D4AF37]" />
            </div>
            <p className="font-sans text-xs sm:text-[13px] font-semibold uppercase tracking-[0.16em] text-[#8C6E2E] dark:text-[#D4AF37] mt-1.5">
              AUTHENTIC FLAVOURS &nbsp;&bull;&nbsp; PURE VEGETARIAN &amp; LICENSED BAR
            </p>
          </div>

          {/* Right: Clean Royal Switch Pills */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            <div className="inline-flex items-center p-1 bg-white dark:bg-[#1E1A14] rounded-full border border-[#E6E0D4] dark:border-[#2C261D] shadow-sm">
              <button
                type="button"
                onClick={() => setActiveTab("food")}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-[12.5px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeTab === "food"
                    ? "bg-[#9B7B34] dark:bg-[#D4AF37] text-white dark:text-[#14120E] shadow-sm"
                    : "text-[#666666] dark:text-[#A8A194] hover:text-[#1A1A1A] dark:hover:text-[#F5F1EB]"
                }`}
              >
                Food Menu
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("drinks")}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-[12.5px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeTab === "drinks"
                    ? "bg-[#9B7B34] dark:bg-[#D4AF37] text-white dark:text-[#14120E] shadow-sm"
                    : "text-[#666666] dark:text-[#A8A194] hover:text-[#1A1A1A] dark:hover:text-[#F5F1EB]"
                }`}
              >
                Drinks Menu
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("all")}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-[12.5px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeTab === "all"
                    ? "bg-[#9B7B34] dark:bg-[#D4AF37] text-white dark:text-[#14120E] shadow-sm"
                    : "text-[#666666] dark:text-[#A8A194] hover:text-[#1A1A1A] dark:hover:text-[#F5F1EB]"
                }`}
              >
                All Menus
              </button>
            </div>

            {/* Direct Official PDF Download Pill */}
            <a
              href={currentPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white dark:bg-[#1E1A14] border border-[#E6E0D4] dark:border-[#2C261D] rounded-full text-xs sm:text-[12.5px] font-bold text-[#8C6E2E] dark:text-[#D4AF37] hover:border-[#8C6E2E] dark:hover:border-[#D4AF37] shadow-sm transition-all duration-200"
            >
              <Download className="w-3.5 h-3.5" />
              <span>PDF ⬇</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Menu Grid (3 Columns of Dropdown Cards Matching Live Site) */}
      <div
        className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-10 sm:py-12 lg:py-16"
        style={{ maxWidth: "1400px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-start">
          {currentCategories.map((category) => {
            const isOpen = openCategories[category.id] ?? true;

            return (
              <div
                key={category.id}
                id={category.id}
                className="bg-white dark:bg-[#161310] rounded-2xl border border-[#E8E1D0] dark:border-[#2A241C] shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] overflow-hidden transition-all duration-200 scroll-mt-24"
              >
                {/* Category Header (Clickable Dropdown Toggle) */}
                <button
                  type="button"
                  onClick={() => toggleCategory(category.id)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-[#FAF7F2] dark:hover:bg-[#1D1914] transition-colors duration-150 border-b border-[#F0EBE0] dark:border-[#241E15] group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    {/* Icon Badge */}
                    <div className="w-9 h-9 rounded-xl bg-[#FAF6EE] dark:bg-[#201C16] border border-[#E8E1D0] dark:border-[#2F2920] flex items-center justify-center shrink-0 text-[#8C6E2E] dark:text-[#D4AF37]">
                      {category.type === "food" ? (
                        <Utensils className="w-4 h-4" />
                      ) : (
                        <Wine className="w-4 h-4" />
                      )}
                    </div>

                    <div>
                      <h3 className="font-playfair text-base sm:text-lg font-bold text-[#1A1A1A] dark:text-[#F5F1EB] group-hover:text-[#9B7B34] dark:group-hover:text-[#D4AF37] transition-colors leading-tight">
                        {category.title}
                      </h3>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C6E2E] dark:text-[#D4AF37] block mt-0.5">
                        {category.items.length} {category.items.length === 1 ? "Item" : "Items"}
                      </span>
                    </div>
                  </div>

                  {/* Dropdown Chevron Arrow Button */}
                  <div className="w-7 h-7 rounded-full bg-[#FAF8F5] dark:bg-[#201C16] border border-[#E8E2D5] dark:border-[#2D271E] flex items-center justify-center text-[#8C6E2E] dark:text-[#D4AF37] group-hover:bg-[#9B7B34] group-hover:text-white dark:group-hover:bg-[#D4AF37] dark:group-hover:text-[#14120E] transition-all">
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>
                </button>

                {/* Drinks Column Header if multi-price (e.g. HALF / FULL or SINGLE / DOUBLE) */}
                {isOpen && category.colHeaders && category.colHeaders.length > 0 && (
                  <div className="px-5 pt-2.5 pb-1 flex justify-end gap-5 text-[10.5px] font-bold tracking-wider uppercase text-[#8C6E2E] dark:text-[#D4AF37] bg-[#FAF8F5]/80 dark:bg-[#1A1611]/80 border-b border-[#F0EBE0] dark:border-[#241E15]">
                    {category.colHeaders.map((header, i) => (
                      <span key={i} className="w-12 text-right">
                        {header}
                      </span>
                    ))}
                  </div>
                )}

                {/* Category Items List */}
                {isOpen && (
                  <div className="p-4 sm:p-5 space-y-3.5 divide-y divide-[#F5F1EB] dark:divide-[#201C16]">
                    {category.items.map((item, idx) => (
                      <div
                        key={`${item.name}-${idx}`}
                        className={`${
                          idx > 0 ? "pt-3.5" : ""
                        } group/item p-1 -mx-1 rounded-lg hover:bg-[#FAF8F5] dark:hover:bg-[#1D1914] transition-colors`}
                      >
                        {/* Title Row: Name, Crown, Tags, Chillies & Price */}
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-1.5">
                              {/* Signature Crown */}
                              {item.isSignature && (
                                <span
                                  title="Chef Signature"
                                  className="text-amber-500 text-xs inline-block"
                                >
                                  👑
                                </span>
                              )}

                              {/* Dish / Drink Name */}
                              <h4 className="font-sans text-xs sm:text-[13px] font-bold text-[#1A1A1A] dark:text-[#F5F1EB] group-hover/item:text-[#9B7B34] dark:group-hover/item:text-[#D4AF37] transition-colors uppercase tracking-wide leading-snug">
                                {item.name}
                              </h4>

                              {/* Tag Pills (e.g. OG, J, D, N, V) */}
                              {item.tags && item.tags.length > 0 && (
                                <div className="inline-flex items-center gap-1 ml-0.5">
                                  {item.tags.map((tag, tIdx) => (
                                    <span
                                      key={tIdx}
                                      className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#FAF0E6] dark:bg-[#2A2015] text-[#B45309] dark:text-[#F59E0B] border border-[#FDE68A] dark:border-[#78350F] uppercase"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              )}

                              {/* Chillies */}
                              {item.chilli && (
                                <span className="text-xs" title={`Spiciness: ${item.chilli}`}>
                                  {item.chilli}
                                </span>
                              )}
                            </div>

                            {/* Description */}
                            {item.description && (
                              <p className="text-[11.5px] sm:text-xs text-[#666666] dark:text-[#A8A194] leading-relaxed mt-1 font-sans">
                                {item.description}
                              </p>
                            )}
                          </div>

                          {/* Price */}
                          <div className="shrink-0 text-right">
                            {item.prices && item.prices.length > 1 ? (
                              <div className="flex items-center gap-5">
                                {item.prices.map((p, pIdx) => (
                                  <span
                                    key={pIdx}
                                    className="w-12 text-right font-playfair font-bold text-xs sm:text-[13px] text-[#7D6328] dark:text-[#D4AF37]"
                                  >
                                    {p}
                                  </span>
                                ))}
                              </div>
                            ) : (
                              <span className="font-playfair font-bold text-xs sm:text-sm text-[#7D6328] dark:text-[#D4AF37] inline-block">
                                {item.price}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Bottom Table Reservation Banner */}
      <div className="bg-[#FAF8F5] dark:bg-[#14120E] border-t border-[#E8E2D5] dark:border-[#241E15] py-12 sm:py-14">
        <div
          className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 text-center"
          style={{ maxWidth: "1400px" }}
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8C6E2E] dark:text-[#D4AF37] block">
            ROYAL HOSPITALITY IN LEICESTER
          </span>
          <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-[#1A1A1A] dark:text-[#F5F1EB] mt-1.5">
            Ready to Experience The Grand Maharaja?
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#666] dark:text-[#A0988A] max-w-lg mx-auto mt-2 leading-relaxed">
            Book your imperial dining table today or contact our team for private celebration banquets.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3.5">
            <a
              href="tel:+01165070296"
              className="shimmer-hover inline-flex items-center gap-2 px-6 py-3 bg-[#7D6328] hover:bg-[#6B531F] dark:bg-[#8C6E2E] dark:hover:bg-[#A38137] text-white text-xs sm:text-[12.5px] font-bold uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>CALL +0116 507 0296</span>
            </a>

            <Link
              href="/#banquets"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-[#1E1A14] text-[#1A1A1A] dark:text-[#F5F1EB] border border-[#E0D8CA] dark:border-[#2C261D] hover:border-[#7D6328] text-xs sm:text-[12.5px] font-bold uppercase tracking-wider rounded-xl shadow-sm transition-all duration-200"
            >
              <Calendar className="w-3.5 h-3.5 text-[#7D6328] dark:text-[#D4AF37]" />
              <span>PLAN A BANQUET</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
