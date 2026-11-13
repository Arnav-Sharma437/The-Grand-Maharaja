import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { RoyalBackgroundGlow } from "@/components/ui/RoyalBackgroundGlow";
import { BanquetingForm } from "@/components/banqueting/BanquetingForm";
import { SITE_CONFIG } from "@/lib/constants";
import {
  Sparkles,
  Users,
  ShieldCheck,
  MapPin,
  Phone,
  Clock,
  ArrowRight,
  Flame,
  Award,
  HeartHandshake,
  CheckCircle2,
  Calendar,
  Utensils,
  Car,
  ChevronRight,
  Home,
  Music,
  Download,
  Wine,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Royal Banqueting Hall Hire & Outdoor Catering UK | The Grand Maharaja",
  description:
    "Host celebrations and private banquets at The Grand Maharaja in Leicester. Luxury 80-guest banquet hall hire and nationwide pure vegetarian outdoor catering across the UK.",
  pathname: "/banqueting",
});

const BANQUET_HIGHLIGHTS = [
  {
    icon: Users,
    number: "80 Approx",
    title: "Suite Seated Capacity",
    description: "Opulent Leicester private suite configured for celebrations & intimate milestone gatherings.",
  },
  {
    icon: ShieldCheck,
    number: "100%",
    title: "Pure Vegetarian & Jain",
    description: "No onion & garlic dishes prepared with fresh raw vegetables & potatoes in dedicated cookware.",
  },
  {
    icon: MapPin,
    number: "UK-Wide",
    title: "Bespoke Outdoor Catering",
    description: "Delivering live cooking stations & silver-service across London, Midlands & the UK.",
  },
  {
    icon: Award,
    number: "Bespoke",
    title: "Silver-Service Hospitality",
    description: "Dedicated events director, custom mood lighting, and full staging decor.",
  },
];

const HALL_AMENITIES = [
  {
    icon: Sparkles,
    title: "Crystal Chandeliers & Mood Lighting",
    description: "Warm amber LED architectural lighting with customizable color palettes for your theme.",
  },
  {
    icon: Music,
    title: "Integrated AV & Wireless Audio",
    description: "High-fidelity surround sound system, wireless microphones, and HD presentation setup.",
  },
  {
    icon: Users,
    title: "Private VIP & Bridal Suite",
    description: "Dedicated dressing sanctuary with private entrance and personal vanity amenities.",
  },
  {
    icon: Car,
    title: "Complimentary On-Site Parking",
    description: "Dedicated parking directly adjoining our venue on Catherine Street Leicester.",
  },
  {
    icon: Utensils,
    title: "Flexible Banquet Seating Layouts",
    description: "Round banquet tables with gold chiavari chairs, ceremonial mandap, or cocktail layouts.",
  },
  {
    icon: Clock,
    title: "Climate-Controlled Air Conditioning",
    description: "Full temperature control ensuring guest comfort across all seasons and celebrations.",
  },
];

const PACKAGES = [
  {
    name: "Silver Royale Banquet",
    badge: "Intimate Occasions",
    description:
      "A refined banquet spread designed for family anniversaries, milestone birthdays, and religious satsangs.",
    features: [
      "Welcome royal fruit mocktails on guest arrival",
      "2 Gourmet handcrafted vegetarian appetizers",
      "2 Imperial main curries (Paneer & seasonal vegetable)",
      "Slow-simmered Gujarati daal or Punjabi dal makhani",
      "Fragrant basmati jeera pulao with crisp papadums",
      "Fresh tandoori naans & hot rotlis baked to order",
      "1 Artisanal dessert (Warm gulab jamun or kulfi)",
      "Standard banquet linen, cutlery, and glassware setup",
    ],
    highlight: false,
  },
  {
    name: "Gold Imperial Banquet",
    badge: "MOST POPULAR FOR WEDDINGS",
    description:
      "Our signature celebration package featuring live cooking stations, multi-course feast, and ambient venue styling.",
    features: [
      "Champagne flute botanical mocktails with dry-ice mist",
      "4 Gourmet appetizers including clay-oven skewers & street chaat",
      "3 Imperial main curries (Shahi paneer, kofta special, dal tadka)",
      "Zafrani dum biryani served with chilled spiced boondi raita",
      "Assorted artisanal hearth breads (Garlic coriander naan, laccha paratha)",
      "2 Royal confections (Slow-simmered saffron jamun & pistachio kulfi)",
      "Dedicated banqueting supervisor & professional silver-service waitstaff",
      "Ambient architectural LED hall lighting & stage coordination",
    ],
    highlight: true,
  },
  {
    name: "Maharaja Platinum Grand Feast",
    badge: "The Ultimate Royal Celebration",
    description:
      "The pinnacle of Indian culinary banqueting with live interactive cooking stations, premium decor, and VIP silver service.",
    features: [
      "Live welcome mocktail bar with exotic fruit infusions",
      "6 Gourmet appetizers with Live Clay Tandoor Hearth & Live Chaat Counter",
      "4 Imperial curries (Paneer lababdar, dum aloo, Rajasthani gatta, dal)",
      "Royal Kashmiri pulao & Hyderabadi vegetable dum biryani",
      "Full assortment of fresh hearth rotis, missi rotis, and kulchas",
      "3 Grand desserts (Gulab jamun, royal kulfi delight, rose falooda)",
      "Full bridal suite access & ceremonial stage coordination",
      "Personalized printed menu cards & dedicated VIP table service",
    ],
    highlight: false,
  },
];

const CELEBRATIONS = [
  {
    title: "Indian Weddings & Receptions",
    description: "Opulent settings with bespoke stage decor, mandap staging, and silver-service catering.",
    image: "/images/gallery/gallery-dining-hall-742.jpg",
  },
  {
    title: "Sanji, Mehndi & Sangeet Nights",
    description: "Vibrant celebratory evenings with spacious dance floor, live chaat counters, and mocktail bar.",
    image: "/images/gallery/gallery-interior-737.jpg",
  },
  {
    title: "Milestone Birthdays & Anniversaries",
    description: "Intimate family banqueting or private celebratory galas tailored with personalized menus.",
    image: "/images/gallery/gallery-interior-738.jpg",
  },
  {
    title: "Baby Showers & Srimant Ceremonies",
    description: "Traditional rituals accompanied by sacred pure vegetarian and Jain auspicious feasts.",
    image: "/images/gallery/gallery-decor-741.png",
  },
  {
    title: "Nationwide UK Outdoor Catering",
    description: "Live clay tandoors, dedicated sanctum kitchens, and chaat stations delivered to your venue across the UK.",
    image: "/images/banquet/catering_feast.jpg",
  },
  {
    title: "Corporate Galas & Award Dinners",
    description: "Executive presentation AV, professional staging, and silver-service dining for corporate clients.",
    image: "/images/about/about-royal-golden-backlit-bar.png",
  },
];

const FAQS = [
  {
    question: "What is the guest capacity of The Grand Maharaja Banquet Hall?",
    answer:
      "Our private banquet suite comfortably accommodates approximately 80 seated dining guests with round banquet tables, ceremonial staging, and ambient mood lighting. For outdoor catering across the UK, we can cater for bespoke gatherings of all sizes at your private venue.",
  },
  {
    question: "Do you guarantee 100% strict Jain & Swaminarayan food?",
    answer:
      "Yes, absolutely. We prepare our dedicated No Onion & No Garlic dishes using fresh, raw vegetables, including fresh potatoes, with dedicated cookware and separate utensils to honor complete dietary purity for Jain and Swaminarayan guests.",
  },
  {
    question: "Can we bring our own external decorators, DJ, or live musicians?",
    answer:
      "Yes. While we provide in-house mood lighting, audio setup, and decor coordination, you are welcome to collaborate with external wedding planners, mandap decorators, DJs, and live musicians. We provide seamless access for vendor setup.",
  },
  {
    question: "How far across the UK do you travel for outdoor catering?",
    answer:
      "Our mobile catering fleet travels nationwide across England, Wales, and Scotland — regularly catering in London, Birmingham, Manchester, Leeds, Leicester, and countryside estates.",
  },
];

export default function BanquetingPage() {
  return (
    <main className="min-h-screen flex flex-col w-full bg-white dark:bg-[#0D0C0A] transition-colors duration-200">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: GRAND CINEMATIC HERO BANNER
      ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] flex items-center justify-center py-16 sm:py-20 lg:py-24 overflow-hidden border-b-2 border-[#D4AF37]/40 shadow-[0_4px_30px_rgba(212,175,55,0.15)]">
        {/* Authentic Background Photo */}
        <Image
          src="/images/gallery/gallery-dining-hall-742.jpg"
          alt="The Grand Maharaja Royal Banqueting Suite Leicester"
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
            <span className="text-[#F5F1EB] font-semibold">Banqueting &amp; Catering</span>
          </nav>

          {/* Regal Subtitle Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1610]/80 border border-[#D4AF37]/50 text-[#D4AF37] text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] mb-4 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
            <span>IMPERIAL CELEBRATIONS &amp; CATERING</span>
          </div>

          {/* Main Hero Heading */}
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F1EB] tracking-tight leading-[1.15] max-w-4xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Regal Banqueting Suite &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] italic font-normal">
              Outdoor Catering UK
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
            An intimate 80-guest luxury banquet suite in Leicester honoring sacred vegetarian
            culinary traditions, paired with bespoke outdoor catering delivered anywhere across the
            United Kingdom.
          </p>

          {/* Quick Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-7">
            <a
              href="#banquet-inquiry"
              className="shimmer-hover inline-flex items-center gap-2 bg-gradient-to-r from-[#8C6E2E] via-[#A38137] to-[#8C6E2E] text-white px-6 sm:px-8 py-3.5 rounded-full font-bold text-xs sm:text-[13px] tracking-[0.16em] uppercase shadow-[0_4px_20px_rgba(140,110,46,0.5)] hover:shadow-[0_6px_25px_rgba(212,175,55,0.7)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>Reserve Banquet Date</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#packages"
              className="inline-flex items-center gap-2 bg-[#1A1610]/90 hover:bg-[#252018] text-[#F5F1EB] border border-[#D4AF37]/50 hover:border-[#D4AF37] px-6 sm:px-8 py-3.5 rounded-full font-bold text-xs sm:text-[13px] tracking-[0.16em] uppercase backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-md"
            >
              <Utensils className="w-4 h-4 text-[#D4AF37]" />
              <span>Explore Packages</span>
            </a>

            <a
              href="tel:+441165070296"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-[#F5F1EB] border border-white/20 px-6 sm:px-8 py-3.5 rounded-full font-bold text-xs sm:text-[13px] tracking-[0.16em] uppercase backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>0116 507 0296</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: 4 KEY PILLARS (Alternating Warm Ivory #F5F1EB/60)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full py-12 sm:py-16 bg-[#F5F1EB]/60 dark:bg-[#14120E] border-b border-[#E8E2D5] dark:border-[#241F18] transition-colors duration-200">
        <RoyalBackgroundGlow variant="minimal" particleCount={12} showMandala={false} />

        <div
          className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10"
          style={{ maxWidth: "1400px" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BANQUET_HIGHLIGHTS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="card-hover-elevate bg-white dark:bg-[#181511] rounded-2xl p-6 border border-[#EBE6DC] dark:border-[#2C261D] shadow-[0_4px_20px_rgba(0,0,0,0.02)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all"
                >
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-[#FAF6EE] dark:bg-[#221C14] border border-[#E8E1D0] dark:border-[#382F22] flex items-center justify-center text-[#8C6E2E] dark:text-[#D4AF37] shrink-0 shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-playfair text-xl sm:text-2xl font-bold text-[#8C6E2E] dark:text-[#D4AF37] block leading-tight">
                        {item.number}
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#1A1A1A] dark:text-[#F5F1EB] block">
                        {item.title}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-[#666666] dark:text-[#A0988A] font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: THE LEICESTER BANQUETING SUITE (White Background)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-white dark:bg-[#0D0C0A] transition-colors duration-200">
        <RoyalBackgroundGlow variant="section" particleCount={16} showMandala={false} />

        <div
          className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10"
          style={{ maxWidth: "1400px" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Suite Description & 6 Amenities */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#8C6E2E] dark:text-[#D4AF37] font-sans mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>PRESTIGIOUS VENUE IN LEICESTER</span>
                </div>
                <h2 className="font-playfair text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1A1A1A] dark:text-[#F5F1EB] tracking-tight leading-[1.2]">
                  The Grand Maharaja{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8C6E2E] via-[#B89647] to-[#8C6E2E] dark:from-[#D4AF37] dark:via-[#F3E5AB] dark:to-[#D4AF37] italic font-normal">
                    Banquet Suite
                  </span>
                </h2>
                <p className="font-sans text-xs sm:text-sm text-[#555555] dark:text-[#A0988A] leading-relaxed mt-4">
                  Nestled within our flagship sanctuary on Catherine Street, Leicester, our luxury
                  banquet suite offers an unforgettable setting for approximately 80 seated dining guests. Crafted
                  with shimmering gold trim, crystal chandeliers, and complete privacy, it is the
                  preferred hall for celebrations, pre-wedding sangeets, and milestone
                  anniversaries (with bespoke outdoor catering available across the UK).
                </p>
              </div>

              {/* 6 Luxury Amenities Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {HALL_AMENITIES.map((amenity, idx) => {
                  const Icon = amenity.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#FAF8F5] dark:bg-[#14120E] border border-[#EAE4D8] dark:border-[#241F18]"
                    >
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <Icon className="w-4 h-4 text-[#8C6E2E] dark:text-[#D4AF37]" />
                        <h4 className="font-playfair text-xs sm:text-[13px] font-bold text-[#1A1A1A] dark:text-[#F5F1EB]">
                          {amenity.title}
                        </h4>
                      </div>
                      <p className="text-[11px] text-[#666666] dark:text-[#A0988A] font-sans leading-relaxed">
                        {amenity.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Action Link */}
              <div className="pt-2">
                <a
                  href="#banquet-inquiry"
                  className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-bold uppercase tracking-[0.16em] text-[#8C6E2E] dark:text-[#D4AF37] hover:translate-x-1 transition-all group"
                >
                  <span>Book Private Tour of Banquet Hall</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Column: 4 Authentic Photos Grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-lg">
                <Image
                  src="/images/gallery/gallery-dining-hall-742.jpg"
                  alt="Royal Dining Hall at The Grand Maharaja Leicester"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>

              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-lg">
                <Image
                  src="/images/gallery/gallery-interior-738.jpg"
                  alt="Luxury Banquet Seating at The Grand Maharaja"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>

              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-lg">
                <Image
                  src="/images/gallery/gallery-interior-737.jpg"
                  alt="Private Dining Suite at The Grand Maharaja"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>

              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-lg">
                <Image
                  src="/images/gallery/gallery-decor-741.png"
                  alt="Ceremonial Mandap & Stage Decor"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: NATIONWIDE OUTDOOR CATERING (#F5F1EB/60 Background)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#F5F1EB]/60 dark:bg-[#14120E] border-y border-[#E8E2D5] dark:border-[#241F18] transition-colors duration-200">
        <RoyalBackgroundGlow variant="section" particleCount={14} showMandala={false} />

        <div
          className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10"
          style={{ maxWidth: "1400px" }}
        >
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#8C6E2E] dark:text-[#D4AF37] font-sans mb-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>ACROSS THE UNITED KINGDOM</span>
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] dark:text-[#F5F1EB] tracking-tight">
              Nationwide Pure Vegetarian{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8C6E2E] via-[#B89647] to-[#8C6E2E] dark:from-[#D4AF37] dark:via-[#F3E5AB] dark:to-[#D4AF37] italic font-normal">
                Outdoor Catering
              </span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#666666] dark:text-[#A0988A] mt-3 leading-relaxed">
              Whether celebrating at a grand country manor in the Cotswolds, a luxury wedding venue in
              Central London, or a community hall in Birmingham, our mobile culinary armada delivers
              live clay ovens, chaat counters, and silver-service banquets.
            </p>
          </div>

          {/* 4 Live Interactive Stations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            <div className="card-hover-elevate bg-white dark:bg-[#181511] rounded-2xl p-6 border border-[#EBE6DC] dark:border-[#2C261D] shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#FAF6EE] dark:bg-[#221C14] border border-[#E8E1D0] dark:border-[#382F22] flex items-center justify-center text-[#8C6E2E] dark:text-[#D4AF37] mb-4">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="font-playfair text-base sm:text-lg font-bold text-[#1A1A1A] dark:text-[#F5F1EB] mb-2">
                Live Traditional Clay Hearth
              </h3>
              <p className="text-xs text-[#666] dark:text-[#A0988A] font-sans leading-relaxed">
                Paneer shashlik skewers, authentic tandoori delights, and freshly baked garlic naans served
                piping hot from live clay tandoors on-site.
              </p>
            </div>

            <div className="card-hover-elevate bg-white dark:bg-[#181511] rounded-2xl p-6 border border-[#EBE6DC] dark:border-[#2C261D] shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#FAF6EE] dark:bg-[#221C14] border border-[#E8E1D0] dark:border-[#382F22] flex items-center justify-center text-[#8C6E2E] dark:text-[#D4AF37] mb-4">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="font-playfair text-base sm:text-lg font-bold text-[#1A1A1A] dark:text-[#F5F1EB] mb-2">
                Live Street Chaat Bar
              </h3>
              <p className="text-xs text-[#666] dark:text-[#A0988A] font-sans leading-relaxed">
                Crisp handcrafted pani puris with chilled mint-coriander water, sev batata puri, and
                sizzling aloo tikki prepared fresh before your guests.
              </p>
            </div>

            <div className="card-hover-elevate bg-white dark:bg-[#181511] rounded-2xl p-6 border border-[#EBE6DC] dark:border-[#2C261D] shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#FAF6EE] dark:bg-[#221C14] border border-[#E8E1D0] dark:border-[#382F22] flex items-center justify-center text-[#8C6E2E] dark:text-[#D4AF37] mb-4">
                <Wine className="w-6 h-6" />
              </div>
              <h3 className="font-playfair text-base sm:text-lg font-bold text-[#1A1A1A] dark:text-[#F5F1EB] mb-2">
                Live Mocktail &amp; Dosa Station
              </h3>
              <p className="text-xs text-[#666] dark:text-[#A0988A] font-sans leading-relaxed">
                Golden Mysore masala dosas alongside theatrical botanical mocktails infused with dry-ice
                mist and fresh pomegranate.
              </p>
            </div>

            <div className="card-hover-elevate bg-white dark:bg-[#181511] rounded-2xl p-6 border border-[#EBE6DC] dark:border-[#2C261D] shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#FAF6EE] dark:bg-[#221C14] border border-[#E8E1D0] dark:border-[#382F22] flex items-center justify-center text-[#8C6E2E] dark:text-[#D4AF37] mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-playfair text-base sm:text-lg font-bold text-[#1A1A1A] dark:text-[#F5F1EB] mb-2">
                Live Royal Dessert Station
              </h3>
              <p className="text-xs text-[#666] dark:text-[#A0988A] font-sans leading-relaxed">
                Slow-fried saffron jalebis served with creamy rabdi, artisanal pistachio kulfi pots, and
                sizzling brownies with saffron drizzle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: 3 IMPERIAL BANQUETING PACKAGES (#packages)
      ───────────────────────────────────────────────────────────── */}
      <section
        id="packages"
        className="relative w-full py-16 sm:py-20 lg:py-24 bg-white dark:bg-[#0D0C0A] transition-colors duration-200"
      >
        <RoyalBackgroundGlow variant="section" particleCount={16} showMandala={false} />

        <div
          className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10"
          style={{ maxWidth: "1400px" }}
        >
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#8C6E2E] dark:text-[#D4AF37] font-sans mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>TRANSPARENT ROYAL FEASTING</span>
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] dark:text-[#F5F1EB] tracking-tight">
              Banqueting Packages
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#666666] dark:text-[#A0988A] mt-2">
              Tailored multi-course culinary collections crafted for weddings, receptions, and intimate
              milestone celebrations.
            </p>
          </div>

          {/* 3 Tier Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            {PACKAGES.map((pkg, idx) => (
              <div
                key={idx}
                className={`relative rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
                  pkg.highlight
                    ? "bg-[#FAF8F5] dark:bg-[#181511] border-2 border-[#D4AF37] shadow-[0_8px_30px_rgba(212,175,55,0.25)] scale-[1.03] z-10"
                    : "bg-white dark:bg-[#14120E] border border-[#E8E2D5] dark:border-[#282218] shadow-sm hover:shadow-lg"
                }`}
              >
                <div>
                  {/* Badge */}
                  <span
                    className={`inline-block text-[10px] sm:text-[10.5px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-4 ${
                      pkg.highlight
                        ? "bg-[#8C6E2E] text-white dark:bg-[#D4AF37] dark:text-[#12100D]"
                        : "bg-[#F5F1EB] dark:bg-[#201C16] text-[#8C6E2E] dark:text-[#D4AF37]"
                    }`}
                  >
                    {pkg.badge}
                  </span>

                  <h3 className="font-playfair text-2xl font-bold text-[#1A1A1A] dark:text-[#F5F1EB] mb-2">
                    {pkg.name}
                  </h3>

                  <p className="text-xs text-[#666] dark:text-[#A0988A] font-sans leading-relaxed mb-6">
                    {pkg.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 pt-4 border-t border-[#EAE4D8] dark:border-[#282218]">
                    {pkg.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#333] dark:text-[#DDD]">
                        <CheckCircle2 className="w-4 h-4 text-[#8C6E2E] dark:text-[#D4AF37] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-8 mt-8 border-t border-[#EAE4D8] dark:border-[#282218]">
                  <a
                    href="#banquet-inquiry"
                    className={`w-full py-3.5 px-6 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                      pkg.highlight
                        ? "bg-[#8C6E2E] hover:bg-[#735A24] dark:bg-[#D4AF37] dark:hover:bg-[#B8962D] text-white dark:text-[#12100D] shadow-md hover:shadow-xl"
                        : "bg-[#1A1A1A] hover:bg-[#2A2A2A] dark:bg-[#221C14] dark:hover:bg-[#2C241A] text-white dark:text-[#D4AF37] border border-[#DDD4BF] dark:border-[#382F22]"
                    }`}
                  >
                    <span>Inquire About {pkg.name.split(" ")[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: TYPES OF CELEBRATIONS HOSTED (#F5F1EB/60)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full py-16 sm:py-20 bg-[#F5F1EB]/60 dark:bg-[#14120E] border-t border-[#E8E2D5] dark:border-[#241F18] transition-colors duration-200">
        <div
          className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10"
          style={{ maxWidth: "1400px" }}
        >
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#8C6E2E] dark:text-[#D4AF37] font-sans mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>TAILORED RECEPTIONS</span>
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#1A1A1A] dark:text-[#F5F1EB] tracking-tight">
              Celebrations We Orchestrate
            </h2>
          </div>

          {/* 6 Grid Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {CELEBRATIONS.map((cel, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden bg-white dark:bg-[#16130F] border border-[#E8E2D5] dark:border-[#282218] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <Image
                    src={cel.image}
                    alt={cel.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3 className="font-playfair text-lg font-bold">{cel.title}</h3>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-[#666] dark:text-[#A0988A] font-sans leading-relaxed">
                    {cel.description}
                  </p>
                  <a
                    href="#banquet-inquiry"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#8C6E2E] dark:text-[#D4AF37] mt-4 hover:translate-x-1 transition-all"
                  >
                    <span>Reserve Date</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 7: INTERACTIVE BANQUETING INQUIRY FORM
      ───────────────────────────────────────────────────────────── */}
      <section
        id="banquet-inquiry"
        className="relative w-full py-16 sm:py-20 lg:py-24 bg-white dark:bg-[#0D0C0A] transition-colors duration-200"
      >
        <RoyalBackgroundGlow variant="section" particleCount={16} showMandala={false} />

        <div
          className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10"
          style={{ maxWidth: "1400px" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Hospitality Pledge & Direct Download */}
            <div className="lg:col-span-5 space-y-7">
              <div>
                <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#8C6E2E] dark:text-[#D4AF37] font-sans mb-3">
                  <HeartHandshake className="w-3.5 h-3.5" />
                  <span>DEDICATED EVENTS DIRECTOR</span>
                </div>

                <h2 className="font-playfair text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1A1A1A] dark:text-[#F5F1EB] tracking-tight leading-[1.2]">
                  Your Celebration Deserves{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8C6E2E] via-[#B89647] to-[#8C6E2E] dark:from-[#D4AF37] dark:via-[#F3E5AB] dark:to-[#D4AF37] italic font-normal">
                    Flawless Royalty
                  </span>
                </h2>

                <p className="font-sans text-xs sm:text-sm text-[#555555] dark:text-[#A0988A] leading-relaxed mt-4">
                  From menu tastings and floor plan design to specialized Jain culinary sanctum
                  preparations, our senior banqueting team coordinates every aspect to perfection.
                </p>
              </div>

              {/* Direct Events Contacts */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-[#FAF8F5] dark:bg-[#14120E] border border-[#EAE4D8] dark:border-[#241F18]">
                  <div className="w-10 h-10 rounded-lg bg-[#E8E1D0] dark:bg-[#201C16] flex items-center justify-center text-[#8C6E2E] dark:text-[#D4AF37] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C6E2E] dark:text-[#D4AF37] block">
                      DIRECT EVENTS LINE
                    </span>
                    <a
                      href="tel:+441165070296"
                      className="font-playfair text-base font-bold text-[#1A1A1A] dark:text-[#F5F1EB] hover:text-[#8C6E2E] dark:hover:text-[#D4AF37]"
                    >
                      +0116 507 0296
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-[#FAF8F5] dark:bg-[#14120E] border border-[#EAE4D8] dark:border-[#241F18]">
                  <div className="w-10 h-10 rounded-lg bg-[#E8E1D0] dark:bg-[#201C16] flex items-center justify-center text-[#8C6E2E] dark:text-[#D4AF37] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C6E2E] dark:text-[#D4AF37] block">
                      VENUE LOCATION
                    </span>
                    <span className="font-sans text-xs sm:text-sm font-semibold text-[#1A1A1A] dark:text-[#F5F1EB]">
                      209 Catherine St, Leicester LE4 6GE
                    </span>
                  </div>
                </div>
              </div>

              {/* Download Brochure CTA Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#FAF6EE] to-[#F3ECE0] dark:from-[#1C1813] dark:to-[#14120E] border border-[#D4AF37]/40 shadow-sm">
                <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#8C6E2E] dark:text-[#D4AF37] block mb-1">
                  OFFICIAL EVENT COLLATERAL
                </span>
                <h4 className="font-playfair text-lg font-bold text-[#1A1A1A] dark:text-[#F5F1EB]">
                  Download Banqueting &amp; Menu Brochure
                </h4>
                <p className="text-xs text-[#666] dark:text-[#A0988A] font-sans mt-1">
                  View complete dish descriptions, banquet menus, and beverage listings.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <a
                    href="/images/menu/the-grand-maharaja-complete-menu-893.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#8C6E2E] dark:bg-[#D4AF37] text-white dark:text-[#12100D] px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:brightness-110 shadow-xs"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Complete Menu (PDF)</span>
                  </a>
                  <Link
                    href="/menu"
                    className="text-xs font-bold text-[#8C6E2E] dark:text-[#D4AF37] hover:underline"
                  >
                    View Online Menu &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Booking Form */}
            <div className="lg:col-span-7">
              <BanquetingForm />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 8: FREQUENTLY ASKED BANQUETING QUESTIONS
      ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full py-16 sm:py-20 bg-[#F5F1EB]/60 dark:bg-[#14120E] border-t border-[#E8E2D5] dark:border-[#241F18] transition-colors duration-200">
        <div
          className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10"
          style={{ maxWidth: "1400px" }}
        >
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#8C6E2E] dark:text-[#D4AF37] font-sans mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>BANQUETING QUESTIONS</span>
            </div>
            <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1A1A] dark:text-[#F5F1EB] tracking-tight">
              Banqueting &amp; Catering FAQs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="card-hover-elevate bg-white dark:bg-[#181511] border border-[#EAE4D8] dark:border-[#241F18] rounded-2xl p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#E8E1D0] dark:bg-[#201C16] flex items-center justify-center shrink-0 text-[#8C6E2E] dark:text-[#D4AF37] font-bold text-xs mt-0.5">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="font-playfair text-base sm:text-lg font-bold text-[#1A1A1A] dark:text-[#F5F1EB]">
                      {faq.question}
                    </h3>
                    <p className="font-sans text-xs sm:text-[13px] text-[#555555] dark:text-[#A0988A] leading-relaxed mt-2">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 9: BOTTOM FINAL CALL TO ACTION
      ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full py-16 sm:py-20 bg-white dark:bg-[#0D0C0A] border-t border-[#E8E2D5] dark:border-[#241F18] transition-colors duration-200">
        <div
          className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 text-center"
          style={{ maxWidth: "1400px" }}
        >
          <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#8C6E2E] dark:text-[#D4AF37] font-sans mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LET US SERVE YOUR GUESTS</span>
          </div>

          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] dark:text-[#F5F1EB] tracking-tight">
            Ready to Plan an Unforgettable Celebration?
          </h2>

          <p className="font-sans text-xs sm:text-sm text-[#555555] dark:text-[#A0988A] max-w-xl mx-auto leading-relaxed mt-4">
            Connect directly with our Events Director to book a venue walk-through or arrange an in-person
            tasting session.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href="#banquet-inquiry"
              className="shimmer-hover inline-flex items-center gap-2 bg-[#8C6E2E] dark:bg-[#D4AF37] hover:bg-[#735A24] dark:hover:bg-[#B8962D] text-white dark:text-[#12100D] px-7 py-3.5 rounded-full font-bold text-xs sm:text-[13px] tracking-[0.16em] uppercase shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              <span>Request Event Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="tel:+441165070296"
              className="inline-flex items-center gap-2 bg-white dark:bg-[#1A1612] text-[#1A1A1A] dark:text-[#F5F1EB] border border-[#DDD4BF] dark:border-[#382F22] px-7 py-3.5 rounded-full font-bold text-xs sm:text-[13px] tracking-[0.16em] uppercase hover:bg-[#FAF8F5] dark:hover:bg-[#241F18] transition-all shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#8C6E2E] dark:text-[#D4AF37]" />
              <span>Call 0116 507 0296</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}