"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Phone, Mail, Calendar, Users, Sparkles } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    inquiryType: "Table Dining Reservation",
    guests: "2–4 Guests",
    preferredDate: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate swift submission with royal reassurance
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        inquiryType: "Table Dining Reservation",
        guests: "2–4 Guests",
        preferredDate: "",
        message: "",
      });

      setTimeout(() => setIsSubmitted(false), 6000);
    }, 700);
  };

  return (
    <div className="card-hover-elevate bg-white dark:bg-[#181511] rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#EBE6DC] dark:border-[#2C261D] shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-300">
      <div className="flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#9B7B34] dark:text-[#D4AF37] font-sans mb-1.5">
        <Sparkles className="w-3.5 h-3.5" />
        <span>RESERVE OR INQUIRE</span>
      </div>

      <h2 className="font-playfair text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#1A1A1A] dark:text-[#F5F1EB] tracking-tight leading-tight">
        Send a Message
      </h2>

      <p className="text-xs sm:text-sm text-[#555555] dark:text-[#A0988A] font-sans mt-2 leading-relaxed">
        Share your requirements with us and our events coordinator will respond promptly with personalized guidance and availability.
      </p>

      {/* Form Element */}
      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        {/* Row 1: Full Name & Email Address */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <div>
            <label
              htmlFor="fullName"
              className="block text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#555555] dark:text-[#A8A194] font-sans mb-1.5"
            >
              FULL NAME *
            </label>
            <input
              id="fullName"
              type="text"
              required
              placeholder="e.g. Mr / Mrs Patel"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full bg-[#FAF8F5] dark:bg-[#12100D] border border-[#E6E0D6] dark:border-[#2C261D] rounded-xl px-4 py-3.5 text-xs sm:text-sm text-[#1A1A1A] dark:text-[#F5F1EB] placeholder-[#A8A29E] dark:placeholder-[#666] focus:outline-none focus:border-[#9B7B34] dark:focus:border-[#D4AF37] focus:bg-white dark:focus:bg-[#161310] focus:ring-1 focus:ring-[#9B7B34] transition-all duration-200"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#555555] dark:text-[#A8A194] font-sans mb-1.5"
            >
              EMAIL ADDRESS *
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="patel@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-[#FAF8F5] dark:bg-[#12100D] border border-[#E6E0D6] dark:border-[#2C261D] rounded-xl px-4 py-3.5 text-xs sm:text-sm text-[#1A1A1A] dark:text-[#F5F1EB] placeholder-[#A8A29E] dark:placeholder-[#666] focus:outline-none focus:border-[#9B7B34] dark:focus:border-[#D4AF37] focus:bg-white dark:focus:bg-[#161310] focus:ring-1 focus:ring-[#9B7B34] transition-all duration-200"
            />
          </div>
        </div>

        {/* Row 2: Phone Number & Preferred Date */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <div>
            <label
              htmlFor="phone"
              className="block text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#555555] dark:text-[#A8A194] font-sans mb-1.5"
            >
              PHONE NUMBER *
            </label>
            <input
              id="phone"
              type="tel"
              required
              placeholder="+44 7123 456789"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-[#FAF8F5] dark:bg-[#12100D] border border-[#E6E0D6] dark:border-[#2C261D] rounded-xl px-4 py-3.5 text-xs sm:text-sm text-[#1A1A1A] dark:text-[#F5F1EB] placeholder-[#A8A29E] dark:placeholder-[#666] focus:outline-none focus:border-[#9B7B34] dark:focus:border-[#D4AF37] focus:bg-white dark:focus:bg-[#161310] focus:ring-1 focus:ring-[#9B7B34] transition-all duration-200"
            />
          </div>

          <div>
            <label
              htmlFor="preferredDate"
              className="block text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#555555] dark:text-[#A8A194] font-sans mb-1.5"
            >
              PREFERRED DATE
            </label>
            <input
              id="preferredDate"
              type="date"
              value={formData.preferredDate}
              onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
              className="w-full bg-[#FAF8F5] dark:bg-[#12100D] border border-[#E6E0D6] dark:border-[#2C261D] rounded-xl px-4 py-3.5 text-xs sm:text-sm text-[#1A1A1A] dark:text-[#F5F1EB] placeholder-[#A8A29E] dark:placeholder-[#666] focus:outline-none focus:border-[#9B7B34] dark:focus:border-[#D4AF37] focus:bg-white dark:focus:bg-[#161310] focus:ring-1 focus:ring-[#9B7B34] transition-all duration-200"
            />
          </div>
        </div>

        {/* Row 3: Inquiry Type & Guest Count */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <div>
            <label
              htmlFor="inquiryType"
              className="block text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#555555] dark:text-[#A8A194] font-sans mb-1.5"
            >
              INQUIRY TYPE
            </label>
            <select
              id="inquiryType"
              value={formData.inquiryType}
              onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
              className="w-full bg-[#FAF8F5] dark:bg-[#12100D] border border-[#E6E0D6] dark:border-[#2C261D] rounded-xl px-4 py-3.5 text-xs sm:text-sm text-[#1A1A1A] dark:text-[#F5F1EB] focus:outline-none focus:border-[#9B7B34] dark:focus:border-[#D4AF37] focus:bg-white dark:focus:bg-[#161310] transition-all duration-200 cursor-pointer"
            >
              <option value="Table Dining Reservation">Table Dining Reservation</option>
              <option value="Private Banquet Suite Hire (Approx 80 Guests)">
                Private Banquet Suite Hire (Approx 80 Guests)
              </option>
              <option value="Outdoor Event Catering Across UK">
                Outdoor Event Catering Across UK
              </option>
              <option value="No Onion & Garlic / Swaminarayan / Jain Catering">
                No Onion &amp; Garlic / Swaminarayan / Jain Catering
              </option>
              <option value="Birthday / Anniversary Celebration">
                Birthday / Anniversary Celebration
              </option>
              <option value="General Inquiry">General Inquiry</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="guests"
              className="block text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#555555] dark:text-[#A8A194] font-sans mb-1.5"
            >
              NUMBER OF GUESTS
            </label>
            <select
              id="guests"
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              className="w-full bg-[#FAF8F5] dark:bg-[#12100D] border border-[#E6E0D6] dark:border-[#2C261D] rounded-xl px-4 py-3.5 text-xs sm:text-sm text-[#1A1A1A] dark:text-[#F5F1EB] focus:outline-none focus:border-[#9B7B34] dark:focus:border-[#D4AF37] focus:bg-white dark:focus:bg-[#161310] transition-all duration-200 cursor-pointer"
            >
              <option value="1–2 Guests">1–2 Guests</option>
              <option value="2–4 Guests">2–4 Guests</option>
              <option value="5–10 Guests">5–10 Guests</option>
              <option value="11–25 Guests">11–25 Guests</option>
              <option value="26–50 Guests">26–50 Guests</option>
              <option value="51–80 Guests (Full Banquet Suite)">51–80 Guests (Full Banquet Suite)</option>
              <option value="80–150 Guests (UK Outdoor Catering)">80–150 Guests (UK Outdoor Catering)</option>
              <option value="150+ Guests (Grand Outdoor Feast)">150+ Guests (Grand Outdoor Feast)</option>
            </select>
          </div>
        </div>

        {/* Row 4: Message & Dietary Requirements */}
        <div>
          <label
            htmlFor="message"
            className="block text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#555555] dark:text-[#A8A194] font-sans mb-1.5"
          >
            MESSAGE &amp; DIETARY REQUIREMENTS
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Share your requirements with us — preferred timings, whether dedicated Jain / Swaminarayan preparation is needed, or special celebration details..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-[#FAF8F5] dark:bg-[#12100D] border border-[#E6E0D6] dark:border-[#2C261D] rounded-xl px-4 py-3.5 text-xs sm:text-sm text-[#1A1A1A] dark:text-[#F5F1EB] placeholder-[#A8A29E] dark:placeholder-[#666] focus:outline-none focus:border-[#9B7B34] dark:focus:border-[#D4AF37] focus:bg-white dark:focus:bg-[#161310] focus:ring-1 focus:ring-[#9B7B34] transition-all duration-200 resize-none"
          />
        </div>

        {/* Confirmation Banner */}
        {isSubmitted && (
          <div className="p-4 bg-[#ECFDF5] dark:bg-[#064E3B]/40 border border-[#A7F3D0] dark:border-[#059669]/50 rounded-xl text-xs sm:text-sm text-[#065F46] dark:text-[#A7F3D0] flex items-center gap-3 animate-fade-in">
            <CheckCircle2 className="w-5 h-5 text-[#059669] dark:text-[#34D399] shrink-0" />
            <div>
              <p className="font-bold">Thank you for your message!</p>
              <p className="text-xs text-[#065F46]/90 dark:text-[#A7F3D0]/90 mt-0.5">
                Our reservations team has received your inquiry and will contact you promptly.
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
          <span>{isSubmitting ? "TRANSMITTING INQUIRY..." : "SEND MESSAGE"}</span>
          <span className="text-[#C5A880] dark:text-[#F5F1EB] group-hover:translate-x-1.5 transition-transform duration-200 text-sm">
            &#9655;
          </span>
        </button>
      </form>
    </div>
  );
}
