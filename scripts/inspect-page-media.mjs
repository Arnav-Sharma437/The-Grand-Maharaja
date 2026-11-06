import fs from "fs";

const pageMap = JSON.parse(fs.readFileSync("scripts/page-media-map.json", "utf8"));
for (const [slug, p] of Object.entries(pageMap)) {
  console.log(`=== Page: ${slug} (${p.mediaUrls.length} urls) ===`);
  for (const u of p.mediaUrls) {
    console.log(" ", u);
  }
}
