import { validateLead } from "./validate-lead.mjs";

const MAX_BODY = 16 * 1024;
const json = (value,status) => Response.json(value,{status,headers:{"Cache-Control":"no-store"}});
async function readBody(request) {
  const reader = request.body?.getReader();
  if (!reader) throw new Error("invalid_body");
  let size = 0;
  const chunks = [];
  try {
    for (;;) {
      const {done,value} = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > MAX_BODY) {await reader.cancel();throw new Error("body_too_large");}
      chunks.push(value);
    }
  } finally { reader.releaseLock(); }
  const bytes = new Uint8Array(size);
  let offset=0;
  for (const chunk of chunks) {bytes.set(chunk,offset);offset+=chunk.byteLength;}
  return JSON.parse(new TextDecoder("utf-8",{fatal:true}).decode(bytes));
}

// Not yet exported as a live Next route. Both persistent storage and a trusted
// rate limiter must be supplied by the server integration.
export async function handleLeadRequest(request,{allowedOrigin,rateLimit,saveLead}) {
  if (request.method!=="POST") return json({error:"method_not_allowed"},405);
  if (!allowedOrigin || request.headers.get("origin")!==allowedOrigin) return json({error:"forbidden"},403);
  if (!/^application\/json(?:\s*;|$)/i.test(request.headers.get("content-type")??"")) return json({error:"unsupported_media_type"},415);
  if (Number(request.headers.get("content-length"))>MAX_BODY) return json({error:"body_too_large"},413);
  try {
    if (!await rateLimit(request)) return json({error:"rate_limited"},429);
  } catch {return json({error:"unavailable"},503);}
  let raw;
  try {raw=await readBody(request);} catch(error) {return json({error:error.message==="body_too_large"?"body_too_large":"invalid_body"},error.message==="body_too_large"?413:400);}
  const result=validateLead(raw);
  if (!result.ok) return json({error:"invalid_fields",fields:result.errors},422);
  try {
    const saved=await saveLead(result.data);
    if (saved.conflict) return json({error:"request_conflict"},409);
    if (typeof saved.reference!=="string" || typeof saved.created!=="boolean") return json({error:"unavailable"},503);
    return json({reference:saved.reference,created:saved.created},saved.created?201:200);
  } catch {return json({error:"unavailable"},503);}
}
