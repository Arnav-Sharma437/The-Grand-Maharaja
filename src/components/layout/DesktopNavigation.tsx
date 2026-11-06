import React from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

export interface NavItem {
  label: string;
  href: string;
}

export interface DesktopNavigationProps {
  items?: readonly NavItem[];
  className?: string;
}

export function DesktopNavigation({
  items = NAV_LINKS,
  className = "",
}: DesktopNavigationProps) {
  return (
    <nav
      aria-label="Desktop Navigation"
      className={`hidden md:flex items-center gap-6 lg:gap-8 xl:gap-10 ${className}`}
    >
      {items.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="group relative py-2 font-sans text-xs lg:text-[13px] font-medium uppercase tracking-[0.18em] text-[#FAF7F2]/85 hover:text-[#D4AF37] transition-colors duration-200 focus:outline-none focus:text-[#D4AF37]"
        >
          <span>{item.label}</span>
          {/* Subtle Royal Gold Hover Underline Indicator */}
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#D4AF37] transition-all duration-300 ease-out group-hover:w-full"
          />
        </Link>
      ))}
    </nav>
  );
}

export default DesktopNavigation;
