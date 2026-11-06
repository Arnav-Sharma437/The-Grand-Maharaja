# The Grand Maharaja — Homepage Asset Mapping Guide

**Document Version:** 1.0  
**Project:** The Grand Maharaja (Next.js)  
**Date:** 2026-11-06  
**Status:** Approved for Implementation  

---

## 1. Overview

This document maps all original, verified assets from `public/images/` and `public/fonts/` to their designated sections across the upcoming homepage architecture. Every asset has been selected based on resolution, aspect ratio, visual elegance, and alignment with the **Royal Indian Vegetarian Hospitality** brand direction.

---

## 2. Master Section-by-Section Mapping

```
┌────────────────────────────────────────────────────────────────────────┐
│ 1. HERO SECTION                                                        │
│    - Logo: tgm-master-logo-5120.png                                    │
│    - Sliders: hero-slider-royal-ambiance-1.jpg                         │
│               hero-slider-cuisine-spread-2.jpg                         │
│               hero-slider-dining-experience-3.jpg                      │
│    - Ambient Video: hero-banner-promo-video.mp4                        │
│    - Seal: tgm-circular-crest-855.png                                  │
├────────────────────────────────────────────────────────────────────────┤
│ 2. HOSPITALITY PILLARS (PHILOSOPHY & HERITAGE)                         │
│    - Pillar 1 (Spices): about-sacred-indian-spices.jpg                 │
│    - Pillar 2 (Jain/Pure Veg): about-jain-culinary-sanctum.jpg         │
│    - Pillar 3 (Facade/Ambiance): about-grand-maharaja-exterior-...png  │
├────────────────────────────────────────────────────────────────────────┤
│ 3. FEATURED ROYAL DISHES                                               │
│    - Signature Dal Maharaja: food-tgm-signature-dal-maharaja.jpg       │
│    - Crispy Ghee Roast Dosa: Ghee-Roast-Dosa-Recipe-...-V1n.jpg        │
│    - Royal Tandoori Paneer: food-tgm-royal-tandoori-paneer.jpg         │
│    - Royal Malai Kofta: Best-Malai-Kofta-recipe.jpg                    │
├────────────────────────────────────────────────────────────────────────┤
│ 4. SIGNATURE MENU TABS                                                 │
│    - Chaats: food-tgm-royal-street-chaat.jpg, sev-puri-1.jpg           │
│    - Curries: Kaju-Paneer.png, Shahi-Paneer.jpg, Sp.-Curry.jpg         │
│    - South Indian: Mysore-masala-dosa-WS.jpg, Paneer-Masala-Dosa...   │
│    - Desserts: food-tgm-royal-dessert.jpg, Gajar-Halwa.webp, Rass...   │
│    - Mocktails: food-tgm-royal-mocktails.jpg, Kesar-Lassi.jpg          │
│    - Display Board: menu-combined-board.png                            │
│    - PDF Menu: the-grand-maharaja-complete-menu-893.pdf                │
├────────────────────────────────────────────────────────────────────────┤
│ 5. BANQUETING & PRIVATE DINING                                         │
│    - Royal Banquet Hall: banquet-royal-hall-setup.png                  │
│    - Teal & Gold Hall: banquet-teal-and-gold-dining-hall.png           │
│    - Luxury Dining Room: banquet-luxury-dining-room.png                │
│    - Royal Catering Spread: catering_feast.jpg                         │
├────────────────────────────────────────────────────────────────────────┤
│ 6. GUEST REVIEWS & SOCIAL PROOF                                        │
│    - Dining Portrait: testimonial-happy-guests-218.jpg                 │
│    - Seal Stamp: tgm-circular-crest-855.png                            │
├────────────────────────────────────────────────────────────────────────┤
│ 7. AMBIANCE GALLERY & REELS                                            │
│    - Interior Ambiance: gallery-interior-738.jpg, gallery-dining-...   │
│    - Feast Spread: gallery-gourmet-feast-spread.png                    │
│    - Video Reel: gallery-restaurant-video-625.mp4                      │
├────────────────────────────────────────────────────────────────────────┤
│ 8. CONTACT & FOOTER                                                    │
│    - Dusk Facade Backdrop: hero-grand-maharaja-at-dusk.png             │
│    - Partner Badges: partner-beverage-*.jpg (Madri, Smirnoff, etc.)    │
│    - Master Footer Logo: tgm-master-logo-5120.png                      │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Detailed Asset Mapping Table

### A. Navigation & Header
| UI Slot | File Path | Dimensions | Notes |
| :--- | :--- | :--- | :--- |
| **Desktop Brand Logo** | `public/images/branding/tgm-master-logo-5120.png` | 5120 × 5120 | Transparent PNG, pristine high-DPI scaling |
| **Mobile Header Logo** | `public/images/branding/tgm-logo-cropped-512.png` | 512 × 512 | Square, lightweight, transparent |

### B. Section 1 — Hero Experience
| Asset Role | File Path | Dimensions | Visual Description |
| :--- | :--- | :--- | :--- |
| **Hero Slider 1** | `public/images/hero/hero-slider-royal-ambiance-1.jpg` | 2000 × 1333 | Chandelier lighting, warm intimate restaurant ambiance |
| **Hero Slider 2** | `public/images/hero/hero-slider-cuisine-spread-2.jpg` | 2000 × 1333 | Rich copper handiware royal vegetarian banquet spread |
| **Hero Slider 3** | `public/images/hero/hero-slider-dining-experience-3.jpg` | 2000 × 1333 | Fine dining table arrangement with royal place settings |
| **Ambient Video** | `public/images/hero/hero-banner-promo-video.mp4` | 720 × 1272 | Looping subtle background video reel |
| **Royal Seal Badge** | `public/images/branding/tgm-circular-crest-855.png` | 500 × 500 | "100% Pure Vegetarian" heritage seal badge |

### C. Section 2 — Hospitality Pillars & Heritage
| Pillar | File Path | Dimensions | Content Narrative |
| :--- | :--- | :--- | :--- |
| **1. Sacred Spices** | `public/images/about/about-sacred-indian-spices.jpg` | 1200 × 896 | Fresh whole Indian spices, cardamom, star anise, saffron |
| **2. Jain Sanctum** | `public/images/about/about-jain-culinary-sanctum.jpg` | 1200 × 896 | Dedicated sattvic preparation, zero root vegetable cuisine |
| **3. Imperial Palace**| `public/images/about/about-grand-maharaja-exterior-facade.png`| 1086 × 1448 | Grand restaurant entrance illuminated at evening |
| **4. Royal Bar** | `public/images/about/about-royal-golden-backlit-bar.png` | 1672 × 941 | Golden backlit bar display with mocktail service |

### D. Section 3 — Featured Royal Dishes
| Dish Title | File Path | Dimensions | Category & Dietary |
| :--- | :--- | :--- | :--- |
| **Dal Maharaja** | `public/images/food/food-tgm-signature-dal-maharaja.jpg` | 1200 × 896 | Signature Slow-Cooked Black Lentils (GF) |
| **Ghee Roast Dosa**| `public/images/food/Ghee-Roast-Dosa-Recipe-Crispy-Paper-Dosa-V1n.jpg`| 640 × 897 | Golden Crispy South Indian Crepe (Jain available) |
| **Tandoori Paneer**| `public/images/food/food-tgm-royal-tandoori-paneer.jpg` | 1200 × 896 | Clay-Oven Charred Cottage Cheese Skewers |
| **Shahi Malai Kofta**| `public/images/food/Best-Malai-Kofta-recipe.jpg` | 1200 × 800 | Cottage Cheese & Dried Fruit Dumplings in Velvet Gravy |
| **Mumbai Pav Bhaji**| `public/images/food/Pav-Bhaji.jpg` | 612 × 404 | Spiced Mash with Buttered Toasted Brioche |
| **Amritsari Chole** | `public/images/food/Chole-Bhature.jpg` | 612 × 459 | Puffed Bhature with Spiced Chickpea Curry |

### E. Section 4 — Signature Menu Highlights
| Menu Tab | Highlight Dishes | File Paths |
| :--- | :--- | :--- |
| **Royal Chaats** | Sev Puri, Rajbhog Kachori, Dahi Bhalle | `food-tgm-royal-street-chaat.jpg`, `sev-puri-1.jpg`, `Rajbhog-Kachori.jpg`, `Dahi-Bhalle.jpg` |
| **Royal Curries** | Shahi Kaju Paneer, Veg Kolhapuri | `Kaju-Paneer.png`, `Shahi-Paneer.jpg`, `Veg-Kolhapuri-4.jpg` |
| **South Indian** | Mysore Masala Dosa, Paneer Dosa | `Mysore-masala-dosa-WS.jpg`, `Paneer-Masala-Dosa-735x1103-1.webp` |
| **Royal Desserts**| Gajar Halwa, Rasmalai, Shrikhand | `food-tgm-royal-dessert.jpg`, `Gajar-Halwa.webp`, `Rass-Malai.jpg`, `Shrikhand-2023-scaled-1.jpg` |
| **Royal Mocktails**| Kesar Lassi, Rose Falooda, Masala Chai| `food-tgm-royal-mocktails.jpg`, `Kesar-Lassi.jpg`, `rosefaluda.jpg`, `Indian-Masala-Tea.jpg` |
| **Display Board** | Full Restaurant Menu Display | `public/images/menu/menu-combined-board.png` (1600 × 2272) |
| **Downloadable PDF**| Complete Official Menu Document | `public/images/menu/the-grand-maharaja-complete-menu-893.pdf` |

### F. Section 5 — Banquets & Private Dining
| Event Type | File Path | Dimensions | Features Highlighted |
| :--- | :--- | :--- | :--- |
| **Maharaja Banquet Hall** | `public/images/banquet/banquet-royal-hall-setup.png` | 1672 × 941 | Up to 150 guests, gold chiavari chairs, stage |
| **Teal & Gold Dining Room**| `public/images/banquet/banquet-teal-and-gold-dining-hall.png`| 1672 × 941 | Intimate luxury dining, family celebrations |
| **Private VIP Dining** | `public/images/banquet/banquet-luxury-dining-room.png` | 1086 × 1448 | Exclusive private dining room with dedicated service |
| **Banqueting Feast** | `public/images/banquet/catering_feast.jpg` | 1200 × 670 | Live food stations & royal buffet presentations |

### G. Section 6 — Social Proof & Reviews
| UI Element | File Path | Dimensions | Notes |
| :--- | :--- | :--- | :--- |
| **Guest Dining Experience**| `public/images/testimonials/testimonial-happy-guests-218.jpg`| 1440 × 962 | Authentic guests enjoying fine dining hospitality |
| **Five Star Rating Badge** | `public/images/branding/tgm-circular-crest-855.png` | 500 × 500 | Quality certification badge |

### H. Section 7 — Ambiance Gallery & Instagram Reels
| Media Type | File Path | Dimensions | Category |
| :--- | :--- | :--- | :--- |
| **Chandelier & Dining Hall**| `public/images/gallery/gallery-interior-738.jpg` | 2268 × 1280 | Interior Ambiance |
| **Gourmet Feast Spread** | `public/images/gallery/gallery-gourmet-feast-spread.png` | 1599 × 899 | Culinary Art |
| **Restaurant Video Reel** | `public/images/gallery/gallery-restaurant-video-625.mp4` | 480 × 848 | Live dining ambiance video |
| **Architectural Decor** | `public/images/gallery/gallery-decor-741.png` | 1024 × 1536 | Ornate interior details |

### I. Section 8 — Contact, Hours & Footer
| UI Element | File Path | Dimensions | Notes |
| :--- | :--- | :--- | :--- |
| **Dusk Exterior Facade** | `public/images/hero/hero-grand-maharaja-at-dusk.png` | 1599 × 984 | Contact section backdrop with dark overlay |
| **Beverage Partner Badges**| `public/images/icons/partner-beverage-*.jpg` | 300 × 300 | Madri, Smirnoff, Courvoisier, J2O, Famous Grouse |
| **Footer Brand Logo** | `public/images/branding/tgm-master-logo-5120.png` | 5120 × 5120 | Transparent master logo |
