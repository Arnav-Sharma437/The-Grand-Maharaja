import { spawn } from "child_process";
import fs from "fs";

async function main() {
  console.log("Launching Chrome headless with remote debugging...");
  const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
  const chromeProcess = spawn(chromePath, [
    "--headless=new",
    "--remote-debugging-port=9222",
    "--disable-gpu",
    "--no-sandbox",
    "--window-size=1920,1080",
  ]);

  // Wait for Chrome to start
  await new Promise(r => setTimeout(r, 2000));

  try {
    const versionRes = await fetch("http://localhost:9222/json/version");
    const versionData = await versionRes.json();
    console.log("Connected to Chrome:", versionData.Browser);

    const newTabRes = await fetch("http://localhost:9222/json/new?https://www.figma.com/proto/zhxsbXmof90rH108j2OvcH/The-Grand-Maharaja?node-id=58-1716&p=f&viewport=364%2C106%2C0.08&scaling=scale-down-width&page-id=58%3A1119", {
      method: "PUT",
    });
    const tabData = await newTabRes.json();
    console.log("Opened tab, ws url:", tabData.webSocketDebuggerUrl);

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
      console.log("WebSocket connected. Enabling Page & Runtime...");
      await send("Page.enable");
      await send("Runtime.enable");

      // Wait 12 seconds for Figma WASM canvas to load and render the prototype
      console.log("Waiting 12 seconds for Figma canvas to render...");
      await new Promise(r => setTimeout(r, 12000));

      console.log("Capturing screenshot of viewport...");
      const screenshot = await send("Page.captureScreenshot", {
        format: "png",
        captureBeyondViewport: false,
      });

      if (screenshot && screenshot.data) {
        fs.writeFileSync("scripts/figma-viewport.png", Buffer.from(screenshot.data, "base64"));
        console.log("Saved scripts/figma-viewport.png");
      }

      ws.close();
      chromeProcess.kill();
    };
  } catch (err) {
    console.error("Error in CDP capture:", err.message);
    chromeProcess.kill();
  }
}

main().catch(console.error);
