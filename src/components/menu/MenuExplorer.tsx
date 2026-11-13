"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Utensils,
  Wine,
  Download,
  ChevronDown,
  Phone,
  Calendar,
  Search,
  X,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import {
  FOOD_CATEGORIES,
  DRINKS_CATEGORIES,
  ALL_MENU_CATEGORIES,
} from "@/data/menuData";
import { MenuCategory, MenuItem } from "@/types/menu";

// Popular curated search suggestions
const POPULAR_SUGGESTIONS = [
  "Paneer",
  "Dosa",
  "Kurkuri Bhindi",
  "Dal Makhani",
  "Garlic Naan",
  "Chaat",
  "Kingfisher",
  "Mojito",
  "Rasmalai",
];

// Common culinary synonym mapping for smart related dish discovery
const SYNONYM_MAP: Record<string, string[]> = {
  paneer: ["cheese", "kofta", "shahi", "makhani"],
  cheese: ["paneer", "dosa", "chips"],
  bread: ["naan", "kulcha", "roti", "bhature", "puri"],
  roti: ["naan", "kulcha", "bread", "puri"],
  naan: ["kulcha", "roti", "bread"],
  curry: ["dal", "masala", "korma", "kofta", "gravy", "subji", "paneer"],
  dal: ["daal", "makhani", "lentils", "tadka"],
  chaat: ["puri", "bhel", "samosa", "tikki", "sev"],
  snack: ["starter", "mogo", "bhajiya", "samosa", "chaat", "chips"],
  starter: ["mogo", "bhajiya", "chaat", "puri", "sizzler"],
  sweet: ["dessert", "gulab jamun", "rasmalai", "kulfi", "ice cream"],
  dessert: ["sweet", "gulab jamun", "rasmalai", "kulfi", "ice cream", "shrikhand"],
  drink: ["beer", "cocktail", "mocktail", "wine", "juice", "whisky"],
  beer: ["draught", "cobra", "kingfisher", "madri", "bottle"],
  cocktail: ["martini", "mojito", "mocktail", "gin", "rum"],
  mocktail: ["cocktail", "juice", "cooler", "lassi", "shake"],
  rice: ["biryani", "pulao", "fried rice"],
  spicy: ["chilli", "schezwan", "hot"],
};

export function MenuExplorer() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab");

  // Tab state: "food" | "drinks" | "all"
  const [activeTab, setActiveTab] = useState<"food" | "drinks" | "all">(() => {
    if (initialTab === "drinks") return "drinks";
    if (initialTab === "all") return "all";
    return "food";
  });

  // Search input state
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Track expanded category IDs. Default: all open so dishes are immediately accessible
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>(() => {
    const map: Record<string, boolean> = {};
    ALL_MENU_CATEGORIES.forEach((cat) => {
      map[cat.id] = true;
    });
    return map;
  });

  // Sync tab with URL parameter
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

  // Determine current categories pool according to active tab
  const currentCategoryPool: MenuCategory[] = useMemo(() => {
    if (activeTab === "food") return FOOD_CATEGORIES;
    if (activeTab === "drinks") return DRINKS_CATEGORIES;
    return ALL_MENU_CATEGORIES;
  }, [activeTab]);

  // Smart Search & Related Dishes Matching
  const { filteredCategories, totalMatches, crossTabMatches } = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    // When query is empty, return pool unchanged
    if (!query) {
      return {
        filteredCategories: currentCategoryPool,
        totalMatches: currentCategoryPool.reduce((acc, cat) => acc + cat.items.length, 0),
        crossTabMatches: null,
      };
    }

    // Tokenize query words
    const queryTokens = query.split(/\s+/).filter(Boolean);

    // Expand search terms with smart culinary synonyms
    const expandedTerms = new Set<string>(queryTokens);
    queryTokens.forEach((tok) => {
      if (SYNONYM_MAP[tok]) {
        SYNONYM_MAP[tok].forEach((syn) => expandedTerms.add(syn));
      }
    });

    // Helper to evaluate item match score
    const matchesItem = (item: MenuItem, catTitle: string) => {
      const name = item.name.toLowerCase();
      const desc = (item.description || "").toLowerCase();
      const category = catTitle.toLowerCase();
      const tags = (item.tags || []).map((t) => t.toLowerCase()).join(" ");

      // Direct exact query match
      if (
        name.includes(query) ||
        desc.includes(query) ||
        category.includes(query) ||
        tags.includes(query)
      ) {
        return true;
      }

      // Check expanded tokens / synonyms
      for (const term of expandedTerms) {
        if (name.includes(term) || desc.includes(term) || category.includes(term)) {
          return true;
        }
      }

      return false;
    };

    // Filter categories in active tab
    const matched = currentCategoryPool
      .map((cat) => {
        const matchingItems = cat.items.filter((item) => matchesItem(item, cat.title));
        return {
          ...cat,
          items: matchingItems,
        };
      })
      .filter((cat) => cat.items.length > 0);

    const matchesCount = matched.reduce((acc, cat) => acc + cat.items.length, 0);

    // Check cross-tab matches (if user searches food in drinks tab or vice versa)
    let crossTab: { targetTab: "food" | "drinks"; count: number } | null = null;
    if (activeTab === "food") {
      const drinksMatches = DRINKS_CATEGORIES.reduce((sum, cat) => {
        return sum + cat.items.filter((it) => matchesItem(it, cat.title)).length;
      }, 0);
      if (drinksMatches > 0) {
        crossTab = { targetTab: "drinks", count: drinksMatches };
      }
    } else if (activeTab === "drinks") {
      const foodMatches = FOOD_CATEGORIES.reduce((sum, cat) => {
        return sum + cat.items.filter((it) => matchesItem(it, cat.title)).length;
      }, 0);
      if (foodMatches > 0) {
        crossTab = { targetTab: "food", count: foodMatches };
      }
    }

    return {
      filteredCategories: matched,
      totalMatches: matchesCount,
      crossTabMatches: crossTab,
    };
  }, [currentCategoryPool, searchQuery, activeTab]);

  // When search query is entered, ensure matching categories are expanded
  useEffect(() => {
    if (searchQuery.trim()) {
      const map: Record<string, boolean> = {};
      filteredCategories.forEach((cat) => {
        map[cat.id] = true;
      });
      setOpenCategories((prev) => ({ ...prev, ...map }));
    }
  }, [searchQuery, filteredCategories]);

  // Determine correct PDF download link
  const currentPdfUrl =
    activeTab === "drinks"
      ? "/images/menu/the-grand-maharaja-drinks-menu-835.pdf"
      : activeTab === "all"
      ? "/images/menu/the-grand-maharaja-complete-menu-893.pdf"
      : "/images/menu/the-grand-maharaja-food-menu-889.pdf";

  // Helper to visually highlight search matches
  const highlightMatch = (text: string, query: string) => {
    if (!query.trim() || !text) return text;
    const q = query.trim();
    const regex = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
    const parts = text.split(regex);

    if (parts.length === 1) return text;

    return parts.map((part, i) =>
      part.toLowerCase() === q.toLowerCase() ? (
        <mark
          key={i}
          className="bg-[#9B7B34]/25 dark:bg-[#D4AF37]/35 text-[#7D6328] dark:text-[#F5E2AC] font-extrabold rounded px-1 py-0.5 inline-block"
        >
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <div className="w-full">
      {/* 1. Royal Header Bar with Clean Quick Switcher */}
      <div className="bg-[#FAF8F5] dark:bg-[#15120E] border-b border-[#EAE3D6] dark:border-[#262017] pt-8 sm:pt-10 pb-7 transition-colors duration-200">
        <div
          className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10"
          style={{ maxWidth: "1400px" }}
        >
          {/* Top Row: Title & Switch Pills */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            {/* Title & Brand Seal */}
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

            {/* Quick Switch Pills */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              <div className="inline-flex items-center p-1 bg-white dark:bg-[#1E1A14] rounded-full border border-[#E6E0D4] dark:border-[#2C261D] shadow-sm">
                <button
                  type="button"
                  onClick={() => setActiveTab("food")}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-[12.5px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    activeTab === "food"
                      ? "bg-[#9B7B34] dark:bg-[#D4AF37] text-white dark:text-[#14120E] shadow-[0_2px_8px_rgba(155,123,52,0.3)]"
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
                      ? "bg-[#9B7B34] dark:bg-[#D4AF37] text-white dark:text-[#14120E] shadow-[0_2px_8px_rgba(155,123,52,0.3)]"
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
                      ? "bg-[#9B7B34] dark:bg-[#D4AF37] text-white dark:text-[#14120E] shadow-[0_2px_8px_rgba(155,123,52,0.3)]"
                      : "text-[#666666] dark:text-[#A8A194] hover:text-[#1A1A1A] dark:hover:text-[#F5F1EB]"
                  }`}
                >
                  All Menus
                </button>
              </div>

              {/* PDF Download Button */}
              <a
                href={currentPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-white dark:bg-[#1E1A14] border border-[#E6E0D4] dark:border-[#2C261D] rounded-full text-xs sm:text-[12.5px] font-bold text-[#8C6E2E] dark:text-[#D4AF37] hover:border-[#8C6E2E] dark:hover:border-[#D4AF37] shadow-sm transition-all duration-200"
              >
                <Download className="w-3.5 h-3.5" />
                <span>PDF ⬇</span>
              </a>
            </div>
          </div>

          {/* 2. Elevated Royal Live Search Bar */}
          <div className="mt-6 pt-6 border-t border-[#EAE3D6]/70 dark:border-[#241E15]">
            <div className="relative w-full max-w-3xl">
              {/* Search Icon */}
              <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#9B7B34] dark:text-[#D4AF37]">
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>

              {/* Search Input */}
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search any dish, drink, or ingredient (e.g. paneer, dosa, kingfisher, chaat, mogo)..."
                className="w-full pl-11 sm:pl-12 pr-28 py-3.5 sm:py-4 bg-white dark:bg-[#1C1813] border border-[#DECDB8] dark:border-[#2F271D] rounded-2xl text-xs sm:text-sm text-[#1A1A1A] dark:text-[#F5F1EB] placeholder-[#8E867A] dark:placeholder-[#776E62] shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.3)] focus:outline-none focus:border-[#9B7B34] dark:focus:border-[#D4AF37] focus:ring-2 focus:ring-[#9B7B34]/20 transition-all duration-200"
              />

              {/* Right Search Controls: Match Count or Clear Button */}
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center gap-2">
                {searchQuery.trim() ? (
                  <>
                    <span className="hidden sm:inline-block text-[11px] font-bold uppercase tracking-wider text-[#9B7B34] dark:text-[#D4AF37] bg-[#FAF4E8] dark:bg-[#2A2317] px-2.5 py-1 rounded-full border border-[#E8DEC9] dark:border-[#3D3222]">
                      {totalMatches} {totalMatches === 1 ? "match" : "matches"}
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setSearchQuery("");
                        searchInputRef.current?.focus();
                      }}
                      className="w-7 h-7 rounded-full bg-[#FAF4E8] hover:bg-[#EFE5D3] dark:bg-[#2A2317] dark:hover:bg-[#3D3222] text-[#7D6328] dark:text-[#D4AF37] flex items-center justify-center transition-colors"
                      title="Clear search"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </>
                ) : (
                  <span className="hidden sm:inline-block text-[11px] font-semibold text-[#A89F91] dark:text-[#665F54] tracking-wide">
                    Live Search
                  </span>
                )}
              </div>
            </div>

            {/* Popular / Related Dish Search Chips */}
            <div className="mt-3 flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs">
              <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#8C6E2E] dark:text-[#D4AF37] mr-1 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                <span>POPULAR:</span>
              </span>
              {POPULAR_SUGGESTIONS.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => setSearchQuery(suggestion)}
                  className={`px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold border transition-all duration-150 cursor-pointer ${
                    searchQuery.toLowerCase() === suggestion.toLowerCase()
                      ? "bg-[#9B7B34] text-white border-[#9B7B34] shadow-xs"
                      : "bg-white dark:bg-[#1E1A14] text-[#555] dark:text-[#C5BFB5] border-[#E2D8C8] dark:border-[#2C261D] hover:border-[#9B7B34] dark:hover:border-[#D4AF37] hover:text-[#1A1A1A] dark:hover:text-[#FFF]"
                  }`}
                >
                  {suggestion}
                </button>
              ))}
            </div>

            {/* Cross-Tab Match Helper Notification (e.g. if user searched beer on food tab) */}
            {crossTabMatches && crossTabMatches.count > 0 && (
              <div className="mt-3.5 p-3 rounded-xl bg-[#FAF4E8] dark:bg-[#221B13] border border-[#E8DFC9] dark:border-[#382C1E] flex items-center justify-between text-xs sm:text-[13px] text-[#6A5323] dark:text-[#D4AF37]">
                <span>
                  ✨ Found <strong>{crossTabMatches.count}</strong> related {crossTabMatches.targetTab === "drinks" ? "drinks" : "dishes"} in the{" "}
                  <strong>{crossTabMatches.targetTab === "drinks" ? "Drinks Menu" : "Food Menu"}</strong>.
                </span>
                <button
                  type="button"
                  onClick={() => setActiveTab(crossTabMatches.targetTab)}
                  className="font-bold underline hover:text-[#1A1A1A] dark:hover:text-white shrink-0 ml-3 flex items-center gap-1 cursor-pointer"
                >
                  <span>Switch to {crossTabMatches.targetTab === "drinks" ? "Drinks" : "Food"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 3. Main Menu Grid (3 Columns of Dropdown Cards - Upgraded Luxury Design) */}
      <div
        className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-10 sm:py-12 lg:py-16"
        style={{ maxWidth: "1400px" }}
      >
        {/* Official Allergen & Dietary Guide (From Official Menu PDF) */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#15120E] border border-[#E6DEC9] dark:border-[#2A2318] shadow-xs flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="font-bold text-[#8C6E2E] dark:text-[#D4AF37] uppercase tracking-wider text-[11px] mr-1">
              Dietary Indicators:
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#FAF0E6] dark:bg-[#2A2015] text-[#B45309] dark:text-[#F59E0B] border border-[#FDE68A] dark:border-[#78350F] font-bold text-[10px]">
              <span className="font-extrabold">OG</span> No Onion No Garlic Available
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#FAF0E6] dark:bg-[#2A2015] text-[#B45309] dark:text-[#F59E0B] border border-[#FDE68A] dark:border-[#78350F] font-bold text-[10px]">
              <span className="font-extrabold">D</span> Contains Dairy
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#FAF0E6] dark:bg-[#2A2015] text-[#B45309] dark:text-[#F59E0B] border border-[#FDE68A] dark:border-[#78350F] font-bold text-[10px]">
              <span className="font-extrabold">N</span> Contains Nuts
            </span>
          </div>
          <div className="text-[11px] text-[#666666] dark:text-[#A0988A] leading-relaxed max-w-lg md:text-right">
            <strong>Allergy Notice:</strong> If you have allergies (Gluten, Soya, Dairy, Celery, Nuts), please inform our team upon ordering.
          </div>
        </div>

        {filteredCategories.length === 0 ? (
          /* Friendly No-Results State with Direct Suggestions (No Dead Ends) */
          <div className="max-w-xl mx-auto text-center py-16 px-6 bg-white dark:bg-[#161310] rounded-3xl border border-[#E8E1D0] dark:border-[#2A241C] shadow-lg">
            <div className="w-14 h-14 rounded-2xl bg-[#FAF4E8] dark:bg-[#201A12] border border-[#E2D5BE] dark:border-[#33281B] text-[#9B7B34] dark:text-[#D4AF37] flex items-center justify-center mx-auto mb-4">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-playfair text-xl sm:text-2xl font-bold text-[#1A1A1A] dark:text-[#F5F1EB]">
              No exact dishes found for &ldquo;{searchQuery}&rdquo;
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#666] dark:text-[#A8A194] mt-2 leading-relaxed">
              We couldn&apos;t find matching items in this section. Try searching for popular delicacies like{" "}
              <strong>Paneer, Dosa, Mogo, Chaat,</strong> or clear search to browse all categories.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="px-6 py-2.5 bg-[#9B7B34] hover:bg-[#836729] dark:bg-[#D4AF37] dark:hover:bg-[#C29E2E] text-white dark:text-[#120F0C] font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
              >
                Clear Search &amp; View All
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("all")}
                className="px-6 py-2.5 bg-[#FAF6EE] dark:bg-[#1E1A14] text-[#7D6328] dark:text-[#D4AF37] border border-[#E2D6C0] dark:border-[#2C261D] font-bold text-xs uppercase tracking-wider rounded-xl hover:border-[#9B7B34] transition-colors cursor-pointer"
              >
                Search All Menus
              </button>
            </div>
          </div>
        ) : (
          /* 3-Column Luxury Cards Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-start">
            {filteredCategories.map((category) => {
              const isOpen = openCategories[category.id] ?? true;

              return (
                <div
                  key={category.id}
                  id={category.id}
                  className="card-hover-elevate bg-white dark:bg-[#161310] rounded-2xl border border-[#E8E1D0] dark:border-[#28221A] border-t-[3px] border-t-[#9B7B34] dark:border-t-[#D4AF37] shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.45)] overflow-hidden transition-all duration-300 scroll-mt-24"
                >
                  {/* Category Header (Clickable Dropdown Toggle) */}
                  <button
                    type="button"
                    onClick={() => toggleCategory(category.id)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-[#FAF7F2] dark:hover:bg-[#1D1914] transition-colors duration-150 border-b border-[#F0EBE0] dark:border-[#241E15] group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3.5">
                      {/* Icon Badge */}
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FAF5EC] dark:bg-[#201C16] border border-[#E8DFCF] dark:border-[#2F2920] flex items-center justify-center shrink-0 text-[#9B7B34] dark:text-[#D4AF37] shadow-xs group-hover:scale-105 group-hover:border-[#9B7B34] transition-all">
                        {category.type === "food" ? (
                          <Utensils className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                        ) : (
                          <Wine className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                        )}
                      </div>

                      <div>
                        <h3 className="font-playfair text-base sm:text-lg font-bold text-[#1A1A1A] dark:text-[#F5F1EB] group-hover:text-[#9B7B34] dark:group-hover:text-[#D4AF37] transition-colors leading-tight">
                          {highlightMatch(category.title, searchQuery)}
                        </h3>
                        <span className="text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider text-[#8C6E2E] dark:text-[#D4AF37] block mt-0.5 font-sans">
                          {category.items.length} {category.items.length === 1 ? "Delicacy" : "Delicacies"}
                        </span>
                      </div>
                    </div>

                    {/* Dropdown Chevron Arrow Button */}
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FAF8F5] dark:bg-[#201C16] border border-[#E8E2D5] dark:border-[#2D271E] flex items-center justify-center text-[#8C6E2E] dark:text-[#D4AF37] group-hover:bg-[#9B7B34] group-hover:text-white dark:group-hover:bg-[#D4AF37] dark:group-hover:text-[#14120E] group-hover:border-[#9B7B34] transition-all">
                      <ChevronDown
                        className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </button>

                  {/* Multi-Price Drinks Column Headers if available */}
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
                    <div className="p-4 sm:p-5 space-y-3 divide-y divide-[#F5F1EB] dark:divide-[#201C16]">
                      {category.items.map((item, idx) => (
                        <div
                          key={`${item.name}-${idx}`}
                          className={`${
                            idx > 0 ? "pt-3.5" : ""
                          } group/item p-1.5 -mx-1.5 rounded-xl hover:bg-[#FAF8F5] dark:hover:bg-[#1D1914] transition-all duration-150 cursor-default`}
                        >
                          {/* Title Row: Name, Crown, Tags, Chillies & Price */}
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1">
                              <div className="flex flex-wrap items-center gap-1.5">
                                {/* Signature Crown */}
                                {item.isSignature && (
                                  <span
                                    title="Chef's Royal Signature Delicacy"
                                    className="text-amber-500 text-xs inline-block group-hover/item:scale-110 transition-transform"
                                  >
                                    👑
                                  </span>
                                )}

                                {/* Dish / Drink Name */}
                                <h4 className="font-sans text-xs sm:text-[13px] font-bold text-[#1A1A1A] dark:text-[#F5F1EB] group-hover/item:text-[#9B7B34] dark:group-hover/item:text-[#D4AF37] transition-colors uppercase tracking-wide leading-snug">
                                  {highlightMatch(item.name, searchQuery)}
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
                                  {highlightMatch(item.description, searchQuery)}
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
                                <span className="font-playfair font-bold text-xs sm:text-sm text-[#7D6328] dark:text-[#D4AF37] group-hover/item:scale-105 transition-transform duration-150 inline-block">
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
        )}
      </div>

      {/* 4. Bottom Table Reservation Banner */}
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
