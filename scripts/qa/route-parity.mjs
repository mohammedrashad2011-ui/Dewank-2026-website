// Route parity snapshot: status, document lang/dir, title, canonical, robots, JSON-LD count, tracking IDs, html/body counts.
import { readFileSync, writeFileSync } from "node:fs";

const base = process.argv[2];
const out = process.argv[3];
const routes = readFileSync(process.env.TEMP + "/routes.txt", "utf8")
  .split("\n")
  .map((s) => s.trim())
  .filter((r) => r)
routes.push("/this-route-does-not-exist-zz");

const pick = (html, re) => {
  const m = html.match(re);
  return m ? m[1] : null;
};

async function fetchOnce(url) {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(url, { redirect: "manual", headers: { connection: "close" }, signal: AbortSignal.timeout(25000) });
      const text = res.status === 200 ? await res.text() : "";
      return { res, text };
    } catch (e) {
      if (attempt === 2) return { res: { status: "error:" + (e.cause?.code || e.name), headers: new Headers() }, text: "" };
    }
  }
}

const rows = {};
for (const r of routes) {
  process.stderr.write(r + "\n");
  const { res, text: html } = await fetchOnce(base + r);
  rows[r] = {
    status: res.status,
    location: res.headers.get("location"),
    htmlLang: pick(html, /<html[^>]*\blang="([^"]*)"/),
    htmlDir: pick(html, /<html[^>]*\bdir="([^"]*)"/),
    htmlCount: (html.match(/<html[\s>]/g) || []).length,
    bodyCount: (html.match(/<body[\s>]/g) || []).length,
    title: pick(html, /<title>([^<]*)<\/title>/),
    canonical: pick(html, /<link rel="canonical" href="([^"]*)"/),
    robots: pick(html, /<meta name="robots" content="([^"]*)"/),
    ldJson: (html.match(/application\/ld\+json/g) || []).length,
    gtm: (html.match(/GTM-PG525ZFN/g) || []).length,
    ga4: (html.match(/G-5SKKT1NBHB/g) || []).length,
    metaPixel: (html.match(/2274266710087331/g) || []).length,
    h1: (pick(html, /<h1[^>]*>([\s\S]*?)<\/h1>/) || "").replace(/<[^>]+>/g, "").slice(0, 80) || null,
  };
}
writeFileSync(out, JSON.stringify(rows, null, 1));
console.log("routes", Object.keys(rows).length, "written", out);
