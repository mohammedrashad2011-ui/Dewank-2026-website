const MAX_BODY_BYTES = 16 * 1024;

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  try {
    // Reject oversized bodies before parsing. A contact brief is at most 2,500 characters, so 16 KB is generous.
    const declared = Number(request.headers.get("content-length") || 0);
    if (declared > MAX_BODY_BYTES) {
      return Response.json({ error: "حجم الطلب كبير." }, { status: 413 });
    }
    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) {
      return Response.json({ error: "حجم الطلب كبير." }, { status: 413 });
    }
    const body = JSON.parse(raw) as Record<string, unknown>;

    if (clean(body.website, 100)) {
      return Response.json({ ok: true, persisted: false }, { status: 201 });
    }

    const name = clean(body.name, 100);
    const email = clean(body.email, 160);
    const service = clean(body.service, 120);
    const brief = clean(body.brief, 2500);

    if (
      name.length < 2 ||
      !/^\S+@\S+\.\S+$/.test(email) ||
      !service ||
      brief.length < 20
    ) {
      return Response.json(
        { error: "يرجى إكمال البيانات المطلوبة بشكل صحيح." },
        { status: 400 },
      );
    }

    // The live contact form hands qualified requests to WhatsApp and records
    // the conversion in the dataLayer. Keep this API host-neutral so a
    // standard Next.js deployment does not require Cloudflare D1 bindings.
    return Response.json({ ok: true, persisted: false }, { status: 202 });
  } catch (error) {
    console.error("contact submission failed", error);
    return Response.json(
      { error: "حدث خطأ مؤقت. جرّب مرة أخرى بعد قليل." },
      { status: 400 },
    );
  }
}
