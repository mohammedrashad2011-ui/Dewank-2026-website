// Atomic shared fixed-window cap. Deliberately does not trust client IP headers.
// A global cap is a safety brake, not a replacement for edge/WAF bot protection.
export function createLeadRateLimiter(pool,{limit=30,windowMs=60000,clock=Date.now}={}) {
  return async function rateLimit() {
    const bucket=Math.floor(clock()/windowMs);
    const conn=await pool.getConnection();
    try {
      await conn.beginTransaction();
      await conn.execute("INSERT INTO dewank_crm_rate_limits (bucket,hits) VALUES (?,1) ON DUPLICATE KEY UPDATE hits=LEAST(hits+1,?)",[bucket,limit+1]);
      const [rows]=await conn.execute("SELECT hits FROM dewank_crm_rate_limits WHERE bucket=? FOR UPDATE",[bucket]);
      await conn.commit();
      return Number(rows[0]?.hits)<=limit;
    } catch(error) {
      try {await conn.rollback();} catch {}
      throw error;
    } finally {conn.release();}
  };
}
