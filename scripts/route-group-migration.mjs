// Route-group migration for the bilingual root layouts. Run once from the repository root.
//
//   app/layout.tsx        -> app/(ar)/layout.tsx   (Arabic root layout, lang="ar" dir="rtl")
//   app/(en)/layout.tsx   created here             (English root layout, lang="en" dir="ltr")
//   app/page.tsx and every other Arabic route   -> app/(ar)/...
//   app/en/**             -> app/(en)/en/**       (URLs stay /en/...; route groups do not appear in URLs)
//
// Shared code stays where it is: app/components, app/lib, app/api, app/robots.ts, app/sitemap.ts,
// app/chatgpt-auth.ts and the root-level stylesheets (globals.css, fonts.css, ...).
//
// Every relative import and @/app/ alias that points at a moved file is rewritten to the new location.
// The script refuses to run on a tree that is already migrated. Moves use `git mv` so history follows the files.
import { readdirSync, readFileSync, writeFileSync, mkdirSync, statSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import path from "node:path";

const posix = path.posix;
const APP = "app";
const SHARED_ROOT_NAMES = new Set(["chatgpt-auth", "robots", "sitemap"]);
const SHARED_DIRS = ["app/components", "app/lib", "app/api"];

// Map an extensionless or extension-bearing path (posix, relative to the repo root) to its migrated location.
// Metadata image routes inside a route group get a hashed URL (opengraph-image-<hash>). Their public URLs must not
// change, so these files keep their original location.
const KEEP_IN_PLACE = new Set(["app/work/bithan/opengraph-image.tsx"]);

function mapPath(p) {
  if (KEEP_IN_PLACE.has(p)) return p;
  if (p === "app/layout" || p === "app/layout.tsx") return p.replace("app/layout", "app/(ar)/layout");
  if (p === "app/page" || p === "app/page.tsx") return p.replace("app/page", "app/(ar)/page");
  if (p === "app/en" || p.startsWith("app/en/")) return "app/(en)/en" + p.slice("app/en".length);
  for (const dir of SHARED_DIRS) if (p === dir || p.startsWith(dir + "/")) return p;
  const rest = p.slice(APP.length + 1);
  if (!rest.includes("/")) {
    const name = rest.replace(/\.[a-z]+$/i, "");
    if (SHARED_ROOT_NAMES.has(name)) return p;
    if (/\.css$/i.test(rest)) return p;
  }
  return "app/(ar)/" + rest;
}

// Rewrite one import specifier written in a file that moved from oldFile to newFile.
function rewriteSpecifier(spec, oldFile, newFile) {
  if (spec.startsWith("@/app/")) {
    const mapped = mapPath(spec.slice(2));
    return "@/" + mapped;
  }
  if (!spec.startsWith(".")) return spec;
  const oldTarget = posix.normalize(posix.join(posix.dirname(oldFile), spec));
  const newTarget = mapPath(oldTarget);
  let rel = posix.relative(posix.dirname(newFile), newTarget);
  if (!rel.startsWith(".")) rel = "./" + rel;
  return rel;
}

function rewriteContent(content, oldFile, newFile) {
  // import / export ... from "x", import "x", import("x"), require("x")
  content = content.replace(
    /(\bfrom\s+|\bimport\s+|\bimport\(\s*|\brequire\(\s*)(["'])([^"'\n]+)\2/g,
    (match, lead, quote, spec) => lead + quote + rewriteSpecifier(spec, oldFile, newFile) + quote,
  );
  // CSS @import "x" and relative url(...) references.
  if (/\.css$/i.test(newFile)) {
    content = content.replace(/@import\s+(url\()?(["'])([^"']+)\2\)?/g, (m, u, q, spec) => {
      const next = rewriteSpecifier(spec, oldFile, newFile);
      return m.replace(spec, next);
    });
    content = content.replace(/url\(\s*(["']?)(\.{1,2}\/[^"')]+)\1\s*\)/g, (m, q, spec) => {
      const next = rewriteSpecifier(spec, oldFile, newFile);
      return m.replace(spec, next);
    });
  }
  return content;
}

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const full = posix.join(dir.replace(/\\/g, "/"), name);
    if (statSync(full).isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

function main() {
  if (existsSync("app/(ar)/layout.tsx")) {
    console.log("already migrated: app/(ar)/layout.tsx exists. Nothing to do.");
    return;
  }
  const files = walk(APP);
  const moves = files
    .map((oldFile) => ({ oldFile, newFile: mapPath(oldFile) }))
    .filter((m) => m.oldFile !== m.newFile);

  // 1. Move files with git so history follows them.
  for (const { oldFile, newFile } of moves) {
    mkdirSync(posix.dirname(newFile), { recursive: true });
    execFileSync("git", ["mv", oldFile, newFile], { stdio: "inherit" });
  }

  // 2. Rewrite imports in every text file under app/, using each file's old and new location.
  const newLocation = new Map(files.map((f) => [f, mapPath(f)]));
  for (const oldFile of files) {
    const newFile = newLocation.get(oldFile);
    if (!/\.(tsx?|jsx?|mjs|css|json)$/i.test(newFile)) continue;
    const content = readFileSync(newFile, "utf8");
    const next = rewriteContent(content, oldFile, newFile);
    if (next !== content) writeFileSync(newFile, next, "utf8");
  }

  // 3. English root layout: same shared stylesheets, Arabic metadata and tracking untouched, document language English.
  const ar = readFileSync("app/(ar)/layout.tsx", "utf8");
  if (!ar.includes('<html lang="ar" dir="rtl" style={fontVariables}>')) {
    throw new Error("Arabic root layout html tag not found; refusing to write the English layout.");
  }
  mkdirSync("app/(en)", { recursive: true });
  const en = ar.replace('<html lang="ar" dir="rtl" style={fontVariables}>', '<html lang="en" dir="ltr" style={fontVariables}>');
  writeFileSync("app/(en)/layout.tsx", en, "utf8");

  console.log(`moved ${moves.length} files; wrote app/(en)/layout.tsx`);
}

main();
