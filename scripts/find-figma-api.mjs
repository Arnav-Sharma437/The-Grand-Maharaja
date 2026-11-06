import fs from "fs";

const html = fs.readFileSync("scripts/figma-raw.html", "utf8");
const urls = [...html.matchAll(/https?:\/\/[^\s"'>]+/g)].map(m => m[0]);
const figmaUrls = urls.filter(u => u.includes("figma.com/api") || u.includes("/file/") || u.includes("proto"));
console.log("Figma URLs in HTML:", Array.from(new Set(figmaUrls)));
