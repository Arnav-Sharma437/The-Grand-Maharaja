import React, { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { MenuExplorer } from "@/components/menu/MenuExplorer";
import { RoyalBackgroundGlow } from "@/components/ui/RoyalBackgroundGlow";
import { Utensils, Wine, ShieldCheck, Sparkles, Home, ChevronRight } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Imperial Food & Drinks Menu",
  description:
    "Explore the complete pure vegetarian food menu and licensed bar drinks menu at The Grand Maharaja in Leicester. 122 royal dishes, Jain options, and 76 artisanal drinks.",
  pathname: "/menu",
});

export default function MenuPage() {
  return (
    <main className="min-h-screen flex flex-col w-full bg-white dark:bg-[#0D0C0A] transition-colors duration-200">
      {/* 1. Grand Royal Menu Hero Section */}
      <section className="relative w-full bg-[#F5F1EB]/60 dark:bg-[#14120E] pt-10 sm:pt-14 pb-14 sm:pb-16 overflow-hidden transition-colors duration-200 border-b border-[#EAE3D6] dark:border-[#262017]">
        {/* Live Royal Background Effects */}
        <RoyalBackgroundGlow variant="hero" particleCount={42} showMandala={true} />

        {/* 1400px Strict Container */}
        <div
          className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 text-center"
          style={{ maxWidth: "1400px" }}
        >
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="inline-flex items-center gap-2 text-xs text-[#777] dark:text-[#999] mb-6 font-sans"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-1 hover:text-[#7D6328] dark:hover:text-[#D4AF37] transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3 h-3 text-[#BBB] dark:text-[#555]" />
            <span className="text-[#1A1A1A] dark:text-[#F5F1EB] font-semibold">
              Imperial Menus
            </span>
          </nav>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-[#1E1A14] border border-[#E0D8CA] dark:border-[#2C261D] shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#7D6328] dark:text-[#D4AF37]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#7D6328] dark:text-[#D4AF37]">
              PURE VEGETARIAN SANCTUARY &amp; LICENSED BAR
            </span>
          </div>

          {/* Title */}
          <h1 className="font-playfair text-3xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] dark:text-[#F5F1EB] tracking-tight max-w-4xl mx-auto leading-tight">
            The Imperial Food &amp; Drinks Menu
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-xs sm:text-sm md:text-base text-[#555555] dark:text-[#A8A194] max-w-2xl mx-auto mt-4 leading-relaxed">
            Leicester’s opulent home of authentic Gujarati, Punjabi &amp; Jain culinary mastery.
            Every dish is 100% vegetarian, prepared in dedicated cookware, and complemented by an
            international licensed spirits &amp; artisanal mocktails bar.
          </p>

          {/* 3 Pillars Quick Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-[#555] dark:text-[#C5BFB5]">
            <div className="flex items-center gap-2 bg-white/80 dark:bg-[#1A1611]/80 backdrop-blur-sm border border-[#E6E0D4] dark:border-[#2C261D] rounded-full px-4 py-2">
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
              <span className="font-semibold text-[#1A1A1A] dark:text-[#F5F1EB]">
                100% Pure Vegetarian
              </span>
            </div>

            <div className="flex items-center gap-2 bg-white/80 dark:bg-[#1A1611]/80 backdrop-blur-sm border border-[#E6E0D4] dark:border-[#2C261D] rounded-full px-4 py-2">
              <Utensils className="w-4 h-4 text-[#7D6328] dark:text-[#D4AF37]" />
              <span className="font-semibold text-[#1A1A1A] dark:text-[#F5F1EB]">
                Jain &amp; Swaminarayan Available
              </span>
            </div>

            <div className="flex items-center gap-2 bg-white/80 dark:bg-[#1A1611]/80 backdrop-blur-sm border border-[#E6E0D4] dark:border-[#2C261D] rounded-full px-4 py-2">
              <Wine className="w-4 h-4 text-[#7D6328] dark:text-[#D4AF37]" />
              <span className="font-semibold text-[#1A1A1A] dark:text-[#F5F1EB]">
                Fully Licensed International Bar
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Menu Explorer with Suspense */}
      <Suspense
        fallback={
          <div className="w-full py-20 text-center">
            <div className="inline-block w-8 h-8 border-2 border-[#7D6328] border-t-transparent rounded-full animate-spin" />
            <p className="mt-3 text-xs text-[#777] uppercase tracking-wider">
              Loading Royal Menu...
            </p>
          </div>
        }
      >
        <MenuExplorer />
      </Suspense>
    </main>
  );
}
