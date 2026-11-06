import fs from "fs";
import path from "path";

// Quick script to find matches between Figma downloaded images and our project assets
// We can compare file size ratios or inspect thumbnails
const figmaDir = "scripts/figma-images";
const figmaFiles = fs.readdirSync(figmaDir);

console.log("Figma files list:", figmaFiles);
