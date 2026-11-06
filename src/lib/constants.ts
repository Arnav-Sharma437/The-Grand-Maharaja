/**
 * The Grand Maharaja - Brand & Application Constants
 * Royal Indian Vegetarian Fine Dining & Banquets
 */

export const SITE_CONFIG = {
  name: "The Grand Maharaja",
  shortName: "TGM",
  tagline: "Royal Indian Vegetarian Dining & Banquets",
  description:
    "Experience the opulence of royal Indian vegetarian cuisine at The Grand Maharaja. An exquisite culinary journey crafted with authentic royal recipes and timeless elegance.",
  url: "https://thegrandmaharaja.co.uk",
  locale: "en_GB",
  themeColor: "#0A0A0A",
  contact: {
    phone: "+44 121 000 0000",
    email: "info@thegrandmaharaja.co.uk",
    address: "Birmingham, United Kingdom",
  },
} as const;

export const BRAND_COLORS = {
  black: {
    DEFAULT: "#0A0A0A",
    deep: "#050505",
    surface: "#121212",
    elevated: "#181818",
    border: "#26221C",
  },
  gold: {
    DEFAULT: "#D4AF37", // Champagne Gold
    champagne: "#E5C07B",
    light: "#F3E5AB",
    muted: "#C5A059",
    dark: "#997A2D",
  },
  ivory: {
    DEFAULT: "#FAF7F2", // Warm Ivory
    warm: "#F5F0E6",
    muted: "#E8E2D5",
    subtle: "#FDFBF7",
  },
  white: {
    DEFAULT: "#FFFFFF",
  },
} as const;

export const BRAND_LOGOS = {
  masterDesktop: "/images/branding/tgm-master-logo-5120.png",
  compactMobile: "/images/branding/tgm-logo-cropped-512.png",
  circularSeal: "/images/branding/tgm-circular-crest-855.png",
  goldCrest: "/images/branding/tgm-gold-logo-1600.jpeg",
  animatedPromoVideo: "/images/branding/tgm-logo-promo-video.mp4",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Menu", href: "/#menu" },
  { label: "Banquets", href: "/#banquets" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/#contact" },
] as const;
