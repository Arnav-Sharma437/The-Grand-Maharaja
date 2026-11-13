"use client";

import React, { useState } from "react";
import { Sparkles, CheckCircle2, Calendar, Users, MapPin, Send, ShieldCheck, HeartHandshake } from "lucide-react";

export function BanquetingForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "Wedding Reception",
    guestCount: "80 – 120 Guests",
    serviceNeeded: "Leicester Banqueting Suite + Royal Catering",
    dietarySanctum: "Standard Pure Vegetarian + Jain Options",
    specialRequests: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        eventDate: "",
        eventType: "Wedding Reception",
        guestCount: "80 – 120 Guests",
        serviceNeeded: "Leicester Banqueting Suite + Royal Catering",
        dietarySanctum: "Standard Pure Vegetarian + Jain Options",
        specialRequests: "",
      });

      setTimeout(() => setIsSubmitted(false), 7000);
    }, 800);
  };

  return (
    <div className="card-hover-elevate bg-white dark:bg-[#181511] rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#EBE6DC] dark:border-[#2C261D] shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-300">
      {/* Header */}
      <div className="flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#9B7B34] dark:text-[#D4AF37] font-sans mb-1.5">
        <Sparkles className="w-3.5 h-3.5" />
        <span>RESERVE DATES &amp; INQUIRE</span>
      </div>

      <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-[#1A1A1A] dark:text-[#F5F1EB] tracking-tight leading-tight">
        Plan Your Royal Celebration
      </h3>

      <p className="text-xs sm:text-sm text-[#555555] dark:text-[#A0988A] font-sans mt-2 leading-relaxed">
        Provide details of your planned banquet or UK-wide outdoor catering event. Our events
        coordinator will check date availability and send a customized proposal.
      </p>

      {/* Form Body */}
      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        {/* Row 1: Full Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <div>
            <label
              htmlFor="banquet-name"
              className="block text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#555555] dark:text-[#A8A194] font-sans mb-1.5"
            >
              FULL NAME *
            </label>
            <input
              id="banquet-name"
              type="text"
              required
              placeholder="e.g. Anand &amp; Priya Shah"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full bg-[#FAF8F5] dark:bg-[#12100D] border border-[#E6E0D6] dark:border-[#2C261D] rounded-xl px-4 py-3.5 text-xs sm:text-sm text-[#1A1A1A] dark:text-[#F5F1EB] placeholder-[#A8A29E] dark:placeholder-[#666] focus:outline-none focus:border-[#9B7B34] dark:focus:border-[#D4AF37] focus:bg-white dark:focus:bg-[#161310] focus:ring-1 focus:ring-[#9B7B34] transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="banquet-email"
              className="block text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#555555] dark:text-[#A8A194] font-sans mb-1.5"
            >
              EMAIL ADDRESS *
            </label>
            <input
              id="banquet-email"
              type="email"
              required
              placeholder="shah@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-[#FAF8F5] dark:bg-[#12100D] border border-[#E6E0D6] dark:border-[#2C261D] rounded-xl px-4 py-3.5 text-xs sm:text-sm text-[#1A1A1A] dark:text-[#F5F1EB] placeholder-[#A8A29E] dark:placeholder-[#666] focus:outline-none focus:border-[#9B7B34] dark:focus:border-[#D4AF37] focus:bg-white dark:focus:bg-[#161310] focus:ring-1 focus:ring-[#9B7B34] transition-all"
            />
          </div>
        </div>

        {/* Row 2: Phone & Preferred Date */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <div>
            <label
              htmlFor="banquet-phone"
              className="block text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#555555] dark:text-[#A8A194] font-sans mb-1.5"
            >
              PHONE NUMBER *
            </label>
            <input
              id="banquet-phone"
              type="tel"
              required
              placeholder="+44 7123 456789"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-[#FAF8F5] dark:bg-[#12100D] border border-[#E6E0D6] dark:border-[#2C261D] rounded-xl px-4 py-3.5 text-xs sm:text-sm text-[#1A1A1A] dark:text-[#F5F1EB] placeholder-[#A8A29E] dark:placeholder-[#666] focus:outline-none focus:border-[#9B7B34] dark:focus:border-[#D4AF37] focus:bg-white dark:focus:bg-[#161310] focus:ring-1 focus:ring-[#9B7B34] transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="banquet-date"
              className="block text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#555555] dark:text-[#A8A194] font-sans mb-1.5"
            >
              EVENT DATE *
            </label>
            <input
              id="banquet-date"
              type="date"
              required
              value={formData.eventDate}
              onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
              className="w-full bg-[#FAF8F5] dark:bg-[#12100D] border border-[#E6E0D6] dark:border-[#2C261D] rounded-xl px-4 py-3.5 text-xs sm:text-sm text-[#1A1A1A] dark:text-[#F5F1EB] focus:outline-none focus:border-[#9B7B34] dark:focus:border-[#D4AF37] focus:bg-white dark:focus:bg-[#161310] transition-all"
            />
          </div>
        </div>

        {/* Row 3: Event Type & Guest Count */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <div>
            <label
              htmlFor="banquet-type"
              className="block text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#555555] dark:text-[#A8A194] font-sans mb-1.5"
            >
              EVENT TYPE
            </label>
            <select
              id="banquet-type"
              value={formData.eventType}
              onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
              className="w-full bg-[#FAF8F5] dark:bg-[#12100D] border border-[#E6E0D6] dark:border-[#2C261D] rounded-xl px-4 py-3.5 text-xs sm:text-sm text-[#1A1A1A] dark:text-[#F5F1EB] focus:outline-none focus:border-[#9B7B34] dark:focus:border-[#D4AF37] cursor-pointer"
            >
              <option value="Wedding Reception">Wedding Reception</option>
              <option value="Sanji / Sangeet / Mehndi Celebration">Sanji / Sangeet / Mehndi Celebration</option>
              <option value="Milestone Birthday (18th, 40th, 50th, 60th)">Milestone Birthday</option>
              <option value="Wedding Anniversary Celebration">Wedding Anniversary Celebration</option>
              <option value="Baby Shower / Srimant Ceremony">Baby Shower / Srimant Ceremony</option>
              <option value="Corporate Gala / Annual Banquet">Corporate Gala / Annual Banquet</option>
              <option value="Religious Satsang / Puja Gathering">Religious Satsang / Puja Gathering</option>
              <option value="Outdoor Event Catering across UK">Outdoor Event Catering across UK</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="banquet-guests"
              className="block text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#555555] dark:text-[#A8A194] font-sans mb-1.5"
            >
              ESTIMATED GUESTS
            </label>
            <select
              id="banquet-guests"
              value={formData.guestCount}
              onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
              className="w-full bg-[#FAF8F5] dark:bg-[#12100D] border border-[#E6E0D6] dark:border-[#2C261D] rounded-xl px-4 py-3.5 text-xs sm:text-sm text-[#1A1A1A] dark:text-[#F5F1EB] focus:outline-none focus:border-[#9B7B34] dark:focus:border-[#D4AF37] cursor-pointer"
            >
              <option value="30 – 50 Guests">30 – 50 Guests</option>
              <option value="50 – 80 Guests (Full Banquet Suite - Approx 80 Max)">
                50 – 80 Guests (Full Banquet Suite - Approx 80 Max)
              </option>
              <option value="80 – 150 Guests (UK Outdoor Catering)">
                80 – 150 Guests (UK Outdoor Catering)
              </option>
              <option value="150 – 300 Guests (UK Outdoor Catering)">
                150 – 300 Guests (UK Outdoor Catering)
              </option>
              <option value="300+ Guests (Grand Outdoor Feast)">
                300+ Guests (Grand Outdoor Feast)
              </option>
            </select>
          </div>
        </div>

        {/* Row 4: Service Needed & Dietary Sanctum */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <div>
            <label
              htmlFor="banquet-service"
              className="block text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#555555] dark:text-[#A8A194] font-sans mb-1.5"
            >
              SERVICE VENUE
            </label>
            <select
              id="banquet-service"
              value={formData.serviceNeeded}
              onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
              className="w-full bg-[#FAF8F5] dark:bg-[#12100D] border border-[#E6E0D6] dark:border-[#2C261D] rounded-xl px-4 py-3.5 text-xs sm:text-sm text-[#1A1A1A] dark:text-[#F5F1EB] focus:outline-none focus:border-[#9B7B34] dark:focus:border-[#D4AF37] cursor-pointer"
            >
              <option value="Leicester Banqueting Suite + Royal Catering">
                The Grand Maharaja Suite Leicester (Approx 80 Guests)
              </option>
              <option value="Outdoor Catering at My Venue across the UK">
                Outdoor Catering at My Venue across the UK (50 to 500+)
              </option>
              <option value="Banqueting Suite Hire Only (Leicester)">
                Banqueting Suite Hire Only (Leicester)
              </option>
            </select>
          </div>

          <div>
            <label
              htmlFor="banquet-dietary"
              className="block text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#555555] dark:text-[#A8A194] font-sans mb-1.5"
            >
              DIETARY SANCTUM
            </label>
            <select
              id="banquet-dietary"
              value={formData.dietarySanctum}
              onChange={(e) => setFormData({ ...formData, dietarySanctum: e.target.value })}
              className="w-full bg-[#FAF8F5] dark:bg-[#12100D] border border-[#E6E0D6] dark:border-[#2C261D] rounded-xl px-4 py-3.5 text-xs sm:text-sm text-[#1A1A1A] dark:text-[#F5F1EB] focus:outline-none focus:border-[#9B7B34] dark:focus:border-[#D4AF37] cursor-pointer"
            >
              <option value="Standard Pure Vegetarian + Jain Options">
                Standard Pure Vegetarian + Jain Options
              </option>
              <option value="No Onion & Garlic (Fresh Raw Veg & Potatoes - Jain/Swaminarayan)">
                No Onion &amp; Garlic (Fresh Raw Veg &amp; Potatoes - Jain/Swaminarayan)
              </option>
              <option value="100% Swaminarayan Sanctum (No Onion & Garlic)">
                100% Swaminarayan Sanctum (No Onion &amp; Garlic)
              </option>
              <option value="Pure Vegetarian with Vegan Specialities">
                Pure Vegetarian with Vegan Specialities
              </option>
            </select>
          </div>
        </div>

        {/* Row 5: Special Requests & Event Notes */}
        <div>
          <label
            htmlFor="banquet-notes"
            className="block text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#555555] dark:text-[#A8A194] font-sans mb-1.5"
          >
            SPECIAL REQUESTS, STAGING &amp; TIMINGS
          </label>
          <textarea
            id="banquet-notes"
            rows={4}
            placeholder="Tell us about your event vision — preferred schedule, stage or mandap requirements, live food stations (e.g. live chaat, clay oven tandoor), or special musical setup..."
            value={formData.specialRequests}
            onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
            className="w-full bg-[#FAF8F5] dark:bg-[#12100D] border border-[#E6E0D6] dark:border-[#2C261D] rounded-xl px-4 py-3.5 text-xs sm:text-sm text-[#1A1A1A] dark:text-[#F5F1EB] placeholder-[#A8A29E] dark:placeholder-[#666] focus:outline-none focus:border-[#9B7B34] dark:focus:border-[#D4AF37] focus:bg-white dark:focus:bg-[#161310] focus:ring-1 focus:ring-[#9B7B34] transition-all resize-none"
          />
        </div>

        {/* Submission Confirmation Alert */}
        {isSubmitted && (
          <div className="p-4 bg-[#ECFDF5] dark:bg-[#064E3B]/40 border border-[#A7F3D0] dark:border-[#059669]/50 rounded-xl text-xs sm:text-sm text-[#065F46] dark:text-[#A7F3D0] flex items-center gap-3 animate-fade-in">
            <CheckCircle2 className="w-5 h-5 text-[#059669] dark:text-[#34D399] shrink-0" />
            <div>
              <p className="font-bold">Banqueting Inquiry Transmitted Successfully!</p>
              <p className="text-xs text-[#065F46]/90 dark:text-[#A7F3D0]/90 mt-0.5">
                Our Events Director will contact you within 24 hours to confirm date availability and
                present your tailored banquet menu.
              </p>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="shimmer-hover w-full bg-[#1A1A1A] hover:bg-[#2A2A2A] dark:bg-[#8C6E2E] dark:hover:bg-[#A38137] text-[#F5F1EB] rounded-xl py-4 px-6 text-xs sm:text-[13px] font-bold uppercase tracking-[0.18em] flex items-center justify-center gap-2 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group disabled:opacity-75 cursor-pointer"
        >
          <span>{isSubmitting ? "RESERVING DATE INQUIRY..." : "REQUEST BANQUET PROPOSAL"}</span>
          <span className="text-[#C5A880] dark:text-[#F5F1EB] group-hover:translate-x-1.5 transition-transform duration-200 text-sm">
            &#9655;
          </span>
        </button>
      </form>
    </div>
  );
}