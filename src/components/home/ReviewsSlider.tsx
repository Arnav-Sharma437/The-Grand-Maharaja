"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Star, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

// Authentic Google Reviews from The Grand Maharaja Leicester (https://thegrandmaharaja.co.uk)
const REVIEWS_DATA = [
  {
    id: 1,
    name: "Megha Patel",
    time: "1 year ago",
    stars: 5,
    quote:
      "Highly satisfied with tasty Indian food and the atmosphere is so cozy and inviting, it's the perfect place for a relaxing evening.",
  },
  {
    id: 2,
    name: "Animesh Patel",
    time: "1 year ago",
    stars: 5,
    quote:
      "Wonderful ambience and great service. We ordered crispy bhajia, Dahi Puri and chilli paneer along with Punjabi food which was great match up to the taste of India.",
  },
  {
    id: 3,
    name: "Khushi Shah",
    time: "1 year ago",
    stars: 5,
    quote:
      "The food was lovely! The taste was amazing and all the staff were really friendly and made sure that we had a wonderful royal dining experience.",
  },
  {
    id: 4,
    name: "Jogadiya Rahul",
    time: "1 year ago",
    stars: 5,
    quote:
      "Fantastic atmosphere, food was excellent. Friendly staff members and catered to all our needs. Definitely recommend everyone to try this restaurant in Leicester!",
  },
  {
    id: 5,
    name: "Naina Kevadiya",
    time: "1 year ago",
    stars: 5,
    quote:
      "To be honest, in all around Leicester and London area never had that original taste of food, also services are excellent. Love the peaceful atmosphere, highly recommend!",
  },
  {
    id: 6,
    name: "Rahul Jogadiya",
    time: "1 year ago",
    stars: 5,
    quote:
      "Great service, good choice of authentic vegetarian dishes. Very reasonable prices and welcoming royal hospitality.",
  },
  {
    id: 7,
    name: "Dipikaben Satish",
    time: "1 year ago",
    stars: 5,
    quote:
      "I love the place. Truly wonderful authentic Indian flavours, serene peaceful ambiance, and welcoming hospitality.",
  },
  {
    id: 8,
    name: "Priyesh Shah",
    time: "8 months ago",
    stars: 5,
    quote:
      "Unbelievable quality of pure vegetarian food in Leicester! The paneer dishes and freshly baked naan were outstanding. Definitely our new favorite spot.",
  },
];

// Direct Google Review link for The Grand Maharaja Leicester (Place ID: ChIJWdc0bABhd0gR5zOpdTZqyjI)
const GOOGLE_REVIEW_URL =
  "https://search.google.com/local/writereview?placeid=ChIJWdc0bABhd0gR5zOpdTZqyjI";

export function ReviewsSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Check scroll positions for button states & indicators
  const updateScrollButtons = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // Calculate approximate active page/index
    const cardWidth = 320; // approximate card + gap width
    const currentIndex = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(currentIndex, REVIEWS_DATA.length - 1));
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateScrollButtons, { passive: true });
    updateScrollButtons();

    return () => {
      el.removeEventListener("scroll", updateScrollButtons);
    };
  }, [updateScrollButtons]);

  // Smooth scroll handler
  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.querySelector("div[data-card]")?.clientWidth || 320;
    const gap = 20;
    const scrollAmount = (cardWidth + gap) * (direction === "left" ? -1 : 1);

    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  // Scroll to specific index via dot pagination
  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cards = container.querySelectorAll("div[data-card]");
    if (cards[index]) {
      (cards[index] as HTMLElement).scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  // Subtle auto-scroll every 6 seconds if not paused by user
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      if (!scrollRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollLeft >= scrollWidth - clientWidth - 20) {
        // Reset smoothly to beginning
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scroll("right");
      }
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* 1400px Strict Container */}
      <div
        className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10"
        style={{ maxWidth: "1400px" }}
      >
        {/* Section Header: Title & Google Review Badge */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 sm:mb-12">
          {/* Left Column: Eyebrow, Title & Subtitle */}
          <div>
            <div className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#9B7B34] font-sans">
              WHAT OUR CUSTOMERS SAY
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#1A1A1A] tracking-tight mt-1.5">
              Royal Dining Experiences
            </h2>
            <p className="text-xs sm:text-sm text-[#555555] font-sans mt-2 max-w-xl leading-relaxed">
              Verified real-time dining impressions &amp; love from our guests on Google
            </p>
          </div>

          {/* Right Column: Google Review Pill Badge & Slider Arrows */}
          <div className="flex items-center gap-4 shrink-0">
            {/* Google Review Badge */}
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-[#E8E2D5] rounded-full px-5 py-3 shadow-[0_4px_16px_rgba(0,0,0,0.03)] inline-flex items-center gap-3.5 hover:border-[#D4C3A3] hover:shadow-md transition-all duration-200 group"
              title="Read all reviews and review The Grand Maharaja on Google"
            >
              {/* Google 4-Color 'G' Logo */}
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
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
              </div>

              {/* Stars & Text */}
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center gap-0.5 text-[#E5A118]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#E5A118] text-[#E5A118]" />
                    ))}
                  </div>
                  <span className="font-bold text-sm text-[#1A1A1A] font-sans">4.4 / 5</span>
                </div>
                <div className="text-[11px] sm:text-xs text-[#555555] font-sans flex items-center gap-1 mt-0.5">
                  <span>Based on 71+ Google Reviews</span>
                  <span className="text-[#888888]">&bull;</span>
                  <span className="font-medium text-[#1A1A1A] group-hover:text-[#9B7B34] transition-colors inline-flex items-center gap-0.5">
                    Review us{" "}
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </a>

            {/* Prev / Next Slider Buttons */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                aria-label="Previous reviews"
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 ${
                  canScrollLeft
                    ? "border-[#E8E2D5] bg-white text-[#1A1A1A] hover:bg-[#F5F1EB] hover:border-[#9B7B34]"
                    : "border-[#ECE7DE] bg-white text-[#CCCCCC] cursor-not-allowed opacity-50"
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                aria-label="Next reviews"
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 ${
                  canScrollRight
                    ? "border-[#E8E2D5] bg-white text-[#1A1A1A] hover:bg-[#F5F1EB] hover:border-[#9B7B34]"
                    : "border-[#ECE7DE] bg-white text-[#CCCCCC] cursor-not-allowed opacity-50"
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel / Slider Cards Container */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex items-stretch gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 pt-1 px-1 -mx-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {REVIEWS_DATA.map((review) => (
            <div
              key={review.id}
              data-card
              className="snap-start shrink-0 w-[85vw] sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] xl:w-[calc(25%-15px)] bg-[#FAF8F5] rounded-2xl p-6 sm:p-7 border border-[#EFEBE4] shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:border-[#DFD7C7] hover:shadow-md transition-all duration-300"
            >
              <div>
                {/* Top Row: 5 Amber Stars & Relative Date */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-0.5 text-[#E5A118]">
                    {[...Array(review.stars)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#E5A118] text-[#E5A118]" />
                    ))}
                  </div>
                  <span className="text-xs text-[#999999] font-sans">{review.time}</span>
                </div>

                {/* Review Quote Body */}
                <blockquote className="text-[13px] sm:text-sm text-[#4A453E] leading-[1.65] font-sans my-5">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
              </div>

              {/* Author Details & Verified Google Badge */}
              <div className="pt-4 mt-auto">
                <h4 className="font-playfair text-base sm:text-[17px] font-semibold text-[#1A1A1A]">
                  {review.name}
                </h4>
                <div className="flex items-center gap-1.5 mt-1 text-[11.5px] text-[#059669] font-medium font-sans">
                  {/* Google Verified Checkmark SVG (Filled Green Circle with White Checkmark) */}
                  <svg
                    className="w-3.5 h-3.5 fill-[#059669] text-white shrink-0"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm3.707-9.293a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Verified Google Review</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Pagination Dots & Mobile Navigation Controls */}
        <div className="flex items-center justify-between pt-6 sm:pt-8 border-t border-[#F0EBE3] mt-4">
          {/* Direct Link to the restaurant's reviews on original website & Google */}
          <div className="flex items-center gap-3 text-xs text-[#666666]">
            <span>Read more reviews on</span>
            <a
              href="https://thegrandmaharaja.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8C6E2E] hover:underline font-medium inline-flex items-center gap-1"
            >
              thegrandmaharaja.co.uk
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center gap-1.5">
            {REVIEWS_DATA.slice(0, Math.ceil(REVIEWS_DATA.length / 2) + 1).map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                aria-label={`Scroll to review slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === i ? "w-6 bg-[#9B7B34]" : "w-2 bg-[#DED6C7] hover:bg-[#BDB09B]"
                }`}
              />
            ))}
          </div>

          {/* Mobile Arrows (visible on small screens) */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Previous reviews"
              className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                canScrollLeft
                  ? "border-[#E8E2D5] bg-white text-[#1A1A1A]"
                  : "border-[#ECE7DE] bg-white text-[#CCCCCC] opacity-50"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Next reviews"
              className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                canScrollRight
                  ? "border-[#E8E2D5] bg-white text-[#1A1A1A]"
                  : "border-[#ECE7DE] bg-white text-[#CCCCCC] opacity-50"
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
