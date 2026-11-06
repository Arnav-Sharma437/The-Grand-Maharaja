"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { BRAND_LOGOS, SITE_CONFIG } from "@/lib/constants";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";

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
      className={`sticky top-0 z-40 w-full transition-colors duration-200 bg-white dark:bg-[#110F0C] border-b ${
        isScrolled
          ? "border-[#EBE6DC] dark:border-[#26221A] shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          : "border-[#F0EBE3] dark:border-[#201C16]"
      } ${className}`}
    >
      <div
        className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 h-20 flex items-center justify-between"
        style={{ maxWidth: "1400px" }}
      >
        {/* Left: Prominent Circular Crest Logo (No side text) */}
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center focus:outline-none group"
            aria-label="The Grand Maharaja - Home"
          >
            {/* Real Original Circular Crest Logo - Size Enlarged with Royal Hover Glow */}
            <div className="relative w-14 h-14 sm:w-[60px] sm:h-[60px] lg:w-16 lg:h-16 rounded-full overflow-hidden bg-black flex items-center justify-center shrink-0 border border-[#222] dark:border-[#333] shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(155,123,52,0.4)] group-hover:border-[#9B7B34]">
              <Image
                src={BRAND_LOGOS.circularSealSolid}
                alt="The Grand Maharaja Crest"
                width={64}
                height={64}
                className="object-contain transition-transform duration-500 group-hover:rotate-3"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Center: Desktop Navigation Bar */}
        <DesktopNavigation />

        {/* Right: Theme Toggle, Phone Badge, Primary CTA & Mobile Hamburger */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          {/* Light / Dark Mode Toggle */}
          <ThemeToggle />

          {/* Phone Badge (+0116 507 0296) */}
          <a
            href={`tel:${SITE_CONFIG.contact.phone.replace(/\s+/g, "")}`}
            className="hidden lg:inline-flex items-center gap-2 px-3.5 py-2 bg-[#F5F1EB] hover:bg-[#EBE5DC] text-[#2C2C2C] dark:bg-[#1E1B15] dark:hover:bg-[#28231C] dark:text-[#E8E2D5] font-semibold text-xs rounded-md shadow-xs hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group/phone"
          >
            <Phone className="w-3.5 h-3.5 text-[#8C6E2E] dark:text-[#D4AF37] transition-transform duration-200 group-hover/phone:rotate-12" />
            <span>{SITE_CONFIG.contact.displayPhone}</span>
          </a>

          {/* Primary CTA: "BOOK A TABLE ->" with Shimmer Sweep & Elevation */}
          <Link
            href="/#reservations"
            className="shimmer-hover hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#7D6328] hover:bg-[#6B531F] dark:bg-[#8C6E2E] dark:hover:bg-[#A38137] text-white font-semibold text-xs uppercase tracking-wider rounded-md shadow-sm hover:shadow-[0_8px_20px_rgba(125,99,40,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group/btn"
          >
            <span>BOOK A TABLE</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </Link>

          {/* Mobile Menu Trigger */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;
