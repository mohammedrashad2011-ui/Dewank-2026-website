type SitemapEntry = { url: string; lastModified?: Date | string };
type Registry = { baselinePaths: readonly string[]; reviewedUpdates: Record<string, string> };

const xmlEscape = (value: string) => value.replace(/[&<>"']/g, char =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" }[char] ?? char)
);

function validDate(value: string | Date | undefined): string | undefined {
  if (!value) return undefined;
  const date = new Date(value instanceof Date ? value.getTime() : value);
  if (!Number.isFinite(date.getTime())) return undefined;
  const iso = date.toISOString().slice(0, 10);
  // Reject invalid calendar dates instead of silently normalising them.
  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value) && value !== iso) return undefined;
  return iso;
}

/** A subset of the existing canonical sitemap, never an independent route allowlist. */
export function buildPrioritySitemap(entries: readonly SitemapEntry[], registry: Registry, siteUrl: string) {
  const baseline = new Set(registry.baselinePaths);
  const origin = new URL(siteUrl).origin;
  const seen = new Set<string>();
  const rows: string[] = [];
  for (const entry of entries) {
    const url = new URL(entry.url);
    if (url.origin !== origin || url.search || url.hash || seen.has(url.href)) continue;
    const path = url.pathname;
    const reviewed = Object.prototype.hasOwnProperty.call(registry.reviewedUpdates, path);
    if (!reviewed && baseline.has(path)) continue;
    seen.add(url.href);
    // For reviewed SEO changes, never advance the date for a later style-only commit.
    // For a new canonical page, use the existing sitemap date (if known).
    const date = validDate(reviewed ? registry.reviewedUpdates[path] : entry.lastModified);
    rows.push(`  <url><loc>${xmlEscape(url.href)}</loc>${date ? `<lastmod>${date}</lastmod>` : ""}</url>`);
  }
  return ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">', ...rows, '</urlset>', ''].join("\n");
}
