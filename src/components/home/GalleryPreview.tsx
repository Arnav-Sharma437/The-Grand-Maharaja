"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Film, ArrowRight, Play, Eye, Heart } from "lucide-react";
import { RoyalBackgroundGlow } from "@/components/ui/RoyalBackgroundGlow";
import { SITE_CONFIG } from "@/lib/constants";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
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

const FEATURED_MOMENTS = [
  {
    title: "Sizzling Royal Tandoori Platter",
    category: "Culinary Artistry",
    image: "/images/gallery/3594037010001002071.jpg",
    views: "18.5K",
    likes: "2.4K",
    isReel: true,
  },
  {
    title: "The Grand Maharaja Dining Hall",
    category: "Ambiance",
    image: "/images/gallery/gallery-dining-hall-742.jpg",
    isReel: false,
  },
  {
    title: "Royal Street Chaat Preparation",
    category: "Street Gastronomy",
    image: "/images/gallery/3600488990898464452.jpg",
    views: "22.8K",
    likes: "3.1K",
    isReel: true,
  },
  {
    title: "Golden Backlit Bar & Lounge",
    category: "Evening Ambiance",
    image: "/images/about/about-royal-golden-backlit-bar.png",
    isReel: false,
  },
];

export function GalleryPreview() {
  return (
    <section
      id="gallery"
      className="relative w-full bg-white dark:bg-[#0D0C0A] py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-[#EAE3D6] dark:border-[#262017] transition-colors duration-200"
    >
      <RoyalBackgroundGlow variant="warm" particleCount={28} showMandala={false} />

      <div
        className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10"
        style={{ maxWidth: "1400px" }}
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#8C6E2E] dark:text-[#D4AF37] font-sans mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>LIVE INSTAGRAM REELS &amp; VISUALS</span>
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] dark:text-[#F5F1EB] tracking-tight">
              Royal Gallery &amp; Live Moments
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#555] dark:text-[#A0988A] mt-2 max-w-xl leading-relaxed">
              Experience the vibrant dining halls, celebratory banquet setups, and freshly prepared
              clay-oven dishes captured live from our Leicester restaurant.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/gallery"
              className="shimmer-hover inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#8C6E2E] dark:bg-[#D4AF37] text-white dark:text-[#12100D] text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
            >
              <Film className="w-4 h-4" />
              <span>View Full Gallery (22 Items)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <a
              href={SITE_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white dark:bg-[#1E1B16] border border-[#DDD4BF] dark:border-[#382F22] text-[#8C6E2E] dark:text-[#D4AF37] hover:scale-105 transition-all shadow-xs"
              title="Follow @thegrandmaharaja on Instagram"
              aria-label="Follow on Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_MOMENTS.map((item, idx) => (
            <Link
              key={idx}
              href="/gallery"
              className="group relative rounded-2xl overflow-hidden bg-black border border-[#E8E2D5] dark:border-[#282218] shadow-md hover:shadow-2xl transition-all duration-300 aspect-[4/5] flex flex-col justify-between p-4"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30 pointer-events-none" />

              {/* Top Tag */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20">
                  {item.category}
                </span>

                {item.isReel && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-white bg-[#E1306C]/90 px-2 py-0.5 rounded-full">
                    <Film className="w-3 h-3" />
                    <span>REEL</span>
                  </span>
                )}
              </div>

              {/* Center Play Icon for Reel */}
              {item.isReel && (
                <div className="relative z-10 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-black/60 group-hover:bg-[#8C6E2E] text-white flex items-center justify-center transition-all duration-300 shadow-xl border border-white/40">
                    <Play className="w-5 h-5 ml-0.5 fill-current" />
                  </div>
                </div>
              )}

              {/* Bottom Info */}
              <div className="relative z-10 text-white">
                <h3 className="font-playfair text-sm sm:text-base font-bold line-clamp-1 drop-shadow-md">
                  {item.title}
                </h3>

                {item.isReel ? (
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/20 text-[11px] text-white/80">
                    <span className="flex items-center gap-1 text-[#E1306C]">
                      <Heart className="w-3 h-3 fill-current" />
                      <span>{item.likes}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3 text-[#D4AF37]" />
                      <span>{item.views}</span>
                    </span>
                  </div>
                ) : (
                  <span className="text-[11px] text-[#D4AF37] font-semibold mt-1 inline-block">
                    View in High Resolution &rarr;
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}