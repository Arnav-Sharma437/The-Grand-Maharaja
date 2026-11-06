import { spawn } from "child_process";

async function main() {
  const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
  const chromeProcess = spawn(chromePath, [
    "--headless=new",
    "--remote-debugging-port=9223",
    "--disable-gpu",
    "--no-sandbox",
    "--window-size=1920,1080",
  ]);

  await new Promise(r => setTimeout(r, 2000));

  try {
    const newTabRes = await fetch("http://localhost:9223/json/new?https://www.figma.com/proto/zhxsbXmof90rH108j2OvcH/The-Grand-Maharaja?node-id=58-1716", {
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
      await new Promise(r => setTimeout(r, 10000));

      const evalRes = await send("Runtime.evaluate", {
        expression: `
          (function() {
            const title = document.title;
            const textContent = document.body.innerText;
            return {
              title,
              textSnippet: textContent.slice(0, 500)
            };
          })()
        `,
        returnByValue: true,
      });

      console.log("Evaluation result:", JSON.stringify(evalRes, null, 2));

      ws.close();
      chromeProcess.kill();
    };
  } catch (e) {
    console.error("Error:", e.message);
    chromeProcess.kill();
  }
}

main().catch(console.error);
