# The Grand Maharaja — Brand Logo Analysis & Recommendation

**Document Version:** 1.0  
**Project:** The Grand Maharaja (Next.js)  
**Date:** 2026-11-06  
**Status:** Verified & Approved  

---

## 1. Executive Summary

A comprehensive inspection was conducted on all 10 branding assets downloaded from the existing WordPress installation (`thegrandmaharaja.co.uk`) and located in `public/images/branding/`. 

The analysis evaluates resolution, alpha transparency, aspect ratio, visual weight, and background compatibility (specifically ensuring zero dark/light bounding boxes against dark obsidian and champagne gold design elements).

---

## 2. Inventory & Technical Specifications

| # | Filename | Format | Dimensions | Alpha (Transparency) | File Size | Source Origin |
| :- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `tgm-master-logo-5120.png` | PNG | **5120 × 5120** | **Yes (Transparent)** | 613.8 KB | WP Media Library (`Logo.png`) |
| 2 | `tgm-logo-cropped-512.png` | PNG | **512 × 512** | **Yes (Transparent)** | 75.8 KB | WP Site Icon (`cropped-Logo.png`) |
| 3 | `tgm-circular-crest-855.png` | PNG | **500 × 500** | **Yes (Transparent)** | 186.0 KB | WP Media Library (`...CIRCLE-1200mm-2-1.png`) |
| 4 | `tgm-circular-crest-829.png` | PNG | 512 × 512 | No (Solid) | 59.3 KB | WP Media Library (`cropped-THE-GRAND-MAHARAJA...`) |
| 5 | `tgm-circular-crest-827.png` | PNG | 14221 × 14221 | No (Opaque print master) | 10.4 MB | WP Print Master Source (`...CIRCLE-1200mm-2.png`) |
| 6 | `tgm-gold-logo-1600.jpeg` | JPEG | 1600 × 1600 | No (Dark BG) | 290.3 KB | WP Media Library (`tgm_logo_21.jpeg`) |
| 7 | `tgm-new-crest-logo.jpeg` | JPEG | 1540 × 1589 | No (Dark BG) | 238.4 KB | WP Media Library (`new_logo_TGM.jpeg`) |
| 8 | `tgm-logo-standard.jpeg` | JPEG | 500 × 500 | No (Dark BG) | 58.2 KB | WP Media Library (`tgm_logo.jpeg`) |
| 9 | `tgm-logo-promo-video.mp4` | MP4 | 720 × 1280 | Video (Vertical) | 665.1 KB | WP Media Library (`logo_promo.mp4`) |
| 10 | `tgm-logo-promo-video.mov` | MOV | 1080 × 1920 | Video (HD Vertical) | 2.7 MB | WP Media Library (`logo_promo.mov`) |

---

## 3. Evaluation of Candidate Logos

### Candidate A: `tgm-master-logo-5120.png` (RECOMMENDED PRIMARY LOGO)
- **Visual Description:** Complete signature brand crest featuring the royal turban crest (Kalgi motif), ornate filigree flourishes, the primary wordmark *"THE GRAND MAHARAJA"*, and the authentic tagline *"ROYAL INDIAN VEGETARIAN DINING & BANQUETS"*.
- **Strengths:** 
  - Ultra-high fidelity (5120 × 5120 pixels) enables razor-sharp rendering on Retina and 4K displays.
  - Transparent alpha background allows seamless overlay across transparent header bars, solid black navbars, and backdrop blurs.
  - Optimized file size (614 KB) renders instantaneously when loaded via Next.js `<Image />` with `priority` and appropriate `sizes` attributes (e.g. `(max-width: 768px) 120px, 160px`).
- **Ideal Use Cases:** 
  - Primary Desktop Website Header (Left-aligned or Centered Royal Layout).
  - Main Footer Brand Block.
  - Reservation Confirmation Modal / Header.

### Candidate B: `tgm-logo-cropped-512.png` (RECOMMENDED COMPACT LOGO)
- **Visual Description:** Square-proportioned transparent PNG featuring the focused central emblem.
- **Strengths:**
  - Fast loading (75.8 KB) with full alpha channel.
  - Perfectly square 1:1 aspect ratio with balanced padding.
- **Ideal Use Cases:**
  - Mobile sticky navigation bar.
  - Browser favicon (`favicon.ico` / `apple-touch-icon.png`).
  - Progressive Web App (PWA) manifest icon.

### Candidate C: `tgm-circular-crest-855.png` (ROYAL SEAL EMBLEM)
- **Visual Description:** Circular seal layout with gold border ring, royal crest in center, and circular typography.
- **Strengths:**
  - Transparent PNG (500 × 500 pixels) with exquisite gold filigree.
  - Distinctive stamp/seal appearance evoking royal royal charters and palace hospitality authenticity.
- **Ideal Use Cases:**
  - "100% Pure Vegetarian / Jain Friendly" Trust Badge.
  - Banquet & Royal Catering Quality Seal.
  - Floating stamp or watermark on hero/about photography.

### Candidate D: `tgm-gold-logo-1600.jpeg` & `tgm-new-crest-logo.jpeg`
- **Visual Description:** Rendered on a pre-baked dark background.
- **Assessment:** While beautiful for social cards or standalone graphics, their opaque backgrounds prevent flexible layering on variable-opacity navigation bars.
- **Ideal Use Cases:**
  - OpenGraph / Twitter social card backdrops.
  - Offline print / PDF menu covers.

### Candidate E: `tgm-logo-promo-video.mp4`
- **Visual Description:** Animated 3D/motion graphics reveal of the gold logo with light sweep effects.
- **Ideal Use Cases:**
  - Interactive "About Our Heritage" video modal or loading screen transition.

---

## 4. Final Recommendation Matrix

| UI Component | Recommended Asset | Rendered Size | Properties |
| :--- | :--- | :--- | :--- |
| **Desktop Header (Navbar)** | `public/images/branding/tgm-master-logo-5120.png` | `h-14` to `h-16` (auto width) | `priority`, `alt="The Grand Maharaja"` |
| **Mobile Header (Sticky)** | `public/images/branding/tgm-logo-cropped-512.png` | `h-10 w-10` | Transparent, compact |
| **Footer Brand Block** | `public/images/branding/tgm-master-logo-5120.png` | `h-20` (auto width) | Centered or left-aligned |
| **Heritage / Trust Seal** | `public/images/branding/tgm-circular-crest-855.png` | `w-24 h-24` | Circular seal with subtle rotation |
| **Favicon & Web App Icon** | `public/images/branding/tgm-logo-cropped-512.png` | `32x32`, `180x180` | High-contrast favicon |
| **Hero Video / Heritage Modal**| `public/images/branding/tgm-logo-promo-video.mp4` | Responsive | Looping / on-demand trigger |

---

## 5. Implementation Code Snippet (Next.js)

```tsx
import Image from "next/image";
import Link from "next/link";

export function HeaderLogo() {
  return (
    <Link href="/" className="inline-flex items-center gap-3 group">
      {/* Desktop Master Brand Logo */}
      <div className="relative hidden md:block h-14 w-44 lg:w-52">
        <Image
          src="/images/branding/tgm-master-logo-5120.png"
          alt="The Grand Maharaja — Royal Indian Vegetarian Dining"
          fill
          priority
          sizes="(max-width: 1024px) 176px, 208px"
          className="object-contain object-left transition-opacity duration-300 group-hover:opacity-90"
        />
      </div>

      {/* Mobile Compact Emblem */}
      <div className="relative block md:hidden h-10 w-10">
        <Image
          src="/images/branding/tgm-logo-cropped-512.png"
          alt="The Grand Maharaja Logo"
          fill
          priority
          sizes="40px"
          className="object-contain"
        />
      </div>
    </Link>
  );
}
```
