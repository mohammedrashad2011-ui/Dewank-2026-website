import puppeteer from "puppeteer-core";
const base = process.argv[2];
const cases = [["/en/services", 1280], ["/en/services", 390], ["/en/offers/seo-audit", 1280], ["/en", 390], ["/services", 1280], ["/offers/seo-audit", 390], ["/en/contact", 1280], ["/contact", 1280]];
const browser = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true, args: ["--no-sandbox", "--disable-gpu"] });
for (const [path, w] of cases) {
  const page = await browser.newPage();
  await page.setViewport({ width: w, height: 900, isMobile: w < 800, hasTouch: w < 800 });
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message.slice(0, 120)));
  await page.goto(base + path, { waitUntil: "load" });
  await new Promise((r) => setTimeout(r, 2500));
  const info = await page.evaluate(() => {
    const wraps = [...document.querySelectorAll(".sitewide-whatsapp-wrap, .sitewide-whatsapp-collapsed")];
    const w0 = wraps[0];
    const bridge = document.querySelector(".sitewide-whatsapp-bridge");
    const r = w0 ? w0.getBoundingClientRect() : null;
    const overflowX = document.documentElement.scrollWidth > innerWidth;
    const hrefs = bridge ? decodeURIComponent(bridge.getAttribute("href")).slice(0, 70) : null;
    return { count: wraps.length, dir: w0 && w0.getAttribute("dir"), title: bridge && bridge.querySelector("strong")?.textContent, label: bridge && bridge.querySelector("small")?.textContent, aria: bridge && bridge.getAttribute("aria-label"), mobileSuppressed: !!(w0 && w0.classList.contains("mobile-suppress-whatsapp")), visible: !!(r && r.width > 0 && getComputedStyle(w0).display !== "none"), rect: r ? [Math.round(r.x), Math.round(r.y), Math.round(r.width), Math.round(r.height)] : null, overflowX, hrefs, wa: bridge ? bridge.getAttribute("href").includes("97339066649") : null };
  });
  console.log(path.padEnd(24), String(w).padEnd(5), JSON.stringify(info), errors.length ? "ERR " + errors.join("|") : "");
  await page.close();
}
await browser.close();
