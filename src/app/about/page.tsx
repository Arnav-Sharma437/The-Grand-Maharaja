import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { RoyalBackgroundGlow } from "@/components/ui/RoyalBackgroundGlow";
import {
  Sparkles,
  ShieldCheck,
  Utensils,
  Users,
  Clock,
  ArrowRight,
  Flame,
  Award,
  HeartHandshake,
  CheckCircle2,
  Phone,
  Calendar,
  ChefHat,
  MapPin,
  Home,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "About Our Royal Heritage & Story",
  description:
    "Learn about The Grand Maharaja in Leicester — an authentic sanctuary of North Indian & Gujarati vegetarian fine gastronomy, dedicated Jain kitchen sanctum, and regal banqueting.",
  pathname: "/about",
});

// 4 Key Pillars from the live site Hero
const HERITAGE_STATS = [
  {
    icon: ShieldCheck,
    statNumber: "100%",
    title: "Pure Vegetarian",
    description: "Authentic plant-based culinary art with zero compromise",
    highlight: "Dedicated Sanctum",
  },
  {
    icon: Utensils,
    statNumber: "Dedicated",
    title: "Jain & Swaminarayan",
    description: "Strict dietary care with specialized cookware & utensils",
    highlight: "Zero Alliums",
  },
  {
    icon: Users,
    statNumber: "80 Approx",
    title: "Banquet Suite",
    description: "Opulent private suite for celebrations & milestone events",
    highlight: "Regal Elegance",
  },
  {
    icon: Clock,
    statNumber: "Daily",
    title: "Regal Hospitality",
    description: "Lunch & dinner served 12:00 – 22:00 (Wednesday Closed)",
    highlight: "Authentic Taste",
  },
];

// Kitchen Masterpieces from the live site
const KITCHEN_MASTERPIECES = [
  {
    category: "STREET GASTRONOMY",
    title: "Royal Gourmet Street Delicacies",
    description:
      "Authentic street gastronomic artistry — crisp spiced papdis, velvety curd, fragrant mint chutneys, and pomegranate jewels prepared fresh to order.",
    image: "/images/food/food-tgm-royal-street-chaat.jpg",
    alt: "Royal Gourmet Street Delicacies at The Grand Maharaja",
    tag: "Handcrafted Fresh",
  },
  {
    category: "CLAY-OVEN SPECIALTY",
    title: "Sizzling Clay-Oven Specialties",
    description:
      "Tandoor-fired artisanal skewers of marinated cottage cheese, charred bell peppers, and fragrant spices baked inside the clay tandoor.",
    image: "/images/food/food-tgm-royal-tandoori-paneer.jpg",
    alt: "Sizzling Clay-Oven Specialties at The Grand Maharaja",
    tag: "Traditional Clay Hearth",
  },
  {
    category: "IMPERIAL CONFECTION",
    title: "Imperial Sweets & Warm Desserts",
    description:
      "Traditional royal confections — slow-simmered rose-scented gulab jamuns paired with artisanal pistachio kulfi, saffron rabdi, and delicate gold vark.",
    image: "/images/food/food-tgm-royal-dessert.jpg",
    alt: "Imperial Sweets & Warm Desserts at The Grand Maharaja",
    tag: "Pure Silver & Saffron",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col w-full bg-white dark:bg-[#0D0C0A] transition-colors duration-200">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: GRAND ROYAL HERO BANNER (Cinematic Banquet Atmosphere)
          Background: catering_feast.jpg with Dark Golden Regal Vignette
      ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[440px] sm:min-h-[500px] lg:min-h-[540px] flex items-center justify-center py-16 sm:py-20 lg:py-24 overflow-hidden border-b-2 border-[#D4AF37]/40 shadow-[0_4px_30px_rgba(212,175,55,0.15)]">
        {/* Authentic Background Photo with Next.js Image Optimization */}
        <Image
          src="/images/banquet/catering_feast.jpg"
          alt="The Grand Maharaja Royal Catering Feast & Fine Dining Hall"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Deep Royal Vignette & Dark Golden Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0806]/85 via-[#120E0B]/90 to-[#0A0806]/98 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(6,5,4,0.7)_100%)] pointer-events-none" />

        {/* Live Royal Ambient Background (Floating Gold Embers & Sacred Mandala) */}
        <RoyalBackgroundGlow variant="hero" particleCount={48} showMandala={true} mandalaPosition="right" />

        <div
          className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 text-center"
          style={{ maxWidth: "1400px" }}
        >
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="inline-flex items-center gap-2 text-xs text-[#D5CFC5]/80 mb-5 font-sans"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-[#E0D8CA] hover:text-[#D4AF37] transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3 h-3 text-[#999]" />
            <span className="text-[#F5F1EB] font-semibold">
              About Our Heritage
            </span>
          </nav>

          {/* Royal Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1F1912]/80 backdrop-blur-md border border-[#D4AF37]/40 shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#F3E5AB]">
              EST. LEICESTER &bull; PURE VEGETARIAN SANCTUARY
            </span>
          </div>

          {/* Grand Page Title (Cinzel Majestic Typography) */}
          <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-[0.06em] leading-tight">
            Heritage &amp; Royal Flavours
          </h1>

          {/* Decorative Golden Leaf & Line Ornament */}
          <div className="flex items-center justify-center gap-3 my-4">
            <span className="w-12 sm:w-20 h-[1.5px] bg-[#D4AF37]/70" />
            <span className="text-[#D4AF37] text-lg sm:text-xl select-none">&#10086;</span>
            <span className="w-12 sm:w-20 h-[1.5px] bg-[#D4AF37]/70" />
          </div>

          {/* Authentic Hero Lead Paragraph */}
          <p className="font-playfair text-base sm:text-xl lg:text-[22px] text-[#F3E5AB] max-w-4xl mx-auto leading-relaxed italic font-normal">
            &ldquo;A regal sanctuary of authentic North Indian &amp; Gujarati fine vegetarian gastronomy,
            sacred hand-ground spices, and generational Indian warmth in the heart of Leicester.&rdquo;
          </p>

          {/* Dual Royal CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+01165070296"
              className="shimmer-hover inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#9B7B34] hover:bg-[#836729] text-white text-xs sm:text-[13px] font-bold uppercase tracking-wider rounded-xl shadow-[0_8px_25px_rgba(155,123,52,0.4)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              <span>BOOK A TABLE &bull; +0116 507 0296</span>
            </a>

            <Link
              href="/menu"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white/10 hover:bg-white/15 backdrop-blur-md text-white border border-[#E0D8CA]/50 hover:border-[#D4AF37] text-xs sm:text-[13px] font-bold uppercase tracking-wider rounded-xl shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <Utensils className="w-4 h-4 text-[#D4AF37]" />
              <span>EXPLORE OUR MENUS</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 1B: HERITAGE HIGHLIGHTS & STATS BAR
          Background: #F5F1EB/60 (Light) | #14120E (Dark)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full bg-[#F5F1EB]/60 dark:bg-[#14120E] py-12 sm:py-14 border-b border-[#EAE3D6] dark:border-[#262017] transition-colors duration-200">
        <div
          className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10"
          style={{ maxWidth: "1400px" }}
        >
          {/* 4 Core Heritage Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch">
            {HERITAGE_STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="card-hover-elevate bg-white dark:bg-[#1A1611] rounded-2xl p-6 border border-[#E8E2D5] dark:border-[#2A241C] border-t-[3px] border-t-[#9B7B34] dark:border-t-[#D4AF37] shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] flex flex-col justify-between transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-[#FAF5EB] dark:bg-[#231D16] border border-[#E8DFD0] dark:border-[#352B1F] flex items-center justify-center text-[#9B7B34] dark:text-[#D4AF37]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8C6E2E] dark:text-[#D4AF37] px-2.5 py-1 rounded-full bg-[#FAF5EB] dark:bg-[#231D16] border border-[#E8DFD0] dark:border-[#352B1F]">
                        {stat.highlight}
                      </span>
                    </div>

                    <div className="font-cinzel text-2xl sm:text-3xl font-bold text-[#9B7B34] dark:text-[#D4AF37] tracking-tight">
                      {stat.statNumber}
                    </div>

                    <h3 className="font-playfair text-lg sm:text-xl font-bold text-[#1A1A1A] dark:text-[#F5F1EB] mt-1 leading-snug">
                      {stat.title}
                    </h3>
                  </div>

                  <p className="font-sans text-xs sm:text-[13px] text-[#666666] dark:text-[#A8A194] leading-relaxed mt-4 pt-3 border-t border-[#F0EAE0] dark:border-[#262017]">
                    {stat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: A CULINARY SANCTUARY (Core Story & Triple Photo Frame)
          Background: #FFFFFF (Light) | #0D0C0A (Dark)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full bg-white dark:bg-[#0D0C0A] py-16 sm:py-20 lg:py-24 overflow-hidden transition-colors duration-200">
        <RoyalBackgroundGlow variant="section" particleCount={32} showMandala={true} mandalaPosition="left" />

        <div
          className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10"
          style={{ maxWidth: "1400px" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Authentic Brand Narrative */}
            <div className="lg:col-span-6">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#9B7B34] dark:text-[#D4AF37] block font-sans">
                A CULINARY SANCTUARY
              </span>
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1A1A1A] dark:text-[#F5F1EB] tracking-tight mt-2 leading-tight">
                ABOUT THE GRAND MAHARAJA <span className="text-[#9B7B34] dark:text-[#D4AF37]">Leicester</span>
              </h2>

              <div className="space-y-4 mt-6 font-sans text-xs sm:text-sm text-[#555555] dark:text-[#A8A194] leading-relaxed">
                <p>
                  Vegetarian dining at The Grand Maharaja is an art form. Slow-simmered daals, rich
                  aromatic paneer gravies, hand-stretched tandoori breads, and stone-ground spices
                  roasted in-house daily honour timeless royal culinary recipes passed down through
                  generations of master chefs.
                </p>
                <p>
                  From our dedicated Jain &amp; Swaminarayan kitchen sanctum prepared strictly with
                  dedicated cookware utilizing fresh raw vegetables &amp; potatoes without onion or garlic, to our private 80-guest banqueting
                  suite and welcoming hearth lounge, we invite you to gather, feast, and celebrate in an
                  atmosphere of enduring warmth and regal hospitality.
                </p>
              </div>

              {/* Royal Value Props */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-[#EAE3D6] dark:border-[#221C15]">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF4E8] dark:bg-[#1E1913] border border-[#E8DEC9] dark:border-[#2E2419] flex items-center justify-center shrink-0 text-[#9B7B34] dark:text-[#D4AF37] mt-0.5">
                    <ChefHat className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-playfair font-bold text-sm text-[#1A1A1A] dark:text-[#F5F1EB]">
                      Master Culinary Chefs
                    </h4>
                    <p className="text-[11.5px] text-[#666] dark:text-[#999] leading-snug mt-0.5">
                      Generational North Indian &amp; Gujarati craftsmanship
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF4E8] dark:bg-[#1E1913] border border-[#E8DEC9] dark:border-[#2E2419] flex items-center justify-center shrink-0 text-[#9B7B34] dark:text-[#D4AF37] mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-playfair font-bold text-sm text-[#1A1A1A] dark:text-[#F5F1EB]">
                      Heart of Leicester
                    </h4>
                    <p className="text-[11.5px] text-[#666] dark:text-[#999] leading-snug mt-0.5">
                      Conveniently situated on Catherine Street
                    </p>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 mt-8">
                <Link
                  href="/menu"
                  className="shimmer-hover inline-flex items-center gap-2 px-6 py-3.5 bg-[#7D6328] hover:bg-[#6B531F] dark:bg-[#8C6E2E] dark:hover:bg-[#A38137] text-white text-xs sm:text-[13px] font-bold uppercase tracking-wider rounded-xl shadow-md hover:shadow-xl transition-all duration-200"
                >
                  <span>EXPLORE OUR ROYAL MENU</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="tel:+01165070296"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white dark:bg-[#1A1611] text-[#1A1A1A] dark:text-[#F5F1EB] border border-[#E0D8CA] dark:border-[#2C261D] hover:border-[#9B7B34] text-xs sm:text-[13px] font-bold uppercase tracking-wider rounded-xl shadow-sm transition-all duration-200"
                >
                  <Phone className="w-4 h-4 text-[#9B7B34] dark:text-[#D4AF37]" />
                  <span>+0116 507 0296</span>
                </a>
              </div>
            </div>

            {/* Right Column: Triple Authentic Image Mosaic */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-5">
              {/* Image 1: Restaurant Exterior Facade (Spans 2 cols) */}
              <div className="col-span-2 group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E6E0D4] dark:border-[#2C261D] shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] h-[240px] sm:h-[300px]">
                <Image
                  src="/images/about/about-grand-maharaja-exterior-facade.png"
                  alt="The Grand Maharaja Fine Indian Restaurant Exterior in Leicester"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 650px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#F3E5AB] block">
                    GRAND SANCTUARY
                  </span>
                  <h4 className="font-playfair text-base sm:text-lg font-bold">
                    Catherine Street Entrance &amp; Exterior
                  </h4>
                </div>
              </div>

              {/* Image 2: Luxurious Golden Backlit Bar */}
              <div className="group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E6E0D4] dark:border-[#2C261D] shadow-md h-[180px] sm:h-[220px]">
                <Image
                  src="/images/about/about-royal-golden-backlit-bar.png"
                  alt="Luxurious Golden Backlit Bar Display at The Grand Maharaja"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 50vw, 320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 text-white">
                  <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#F3E5AB] block">
                    BAR &amp; LOUNGE
                  </span>
                  <h5 className="font-playfair text-xs sm:text-sm font-bold">
                    Golden Backlit Bar
                  </h5>
                </div>
              </div>

              {/* Image 3: Elegant Teal & Gold Dining Hall */}
              <div className="group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E6E0D4] dark:border-[#2C261D] shadow-md h-[180px] sm:h-[220px]">
                <Image
                  src="/images/banquet/banquet-teal-and-gold-dining-hall.png"
                  alt="Elegant Teal and Gold Restaurant Dining Interior"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 50vw, 320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 text-white">
                  <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#F3E5AB] block">
                    REGAL AMBIANCE
                  </span>
                  <h5 className="font-playfair text-xs sm:text-sm font-bold">
                    Teal &amp; Gold Dining Hall
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: HONOURING ANCIENT RECIPES & SACRED SPICES (Pillar 1)
          Background: #F5F1EB/60 (Light) | #14120E (Dark)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full bg-[#F5F1EB]/60 dark:bg-[#14120E] py-16 sm:py-20 lg:py-24 overflow-hidden transition-colors duration-200 border-y border-[#EAE3D6] dark:border-[#262017]">
        <RoyalBackgroundGlow variant="warm" particleCount={34} showMandala={true} mandalaPosition="right" />

        <div
          className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10"
          style={{ maxWidth: "1400px" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Authentic Sacred Spices Photo */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="group relative rounded-3xl overflow-hidden border border-[#E6E0D4] dark:border-[#2C261D] shadow-[0_12px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.5)] h-[360px] sm:h-[440px]">
                <Image
                  src="/images/about/about-sacred-indian-spices.jpg"
                  alt="Royal Spiced Delicacies and Sacred Spices at The Grand Maharaja"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 650px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/90 dark:bg-[#181511]/90 backdrop-blur-md border border-[#EAE3D6] dark:border-[#2E281F]">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9B7B34] dark:text-[#D4AF37] block">
                    AUTHENTIC STONE-GROUND MASALAS
                  </span>
                  <p className="text-xs sm:text-[13px] font-semibold text-[#1A1A1A] dark:text-[#F5F1EB] mt-0.5">
                    Roasted gently &amp; stone-ground in-house daily for imperial fragrance
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Exact Copy from live site */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#9B7B34] dark:text-[#D4AF37] block font-sans">
                TIME-HONOURED RECIPES
              </span>
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1A1A1A] dark:text-[#F5F1EB] tracking-tight mt-2 leading-tight">
                Honouring Ancient Recipes &amp; Sacred Spices
              </h2>

              <div className="space-y-4 mt-6 font-sans text-xs sm:text-sm text-[#555555] dark:text-[#A8A194] leading-relaxed">
                <p>
                  Vegetarian dining at The Grand Maharaja is an art form. Our master chefs prepare
                  each sauce, slow-simmered daal, and aromatic curry from scratch daily, honoring
                  royal culinary traditions passed down through generations of culinary masters.
                </p>
                <p>
                  From the velvety richness of Shahi Paneer and rich Kaju curries to regional
                  North Indian delicacies, sizzling tandoor naans, and vibrant street chaats, our
                  kitchen celebrates the richness of Indian regional cooking with modern luxury
                  refinement.
                </p>
              </div>

              {/* Exact Bullet Highlights from live site */}
              <div className="space-y-4 mt-8">
                <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#1A1611] border border-[#E8E2D5] dark:border-[#2A241C] shadow-xs">
                  <h4 className="font-playfair font-bold text-sm sm:text-base text-[#1A1A1A] dark:text-[#F5F1EB] flex items-center gap-2">
                    <span className="text-[#9B7B34] dark:text-[#D4AF37]">✦</span>
                    Pure Ingredients &amp; In-House Whole Spices
                  </h4>
                  <p className="font-sans text-xs sm:text-[13px] text-[#666] dark:text-[#A8A194] leading-relaxed mt-1.5 pl-5">
                    We source whole spices, roast them gently, and stone-grind them in-house daily
                    for unmatched aroma and royal depth.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#1A1611] border border-[#E8E2D5] dark:border-[#2A241C] shadow-xs">
                  <h4 className="font-playfair font-bold text-sm sm:text-base text-[#1A1A1A] dark:text-[#F5F1EB] flex items-center gap-2">
                    <span className="text-[#9B7B34] dark:text-[#D4AF37]">✦</span>
                    Freshly Baked Artisanal Tandoor Naans &amp; Rotis
                  </h4>
                  <p className="font-sans text-xs sm:text-[13px] text-[#666] dark:text-[#A8A194] leading-relaxed mt-1.5 pl-5">
                    Hand-stretched dough baked to perfection in blazing clay ovens, brushed with
                    aromatic desi ghee.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: DEDICATED JAIN & SWAMINARAYAN SANCTUM (Pillar 2)
          Background: #FFFFFF (Light) | #0D0C0A (Dark)
      ───────────────────────────────────────────────────────────── */}
      <section id="sanctum" className="relative w-full bg-white dark:bg-[#0D0C0A] py-16 sm:py-20 lg:py-24 overflow-hidden transition-colors duration-200 scroll-mt-24">
        <RoyalBackgroundGlow variant="section" particleCount={30} showMandala={true} mandalaPosition="left" />

        <div
          className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10"
          style={{ maxWidth: "1400px" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Exact Copy from live site */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECFDF5] dark:bg-[#064E3B]/30 border border-[#A7F3D0] dark:border-[#059669]/40 mb-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
                </span>
                <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#065F46] dark:text-[#34D399]">
                  SPIRITUAL &amp; DIETARY CARE
                </span>
              </div>

              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1A1A1A] dark:text-[#F5F1EB] tracking-tight leading-tight">
                Dedicated Jain &amp; Swaminarayan Sanctum
              </h2>

              <div className="space-y-4 mt-6 font-sans text-xs sm:text-sm text-[#555555] dark:text-[#A8A194] leading-relaxed">
                <p>
                  We understand the sacred sanctity of pure dietary discipline. For our Jain and
                  Swaminarayan guests, we provide an extensive dedicated menu prepared without onions
                  and garlic, utilizing fresh, raw vegetables—including fresh potatoes—cooked to order
                  honoring spiritual principles with culinary excellence.
                </p>
                <p>
                  Our kitchen observes meticulous separation, ensuring that your meals are cooked
                  with dedicated cookware and utensils, giving our guests complete trust and
                  reassurance.
                </p>
              </div>

              {/* Exact Bullet Highlights from live site */}
              <div className="space-y-4 mt-8">
                <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] dark:bg-[#161310] border border-[#E8E2D5] dark:border-[#2A241C] shadow-xs">
                  <h4 className="font-playfair font-bold text-sm sm:text-base text-[#1A1A1A] dark:text-[#F5F1EB] flex items-center gap-2">
                    <span className="text-[#059669] dark:text-[#34D399]">✦</span>
                    No Onion &amp; No Garlic (Fresh Raw Veg &amp; Potatoes)
                  </h4>
                  <p className="font-sans text-xs sm:text-[13px] text-[#666] dark:text-[#A8A194] leading-relaxed mt-1.5 pl-5">
                    Prepared with zero onion and zero garlic using fresh raw garden vegetables and
                    potatoes in dedicated cookware, celebrated for authentic sattvic taste.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] dark:bg-[#161310] border border-[#E8E2D5] dark:border-[#2A241C] shadow-xs">
                  <h4 className="font-playfair font-bold text-sm sm:text-base text-[#1A1A1A] dark:text-[#F5F1EB] flex items-center gap-2">
                    <span className="text-[#059669] dark:text-[#34D399]">✦</span>
                    Dedicated Cookware &amp; Separate Prep Stations
                  </h4>
                  <p className="font-sans text-xs sm:text-[13px] text-[#666] dark:text-[#A8A194] leading-relaxed mt-1.5 pl-5">
                    Zero cross-contamination protocols giving your family absolute dining peace of
                    mind.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Authentic Jain Sanctum Image */}
            <div className="lg:col-span-6">
              <div className="group relative rounded-3xl overflow-hidden border border-[#E6E0D4] dark:border-[#2C261D] shadow-[0_12px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.5)] h-[360px] sm:h-[440px]">
                <Image
                  src="/images/about/about-jain-culinary-sanctum.jpg"
                  alt="Specialized Jain and Swaminarayan Kitchen Sanctum at The Grand Maharaja"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 650px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/90 dark:bg-[#181511]/90 backdrop-blur-md border border-[#EAE3D6] dark:border-[#2E281F]">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#059669] dark:text-[#34D399] block">
                    SANCTITY GUARANTEED
                  </span>
                  <p className="text-xs sm:text-[13px] font-semibold text-[#1A1A1A] dark:text-[#F5F1EB] mt-0.5">
                    100% Dedicated utensils, separate tawas &amp; sacred Sattvic ingredients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: GRAND CELEBRATIONS FIT FOR ROYALTY (Pillar 3)
          Background: #F5F1EB/60 (Light) | #14120E (Dark)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full bg-[#F5F1EB]/60 dark:bg-[#14120E] py-16 sm:py-20 lg:py-24 overflow-hidden transition-colors duration-200 border-y border-[#EAE3D6] dark:border-[#262017]">
        <RoyalBackgroundGlow variant="warm" particleCount={32} showMandala={true} mandalaPosition="right" />

        <div
          className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10"
          style={{ maxWidth: "1400px" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Authentic Banquet Hall Photo */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="group relative rounded-3xl overflow-hidden border border-[#E6E0D4] dark:border-[#2C261D] shadow-[0_12px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.5)] h-[360px] sm:h-[440px]">
                <Image
                  src="/images/gallery/gallery-dining-hall-742.jpg"
                  alt="Grand Celebrations and Banqueting Hall Setup at The Grand Maharaja"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 650px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/90 dark:bg-[#181511]/90 backdrop-blur-md border border-[#EAE3D6] dark:border-[#2E281F]">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9B7B34] dark:text-[#D4AF37] block">
                    APPROX 80 ROYAL GUESTS
                  </span>
                  <p className="text-xs sm:text-[13px] font-semibold text-[#1A1A1A] dark:text-[#F5F1EB] mt-0.5">
                    Weddings, receptions, milestone anniversaries &amp; corporate celebrations
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Exact Copy from live site */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#9B7B34] dark:text-[#D4AF37] block font-sans">
                LEICESTER’S PREMIER BANQUET SUITE
              </span>
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1A1A1A] dark:text-[#F5F1EB] tracking-tight mt-2 leading-tight">
                Grand Celebrations Fit for Royalty
              </h2>

              <div className="space-y-4 mt-6 font-sans text-xs sm:text-sm text-[#555555] dark:text-[#A8A194] leading-relaxed">
                <p>
                  Whether you are hosting an unforgettable wedding reception, a milestone
                  anniversary, a birthday gala, or a corporate dining event, our private banqueting
                  hall offers an opulent setting bathed in regal elegance.
                </p>
                <p>
                  Accommodating approximately 80 seated guests with bespoke table layouts, attentive silver service,
                  and fully personalized multi-course banqueting menus (plus bespoke outdoor catering across the UK),
                  our events team ensures every detail reflects your unique celebration.
                </p>
              </div>

              {/* Exact Bullet Highlights from live site */}
              <div className="space-y-4 mt-8">
                <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#1A1611] border border-[#E8E2D5] dark:border-[#2A241C] shadow-xs">
                  <h4 className="font-playfair font-bold text-sm sm:text-base text-[#1A1A1A] dark:text-[#F5F1EB] flex items-center gap-2">
                    <span className="text-[#9B7B34] dark:text-[#D4AF37]">✦</span>
                    Bespoke Multi-Course Banqueting Menus
                  </h4>
                  <p className="font-sans text-xs sm:text-[13px] text-[#666] dark:text-[#A8A194] leading-relaxed mt-1.5 pl-5">
                    Curated starters, live street chaat counters, imperial mains, and traditional
                    warm desserts tailored to your palate.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#1A1611] border border-[#E8E2D5] dark:border-[#2A241C] shadow-xs">
                  <h4 className="font-playfair font-bold text-sm sm:text-base text-[#1A1A1A] dark:text-[#F5F1EB] flex items-center gap-2">
                    <span className="text-[#9B7B34] dark:text-[#D4AF37]">✦</span>
                    Outdoor Event Catering Across the UK
                  </h4>
                  <p className="font-sans text-xs sm:text-[13px] text-[#666] dark:text-[#A8A194] leading-relaxed mt-1.5 pl-5">
                    Bringing our full culinary team and signature dishes directly to your chosen
                    venue with seamless execution.
                  </p>
                </div>
              </div>

              {/* Inquiry Link */}
              <div className="mt-8">
                <Link
                  href="/#banquets"
                  className="shimmer-hover inline-flex items-center gap-2 px-6 py-3.5 bg-[#1A1A1A] hover:bg-[#2C2C2C] dark:bg-[#8C6E2E] dark:hover:bg-[#A38137] text-white text-xs sm:text-[13px] font-bold uppercase tracking-wider rounded-xl shadow-md hover:shadow-xl transition-all duration-200"
                >
                  <Calendar className="w-4 h-4 text-[#C5A880] dark:text-white" />
                  <span>INQUIRE ABOUT BANQUET DATES</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: ROYAL MASTERPIECES (Kitchen & Heritage Showcase)
          Background: #FFFFFF (Light) | #0D0C0A (Dark)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full bg-white dark:bg-[#0D0C0A] py-16 sm:py-20 lg:py-24 overflow-hidden transition-colors duration-200">
        <RoyalBackgroundGlow variant="section" particleCount={30} showMandala={true} mandalaPosition="left" />

        <div
          className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10"
          style={{ maxWidth: "1400px" }}
        >
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#9B7B34] dark:text-[#D4AF37] block font-sans">
              ROYAL MASTERPIECES
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1A1A1A] dark:text-[#F5F1EB] tracking-tight mt-1.5">
              A Glimpse into Our Kitchen &amp; Heritage
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#666666] dark:text-[#A8A194] leading-relaxed mt-3">
              Every creation honors generational artistry, traditional clay tandoors, and pure vegetarian grandeur.
            </p>
          </div>

          {/* 3 Masterpiece Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {KITCHEN_MASTERPIECES.map((item, idx) => (
              <div
                key={idx}
                className="card-hover-elevate group bg-[#FAF8F5] dark:bg-[#161310] rounded-3xl overflow-hidden border border-[#E8E1D0] dark:border-[#28221A] border-t-[3px] border-t-[#9B7B34] dark:border-t-[#D4AF37] shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  {/* Photo Frame */}
                  <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-[#1A1A1A]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 420px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-white/90 dark:bg-[#181511]/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-[#9B7B34] dark:text-[#D4AF37] border border-[#EAE3D6] dark:border-[#2C261D]">
                      {item.tag}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8C6E2E] dark:text-[#D4AF37] block font-sans">
                      {item.category}
                    </span>
                    <h3 className="font-playfair text-xl font-bold text-[#1A1A1A] dark:text-[#F5F1EB] mt-1.5 group-hover:text-[#9B7B34] dark:group-hover:text-[#D4AF37] transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-[13px] text-[#666] dark:text-[#A8A194] leading-relaxed mt-2.5">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <Link
                    href="/menu"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#7D6328] dark:text-[#D4AF37] group-hover:gap-2.5 transition-all duration-200"
                  >
                    <span>View In Menu</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 7: GRAND CALL TO ACTION (Reservation & Celebration)
          Background: #F5F1EB/60 (Light) | #14120E (Dark)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full bg-[#F5F1EB]/60 dark:bg-[#14120E] py-16 sm:py-20 overflow-hidden transition-colors duration-200 border-t border-[#EAE3D6] dark:border-[#262017]">
        <RoyalBackgroundGlow variant="warm" particleCount={28} showMandala={true} mandalaPosition="right" />

        <div
          className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 text-center"
          style={{ maxWidth: "1400px" }}
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8C6E2E] dark:text-[#D4AF37] block">
            EXPERIENCE THE GRAND MAHARAJA
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] dark:text-[#F5F1EB] mt-2">
            A Royal Feast Awaits You in Leicester
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#666] dark:text-[#A0988A] max-w-xl mx-auto mt-3 leading-relaxed">
            Reserve your royal table today or contact our banqueting team for private celebrations,
            weddings, and pure vegetarian catering.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+01165070296"
              className="shimmer-hover inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#7D6328] hover:bg-[#6B531F] dark:bg-[#8C6E2E] dark:hover:bg-[#A38137] text-white text-xs sm:text-[13px] font-bold uppercase tracking-wider rounded-xl shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              <span>CALL +0116 507 0296</span>
            </a>

            <Link
              href="/#banquets"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white dark:bg-[#1E1A14] text-[#1A1A1A] dark:text-[#F5F1EB] border border-[#E0D8CA] dark:border-[#2C261D] hover:border-[#7D6328] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 text-xs sm:text-[13px] font-bold uppercase tracking-wider rounded-xl shadow-sm transition-all duration-200"
            >
              <Calendar className="w-4 h-4 text-[#7D6328] dark:text-[#D4AF37]" />
              <span>PLAN A BANQUET EVENT</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
