import { spawn } from "child_process";
import fs from "fs";

async function main() {
  const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
  const chromeProcess = spawn(chromePath, [
    "--headless=new",
    "--remote-debugging-port=9226",
    "--disable-gpu",
    "--no-sandbox",
    "--window-size=1920,1080",
  ]);

  await new Promise(r => setTimeout(r, 2000));

  try {
    const url = "https://www.figma.com/proto/zhxsbXmof90rH108j2OvcH/The-Grand-Maharaja?node-id=58-1716";
    const newTabRes = await fetch("http://localhost:9226/json/new?" + encodeURIComponent(url), {
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
      console.log("Waiting 10s for Figma render...");
      await new Promise(r => setTimeout(r, 10000));

      const res = await send("Runtime.evaluate", {
        expression: `
          (function() {
            // Find all buttons, aria elements, text
            const elements = Array.from(document.querySelectorAll('*'));
            const textNodes = [];
            for (const el of elements) {
              if (el.children.length === 0 && el.innerText && el.innerText.trim()) {
                textNodes.push({ tag: el.tagName, text: el.innerText.trim(), role: el.getAttribute('role'), aria: el.getAttribute('aria-label') });
              }
            }
            return {
              count: textNodes.length,
              samples: textNodes.slice(0, 100),
              allTexts: textNodes.map(t => t.text)
            };
          })()
        `,
        returnByValue: true,
      });

      console.log("Found text elements count:", res?.result?.value?.count);
      fs.writeFileSync("scripts/figma-extracted-texts.json", JSON.stringify(res?.result?.value, null, 2));

      ws.close();
      chromeProcess.kill();
    };
  } catch (err) {
    console.error("Error:", err.message);
    chromeProcess.kill();
  }
}

main().catch(console.error);
