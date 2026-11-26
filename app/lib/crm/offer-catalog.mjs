export const CRM_OFFERS = Object.freeze({
  "brand-naming": [
    "brand-naming",
    "/offers/brand-naming",
    "اختيار اسم تجاري",
    "Brand naming"
  ],
  "30-day-content-package": [
    "digital-marketing",
    "/offers/30-day-content-package",
    "محتوى سوشيال ميديا لشهر",
    "30-day content package"
  ],
  "visual-identity": [
    "strategy-identity",
    "/offers/visual-identity",
    "تصميم الهوية البصرية",
    "Visual identity"
  ],
  "small-business-website": [
    "website-conversion",
    "/offers/small-business-website",
    "تصميم موقع إلكتروني",
    "Small business website"
  ],
  "landing-page-package": [
    "website-conversion",
    "/offers/landing-page-package",
    "تصميم صفحة هبوط",
    "Landing page package"
  ],
  "whatsapp-automation-starter": [
    "follow-up-automation",
    "/offers/whatsapp-automation-starter",
    "أتمتة واتساب",
    "WhatsApp automation starter"
  ],
  "google-ads-launch": [
    "paid-tracking",
    "/offers/google-ads-launch",
    "إعداد إعلانات جوجل",
    "Google Ads launch"
  ],
  "name-identity": [
    "strategy-identity",
    "/offers/name-identity",
    "اسم تجاري وهوية بصرية",
    "Brand name and identity"
  ],
  "seo-audit": [
    "seo-aeo",
    "/offers/seo-audit",
    "فحص SEO",
    "SEO audit"
  ],
  "instagram-14-day-upgrade": [
    "digital-marketing",
    "/offers/instagram-14-day-upgrade",
    "تطوير إنستجرام",
    "Instagram upgrade"
  ],
  "cro-snapshot": [
    "website-conversion",
    "/conversion-rate-optimization",
    "فحص معدل التحويل",
    "Conversion rate audit"
  ],
  "ai-video-production": [
    "digital-marketing",
    "/offers/ai-video-production",
    "إنتاج الفيديو والريلز",
    "AI video production"
  ]
});
export function getCrmOffer(value) {
  return typeof value==="string" && Object.hasOwn(CRM_OFFERS,value) ? CRM_OFFERS[value] : null;
}
export function crmOfferPath(value,locale) {
  const offer=getCrmOffer(value);
  return offer ? (locale==="en"?"/en":"")+offer[1] : null;
}
