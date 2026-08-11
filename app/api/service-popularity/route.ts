const allowedServiceKeys = new Set([
  "branding",
  "brand-naming",
  "social-media-content",
  "digital-marketing",
  "paid-ads",
  "website-design",
  "landing-page",
  "seo-aeo",
  "analytics",
  "whatsapp-automation",
  "ai-automation",
  "ats-cv",
]);

async function getDatabase() {
  const { env } = await import("cloudflare:workers");
  if (!env.DB) throw new Error("Cloudflare D1 binding `DB` is unavailable.");
  return env.DB;
}

async function ensureSchema() {
  const db = await getDatabase();
  await db.prepare(`
    CREATE TABLE IF NOT EXISTS service_interest_events (
      id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
      service_key TEXT NOT NULL,
      service_name TEXT NOT NULL DEFAULT '',
      service_category TEXT NOT NULL DEFAULT '',
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `).run();
  await db.prepare(`CREATE INDEX IF NOT EXISTS idx_service_interest_key_date ON service_interest_events(service_key, created_at)`).run();
  return db;
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as { service_key?: string; service_name?: string; service_category?: string };
    const serviceKey = String(body.service_key || "").trim();
    if (!allowedServiceKeys.has(serviceKey)) {
      return Response.json({ ok: false, error: "invalid_service" }, { status: 400 });
    }

    const db = await ensureSchema();
    await db.prepare(
      `INSERT INTO service_interest_events (service_key, service_name, service_category) VALUES (?, ?, ?)`
    ).bind(
      serviceKey,
      String(body.service_name || "").slice(0, 120),
      String(body.service_category || "").slice(0, 60),
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
      SELECT service_key, COUNT(*) AS clicks
      FROM service_interest_events
      WHERE created_at >= datetime('now', '-30 days')
      GROUP BY service_key
      ORDER BY clicks DESC, service_key ASC
    `).all<{ service_key: string; clicks: number }>();

    const ranking = (result.results || [])
      .filter((row) => allowedServiceKeys.has(row.service_key))
      .map((row) => ({ key: row.service_key, clicks: Number(row.clicks || 0) }));
    const totalClicks = ranking.reduce((sum, row) => sum + row.clicks, 0);

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
