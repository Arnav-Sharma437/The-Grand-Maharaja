"use client";

import React from "react";
import Link from "next/link";
import { Crown, MapPin, Phone, Mail } from "lucide-react";
import { RoyalBackgroundGlow } from "@/components/ui/RoyalBackgroundGlow";
import { SITE_CONFIG } from "@/lib/constants";

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden w-full bg-[#F5F1EB] dark:bg-[#12100D] border-t border-[#E8E2D5] dark:border-[#241F18] pt-16 sm:pt-20 pb-8 sm:pb-10 text-[#1A1A1A] dark:text-[#F5F1EB] transition-colors duration-200">
      {/* Live Royal Background Effects */}
      <RoyalBackgroundGlow variant="minimal" particleCount={22} showMandala={false} />

      {/* 1400px Strict Container */}
      <div
        className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10"
        style={{ maxWidth: "1400px" }}
      >
        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 sm:pb-16">
          {/* Column 1: Brand & Philosophy */}
          <div className="lg:col-span-4">
            {/* Brand Logo & Est. Leicester */}
            <div className="flex items-center gap-3 group cursor-pointer">
              {/* Crown Icon Badge */}
              <div className="w-11 h-11 rounded-xl bg-[#E8E1D0] dark:bg-[#201C16] border border-[#DDD4BF] dark:border-[#2F2920] flex items-center justify-center shrink-0 text-[#8C6E2E] dark:text-[#D4AF37] shadow-sm group-hover:scale-105 group-hover:rotate-6 group-hover:shadow-[0_0_15px_rgba(155,123,52,0.3)] transition-all duration-300">
                <Crown className="w-5 h-5 fill-[#8C6E2E]/20 dark:fill-[#D4AF37]/20 group-hover:fill-[#8C6E2E]/40 dark:group-hover:fill-[#D4AF37]/40 transition-colors" />
              </div>
              <div>
                <span className="font-cinzel text-base sm:text-[17px] font-bold tracking-wider text-[#1A1A1A] dark:text-[#F5F1EB] block leading-tight group-hover:text-[#8C6E2E] dark:group-hover:text-[#D4AF37] transition-colors">
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

            {/* Social Media Channels (Facebook & Instagram) */}
            <div className="flex items-center gap-3 mt-5">
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow The Grand Maharaja on Facebook"
                className="w-9 h-9 rounded-xl bg-[#E8E1D0] dark:bg-[#201C16] border border-[#DDD4BF] dark:border-[#2F2920] flex items-center justify-center text-[#8C6E2E] dark:text-[#D4AF37] hover:scale-110 hover:bg-[#8C6E2E] hover:text-white dark:hover:bg-[#D4AF37] dark:hover:text-[#12100D] transition-all shadow-xs"
                title="Follow us on Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>

              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow The Grand Maharaja on Instagram"
                className="w-9 h-9 rounded-xl bg-[#E8E1D0] dark:bg-[#201C16] border border-[#DDD4BF] dark:border-[#2F2920] flex items-center justify-center text-[#8C6E2E] dark:text-[#D4AF37] hover:scale-110 hover:bg-[#8C6E2E] hover:text-white dark:hover:bg-[#D4AF37] dark:hover:text-[#12100D] transition-all shadow-xs"
                title="Follow us on Instagram @thegrandmaharaja"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#8C6E2E] dark:text-[#D4AF37] hover:underline"
              >
                {SITE_CONFIG.social.instagramHandle}
              </a>
            </div>
          </div>

          {/* Column 2: Location & Inquiries */}
          <div className="lg:col-span-3">
            <h3 className="font-playfair text-lg sm:text-xl font-semibold text-[#1A1A1A] dark:text-[#F5F1EB] mb-4">
              Location &amp; Inquiries
            </h3>
            <ul className="space-y-3 text-xs sm:text-[13px] text-[#555555] dark:text-[#A0988A] font-sans">
              <li className="flex items-start gap-2.5 group">
                <MapPin className="w-4 h-4 text-[#8C6E2E] dark:text-[#D4AF37] shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
                <span className="leading-snug group-hover:text-[#1A1A1A] dark:group-hover:text-[#F5F1EB] transition-colors">
                  209 Catherine St, Leicester LE4 6GE, UK
                </span>
              </li>
              <li className="flex items-center gap-2.5 group">
                <Phone className="w-4 h-4 text-[#8C6E2E] dark:text-[#D4AF37] shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-200" />
                <a
                  href="tel:+01165070296"
                  className="hover:text-[#8C6E2E] dark:hover:text-[#D4AF37] hover:translate-x-1 transition-all duration-200 leading-snug"
                >
                  +0116 507 0296
                </a>
              </li>
              <li className="flex items-center gap-2.5 group">
                <Mail className="w-4 h-4 text-[#8C6E2E] dark:text-[#D4AF37] shrink-0 group-hover:scale-110 transition-transform duration-200" />
                <a
                  href="mailto:reservations@thegrandmaharaja.co.uk"
                  className="hover:text-[#8C6E2E] dark:hover:text-[#D4AF37] hover:translate-x-1 transition-all duration-200 break-all leading-snug"
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
              <div className="flex items-center justify-between gap-3 p-1.5 -mx-1.5 rounded-lg hover:bg-[#EBE5D8]/50 dark:hover:bg-[#1A1713] transition-colors">
                <span className="text-[#333333] dark:text-[#D5CFC5] font-medium">Thursday &ndash; Tuesday</span>
                <span className="text-[#555555] dark:text-[#A0988A]">12:00 PM &ndash; 10:00 PM</span>
              </div>
              <div className="flex items-center justify-between gap-3 p-1.5 -mx-1.5 rounded-lg hover:bg-[#EBE5D8]/50 dark:hover:bg-[#1A1713] transition-colors">
                <span className="text-[#333333] dark:text-[#D5CFC5] font-medium">Wednesday</span>
                <span className="text-[#DC2626] dark:text-[#F87171] font-medium">Closed for Rest</span>
              </div>
              <div className="flex items-center justify-between gap-3 pt-1 p-1.5 -mx-1.5 rounded-lg hover:bg-[#EBE5D8]/50 dark:hover:bg-[#1A1713] transition-colors">
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
                <Link
                  href="/menu?tab=food"
                  className="hover:text-[#8C6E2E] dark:hover:text-[#D4AF37] hover:translate-x-1.5 transition-all duration-200 block group"
                >
                  <span className="text-[#8C6E2E] dark:text-[#D4AF37] opacity-0 group-hover:opacity-100 mr-1.5 transition-opacity duration-200">&rsaquo;</span>
                  Royal North Indian Curries
                </Link>
              </li>
              <li>
                <Link
                  href="/menu?tab=food"
                  className="hover:text-[#8C6E2E] dark:hover:text-[#D4AF37] hover:translate-x-1.5 transition-all duration-200 block group"
                >
                  <span className="text-[#8C6E2E] dark:text-[#D4AF37] opacity-0 group-hover:opacity-100 mr-1.5 transition-opacity duration-200">&rsaquo;</span>
                  Jain &amp; Swaminarayan Specialties
                </Link>
              </li>
              <li>
                <Link
                  href="/menu?tab=drinks"
                  className="hover:text-[#8C6E2E] dark:hover:text-[#D4AF37] hover:translate-x-1.5 transition-all duration-200 block group"
                >
                  <span className="text-[#8C6E2E] dark:text-[#D4AF37] opacity-0 group-hover:opacity-100 mr-1.5 transition-opacity duration-200">&rsaquo;</span>
                  Maharaja Artisanal Mocktails &amp; Bar
                </Link>
              </li>
              <li>
                <Link
                  href="/#banquets"
                  className="hover:text-[#8C6E2E] dark:hover:text-[#D4AF37] hover:translate-x-1.5 transition-all duration-200 block group"
                >
                  <span className="text-[#8C6E2E] dark:text-[#D4AF37] opacity-0 group-hover:opacity-100 mr-1.5 transition-opacity duration-200">&rsaquo;</span>
                  Grand Banqueting Packages (Approx 80 Guests)
                </Link>
              </li>
              <li>
                <Link
                  href="/#banquets"
                  className="hover:text-[#8C6E2E] dark:hover:text-[#D4AF37] hover:translate-x-1.5 transition-all duration-200 block group"
                >
                  <span className="text-[#8C6E2E] dark:text-[#D4AF37] opacity-0 group-hover:opacity-100 mr-1.5 transition-opacity duration-200">&rsaquo;</span>
                  Private Dining Celebrations
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Quick Links */}
        <div className="border-t border-[#E8E2D5] dark:border-[#241F18] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs text-[#777777] dark:text-[#888] font-sans">
            &copy; 2026 The Grand Maharaja Leicester. All rights reserved. Pure Vegetarian
            Hospitality.
          </p>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-[#8C6E2E] dark:text-[#D4AF37] font-semibold">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>&bull;</span>
            <Link href="/menu" className="hover:underline">
              Menus
            </Link>
            <span>&bull;</span>
            <Link href="/banqueting" className="hover:underline">
              Banqueting
            </Link>
            <span>&bull;</span>
            <Link href="/about" className="hover:underline">
              About Us
            </Link>
            <span>&bull;</span>
            <Link href="/gallery" className="hover:underline">
              Gallery
            </Link>
            <span>&bull;</span>
            <Link href="/contact" className="hover:underline">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
