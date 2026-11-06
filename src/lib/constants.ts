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
  url: "https://thegrandmaharaja.com",
  locale: "en_IN",
  themeColor: "#0D0D0D",
} as const;

export const BRAND_COLORS = {
  black: {
    DEFAULT: "#0D0D0D",
    rich: "#141414",
    soft: "#1F1F1F",
    card: "#181818",
  },
  gold: {
    DEFAULT: "#D4AF37", // Champagne Gold
    champagne: "#D4AF37",
    light: "#F5E6C8",
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

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Banquets & Events", href: "/banquets" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;
