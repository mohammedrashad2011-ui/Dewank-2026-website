import { hubOffers, hubVideo } from "../(ar)/offers/offers-hub-data";
import { canonicalServiceNames, defaultDescription, siteUrl } from "./seo";

// Markdown versions of the site for AI agents: /index.md, /en/index.md and /llms.txt.
// Built from the same data the pages use. No prices are written here: every price on the site is shown in the
// visitor's local currency by the localization engine, so agents are pointed to each offer page instead.

const offers = [{ path: hubVideo.path, ar: hubVideo.ar, en: hubVideo.en }, ...hubOffers];

const englishServices: Array<[string, string]> = [
  ["/en/branding", "Brand strategy and visual identity"],
  ["/en/brand-naming", "Brand naming"],
  ["/en/website-design", "Website design"],
  ["/en/paid-advertising", "Google Ads and Meta Ads management"],
  ["/en/seo-geo-aeo", "SEO, GEO and AEO"],
  ["/en/digital-marketing", "Digital marketing"],
  ["/en/social-media-content", "Social media content"],
  ["/en/whatsapp-crm-automation", "WhatsApp and CRM automation"],
  ["/en/ai-automation", "AI automation"],
  ["/en/conversion-rate-optimization", "Conversion rate optimisation"],
];

const url = (path: string) => `${siteUrl}${path.split("#")[0]}`;

export const englishSummary =
  "Dewank is a digital marketing agency and growth studio for businesses in Saudi Arabia, the Gulf and worldwide. It brings brand strategy and visual identity, websites, paid ads, SEO and AEO, content, and WhatsApp and CRM automation into one system.";

const contactEn = [
  "- WhatsApp: +973 39066649 (https://wa.me/97339066649)",
  "- Email: hello@dewank.com",
  `- Contact page: ${url("/en/contact")}`,
  "- Languages: Arabic and English. Work is delivered remotely.",
];

function englishBody() {
  return [
    "## Services",
    ...englishServices.map(([path, name]) => `- [${name}](${url(path)})`),
    "",
    "## Fixed-scope packages",
    `Each package has a defined scope and a published starting price, shown on its page in the visitor's local currency. All packages: ${url("/en/offers")}`,
    "",
    ...offers.map((o) => `- [${o.en.title}](${url("/en" + o.path)}): ${o.en.hook}. Timing or scope: ${o.en.time}.`),
    "",
    "## Proof and company",
    `- [Selected work](${url("/en/work")})`,
    `- [BITHAN case study: naming and visual identity for a fine jewellery brand in Qatar](${url("/en/work/bithan")})`,
    `- [About Dewank](${url("/en/about")})`,
    `- [Growth guides](${url("/en/guides")})`,
  ];
}

export function homeMarkdownEn() {
  return [
    "# Dewank",
    "",
    `> ${englishSummary}`,
    "",
    `Website: ${url("/en")} (Arabic: ${siteUrl}/)`,
    "",
    "## Contact",
    ...contactEn,
    "",
    ...englishBody(),
    "",
  ].join("\n");
}

export function homeMarkdownAr() {
  return [
    "# ديوانك (Dewank)",
    "",
    `> ${defaultDescription}`,
    "",
    `الموقع: ${siteUrl}/ (English: ${url("/en")})`,
    "",
    "## التواصل",
    "- واتساب: ‎+973 39066649 (https://wa.me/97339066649)",
    "- البريد: hello@dewank.com",
    `- صفحة التواصل: ${url("/contact")}`,
    "- العمل بالعربية والإنجليزية، وعن بعد.",
    "",
    "## الخدمات",
    ...Object.entries(canonicalServiceNames).map(([path, name]) => `- [${name}](${url(path)})`),
    "",
    "## الباقات محددة النطاق",
    `لكل باقة نطاق محدد وسعر بداية معلن يظهر في صفحتها بعملة بلد الزائر. كل الباقات: ${url("/offers")}`,
    "",
    ...offers.map((o) => `- [${o.ar.title}](${url(o.path)}): ${o.ar.hook}. المدة أو النطاق: ${o.ar.time}.`),
    "",
    "## الأعمال والشركة",
    `- [أعمالنا](${url("/work")})`,
    `- [دراسة حالة BITHAN: تسمية وهوية بصرية لعلامة مجوهرات في قطر](${url("/work/bithan")})`,
    `- [من نحن](${url("/about")})`,
    `- [أدلة النمو](${url("/guides")})`,
    "",
  ].join("\n");
}

export function llmsTxt() {
  return [
    "# Dewank",
    "",
    `> ${englishSummary}`,
    "",
    "The primary site is in Arabic; an English version covers the same services and packages. Markdown versions of the homepage are available for agents.",
    "",
    "## Start here",
    `- [Arabic homepage (Markdown)](${url("/index.md")})`,
    `- [English homepage (Markdown)](${url("/en/index.md")})`,
    `- [Sitemap](${url("/sitemap.xml")})`,
    "",
    "## Contact",
    ...contactEn,
    "",
    ...englishBody(),
    "",
    "## Arabic site (primary)",
    `- [الصفحة الرئيسية](${siteUrl}/)`,
    `- [العروض والباقات](${url("/offers")})`,
    `- [الخدمات](${url("/services")})`,
    `- [أدلة النمو](${url("/guides")})`,
    "",
  ].join("\n");
}

export const markdownHeaders = {
  "Content-Type": "text/markdown; charset=utf-8",
  Vary: "Accept",
  // Never stored by a shared cache: the homepage URL can return this Markdown to agents, and a cached copy must
  // never reach a browser.
  "Cache-Control": "private, no-store",
  "X-Robots-Tag": "noindex",
};
