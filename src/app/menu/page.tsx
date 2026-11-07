import React, { Suspense } from "react";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { MenuExplorer } from "@/components/menu/MenuExplorer";
import { RoyalBackgroundGlow } from "@/components/ui/RoyalBackgroundGlow";

export const metadata: Metadata = constructMetadata({
  title: "Imperial Food & Drinks Menu",
  description:
    "Explore the complete pure vegetarian food menu and licensed bar drinks menu at The Grand Maharaja in Leicester. 122 royal dishes, Jain options, and 76 artisanal drinks.",
  pathname: "/menu",
});

export default function MenuPage() {
  return (
    <main className="relative min-h-screen flex flex-col w-full bg-[#FFFFFF] dark:bg-[#0D0C0A] transition-colors duration-200 overflow-hidden">
      {/* Live Royal Ambient Background (Floating Gold Stardust & Ambient Aura) */}
      <RoyalBackgroundGlow variant="hero" particleCount={36} showMandala={true} />

      {/* Main Interactive Menu Explorer with Suspense */}
      <div className="relative z-10 w-full">
        <Suspense
          fallback={
            <div className="w-full py-28 text-center">
              <div className="inline-block w-8 h-8 border-2 border-[#9B7B34] border-t-transparent rounded-full animate-spin" />
              <p className="mt-3 text-xs text-[#8C6E2E] dark:text-[#D4AF37] uppercase tracking-wider font-semibold">
                Opening Imperial Menu...
              </p>
            </div>
          }
        >
          <MenuExplorer />
        </Suspense>
      </div>
    </main>
  );
}
