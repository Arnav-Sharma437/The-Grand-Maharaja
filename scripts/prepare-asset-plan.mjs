import fs from "fs";

const allMedia = JSON.parse(fs.readFileSync("scripts/wp-media-all.json", "utf8"));
const pageMap = JSON.parse(fs.readFileSync("scripts/page-media-map.json", "utf8"));

// Build reverse lookup of URLs to pages
const urlToPages = {};
for (const [slug, info] of Object.entries(pageMap)) {
  for (const rawUrl of info.mediaUrls) {
    const cleanUrl = rawUrl.split("?")[0];
    if (!urlToPages[cleanUrl]) urlToPages[cleanUrl] = new Set();
    urlToPages[cleanUrl].add(slug);

    // Also match without -scaled or dimensions like -1024x683
    const baseName = cleanUrl.replace(/-\d+x\d+(\.\w+)$/, "$1").replace(/-scaled(\.\w+)$/, "$1");
    if (!urlToPages[baseName]) urlToPages[baseName] = new Set();
    urlToPages[baseName].add(slug);
  }
}

// Function to categorize and generate clean descriptive filename
function getAssetPlan(item) {
  const originalUrl = item.source_url;
  const originalFilename = originalUrl.split("/").pop();
  const ext = originalFilename.split(".").pop().toLowerCase();
  const title = (item.title?.rendered || "").trim();
  const alt = (item.alt_text || "").trim();
  const width = item.media_details?.width;
  const height = item.media_details?.height;
  const mime = item.mime_type;

  // Pages referencing this
  const pagesSet = urlToPages[originalUrl] || urlToPages[originalUrl.replace(/-scaled(\.\w+)$/, "$1")] || new Set();
  const pages = Array.from(pagesSet);

  let category = "general";
  let descriptiveName = originalFilename;

  const lower = `${originalUrl} ${originalFilename} ${title} ${alt}`.toLowerCase();

  // Branding
  if (
    lower.includes("logo") ||
    lower.includes("circle-1200mm") ||
    lower.includes("tgm_logo")
  ) {
    category = "branding";
    if (originalFilename.toLowerCase().includes("circle-1200mm")) {
      descriptiveName = `tgm-circular-crest-${item.id}.${ext}`;
    } else if (originalFilename.toLowerCase() === "logo.png") {
      descriptiveName = `tgm-master-logo-5120.${ext}`;
    } else if (originalFilename.toLowerCase().includes("cropped-logo")) {
      descriptiveName = `tgm-logo-cropped-512.${ext}`;
    } else if (originalFilename.toLowerCase().includes("promo")) {
      descriptiveName = `tgm-logo-promo-video.${ext}`;
    } else if (originalFilename.toLowerCase().includes("tgm_logo_21")) {
      descriptiveName = `tgm-gold-logo-1600.${ext}`;
    } else if (originalFilename.toLowerCase().includes("new_logo_tgm")) {
      descriptiveName = `tgm-new-crest-logo.${ext}`;
    } else if (originalFilename.toLowerCase().includes("tgm_logo")) {
      descriptiveName = `tgm-logo-standard.${ext}`;
    }
  }
  // Hero & Banners
  else if (
    lower.includes("home_slider") ||
    lower.includes("tgm_banner") ||
    lower.includes("promo_banner")
  ) {
    category = "hero";
    if (lower.includes("home_slider_1")) descriptiveName = `hero-slider-royal-ambiance-1.${ext}`;
    else if (lower.includes("home_slider_2")) descriptiveName = `hero-slider-cuisine-spread-2.${ext}`;
    else if (lower.includes("home_slider_3")) descriptiveName = `hero-slider-dining-experience-3.${ext}`;
    else if (lower.includes("tgm_banner_video")) descriptiveName = `hero-banner-promo-video.${ext}`;
    else if (lower.includes("promo_banner")) descriptiveName = `hero-promotional-banner-${item.id}.${ext}`;
  }
  // Menu assets
  else if (
    lower.includes("menu") ||
    ext === "pdf" ||
    lower.includes("drinks_menu") ||
    lower.includes("food_menu")
  ) {
    category = "menu";
    if (ext === "pdf") {
      if (lower.includes("drinks")) descriptiveName = `the-grand-maharaja-drinks-menu-${item.id}.pdf`;
      else if (lower.includes("food")) descriptiveName = `the-grand-maharaja-food-menu-${item.id}.pdf`;
      else descriptiveName = `the-grand-maharaja-complete-menu-${item.id}.pdf`;
    } else {
      if (lower.includes("combined")) descriptiveName = `menu-combined-board.${ext}`;
      else if (lower.includes("drinks")) descriptiveName = `drinks-menu-card-${item.id}.${ext}`;
      else if (lower.includes("food")) descriptiveName = `food-menu-card-${item.id}.${ext}`;
    }
  }
  // Banquet / Events
  else if (
    lower.includes("banquet") ||
    lower.includes("catering") ||
    lower.includes("hall") ||
    lower.includes("party") ||
    lower.includes("reception")
  ) {
    category = "banquet";
  }
  // Gallery / Restaurant Interiors / Ambiance
  else if (
    lower.includes("gallery") ||
    originalFilename.startsWith("IMG_013") ||
    originalFilename.startsWith("IMG_9223") ||
    originalFilename.startsWith("IMG_9879") ||
    originalFilename.includes("WhatsApp-Video") ||
    pages.includes("gallery")
  ) {
    // If it's on gallery page and not a specific food dish
    const isFood = [
      "dosa", "dhosa", "chaat", "paneer", "panner", "curry", "soup", "noodles", "ice-cream", "halwa",
      "kachori", "samosa", "bhaji", "chole", "chips", "fries", "raita", "salad", "subji", "pulao", "papad",
      "tea", "coffee", "soda", "pani", "sweet", "manchurian", "aubergine", "mushroom", "tofu"
    ].some(kw => lower.includes(kw));

    if (isFood) {
      category = "food";
    } else {
      category = "gallery";
      if (originalFilename.startsWith("IMG_013")) descriptiveName = `gallery-interior-${item.id}.${ext}`;
      else if (originalFilename.startsWith("IMG_9223")) descriptiveName = `gallery-dining-hall-${item.id}.${ext}`;
      else if (originalFilename.startsWith("IMG_9879")) descriptiveName = `gallery-decor-${item.id}.${ext}`;
      else if (originalFilename.includes("WhatsApp-Video")) descriptiveName = `gallery-restaurant-video-${item.id}.${ext}`;
    }
  }
  // Testimonials / portraits
  else if (
    lower.includes("testimonial") ||
    lower.includes("couple-with-healthy-fo") ||
    lower.includes("portrait")
  ) {
    category = "testimonials";
    descriptiveName = `testimonial-happy-guests-${item.id}.${ext}`;
  }
  // About section
  else if (
    lower.includes("indian-condiments") ||
    pages.includes("about-us")
  ) {
    category = "about";
    if (lower.includes("indian-condiments")) descriptiveName = `about-royal-indian-spices-condiments.${ext}`;
  }
  // Food dishes
  else {
    const foodKeywords = [
      "curry", "bhaji", "ice-cream", "ice_cream", "halwa", "shrikhand", "malai", "pista", "chocolate", "vanilla",
      "dosa", "dhosa", "uttapam", "uthapp", "chole", "bhature", "chaat", "puri", "bhel", "kachori", "samosa",
      "panner", "paneer", "soup", "pulao", "papad", "chips", "fries", "potato", "sweetcourn", "manchaw",
      "tikki", "idli", "sambar", "sabzi", "roti", "naan", "paratha", "biryani", "thali", "rice", "dal",
      "kofta", "kebab", "tandoori", "chutney", "falooda", "gulab", "jamun", "rasgulla", "lassi", "mocktail",
      "shake", "platter", "starters", "mains", "dessert", "food", "dish", "condiments", "sp.-curry", "coffee",
      "tea", "soda", "pani", "salad", "raita", "subji", "aubergine", "noodles", "manchurian", "mushroom",
      "tofu", "mughal", "deraproducts", "chola", "chana", "maharaja", "sweet", "corn"
    ];
    if (foodKeywords.some(kw => lower.includes(kw)) || pages.includes("food-menu") || pages.includes("our-menus")) {
      category = "food";
    } else if (lower.includes("solid-color") || lower.includes("placeholder")) {
      category = "general";
    }
  }

  return {
    id: item.id,
    originalUrl,
    originalFilename,
    descriptiveName,
    category,
    mime,
    width: width || "N/A",
    height: height || "N/A",
    title,
    alt,
    pages,
  };
}

const plan = allMedia.map(getAssetPlan);
fs.writeFileSync("scripts/asset-plan.json", JSON.stringify(plan, null, 2));

const summary = {};
for (const p of plan) {
  summary[p.category] = (summary[p.category] || 0) + 1;
}
console.log("Asset Plan Summary by category:", summary);
