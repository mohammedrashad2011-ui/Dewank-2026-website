type Consent = { analytics?: boolean; advertising?: boolean };
export function explicitConsent(): Consent {
  try {
    const api = (window as unknown as {dewankConsent?: {get:()=>Consent|null}}).dewankConsent;
    return api?.get() ?? {};
  } catch { return {}; }
}
const limits = {utm_source:100,utm_medium:100,utm_campaign:160,utm_content:160,gclid:256} as const;
export function permittedCampaign(params: URLSearchParams) {
  const consent = explicitConsent();
  const result: Record<string,string> = {};
  if (consent.analytics!==true) return result;
  for (const key of Object.keys(limits) as Array<keyof typeof limits>) {
    if (key==="gclid" && consent.advertising!==true) continue;
    const value=params.get(key);
    if(value && value.length<=limits[key] && /^[a-zA-Z0-9_ .:+%-]+$/.test(value)) result[key]=value;
  }
  return result;
}
