// Full-page screenshots for visual regression. Animations are frozen at their final frame so before/after are comparable.
import puppeteer from "puppeteer-core";
import { mkdirSync } from "node:fs";

const [base, outDir, tag] = process.argv.slice(2);
const pages = ["/", "/en", "/en/services", "/services", "/contact", "/en/contact", "/en/riyadh-marketing-agency", "/en/privacy", "/en/guides/marketing-kpis"];
const widths = [1440, 1024, 834, 390, 360];
mkdirSync(outDir, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: true,
  args: ["--no-sandbox", "--disable-gpu", "--hide-scrollbars"],
});
const page = await browser.newPage();
const log = [];
for (const w of widths) {
  for (const p of pages) {
    const slug = (p === "/" ? "home" : p.slice(1).replace(/\//g, "-")) || "home";
    await page.setViewport({ width: w, height: 900, deviceScaleFactor: 1, isMobile: w <= 834, hasTouch: w <= 834 });
    try {
      await page.goto(base + p, { waitUntil: "load", timeout: 60000 });
    } catch (e) {
      log.push(`${p} ${w}: goto error ${e.message}`);
      continue;
    }
    await page.addStyleTag({
      content: "*,*::before,*::after{animation-play-state:paused!important;animation-delay:0s!important;animation-duration:0s!important;animation-iteration-count:1!important;transition:none!important;caret-color:transparent!important;content-visibility:visible!important;contain-intrinsic-size:none!important}",
    });
    // Scroll once so content-visibility sections paint, then return to the top.
    await page.evaluate(async () => {
      const step = Math.max(400, Math.floor(innerHeight * 0.8));
      for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 40));
      }
      window.scrollTo(0, 0);
      document.getAnimations().forEach((a) => { a.pause(); a.currentTime = 0; });
      await new Promise((r) => setTimeout(r, 400));
    });
    const file = `${outDir}/${tag}-${slug}-${w}.png`;
    await page.screenshot({ path: file, fullPage: true });
    const meta = await page.evaluate(() => ({ lang: document.documentElement.lang, dir: document.documentElement.dir, sw: document.documentElement.scrollWidth, h: document.documentElement.scrollHeight }));
    log.push(`${p} ${w}: ${JSON.stringify(meta)}`);
  }
}
await browser.close();
console.log(log.join("\n"));
