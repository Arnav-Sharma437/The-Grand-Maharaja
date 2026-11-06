"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const PILLARS_DATA = [
  {
    badge: "GASTRONOMIC HERITAGE",
    badgeType: "white",
    image: "/images/hero/hero-slider-cuisine-spread-2.jpg",
    alt: "Royal Thali Guide - Authentic Indian Gastronomic Heritage",
    title: "Royal Thali Guide",
    hasGreenDot: false,
    description:
      "An imperial symphony of hand-ground spices, slow-simmered daals, rich paneer gravies, and fresh tandoori breads honouring ancient Indian gastronomic heritage.",
    linkText: "EXPLORE THALI MENUS",
    linkHref: "/#menus",
    linkColor: "gold",
  },
  {
    badge: "100% DEDICATED SANCTUM",
    badgeType: "green",
    image: "/images/about/about-jain-culinary-sanctum.jpg",
    alt: "Jain and Swaminarayan 100% Dedicated Kitchen Sanctum",
    title: "Jain & Swaminarayan",
    hasGreenDot: true,
    description:
      "Strictly prepared in dedicated cookware without onions, garlic, or root vegetables. Honouring ancient dietary sanctity with zero compromise on taste.",
    linkText: "KITCHEN SANCTUM DETAILS",
    linkHref: "/#about",
    linkColor: "green",
  },
  {
    badge: "UP TO 200 GUESTS",
    badgeType: "white",
    image: "/images/hero/hero-slider-dining-experience-3.jpg",
    alt: "Royal Banqueting Hall Celebrations at The Grand Maharaja",
    title: "Royal Banqueting",
    hasGreenDot: false,
    description:
      "From intimate gatherings to grand wedding celebrations of up to 200 guests, celebrate life's finest milestones in a regal hall steeped in Gujarati & Punjabi warmth.",
    linkText: "PLAN AN EVENT",
    linkHref: "/#banquets",
    linkColor: "gold",
  },
];

export function HospitalityPillars() {
  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24">
      {/* 1400px Strict Container */}
      <div
        className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10"
        style={{ maxWidth: "1400px" }}
      >
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#9B7B34]">
            IMPERIAL STANDARD
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#1A1A1A] tracking-tight mt-1.5">
            Three Pillars of Royal Hospitality
          </h2>
        </div>

        {/* 3-Column Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-9 items-stretch">
          {PILLARS_DATA.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-[#FAF8F5] rounded-2xl border border-[#EBE6DC] overflow-hidden flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-[#D4AF37]/50 transition-all duration-300 group"
            >
              {/* Image Frame with Badges */}
              <div className="relative w-full h-[230px] sm:h-[250px] lg:h-[260px] overflow-hidden bg-[#1A1A1A]">
                <Image
                  src={pillar.image}
                  alt={pillar.alt}
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Top Badge */}
                {pillar.badgeType === "green" ? (
                  <div className="absolute top-4 left-4 z-10 bg-[#0D3826] text-[#F3E5AB] text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block" />
                    <span>{pillar.badge}</span>
                  </div>
                ) : (
                  <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-xs text-[#1A1A1A] text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm">
                    {pillar.badge}
                  </div>
                )}
              </div>

              {/* Content Block */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center">
                    {pillar.hasGreenDot && (
                      <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] inline-block mr-2 shrink-0" />
                    )}
                    <h3 className="font-playfair text-xl sm:text-2xl font-semibold text-[#1A1A1A]">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-[13px] text-[#555555] leading-relaxed mt-2.5 font-sans">
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom Link Action */}
                <div className="pt-6">
                  <Link
                    href={pillar.linkHref}
                    className={`text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors font-sans group/link ${
                      pillar.linkColor === "green"
                        ? "text-[#0D3826] hover:text-[#062015]"
                        : "text-[#8C6E2E] hover:text-[#6B531F]"
                    }`}
                  >
                    <span>{pillar.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
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
