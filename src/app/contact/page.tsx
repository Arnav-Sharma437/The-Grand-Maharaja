import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { RoyalBackgroundGlow } from "@/components/ui/RoyalBackgroundGlow";
import { ContactForm } from "@/components/contact/ContactForm";
import { SITE_CONFIG } from "@/lib/constants";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Users,
  Utensils,
  Car,
  CalendarCheck,
  ChevronRight,
  Home,
  MessageSquare,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Contact & Table Reservations | The Grand Maharaja Leicester",
  description:
    "Contact The Grand Maharaja in Leicester for table bookings, banquet hall hire (approx 80 guests), and pure vegetarian outdoor catering across the UK. Visit 209 Catherine St or call 0116 507 0296.",
  pathname: "/contact",
});

function FacebookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
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

const CONTACT_INFO_CARDS = [
  {
    icon: MapPin,
    category: "SANCTUARY LOCATION",
    title: "Visit Our Restaurant",
    detail: "209 Catherine St, Leicester LE4 6GE",
    note: "Free guest parking on-site • Minutes from Golden Mile",
    actionLabel: "View on Google Maps",
    actionHref: "https://maps.google.com/?q=The+Grand+Maharaja,+209+Catherine+St,+Leicester+LE4+6GE",
    isExternal: true,
  },
  {
    icon: Phone,
    category: "DIRECT LINE & EMAIL",
    title: "Call & Reservations",
    detail: "+0116 507 0296",
    subDetail: "info@thegrandmaharaja.co.uk",
    note: "Instant table bookings & party assistance",
    actionLabel: "Call Restaurant Directly",
    actionHref: "tel:+441165070296",
    isExternal: false,
  },
  {
    icon: Clock,
    category: "SERVICE SCHEDULE",
    title: "Opening Hours",
    detail: "12:00 PM – 10:00 PM",
    note: "Thursday – Tuesday (Wednesday Closed)",
    actionLabel: "Explore Food & Drink Menu",
    actionHref: "/menu",
    isExternal: false,
  },
];

const FAQS = [
  {
    question: "Do I need to book a table in advance?",
    answer:
      "While walk-in guests are always cordially welcomed, we strongly recommend advance booking for Friday, Saturday, and Sunday evenings to ensure prime seating for your party.",
  },
  {
    question: "Can you accommodate strict Jain and Swaminarayan diets?",
    answer:
      "Yes, absolutely. We prepare dedicated No Onion & No Garlic dishes using fresh, raw vegetables, including fresh potatoes, with dedicated cookware and separate preparation surfaces to honor complete dietary purity.",
  },
  {
    question: "What is the capacity of your private banquet hall?",
    answer:
      "Our Grand Maharaja Banquet Suite comfortably hosts approximately 80 seated guests with bespoke staging, royal lighting, customizable floral decor, and complete silver-service catering (plus outdoor catering for 200+ guests across the UK).",
  },
  {
    question: "Do you offer pure vegetarian catering outside Leicester?",
    answer:
      "Yes! Our master royal culinary team delivers bespoke outdoor catering across the UK for grand wedding ceremonies, receptions, milestone anniversaries, and corporate banquets.",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col w-full bg-white dark:bg-[#0D0C0A] transition-colors duration-200">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: GRAND ROYAL HERO BANNER
      ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[420px] sm:min-h-[480px] lg:min-h-[520px] flex items-center justify-center py-16 sm:py-20 lg:py-24 overflow-hidden border-b-2 border-[#D4AF37]/40 shadow-[0_4px_30px_rgba(212,175,55,0.15)]">
        {/* Authentic Background Photo with Next.js Image Optimization */}
        <Image
          src="/images/banquet/catering_feast.jpg"
          alt="The Grand Maharaja Royal Hospitality & Banqueting Leicester"
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
        <RoyalBackgroundGlow variant="hero" particleCount={20} showMandala={false} />

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
            <span className="text-[#F5F1EB] font-semibold">Contact &amp; Reservations</span>
          </nav>

          {/* Regal Subtitle Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1610]/80 border border-[#D4AF37]/50 text-[#D4AF37] text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] mb-4 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
            <span>ROYAL LEICESTER HOSPITALITY</span>
          </div>

          {/* Main Hero Heading */}
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F1EB] tracking-tight leading-[1.15] max-w-4xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Contact &amp; Table{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] italic font-normal">
              Reservations
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
            Whether booking an intimate family banquet, celebrating a wedding reception, or
            arranging royal catering across the UK, our hospitality team is here to assist you.
          </p>

          {/* Quick Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-7">
            <a
              href="#inquiry-form"
              className="shimmer-hover inline-flex items-center gap-2 bg-gradient-to-r from-[#8C6E2E] via-[#A38137] to-[#8C6E2E] text-white px-6 sm:px-8 py-3.5 rounded-full font-bold text-xs sm:text-[13px] tracking-[0.16em] uppercase shadow-[0_4px_20px_rgba(140,110,46,0.5)] hover:shadow-[0_6px_25px_rgba(212,175,55,0.7)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>Reserve a Table</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="tel:+441165070296"
              className="inline-flex items-center gap-2 bg-[#1A1610]/90 hover:bg-[#252018] text-[#F5F1EB] border border-[#D4AF37]/50 hover:border-[#D4AF37] px-6 sm:px-8 py-3.5 rounded-full font-bold text-xs sm:text-[13px] tracking-[0.16em] uppercase backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-md"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>0116 507 0296</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: 3 ROYAL CONTACT CARDS (Location, Phone, Schedule)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full py-12 sm:py-16 bg-[#F5F1EB]/60 dark:bg-[#14120E] border-b border-[#E8E2D5] dark:border-[#241F18] transition-colors duration-200">
        <RoyalBackgroundGlow variant="minimal" particleCount={12} showMandala={false} />

        <div
          className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10"
          style={{ maxWidth: "1400px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {CONTACT_INFO_CARDS.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="card-hover-elevate relative bg-white dark:bg-[#181511] rounded-2xl p-6 sm:p-8 border border-[#EBE6DC] dark:border-[#2C261D] shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Icon Badge & Category */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#FAF6EE] dark:bg-[#221C14] border border-[#E8E1D0] dark:border-[#382F22] flex items-center justify-center text-[#8C6E2E] dark:text-[#D4AF37] shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#8C6E2E] dark:text-[#D4AF37] font-sans">
                        {card.category}
                      </span>
                    </div>

                    {/* Card Title */}
                    <h3 className="font-playfair text-xl sm:text-2xl font-bold text-[#1A1A1A] dark:text-[#F5F1EB] mb-2">
                      {card.title}
                    </h3>

                    {/* Main Detail */}
                    <p className="font-sans text-sm sm:text-base font-semibold text-[#1A1A1A] dark:text-[#F5F1EB] leading-snug">
                      {card.detail}
                    </p>

                    {card.subDetail && (
                      <p className="font-sans text-xs sm:text-sm text-[#8C6E2E] dark:text-[#D4AF37] font-medium mt-1">
                        {card.subDetail}
                      </p>
                    )}

                    {/* Note */}
                    <p className="font-sans text-xs text-[#666666] dark:text-[#A0988A] mt-2 leading-relaxed">
                      {card.note}
                    </p>
                  </div>

                  {/* Action Link */}
                  <div className="pt-6 mt-6 border-t border-[#EBE6DC] dark:border-[#2C261D]">
                    {card.isExternal ? (
                      <a
                        href={card.actionHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-bold uppercase tracking-[0.14em] text-[#8C6E2E] dark:text-[#D4AF37] hover:translate-x-1 transition-all group"
                      >
                        <span>{card.actionLabel}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    ) : (
                      <Link
                        href={card.actionHref}
                        className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-bold uppercase tracking-[0.14em] text-[#8C6E2E] dark:text-[#D4AF37] hover:translate-x-1 transition-all group"
                      >
                        <span>{card.actionLabel}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: TWO-COLUMN INTERACTIVE INQUIRY & ROYAL PLEDGE
      ───────────────────────────────────────────────────────────── */}
      <section
        id="inquiry-form"
        className="relative w-full py-16 sm:py-20 lg:py-24 bg-white dark:bg-[#0D0C0A] transition-colors duration-200"
      >
        <RoyalBackgroundGlow variant="section" particleCount={16} showMandala={false} />

        <div
          className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10"
          style={{ maxWidth: "1400px" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column (5 Cols): Royal Welcome & Social Channels */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#8C6E2E] dark:text-[#D4AF37] font-sans mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>EXPERIENCE THE ROYAL TOUCH</span>
                </div>

                <h2 className="font-playfair text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1A1A1A] dark:text-[#F5F1EB] tracking-tight leading-[1.2]">
                  We Welcome Your Presence With{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8C6E2E] via-[#B89647] to-[#8C6E2E] dark:from-[#D4AF37] dark:via-[#F3E5AB] dark:to-[#D4AF37] italic font-normal">
                    Warmth &amp; Honor
                  </span>
                </h2>

                <p className="font-sans text-xs sm:text-sm text-[#555555] dark:text-[#A0988A] leading-relaxed mt-4">
                  At The Grand Maharaja, every table reservation and event booking is prepared with
                  meticulous care. Whether you are craving an evening of authentic Indian vegetarian cuisine,
                  celebrating a wedding anniversary, or coordinating an outdoor banquet of hundreds,
                  our staff will orchestrate an unforgettable experience.
                </p>
              </div>

              {/* 3 Pillar Assurances */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#FAF8F5] dark:bg-[#14120E] border border-[#EAE4D8] dark:border-[#241F18]">
                  <ShieldCheck className="w-5 h-5 text-[#8C6E2E] dark:text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-playfair text-sm font-bold text-[#1A1A1A] dark:text-[#F5F1EB]">
                      100% Dedicated Pure Vegetarian
                    </h4>
                    <p className="text-xs text-[#666666] dark:text-[#A0988A] font-sans mt-0.5">
                      Authentic kitchen sanctum with strict No Onion &amp; No Garlic options (fresh raw vegetables &amp; potatoes).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#FAF8F5] dark:bg-[#14120E] border border-[#EAE4D8] dark:border-[#241F18]">
                  <Users className="w-5 h-5 text-[#8C6E2E] dark:text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-playfair text-sm font-bold text-[#1A1A1A] dark:text-[#F5F1EB]">
                      Approx 80 Guests Private Banquet Suite
                    </h4>
                    <p className="text-xs text-[#666666] dark:text-[#A0988A] font-sans mt-0.5">
                      Full audio-visual setup, custom seating layouts, and dedicated silver banquet service.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#FAF8F5] dark:bg-[#14120E] border border-[#EAE4D8] dark:border-[#241F18]">
                  <Car className="w-5 h-5 text-[#8C6E2E] dark:text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-playfair text-sm font-bold text-[#1A1A1A] dark:text-[#F5F1EB]">
                      Complimentary On-Site Parking
                    </h4>
                    <p className="text-xs text-[#666666] dark:text-[#A0988A] font-sans mt-0.5">
                      Convenient dedicated parking right beside our restaurant on Catherine Street Leicester.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Social Media Channel Connect */}
              <div className="pt-4">
                <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8C6E2E] dark:text-[#D4AF37] font-sans mb-3">
                  CONNECT ON SOCIAL CHANNELS
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Facebook Card */}
                  <a
                    href={SITE_CONFIG.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FAF8F5] dark:bg-[#14120E] border border-[#EAE4D8] dark:border-[#241F18] hover:border-[#8C6E2E] dark:hover:border-[#D4AF37] hover:scale-[1.02] transition-all group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#E8E1D0] dark:bg-[#201C16] flex items-center justify-center text-[#8C6E2E] dark:text-[#D4AF37] group-hover:bg-[#8C6E2E] group-hover:text-white dark:group-hover:bg-[#D4AF37] dark:group-hover:text-[#12100D] transition-colors">
                      <FacebookIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#1A1A1A] dark:text-[#F5F1EB] block leading-tight">
                        Facebook
                      </span>
                      <span className="text-[10.5px] text-[#8C6E2E] dark:text-[#D4AF37] block font-sans">
                        Follow Updates &rarr;
                      </span>
                    </div>
                  </a>

                  {/* Instagram Card */}
                  <a
                    href={SITE_CONFIG.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FAF8F5] dark:bg-[#14120E] border border-[#EAE4D8] dark:border-[#241F18] hover:border-[#8C6E2E] dark:hover:border-[#D4AF37] hover:scale-[1.02] transition-all group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#E8E1D0] dark:bg-[#201C16] flex items-center justify-center text-[#8C6E2E] dark:text-[#D4AF37] group-hover:bg-[#8C6E2E] group-hover:text-white dark:group-hover:bg-[#D4AF37] dark:group-hover:text-[#12100D] transition-colors">
                      <InstagramIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#1A1A1A] dark:text-[#F5F1EB] block leading-tight">
                        Instagram
                      </span>
                      <span className="text-[10.5px] text-[#8C6E2E] dark:text-[#D4AF37] block font-sans">
                        @thegrandmaharaja &rarr;
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column (7 Cols): Interactive Contact & Reservation Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: FULL-WIDTH INTERACTIVE GOOGLE MAPS EMBED
      ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full py-16 sm:py-20 bg-[#F5F1EB]/60 dark:bg-[#14120E] border-t border-[#E8E2D5] dark:border-[#241F18] transition-colors duration-200">
        <div
          className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10"
          style={{ maxWidth: "1400px" }}
        >
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#8C6E2E] dark:text-[#D4AF37] font-sans mb-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>FIND US IN LEICESTER</span>
            </div>
            <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1A1A] dark:text-[#F5F1EB] tracking-tight">
              Interactive Map &amp; Directions
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#666666] dark:text-[#A0988A] mt-2">
              Located conveniently at 209 Catherine St, Leicester LE4 6GE with ample dedicated guest
              parking on-site.
            </p>
          </div>

          {/* Map Frame Container with Royal Border */}
          <div className="relative rounded-3xl overflow-hidden border-2 border-[#D4AF37]/40 shadow-xl bg-white dark:bg-[#181511]">
            <iframe
              title="The Grand Maharaja Leicester Google Maps Location"
              src="https://maps.google.com/maps?q=The+Grand+Maharaja,+209+Catherine+St,+Leicester+LE4+6GE&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[380px] sm:h-[460px] filter contrast-105"
            />

            {/* Float Overlay Card */}
            <div className="sm:absolute bottom-6 left-6 p-5 sm:p-6 bg-white/95 dark:bg-[#181511]/95 backdrop-blur-md rounded-2xl border border-[#D4AF37]/50 shadow-2xl max-w-sm m-4 sm:m-0">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C6E2E] dark:text-[#D4AF37] block mb-1">
                LOCATION DETAILS
              </span>
              <h3 className="font-playfair text-base sm:text-lg font-bold text-[#1A1A1A] dark:text-[#F5F1EB]">
                The Grand Maharaja Leicester
              </h3>
              <p className="text-xs text-[#555555] dark:text-[#A0988A] mt-1 font-sans">
                209 Catherine St, Leicester LE4 6GE
              </p>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href="https://maps.google.com/?q=The+Grand+Maharaja,+209+Catherine+St,+Leicester+LE4+6GE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#8C6E2E] dark:bg-[#D4AF37] hover:bg-[#735A24] dark:hover:bg-[#B8962D] text-white dark:text-[#12100D] px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
                <a
                  href="tel:+441165070296"
                  className="inline-flex items-center gap-1.5 border border-[#D4AF37] text-[#8C6E2E] dark:text-[#D4AF37] px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#FAF6EE] dark:hover:bg-[#201C16] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: FREQUENTLY ASKED QUESTIONS
      ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full py-16 sm:py-20 bg-white dark:bg-[#0D0C0A] border-t border-[#E8E2D5] dark:border-[#241F18] transition-colors duration-200">
        <RoyalBackgroundGlow variant="section" particleCount={14} showMandala={false} />

        <div
          className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10"
          style={{ maxWidth: "1400px" }}
        >
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#8C6E2E] dark:text-[#D4AF37] font-sans mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>GUEST INQUIRIES &amp; ASSISTANCE</span>
            </div>
            <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1A1A] dark:text-[#F5F1EB] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#666666] dark:text-[#A0988A] mt-2">
              Helpful details regarding reservations, dietary accommodations, and banquet hall
              bookings.
            </p>
          </div>

          {/* 2x2 FAQ Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="card-hover-elevate bg-[#FAF8F5] dark:bg-[#14120E] border border-[#EAE4D8] dark:border-[#241F18] rounded-2xl p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#E8E1D0] dark:bg-[#201C16] border border-[#DDD4BF] dark:border-[#2F2920] flex items-center justify-center shrink-0 text-[#8C6E2E] dark:text-[#D4AF37] font-bold text-xs mt-0.5 font-sans">
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

          {/* Bottom Prompt */}
          <div className="mt-12 text-center">
            <p className="text-xs sm:text-sm text-[#666666] dark:text-[#A0988A] font-sans">
              Have a bespoke request or grand event in mind?{" "}
              <a
                href="tel:+441165070296"
                className="text-[#8C6E2E] dark:text-[#D4AF37] font-bold hover:underline"
              >
                Speak directly with our Events Director on 0116 507 0296
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}