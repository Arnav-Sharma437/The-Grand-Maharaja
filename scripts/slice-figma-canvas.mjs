import { spawn } from "child_process";
import fs from "fs";

async function main() {
  const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
  const chromeProcess = spawn(chromePath, [
    "--headless=new",
    "--remote-debugging-port=9227",
    "--disable-gpu",
    "--no-sandbox",
    "--window-size=1540,1100",
  ]);

  await new Promise(r => setTimeout(r, 2000));

  try {
    const url = "https://www.figma.com/proto/zhxsbXmof90rH108j2OvcH/The-Grand-Maharaja?node-id=58-1716&p=f&viewport=364%2C106%2C0.08&scaling=scale-down-width&content-scaling=fixed&page-id=58%3A1119";
    const newTabRes = await fetch("http://localhost:9227/json/new?" + encodeURIComponent(url), {
      method: "PUT",
    });
    const tabData = await newTabRes.json();
    const ws = new WebSocket(tabData.webSocketDebuggerUrl);

    let msgId = 1;
    function send(method, params = {}) {
      return new Promise((resolve) => {
        const id = msgId++;
        const handler = (event) => {
          const res = JSON.parse(event.data);
          if (res.id === id) {
            ws.removeEventListener("message", handler);
            resolve(res.result);
          }
        };
        ws.addEventListener("message", handler);
        ws.send(JSON.stringify({ id, method, params }));
      });
    }

    ws.onopen = async () => {
      await send("Runtime.enable");
      await send("Page.enable");
      await send("Input.enable");

      console.log("Waiting 12s for prototype to render on 1540x1100 window...");
      await new Promise(r => setTimeout(r, 12000));

      // Click accept cookies or remove overlays
      await send("Runtime.evaluate", {
        expression: `
          (function() {
            const btns = Array.from(document.querySelectorAll('button'));
            const accept = btns.find(b => b.innerText.includes('Allow all') || b.innerText.includes('Accept'));
            if (accept) accept.click();
            const cookies = document.querySelectorAll('[class*="cookie"]');
            cookies.forEach(c => c.remove());
          })()
        `,
        returnByValue: true,
      });

      await new Promise(r => setTimeout(r, 3000));

      // Slices to capture (covering 7658px total height)
      const slices = [
        { name: "slice-1-hero-header", scrollY: 0 },
        { name: "slice-2-heritage-pillars", scrollY: 1000 },
        { name: "slice-3-featured-dishes", scrollY: 1000 },
        { name: "slice-4-signature-menu", scrollY: 1000 },
        { name: "slice-5-banqueting-events", scrollY: 1000 },
        { name: "slice-6-reviews-social", scrollY: 1000 },
        { name: "slice-7-gallery-reels", scrollY: 1000 },
        { name: "slice-8-contact-footer", scrollY: 1000 },
      ];

      for (let i = 0; i < slices.length; i++) {
        const s = slices[i];
        if (s.scrollY > 0) {
          console.log(`Scrolling ${s.scrollY}px for ${s.name}...`);
          await send("Input.dispatchMouseEvent", {
            type: "mouseWheel",
            x: 770,
            y: 500,
            deltaX: 0,
            deltaY: s.scrollY,
          });
          await new Promise(r => setTimeout(r, 2000));
        }
        console.log(`Capturing ${s.name}...`);
        const shot = await send("Page.captureScreenshot", { format: "png" });
        fs.writeFileSync(`scripts/${s.name}.png`, Buffer.from(shot.data, "base64"));
      }

      console.log("All 8 slices captured successfully!");
      ws.close();
      chromeProcess.kill();
    };
  } catch (err) {
    console.error("Error:", err.message);
    chromeProcess.kill();
  }
}

main().catch(console.error);
