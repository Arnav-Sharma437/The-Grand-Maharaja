"use client";

import React from "react";
import Link from "next/link";
import { Crown, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#F5F1EB] dark:bg-[#12100D] border-t border-[#E8E2D5] dark:border-[#241F18] pt-16 sm:pt-20 pb-8 sm:pb-10 text-[#1A1A1A] dark:text-[#F5F1EB] transition-colors duration-200">
      {/* 1400px Strict Container */}
      <div
        className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10"
        style={{ maxWidth: "1400px" }}
      >
        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 sm:pb-16">
          {/* Column 1: Brand & Philosophy */}
          <div className="lg:col-span-4">
            {/* Brand Logo & Est. Leicester */}
            <div className="flex items-center gap-3">
              {/* Crown Icon Badge */}
              <div className="w-11 h-11 rounded-xl bg-[#E8E1D0] dark:bg-[#201C16] border border-[#DDD4BF] dark:border-[#2F2920] flex items-center justify-center shrink-0 text-[#8C6E2E] dark:text-[#D4AF37] shadow-sm">
                <Crown className="w-5 h-5 fill-[#8C6E2E]/20 dark:fill-[#D4AF37]/20" />
              </div>
              <div>
                <span className="font-cinzel text-base sm:text-[17px] font-bold tracking-wider text-[#1A1A1A] dark:text-[#F5F1EB] block leading-tight">
                  THE GRAND MAHARAJA
                </span>
                <span className="text-[10px] sm:text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#8C6E2E] dark:text-[#D4AF37] block mt-0.5">
                  EST. LEICESTER
                </span>
              </div>
            </div>

            {/* Brand Philosophy Text */}
            <p className="text-xs sm:text-[13px] text-[#666666] dark:text-[#A0988A] leading-relaxed mt-4 max-w-sm font-sans">
              An opulent sanctuary of royal Indian culinary artistry, honoring sacred vegetarian
              traditions and grand celebration hospitality in the heart of Leicester.
            </p>
          </div>

          {/* Column 2: Location & Inquiries */}
          <div className="lg:col-span-3">
            <h3 className="font-playfair text-lg sm:text-xl font-semibold text-[#1A1A1A] dark:text-[#F5F1EB] mb-4">
              Location &amp; Inquiries
            </h3>
            <ul className="space-y-3 text-xs sm:text-[13px] text-[#555555] dark:text-[#A0988A] font-sans">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#8C6E2E] dark:text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  209 Catherine St, Leicester LE4 6GE, UK
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#8C6E2E] dark:text-[#D4AF37] shrink-0" />
                <a
                  href="tel:+01165070296"
                  className="hover:text-[#8C6E2E] dark:hover:text-[#D4AF37] transition-colors leading-snug"
                >
                  +0116 507 0296
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#8C6E2E] dark:text-[#D4AF37] shrink-0" />
                <a
                  href="mailto:reservations@thegrandmaharaja.co.uk"
                  className="hover:text-[#8C6E2E] dark:hover:text-[#D4AF37] transition-colors break-all leading-snug"
                >
                  reservations@thegrandmaharaja.co.uk
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Service Hours */}
          <div className="lg:col-span-3">
            <h3 className="font-playfair text-lg sm:text-xl font-semibold text-[#1A1A1A] dark:text-[#F5F1EB] mb-4">
              Service Hours
            </h3>
            <div className="space-y-2.5 text-xs sm:text-[13px] font-sans">
              <div className="flex items-center justify-between gap-3">
                <span className="text-[#333333] dark:text-[#D5CFC5] font-medium">Thursday &ndash; Tuesday</span>
                <span className="text-[#555555] dark:text-[#A0988A]">12:00 PM &ndash; 10:00 PM</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-[#333333] dark:text-[#D5CFC5] font-medium">Wednesday</span>
                <span className="text-[#DC2626] dark:text-[#F87171] font-medium">Closed for Rest</span>
              </div>
              <div className="flex items-center justify-between gap-3 pt-1">
                <span className="text-[#333333] dark:text-[#D5CFC5] font-medium">Royal Banquet Hall</span>
                <span className="text-[#666666] dark:text-[#A0988A]">Private Bookings Only</span>
              </div>
            </div>
          </div>

          {/* Column 4: Heritage Menus */}
          <div className="lg:col-span-2">
            <h3 className="font-playfair text-lg sm:text-xl font-semibold text-[#1A1A1A] dark:text-[#F5F1EB] mb-4">
              Heritage Menus
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-[#666666] dark:text-[#A0988A] font-sans">
              <li>
                <a
                  href="#menu"
                  className="hover:text-[#8C6E2E] dark:hover:text-[#D4AF37] transition-colors block"
                >
                  Royal Thali Feasts
                </a>
              </li>
              <li>
                <a
                  href="#specialties"
                  className="hover:text-[#8C6E2E] dark:hover:text-[#D4AF37] transition-colors block"
                >
                  Jain &amp; Swaminarayan Specialties
                </a>
              </li>
              <li>
                <a
                  href="#bar"
                  className="hover:text-[#8C6E2E] dark:hover:text-[#D4AF37] transition-colors block"
                >
                  Maharaja Artisanal Mocktails &amp; Bar
                </a>
              </li>
              <li>
                <a
                  href="#banquets"
                  className="hover:text-[#8C6E2E] dark:hover:text-[#D4AF37] transition-colors block"
                >
                  Grand Banqueting Packages (Up to 200)
                </a>
              </li>
              <li>
                <a
                  href="#private-dining"
                  className="hover:text-[#8C6E2E] dark:hover:text-[#D4AF37] transition-colors block"
                >
                  Private Dining Celebrations
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="border-t border-[#E8E2D5] dark:border-[#241F18] pt-8 text-center">
          <p className="text-xs text-[#777777] dark:text-[#888] font-sans">
            &copy; 2026 The Grand Maharaja Leicester. All rights reserved. Pure Vegetarian
            Hospitality.
          </p>
        </div>
      </div>
    </footer>
  );
}
