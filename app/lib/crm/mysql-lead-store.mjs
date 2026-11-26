import { createHash, randomUUID, timingSafeEqual } from "node:crypto";

// Accepts an injected mysql2/promise-compatible pool. No driver is loaded until
// the dependency and lockfile have been installed and the staging DB verified.
export function createLeadStore(pool) {
  return async function saveLead(data) {
    const connection=await pool.getConnection();
    const reference=randomUUID();
    const hash=createHash("sha256").update(JSON.stringify(data)).digest("hex");
    try {
      await connection.beginTransaction();
      let inserted;
      try {
        [inserted]=await connection.execute(
          "INSERT INTO dewank_crm_leads (lead_ref,request_id,request_hash,name,phone,email,company,service,brief,locale,contact_consent_at,analytics_consent,landing_path,offer,utm_source,utm_medium,utm_campaign,utm_content,gclid) VALUES (?,?,?,?,?,?,?,?,?,?,UTC_TIMESTAMP(3),?,?,?,?,?,?,?,?)",
          [reference,data.requestId,hash,data.name,data.phone,data.email,data.company,data.service,data.brief,data.locale,data.analyticsConsent,data.landingPath,data.offer,data.utmSource,data.utmMedium,data.utmCampaign,data.utmContent,data.gclid]
        );
      } catch(error) {
        if (error?.code!=="ER_DUP_ENTRY") throw error;
        const [rows]=await connection.execute("SELECT lead_ref,request_hash FROM dewank_crm_leads WHERE request_id=? FOR UPDATE",[data.requestId]);
        const previous=rows[0];
        await connection.rollback();
        if (!previous || typeof previous.request_hash!=="string" || previous.request_hash.length!==64 || !timingSafeEqual(Buffer.from(previous.request_hash),Buffer.from(hash))) return {conflict:true};
        return {reference:previous.lead_ref,created:false};
      }
      await connection.execute("INSERT INTO dewank_crm_notifications (lead_id,channel) VALUES (?,'email')",[inserted.insertId]);
      await connection.commit();
      return {reference,created:true};
    } catch(error) {
      try {await connection.rollback();} catch {}
      throw error;
    } finally {connection.release();}
  };
}
