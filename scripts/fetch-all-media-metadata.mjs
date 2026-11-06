import fs from "fs";

async function fetchAllMedia() {
  console.log("Fetching all media metadata from WordPress REST API...");
  let allMedia = [];
  let page = 1;
  let totalPages = 1;

  while (page <= totalPages) {
    const url = `https://thegrandmaharaja.co.uk/wp-json/wp/v2/media?per_page=100&page=${page}`;
    console.log(`Fetching page ${page}: ${url}`);
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0" },
    });

    if (!res.ok) {
      console.error(`Failed to fetch page ${page}: ${res.status} ${res.statusText}`);
      break;
    }

    totalPages = parseInt(res.headers.get("x-wp-totalpages") || "1", 10);
    const totalItems = parseInt(res.headers.get("x-wp-total") || "0", 10);
    console.log(`Total items reported by WP: ${totalItems}, Total pages: ${totalPages}`);

    const items = await res.json();
    allMedia = allMedia.concat(items);
    page++;
  }

  console.log(`Fetched ${allMedia.length} media items.`);
  fs.writeFileSync("scripts/wp-media-all.json", JSON.stringify(allMedia, null, 2));

  // Analyze media types
  const mimeCounts = {};
  for (const item of allMedia) {
    const mime = item.mime_type || "unknown";
    mimeCounts[mime] = (mimeCounts[mime] || 0) + 1;
  }
  console.log("\nMIME types:", mimeCounts);

  // Print first 20 titles and source URLs
  console.log("\nSample media items:");
  for (const item of allMedia.slice(0, 20)) {
    console.log(`- [${item.id}] [${item.mime_type}] ${item.title?.rendered} (${item.media_details?.width}x${item.media_details?.height}) -> ${item.source_url}`);
  }
}

fetchAllMedia().catch(console.error);
