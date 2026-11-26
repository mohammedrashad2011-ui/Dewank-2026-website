// Dependency-free validation contract; server must enforce it before persistence.
export function validateLead(raw) {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return { ok:false, errors:{form:"invalid"} };
  const errors = {};
  const line = (v, max) => typeof v === "string" ? v.replace(/[\u0000-\u001f\u007f]/g," ").trim().slice(0,max) : "";
  const digits = v => v.replace(/[\u0660-\u0669\u06f0-\u06f9]/g,c=>String(c.charCodeAt(0)-(c.charCodeAt(0)>=0x6f0?0x6f0:0x660)));
  const name = line(raw.name,100);
  const phone = digits(line(raw.phone,40)).replace(/[\s().-]/g,"").replace(/^00/,"+");
  const email = line(raw.email,160).toLowerCase();
  const service = line(raw.service,64);
  const services = ["brand-naming","strategy-identity","digital-marketing","paid-tracking","website-conversion","seo-aeo","follow-up-automation","ai-automation","career-branding","integrated","not-sure"];
  const locale = raw.locale === "en" ? "en" : "ar";
  const requestId = line(raw.requestId,36).toLowerCase();
  if (line(raw.website,100)) errors.form="invalid";
  if (name.length<2 || !/\p{L}/u.test(name)) errors.name="required";
  if (!/^\+[1-9]\d{6,14}$/.test(phone)) errors.phone="international_format";
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email="invalid";
  if (!services.includes(service)) errors.service="invalid";
  if (raw.contactConsent !== true) errors.contactConsent="required";
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(requestId)) errors.requestId="invalid";
  if (Object.keys(errors).length) return {ok:false,errors};
  const path = line(raw.landingPath,240);
  const landingPath = /^\/(?!\/)[a-zA-Z0-9/_-]*$/.test(path) ? path : null;
  const attrib = raw.analyticsConsent === true;
  const campaignField = (v,max) => {
    const s = line(v,max);
    return /^[a-zA-Z0-9_ .:+%-]+$/.test(s) ? s : null;
  };
  return {ok:true,data:{requestId,name,phone,email:email||null,service,locale,company:line(raw.company,120)||null,brief:line(raw.brief,3000)||null,contactConsent:true,analyticsConsent:attrib,landingPath,offer:services.includes(raw.offer)?raw.offer:null,utmSource:attrib?campaignField(raw.utmSource,100):null,utmMedium:attrib?campaignField(raw.utmMedium,100):null,utmCampaign:attrib?campaignField(raw.utmCampaign,160):null,utmContent:attrib?campaignField(raw.utmContent,160):null,gclid:attrib?campaignField(raw.gclid,256):null}};
}
