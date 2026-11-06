import fs from "fs";

const pages = [
  { slug: "home", url: "https://thegrandmaharaja.co.uk/" },
  { slug: "about-us", url: "https://thegrandmaharaja.co.uk/about-us/" },
  { slug: "our-menus", url: "https://thegrandmaharaja.co.uk/our-menus/" },
  { slug: "food-menu", url: "https://thegrandmaharaja.co.uk/food-menu/" },
  { slug: "drinks-menu", url: "https://thegrandmaharaja.co.uk/drinks-menu/" },
  { slug: "gallery", url: "https://thegrandmaharaja.co.uk/gallery/" },
  { slug: "contact-us", url: "https://thegrandmaharaja.co.uk/contact-us/" },
];

async function crawl() {
  const discoveredMedia = new Map(); // url -> Set of pages where seen

  for (const page of pages) {
    console.log(`Fetching HTML for ${page.slug} (${page.url})...`);
    try {
      const res = await fetch(page.url, {
        headers: { "User-Agent": "Mozilla/5.0" },
      });
      const html = await res.text();

      // Find all media URLs
      const regex = /(?:https?:\/\/thegrandmaharaja\.co\.uk[^\s"'>\)]+?\.(?:png|jpe?g|webp|svg|pdf|mp4|mov|woff2?|ttf|eot))/gi;
      const matches = [...html.matchAll(regex)];

      console.log(`Found ${matches.length} media links on ${page.slug}`);
      for (const m of matches) {
        let u = m[0].split("?")[0];
        // If it's a thumbnail like -300x300, also check base url
        const cleanBase = u.replace(/-\d+x\d+(\.\w+)$/, "$1");
        
        if (!discoveredMedia.has(u)) discoveredMedia.set(u, new Set());
        discoveredMedia.get(u).add(page.slug);

        if (!discoveredMedia.has(cleanBase)) discoveredMedia.set(cleanBase, new Set());
        discoveredMedia.get(cleanBase).add(page.slug);
      }
    } catch (err) {
      console.error(`Failed ${page.slug}:`, err.message);
    }
  }

  const resultObj = {};
  for (const [u, pageSet] of discoveredMedia.entries()) {
    resultObj[u] = Array.from(pageSet);
  }

  fs.writeFileSync("scripts/discovered-page-assets.json", JSON.stringify(resultObj, null, 2));
  console.log(`Total unique media URLs discovered from pages: ${discoveredMedia.size}`);
}

crawl().catch(console.error);
