"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { BRAND_LOGOS, SITE_CONFIG } from "@/lib/constants";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileMenu } from "./MobileMenu";

export interface HeaderProps {
  className?: string;
}

export function Header({ className = "" }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 bg-white border-b ${
        isScrolled
          ? "border-[#EBE6DC] shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
          : "border-[#F0EBE3]"
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left: Circular Black Crest + Two-Line Brand Title */}
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-3 focus:outline-none group"
            aria-label="The Grand Maharaja - Home"
          >
            {/* Circular Black Medallion Crest */}
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden bg-black flex items-center justify-center shrink-0 border border-[#222] shadow-sm transition-transform duration-200 group-hover:scale-105">
              <Image
                src={BRAND_LOGOS.circularSeal}
                alt="The Grand Maharaja Crest"
                width={40}
                height={40}
                className="object-contain p-0.5"
                priority
              />
            </div>

            {/* Two-Line Wordmark */}
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xs sm:text-[13px] tracking-[0.18em] uppercase text-[#1A1A1A] leading-tight">
                THE GRAND
              </span>
              <span className="font-serif font-bold text-xs sm:text-[13px] tracking-[0.18em] uppercase text-[#1A1A1A] leading-tight">
                MAHARAJA
              </span>
            </div>
          </Link>
        </div>

        {/* Center: Desktop Navigation Bar */}
        <DesktopNavigation />

        {/* Right: Phone Badge, Primary CTA & Mobile Hamburger */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Phone Badge (+0116 507 0296) */}
          <a
            href={`tel:${SITE_CONFIG.contact.phone.replace(/\s+/g, "")}`}
            className="hidden lg:inline-flex items-center gap-2 px-3.5 py-2 bg-[#F5F1EB] hover:bg-[#EBE5DC] text-[#2C2C2C] font-semibold text-xs rounded-md transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#8C6E2E]" />
            <span>{SITE_CONFIG.contact.displayPhone}</span>
          </a>

          {/* Primary CTA: "BOOK A TABLE ->" */}
          <Link
            href="/#reservations"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#7D6328] hover:bg-[#6B531F] text-white font-semibold text-xs uppercase tracking-wider rounded-md shadow-sm transition-all duration-200"
          >
            <span>BOOK A TABLE</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          {/* Mobile Menu Trigger */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;
