"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Users, CheckCircle2, ArrowRight } from "lucide-react";

export function BanquetingInquiry() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
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
        subject: "",
        message: "",
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section className="relative w-full bg-[#F5F1EB]/60 py-16 sm:py-20 lg:py-24">
      {/* 1400px Strict Container */}
      <div
        className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10"
        style={{ maxWidth: "1400px" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Card: Leicester Royal Hall & Direct Inquiries */}
          <div className="lg:col-span-5 bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 lg:p-10 border border-[#EBE6DC] shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between">
            <div>
              {/* Eyebrow */}
              <div className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#9B7B34] font-sans">
                LEICESTER ROYAL HALL
              </div>

              {/* Title */}
              <h2 className="font-playfair text-2xl sm:text-3xl lg:text-[34px] font-semibold text-[#1A1A1A] tracking-tight mt-1.5 leading-tight">
                Banqueting &amp; Direct Inquiries
              </h2>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#555555] font-sans mt-2.5 leading-relaxed">
                Connect directly with our banqueting team for weddings, birthdays, baby showers, or
                multi-generational celebrations.
              </p>

              {/* Contact Info List */}
              <div className="mt-8 space-y-6">
                {/* Item 1: Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F5F1EB] border border-[#E8E2D5] flex items-center justify-center shrink-0 text-[#8C6E2E]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-[#666666] font-sans">
                      ADDRESS
                    </div>
                    <div className="text-xs sm:text-[13.5px] font-semibold text-[#1A1A1A] mt-0.5 leading-snug">
                      209 Catherine St, Leicester LE4 6GE, United Kingdom
                    </div>
                  </div>
                </div>

                {/* Item 2: Phone Desk */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F5F1EB] border border-[#E8E2D5] flex items-center justify-center shrink-0 text-[#8C6E2E]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-[#666666] font-sans">
                      PHONE DESK
                    </div>
                    <a
                      href="tel:+01165070296"
                      className="text-xs sm:text-[13.5px] font-semibold text-[#1A1A1A] hover:text-[#9B7B34] transition-colors mt-0.5 inline-block leading-snug"
                    >
                      +0116 507 0296
                    </a>
                  </div>
                </div>

                {/* Item 3: Capacity */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F5F1EB] border border-[#E8E2D5] flex items-center justify-center shrink-0 text-[#8C6E2E]">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-[#666666] font-sans">
                      CAPACITY
                    </div>
                    <div className="text-xs sm:text-[13.5px] font-semibold text-[#1A1A1A] mt-0.5 leading-snug">
                      Seated dining up to 200 guests with private bar
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Preview Snippet */}
            <div className="mt-8 pt-6 border-t border-[#F0EBE3]">
              <div className="relative w-full h-[160px] sm:h-[180px] rounded-2xl overflow-hidden border border-[#E8E2D5] bg-[#EFEBE4]">
                <iframe
                  title="The Grand Maharaja Location Map"
                  src="https://maps.google.com/maps?q=The+Grand+Maharaja,+209+Catherine+St,+Leicester+LE4+6GE&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter saturate-90 contrast-[0.95]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Floating Map Pin Badge */}
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-[#E0D9CD] shadow-sm flex items-center gap-1.5 pointer-events-none">
                  <MapPin className="w-3.5 h-3.5 text-[#9B7B34]" />
                  <span className="text-[11px] font-semibold text-[#1A1A1A] font-sans">
                    Catherine Street, Leicester
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card: Send a Banquet or Dining Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 lg:p-10 border border-[#EBE6DC] shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between">
            <div>
              {/* Eyebrow */}
              <div className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#9B7B34] font-sans">
                GET IN TOUCH
              </div>

              {/* Title */}
              <h2 className="font-playfair text-2xl sm:text-3xl lg:text-[34px] font-semibold text-[#1A1A1A] tracking-tight mt-1.5 leading-tight">
                Send a Banquet or Dining Inquiry
              </h2>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#555555] font-sans mt-2.5 leading-relaxed">
                We love hearing from you! Our team will respond swiftly with customized vegetarian
                catering menus and availability.
              </p>

              {/* Form Element */}
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                {/* Row 1: Full Name & Email Address */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#555555] font-sans mb-1.5"
                    >
                      FULL NAME *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      placeholder="Mr / Mrs Patel"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#E6E0D6] rounded-xl px-4 py-3.5 text-xs sm:text-sm text-[#1A1A1A] placeholder-[#A8A29E] focus:outline-none focus:border-[#9B7B34] focus:bg-white focus:ring-1 focus:ring-[#9B7B34] transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#555555] font-sans mb-1.5"
                    >
                      EMAIL ADDRESS *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="contact@domain.co.uk"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#E6E0D6] rounded-xl px-4 py-3.5 text-xs sm:text-sm text-[#1A1A1A] placeholder-[#A8A29E] focus:outline-none focus:border-[#9B7B34] focus:bg-white focus:ring-1 focus:ring-[#9B7B34] transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Row 2: Contact Number & Inquiry Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#555555] font-sans mb-1.5"
                    >
                      CONTACT NUMBER *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="+0116..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#E6E0D6] rounded-xl px-4 py-3.5 text-xs sm:text-sm text-[#1A1A1A] placeholder-[#A8A29E] focus:outline-none focus:border-[#9B7B34] focus:bg-white focus:ring-1 focus:ring-[#9B7B34] transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#555555] font-sans mb-1.5"
                    >
                      INQUIRY SUBJECT
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="e.g. Wedding Reception 120 Pax"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#E6E0D6] rounded-xl px-4 py-3.5 text-xs sm:text-sm text-[#1A1A1A] placeholder-[#A8A29E] focus:outline-none focus:border-[#9B7B34] focus:bg-white focus:ring-1 focus:ring-[#9B7B34] transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Row 3: Message & Dietary Requirements (Textarea) */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#555555] font-sans mb-1.5"
                  >
                    MESSAGE &amp; DIETARY REQUIREMENTS *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="Please detail your preferred dates, estimated guests, and whether strict Jain / Swaminarayan culinary preparation is required..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#E6E0D6] rounded-xl px-4 py-3.5 text-xs sm:text-sm text-[#1A1A1A] placeholder-[#A8A29E] focus:outline-none focus:border-[#9B7B34] focus:bg-white focus:ring-1 focus:ring-[#9B7B34] transition-all duration-200 resize-none"
                  />
                </div>

                {/* Submit Feedback Notification */}
                {isSubmitted && (
                  <div className="p-3.5 bg-[#ECFDF5] border border-[#A7F3D0] rounded-xl text-xs sm:text-sm text-[#065F46] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                    <span>
                      Thank you! Your banquet inquiry has been received. Our team will contact you shortly.
                    </span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1A1A1A] hover:bg-[#2A2A2A] text-[#F5F1EB] rounded-xl py-4 px-6 text-xs sm:text-[13px] font-bold uppercase tracking-[0.18em] flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-[0.99] transition-all duration-200 group disabled:opacity-75"
                >
                  <span>{isSubmitting ? "TRANSMITTING INQUIRY..." : "SUBMIT MESSAGE"}</span>
                  <span className="text-[#C5A880] group-hover:translate-x-1 transition-transform duration-200 text-sm">
                    &#9655;
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
