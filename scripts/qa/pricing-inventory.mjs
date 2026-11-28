// Read-only inventory of tracked runtime text, not a replacement for semantic review.
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";

const root = execFileSync("git", ["rev-parse", "--show-toplevel"], { encoding: "utf8" }).trim();
const tracked = execFileSync("git", ["ls-files", "-z"], { cwd: root, encoding: "utf8", maxBuffer: 16 * 1024 * 1024 }).split("\0").filter(Boolean);
const isRuntime = (p) => /^(app|public|src|worker|db|build)\//.test(p) || /^(?:proxy|middleware|next\.config|vite\.config|vercel)\./.test(p);
const textFile = (p) => /\.(?:tsx?|jsx?|mjs|cjs|json|mdx?|html?|txt|css|svg|sql|csv|xml|yaml|yml)$/i.test(p);
const files = tracked.filter(p => isRuntime(p) && textFile(p));
const central = "app/(ar)/offers/offer-pricing.ts";
const normalize = (s) => s.replace(/[٠-٩۰-۹]/g, c => String("٠١٢٣٤٥٦٧٨٩۰۱۲۳۴۵۶۷۸۹".indexOf(c) % 10)).replace(/٬/g, ",");
const currency = "(?:SAR|USD|AED|BHD|KWD|QAR|OMR|EGP|EUR|GBP|ريال(?:ات)?|ر\\.س|دولار(?:ات)?|دينار|درهم|جنيه|[£€$])";
const number = "(?:\\d{1,3}(?:,\\d{3})+|\\d+)(?:\\.\\d+)?";
const currencyAmount = new RegExp("(?:" + number + "\\s*(?:[-–—]\\s*" + number + "\\s*)?(?:\\+\\s*)?" + currency + "|" + currency + "\\s*" + number + ")", "iu");
const explicitPrice = /(?:["']?(?:price(?:SAR|USD|Amount)?|amount|basePrice|salePrice|regularPrice|displayed_amount|saving(?:s|Amount)?|discount(?:Amount)?)["']?\s*[:=]\s*["']?\d[\d,.]*|(?:price|cost|سعر|تكلفة|توفير|خصم)\s*[:=]\s*["']?\d[\d,.]*)/iu;
const priceContext = /price|pricing|cost|سعر|أسعار|تكلفة|توفير|خصم/i;
const source = readFileSync(root + "/" + central, "utf8");
const knownAmounts = new Set([...source.matchAll(/gcc\((\d+),\s*(\d+),\s*(\d+),\s*(\d+)\)/g)].flatMap(m => m.slice(1)));
const consumer = /\b(?:offerPricing|offerFuturePricing|getOfferQuote|getOfferPriceConfig|useOfferPrice|useSavedOfferCountry|resolveOfferPrice|useOfferCountry|getVideoOfferPrice|useVideoOfferCountry|OfferPrice|HubPrice|InlineOfferPrice|[A-Za-z]+(?:InlinePrice|OfferPrice|PackagePrice|LocalizedPrice)|priceKey|offerKey)\b/;
const findings = [];
const readers = [];
const errors = [];
for (const path of files) {
  let data;
  try { data = readFileSync(root + "/" + path, "utf8"); }
  catch (error) { errors.push({ path, error: String(error) }); continue; }
  const lines = data.split(/\r?\n/);
  const references = [];
  for (let index = 0; index < lines.length; index++) {
    const original = lines[index];
    const line = normalize(original);
    if (consumer.test(line)) references.push(index + 1);
    if (path === central) continue;
    const numeric = [...line.matchAll(/\d[\d,]*/g)].map(m => m[0].replace(/,/g, ""));
    const currentOrFutureAmount = numeric.some(n => knownAmounts.has(n));
    const reason = explicitPrice.test(line) ? "literal-price-field"
      : currencyAmount.test(line) ? "currency-and-number"
      : currentOrFutureAmount && priceContext.test(line) ? "known-amount-near-price-word"
      : null;
    if (!reason) continue;
    findings.push({ path, line: index + 1, reason, excerpt: original.trim().slice(0, 320) });
  }
  if (references.length) readers.push({ path, lines: references });
}
const groups = {};
for (const p of files) {
  const g = p.startsWith("app/(ar)/") ? "Arabic" : p.startsWith("app/(en)/") ? "English" : "shared/other";
  groups[g] = (groups[g] ?? 0) + 1;
}
console.log(JSON.stringify({ tracked: tracked.length, candidatesScanned: files.length, readErrors: errors, groups, candidateLines: findings.length, candidateFiles: new Set(findings.map(f => f.path)).size, readerFiles: readers.length }, null, 2));
for (const f of findings) console.log(JSON.stringify(f));
console.log("PRICE CONSUMER FILES");
for (const r of readers) console.log(JSON.stringify(r));
// Candidates include editorial market ranges, examples, incidental numbers and comments.
// They require human classification, not blanket replacement. Raster images and runtime
// CMS/database/external data are outside this static source scan.
if (errors.length) process.exitCode = 1;
