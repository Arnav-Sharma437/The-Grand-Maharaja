# The Grand Maharaja — Royal Hospitality Design System

**Document Version:** 1.0  
**Project:** The Grand Maharaja (Next.js)  
**Date:** 2026-11-06  
**Status:** Approved Specification  

---

## 1. Brand Philosophy & Aesthetic Direction

The Grand Maharaja visual identity embodies **opulent royal Indian fine dining** and **palace hospitality**. The aesthetic blends timeless imperial heritage with contemporary Michelin-level luxury:

- **Dominant Base:** Deep obsidian blacks and rich warm charcoal layers evoke an exclusive, intimate evening dining ambiance.
- **Precious Accent:** Champagne gold and burnished antique brass accents convey royal prestige and exquisite craftsmanship.
- **Warmth & Elegance:** Warm ivory and cream tones provide soft contrast, tactile depth, and parchment-like hospitality warmth.
- **Geometric Restraint:** Generous negative space, refined hairline gold borders (`border-gold/20`), and subtle luminous glows create an uncluttered, regal composition.

---

## 2. Color Palette & Design Tokens

### A. Core Brand Palette

```
  OBSIDIAN BLACK         CHAMPAGNE GOLD          WARM IVORY           PURE WHITE
     #0A0A0A                #D4AF37                #FAF7F2              #FFFFFF
┌──────────────────┐   ┌──────────────────┐   ┌──────────────────┐   ┌──────────────────┐
│  Royal Backdrop  │   │  Precious Metal  │   │  Parchment/Text  │   │  Pure Highlight  │
└──────────────────┘   └──────────────────┘   └──────────────────┘   └──────────────────┘
```

| Color Token | Hex Code | RGB | HSL | Semantic Role |
| :--- | :--- | :--- | :--- | :--- |
| `--color-black-deep` | `#050505` | `rgb(5, 5, 5)` | `0, 0%, 2%` | Viewport backdrop, deep contrast sections |
| `--color-black-primary` | `#0A0A0A` | `rgb(10, 10, 10)` | `0, 0%, 4%` | Default page background, modal overlays |
| `--color-black-surface` | `#121212` | `rgb(18, 18, 18)` | `0, 0%, 7%` | Card surfaces, dropdowns, navigation bars |
| `--color-black-elevated`| `#181818` | `rgb(24, 24, 24)` | `0, 0%, 9%` | Hover states, popovers, nested cards |
| `--color-black-border` | `#26221C` | `rgb(38, 34, 28)` | `36, 15%, 13%` | Structural container dividers & borders |
| `--color-gold-light` | `#F3E5AB` | `rgb(243, 229, 171)` | `48, 73%, 81%`| High-reflection gold highlights |
| `--color-gold-primary` | `#D4AF37` | `rgb(212, 175, 55)` | `46, 65%, 52%`| Champagne Gold primary branding & accents |
| `--color-gold-muted` | `#C5A059` | `rgb(197, 160, 89)` | `39, 49%, 56%`| Subdued gold icons, borders, subtle text |
| `--color-gold-dark` | `#997A2D` | `rgb(153, 122, 45)` | `43, 55%, 39%`| Antique bronze, gradient shadow stops |
| `--color-ivory-primary` | `#FAF7F2` | `rgb(250, 247, 242)`| `38, 40%, 96%`| Primary headline text, ivory backgrounds |
| `--color-ivory-warm` | `#F5F0E6` | `rgb(245, 240, 230)`| `40, 42%, 93%`| Card surfaces on ivory-themed sections |
| `--color-ivory-muted` | `#E8E2D5` | `rgb(232, 226, 213)`| `41, 29%, 87%`| Secondary text on light sections |
| `--color-white` | `#FFFFFF` | `rgb(255, 255, 255)`| `0, 0%, 100%` | Pure white highlights, sharp contrasts |

### B. Functional Text Colors (Dark Mode Default)

- **Primary Text:** `var(--color-ivory-primary)` (`#FAF7F2`) — 100% opacity for headings and key copy.
- **Secondary Text:** `rgba(250, 247, 242, 0.72)` — High legibility for body descriptions.
- **Muted Text:** `rgba(250, 247, 242, 0.48)` — Captions, timestamps, dietary notes.
- **Accent Text:** `var(--color-gold-primary)` (`#D4AF37`) — Eyebrows, price tags, ratings.

### C. Royal Gradients

```css
/* Signature Champagne Gold Metallic Gradient */
--gradient-gold: linear-gradient(135deg, #F3E5AB 0%, #D4AF37 50%, #997A2D 100%);

/* Dark Obsidian Vignette */
--gradient-dark-radial: radial-gradient(ellipse at center, #141414 0%, #070707 100%);

/* Subtle Golden Border Shimmer */
--gradient-gold-border: linear-gradient(90deg, rgba(212,175,55,0) 0%, rgba(212,175,55,0.4) 50%, rgba(212,175,55,0) 100%);
```

---

## 3. Typography System

| Token | Family | Fallback | Best Use |
| :--- | :--- | :--- | :--- |
| `font-cinzel` | Cinzel | Georgia, serif | Majestic royal headlines, hero titles, section headers |
| `font-cormorant` | Cormorant Garamond | Garamond, serif | Fine dining menu titles, subtitles, pull quotes |
| `font-sans` | Plus Jakarta Sans | system-ui, sans-serif | Body descriptions, nutritional notes, addresses |
| `font-mono` | Geist Mono | monospace | Timings, numeric prices, technical metadata |

---

## 4. Spacing & Layout Grid

### A. Spacing Scale

Built on an 8-point base grid:

- `space-1` (4px): Micro spacing (badge paddings, icon margins)
- `space-2` (8px): Tight element gap (button icons, tag list items)
- `space-3` (12px): Standard inner padding (chips, small buttons)
- `space-4` (16px): Compact content padding (card gutters)
- `space-6` (24px): Standard card padding
- `space-8` (32px): Large component spacing
- `space-12` (48px): Section component gap
- `space-16` (64px): Standard section vertical padding (Mobile)
- `space-24` (96px): Standard section vertical padding (Tablet)
- `space-32` (128px): Grand section vertical padding (Desktop)

### B. Responsive Breakpoints

```text
┌───────────────┬──────────────┬────────────────────────────┐
│ Breakpoint    │ Width (px)   │ Target Device              │
├───────────────┼──────────────┼────────────────────────────┤
│ sm            │ 640px        │ Large Mobile               │
│ md            │ 768px        │ Tablets / iPads            │
│ lg            │ 1024px       │ Small Laptops / Landscape  │
│ xl            │ 1280px       │ Standard Desktop Displays  │
│ 2xl           │ 1440px       │ Wide Desktop Screens       │
│ max-container │ 1400px       │ Ultimate layout boundary   │
└───────────────┴──────────────┴────────────────────────────┘
```

---

## 5. Component Tokens

### A. Buttons

```tsx
// 1. Primary Gold Button (Action / Reservation)
className="inline-flex items-center justify-center h-12 px-8 text-xs font-semibold tracking-[0.2em] uppercase bg-[#D4AF37] text-[#0A0A0A] hover:bg-[#E5C07B] transition-all duration-300 shadow-[0_4px_24px_rgba(212,175,55,0.25)] hover:shadow-[0_6px_28px_rgba(212,175,55,0.4)]"

// 2. Outline Gold Button (Secondary Action / Menu)
className="inline-flex items-center justify-center h-12 px-8 text-xs font-semibold tracking-[0.2em] uppercase border border-[#D4AF37]/60 text-[#D4AF37] hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300 backdrop-blur-sm"

// 3. Ghost Button (Subtle Link)
className="inline-flex items-center justify-center h-10 px-4 text-xs font-semibold tracking-[0.18em] uppercase text-[#FAF7F2]/80 hover:text-[#D4AF37] transition-colors duration-200"
```

### B. Containers

- **Standard Content Container:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` (`1280px`)
- **Narrow Editorial Container:** `max-w-4xl mx-auto px-4 sm:px-6` (`896px`)
- **Full Bleed Hero / Gallery:** `max-w-[1400px] mx-auto px-4 sm:px-8` (`1400px`)

### C. Border Radius

- **Refined Luxury (`rounded-none` to `rounded-sm`):** Fine dining and royal aesthetics use crisp, architectural corners.
  - Buttons: `rounded-none` or `rounded-sm` (2px)
  - Cards & Modals: `rounded-md` (6px–8px)
  - Badges & Pills: `rounded-full` (9999px)

### D. Shadows & Glows

- **Subtle Elevation:** `shadow-[0_4px_24px_rgba(0,0,0,0.5)]`
- **Gold Royal Glow:** `shadow-[0_0_30px_rgba(212,175,55,0.18)]`
- **Card Hover Elevation:** `hover:shadow-[0_12px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(212,175,55,0.12)]`

---

## 6. Micro-Interactions & Animation Standards

1. **Transitions:** `transition-all duration-300 ease-out`
2. **Hover Lift:** `hover:-translate-y-1`
3. **Image Zoom:** `group-hover:scale-105 transition-transform duration-700 ease-out`
4. **Framer Motion Presets:**
   - Smooth Fade-Up: `initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}`
