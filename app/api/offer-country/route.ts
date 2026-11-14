// Same-origin, country-only lookup for offer prices. The HTML remains static and SAR-first.
// Vercel provides this request header; no visitor IP is stored or returned.
export function GET(request: Request) {
  const value = request.headers.get("x-vercel-ip-country")?.toUpperCase() ?? "";
  const country = /^[A-Z]{2}$/.test(value) ? value : null;
  return Response.json(
    { country },
    { headers: { "Cache-Control": "private, no-store", "Vary": "X-Vercel-IP-Country" } },
  );
}
