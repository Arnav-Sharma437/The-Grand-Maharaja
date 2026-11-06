# The Grand Maharaja — Typography & Font System Analysis

**Document Version:** 1.0  
**Project:** The Grand Maharaja (Next.js)  
**Date:** 2026-11-06  
**Status:** Verified & Configured  

---

## 1. Executive Summary

This document verifies the typography configuration for **The Grand Maharaja**. It analyzes both local font assets located in `public/fonts/` and Google Fonts identified from the original live website (`thegrandmaharaja.co.uk`), establishing a harmonious typographic hierarchy tailored for a luxury royal Indian vegetarian dining aesthetic.

---

## 2. Font Availability & Verification Audit

### A. Local Font Files Verified in `public/fonts/`

| Font Filename | Format | File Size | Description & Role |
| :--- | :--- | :--- | :--- |
| `fl-icons.woff2` | WOFF2 | 6.5 KB | Original theme UI & social icon glyphs |
| `fl-icons.woff` | WOFF | 11.4 KB | Legacy browser fallback for icon glyphs |
| `fl-icons.ttf` | TTF | 11.4 KB | TrueType icon fallback |
| `fl-icons.eot` | EOT | 11.5 KB | IE compatibility icon fallback |
| `Inter-VariableFont_slnt,wght.woff2` | WOFF2 (Variable) | 326.6 KB | Full-range Variable Sans (Weights 100–900, Slant) |
| `cardo_normal_400.woff2` | WOFF2 | 146.1 KB | Classical serif font |

### B. Identified Live Website Fonts & Availability

| Font Family | Style / Category | Source on Existing Site | Available via Next.js | Recommended Role in TGM |
| :--- | :--- | :--- | :--- | :--- |
| **Cinzel** | Royal Imperial Serif | Live CSS Headings (`h1`, `h2`, `h3`) | **Yes (`next/font/google`)** | **Primary Royal Display & Section Titles** |
| **Cormorant Garamond** | Fine Dining Serif | Live CSS Subtitles & Menu items | **Yes (`next/font/google`)** | **Editorial Headings & Italic Accents** |
| **Plus Jakarta Sans** | Geometric Modern Sans | Live CSS Body & UI Elements | **Yes (`next/font/google`)** | **Primary Body Text & UI Controls** |
| **Montserrat** | Clean Geometric Sans | Live CSS Navigation & Buttons | **Yes (`next/font/google`)** | Navigation Links & Eyebrow Badges |
| **Playfair Display** | High-Contrast Serif | Live CSS Alternate Titles | **Yes (`next/font/google`)** | Secondary Editorial Accent |
| **Inter** | Modern Neutral Sans | Local file in `public/fonts/` | **Yes (`next/font/local`)** | Alternative System Body Sans |

> [!NOTE]  
> Next.js `next/font/google` automatically downloads, optimizes, and self-hosts font binaries during the build process. No runtime requests are made to external Google servers, guaranteeing zero layout shift (CLS), maximum performance on Vercel, and strict GDPR/privacy compliance.

---

## 3. Typographic Hierarchy & Pairing Strategy

The typography pairs **Cinzel** (majestic, royal, imperial Roman proportions) with **Cormorant Garamond** (refined, classical, poetic fine dining serif) and **Plus Jakarta Sans** (clean, crisp, contemporary readability).

```
┌────────────────────────────────────────────────────────┐
│                   CINZEL (DISPLAY)                     │
│      "A Royal Culinary Journey Through India"          │
│                                                        │
│             Cormorant Garamond (Subheading)            │
│  "Exquisite vegetarian recipes crafted with royalty"  │
│                                                        │
│            Plus Jakarta Sans (Body & UI)               │
│ "Experience the opulence of authentic Indian dining...│
│ [ EXPLORE SIGNATURE MENU ]   [ RESERVE A TABLE ]       │
└────────────────────────────────────────────────────────┘
```

---

## 4. Typography Scale & CSS Tokens

| Level | CSS Class / Token | Font Family | Size (Mobile → Desktop) | Weight | Line Height | Tracking |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Display Title** | `.font-cinzel text-display` | Cinzel | 44px → 72px (`3xl` → `6xl`) | SemiBold (600) | 1.05 | `tracking-wide` |
| **Heading 1** | `.font-cinzel text-h1` | Cinzel | 36px → 52px (`2xl` → `4xl`) | Medium (500) | 1.15 | `tracking-normal` |
| **Heading 2** | `.font-cinzel text-h2` | Cinzel | 28px → 40px (`xl` → `3xl`) | Medium (500) | 1.2 | `tracking-normal` |
| **Heading 3** | `.font-cormorant text-h3`| Cormorant Garamond | 22px → 30px (`lg` → `2xl`) | SemiBold (600) | 1.3 | `tracking-normal` |
| **Eyebrow / Subhead**| `.font-sans uppercase text-xs` | Plus Jakarta Sans | 11px → 13px | Bold (700) | 1.4 | `tracking-[0.25em]` |
| **Menu Item Title** | `.font-cormorant text-lg` | Cormorant Garamond | 18px → 22px | SemiBold (600) | 1.3 | `tracking-wide` |
| **Body Large** | `.font-sans text-base` | Plus Jakarta Sans | 16px → 18px | Regular (400) | 1.6 | `tracking-normal` |
| **Body Standard** | `.font-sans text-sm` | Plus Jakarta Sans | 14px → 15px | Regular (400) | 1.65 | `tracking-normal` |
| **Button / Nav** | `.font-sans uppercase text-xs` | Plus Jakarta Sans | 12px → 13px | SemiBold (600) | 1.0 | `tracking-[0.2em]` |
| **Caption / Meta** | `.font-sans text-xs` | Plus Jakarta Sans | 11px → 12px | Light (300) | 1.5 | `tracking-wide` |

---

## 5. Next.js Implementation Configuration

In `src/app/layout.tsx`:

```tsx
import { Cinzel, Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";

export const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});
```
