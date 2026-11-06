import fs from "fs";

const candidates = JSON.parse(fs.readFileSync("scripts/master-assets-candidates.json", "utf8"));

async function testCandidate(c) {
  if (c.fromWpMedia) {
    return { ...c, exists: true };
  }
  try {
    const res = await fetch(c.canonicalUrl, {
      method: "HEAD",
      headers: { "User-Agent": "Mozilla/5.0" },
    });
    if (res.status === 200) {
      const len = res.headers.get("content-length");
      const type = res.headers.get("content-type");
      return { ...c, exists: true, size: parseInt(len || "0", 10), mime: type };
    }
  } catch (e) {}
  return { ...c, exists: false };
}

async function run() {
  console.log(`Testing ${candidates.length} candidate URLs...`);
  const batchSize = 15;
  const verified = [];

  for (let i = 0; i < candidates.length; i += batchSize) {
    const batch = candidates.slice(i, i + batchSize);
    const results = await Promise.all(batch.map(testCandidate));
    for (const r of results) {
      if (r.exists) verified.push(r);
    }
    process.stdout.write(`\rTested ${Math.min(i + batchSize, candidates.length)}/${candidates.length} (Verified: ${verified.length})`);
  }

  console.log(`\nVerified existing master assets on server: ${verified.length}`);
  fs.writeFileSync("scripts/verified-master-assets.json", JSON.stringify(verified, null, 2));
}

run().catch(console.error);
