import puppeteer from "puppeteer-core";
const base = process.argv[2];
const browser = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true, args: ["--no-sandbox", "--disable-gpu"] });
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 900 });
const requests = [];
page.on("request", (r) => { const u = r.url(); if (/googletagmanager|google-analytics|connect\.facebook|facebook\.net|gtag/.test(u)) requests.push(u.slice(0, 80)); });
await page.evaluateOnNewDocument(() => { window.open = () => null; });
for (const path of ["/en/privacy", "/services"]) {
  requests.length = 0;
  await page.goto(base + path, { waitUntil: "load" });
  await new Promise((r) => setTimeout(r, 2500));
  const clicked = await page.evaluate(() => {
    const a = document.querySelector(".sitewide-whatsapp-bridge");
    if (!a) return "no-widget";
    a.click();
    return (window.dataLayer || []).filter((e) => e.event === "sitewide_whatsapp_click").map((e) => ({ lead_intent: e.lead_intent, source_path: e.source_path, cta_location: e.cta_location }));
  });
  console.log(path, JSON.stringify(clicked), "vendor requests:", requests.length);
}
await browser.close();
