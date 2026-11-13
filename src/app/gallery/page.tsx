import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { RoyalBackgroundGlow } from "@/components/ui/RoyalBackgroundGlow";
import { GalleryExplorer } from "@/components/gallery/GalleryExplorer";
import { SITE_CONFIG } from "@/lib/constants";
import {
  Sparkles,
  Home,
  ChevronRight,
  ArrowRight,
  Film,
  Phone,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Royal Gallery & Live Instagram Reels | The Grand Maharaja Leicester",
  description:
    "Explore our royal vegetarian culinary gallery and live Instagram reels in Leicester. Discover our grand banquet suite, traditional clay-oven artistry, and celebratory moments.",
  pathname: "/gallery",
});

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

export default function GalleryPage() {
  return (
    <main className="min-h-screen flex flex-col w-full bg-white dark:bg-[#0D0C0A] transition-colors duration-200">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: GRAND HERO BANNER
      ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[440px] sm:min-h-[500px] lg:min-h-[540px] flex items-center justify-center py-16 sm:py-20 lg:py-24 overflow-hidden border-b-2 border-[#D4AF37]/40 shadow-[0_4px_30px_rgba(212,175,55,0.15)]">
        {/* Authentic Background Photo */}
        <Image
          src="/images/gallery/gallery-gourmet-feast-spread.png"
          alt="The Grand Maharaja Royal Visual Gallery & Banquets"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Multi-layer Dark Golden Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0C0A]/90 via-[#0D0C0A]/80 to-[#0D0C0A]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.22)_0%,rgba(13,12,10,0.85)_70%,rgba(13,12,10,0.98)_100%)]" />

        {/* Subtle Decorative Golden Border Frames */}
        <div className="absolute inset-4 sm:inset-6 md:inset-8 border border-[#D4AF37]/25 pointer-events-none rounded-2xl" />
        <div className="absolute inset-5 sm:inset-7 md:inset-9 border border-[#D4AF37]/15 pointer-events-none rounded-xl" />

        {/* Live Royal Background Glow Particles */}
        <RoyalBackgroundGlow variant="hero" particleCount={22} showMandala={false} />

        {/* Content Container (Strict 1400px Container) */}
        <div
          className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex flex-col items-center text-center"
          style={{ maxWidth: "1400px" }}
        >
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs sm:text-[13px] text-[#D4AF37] font-medium tracking-wider uppercase mb-5 font-sans"
          >
            <Link
              href="/"
              className="flex items-center gap-1.5 hover:text-white transition-colors duration-200 opacity-90 hover:opacity-100"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60 text-[#D4AF37]" />
            <span className="text-[#F5F1EB] font-semibold">Royal Gallery</span>
          </nav>

          {/* Regal Subtitle Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1610]/80 border border-[#D4AF37]/50 text-[#D4AF37] text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] mb-4 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
            <span>VISUAL ROYAL EXPERIENCE</span>
          </div>

          {/* Main Hero Heading */}
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F1EB] tracking-tight leading-[1.15] max-w-4xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Royal Visual Gallery &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] italic font-normal">
              Live Reels
            </span>
          </h1>

          {/* Decorative Gold Flourish Divider */}
          <div className="flex items-center justify-center gap-3 my-4 sm:my-5">
            <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <div className="w-2 h-2 rotate-45 bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]" />
            <div className="w-12 sm:w-20 h-px bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>

          {/* Hero Subtitle */}
          <p className="font-sans text-sm sm:text-base md:text-lg text-[#E5DFD5] max-w-2xl leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
            Immerse yourself in our opulent dining halls, celebratory banquet suites, and authentic
            vegetarian gastronomy — captured live directly from our official Instagram feed.
          </p>

          {/* Quick Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-7">
            <a
              href={SITE_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer-hover inline-flex items-center gap-2 bg-gradient-to-r from-[#E1306C] via-[#FD1D1D] to-[#F77737] text-white px-6 sm:px-8 py-3.5 rounded-full font-bold text-xs sm:text-[13px] tracking-[0.16em] uppercase shadow-[0_4px_20px_rgba(225,48,108,0.5)] hover:shadow-[0_6px_25px_rgba(225,48,108,0.7)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Watch Daily Reels on Instagram</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#1A1610]/90 hover:bg-[#252018] text-[#F5F1EB] border border-[#D4AF37]/50 hover:border-[#D4AF37] px-6 sm:px-8 py-3.5 rounded-full font-bold text-xs sm:text-[13px] tracking-[0.16em] uppercase backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-md"
            >
              <Calendar className="w-4 h-4 text-[#D4AF37]" />
              <span>Book Table / Event</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: INTERACTIVE GALLERY & LIVE REELS EXPLORER
      ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full bg-white dark:bg-[#0D0C0A] transition-colors duration-200">
        <RoyalBackgroundGlow variant="section" particleCount={16} showMandala={false} />
        <GalleryExplorer />
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: BANQUET & CELEBRATION CTA BANNER
      ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full py-16 sm:py-20 bg-[#F5F1EB]/80 dark:bg-[#14120E] border-t border-[#E8E2D5] dark:border-[#241F18] transition-colors duration-200 overflow-hidden">
        <div
          className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 text-center"
          style={{ maxWidth: "1400px" }}
        >
          <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#8C6E2E] dark:text-[#D4AF37] font-sans mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>JOIN US IN PERSON</span>
          </div>

          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] dark:text-[#F5F1EB] tracking-tight">
            Celebrate Your Grand Occasion{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8C6E2E] via-[#B89647] to-[#8C6E2E] dark:from-[#D4AF37] dark:via-[#F3E5AB] dark:to-[#D4AF37] italic font-normal">
              In True Royalty
            </span>
          </h2>

          <p className="font-sans text-xs sm:text-sm text-[#555555] dark:text-[#A0988A] max-w-2xl mx-auto leading-relaxed mt-4">
            From intimate table dining to our 80-guest private banquet suite and nationwide
            pure vegetarian catering across the UK, our royal hospitality team awaits your presence.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Link
              href="/contact"
              className="shimmer-hover inline-flex items-center gap-2 bg-[#1A1A1A] dark:bg-[#8C6E2E] hover:bg-[#2A2A2A] dark:hover:bg-[#A38137] text-white px-7 py-3.5 rounded-full font-bold text-xs sm:text-[13px] tracking-[0.16em] uppercase shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>Reserve Table or Banquet</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37] dark:text-white" />
            </Link>

            <Link
              href="/menu"
              className="inline-flex items-center gap-2 bg-white dark:bg-[#1A1612] hover:bg-[#FAF8F5] dark:hover:bg-[#221D16] text-[#1A1A1A] dark:text-[#F5F1EB] border border-[#DDD4BF] dark:border-[#382F22] px-7 py-3.5 rounded-full font-bold text-xs sm:text-[13px] tracking-[0.16em] uppercase hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-xs"
            >
              <span>Explore Menus</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}