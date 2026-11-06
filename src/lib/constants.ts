/**
 * The Grand Maharaja - Brand & Application Constants
 * Royal Indian Vegetarian Fine Dining & Banquets
 */

export const SITE_CONFIG = {
  name: "The Grand Maharaja",
  shortName: "TGM",
  tagline: "Royal Indian Vegetarian Dining & Banquets",
  description:
    "At The Grand Maharaja, we bring royal flavours to your special occasions with an exquisite vegetarian catering and dining experience that blends timeless Indian tradition with imperial hospitality in Leicester.",
  url: "https://thegrandmaharaja.co.uk",
  locale: "en_GB",
  themeColor: "#F5F1EB",
  contact: {
    phone: "+0116 507 0296",
    displayPhone: "+0116 507 0296",
    email: "info@thegrandmaharaja.co.uk",
    address: "209 Catherine St, Leicester LE4 6GE",
    shortAddress: "209 Catherine St, Leicester",
  },
} as const;

export const BRAND_COLORS = {
  ivory: {
    DEFAULT: "#F5F1EB",
    banner: "rgba(245, 241, 235, 0.6)",
    card: "#F8F6F2",
    border: "#EBE6DC",
  },
  gold: {
    DEFAULT: "#7D6328", // Primary button gold/bronze
    accent: "#9B7B34",  // Italic headline gold
    light: "#D4AF37",
    badge: "#8C6E2E",
  },
  charcoal: {
    DEFAULT: "#1A1A1A",
    button: "#1E1B18",
    muted: "#4A4A4A",
    light: "#666666",
  },
  white: "#FFFFFF",
} as const;

export const BRAND_LOGOS = {
  masterDesktop: "/images/branding/tgm-master-logo-5120.png",
  compactMobile: "/images/branding/tgm-logo-cropped-512.png",
  circularSeal: "/images/branding/tgm-circular-crest-855.png",
  circularSealSolid: "/images/branding/tgm-circular-crest-829.png",
  goldCrest: "/images/branding/tgm-gold-logo-1600.jpeg",
  animatedPromoVideo: "/images/branding/tgm-logo-promo-video.mp4",
} as const;

export const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "MENUS", href: "/#menus" },
  { label: "BANQUETING & CATERING", href: "/#banquets" },
  { label: "ABOUT US", href: "/#about" },
  { label: "GALLERY", href: "/#gallery" },
  { label: "CONTACT", href: "/#contact" },
] as const;
