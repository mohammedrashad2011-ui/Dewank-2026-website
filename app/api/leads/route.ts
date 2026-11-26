import { getCrmPool } from "@/app/lib/crm/mysql-pool.mjs";
import { createLeadStore } from "@/app/lib/crm/mysql-lead-store.mjs";
import { createLeadRateLimiter } from "@/app/lib/crm/mysql-rate-limit.mjs";
import { handleLeadRequest } from "@/app/lib/crm/handle-lead-request.mjs";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  // Fail closed. No live writes from Vercel previews, even with misconfigured credentials.
  if (process.env.CRM_CAPTURE_ENABLED !== "true" || Boolean(process.env.VERCEL_ENV)) {
    return Response.json({error:"unavailable"},{status:503,headers:{"Cache-Control":"no-store"}});
  }
  const origin=request.headers.get("origin");
  if (origin!=="https://dewank.com" && origin!=="https://www.dewank.com") {
    return Response.json({error:"forbidden"},{status:403,headers:{"Cache-Control":"no-store"}});
  }
  try {
    const pool=getCrmPool();
    return await handleLeadRequest(request,{
      allowedOrigin:origin,rateLimit:createLeadRateLimiter(pool),saveLead:createLeadStore(pool)
    });
  } catch {
    return Response.json({error:"unavailable"},{status:503,headers:{"Cache-Control":"no-store"}});
  }
}
