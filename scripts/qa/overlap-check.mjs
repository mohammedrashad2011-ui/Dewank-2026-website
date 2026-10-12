import puppeteer from "puppeteer-core";
const base = process.argv[2];
const pages = ["/en/guides/marketing-kpis", "/en/privacy", "/en/riyadh-marketing-agency", "/services", "/guides/social-media-management-cost-saudi-arabia"];
const browser = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true, args: ["--no-sandbox", "--disable-gpu"] });
for (const w of [390, 1280]) for (const p of pages) {
  const page = await browser.newPage();
  await page.setViewport({ width: w, height: 800, isMobile: w < 800, hasTouch: w < 800 });
  await page.goto(base + p, { waitUntil: "load" });
  await new Promise((r) => setTimeout(r, 2000));
  const res = await page.evaluate(() => {
    const widget = document.querySelector(".sitewide-whatsapp-wrap, .sitewide-whatsapp-collapsed");
    if (!widget || getComputedStyle(widget).display === "none") return { widget: false };
    const w = widget.getBoundingClientRect();
    const ctas = [...document.querySelectorAll("a.button, a.re-button, a.re-nav-cta, .hero-actions a, .final-actions a, button.primary")].filter((e) => { const r = e.getBoundingClientRect(); return r.width > 0 && r.bottom > 0 && r.top < innerHeight; });
    const hits = ctas.filter((e) => { const r = e.getBoundingClientRect(); return !(r.right < w.left || r.left > w.right || r.bottom < w.top || r.top > w.bottom); }).map((e) => e.textContent.trim().slice(0, 24));
    return { widget: true, rect: [Math.round(w.x), Math.round(w.y), Math.round(w.width), Math.round(w.height)], overlappingCTAs: hits, overflowX: document.documentElement.scrollWidth > innerWidth };
  });
  console.log(String(w).padEnd(5), p.padEnd(48), JSON.stringify(res));
  await page.close();
}
await browser.close();
