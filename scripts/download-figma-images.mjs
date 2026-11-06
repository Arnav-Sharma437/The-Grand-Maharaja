import fs from "fs";
import path from "path";
import crypto from "crypto";

const batch = JSON.parse(fs.readFileSync("scripts/figma-image-batch.json", "utf8"));
const urls = batch.meta?.s3_urls || {};

const targetDir = "scripts/figma-images";
if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

// Pre-index our downloaded project assets by hash and filename
const projectAssets = new Map(); // hash -> localPath
function scan(dir) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) scan(full);
    else if (ent.isFile() && ent.name !== ".gitkeep") {
      const buf = fs.readFileSync(full);
      const h = crypto.createHash("md5").update(buf).digest("hex");
      projectAssets.set(h, full.replace(/\\/g, "/"));
    }
  }
}
scan("public/images");
console.log(`Indexed ${projectAssets.size} project assets.`);

async function main() {
  console.log(`Downloading ${Object.keys(urls).length} Figma images...`);
  const matches = [];

  for (const [hashKey, s3Url] of Object.entries(urls)) {
    try {
      const res = await fetch(s3Url);
      const buf = Buffer.from(await res.arrayBuffer());
      const ext = s3Url.includes(".png") || buf.slice(0, 8).toString("hex") === "89504e470d0a1a0a" ? "png" : "jpg";
      const localFile = path.join(targetDir, `${hashKey}.${ext}`);
      fs.writeFileSync(localFile, buf);

      const fileHash = crypto.createHash("md5").update(buf).digest("hex");
      const matchedLocal = projectAssets.get(fileHash);

      matches.push({
        figmaHash: hashKey,
        fileHash,
        sizeKB: (buf.length / 1024).toFixed(1),
        matchedLocal: matchedLocal || "NEW_OR_DIFFERENT_HASH",
      });
      console.log(`- Figma Image [${hashKey.slice(0, 8)}] (${(buf.length / 1024).toFixed(1)} KB) -> Matched: ${matchedLocal || "None"}`);
    } catch (e) {
      console.error(`Failed ${hashKey}:`, e.message);
    }
  }

  fs.writeFileSync("scripts/figma-matches.json", JSON.stringify(matches, null, 2));
}

main().catch(console.error);
