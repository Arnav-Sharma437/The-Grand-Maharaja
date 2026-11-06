import fs from "fs";

async function fetchFigmaMeta() {
  const url = "https://www.figma.com/api/files/zhxsbXmof90rH108j2OvcH";
  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      "Accept": "application/json",
    },
  });

  const data = await res.json();
  fs.writeFileSync("scripts/figma-meta.json", JSON.stringify(data, null, 2));
  console.log("Keys in data:", Object.keys(data));
  console.log("Keys in meta:", Object.keys(data.meta || {}));
  console.log("File name:", data.meta?.name);
  console.log("Thumbnail URL:", data.meta?.thumbnail_url);
}

fetchFigmaMeta().catch(console.error);
