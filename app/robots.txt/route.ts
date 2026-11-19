import { siteUrl } from "../lib/seo";

// robots.txt as a route (the metadata helper cannot emit Content-Signal). Same rules as before, plus Content Signals
// (contentsignals.org): search engines and AI answer engines may use the content. AI training is left unstated on
// purpose, which the specification treats as "no preference expressed".
export const dynamic = "force-static";

export function GET() {
  const body = [
    "User-Agent: *",
    "Content-Signal: search=yes, ai-input=yes",
    "Allow: /",
    "Disallow: /api/",
    "",
    `Host: ${siteUrl}`,
    `Sitemap: ${siteUrl}/sitemap.xml`,
    "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
