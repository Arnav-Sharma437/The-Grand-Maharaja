import fs from "fs";

async function inspectFigma() {
  const url = "https://www.figma.com/proto/zhxsbXmof90rH108j2OvcH/The-Grand-Maharaja?node-id=58-1716&p=f&viewport=364%2C106%2C0.08&t=q1S31Frxi81tecPR-1&scaling=scale-down-width&content-scaling=fixed&page-id=58%3A1119";
  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
    },
  });

  console.log("Status:", res.status);
  const html = await res.text();
  console.log("HTML Length:", html.length);
  fs.writeFileSync("scripts/figma-raw.html", html);

  const title = html.match(/<title>([^<]+)<\/title>/i)?.[1];
  console.log("Title:", title);

  const metaMatches = [...html.matchAll(/<meta\s+([^>]+)>/gi)];
  for (const m of metaMatches) {
    if (m[1].includes("og:") || m[1].includes("twitter:") || m[1].includes("description")) {
      console.log("Meta:", m[1]);
    }
  }

  // Check for initial state or embedded JSON data
  const scriptMatches = [...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/gi)];
  console.log(`Found ${scriptMatches.length} script tags`);
  for (let i = 0; i < scriptMatches.length; i++) {
    const s = scriptMatches[i][1];
    if (s.includes("INITIAL_STATE") || s.includes("figma") || s.includes("fullscreen") || s.includes("58-1716") || s.includes("58:1716")) {
      console.log(`Script ${i} matches keywords, length: ${s.length}`);
      fs.writeFileSync(`scripts/figma-script-${i}.txt`, s.slice(0, 10000));
    }
  }
}

inspectFigma().catch(console.error);
