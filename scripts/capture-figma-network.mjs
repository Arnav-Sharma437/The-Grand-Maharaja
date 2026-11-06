import { spawn } from "child_process";
import fs from "fs";

async function main() {
  const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
  const chromeProcess = spawn(chromePath, [
    "--headless=new",
    "--remote-debugging-port=9228",
    "--disable-gpu",
    "--no-sandbox",
    "--window-size=1920,1080",
  ]);

  await new Promise(r => setTimeout(r, 2000));

  try {
    const url = "https://www.figma.com/proto/zhxsbXmof90rH108j2OvcH/The-Grand-Maharaja?node-id=58-1716&p=f&viewport=364%2C106%2C0.08&scaling=scale-down-width&page-id=58%3A1119";
    const newTabRes = await fetch("http://localhost:9228/json/new?" + encodeURIComponent(url), {
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

    const networkResponses = [];
    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.method === "Network.responseReceived") {
        const u = msg.params.response.url;
        if (u.includes("figma") && (u.includes("api") || u.includes("file") || u.includes("data") || u.includes("livegraph"))) {
          networkResponses.push({
            url: u,
            status: msg.params.response.status,
            mime: msg.params.response.mimeType,
            requestId: msg.params.requestId,
          });
        }
      }
    };

    ws.onopen = async () => {
      await send("Network.enable");
      await send("Page.enable");
      console.log("Listening to network requests for 15 seconds...");
      await new Promise(r => setTimeout(r, 15000));

      console.log(`Found ${networkResponses.length} relevant network responses:`);
      for (const r of networkResponses) {
        console.log(`- [${r.status}] [${r.mime}] ${r.url}`);
      }

      fs.writeFileSync("scripts/figma-network-responses.json", JSON.stringify(networkResponses, null, 2));

      ws.close();
      chromeProcess.kill();
    };
  } catch (err) {
    console.error("Error:", err.message);
    chromeProcess.kill();
  }
}

main().catch(console.error);
