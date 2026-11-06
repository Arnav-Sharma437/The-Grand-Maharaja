import fs from "fs";

const allMedia = JSON.parse(fs.readFileSync("scripts/wp-media-all.json", "utf8"));
const pageMap = JSON.parse(fs.readFileSync("scripts/page-media-map.json", "utf8"));

console.log(`Total Media Items: ${allMedia.length}`);

// Check unique items by source_url
const uniqueUrls = new Set();
const items = [];

for (const m of allMedia) {
  const url = m.source_url;
  if (!url) continue;
  if (uniqueUrls.has(url)) continue;
  uniqueUrls.add(url);
  items.push({
    id: m.id,
    title: m.title?.rendered,
    slug: m.slug,
    mime: m.mime_type,
    width: m.media_details?.width,
    height: m.media_details?.height,
    url: m.source_url,
    alt: m.alt_text,
    caption: m.caption?.rendered,
    description: m.description?.rendered,
  });
}

console.log(`Unique Media URLs: ${items.length}`);

// Group by name patterns / keywords
for (const it of items) {
  console.log(`[${it.id}] [${it.mime}] [${it.width}x${it.height}] ${it.url.split('/').pop()} | Title: ${it.title}`);
}
