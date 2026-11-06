"use client";

import React from "react";
import { Clock } from "lucide-react";

export function ServiceSchedule() {
  return (
    <section className="relative w-full bg-[#F5F1EB]/60 dark:bg-[#14120E] py-16 sm:py-20 lg:py-24 transition-colors duration-200">
      {/* 1400px Strict Container */}
      <div
        className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10"
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
          {/* Card 1: Weekday Dining */}
          <div className="bg-white dark:bg-[#181511] rounded-2xl p-6 sm:p-8 border border-[#EBE6DC] dark:border-[#2C261D] shadow-[0_8px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] flex flex-col justify-between hover:shadow-md transition-all duration-200">
            <div>
              {/* Header with Green Active Dot */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#666666] dark:text-[#A8A194] font-sans">
                  WEEKDAY DINING
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] inline-block shrink-0" />
              </div>

              {/* Day Subhead */}
              <h3 className="font-playfair text-base sm:text-lg font-semibold text-[#1A1A1A] dark:text-[#F5F1EB] mt-1.5">
                Monday, Tuesday &amp; Thursday
              </h3>

              {/* Big Timing */}
              <div className="font-playfair text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#1A1A1A] dark:text-[#F5F1EB] my-6 sm:my-8 tracking-tight">
                12:00 &ndash; 22:00
              </div>
            </div>

            {/* Service Notes Footer */}
            <div className="pt-4 border-t border-[#F0EBE3] dark:border-[#221D16] space-y-1">
              <p className="text-xs sm:text-[13px] font-semibold text-[#1A1A1A] dark:text-[#F5F1EB]">
                Lunch &amp; Royal Dinner Service
              </p>
              <p className="text-xs text-[#666666] dark:text-[#A0988A]">
                Full &Agrave; La Carte &amp; Authentic Thalis
              </p>
              <p className="text-xs text-[#8C6E2E] dark:text-[#D4AF37] font-medium pt-0.5">
                Last Seating: 21:30
              </p>
            </div>
          </div>

          {/* Card 2: Midweek Rest (Wednesday Closed) */}
          <div className="bg-white dark:bg-[#181511] rounded-2xl p-6 sm:p-8 border border-[#EBE6DC] dark:border-[#2C261D] shadow-[0_8px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] flex flex-col justify-between hover:shadow-md transition-all duration-200">
            <div>
              {/* Header with Red REST DAY Badge */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#B91C1C] dark:text-[#F87171] font-sans">
                  MIDWEEK REST
                </span>
                <span className="bg-[#FEE2E2] dark:bg-[#7F1D1D]/30 text-[#B91C1C] dark:text-[#FCA5A5] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-transparent dark:border-[#7F1D1D]/50">
                  REST DAY
                </span>
              </div>

              {/* Day Subhead */}
              <h3 className="font-playfair text-base sm:text-lg font-semibold text-[#1A1A1A] dark:text-[#F5F1EB] mt-1.5">
                Wednesday
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
                Private Banquets Available On Request
              </p>
            </div>
          </div>

          {/* Card 3: Weekend Feasts */}
          <div className="bg-white dark:bg-[#181511] rounded-2xl p-6 sm:p-8 border border-[#EBE6DC] dark:border-[#2C261D] shadow-[0_8px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] flex flex-col justify-between hover:shadow-md transition-all duration-200">
            <div>
              {/* Header with Gold/Amber Dot */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#9B7B34] dark:text-[#D4AF37] font-sans">
                  WEEKEND FEASTS
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] inline-block shrink-0" />
              </div>

              {/* Day Subhead */}
              <h3 className="font-playfair text-base sm:text-lg font-semibold text-[#1A1A1A] dark:text-[#F5F1EB] mt-1.5">
                Friday to Sunday
              </h3>

              {/* Big Timing */}
              <div className="font-playfair text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#1A1A1A] dark:text-[#F5F1EB] my-6 sm:my-8 tracking-tight">
                12:00 &ndash; 22:00
              </div>
            </div>

            {/* Service Notes Footer */}
            <div className="pt-4 border-t border-[#F0EBE3] dark:border-[#221D16] space-y-1">
              <p className="text-xs sm:text-[13px] font-semibold text-[#1A1A1A] dark:text-[#F5F1EB]">
                Weekend Celebratory Feasts
              </p>
              <p className="text-xs text-[#666666] dark:text-[#A0988A]">
                Live Ambiance &amp; Multi-generational Family Tables
              </p>
              <p className="text-xs text-[#8C6E2E] dark:text-[#D4AF37] font-medium pt-0.5">
                Prior Booking Strongly Recommended
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSchedule;
