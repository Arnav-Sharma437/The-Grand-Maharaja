import fs from "fs";

function getPngDimensions(buffer) {
  if (buffer.toString("ascii", 12, 16) === "IHDR") {
    const width = buffer.readUInt32BE(16);
    const height = buffer.readUInt32BE(20);
    return { width, height };
  }
  return null;
}

for (let i = 1; i <= 6; i++) {
  const p = `scripts/clean-figma-desktop-${i}.png`;
  if (fs.existsSync(p)) {
    const buf = fs.readFileSync(p);
    const dim = getPngDimensions(buf);
    console.log(`clean-figma-desktop-${i}.png: ${dim.width}x${dim.height}, ${(buf.length / 1024).toFixed(1)} KB`);
  }
}
