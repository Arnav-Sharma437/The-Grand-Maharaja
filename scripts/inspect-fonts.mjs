import fs from "fs";

async function inspectFonts() {
  console.log("Inspecting fonts from live website...");
  const res = await fetch("https://thegrandmaharaja.co.uk/", {
    headers: { "User-Agent": "Mozilla/5.0" },
  });
  const html = await res.text();
  fs.writeFileSync("scripts/home.html", html);

  // Look for font links in HTML
  const fontLinks = [];
  const linkMatches = [...html.matchAll(/<link[^>]+>/gi)];
  for (const m of linkMatches) {
    if (m[0].includes("font") || m[0].includes("css")) {
      const href = m[0].match(/href=["']([^"']+)["']/i)?.[1];
      if (href) fontLinks.push(href);
    }
  }

  console.log("CSS / Font links found in HTML:", fontLinks.length);
  for (const l of fontLinks) {
    console.log("  ", l);
  }

  // Fetch CSS files to find @font-face and font-family
  const fontFamilies = new Set();
  const fontFiles = new Set();

  for (const cssUrl of fontLinks) {
    if (!cssUrl.startsWith("http")) continue;
    try {
      const cssRes = await fetch(cssUrl, { headers: { "User-Agent": "Mozilla/5.0" } });
      const css = await cssRes.text();
      
      // Look for font-family
      const ffMatches = [...css.matchAll(/font-family\s*:\s*([^;!}]+)/gi)];
      for (const ffm of ffMatches) {
        fontFamilies.add(ffm[1].trim().replace(/["']/g, ""));
      }

      // Look for font files (.woff, .woff2, .ttf, .otf, .eot)
      const fileMatches = [...css.matchAll(/url\(([^)]+\.(?:woff2?|ttf|otf|eot)[^)]*)\)/gi)];
      for (const fm of fileMatches) {
        let fUrl = fm[1].trim().replace(/['"]/g, "");
        if (!fUrl.startsWith("http")) {
          try {
            fUrl = new URL(fUrl, cssUrl).toString();
          } catch (e) {}
        }
        fontFiles.add(fUrl);
      }
    } catch (e) {
      console.error(`Error fetching CSS ${cssUrl}:`, e.message);
    }
  }

  console.log("\nUnique font families found:", Array.from(fontFamilies));
  console.log("\nDirect font file URLs found:", Array.from(fontFiles));
}

inspectFonts().catch(console.error);
