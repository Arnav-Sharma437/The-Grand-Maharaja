"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BRAND_LOGOS } from "@/lib/constants";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileMenu } from "./MobileMenu";

export interface HeaderProps {
  className?: string;
}

export function Header({ className = "" }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 bg-[#0A0A0A]/95 backdrop-blur-md border-b ${
        isScrolled
          ? "border-[#26221C] shadow-[0_4px_24px_rgba(0,0,0,0.85)]"
          : "border-[#26221C]"
      } ${className}`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 h-20 lg:h-24 flex items-center justify-between">
        {/* Left: Brand Identity */}
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-3 focus:outline-none group"
            aria-label="The Grand Maharaja - Home"
          >
            {/* Desktop Original Master Logo (5120x5120 transparent) */}
            <div className="hidden md:block relative h-14 lg:h-16 w-auto">
              <Image
                src={BRAND_LOGOS.masterDesktop}
                alt="The Grand Maharaja - Royal Indian Vegetarian Dining"
                width={180}
                height={64}
                className="h-14 lg:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                priority
              />
            </div>

            {/* Mobile Original Compact Logo (512x512 transparent) */}
            <div className="flex md:hidden items-center gap-2.5">
              <div className="relative h-10 w-10 shrink-0">
                <Image
                  src={BRAND_LOGOS.compactMobile}
                  alt="The Grand Maharaja Crest"
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                  priority
                />
              </div>
              <span className="font-cinzel text-xs font-semibold tracking-wider text-[#FAF7F2] uppercase">
                The Grand Maharaja
              </span>
            </div>
          </Link>
        </div>

        {/* Center: Desktop Navigation Bar */}
        <DesktopNavigation />

        {/* Right: Primary Action CTA & Mobile Menu Trigger */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Desktop "BOOK A TABLE" CTA Button */}
          <Link
            href="/#reservations"
            className="hidden md:inline-flex items-center justify-center h-12 px-8 bg-[#D4AF37] text-[#0A0A0A] font-sans font-semibold text-xs uppercase tracking-[0.2em] rounded-none hover:bg-[#E5C07B] transition-all duration-300 shadow-[0_2px_15px_rgba(212,175,55,0.25)] hover:shadow-[0_4px_25px_rgba(212,175,55,0.4)] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
          >
            BOOK A TABLE
          </Link>

          {/* Mobile Menu Slide-over Trigger */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;
