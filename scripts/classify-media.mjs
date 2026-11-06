import fs from "fs";

const allMedia = JSON.parse(fs.readFileSync("scripts/wp-media-all.json", "utf8"));
const pageMap = JSON.parse(fs.readFileSync("scripts/page-media-map.json", "utf8"));

// Build reverse map: url -> pages where it appears
const urlToPages = {};
for (const [slug, pageInfo] of Object.entries(pageMap)) {
  for (const url of pageInfo.mediaUrls) {
    // Normalize url without query strings and sizes (e.g. -300x300)
    const base = url.split("?")[0];
    if (!urlToPages[base]) urlToPages[base] = [];
    urlToPages[base].push(slug);
  }
}

function classifyItem(item) {
  const url = item.source_url.toLowerCase();
  const title = (item.title?.rendered || "").toLowerCase();
  const alt = (item.alt_text || "").toLowerCase();
  const name = url.split("/").pop();
  const combined = `${url} ${title} ${alt} ${name}`;

  // 1. Branding (Logos, badges, favicons, promo video)
  if (
    combined.includes("logo") ||
    combined.includes("circle-1200mm") ||
    combined.includes("tgm_logo") ||
    name.startsWith("cropped-logo")
  ) {
    return "branding";
  }

  // 2. Hero & Sliders
  if (
    combined.includes("home_slider") ||
    combined.includes("tgm_banner") ||
    combined.includes("promo_banner") ||
    combined.includes("banner")
  ) {
    return "hero";
  }

  // 3. Menu (Menu cards, menu PDFs, menu boards)
  if (
    combined.includes("menu") ||
    name.endsWith(".pdf") ||
    combined.includes("drinks_menu") ||
    combined.includes("food_menu")
  ) {
    return "menu";
  }

  // 4. Banquet & Events
  if (
    combined.includes("banquet") ||
    combined.includes("catering") ||
    combined.includes("hall") ||
    combined.includes("event") ||
    combined.includes("party") ||
    combined.includes("reception")
  ) {
    return "banquet";
  }

  // 5. Testimonials & People
  if (
    combined.includes("testimonial") ||
    combined.includes("review") ||
    combined.includes("couple-with-healthy-fo") ||
    combined.includes("client") ||
    combined.includes("customer")
  ) {
    return "testimonials";
  }

  // 6. About section / History / Kitchen
  if (
    combined.includes("about") ||
    combined.includes("chef") ||
    combined.includes("history") ||
    combined.includes("restaurant-interior") ||
    combined.includes("indian-condiments")
  ) {
    return "about";
  }

  // 7. Gallery (Restaurant shots, ambiance, hall, decor, screenshots from restaurant, IMG_*)
  if (
    name.startsWith("img_013") ||
    name.startsWith("img_9223") ||
    name.startsWith("img_9879") ||
    combined.includes("gallery") ||
    combined.includes("ambiance") ||
    combined.includes("decor")
  ) {
    return "gallery";
  }

  // 8. Food dishes
  // Check common dish names or food keywords
  const foodKeywords = [
    "curry", "bhaji", "ice-cream", "ice_cream", "halwa", "shrikhand", "malai", "pista", "chocolate", "vanilla",
    "dosa", "dhosa", "uttapam", "uthapp", "chole", "bhature", "chaat", "puri", "bhel", "kachori", "samosa",
    "panner", "paneer", "soup", "pulao", "papad", "chips", "fries", "potato", "sweetcourn", "manchaw",
    "tikki", "idli", "sambar", "sabzi", "roti", "naan", "paratha", "biryani", "thali", "rice", "dal",
    "kofta", "kebab", "tandoori", "chutney", "falooda", "gulab", "jamun", "rasgulla", "lassi", "mocktail",
    "shake", "platter", "starters", "mains", "dessert", "food", "dish", "condiments", "sp.-curry"
  ];

  if (foodKeywords.some(kw => combined.includes(kw))) {
    return "food";
  }

  // Icons / placeholders / general
  if (combined.includes("placeholder") || combined.includes("solid-color")) {
    return "general";
  }

  // Check if it appears primarily in food-menu or gallery
  const pages = urlToPages[item.source_url] || [];
  if (pages.includes("food-menu") || pages.includes("our-menus")) {
    return "food";
  }
  if (pages.includes("gallery")) {
    return "gallery";
  }
  if (pages.includes("about-us")) {
    return "about";
  }

  return "general";
}

const categorized = {};
for (const item of allMedia) {
  const cat = classifyItem(item);
  if (!categorized[cat]) categorized[cat] = [];
  categorized[cat].push(item);
}

console.log("Categorization breakdown:");
for (const [cat, list] of Object.entries(categorized)) {
  console.log(`- ${cat}: ${list.length} items`);
}

fs.writeFileSync("scripts/categorized-media.json", JSON.stringify(categorized, null, 2));
