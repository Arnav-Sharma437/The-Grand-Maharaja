"use client";

import React from "react";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function MobileStickyBar() {
  const phoneHref = `tel:${SITE_CONFIG.contact.phone.replace(/\s+/g, "")}`;

  return (
    <aside
      aria-label="Quick Actions"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0D0C0A]/95 dark:bg-[#0D0C0A]/95 backdrop-blur-md border-t border-[#D4AF37]/30 shadow-[0_-8px_30px_rgba(0,0,0,0.8)] px-3 pt-2 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
    >
      <div className="max-w-md mx-auto flex items-center gap-2.5">
        {/* Call Button */}
        <a
          href={phoneHref}
          className="flex-1 h-11 inline-flex items-center justify-center gap-2 px-3 bg-[#181511] hover:bg-[#221C14] text-[#F5F1EB] border border-[#D4AF37]/40 rounded-xl text-xs font-semibold tracking-wide shadow-xs active:scale-[0.98] transition-all"
          aria-label={`Call ${SITE_CONFIG.contact.displayPhone}`}
        >
          <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
          <span className="truncate">{SITE_CONFIG.contact.displayPhone}</span>
        </a>

        {/* Book a Table Button */}
        <Link
          href="/contact#book-table"
          className="shimmer-hover flex-1 h-11 inline-flex items-center justify-center gap-2 px-3 bg-gradient-to-r from-[#8C6E2E] via-[#A38137] to-[#8C6E2E] hover:from-[#A38137] hover:to-[#8C6E2E] text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-[0_4px_16px_rgba(140,110,46,0.4)] active:scale-[0.98] transition-all"
        >
          <span>BOOK A TABLE</span>
          <ArrowRight className="w-3.5 h-3.5 shrink-0" />
        </Link>
      </div>
    </aside>
  );
}

export default MobileStickyBar;
