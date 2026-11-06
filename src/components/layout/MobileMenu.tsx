"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronRight, Phone, Clock } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, BRAND_LOGOS, SITE_CONFIG } from "@/lib/constants";

export interface MobileMenuProps {
  items?: readonly { label: string; href: string }[];
}

export function MobileMenu({ items = NAV_LINKS }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Close drawer on Escape key and prevent background scroll when open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleClose = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      {/* Hamburger Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        className="flex items-center justify-center h-11 w-11 border border-[#26221C] bg-[#121212] text-[#FAF7F2] hover:text-[#D4AF37] hover:border-[#D4AF37]/40 transition-colors focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
      >
        <Menu className="w-6 h-6 stroke-[1.75]" />
      </button>

      {/* Slide-over Drawer & Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={handleClose}
              aria-hidden="true"
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Slide-over Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="relative z-10 w-full max-w-[340px] sm:max-w-sm h-full bg-[#0A0A0A] border-l border-[#26221C] flex flex-col justify-between shadow-2xl"
            >
              {/* Top Drawer Header with Compact Logo */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-[#26221C]">
                <Link
                  href="/"
                  onClick={handleClose}
                  className="flex items-center gap-3 focus:outline-none"
                >
                  <div className="relative h-10 w-10 shrink-0">
                    <Image
                      src={BRAND_LOGOS.compactMobile}
                      alt="The Grand Maharaja Crest"
                      fill
                      sizes="40px"
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-cinzel text-xs font-semibold tracking-wider text-[#FAF7F2]">
                      THE GRAND MAHARAJA
                    </span>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#D4AF37]">
                      Pure Vegetarian Dining
                    </span>
                  </div>
                </Link>

                <button
                  type="button"
                  onClick={handleClose}
                  aria-label="Close navigation menu"
                  className="p-2 text-[#FAF7F2]/70 hover:text-[#D4AF37] border border-[#26221C] bg-[#121212] transition-colors focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                >
                  <X className="w-5 h-5 stroke-[1.75]" />
                </button>
              </div>

              {/* Navigation Links with Proper Touch Targets (Min 52px height) */}
              <nav aria-label="Mobile Navigation" className="flex-1 overflow-y-auto py-3">
                <ul className="divide-y divide-[#26221C]/50">
                  {items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={handleClose}
                        className="min-h-[52px] flex items-center justify-between px-6 py-3.5 font-sans text-xs uppercase tracking-[0.2em] text-[#FAF7F2] hover:text-[#D4AF37] hover:bg-[#121212]/60 transition-colors"
                      >
                        <span>{item.label}</span>
                        <ChevronRight className="w-4 h-4 text-[#D4AF37]/50" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Bottom Actions & Full-Width CTA */}
              <div className="p-6 border-t border-[#26221C] bg-[#0A0A0A] space-y-4">
                <Link
                  href="/#reservations"
                  onClick={handleClose}
                  className="w-full h-12 px-8 bg-[#D4AF37] text-[#0A0A0A] font-sans font-semibold text-xs uppercase tracking-[0.2em] flex items-center justify-center rounded-none hover:bg-[#E5C07B] transition-all duration-300 shadow-[0_2px_15px_rgba(212,175,55,0.25)] focus:outline-none"
                >
                  BOOK A TABLE
                </Link>

                {/* Royal Hospitality Badges & Contact */}
                <div className="pt-2 text-[11px] text-[#FAF7F2]/60 space-y-1.5 border-t border-[#26221C]/40">
                  <div className="flex items-center gap-2 text-[#FAF7F2]/80">
                    <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{SITE_CONFIG.contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#FAF7F2]/60">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Tue – Sun: 12:00 PM – 10:30 PM</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileMenu;
