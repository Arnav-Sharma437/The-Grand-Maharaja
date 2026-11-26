"use client";

import React from "react";
import { Clock } from "lucide-react";
import { RoyalBackgroundGlow } from "@/components/ui/RoyalBackgroundGlow";

export function ServiceSchedule() {
  return (
    <section className="relative w-full bg-[#F5F1EB]/60 dark:bg-[#14120E] py-16 sm:py-20 lg:py-24 overflow-hidden transition-colors duration-200">
      {/* Live Royal Background Effects */}
      <RoyalBackgroundGlow variant="warm" particleCount={28} mandalaPosition="right" />

      {/* 1400px Strict Container */}
      <div
        className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10"
        style={{ maxWidth: "1400px" }}
      >
        {/* Section Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#9B7B34] dark:text-[#D4AF37]">
              <Clock className="w-3.5 h-3.5" />
              <span>ROYAL HOSPITALITY</span>
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#1A1A1A] dark:text-[#F5F1EB] tracking-tight mt-1.5">
              Opening Hours &amp; Service Schedule
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#555555] dark:text-[#A0988A] max-w-md leading-relaxed font-sans">
            Please note our Wednesday kitchen sanctum closure to prepare freshly made spices and
            maintain ceremonial culinary standards.
          </p>
        </div>

        {/* 3 Schedule Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* Card 1: Regular Dining */}
          <div className="card-hover-elevate bg-white dark:bg-[#181511] rounded-2xl p-6 sm:p-8 border border-[#EBE6DC] dark:border-[#2C261D] shadow-[0_8px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:border-[#9B7B34]/60 hover:shadow-xl flex flex-col justify-between transition-all duration-300 group cursor-default">
            <div>
              {/* Header with Green Active Dot */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#666666] dark:text-[#A8A194] font-sans">
                  REGULAR DINING
                </span>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]"></span>
                </span>
              </div>

              {/* Day Subhead */}
              <h3 className="font-playfair text-base sm:text-lg font-semibold text-[#1A1A1A] dark:text-[#F5F1EB] group-hover:text-[#9B7B34] dark:group-hover:text-[#D4AF37] transition-colors mt-1.5">
                Thu, Fri, Sun, Mon, Tue
              </h3>

              {/* Big Timing */}
              <div className="font-playfair text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#1A1A1A] dark:text-[#F5F1EB] my-6 sm:my-8 tracking-tight">
                12:00 &ndash; 22:00
              </div>
            </div>

            {/* Service Notes Footer */}
            <div className="pt-4 border-t border-[#F0EBE3] dark:border-[#221D16] space-y-1">
              <p className="text-xs sm:text-[13px] font-semibold text-[#1A1A1A] dark:text-[#F5F1EB]">
                12:00 PM &ndash; 10:00 PM
              </p>
              <p className="text-xs text-[#666666] dark:text-[#A0988A]">
                Lunch, Evening Feasts &amp; Royal Sweets
              </p>
              <p className="text-xs text-[#8C6E2E] dark:text-[#D4AF37] font-medium pt-0.5">
                Last Seating: 21:30
              </p>
            </div>
          </div>

          {/* Card 2: Saturday Late Night */}
          <div className="card-hover-elevate bg-white dark:bg-[#181511] rounded-2xl p-6 sm:p-8 border border-[#9B7B34]/40 dark:border-[#D4AF37]/40 shadow-[0_8px_30px_rgba(155,123,52,0.08)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-[#9B7B34] hover:shadow-2xl flex flex-col justify-between transition-all duration-300 group cursor-default ring-1 ring-[#D4AF37]/20">
            <div>
              {/* Header with Gold Late-Night Badge */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#9B7B34] dark:text-[#D4AF37] font-sans">
                  SATURDAY LATE NIGHT
                </span>
                <span className="bg-[#FAF4E6] dark:bg-[#D4AF37]/15 text-[#8C6E2E] dark:text-[#F3E5AB] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-[#D4AF37]/30 transition-transform duration-200 group-hover:scale-105">
                  1 HOUR EXTRA
                </span>
              </div>

              {/* Day Subhead */}
              <h3 className="font-playfair text-base sm:text-lg font-semibold text-[#1A1A1A] dark:text-[#F5F1EB] group-hover:text-[#9B7B34] dark:group-hover:text-[#D4AF37] transition-colors mt-1.5">
                Every Saturday
              </h3>

              {/* Big Timing */}
              <div className="font-playfair text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#8C6E2E] dark:text-[#D4AF37] my-6 sm:my-8 tracking-tight">
                12:00 &ndash; 23:00
              </div>
            </div>

            {/* Service Notes Footer */}
            <div className="pt-4 border-t border-[#F0EBE3] dark:border-[#221D16] space-y-1">
              <p className="text-xs sm:text-[13px] font-semibold text-[#1A1A1A] dark:text-[#F5F1EB]">
                12:00 PM &ndash; 11:00 PM
              </p>
              <p className="text-xs text-[#666666] dark:text-[#A0988A]">
                Extended Weekend Dining &amp; Cocktail Ambiance
              </p>
              <p className="text-xs text-[#8C6E2E] dark:text-[#D4AF37] font-medium pt-0.5">
                Last Seating: 22:15
              </p>
            </div>
          </div>

          {/* Card 3: Midweek Rest (Wednesday Closed) */}
          <div className="card-hover-elevate bg-white dark:bg-[#181511] rounded-2xl p-6 sm:p-8 border border-[#EBE6DC] dark:border-[#2C261D] shadow-[0_8px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:border-[#B91C1C]/40 hover:shadow-xl flex flex-col justify-between transition-all duration-300 group cursor-default">
            <div>
              {/* Header with Red REST DAY Badge */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#B91C1C] dark:text-[#F87171] font-sans">
                  WEEKLY REST
                </span>
                <span className="bg-[#FEE2E2] dark:bg-[#7F1D1D]/30 text-[#B91C1C] dark:text-[#FCA5A5] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-transparent dark:border-[#7F1D1D]/50 transition-transform duration-200 group-hover:scale-105">
                  CLOSED
                </span>
              </div>

              {/* Day Subhead */}
              <h3 className="font-playfair text-base sm:text-lg font-semibold text-[#1A1A1A] dark:text-[#F5F1EB] mt-1.5">
                Every Wednesday
              </h3>

              {/* Big Status */}
              <div className="font-playfair text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#4A4A4A] dark:text-[#D5CFC5] my-6 sm:my-8 tracking-wide">
                CLOSED
              </div>
            </div>

            {/* Service Notes Footer */}
            <div className="pt-4 border-t border-[#F0EBE3] dark:border-[#221D16] space-y-1">
              <p className="text-xs sm:text-[13px] font-semibold text-[#1A1A1A] dark:text-[#F5F1EB]">
                Weekly Kitchen Sanctum &amp; Prep
              </p>
              <p className="text-xs text-[#666666] dark:text-[#A0988A]">
                Deep cleansing &amp; handcrafted masala preparation
              </p>
              <p className="text-xs text-[#8C6E2E] dark:text-[#D4AF37] font-medium pt-0.5">
                Private Banquet Hire on Request
              </p>
            </div>
          </div>
        </div>

        {/* 7-Day Google Weekly Breakdown Strip */}
        <div className="mt-8 p-5 sm:p-6 bg-white dark:bg-[#181511] rounded-2xl border border-[#EBE6DC] dark:border-[#2C261D] shadow-sm">
          <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#8C6E2E] dark:text-[#D4AF37] mb-3 text-center sm:text-left">
            OFFICIAL GOOGLE OPERATING HOURS
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 text-center">
            <div className="p-2.5 rounded-xl bg-[#FAF8F5] dark:bg-[#13110E] border border-[#F0EBE3] dark:border-[#221D16]">
              <span className="block text-xs font-bold text-[#1A1A1A] dark:text-[#F5F1EB]">Thursday</span>
              <span className="block text-xs text-[#666] dark:text-[#A8A194] mt-0.5">12&ndash;10 PM</span>
            </div>
            <div className="p-2.5 rounded-xl bg-[#FAF8F5] dark:bg-[#13110E] border border-[#F0EBE3] dark:border-[#221D16]">
              <span className="block text-xs font-bold text-[#1A1A1A] dark:text-[#F5F1EB]">Friday</span>
              <span className="block text-xs text-[#666] dark:text-[#A8A194] mt-0.5">12&ndash;10 PM</span>
            </div>
            <div className="p-2.5 rounded-xl bg-[#FAF4E6] dark:bg-[#D4AF37]/10 border border-[#D4AF37]/40">
              <span className="block text-xs font-bold text-[#8C6E2E] dark:text-[#D4AF37]">Saturday</span>
              <span className="block text-xs font-bold text-[#8C6E2E] dark:text-[#F3E5AB] mt-0.5">12&ndash;11 PM</span>
            </div>
            <div className="p-2.5 rounded-xl bg-[#FAF8F5] dark:bg-[#13110E] border border-[#F0EBE3] dark:border-[#221D16]">
              <span className="block text-xs font-bold text-[#1A1A1A] dark:text-[#F5F1EB]">Sunday</span>
              <span className="block text-xs text-[#666] dark:text-[#A8A194] mt-0.5">12&ndash;10 PM</span>
            </div>
            <div className="p-2.5 rounded-xl bg-[#FAF8F5] dark:bg-[#13110E] border border-[#F0EBE3] dark:border-[#221D16]">
              <span className="block text-xs font-bold text-[#1A1A1A] dark:text-[#F5F1EB]">Monday</span>
              <span className="block text-xs text-[#666] dark:text-[#A8A194] mt-0.5">12&ndash;10 PM</span>
            </div>
            <div className="p-2.5 rounded-xl bg-[#FAF8F5] dark:bg-[#13110E] border border-[#F0EBE3] dark:border-[#221D16]">
              <span className="block text-xs font-bold text-[#1A1A1A] dark:text-[#F5F1EB]">Tuesday</span>
              <span className="block text-xs text-[#666] dark:text-[#A8A194] mt-0.5">12&ndash;10 PM</span>
            </div>
            <div className="p-2.5 rounded-xl bg-[#FEE2E2]/60 dark:bg-[#7F1D1D]/20 border border-[#EF4444]/30 col-span-2 sm:col-span-1">
              <span className="block text-xs font-bold text-[#DC2626] dark:text-[#F87171]">Wednesday</span>
              <span className="block text-xs font-semibold text-[#DC2626] dark:text-[#FCA5A5] mt-0.5">Closed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSchedule;
