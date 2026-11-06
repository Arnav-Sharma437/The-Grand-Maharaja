# The Grand Maharaja — Figma Source-of-Truth Design Specification

**Document Version:** 1.0  
**Project:** The Grand Maharaja (Next.js)  
**Date:** 2026-11-06  
**Source Figma Link:** [The Grand Maharaja Figma Prototype](https://www.figma.com/proto/zhxsbXmof90rH108j2OvcH/The-Grand-Maharaja?node-id=58-1716&p=f&viewport=364%2C106%2C0.08&t=q1S31Frxi81tecPR-1&scaling=scale-down-width&content-scaling=fixed&page-id=58%3A1119)  
**Status:** Inspected & Verified  

---

## 1. Frame Architecture & Canvas Metrics

- **File Name:** `The Grand Maharaja`
- **Active Frame / Flow:** `TGM Landing Page V2`
- **Node ID:** `58:1716` (Parent Page ID: `58:1119`)
- **Desktop Canvas Width:** `1480px`
- **Total Vertical Length:** `7658px`
- **Page Base Color:** `#0A0A0A` (Deep Obsidian Black)
- **Container Boundary:** `max-w-[1400px]` with desktop margins of `40px` (`px-10`) and inner content container of `max-w-7xl` (`1280px`).

---

## 2. Section Hierarchy (Exact Top-to-Bottom Sequence)

The Figma design defines the exact section order:

```text
1. [HEADER & NAVIGATION]
   - Left: The Grand Maharaja Master Logo (Transparent Crest)
   - Center: Navigation Links (Home, About, Menu, Banquets, Gallery, Contact)
   - Right: Primary CTA Button ("BOOK A TABLE") in Champagne Gold

2. [HERO SECTION]
   - Eyebrow: "ROYAL INDIAN VEGETARIAN FINE DINING"
   - Main Headline: Imperial Royal Title in Cinzel / Cormorant
   - Subhead: Fine dining vegetarian culinary heritage
   - Dual CTAs: "EXPLORE MENU" (Primary Gold) + "RESERVE TABLE" (Outline Gold)
   - Heritage Quality Seal: "100% Pure Vegetarian / Jain Friendly"
   - Background: Cinematic hero slider / ambient video

3. [HOSPITALITY PILLARS & HERITAGE]
   - Three-column architectural pillar cards:
     * Pillar 1: Sacred Spices & Authentic Heritage
     * Pillar 2: 100% Pure Vegetarian & Jain Sanctum
     * Pillar 3: Imperial Palace Ambiance & Architecture
   - Hairline gold borders (`border-gold/20`) over `#121212` card surfaces.

4. [FEATURED ROYAL DISHES]
   - Section Eyebrow & Title
   - Curated grid of signature delicacies:
     * Dal Maharaja, Ghee Roast Dosa, Tandoori Paneer, Malai Kofta, Pav Bhaji, Chole Bhature
   - 16:9 card aspect ratios with subtle gold border hover states.

5. [SIGNATURE MENU SHOWCASE]
   - Tabbed menu navigation (Royal Chaats, Royal Curries, South Indian Dosas, Traditional Desserts, Mocktails)
   - Interactive dish listing with pricing, dietary icons (Vegetarian, Vegan, Jain), and descriptions
   - Direct download link for the Complete Official Menu PDF.

6. [BANQUETING & PRIVATE DINING]
   - Grand Hall & Luxury Private Dining presentation
   - Capacity metrics, royal decor highlights, staging, bespoke catering options
   - CTA: "ENQUIRE FOR EVENTS"

7. [GUEST REVIEWS & REPUTATION]
   - Authentic fine dining guest portrait & testimonial cards
   - 5-Star luxury hospitality rating badge and verified reviews

8. [AMBIANCE GALLERY & INSTAGRAM REELS]
   - High-fidelity grid of interior ambiance, lighting, table settings, and dining clips

9. [RESERVATION, HOURS & FOOTER]
   - Operating hours, dining reservations, location details
   - Beverage partner logos (Madri, Smirnoff, Courvoisier, etc.)
   - Master Logo & copyright disclaimer.
```

---

## 3. Strict Design Tokens (Extracted from Figma)

### A. Color Tokens
- **Background:** `#0A0A0A`
- **Surface (Cards):** `#121212`
- **Surface Hover:** `#181818`
- **Hairline Border:** `#26221C` (and `rgba(212, 175, 55, 0.2)`)
- **Primary Accent (Champagne Gold):** `#D4AF37`
- **Gold Hover / Highlight:** `#E5C07B` / `#F3E5AB`
- **Text Primary (Warm Ivory):** `#FAF7F2`
- **Text Secondary:** `rgba(250, 247, 242, 0.7)`
- **Text Muted:** `rgba(250, 247, 242, 0.45)`

### B. Typography Specifications
- **Display / H1:** `Cinzel`, SemiBold (600) / Medium (500), `tracking-wide`
- **H2 / H3 / Subtitles:** `Cormorant Garamond`, SemiBold (600), `tracking-normal`
- **Body Text:** `Plus Jakarta Sans`, Regular (400), line height 1.65
- **Eyebrows & Buttons:** `Plus Jakarta Sans`, Bold (700) / SemiBold (600), uppercase, `tracking-[0.2em]`

### C. Button Specifications
- **Height:** `48px` (`h-12`)
- **Padding:** `px-8` (32px horizontal)
- **Border Radius:** `rounded-none` or `rounded-sm` (2px) — strictly non-pill to maintain royal architectural solemnity.
- **Primary:** `bg-[#D4AF37] text-[#0A0A0A] hover:bg-[#E5C07B]` with subtle gold glow shadow.
- **Outline:** `border border-[#D4AF37]/60 text-[#D4AF37] hover:border-[#D4AF37] hover:bg-[#D4AF37]/10`.

---

## 4. Mobile Layout Adaptations (Responsive Figma Matrix)

| Component | Desktop (1480px) | Mobile (375px – 430px) |
| :--- | :--- | :--- |
| **Navbar** | Inline links + CTA button | Compact Logo + Hamburger menu overlay |
| **Hero CTAs** | Side-by-side dual buttons | Stacked full-width buttons (`w-full`) |
| **Pillars** | 3-column grid (`grid-cols-3`) | Single column stack (`grid-cols-1`) |
| **Featured Dishes** | 3-column grid (`grid-cols-3`) | 1 or 2-column swipeable / vertical stack |
| **Menu Tabs** | Horizontal inline pills | Scrollable horizontal pill strip |
| **Banqueting** | 2-column split (Image + Specs) | Stacked vertical card (Image top, text bottom) |
| **Gallery** | 4-column balanced grid | 2-column mobile photo grid |
| **Footer** | 4-column footer matrix | Single column accordion / vertical stack |
