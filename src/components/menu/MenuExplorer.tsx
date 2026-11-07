"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Search,
  Download,
  Utensils,
  Wine,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Layers,
  Flame,
  Check,
  Phone,
  Calendar,
  X,
  Crown,
} from "lucide-react";
import { ALL_MENU_CATEGORIES, FOOD_CATEGORIES, DRINKS_CATEGORIES, MENU_STATS } from "@/data/menuData";
import { MenuCategory, MenuItem } from "@/types/menu";

export function MenuExplorer() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab");

  // Primary tab: "all" | "food" | "drinks"
  const [activeTab, setActiveTab] = useState<"all" | "food" | "drinks">(() => {
    if (initialTab === "food") return "food";
    if (initialTab === "drinks") return "drinks";
    return "all";
  });

  // Search query
  const [searchQuery, setSearchQuery] = useState("");

  // Dietary filter: "all" | "signature" | "spicy" | "og" | "jain"
  const [dietaryFilter, setDietaryFilter] = useState<string>("all");

  // Track expanded category IDs. Default: all expanded
  const [expandedCats, setExpandedCats] = useState<Record<string, boolean>>(() => {
    const map: Record<string, boolean> = {};
    ALL_MENU_CATEGORIES.forEach((cat) => {
      map[cat.id] = true;
    });
    return map;
  });

  // Update tab if URL param changes
  useEffect(() => {
    if (initialTab === "food" || initialTab === "drinks" || initialTab === "all") {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  // Toggle single category accordion
  const toggleCategory = (id: string) => {
    setExpandedCats((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Expand / Collapse all
  const expandAll = () => {
    const map: Record<string, boolean> = {};
    ALL_MENU_CATEGORIES.forEach((cat) => {
      map[cat.id] = true;
    });
    setExpandedCats(map);
  };

  const collapseAll = () => {
    setExpandedCats({});
  };

  // Base list of categories according to activeTab
  const baseCategories = useMemo(() => {
    if (activeTab === "food") return FOOD_CATEGORIES;
    if (activeTab === "drinks") return DRINKS_CATEGORIES;
    return ALL_MENU_CATEGORIES;
  }, [activeTab]);

  // Filtered categories and items based on search & dietary filter
  const filteredCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return baseCategories
      .map((cat) => {
        const matchingItems = cat.items.filter((item) => {
          // Dietary Filter check
          if (dietaryFilter === "signature" && !item.isSignature) return false;
          if (dietaryFilter === "spicy" && !item.chilli) return false;
          if (dietaryFilter === "og" && !item.tags?.includes("OG")) return false;
          if (dietaryFilter === "jain") {
            const hasJain =
              item.tags?.some((t) => t.toLowerCase().includes("jain") || t === "J") ||
              item.description?.toLowerCase().includes("jain");
            if (!hasJain) return false;
          }

          // Search Query check
          if (!query) return true;

          const matchName = item.name.toLowerCase().includes(query);
          const matchDesc = item.description?.toLowerCase().includes(query);
          const matchPrice = item.price.toLowerCase().includes(query);
          const matchCategory = cat.title.toLowerCase().includes(query);

          return matchName || matchDesc || matchPrice || matchCategory;
        });

        return {
          ...cat,
          items: matchingItems,
        };
      })
      .filter((cat) => cat.items.length > 0);
  }, [baseCategories, searchQuery, dietaryFilter]);

  // Total matching items count
  const totalMatchingItems = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.items.length, 0);
  }, [filteredCategories]);

  return (
    <div className="w-full">
      {/* 1. Control Toolbar: Tabs, Search, and Dietary Filters */}
      <div className="bg-[#FAF8F5] dark:bg-[#15120E] border-y border-[#EAE3D6] dark:border-[#262017] py-6 sm:py-8 transition-colors duration-200">
        <div
          className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10"
          style={{ maxWidth: "1400px" }}
        >
          {/* Row 1: Primary Mode Tabs & Quick PDF Download Links */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            {/* Unified Mode Switcher Tabs */}
            <div className="flex items-center p-1.5 bg-white dark:bg-[#1E1A14] rounded-2xl border border-[#E6E0D4] dark:border-[#2C261D] shadow-sm overflow-x-auto">
              <button
                type="button"
                onClick={() => setActiveTab("all")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-[13px] font-bold uppercase tracking-wider transition-all duration-200 shrink-0 cursor-pointer ${
                  activeTab === "all"
                    ? "bg-[#7D6328] dark:bg-[#9B7B34] text-white shadow-md"
                    : "text-[#555555] dark:text-[#A8A194] hover:text-[#1A1A1A] dark:hover:text-[#F5F1EB]"
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>All Menus ({MENU_STATS.totalItems})</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("food")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-[13px] font-bold uppercase tracking-wider transition-all duration-200 shrink-0 cursor-pointer ${
                  activeTab === "food"
                    ? "bg-[#7D6328] dark:bg-[#9B7B34] text-white shadow-md"
                    : "text-[#555555] dark:text-[#A8A194] hover:text-[#1A1A1A] dark:hover:text-[#F5F1EB]"
                }`}
              >
                <Utensils className="w-4 h-4" />
                <span>Food Menu (18 Cats • 122 Dishes)</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("drinks")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-[13px] font-bold uppercase tracking-wider transition-all duration-200 shrink-0 cursor-pointer ${
                  activeTab === "drinks"
                    ? "bg-[#7D6328] dark:bg-[#9B7B34] text-white shadow-md"
                    : "text-[#555555] dark:text-[#A8A194] hover:text-[#1A1A1A] dark:hover:text-[#F5F1EB]"
                }`}
              >
                <Wine className="w-4 h-4" />
                <span>Drinks &amp; Bar (13 Cats • 76 Items)</span>
              </button>
            </div>

            {/* Quick PDF Downloads */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C6E2E] dark:text-[#D4AF37] mr-1 hidden sm:inline-block">
                OFFICIAL MENUS:
              </span>
              <a
                href="/images/menu/the-grand-maharaja-food-menu-889.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white dark:bg-[#1E1A14] border border-[#E0D8CA] dark:border-[#2C261D] rounded-xl text-[11px] font-bold text-[#1A1A1A] dark:text-[#F5F1EB] hover:border-[#7D6328] dark:hover:border-[#D4AF37] hover:shadow-sm transition-all duration-200"
              >
                <Download className="w-3.5 h-3.5 text-[#7D6328] dark:text-[#D4AF37]" />
                <span>Food PDF</span>
              </a>
              <a
                href="/images/menu/the-grand-maharaja-drinks-menu-835.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white dark:bg-[#1E1A14] border border-[#E0D8CA] dark:border-[#2C261D] rounded-xl text-[11px] font-bold text-[#1A1A1A] dark:text-[#F5F1EB] hover:border-[#7D6328] dark:hover:border-[#D4AF37] hover:shadow-sm transition-all duration-200"
              >
                <Download className="w-3.5 h-3.5 text-[#7D6328] dark:text-[#D4AF37]" />
                <span>Drinks PDF</span>
              </a>
              <a
                href="/images/menu/the-grand-maharaja-complete-menu-893.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#7D6328]/10 dark:bg-[#9B7B34]/15 border border-[#7D6328]/30 dark:border-[#D4AF37]/30 rounded-xl text-[11px] font-bold text-[#7D6328] dark:text-[#D4AF37] hover:bg-[#7D6328] hover:text-white dark:hover:bg-[#9B7B34] dark:hover:text-white hover:shadow-sm transition-all duration-200"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Complete PDF</span>
              </a>
            </div>
          </div>

          {/* Row 2: Search Input & Dietary Filter Badges */}
          <div className="mt-5 pt-5 border-t border-[#EAE3D6] dark:border-[#241E15] flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Live Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C6E2E] dark:text-[#D4AF37]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dishes, drinks, ingredients (e.g. paneer, dosa, kingfisher)..."
                className="w-full pl-10 pr-9 py-2.5 bg-white dark:bg-[#1A1611] border border-[#E0D8CA] dark:border-[#2C261D] rounded-xl text-xs sm:text-sm text-[#1A1A1A] dark:text-[#F5F1EB] placeholder-[#999] dark:placeholder-[#666] focus:outline-none focus:border-[#7D6328] dark:focus:border-[#D4AF37] focus:ring-1 focus:ring-[#7D6328] transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#888] hover:text-[#1A1A1A] dark:hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Dietary Filter Pills & Expand/Collapse All */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#666] dark:text-[#999] mr-1 hidden sm:inline">
                FILTER:
              </span>
              <button
                type="button"
                onClick={() => setDietaryFilter("all")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  dietaryFilter === "all"
                    ? "bg-[#1A1A1A] dark:bg-[#F5F1EB] text-white dark:text-[#1A1A1A]"
                    : "bg-white dark:bg-[#1A1611] text-[#666] dark:text-[#A0988A] border border-[#E0D8CA] dark:border-[#2C261D] hover:border-[#9B7B34]"
                }`}
              >
                All
              </button>

              <button
                type="button"
                onClick={() => setDietaryFilter("signature")}
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  dietaryFilter === "signature"
                    ? "bg-[#7D6328] dark:bg-[#9B7B34] text-white"
                    : "bg-white dark:bg-[#1A1611] text-[#666] dark:text-[#A0988A] border border-[#E0D8CA] dark:border-[#2C261D] hover:border-[#9B7B34]"
                }`}
              >
                <span>👑 Signature</span>
              </button>

              <button
                type="button"
                onClick={() => setDietaryFilter("spicy")}
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  dietaryFilter === "spicy"
                    ? "bg-[#DC2626] text-white"
                    : "bg-white dark:bg-[#1A1611] text-[#666] dark:text-[#A0988A] border border-[#E0D8CA] dark:border-[#2C261D] hover:border-[#DC2626]"
                }`}
              >
                <span>🌶️ Spicy</span>
              </button>

              <button
                type="button"
                onClick={() => setDietaryFilter("og")}
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  dietaryFilter === "og"
                    ? "bg-[#D97706] text-white"
                    : "bg-white dark:bg-[#1A1611] text-[#666] dark:text-[#A0988A] border border-[#E0D8CA] dark:border-[#2C261D] hover:border-[#D97706]"
                }`}
              >
                <span>OG (Onion/Garlic)</span>
              </button>

              <div className="h-4 w-[1px] bg-[#DDD] dark:bg-[#333] mx-1 hidden sm:block" />

              {/* Expand / Collapse All Toggle */}
              <button
                type="button"
                onClick={expandAll}
                className="px-2.5 py-1.5 text-xs text-[#7D6328] dark:text-[#D4AF37] hover:underline font-semibold"
              >
                Expand All
              </button>
              <button
                type="button"
                onClick={collapseAll}
                className="px-2.5 py-1.5 text-xs text-[#888] hover:text-[#1A1A1A] dark:hover:text-[#FFF] hover:underline"
              >
                Collapse All
              </button>
            </div>
          </div>

          {/* Quick Jump Category Pills (Horizontal Scrolling) */}
          <div className="mt-4 pt-3 border-t border-[#EAE3D6]/60 dark:border-[#241E15]/60 flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C6E2E] dark:text-[#D4AF37] shrink-0 mr-1">
              JUMP TO:
            </span>
            {filteredCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="px-3 py-1 bg-white dark:bg-[#1A1611] border border-[#E0D8CA] dark:border-[#2C261D] rounded-full text-[11px] font-medium text-[#444] dark:text-[#C5BFB5] hover:text-[#7D6328] dark:hover:text-[#D4AF37] hover:border-[#7D6328] dark:hover:border-[#D4AF37] whitespace-nowrap transition-colors"
              >
                {cat.title} ({cat.items.length})
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Menu Results Counter */}
      <div
        className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pt-8 pb-4 flex items-center justify-between"
        style={{ maxWidth: "1400px" }}
      >
        <p className="text-xs sm:text-sm text-[#666] dark:text-[#A0988A]">
          Showing <span className="font-bold text-[#1A1A1A] dark:text-[#F5F1EB]">{totalMatchingItems}</span> delicacies across{" "}
          <span className="font-bold text-[#1A1A1A] dark:text-[#F5F1EB]">{filteredCategories.length}</span> categories
          {searchQuery && (
            <span>
              {" "}
              for query &ldquo;<strong>{searchQuery}</strong>&rdquo;
            </span>
          )}
        </p>

        {/* Dietary Legend */}
        <div className="hidden lg:flex items-center gap-4 text-xs text-[#666] dark:text-[#999]">
          <span className="flex items-center gap-1">
            <span className="text-sm">👑</span> Chef Signature
          </span>
          <span className="flex items-center gap-1">
            <span className="px-1.5 py-0.5 rounded bg-[#FAF0E6] text-[#B45309] font-bold text-[10px] border border-[#FDE68A]">OG</span> Onion &amp; Garlic
          </span>
          <span className="flex items-center gap-1">
            <span className="text-sm">🌶️</span> Mild
          </span>
          <span className="flex items-center gap-1">
            <span className="text-sm">🌶️🌶️🌶️</span> Imperial Spicy
          </span>
        </div>
      </div>

      {/* 3. Main Menu Grid (2 Columns of Category Accordion Cards) */}
      <div
        className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pb-20"
        style={{ maxWidth: "1400px" }}
      >
        {filteredCategories.length === 0 ? (
          <div className="text-center py-20 bg-white dark:bg-[#161310] rounded-3xl border border-[#EBE6DC] dark:border-[#2C261D] p-8 max-w-xl mx-auto">
            <Utensils className="w-12 h-12 text-[#9B7B34] mx-auto mb-4 opacity-50" />
            <h3 className="font-playfair text-xl font-bold text-[#1A1A1A] dark:text-[#F5F1EB]">
              No dishes found matching your search
            </h3>
            <p className="text-xs sm:text-sm text-[#666] dark:text-[#999] mt-2 font-sans">
              Try adjusting your search terms or dietary filters, or browse our full food &amp; drinks menu above.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setDietaryFilter("all");
              }}
              className="mt-6 px-6 py-2.5 bg-[#7D6328] text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#6B531F] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            {filteredCategories.map((category) => {
              const isExpanded = expandedCats[category.id] ?? true;

              return (
                <div
                  key={category.id}
                  id={category.id}
                  className="card-hover-elevate bg-white dark:bg-[#181511] rounded-3xl border border-[#EBE6DC] dark:border-[#2C261D] shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] overflow-hidden transition-all duration-300 scroll-mt-28"
                >
                  {/* Category Header (Clickable Dropdown Toggle) */}
                  <button
                    type="button"
                    onClick={() => toggleCategory(category.id)}
                    className="w-full p-5 sm:p-6 flex items-center justify-between text-left hover:bg-[#FAF8F5] dark:hover:bg-[#1E1A14] transition-colors duration-200 border-b border-[#F0EBE3] dark:border-[#241E15] group"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-center gap-3.5">
                      {/* Icon Badge */}
                      <div className="w-10 h-10 rounded-xl bg-[#FAF6EE] dark:bg-[#201C16] border border-[#E8E1D0] dark:border-[#2F2920] flex items-center justify-center shrink-0 text-[#8C6E2E] dark:text-[#D4AF37] group-hover:scale-105 group-hover:border-[#9B7B34] transition-all">
                        {category.type === "food" ? (
                          <Utensils className="w-4 h-4" />
                        ) : (
                          <Wine className="w-4 h-4" />
                        )}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-playfair text-lg sm:text-xl font-bold text-[#1A1A1A] dark:text-[#F5F1EB] group-hover:text-[#7D6328] dark:group-hover:text-[#D4AF37] transition-colors leading-tight">
                            {category.title}
                          </h3>
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C6E2E] dark:text-[#D4AF37] block mt-0.5">
                          {category.items.length} {category.items.length === 1 ? "Item" : "Items"}
                        </span>
                      </div>
                    </div>

                    {/* Dropdown Chevron Arrow */}
                    <div className="w-8 h-8 rounded-full bg-[#FAF8F5] dark:bg-[#201C16] border border-[#E8E2D5] dark:border-[#2D271E] flex items-center justify-center text-[#7D6328] dark:text-[#D4AF37] group-hover:bg-[#7D6328] group-hover:text-white dark:group-hover:bg-[#D4AF37] dark:group-hover:text-[#181511] transition-all">
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </button>

                  {/* Multi-Price Drinks Column Headers if available */}
                  {isExpanded && category.colHeaders && category.colHeaders.length > 0 && (
                    <div className="px-6 pt-3 pb-1 flex justify-end gap-6 text-[11px] font-bold tracking-wider uppercase text-[#8C6E2E] dark:text-[#D4AF37] bg-[#FAF8F5]/60 dark:bg-[#1A1611]/60 border-b border-[#F0EBE3] dark:border-[#241E15]">
                      {category.colHeaders.map((header, i) => (
                        <span key={i} className="w-14 text-right">
                          {header}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Category Items List (Accordion Body) */}
                  {isExpanded && (
                    <div className="p-5 sm:p-6 space-y-4 divide-y divide-[#F5F1EB] dark:divide-[#201C16]">
                      {category.items.map((item, idx) => (
                        <div
                          key={`${item.name}-${idx}`}
                          className={`group/item ${
                            idx > 0 ? "pt-4" : ""
                          } p-2.5 -mx-2.5 rounded-xl hover:bg-[#FAF8F5] dark:hover:bg-[#1E1B15] transition-all duration-200 cursor-default`}
                        >
                          {/* Row 1: Item Name, Badges, Chillies & Price */}
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex flex-wrap items-center gap-1.5">
                                {/* Signature Crown */}
                                {item.isSignature && (
                                  <span
                                    title="Chef's Royal Signature Dish"
                                    className="text-amber-500 text-sm inline-block group-hover/item:scale-110 transition-transform"
                                  >
                                    👑
                                  </span>
                                )}

                                {/* Dish Name */}
                                <h4 className="font-sans text-xs sm:text-[13.5px] font-bold text-[#1A1A1A] dark:text-[#F5F1EB] group-hover/item:text-[#7D6328] dark:group-hover/item:text-[#D4AF37] transition-colors uppercase tracking-wide">
                                  {item.name}
                                </h4>

                                {/* Dietary Tag Pills */}
                                {item.tags && item.tags.length > 0 && (
                                  <div className="inline-flex items-center gap-1 ml-1">
                                    {item.tags.map((tag, tIdx) => (
                                      <span
                                        key={tIdx}
                                        className="text-[9.5px] font-bold px-1.5 py-0.5 rounded bg-[#FAF0E6] dark:bg-[#2A2015] text-[#B45309] dark:text-[#F59E0B] border border-[#FDE68A] dark:border-[#78350F] uppercase"
                                      >
                                        {tag}
                                      </span>
                                    ))}
                                  </div>
                                )}

                                {/* Spiciness Chillies */}
                                {item.chilli && (
                                  <span className="text-xs ml-0.5" title={`Spiciness: ${item.chilli}`}>
                                    {item.chilli}
                                  </span>
                                )}
                              </div>

                              {/* Description */}
                              {item.description && (
                                <p className="text-xs text-[#666666] dark:text-[#A8A194] leading-relaxed mt-1 font-sans">
                                  {item.description}
                                </p>
                              )}
                            </div>

                            {/* Price(s) */}
                            <div className="shrink-0 text-right">
                              {item.prices && item.prices.length > 1 ? (
                                <div className="flex items-center gap-6">
                                  {item.prices.map((p, pIdx) => (
                                    <span
                                      key={pIdx}
                                      className="w-14 text-right font-playfair font-bold text-xs sm:text-sm text-[#7D6328] dark:text-[#D4AF37]"
                                    >
                                      {p}
                                    </span>
                                  ))}
                                </div>
                              ) : (
                                <span className="font-playfair font-bold text-sm sm:text-base text-[#7D6328] dark:text-[#D4AF37] group-hover/item:scale-105 transition-transform duration-200 inline-block">
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

      {/* 4. Grand Dining & Table Reservation Banner */}
      <div className="bg-[#FAF8F5] dark:bg-[#14120E] border-t border-[#E8E2D5] dark:border-[#241E15] py-14 sm:py-16">
        <div
          className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 text-center"
          style={{ maxWidth: "1400px" }}
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8C6E2E] dark:text-[#D4AF37] block">
            ROYAL EXPERIENCES AWAIT
          </span>
          <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1A1A1A] dark:text-[#F5F1EB] mt-2">
            Ready to Savor Royal Indian Hospitality?
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#666] dark:text-[#A0988A] max-w-xl mx-auto mt-3 leading-relaxed">
            Reserve your imperial table today or consult with our culinary team for bespoke pure vegetarian catering and celebration banquets.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+01165070296"
              className="shimmer-hover inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#7D6328] hover:bg-[#6B531F] dark:bg-[#8C6E2E] dark:hover:bg-[#A38137] text-white text-xs sm:text-[13px] font-bold uppercase tracking-wider rounded-xl shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              <span>CALL +0116 507 0296</span>
            </a>

            <Link
              href="/#banquets"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white dark:bg-[#1E1A14] text-[#1A1A1A] dark:text-[#F5F1EB] border border-[#E0D8CA] dark:border-[#2C261D] hover:border-[#7D6328] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 text-xs sm:text-[13px] font-bold uppercase tracking-wider rounded-xl shadow-sm transition-all duration-200"
            >
              <Calendar className="w-4 h-4 text-[#7D6328] dark:text-[#D4AF37]" />
              <span>PLAN A BANQUET EVENT</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
