import fs from "fs";

async function inspectPages() {
  console.log("Fetching all pages...");
  const res = await fetch("https://thegrandmaharaja.co.uk/wp-json/wp/v2/pages?per_page=100", {
    headers: { "User-Agent": "Mozilla/5.0" },
  });
  const pages = await res.json();
  fs.writeFileSync("scripts/wp-pages.json", JSON.stringify(pages, null, 2));

  console.log(`Fetched ${pages.length} pages.`);

  const pageImageMap = {};
  for (const page of pages) {
    const content = page.content?.rendered || "";
    // extract all img src and wp-content urls
    const imgMatches = [...content.matchAll(/(?:src|href)=["']([^"']+\.(?:png|jpe?g|webp|svg|pdf|mp4|mov))["']/gi)];
    const urls = imgMatches.map(m => m[1]);
    pageImageMap[page.slug] = {
      id: page.id,
      title: page.title?.rendered,
      link: page.link,
      mediaUrls: Array.from(new Set(urls)),
    };
    console.log(`Page: ${page.slug} (${page.title?.rendered}) -> ${urls.length} media references`);
  }

  fs.writeFileSync("scripts/page-media-map.json", JSON.stringify(pageImageMap, null, 2));
}

inspectPages().catch(console.error);
