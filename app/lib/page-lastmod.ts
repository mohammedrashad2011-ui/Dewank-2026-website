import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";
import committedDates from "./sitemap-lastmod.json";

// Sitemap <lastmod>: the date of the last commit that touched a page's own files (its page.tsx and the files beside it).
// Read from git when the build has full history. Production (Hostinger) builds from a clone without it, so the dates
// committed in sitemap-lastmod.json (npm run sitemap:lastmod) are used there. A page in neither gets no date.

const root = process.cwd();
let gitUsable: boolean | null = null;
const cache = new Map<string, Date | undefined>();

function git(args: string[]) {
  return execFileSync("git", args, { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"], timeout: 5000 }).trim();
}

function canUseGit() {
  if (gitUsable === null) {
    try {
      gitUsable = git(["rev-parse", "--is-shallow-repository"]) === "false";
    } catch {
      gitUsable = false;
    }
  }
  return gitUsable;
}

/** The folder that holds the page.tsx for a public path, across the (ar) and (en) route groups. */
function pageDir(publicPath: string) {
  const clean = publicPath === "/" ? "" : publicPath;
  const candidates = [path.join("app", "(ar)", clean), path.join("app", "(en)", clean), path.join("app", clean)];
  return candidates.find((dir) => existsSync(path.join(root, dir, "page.tsx")));
}

export function pageLastModified(publicPath: string): Date | undefined {
  if (cache.has(publicPath)) return cache.get(publicPath);
  let result: Date | undefined;
  const dir = pageDir(publicPath);
  if (dir && canUseGit()) {
    try {
      // Only the files directly in the page folder, not child routes (so /offers does not change with every offer page).
      const spec = `:(glob)${dir.split(path.sep).join("/")}/*`;
      const iso = git(["log", "-1", "--format=%cI", "--", spec]);
      if (iso) result = new Date(iso);
    } catch {
      result = undefined;
    }
  }
  if (!result) {
    const committed = (committedDates as Record<string, string>)[publicPath];
    if (committed) result = new Date(committed);
  }
  cache.set(publicPath, result);
  return result;
}
