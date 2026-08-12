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

type OfferPopularityRow = {
  offer_key: string;
  clicks: number;
};

async function getDatabase() {
  const { env } = await import("cloudflare:workers");
  if (!env.DB) throw new Error("Cloudflare D1 binding `DB` is unavailable.");
  return env.DB;
}

async function ensureSchema() {
  const db = await getDatabase();
  await db.prepare(`
    CREATE TABLE IF NOT EXISTS offer_interest_events (
      id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
      offer_key TEXT NOT NULL,
      offer_category TEXT NOT NULL DEFAULT '',
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `).run();
  await db.prepare(`CREATE INDEX IF NOT EXISTS idx_offer_interest_key_date ON offer_interest_events(offer_key, created_at)`).run();
  return db;
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as { offer_key?: string; offer_category?: string };
    const offerKey = String(body.offer_key || "").trim();
    if (!allowedOfferKeys.has(offerKey)) {
      return Response.json({ ok: false, error: "invalid_offer" }, { status: 400 });
    }

    const db = await ensureSchema();
    await db.prepare(
      `INSERT INTO offer_interest_events (offer_key, offer_category) VALUES (?, ?)`
    ).bind(
      offerKey,
      String(body.offer_category || "").slice(0, 60),
    ).run();

    return Response.json({ ok: true }, { headers: { "cache-control": "no-store" } });
  } catch {
    return Response.json({ ok: false }, { status: 202, headers: { "cache-control": "no-store" } });
  }
}

export async function GET() {
  try {
    const db = await ensureSchema();
    const result = await db.prepare(`
      SELECT offer_key, COUNT(*) AS clicks
      FROM offer_interest_events
      WHERE created_at >= datetime('now', '-30 days')
      GROUP BY offer_key
      ORDER BY clicks DESC, offer_key ASC
    `).all<OfferPopularityRow>();

    const rows: OfferPopularityRow[] = (result.results || []) as OfferPopularityRow[];
    const ranking = rows
      .filter((row: OfferPopularityRow) => allowedOfferKeys.has(row.offer_key))
      .map((row: OfferPopularityRow) => ({ key: row.offer_key, clicks: Number(row.clicks || 0) }));
    const totalClicks = ranking.reduce((sum: number, row: { key: string; clicks: number }) => sum + row.clicks, 0);

    return Response.json(
      { ranking, totalClicks, enoughData: totalClicks >= 5, windowDays: 30 },
      {
        headers: {
          "cache-control": "public, s-maxage=86400, stale-while-revalidate=604800",
        },
      },
    );
  } catch {
    return Response.json(
      { ranking: [], totalClicks: 0, enoughData: false, windowDays: 30 },
      { headers: { "cache-control": "public, max-age=300" } },
    );
  }
}
