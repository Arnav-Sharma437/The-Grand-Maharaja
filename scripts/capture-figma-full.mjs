import { spawn } from "child_process";
import fs from "fs";

async function main() {
  const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
  const chromeProcess = spawn(chromePath, [
    "--headless=new",
    "--remote-debugging-port=9222",
    "--disable-gpu",
    "--no-sandbox",
    "--window-size=1920,1080",
  ]);

  await new Promise(r => setTimeout(r, 2000));

  try {
    const newTabRes = await fetch("http://localhost:9222/json/new?https://www.figma.com/proto/zhxsbXmof90rH108j2OvcH/The-Grand-Maharaja?node-id=58-1716&p=f&viewport=364%2C106%2C0.08&scaling=scale-down-width&page-id=58%3A1119", {
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
      await send("Page.enable");
      await send("Runtime.enable");
      await send("Input.enable");

      console.log("Waiting 12 seconds for canvas render...");
      await new Promise(r => setTimeout(r, 12000));

      // Capture top section
      console.log("Capturing 1-top...");
      let shot = await send("Page.captureScreenshot", { format: "png" });
      fs.writeFileSync("scripts/figma-section-1.png", Buffer.from(shot.data, "base64"));

      // Send PageDown / wheel events to scroll down the prototype
      for (let i = 2; i <= 6; i++) {
        console.log(`Scrolling down for section ${i}...`);
        await send("Input.dispatchMouseEvent", {
          type: "mouseWheel",
          x: 960,
          y: 540,
          deltaX: 0,
          deltaY: 900,
        });
        await new Promise(r => setTimeout(r, 2000));
        shot = await send("Page.captureScreenshot", { format: "png" });
        fs.writeFileSync(`scripts/figma-section-${i}.png`, Buffer.from(shot.data, "base64"));
      }

      console.log("Done scrolling and capturing!");
      ws.close();
      chromeProcess.kill();
    };
  } catch (err) {
    console.error("Error:", err.message);
    chromeProcess.kill();
  }
}

main().catch(console.error);
