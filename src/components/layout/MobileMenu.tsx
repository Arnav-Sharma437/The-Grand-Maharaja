"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronRight, Phone, ArrowRight, MapPin } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, BRAND_LOGOS, SITE_CONFIG } from "@/lib/constants";
import { ThemeToggle } from "./ThemeToggle";

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
        className="flex items-center justify-center h-10 w-10 rounded-md border border-[#EBE6DC] dark:border-[#2D2820] bg-[#F5F1EB] dark:bg-[#1A1813] text-[#1A1A1A] dark:text-[#E8E2D5] hover:text-[#8C6E2E] dark:hover:text-[#D4AF37] transition-colors focus:outline-none"
      >
        <Menu className="w-5 h-5" />
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
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            />

            {/* Slide-over Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="relative z-10 w-full max-w-[340px] h-full bg-white dark:bg-[#110F0C] border-l border-[#EBE6DC] dark:border-[#26221A] flex flex-col justify-between shadow-2xl transition-colors duration-200"
            >
              {/* Top Drawer Header with Prominent Circular Crest & Theme Toggle */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#F0EBE3] dark:border-[#221D16]">
                <Link
                  href="/"
                  onClick={handleClose}
                  className="flex items-center focus:outline-none"
                  aria-label="The Grand Maharaja - Home"
                >
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-black flex items-center justify-center shrink-0 border border-[#222] dark:border-[#333]">
                    <Image
                      src={BRAND_LOGOS.circularSealSolid}
                      alt="The Grand Maharaja Crest"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                </Link>

                <div className="flex items-center gap-2">
                  <ThemeToggle />
                  <button
                    type="button"
                    onClick={handleClose}
                    aria-label="Close navigation menu"
                    className="p-2 text-[#666666] hover:text-[#1A1A1A] dark:text-[#A0988A] dark:hover:text-[#F5F1EB] rounded-md hover:bg-[#F5F1EB] dark:hover:bg-[#1C1813] transition-colors focus:outline-none"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Navigation Links */}
              <nav aria-label="Mobile Navigation" className="flex-1 overflow-y-auto py-2">
                <ul className="divide-y divide-[#F0EBE3] dark:divide-[#221D16]">
                  {items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={handleClose}
                        className="min-h-[50px] flex items-center justify-between px-6 py-3 font-sans text-xs font-semibold uppercase tracking-wider text-[#2C2C2C] dark:text-[#E0D9CD] hover:text-[#8C6E2E] dark:hover:text-[#D4AF37] hover:bg-[#F8F6F2] dark:hover:bg-[#1B1712] transition-colors"
                      >
                        <span>{item.label}</span>
                        <ChevronRight className="w-4 h-4 text-[#8C6E2E]/60 dark:text-[#D4AF37]/60" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Bottom Actions: Phone & CTA */}
              <div className="p-6 border-t border-[#F0EBE3] dark:border-[#221D16] bg-[#FAF8F5] dark:bg-[#15130F] space-y-3.5">
                <a
                  href={`tel:${SITE_CONFIG.contact.phone.replace(/\s+/g, "")}`}
                  className="w-full h-11 bg-white dark:bg-[#1C1813] border border-[#EBE6DC] dark:border-[#2C261E] text-[#2C2C2C] dark:text-[#E0D9CD] font-semibold text-xs rounded-md flex items-center justify-center gap-2 hover:bg-[#F5F1EB] dark:hover:bg-[#252019] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#8C6E2E] dark:text-[#D4AF37]" />
                  <span>{SITE_CONFIG.contact.displayPhone}</span>
                </a>

                <Link
                  href="/#reservations"
                  onClick={handleClose}
                  className="w-full h-11 bg-[#7D6328] hover:bg-[#6B531F] dark:bg-[#8C6E2E] dark:hover:bg-[#A38137] text-white font-semibold text-xs uppercase tracking-wider rounded-md flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <span>BOOK A TABLE</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="pt-2 flex items-center justify-center gap-1.5 text-[11px] text-[#666666] dark:text-[#9E9587]">
                  <MapPin className="w-3.5 h-3.5 text-[#8C6E2E] dark:text-[#D4AF37]" />
                  <span>{SITE_CONFIG.contact.shortAddress}</span>
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
