import fs from "fs";

const discovered = JSON.parse(fs.readFileSync("scripts/discovered-page-assets.json", "utf8"));
const wpMedia = JSON.parse(fs.readFileSync("scripts/wp-media-all.json", "utf8"));

// 1. Gather all unique base URLs
const masterUrls = new Map(); // canonicalUrl -> { sources, originalUrls, pages }

// Add all wpMedia source_urls
for (const m of wpMedia) {
  const url = m.source_url;
  if (!url) continue;
  masterUrls.set(url, {
    canonicalUrl: url,
    title: m.title?.rendered || "",
    alt: m.alt_text || "",
    width: m.media_details?.width || "N/A",
    height: m.media_details?.height || "N/A",
    mime: m.mime_type,
    pages: new Set(),
    fromWpMedia: true,
  });
}

// Add from discovered page assets
for (const [rawUrl, pageList] of Object.entries(discovered)) {
  const cleanUrl = rawUrl.split("?")[0];
  // Determine canonical master URL (strip thumbnail suffixes like -300x300)
  const canonical = cleanUrl.replace(/-\d+x\d+(\.\w+)$/, "$1");

  if (!masterUrls.has(canonical)) {
    masterUrls.set(canonical, {
      canonicalUrl: canonical,
      title: "",
      alt: "",
      width: "N/A",
      height: "N/A",
      mime: "",
      pages: new Set(pageList),
      fromWpMedia: false,
    });
  } else {
    for (const p of pageList) {
      masterUrls.get(canonical).pages.add(p);
    }
  }
}

console.log(`Total Master/Canonical URLs identified: ${masterUrls.size}`);

// Write list for batch testing
const masterList = Array.from(masterUrls.values()).map(it => ({
  ...it,
  pages: Array.from(it.pages),
}));

fs.writeFileSync("scripts/master-assets-candidates.json", JSON.stringify(masterList, null, 2));
