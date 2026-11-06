"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#E8E2D5] dark:border-[#383126] bg-[#FAF8F5] dark:bg-[#1E1B15] opacity-60 ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-all duration-300 shadow-sm ${
        isDark
          ? "border-[#3D3528] bg-[#1E1B15] text-[#D4AF37] hover:border-[#D4AF37] hover:bg-[#2A241C] hover:shadow-[0_0_12px_rgba(212,175,55,0.2)]"
          : "border-[#E8E2D5] bg-[#FAF8F5] text-[#7D6328] hover:border-[#7D6328] hover:bg-[#F5F0E6] hover:shadow-sm"
      } ${className}`}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative w-4 h-4 sm:w-[18px] sm:h-[18px]">
        {/* Sun Icon (Visible in Dark Mode) */}
        <Sun
          className={`w-full h-full absolute inset-0 transition-transform duration-300 ${
            isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
          }`}
        />
        {/* Moon Icon (Visible in Light Mode) */}
        <Moon
          className={`w-full h-full absolute inset-0 transition-transform duration-300 ${
            isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
          }`}
        />
      </div>
    </button>
  );
}
