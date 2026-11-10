"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Heart,
  Eye,
  ExternalLink,
  Film,
  Camera,
} from "lucide-react";
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

export type MediaCategory = "all" | "reels" | "dining" | "banquets" | "culinary";

export interface GalleryItem {
  id: string;
  type: "reel" | "photo";
  title: string;
  category: "dining" | "banquets" | "culinary";
  imageUrl: string;
  videoUrl?: string;
  caption: string;
  likes?: string;
  views?: string;
  instagramUrl?: string;
}

const INITIAL_MEDIA_ITEMS: GalleryItem[] = [
  // ── Instagram Video Reels ──
  {
    id: "reel-1",
    type: "reel",
    title: "Sizzling Royal Tandoori Platter",
    videoUrl: "/images/gallery/3594037010001002071.mp4",
    imageUrl: "/images/gallery/3594037010001002071.jpg",
    category: "culinary",
    caption:
      "Artisanal clay-oven marinated paneer skewers and crisp spiced bell peppers sizzling to perfection.",
    likes: "2.4K",
    views: "18.5K",
    instagramUrl: "https://www.instagram.com/thegrandmaharaja?cplk=amk1bTA4cXRwNjBy",
  },
  {
    id: "reel-2",
    type: "reel",
    title: "Grand Banquet Hall Ambience",
    videoUrl: "/images/gallery/3594758319022447585.mp4",
    imageUrl: "/images/gallery/3594758319022447585.jpg",
    category: "banquets",
    caption:
      "Opulent private banquet suite prepared for a royal celebration with gold drapery and warm crystal chandeliers.",
    likes: "1.9K",
    views: "14.2K",
    instagramUrl: "https://www.instagram.com/thegrandmaharaja?cplk=amk1bTA4cXRwNjBy",
  },
  {
    id: "reel-3",
    type: "reel",
    title: "Royal Street Gourmet Chaat Artistry",
    videoUrl: "/images/gallery/3600488990898464452.mp4",
    imageUrl: "/images/gallery/3600488990898464452.jpg",
    category: "culinary",
    caption:
      "Handcrafted crisp papdis layered with spiced potatoes, chilled creamy curd, and ruby pomegranate jewels.",
    likes: "3.1K",
    views: "22.8K",
    instagramUrl: "https://www.instagram.com/thegrandmaharaja?cplk=amk1bTA4cXRwNjBy",
  },
  {
    id: "reel-4",
    type: "reel",
    title: "Evening Lights & Golden Backlit Bar",
    videoUrl: "/images/gallery/3603476693436898983.mp4",
    imageUrl: "/images/gallery/3603476693436898983.jpg",
    category: "dining",
    caption:
      "The majestic golden amber glow of our signature bar at dusk in Leicester.",
    likes: "1.8K",
    views: "11.6K",
    instagramUrl: "https://www.instagram.com/thegrandmaharaja?cplk=amk1bTA4cXRwNjBy",
  },
  {
    id: "reel-5",
    type: "reel",
    title: "Chef's Gujarati Thali Presentation",
    videoUrl: "/images/gallery/3605031425192442853.mp4",
    imageUrl: "/images/gallery/3605031425192442853.jpg",
    category: "culinary",
    caption:
      "Authentic Gujarati vegetarian feast featuring slow-simmered dal, fresh phulkas, and fragrant kadhi.",
    likes: "4.2K",
    views: "31.0K",
    instagramUrl: "https://www.instagram.com/thegrandmaharaja?cplk=amk1bTA4cXRwNjBy",
  },
  {
    id: "reel-6",
    type: "reel",
    title: "Wedding Celebration Setup",
    videoUrl: "/images/gallery/3615254849588118892.mp4",
    imageUrl: "/images/gallery/3615254849588118892.jpg",
    category: "banquets",
    caption:
      "A grand royal wedding reception hosted in our 200-guest luxury banquet suite.",
    likes: "2.7K",
    views: "19.3K",
    instagramUrl: "https://www.instagram.com/thegrandmaharaja?cplk=amk1bTA4cXRwNjBy",
  },
  {
    id: "reel-7",
    type: "reel",
    title: "Fresh Artisanal Breads from the Hearth",
    videoUrl: "/images/gallery/3616392538970423008.mp4",
    imageUrl: "/images/gallery/3616392538970423008.jpg",
    category: "culinary",
    caption:
      "Fluffy buttery tandoori naans baked fresh inside the live charcoal clay oven.",
    likes: "2.3K",
    views: "16.7K",
    instagramUrl: "https://www.instagram.com/thegrandmaharaja?cplk=amk1bTA4cXRwNjBy",
  },
  {
    id: "reel-8",
    type: "reel",
    title: "Warm Saffron Gulab Jamun & Kulfi",
    videoUrl: "/images/gallery/3618597523330236227.mp4",
    imageUrl: "/images/gallery/3618597523330236227.jpg",
    category: "culinary",
    caption:
      "Melt-in-the-mouth slow-simmered milk dumplings paired with handmade pistachio kulfi.",
    likes: "3.5K",
    views: "27.4K",
    instagramUrl: "https://www.instagram.com/thegrandmaharaja?cplk=amk1bTA4cXRwNjBy",
  },
  {
    id: "reel-9",
    type: "reel",
    title: "Imperial Interior & Chandeliers",
    videoUrl: "/images/gallery/3619333221809302603.mp4",
    imageUrl: "/images/gallery/3619333221809302603.jpg",
    category: "dining",
    caption:
      "Step into an oasis of regal gold ceilings, crystal chandeliers, and opulent hospitality.",
    likes: "1.6K",
    views: "12.0K",
    instagramUrl: "https://www.instagram.com/thegrandmaharaja?cplk=amk1bTA4cXRwNjBy",
  },
  {
    id: "reel-10",
    type: "reel",
    title: "Silver-Service Outdoor Catering Spread",
    videoUrl: "/images/gallery/3621427941054134892.mp4",
    imageUrl: "/images/gallery/3621427941054134892.jpg",
    category: "banquets",
    caption:
      "Full silver-service outdoor catering delivered across the UK with dedicated Jain sanctum chefs.",
    likes: "2.9K",
    views: "24.1K",
    instagramUrl: "https://www.instagram.com/thegrandmaharaja?cplk=amk1bTA4cXRwNjBy",
  },
  {
    id: "reel-11",
    type: "reel",
    title: "Royal Signature Mocktail Crafting",
    videoUrl: "/images/gallery/3622322167421866699.mp4",
    imageUrl: "/images/gallery/3622322167421866699.jpg",
    category: "dining",
    caption:
      "Exotic passionfruit and botanical mocktails prepared with fresh fruit garnishes and dry ice mist.",
    likes: "2.0K",
    views: "15.8K",
    instagramUrl: "https://www.instagram.com/thegrandmaharaja?cplk=amk1bTA4cXRwNjBy",
  },
  {
    id: "reel-12",
    type: "reel",
    title: "The Grand Maharaja Walkthrough",
    videoUrl: "/images/gallery/gallery-restaurant-video-625.mp4",
    imageUrl: "/images/gallery/gallery-dining-hall-742.jpg",
    category: "dining",
    caption:
      "A cinematic royal walkthrough of Leicester's premier pure vegetarian culinary sanctuary.",
    likes: "5.4K",
    views: "42.0K",
    instagramUrl: "https://www.instagram.com/thegrandmaharaja?cplk=amk1bTA4cXRwNjBy",
  },

  // ── High-Resolution Photographic Masterpieces ──
  {
    id: "photo-1",
    type: "photo",
    title: "Grand Gourmet Feast Spread",
    imageUrl: "/images/gallery/gallery-gourmet-feast-spread.png",
    category: "culinary",
    caption:
      "An elaborate imperial vegetarian feast featuring regional curries, fragrant biryani, and house-made chutneys.",
  },
  {
    id: "photo-2",
    type: "photo",
    title: "Regal Banquet Hall Grand Layout",
    imageUrl: "/images/banquet/banquet-royal-hall-setup.png",
    category: "banquets",
    caption:
      "Spacious luxury banquet dining room configured for grand wedding receptions and anniversary parties.",
  },
  {
    id: "photo-3",
    type: "photo",
    title: "Golden Backlit Bar & Lounge",
    imageUrl: "/images/about/about-royal-golden-backlit-bar.png",
    category: "dining",
    caption:
      "The majestic golden bar illuminated at dusk, serving signature non-alcoholic cocktails and imperial spirits.",
  },
  {
    id: "photo-4",
    type: "photo",
    title: "Luxury Dining Room & Chandeliers",
    imageUrl: "/images/banquet/banquet-luxury-dining-room.png",
    category: "dining",
    caption:
      "Intimate family dining tables adorned with warm amber lighting and regal gold trim.",
  },
  {
    id: "photo-5",
    type: "photo",
    title: "Bespoke Banquet Stage Decor",
    imageUrl: "/images/gallery/gallery-decor-741.png",
    category: "banquets",
    caption:
      "Traditional floral mandap and ceremonial decor handcrafted for private celebrations.",
  },
  {
    id: "photo-6",
    type: "photo",
    title: "Imperial Dining Hall Architecture",
    imageUrl: "/images/gallery/gallery-dining-hall-742.jpg",
    category: "dining",
    caption:
      "Expansive dining floor welcoming families and food lovers from all over Leicester and the UK.",
  },
  {
    id: "photo-7",
    type: "photo",
    title: "Sacred Spices & Condiments",
    imageUrl: "/images/about/about-royal-indian-spices-condiments.jpg",
    category: "culinary",
    caption:
      "Whole cardamom pods, star anise, saffron, and stone-ground spices selected daily for authentic depth.",
  },
  {
    id: "photo-8",
    type: "photo",
    title: "The Grand Maharaja Exterior Façade",
    imageUrl: "/images/about/about-grand-maharaja-exterior-facade.png",
    category: "dining",
    caption:
      "Our prominent restaurant landmark located at 209 Catherine St, Leicester LE4 6GE with private parking.",
  },
  {
    id: "photo-9",
    type: "photo",
    title: "Royal Gourmet Street Chaat",
    imageUrl: "/images/food/food-tgm-royal-street-chaat.jpg",
    category: "culinary",
    caption:
      "A vibrant medley of fresh Indian street gastronomy prepared with royal precision and zero compromises.",
  },
  {
    id: "photo-10",
    type: "photo",
    title: "Teal & Gold Royal Suite",
    imageUrl: "/images/banquet/banquet-teal-and-gold-dining-hall.png",
    category: "banquets",
    caption:
      "Imperial teal velvet seating paired with royal golden accents for private celebrations.",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Visuals", icon: Sparkles },
  { id: "reels", label: "Instagram Reels", icon: Film },
  { id: "dining", label: "Dining & Ambiance", icon: Camera },
  { id: "banquets", label: "Banquets & Events", icon: Sparkles },
  { id: "culinary", label: "Culinary Artistry", icon: Sparkles },
] as const;

export function GalleryExplorer() {
  const [activeCategory, setActiveCategory] = useState<MediaCategory>("all");
  const [items] = useState<GalleryItem[]>(INITIAL_MEDIA_ITEMS);

  // Modal Lightbox state for Photos
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  // Modal Reels Player state for Videos
  const [activeReel, setActiveReel] = useState<GalleryItem | null>(null);
  const [isReelMuted, setIsReelMuted] = useState(false);
  const [isReelPlaying, setIsReelPlaying] = useState(true);
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);

  // Load Instagram Embed.js script once for live embeds
  useEffect(() => {
    if (typeof window !== "undefined") {
      const scriptId = "instagram-embed-script";
      if (!document.getElementById(scriptId)) {
        const script = document.createElement("script");
        script.id = scriptId;
        script.async = true;
        script.defer = true;
        script.src = "//www.instagram.com/embed.js";
        document.body.appendChild(script);
      } else if ((window as unknown as { instgrm?: { Embeds: { process: () => void } } }).instgrm) {
        (window as unknown as { instgrm?: { Embeds: { process: () => void } } }).instgrm?.Embeds.process();
      }
    }
  }, []);

  // Filter items based on activeCategory
  const filteredItems = items.filter((item) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "reels") return item.type === "reel";
    return item.category === activeCategory;
  });

  // Photo Navigation
  const photosOnly = items.filter((item) => item.type === "photo");
  const currentPhotoIndex = activePhoto
    ? photosOnly.findIndex((p) => p.id === activePhoto.id)
    : -1;

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentPhotoIndex > 0) {
      setActivePhoto(photosOnly[currentPhotoIndex - 1]);
    } else {
      setActivePhoto(photosOnly[photosOnly.length - 1]);
    }
  };

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentPhotoIndex < photosOnly.length - 1) {
      setActivePhoto(photosOnly[currentPhotoIndex + 1]);
    } else {
      setActivePhoto(photosOnly[0]);
    }
  };

  // Keyboard controls for modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActivePhoto(null);
        setActiveReel(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      {/* ─────────────────────────────────────────────────────────────
          1. LIVE INSTAGRAM ACCOUNT HEADER & CHANNEL BAR
      ───────────────────────────────────────────────────────────── */}
      <div className="w-full bg-[#FAF8F5] dark:bg-[#14120E] border-y border-[#EBE6DC] dark:border-[#2C261D] py-6 sm:py-8 px-4 sm:px-6">
        <div
          className="max-w-[1400px] mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ maxWidth: "1400px" }}
        >
          {/* Account Profile Block */}
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full p-1 bg-gradient-to-tr from-[#F59E0B] via-[#EC4899] to-[#8B5CF6] shrink-0 shadow-md">
              <div className="w-full h-full rounded-full bg-white dark:bg-[#12100D] p-0.5 overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/branding/tgm-circular-crest-855.png"
                  alt="The Grand Maharaja Instagram Crest"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <h3 className="font-playfair text-lg sm:text-xl font-bold text-[#1A1A1A] dark:text-[#F5F1EB]">
                  thegrandmaharaja
                </h3>
                <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#0095F6] text-white text-[9px] font-bold">
                  &#10003;
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#EBE6DC] dark:bg-[#2C261D] text-[#8C6E2E] dark:text-[#D4AF37]">
                  OFFICIAL FEED
                </span>
              </div>
              <p className="text-xs text-[#666666] dark:text-[#A0988A] font-sans mt-0.5">
                The Grand Maharaja Leicester &bull; Pure Vegetarian Fine Dining &amp; Royal Banqueting
              </p>
            </div>
          </div>

          {/* Social Stats & Direct Instagram Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-[#1E1B16] border border-[#DDD4BF] dark:border-[#382F22] text-[#8C6E2E] dark:text-[#D4AF37] text-xs font-bold font-sans">
              <Film className="w-4 h-4 text-[#E1306C]" />
              <span>12 Exclusive Reels</span>
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse ml-0.5" />
            </div>

            <a
              href={SITE_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer-hover inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#E1306C] via-[#FD1D1D] to-[#F77737] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Follow @thegrandmaharaja</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. FILTER TABS (All, Instagram Reels, Dining, Banquets, Food)
      ───────────────────────────────────────────────────────────── */}
      <div
        className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pt-10 sm:pt-14 pb-8"
        style={{ maxWidth: "1400px" }}
      >
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as MediaCategory)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-[13px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#1A1A1A] text-white dark:bg-[#D4AF37] dark:text-[#12100D] shadow-md scale-105"
                    : "bg-[#F5F1EB] dark:bg-[#1A1612] text-[#666] dark:text-[#A0988A] hover:bg-[#EAE4D8] dark:hover:bg-[#262018] hover:text-[#1A1A1A] dark:hover:text-[#F5F1EB]"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#D4AF37] dark:text-[#12100D]" : ""}`} />
                <span>{cat.label}</span>
                {cat.id === "reels" && (
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse ml-0.5" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. GALLERY MASONRY & REELS GRID (Strict 1400px)
      ───────────────────────────────────────────────────────────── */}
      <div
        className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pb-20"
        style={{ maxWidth: "1400px" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
          {filteredItems.map((item) => {
            const isReel = item.type === "reel";

            return (
              <div
                key={item.id}
                className="group relative bg-[#FAF8F5] dark:bg-[#16130F] rounded-2xl overflow-hidden border border-[#E8E2D5] dark:border-[#282218] shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col"
              >
                {/* Media Container: 9:16 for Reels, 4:3 for Photos */}
                <div
                  className={`relative w-full overflow-hidden bg-black ${
                    isReel ? "aspect-[9/14]" : "aspect-[4/3]"
                  }`}
                >
                  {/* Thumbnail / Poster Image */}
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    {isReel ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#FFF] text-[10px] font-bold uppercase tracking-wider border border-white/20">
                        <InstagramIcon className="w-3 h-3 text-[#E1306C]" />
                        <span>REEL</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#FFF] text-[10px] font-bold uppercase tracking-wider border border-white/20">
                        <Camera className="w-3 h-3 text-[#D4AF37]" />
                        <span>PHOTO</span>
                      </span>
                    )}

                    {isReel && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-white/90 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full">
                        <Eye className="w-3 h-3 text-[#D4AF37]" />
                        <span>{item.views}</span>
                      </span>
                    )}
                  </div>

                  {/* Center Play Button for Reels / Zoom Icon for Photos */}
                  <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                    {isReel ? (
                      <button
                        onClick={() => {
                          setActiveReel(item);
                          setIsReelPlaying(true);
                        }}
                        className="pointer-events-auto w-14 h-14 rounded-full bg-black/60 group-hover:bg-[#8C6E2E] dark:group-hover:bg-[#D4AF37] group-hover:scale-110 text-white dark:group-hover:text-[#12100D] border-2 border-white/80 group-hover:border-transparent flex items-center justify-center transition-all duration-300 shadow-2xl"
                        aria-label={`Play ${item.title}`}
                      >
                        <Play className="w-6 h-6 ml-1 fill-current" />
                      </button>
                    ) : (
                      <button
                        onClick={() => setActivePhoto(item)}
                        className="pointer-events-auto opacity-0 group-hover:opacity-100 w-12 h-12 rounded-full bg-black/70 hover:bg-[#8C6E2E] dark:hover:bg-[#D4AF37] text-white dark:hover:text-[#12100D] border border-white/40 flex items-center justify-center transition-all duration-300 shadow-xl"
                        aria-label={`Zoom ${item.title}`}
                      >
                        <Maximize2 className="w-5 h-5" />
                      </button>
                    )}
                  </div>

                  {/* Bottom Info Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 z-10 text-white">
                    <p className="font-playfair text-sm sm:text-base font-bold line-clamp-1 drop-shadow-md">
                      {item.title}
                    </p>
                    <p className="font-sans text-[11px] text-[#DDD] line-clamp-2 mt-1 leading-snug drop-shadow-sm">
                      {item.caption}
                    </p>

                    {/* Reels Footer Metrics & Direct Instagram Link */}
                    {isReel && (
                      <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/20 text-[11px]">
                        <span className="flex items-center gap-1 text-[#E1306C] font-semibold">
                          <Heart className="w-3.5 h-3.5 fill-current" />
                          <span>{item.likes}</span>
                        </span>

                        <a
                          href={item.instagramUrl || SITE_CONFIG.social.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-white/90 hover:text-[#D4AF37] font-semibold transition-colors"
                        >
                          <span>Instagram</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Sub-actions for Photos */}
                {!isReel && (
                  <div className="p-3 bg-white dark:bg-[#16130F] flex items-center justify-between border-t border-[#E8E2D5] dark:border-[#282218]">
                    <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#8C6E2E] dark:text-[#D4AF37]">
                      {item.category}
                    </span>
                    <button
                      onClick={() => setActivePhoto(item)}
                      className="text-xs text-[#555] dark:text-[#AAA] hover:text-[#8C6E2E] dark:hover:text-[#D4AF37] font-semibold flex items-center gap-1"
                    >
                      <span>Expand View</span>
                      <Maximize2 className="w-3 h-3" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          4. FULLSCREEN REEL VIDEO PLAYER MODAL
      ───────────────────────────────────────────────────────────── */}
      {activeReel && activeReel.videoUrl && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in"
          onClick={() => setActiveReel(null)}
        >
          <div
            className="relative w-full max-w-[380px] sm:max-w-[420px] h-[85vh] sm:h-[90vh] bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/20 flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Reel Navigation Bar */}
            <div className="absolute top-0 left-0 right-0 z-20 p-4 bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#E1306C] flex items-center justify-center text-white">
                  <InstagramIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold block leading-tight">
                    thegrandmaharaja
                  </span>
                  <span className="text-[10px] text-white/70 block">
                    Leicester &bull; Royal Reel
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsReelMuted(!isReelMuted)}
                  className="p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
                  aria-label={isReelMuted ? "Unmute" : "Mute"}
                >
                  {isReelMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setActiveReel(null)}
                  className="p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
                  aria-label="Close video"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Video Player */}
            <div className="relative w-full h-full flex items-center justify-center bg-black">
              <video
                ref={modalVideoRef}
                src={activeReel.videoUrl}
                poster={activeReel.imageUrl}
                autoPlay
                loop
                playsInline
                muted={isReelMuted}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => {
                  if (modalVideoRef.current) {
                    if (isReelPlaying) {
                      modalVideoRef.current.pause();
                      setIsReelPlaying(false);
                    } else {
                      modalVideoRef.current.play();
                      setIsReelPlaying(true);
                    }
                  }
                }}
              />

              {/* Pause / Play central flash icon */}
              {!isReelPlaying && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-black/60 flex items-center justify-center text-white">
                    <Play className="w-8 h-8 ml-1 fill-current" />
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Caption & Instagram Reel Link */}
            <div className="absolute bottom-0 left-0 right-0 z-20 p-5 bg-gradient-to-t from-black/95 via-black/70 to-transparent text-white">
              <h3 className="font-playfair text-base font-bold drop-shadow-md">
                {activeReel.title}
              </h3>
              <p className="text-xs text-white/80 mt-1 line-clamp-3 leading-relaxed">
                {activeReel.caption}
              </p>

              <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs font-semibold text-white/90">
                  <span className="flex items-center gap-1 text-[#E1306C]">
                    <Heart className="w-4 h-4 fill-current" />
                    <span>{activeReel.likes}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4 text-[#D4AF37]" />
                    <span>{activeReel.views} views</span>
                  </span>
                </div>

                <a
                  href={activeReel.instagramUrl || SITE_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E1306C] hover:bg-[#C13584] text-white text-xs font-bold transition-all shadow-md"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>Open Reel</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          5. FULLSCREEN PHOTO LIGHTBOX MODAL
      ───────────────────────────────────────────────────────────── */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button */}
            <div className="w-full flex items-center justify-between pb-4 text-white">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37] block">
                  {activePhoto.category}
                </span>
                <h3 className="font-playfair text-lg sm:text-xl font-bold">
                  {activePhoto.title}
                </h3>
              </div>
              <button
                onClick={() => setActivePhoto(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main High-Res Image with Prev / Next Navigation */}
            <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-2xl overflow-hidden bg-black/50 border border-white/10 flex items-center justify-center">
              <Image
                src={activePhoto.imageUrl}
                alt={activePhoto.title}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />

              {/* Prev / Next Arrows */}
              <button
                onClick={handlePrevPhoto}
                className="absolute left-4 p-3 rounded-full bg-black/60 hover:bg-[#8C6E2E] text-white transition-all shadow-lg"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNextPhoto}
                className="absolute right-4 p-3 rounded-full bg-black/60 hover:bg-[#8C6E2E] text-white transition-all shadow-lg"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Caption & Metadata */}
            <div className="w-full pt-4 text-center">
              <p className="text-xs sm:text-sm text-[#DDD] max-w-2xl mx-auto font-sans leading-relaxed">
                {activePhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}