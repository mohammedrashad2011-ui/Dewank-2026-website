import sitemap from "../sitemap";
import { siteUrl } from "../lib/seo";
import { isPreviewBuild } from "../lib/site-environment";
import { buildPrioritySitemap } from "../lib/priority-sitemap";
import registry from "../lib/priority-sitemap.json";

// Generated at build time, not on a visitor's page request.
export const dynamic = "force-static";

export function GET() {
  if (isPreviewBuild) {
    return new Response("Not available in preview", { status: 404, headers: { "X-Robots-Tag": "noindex" } });
  }
  return new Response(buildPrioritySitemap(sitemap(), registry, siteUrl), {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
