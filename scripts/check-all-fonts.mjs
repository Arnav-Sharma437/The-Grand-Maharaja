import fs from "fs";

const pages = JSON.parse(fs.readFileSync("scripts/wp-pages.json", "utf8"));
const fontUrls = new Set();
for (const p of pages) {
  const content = p.content?.rendered || "";
  const matches = [...content.matchAll(/https?:\/\/[^\s"'>]+\.(?:woff2?|ttf|otf|eot)/gi)];
  for (const m of matches) fontUrls.add(m[0]);
}
console.log("Font URLs in page contents:", Array.from(fontUrls));
