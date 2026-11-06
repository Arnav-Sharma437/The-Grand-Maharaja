import fs from "fs";
import path from "path";

function getPngDimensions(buffer) {
  if (buffer.toString("ascii", 12, 16) === "IHDR") {
    const width = buffer.readUInt32BE(16);
    const height = buffer.readUInt32BE(20);
    return { width, height };
  }
  return null;
}

function getJpegDimensions(buffer) {
  let offset = 2;
  while (offset < buffer.length) {
    if (buffer[offset] !== 0xff) break;
    const marker = buffer[offset + 1];
    if (marker === 0xc0 || marker === 0xc2) {
      const height = buffer.readUInt16BE(offset + 5);
      const width = buffer.readUInt16BE(offset + 7);
      return { width, height };
    }
    const len = buffer.readUInt16BE(offset + 2);
    offset += 2 + len;
  }
  return null;
}

const dir = "public/images/hero";
const files = fs.readdirSync(dir).filter(f => !f.endsWith(".gitkeep"));

for (const f of files) {
  const p = path.join(dir, f);
  const buf = fs.readFileSync(p);
  let dim = null;
  if (f.endsWith(".png")) dim = getPngDimensions(buf);
  else if (f.endsWith(".jpeg") || f.endsWith(".jpg")) dim = getJpegDimensions(buf);
  else if (f.endsWith(".mp4")) dim = { width: "video", height: "video" };
  console.log(`${f}: ${dim ? `${dim.width}x${dim.height}` : "unknown"} (${(buf.length / 1024).toFixed(1)} KB)`);
}
