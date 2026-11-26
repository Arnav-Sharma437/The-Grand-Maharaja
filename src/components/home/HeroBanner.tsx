"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Utensils, CheckCircle2 } from "lucide-react";
import { RoyalBackgroundGlow } from "@/components/ui/RoyalBackgroundGlow";

// Real Authentic Images from the Restaurant for Hero Background
const REAL_HERO_IMAGES = [
  {
    src: "/images/hero/hero-slider-royal-ambiance-1.jpg",
    alt: "The Grand Maharaja Royal Dining Hall & Chandeliers",
    label: "Imperial Dining Hall",
  },
  {
    src: "/images/about/about-grand-maharaja-exterior-facade.png",
    alt: "The Grand Maharaja Fine Indian Cuisine Restaurant Exterior in Leicester",
    label: "Catherine St Facade",
  },
  {
    src: "/images/gallery/gallery-gourmet-feast-spread.png",
    alt: "The Grand Maharaja Royal Indian Vegetarian Culinary Feast",
    label: "Royal Gourmet Feast Spread",
  },
  {
    src: "/images/hero/hero-slider-dining-experience-3.jpg",
    alt: "The Grand Maharaja Royal Dining Ambiance & Bar Experience",
    label: "Dining Ambiance",
  },
];

export function HeroBanner() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [minDate, setMinDate] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "Table Dining",
    guests: "2",
    date: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Disable present (today) and past dates — minimum selectable date is tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, "0");
    const dd = String(tomorrow.getDate()).padStart(2, "0");
    setMinDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "Hero Banner Swift Booking Desk",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          eventType: formData.eventType,
          guests: formData.guests,
          date: formData.date,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          eventType: "Table Dining",
          guests: "2–4",
          date: "",
        });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentImage = REAL_HERO_IMAGES[activeImageIndex];

  return (
    <section className="relative w-full min-h-[620px] lg:min-h-[720px] pt-12 sm:pt-16 lg:pt-20 pb-14 sm:pb-16 lg:pb-20 overflow-hidden bg-[#0D0C0A] transition-colors duration-200">
      {/* Background Banner Image with Smooth Fade */}
      <div className="absolute inset-0 z-0">
        <Image
          src={currentImage.src}
          alt={currentImage.alt}
          fill
          priority
          className="object-cover object-center transition-all duration-1000 ease-in-out scale-100"
          sizes="100vw"
        />

        {/* Cinematic Vignette & Gradient Overlays for Maximum Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/82 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0A] via-transparent to-black/75" />
        <div className="absolute inset-0 bg-[#D4AF37]/5 mix-blend-overlay pointer-events-none" />
      </div>

      {/* Live Royal Background Effects (Floating Gold Dust & Sacred Particles) */}
      <RoyalBackgroundGlow variant="hero" particleCount={36} showMandala={false} />

      {/* Main 1400px Hero Container */}
      <div
        className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10"
        style={{ maxWidth: "1400px" }}
      >
        {/* Top Content Row: Eyebrow, Headline, Description, CTAs & Venue Switcher */}
        <div className="max-w-3xl flex flex-col items-start pt-2 sm:pt-4">
          {/* Subtle Royal Eyebrow (Google Reviews removed as requested) */}
          <div className="inline-flex items-center gap-2.5 text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#D4AF37] mb-5 font-sans">
            <span className="w-7 h-[1.5px] bg-[#D4AF37]" />
            <span>FINE INDIAN VEGETARIAN SANCTUARY &bull; LEICESTER</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] leading-[1.12] text-white font-semibold tracking-tight">
            Royal Flavours,
            <br />
            <span className="font-playfair italic font-normal text-[#D4AF37]">
              Pure Vegetarian
            </span>{" "}
            <span>Grandeur</span>
          </h1>

          {/* Subtitle Description */}
          <p className="mt-5 text-sm sm:text-base text-[#D0C7BB] leading-relaxed max-w-2xl font-sans">
            At The Grand Maharaja, we bring royal flavours to your special occasions with an
            exquisite vegetarian catering and dining experience that blends timeless Indian
            tradition with imperial hospitality in Leicester.
          </p>

          {/* Dual CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/banqueting"
              className="shimmer-hover inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#8C6E2E] hover:bg-[#A38137] text-white text-xs sm:text-[13px] font-semibold uppercase tracking-wider rounded-md shadow-[0_8px_24px_rgba(140,110,46,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
            >
              <span>BOOKING &amp; BANQUET ENQUIRY</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
            </Link>

            <Link
              href="/menu"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-black/40 hover:bg-black/60 text-[#F5F1EB] border border-[#D4AF37]/50 hover:border-[#D4AF37] backdrop-blur-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 text-xs sm:text-[13px] font-semibold uppercase tracking-wider rounded-md transition-all duration-200 group/menu"
            >
              <span>EXPLORE FOOD &amp; BAR MENUS</span>
              <Utensils className="w-4 h-4 text-[#D4AF37] transition-transform duration-200 group-hover/menu:rotate-12" />
            </Link>
          </div>

          {/* Background Scene Switcher */}
          <div className="mt-7 flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#A0988A] mr-1">
              VIEW VENUE:
            </span>
            {REAL_HERO_IMAGES.map((img, idx) => (
              <button
                key={img.label}
                type="button"
                onClick={() => setActiveImageIndex(idx)}
                className={`text-[11px] font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full border transition-all duration-300 cursor-pointer ${
                  activeImageIndex === idx
                    ? "bg-[#D4AF37] text-[#14120E] border-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.4)]"
                    : "bg-black/40 text-[#C5BEB3] border-white/15 hover:border-[#D4AF37]/60 hover:text-white"
                }`}
              >
                {img.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Floating Booking Bar ("SWIFT BOOKING DESK") - 1400px Container */}
        <div className="w-full mt-12 sm:mt-16">
          <div
            className="card-hover-elevate w-full bg-[#181511]/92 backdrop-blur-md rounded-2xl p-5 sm:p-7 lg:p-8 shadow-[0_12px_45px_rgba(0,0,0,0.6)] border border-[#2C261D] hover:border-[#9B7B34]/50 transition-all duration-300"
          >
            {/* Header Row */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-4 border-b border-[#2C261D]">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                  SWIFT BOOKING DESK
                </p>
                <h2 className="font-playfair text-lg sm:text-xl font-semibold text-[#F5F1EB] mt-0.5">
                  Book Your Feast or Grand Celebration
                </h2>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#A0988A]">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Instant booking inquiry forwarded to info@thegrandmaharaja.co.uk</span>
              </div>
            </div>

            {/* Booking Form Grid */}
            <form onSubmit={handleSubmit} className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3.5 xl:gap-4 items-end">
              {/* Field 1: Name */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#A8A194]">
                  YOUR NAME *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priyesh Patel"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-10 bg-[#12100D] border border-[#2C261D] rounded-lg px-3 py-2 text-xs text-[#F5F1EB] placeholder:text-[#666] focus:outline-none focus:border-[#D4AF37] focus:bg-[#161310] transition-colors"
                />
              </div>

              {/* Field 2: Email */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#A8A194]">
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  required
                  placeholder="patel@family.co.uk"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-10 bg-[#12100D] border border-[#2C261D] rounded-lg px-3 py-2 text-xs text-[#F5F1EB] placeholder:text-[#666] focus:outline-none focus:border-[#D4AF37] focus:bg-[#161310] transition-colors"
                />
              </div>

              {/* Field 3: Phone */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#A8A194]">
                  PHONE NUMBER *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+44 7000 000000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full h-10 bg-[#12100D] border border-[#2C261D] rounded-lg px-3 py-2 text-xs text-[#F5F1EB] placeholder:text-[#666] focus:outline-none focus:border-[#D4AF37] focus:bg-[#161310] transition-colors"
                />
              </div>

              {/* Field 4: Event Type (Fixed to Table Dining) */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#A8A194]">
                  EVENT TYPE *
                </label>
                <div className="w-full h-10 bg-[#12100D] border border-[#2C261D] rounded-lg px-3 py-2 flex items-center text-xs text-[#D4AF37] font-semibold tracking-wide">
                  Table Dining
                </div>
              </div>

              {/* Field 5: Guests & Date */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#A8A194]">
                  GUESTS &amp; DATE *
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="1"
                    max="20"
                    required
                    placeholder="2"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-16 h-10 bg-[#12100D] border border-[#2C261D] rounded-lg px-2 text-center text-xs text-[#F5F1EB] placeholder:text-[#666] focus:outline-none focus:border-[#D4AF37] focus:bg-[#161310] transition-colors"
                  />
                  <input
                    type="date"
                    required
                    min={minDate}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="flex-1 h-10 bg-[#12100D] border border-[#2C261D] rounded-lg px-2 text-xs text-[#F5F1EB] focus:outline-none focus:border-[#D4AF37] focus:bg-[#161310] transition-colors cursor-pointer"
                  />
                </div>
              </div>

              {/* Field 6: CTA Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-10 bg-[#8C6E2E] hover:bg-[#A38137] text-white font-semibold text-xs uppercase tracking-wider rounded-lg px-4 flex items-center justify-center gap-2 shadow-sm transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? "SENDING..." : submitted ? "INQUIRY SENT!" : "BOOK TABLE"}</span>
                  <Utensils className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
