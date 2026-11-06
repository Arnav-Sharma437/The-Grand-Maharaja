"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  return (
    <nav
      aria-label="Desktop Navigation"
      className={`hidden md:flex items-center gap-6 lg:gap-7 xl:gap-8 ${className}`}
    >
      {items.map((item) => {
        const isActive =
          item.label === "HOME"
            ? pathname === "/"
            : pathname.startsWith(item.href) && item.href !== "/";

        return (
          <Link
            key={item.label}
            href={item.href}
            className={`group relative py-2 font-sans text-xs lg:text-[13px] font-semibold uppercase tracking-wider transition-colors duration-200 focus:outline-none ${
              isActive
                ? "text-[#8C6E2E]"
                : "text-[#2C2C2C] hover:text-[#8C6E2E]"
            }`}
          >
            <span>{item.label}</span>
            {/* Active Gold Underline or Subtle Hover Underline */}
            <span
              aria-hidden="true"
              className={`absolute bottom-0 left-0 h-[2px] bg-[#8C6E2E] transition-all duration-200 ${
                isActive ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </Link>
        );
      })}
    </nav>
  );
}

export default DesktopNavigation;
