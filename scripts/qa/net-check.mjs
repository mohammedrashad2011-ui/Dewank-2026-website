import puppeteer from "puppeteer-core";
const base = process.argv[2];
const browser = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true, args: ["--no-sandbox", "--disable-gpu"] });
for (const path of ["/en/offers", "/en/offers/seo-audit", "/en/privacy", "/offers", "/"]) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });
  const hosts = new Set(); const failed = [];
  page.on("request", (r) => { try { hosts.add(new URL(r.url()).host); } catch {} });
  page.on("requestfailed", (r) => failed.push(new URL(r.url()).host));
  await page.goto(base + path, { waitUntil: "networkidle0", timeout: 90000 }).catch(() => {});
  await new Promise((r) => setTimeout(r, 3000));
  const third = [...hosts].filter((h) => !h.endsWith("dewank.com") && !h.includes("localhost"));
  console.log(path.padEnd(22), "country.is:", third.includes("api.country.is") ? "YES" : "no", "| third-party hosts:", third.join(", ") || "none", "| failed:", [...new Set(failed)].join(",") || "none");
  await page.close();
}
await browser.close();
