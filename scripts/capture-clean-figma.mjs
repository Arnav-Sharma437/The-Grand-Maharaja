import { spawn } from "child_process";
import fs from "fs";

async function main() {
  const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
  const chromeProcess = spawn(chromePath, [
    "--headless=new",
    "--remote-debugging-port=9224",
    "--disable-gpu",
    "--no-sandbox",
    "--window-size=1920,1080",
  ]);

  await new Promise(r => setTimeout(r, 2000));

  try {
    const url = "https://www.figma.com/proto/zhxsbXmof90rH108j2OvcH/The-Grand-Maharaja?node-id=58-1716&p=f&viewport=364%2C106%2C0.08&scaling=scale-down-width&page-id=58%3A1119";
    const newTabRes = await fetch("http://localhost:9224/json/new?" + encodeURIComponent(url), {
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

      console.log("Waiting 10 seconds for initial render...");
      await new Promise(r => setTimeout(r, 10000));

      // Remove cookie banner or any overlays
      await send("Runtime.evaluate", {
        expression: `
          (function() {
            // Click cookie button if exists
            const buttons = Array.from(document.querySelectorAll('button'));
            const acceptBtn = buttons.find(b => b.innerText.includes('Allow all') || b.innerText.includes('Accept'));
            if (acceptBtn) acceptBtn.click();

            // Also hide any cookie containers
            const cookieEl = document.querySelector('[class*="cookie"], [id*="cookie"]');
            if (cookieEl) cookieEl.style.display = 'none';

            // Find canvas
            const canvas = document.querySelector('canvas');
            return {
              hasCanvas: !!canvas,
              canvasWidth: canvas ? canvas.width : 0,
              canvasHeight: canvas ? canvas.height : 0
            };
          })()
        `,
        returnByValue: true,
      });

      console.log("Cookie dismissed. Waiting 5s for clear render...");
      await new Promise(r => setTimeout(r, 5000));

      // Capture desktop high-res clean screens
      console.log("Capturing desktop screens...");
      for (let i = 1; i <= 6; i++) {
        const shot = await send("Page.captureScreenshot", { format: "png" });
        fs.writeFileSync(`scripts/clean-figma-desktop-${i}.png`, Buffer.from(shot.data, "base64"));
        console.log(`Saved scripts/clean-figma-desktop-${i}.png`);

        // Scroll down
        await send("Input.dispatchMouseEvent", {
          type: "mouseWheel",
          x: 960,
          y: 540,
          deltaX: 0,
          deltaY: 800,
        });
        await new Promise(r => setTimeout(r, 2000));
      }

      console.log("Done capturing clean desktop screenshots!");
      ws.close();
      chromeProcess.kill();
    };
  } catch (err) {
    console.error("Error:", err.message);
    chromeProcess.kill();
  }
}

main().catch(console.error);
