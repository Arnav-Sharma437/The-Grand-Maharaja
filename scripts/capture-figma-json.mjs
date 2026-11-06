import { spawn } from "child_process";
import fs from "fs";

async function main() {
  const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
  const chromeProcess = spawn(chromePath, [
    "--headless=new",
    "--remote-debugging-port=9229",
    "--disable-gpu",
    "--no-sandbox",
    "--window-size=1920,1080",
  ]);

  await new Promise(r => setTimeout(r, 2000));

  try {
    const url = "https://www.figma.com/proto/zhxsbXmof90rH108j2OvcH/The-Grand-Maharaja?node-id=58-1716&p=f&viewport=364%2C106%2C0.08&scaling=scale-down-width&page-id=58%3A1119";
    const newTabRes = await fetch("http://localhost:9229/json/new?" + encodeURIComponent(url), {
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

    const targetedRequests = [];
    ws.onmessage = async (event) => {
      const msg = JSON.parse(event.data);
      if (msg.method === "Network.responseReceived") {
        const u = msg.params.response.url;
        if (u.includes("image/batch") || u.includes("realtime_token")) {
          targetedRequests.push({ requestId: msg.params.requestId, url: u });
        }
      }
    };

    ws.onopen = async () => {
      await send("Network.enable");
      await send("Page.enable");
      console.log("Listening for target requests...");
      await new Promise(r => setTimeout(r, 12000));

      console.log(`Found ${targetedRequests.length} target requests.`);
      for (const t of targetedRequests) {
        try {
          const body = await send("Network.getResponseBody", { requestId: t.requestId });
          console.log(`URL: ${t.url}`);
          console.log(`Body sample: ${body.body.slice(0, 300)}`);
          const fname = t.url.includes("image/batch") ? "figma-image-batch.json" : "figma-realtime-token.json";
          fs.writeFileSync(`scripts/${fname}`, body.body);
        } catch (err) {
          console.error(`Failed to get body for ${t.url}:`, err.message);
        }
      }

      ws.close();
      chromeProcess.kill();
    };
  } catch (err) {
    console.error("Error:", err.message);
    chromeProcess.kill();
  }
}

main().catch(console.error);
