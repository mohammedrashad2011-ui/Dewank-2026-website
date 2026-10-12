// Pixel comparison of before/after full-page screenshots. Reports the share of differing pixels per pair.
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";

const dir = process.argv[2];
const files = readdirSync(dir).filter((f) => f.startsWith("base-") && f.endsWith(".png")).sort();
let worst = 0;
const rows = [];
for (const f of files) {
  const other = "exp-" + f.slice("base-".length);
  if (!existsSync(`${dir}/${other}`)) { rows.push(`${f}: missing counterpart`); continue; }
  const a = PNG.sync.read(readFileSync(`${dir}/${f}`));
  const b = PNG.sync.read(readFileSync(`${dir}/${other}`));
  if (a.width !== b.width || a.height !== b.height) {
    rows.push(`${f.slice(5)}: SIZE ${a.width}x${a.height} vs ${b.width}x${b.height}`);
    worst = Math.max(worst, 100);
    continue;
  }
  const diff = new PNG({ width: a.width, height: a.height });
  const n = pixelmatch(a.data, b.data, diff.data, a.width, a.height, { threshold: 0.1 });
  const pct = (100 * n) / (a.width * a.height);
  worst = Math.max(worst, pct);
  rows.push(`${f.slice(5).padEnd(42)} ${a.width}x${a.height}  differing ${pct.toFixed(3)}%  (${n} px)`);
}
console.log(rows.join("\n"));
console.log(`\nworst pair: ${worst.toFixed(3)}%  pairs: ${files.length}`);
