import fs from "fs";
import path from "path";
import crypto from "crypto";

const verified = JSON.parse(fs.readFileSync("scripts/verified-master-assets.json", "utf8"));

function classifyUrl(item) {
  const url = item.canonicalUrl;
  const name = url.split("/").pop();
  const lower = `${url} ${item.title || ""} ${item.alt || ""} ${name}`.toLowerCase();
  const ext = name.split(".").pop().toLowerCase();

  // 1. Branding
  if (
    lower.includes("logo") ||
    lower.includes("circle-1200mm") ||
    lower.includes("tgm_logo")
  ) {
    let desc = name;
    if (name.toLowerCase() === "logo.png") desc = "tgm-master-logo-5120.png";
    else if (lower.includes("cropped-logo")) desc = "tgm-logo-cropped-512.png";
    else if (lower.includes("tgm_logo_21")) desc = "tgm-gold-logo-1600.jpeg";
    else if (lower.includes("new_logo_tgm")) desc = "tgm-new-crest-logo.jpeg";
    else if (lower.includes("circle-1200mm")) desc = `tgm-circular-crest-${name}`;
    else if (lower.includes("promo")) desc = `tgm-logo-promo-${name}`;
    return { category: "branding", descriptiveName: desc };
  }

  // 2. Hero & Banners
  if (
    lower.includes("home_slider") ||
    lower.includes("tgm_banner") ||
    lower.includes("promo_banner") ||
    lower.includes("the_grand_maharaja_at_dusk") ||
    lower.includes("tgm_home_special_featured")
  ) {
    let desc = name;
    if (lower.includes("home_slider_1")) desc = "hero-slider-royal-ambiance-1.jpg";
    else if (lower.includes("home_slider_2")) desc = "hero-slider-cuisine-spread-2.jpg";
    else if (lower.includes("home_slider_3")) desc = "hero-slider-dining-experience-3.jpg";
    else if (lower.includes("tgm_banner_video")) desc = "hero-banner-promo-video.mp4";
    else if (lower.includes("the_grand_maharaja_at_dusk")) desc = "hero-grand-maharaja-at-dusk.png";
    else if (lower.includes("tgm_home_special_featured")) desc = "hero-tgm-special-featured.jpg";
    return { category: "hero", descriptiveName: desc };
  }

  // 3. Banquet & Dining Hall
  if (
    lower.includes("royal_banquet") ||
    lower.includes("restaurant_interior") ||
    lower.includes("restaurant_dining_room") ||
    lower.includes("banquet") ||
    lower.includes("catering")
  ) {
    let desc = name;
    if (lower.includes("royal_banquet")) desc = "banquet-royal-hall-setup.png";
    else if (lower.includes("teal_and_gold_restaurant_interior")) desc = "banquet-teal-and-gold-dining-hall.png";
    else if (lower.includes("luxury_teal_restaurant_dining_room")) desc = "banquet-luxury-dining-room.png";
    return { category: "banquet", descriptiveName: desc };
  }

  // 4. About Us
  if (
    lower.includes("restaurant_facade") ||
    lower.includes("backlit_bar_display") ||
    lower.includes("sacred_spices") ||
    lower.includes("jain_sanctum") ||
    lower.includes("indian-condiments")
  ) {
    let desc = name;
    if (lower.includes("restaurant_facade")) desc = "about-grand-maharaja-exterior-facade.png";
    else if (lower.includes("backlit_bar_display")) desc = "about-royal-golden-backlit-bar.png";
    else if (lower.includes("sacred_spices")) desc = "about-sacred-indian-spices.jpg";
    else if (lower.includes("jain_sanctum")) desc = "about-jain-culinary-sanctum.jpg";
    else if (lower.includes("indian-condiments")) desc = "about-royal-indian-spices-condiments.jpg";
    return { category: "about", descriptiveName: desc };
  }

  // 5. Menu Assets
  if (
    lower.includes("menu") ||
    ext === "pdf" ||
    lower.includes("drinks_menu") ||
    lower.includes("food_menu")
  ) {
    let desc = name;
    if (ext === "pdf") {
      if (lower.includes("drinks")) desc = `menu-drinks-${name}`;
      else if (lower.includes("food")) desc = `menu-food-${name}`;
      else desc = `menu-complete-${name}`;
    } else if (lower.includes("combined")) {
      desc = "menu-combined-board.png";
    }
    return { category: "menu", descriptiveName: desc };
  }

  // 6. Testimonials
  if (
    lower.includes("couple-with-healthy-fo") ||
    lower.includes("testimonial") ||
    lower.includes("review")
  ) {
    return { category: "testimonials", descriptiveName: `testimonial-guests-${name}` };
  }

  // 7. Icons & Beverage partner badges
  if (
    lower.includes("flatsome-child/assets/image") ||
    lower.includes("madri") ||
    lower.includes("famous_grouse") ||
    lower.includes("courvoisier") ||
    lower.includes("smirnoff") ||
    lower.includes("j20")
  ) {
    return { category: "icons", descriptiveName: `partner-beverage-${name}` };
  }

  // 8. General / Placeholders
  if (
    lower.includes("solid-color") ||
    lower.includes("placeholder")
  ) {
    return { category: "general", descriptiveName: name };
  }

  // 9. Gallery
  if (
    lower.includes("tgm_instagram") ||
    name.startsWith("IMG_013") ||
    name.startsWith("IMG_9223") ||
    name.startsWith("IMG_9879") ||
    name.includes("WhatsApp-Video") ||
    ext === "mp4" ||
    ext === "mov"
  ) {
    let desc = name;
    if (name.startsWith("IMG_013")) desc = `gallery-interior-${name}`;
    else if (name.startsWith("IMG_9223")) desc = `gallery-dining-${name}`;
    else if (name.startsWith("IMG_9879")) desc = `gallery-decor-${name}`;
    else if (name.includes("gourmet_south_asian_feast")) desc = "gallery-gourmet-feast-spread.png";
    return { category: "gallery", descriptiveName: desc };
  }

  // 10. Food (Default for food dishes, desserts, mocktails, etc.)
  let desc = name;
  if (lower.includes("street_chaat")) desc = "food-tgm-royal-street-chaat.jpg";
  else if (lower.includes("royal_mocktails")) desc = "food-tgm-royal-mocktails.jpg";
  else if (lower.includes("royal_dessert")) desc = "food-tgm-royal-dessert.jpg";
  else if (lower.includes("tandoori_paneer")) desc = "food-tgm-royal-tandoori-paneer.jpg";
  else if (lower.includes("dish_dal")) desc = "food-tgm-signature-dal-maharaja.jpg";

  return { category: "food", descriptiveName: desc };
}

const classified = verified.map(it => ({
  ...it,
  ...classifyUrl(it),
}));

fs.writeFileSync("scripts/complete-classified-assets.json", JSON.stringify(classified, null, 2));

const counts = {};
for (const c of classified) {
  counts[c.category] = (counts[c.category] || 0) + 1;
}
console.log("Complete classified assets count by category:", counts);
