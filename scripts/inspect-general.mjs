import fs from "fs";

const cat = JSON.parse(fs.readFileSync("scripts/categorized-media.json", "utf8"));
console.log("Items in 'general':");
for (const item of cat.general) {
  const filename = item.source_url.split("/").pop();
  console.log(`- [${item.id}] ${filename} | title: "${item.title?.rendered}" | alt: "${item.alt_text}"`);
}
