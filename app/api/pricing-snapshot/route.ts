import { getPricingSnapshotTime, isYearEndOfferActive } from "../../(ar)/offers/offer-pricing";

export const dynamic = "force-dynamic";

export function GET() {
  const snapshot = isYearEndOfferActive(getPricingSnapshotTime()) ? "campaign" : "regular";
  return Response.json({ snapshot }, {
    headers: {
      "Cache-Control": "no-store, max-age=0, must-revalidate",
      "CDN-Cache-Control": "no-store",
      "Vercel-CDN-Cache-Control": "no-store",
    },
  });
}
