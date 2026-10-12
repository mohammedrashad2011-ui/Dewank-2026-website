import puppeteer from "puppeteer-core";
const base = process.argv[2];
const routes = ["/", "/en", "/en/services", "/services", "/en/about", "/about", "/en/work", "/work", "/en/offers", "/offers", "/en/riyadh-marketing-agency", "/en/contact", "/contact"];
const browser = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true, args: ["--no-sandbox", "--disable-gpu"] });
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 900 });
const out = {};
for (const r of routes) {
  await page.goto(base + r, { waitUntil: "load" });
  const data = await page.evaluate(() => {
    const scripts = [...document.querySelectorAll('script[type="application/ld+json"]')];
    const parsed = []; let parseErrors = 0;
    for (const s of scripts) { try { parsed.push(JSON.parse(s.textContent)); } catch { parseErrors++; } }
    const nodes = parsed.flatMap((p) => (p["@graph"] ? p["@graph"] : [p]));
    const count = (t) => nodes.filter((n) => n["@type"] === t).length;
    const org = nodes.find((n) => n["@type"] === "Organization");
    const web = nodes.find((n) => n["@type"] === "WebSite");
    return {
      lang: document.documentElement.lang, dir: document.documentElement.dir,
      ldBlocks: scripts.length, parseErrors, organization: count("Organization"), website: count("WebSite"),
      orgName: org && org.name, orgDesc: org && String(org.description).slice(0, 60), orgId: org && org["@id"],
      webLang: web && web.inLanguage, webId: web && web["@id"],
      hasGulfOnly: !!(org && JSON.stringify(org).includes("Saudi")),
      canonical: document.querySelector('link[rel="canonical"]')?.href || null,
      robots: document.querySelector('meta[name="robots"]')?.content || null,
      h1: (document.querySelector("h1")?.textContent || "").trim().slice(0, 40),
    };
  });
  out[r] = data;
}
await browser.close();
for (const [r, d] of Object.entries(out)) console.log(r.padEnd(30), JSON.stringify(d));
