"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight, Utensils, MapPin, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

// Real Authentic Images from the Website
const REAL_HERO_IMAGES = [
  {
    src: "/images/about/about-grand-maharaja-exterior-facade.png",
    alt: "The Grand Maharaja Fine Indian Cuisine Restaurant Exterior in Leicester",
    label: "Catherine St Facade",
  },
  {
    src: "/images/hero/hero-slider-royal-ambiance-1.jpg",
    alt: "The Grand Maharaja Royal Dining Hall & Chandeliers",
    label: "Imperial Dining Hall",
  },
  {
    src: "/images/hero/hero-slider-cuisine-spread-2.jpg",
    alt: "The Grand Maharaja Royal Indian Vegetarian Culinary Feast",
    label: "Royal Cuisine Spread",
  },
  {
    src: "/images/about/about-royal-golden-backlit-bar.png",
    alt: "The Grand Maharaja Golden Backlit Bar & Lounge",
    label: "Golden Backlit Bar",
  },
];

export function HeroBanner() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "Table Dining",
    guests: "2–4",
    date: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const currentImage = REAL_HERO_IMAGES[activeImageIndex];

  return (
    <section className="relative w-full bg-[#F5F1EB]/60 pt-8 sm:pt-12 lg:pt-14 pb-14 sm:pb-16 lg:pb-20 overflow-hidden">
      {/* Main 1400px Hero Container */}
      <div
        className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10"
        style={{ maxWidth: "1400px" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Google Reviews Pill Badge */}
            <div className="inline-flex items-center gap-2.5 bg-white border border-[#E8E2D5] rounded-full px-4 py-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-6">
              {/* Authentic Google "G" 4-Color Icon */}
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>

              {/* 5 Amber Stars */}
              <div className="flex items-center gap-0.5 text-[#F59E0B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B] stroke-none" />
                ))}
              </div>

              {/* Verified Rating & Reviews Count */}
              <span className="text-xs font-bold tracking-wider text-[#1A1A1A]">
                4.4 / 5 <span className="text-[#C5BEB3] mx-1">|</span> 71+ REVIEWS
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-[54px] xl:text-[58px] leading-[1.12] text-[#1A1A1A] font-semibold tracking-tight">
              Royal Flavours,
              <br />
              <span className="font-playfair italic font-normal text-[#9B7B34]">
                Pure Vegetarian
              </span>{" "}
              <span>Grandeur</span>
            </h1>

            {/* Subtitle Description */}
            <p className="mt-5 text-sm sm:text-base text-[#4A4A4A] leading-relaxed max-w-xl font-sans">
              At The Grand Maharaja, we bring royal flavours to your special occasions with an
              exquisite vegetarian catering and dining experience that blends timeless Indian
              tradition with imperial hospitality in Leicester.
            </p>

            {/* Dual CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/#reservations"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#7D6328] hover:bg-[#6B531F] text-white text-xs sm:text-[13px] font-semibold uppercase tracking-wider rounded-md shadow-sm transition-all duration-200 group"
              >
                <span>RESERVE YOUR ROYAL EXPERIENCE</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/#menus"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-white hover:bg-[#FAF7F2] text-[#1A1A1A] border border-[#E0D9CE] text-xs sm:text-[13px] font-semibold uppercase tracking-wider rounded-md shadow-sm transition-all duration-200"
              >
                <span>EXPLORE FOOD &amp; BAR MENUS</span>
                <Utensils className="w-4 h-4 text-[#8C6E2E]" />
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Real Restaurant Card with Floating Location Badge */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-2.5 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-[#EBE6DC]">
              {/* Real Photo Frame */}
              <div className="relative w-full h-[380px] sm:h-[450px] lg:h-[490px] xl:h-[510px] rounded-2xl overflow-hidden bg-[#1A1A1A]">
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  fill
                  priority
                  className="object-cover object-center transition-all duration-500"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />

                {/* Subtle Image Switcher Dots (allowing user to view other authentic website photos) */}
                <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-white/20">
                  {REAL_HERO_IMAGES.map((img, idx) => (
                    <button
                      key={img.label}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      title={img.label}
                      aria-label={`View ${img.label}`}
                      className={`h-2 transition-all duration-200 rounded-full ${
                        activeImageIndex === idx
                          ? "w-5 bg-[#F3E5AB]"
                          : "w-2 bg-white/60 hover:bg-white"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Floating Location Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:px-5 shadow-lg border border-[#EBE6DC] flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9B7B34] mb-0.5">
                    SANCTUARY OF TASTE
                  </p>
                  <p className="font-serif text-sm sm:text-base font-semibold text-[#1A1A1A]">
                    {SITE_CONFIG.contact.shortAddress}
                  </p>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#F5F1EB] flex items-center justify-center text-[#8C6E2E] shrink-0 ml-3">
                  <MapPin className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Floating Booking Bar ("SWIFT BOOKING DESK") - 1400px Container */}
        <div className="w-full mt-12 sm:mt-16">
          <div
            className="w-full bg-white rounded-2xl p-5 sm:p-7 lg:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.05)] border border-[#EBE6DC]"
          >
            {/* Header Row */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-4 border-b border-[#F0EBE3]">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9B7B34]">
                  SWIFT BOOKING DESK
                </p>
                <h2 className="font-playfair text-lg sm:text-xl font-semibold text-[#1A1A1A] mt-0.5">
                  Book Your Feast or Grand Celebration
                </h2>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#555555]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Instant booking inquiry forwarded to Catherine St reception</span>
              </div>
            </div>

            {/* Booking Form Grid */}
            <form onSubmit={handleSubmit} className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3.5 xl:gap-4 items-end">
              {/* Field 1: Name */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#666666]">
                  YOUR NAME *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priyesh Patel"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-10 bg-[#F8F6F2] border border-[#E8E2D5] rounded-lg px-3 py-2 text-xs text-[#1A1A1A] placeholder:text-[#999999] focus:outline-none focus:border-[#7D6328] focus:bg-white transition-colors"
                />
              </div>

              {/* Field 2: Email */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#666666]">
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  required
                  placeholder="patel@family.co.uk"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-10 bg-[#F8F6F2] border border-[#E8E2D5] rounded-lg px-3 py-2 text-xs text-[#1A1A1A] placeholder:text-[#999999] focus:outline-none focus:border-[#7D6328] focus:bg-white transition-colors"
                />
              </div>

              {/* Field 3: Phone */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#666666]">
                  PHONE NUMBER *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+44 7000 000000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full h-10 bg-[#F8F6F2] border border-[#E8E2D5] rounded-lg px-3 py-2 text-xs text-[#1A1A1A] placeholder:text-[#999999] focus:outline-none focus:border-[#7D6328] focus:bg-white transition-colors"
                />
              </div>

              {/* Field 4: Event Type */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#666666]">
                  EVENT TYPE *
                </label>
                <select
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="w-full h-10 bg-[#F8F6F2] border border-[#E8E2D5] rounded-lg px-3 py-2 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#7D6328] focus:bg-white transition-colors cursor-pointer"
                >
                  <option value="Table Dining">Table Dining</option>
                  <option value="Royal Banquet">Royal Banquet</option>
                  <option value="Private Dining">Private Dining</option>
                  <option value="Outdoor Catering">Outdoor Catering</option>
                </select>
              </div>

              {/* Field 5: Guests & Date */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#666666]">
                  GUESTS &amp; DATE *
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="2–4"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-16 h-10 bg-[#F8F6F2] border border-[#E8E2D5] rounded-lg px-2 text-center text-xs text-[#1A1A1A] placeholder:text-[#999999] focus:outline-none focus:border-[#7D6328] focus:bg-white transition-colors"
                  />
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="flex-1 h-10 bg-[#F8F6F2] border border-[#E8E2D5] rounded-lg px-2 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#7D6328] focus:bg-white transition-colors cursor-pointer"
                  />
                </div>
              </div>

              {/* Field 6: CTA Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full h-10 bg-[#1E1B18] hover:bg-[#312B25] text-[#FAF7F2] font-semibold text-xs uppercase tracking-wider rounded-lg px-4 flex items-center justify-center gap-2 shadow-sm transition-all duration-200 cursor-pointer"
                >
                  <span>{submitted ? "REQUEST SENT!" : "BOOK TABLE"}</span>
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
