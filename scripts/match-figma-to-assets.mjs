import fs from "fs";
import path from "path";

// Let's inspect the files in scripts/figma-images
const figmaFiles = fs.readdirSync("scripts/figma-images");
console.log(`Analyzing ${figmaFiles.length} Figma images...`);

// List each file with size
for (const f of figmaFiles) {
  const stat = fs.statSync(path.join("scripts/figma-images", f));
  console.log(f, stat.size);
}
