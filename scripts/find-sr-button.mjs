import fs from "fs";

const html = fs.readFileSync("scripts/figma-raw.html", "utf8");
const idx = html.indexOf("Screenreader support");
if (idx !== -1) {
  console.log(html.slice(Math.max(0, idx - 300), idx + 300));
} else {
  console.log("Not found in raw html");
}
