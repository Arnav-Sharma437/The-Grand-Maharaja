import fs from "fs";

const html = fs.readFileSync("scripts/figma-raw.html", "utf8");
const matches = [...html.matchAll(/\/api\/[a-zA-Z0-9_\-\/]+/g)].map(m => m[0]);
console.log("API endpoints mentioned in raw HTML:");
console.log(Array.from(new Set(matches)));
