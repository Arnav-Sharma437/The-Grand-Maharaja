"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RoyalBackgroundGlow } from "@/components/ui/RoyalBackgroundGlow";

const PILLARS_DATA = [
  {
    badge: "GASTRONOMIC HERITAGE",
    badgeType: "white",
    image: "/images/hero/hero-slider-cuisine-spread-2.jpg",
    alt: "Pure Vegetarian Artistry - Authentic Indian Gastronomic Heritage",
    title: "Pure Vegetarian Artistry",
    hasGreenDot: false,
    description:
      "An imperial symphony of hand-ground spices, slow-simmered daals, rich paneer gravies, and fresh tandoori breads honouring ancient Indian gastronomic heritage.",
    linkText: "EXPLORE ROYAL MENUS",
    linkHref: "/menu",
    linkColor: "gold",
  },
  {
    badge: "100% DEDICATED SANCTUM",
    badgeType: "green",
    image: "/images/about/about-jain-culinary-sanctum.jpg",
    alt: "No Onion & No Garlic - Jain and Swaminarayan Kitchen Sanctum",
    title: "Jain & Swaminarayan",
    hasGreenDot: true,
    description:
      "Specially prepared in dedicated cookware without onion or garlic, utilizing fresh raw garden vegetables and potatoes cooked to order with zero compromise on taste.",
    linkText: "KITCHEN SANCTUM DETAILS",
    linkHref: "/about#sanctum",
    linkColor: "green",
  },
  {
    badge: "APPROX 80 GUESTS",
    badgeType: "white",
    image: "/images/gallery/gallery-dining-hall-742.jpg",
    alt: "Royal Banqueting Hall Celebrations at The Grand Maharaja",
    title: "Royal Banqueting",
    hasGreenDot: false,
    description:
      "Celebrate life's finest milestones in our intimate 80-guest luxury banquet suite in Leicester, or arrange bespoke outdoor catering for up to 500+ guests across the UK.",
    linkText: "PLAN AN EVENT",
    linkHref: "/banqueting",
    linkColor: "gold",
  },
];

export function HospitalityPillars() {
  return (
    <section className="relative w-full bg-white dark:bg-[#0D0C0A] py-16 sm:py-20 lg:py-24 overflow-hidden transition-colors duration-200">
      {/* Live Royal Background Effects */}
      <RoyalBackgroundGlow variant="section" particleCount={30} mandalaPosition="left" />

      {/* 1400px Strict Container */}
      <div
        className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10"
        style={{ maxWidth: "1400px" }}
      >
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#9B7B34] dark:text-[#D4AF37]">
            IMPERIAL STANDARD
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#1A1A1A] dark:text-[#F5F1EB] tracking-tight mt-1.5">
            Three Pillars of Royal Hospitality
          </h2>
        </div>

        {/* 3-Column Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-9 items-stretch">
          {PILLARS_DATA.map((pillar) => (
            <div
              key={pillar.title}
              className="card-hover-elevate bg-[#FAF8F5] dark:bg-[#161310] rounded-2xl border border-[#EBE6DC] dark:border-[#2C261D] overflow-hidden flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-xl hover:border-[#9B7B34]/60 transition-all duration-500 group cursor-pointer"
            >
              {/* Image Frame with Badges */}
              <div className="relative w-full h-[230px] sm:h-[250px] lg:h-[260px] overflow-hidden bg-[#1A1A1A]">
                <Image
                  src={pillar.image}
                  alt={pillar.alt}
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Top Badge */}
                {pillar.badgeType === "green" ? (
                  <div className="absolute top-4 left-4 z-10 bg-[#0D3826] text-[#F3E5AB] text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
                    </span>
                    <span>{pillar.badge}</span>
                  </div>
                ) : (
                  <div className="absolute top-4 left-4 z-10 bg-white/95 dark:bg-[#1C1813]/95 backdrop-blur-xs text-[#1A1A1A] dark:text-[#F5F1EB] text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm">
                    {pillar.badge}
                  </div>
                )}
              </div>

              {/* Content Block */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center">
                    {pillar.hasGreenDot && (
                      <span className="relative flex h-2.5 w-2.5 mr-2 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]"></span>
                      </span>
                    )}
                    <h3 className="font-playfair text-xl sm:text-2xl font-semibold text-[#1A1A1A] dark:text-[#F5F1EB] group-hover:text-[#9B7B34] dark:group-hover:text-[#D4AF37] transition-colors">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-[13px] text-[#555555] dark:text-[#A0988A] leading-relaxed mt-2.5 font-sans">
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom Link Action */}
                <div className="pt-6">
                  <Link
                    href={pillar.linkHref}
                    className={`text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors font-sans group/link ${
                      pillar.linkColor === "green"
                        ? "text-[#0D3826] hover:text-[#062015] dark:text-[#34D399] dark:hover:text-[#6EE7B7]"
                        : "text-[#8C6E2E] hover:text-[#6B531F] dark:text-[#D4AF37] dark:hover:text-[#F3E5AB]"
                    }`}
                  >
                    <span>{pillar.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HospitalityPillars;
