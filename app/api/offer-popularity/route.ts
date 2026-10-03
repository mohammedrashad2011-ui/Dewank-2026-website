const allowedOfferKeys = new Set([
  "30-day-content-package",
  "landing-page-package",
  "seo-audit",
  "brand-naming",
  "whatsapp-automation-starter",
  "mini-visual-identity",
  "google-ads-launch",
  "instagram-14-day-upgrade",
  "small-business-website",
]);

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      offer_key?: string;
      offer_category?: string;
    };
    const offerKey = String(body.offer_key || "").trim();

    if (!allowedOfferKeys.has(offerKey)) {
      return Response.json(
        { ok: false, error: "invalid_offer" },
        { status: 400, headers: { "cache-control": "no-store" } },
      );
    }

    // Offer clicks are still recorded in the dataLayer by the client tracker.
    // This endpoint stays host-neutral so standard Next.js runtimes such as
    // Hostinger and Vercel do not depend on Cloudflare D1 bindings.
    return Response.json(
      { ok: true, persisted: false },
      { status: 202, headers: { "cache-control": "no-store" } },
    );
  } catch {
    return Response.json(
      { ok: false, error: "invalid_payload" },
      { status: 400, headers: { "cache-control": "no-store" } },
    );
  }
}

export async function GET() {
  return Response.json(
    {
      ranking: [],
      totalClicks: 0,
      enoughData: false,
      windowDays: 30,
      persisted: false,
    },
    { headers: { "cache-control": "public, max-age=300" } },
  );
}
