import fs from "fs";

async function downloadS3Thumb() {
  const meta = JSON.parse(fs.readFileSync("scripts/figma-meta.json"));
  const thumbUrl = meta.meta?.thumbnail_url;
  if (!thumbUrl) {
    console.log("No thumb url");
    return;
  }
  const res = await fetch(thumbUrl);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync("scripts/figma-full-thumbnail.png", buf);
  console.log("Saved s3 thumbnail:", buf.length, "bytes");
}

downloadS3Thumb().catch(console.error);
