// Writes app/lib/sitemap-lastmod.json: for every page (page.tsx), the date of the last commit that touched the files
// directly in its folder. The sitemap reads git itself when the build has full history; production (Hostinger) builds
// from a clone without it, so this committed file is the fallback there. Run before merging page changes:
//   npm run sitemap:lastmod
import { execFileSync } from "node:child_process";
import { readdirSync, writeFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const git = (args) => execFileSync("git", args, { cwd: root, encoding: "utf8" }).trim();

if (git(["rev-parse", "--is-shallow-repository"]) !== "false") {
  console.error("[sitemap-lastmod] Shallow clone: dates would be wrong. Run this in a full clone.");
  process.exit(1);
}

const dates = {};
function walk(dir) {
  for (const entry of readdirSync(path.join(root, dir), { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith("_") || entry.name === "api") continue;
    walk(path.join(dir, entry.name));
  }
  const hasPage = readdirSync(path.join(root, dir)).includes("page.tsx");
  if (!hasPage) return;
  // Public path: drop "app" and route groups like (ar) and (en).
  const segments = dir.split(path.sep).slice(1).filter((s) => !(s.startsWith("(") && s.endsWith(")")));
  const publicPath = "/" + segments.join("/");
  const iso = git(["log", "-1", "--format=%cI", "--", `:(glob)${dir.split(path.sep).join("/")}/*`]);
  if (iso) dates[publicPath] = new Date(iso).toISOString();
}

walk("app");
const sorted = Object.fromEntries(Object.entries(dates).sort(([a], [b]) => a.localeCompare(b)));
writeFileSync(path.join(root, "app/lib/sitemap-lastmod.json"), JSON.stringify(sorted, null, 2) + "\n");
console.log(`[sitemap-lastmod] ${Object.keys(sorted).length} pages written to app/lib/sitemap-lastmod.json`);
