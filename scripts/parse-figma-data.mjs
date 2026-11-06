import fs from "fs";

// Download thumbnail image
async function getThumbnail() {
  const thumbUrl = "https://www.figma.com/file/zhxsbXmof90rH108j2OvcH/thumbnail?ver=thumbnails%2F7a34ca30-02fa-4af3-934a-e9e7bfad0a35&t=q1S31Frxi81tecPR-1";
  try {
    const res = await fetch(thumbUrl, { headers: { "User-Agent": "Mozilla/5.0" } });
    const buf = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync("scripts/figma-thumbnail.png", buf);
    console.log("Saved thumbnail:", buf.length, "bytes");
  } catch (e) {
    console.error("Thumbnail error:", e.message);
  }
}

// Inspect script 3
function parseScript3() {
  const html = fs.readFileSync("scripts/figma-raw.html", "utf8");
  // Look for JSON or initial state
  const matches = [...html.matchAll(/<script[^>]*id=["']([^"']+)["'][^>]*>([\s\S]*?)<\/script>/gi)];
  for (const m of matches) {
    console.log("Script with ID:", m[1], "length:", m[2].length);
  }

  // Look for INITIAL_OPTIONS or bootstrap data
  const jsonMatches = [...html.matchAll(/data-initial=["']([^"']+)["']/gi)];
  console.log("data-initial matches:", jsonMatches.length);

  // Search for node-id 58-1716 or 58:1716 or frame names
  const regex = /"58:1716"[^}]+/g;
  const match = html.match(regex);
  if (match) {
    console.log("Found 58:1716 match:", match.slice(0, 3));
  }
}

getThumbnail();
parseScript3();
