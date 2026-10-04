import type { Metadata } from "next";

export const siteUrl = "https://dewank.com";
export const siteName = "ديوانك | Dewank";
export const organizationId = `${siteUrl}/#organization`;
export const defaultDescription =
  "ديوانك شركة تسويق رقمي واستوديو نمو للشركات في السعودية والخليج، يجمع استراتيجية البراند وتصميم المواقع والحملات وأتمتة واتساب وCRM في منظومة واحدة.";

const socialImage = `${siteUrl}/dewank-social-preview-2026-07.png`;

export function createMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  socialImagePath,
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  socialImagePath?: string;
}): Metadata {
  const canonical = new URL(path, siteUrl).toString();
  const pageSocialImage = socialImagePath
    ? new URL(socialImagePath, siteUrl).toString()
    : socialImage;
  const socialTitle = title.split("|")[0].trim();

  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: {
      canonical,
      languages: {
        ar: canonical,
        "x-default": canonical,
      },
    },
    openGraph: {
      type: "website",
      locale: "ar_SA",
      url: canonical,
      siteName,
      title,
      description,
      images: [
        {
          url: pageSocialImage,
          secureUrl: pageSocialImage,
          width: 1200,
          height: 630,
          type: "image/png",
          alt: `${socialTitle} — ديوانك`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [pageSocialImage],
    },
  };
}

// ---------------------------------------------------------------------------
// Canonical entity graph (V2-08). One Organization + one WebSite, server-rendered
// from app/layout.tsx. Every other schema node references them by @id.
// ---------------------------------------------------------------------------
export const websiteId = `${siteUrl}/#website`;
export const organizationName = "ديوانك";
export const organizationAlternateName = "Dewank";
export const organizationRef = { "@id": organizationId };
export const instagramUrl = "https://www.instagram.com/dewank_marketing";

// Markets with public evidence on the site: السعودية والخليج copy, /about (البحرين والإمارات),
// and the BITHAN case study (قطر). Kuwait/Oman are covered only by the generic "GCC" entry
// until the site publicly names them.
export const servedMarkets = [
  { "@type": "Country", name: "Saudi Arabia" },
  { "@type": "Country", name: "Bahrain" },
  { "@type": "Country", name: "United Arab Emirates" },
  { "@type": "Country", name: "Qatar" },
  { "@type": "Place", name: "GCC" },
];

export const serviceId = (path: string) => `${siteUrl}${path}#service`;

// Canonical Service names, identical to the name each service page already publishes.
// Used by catalog pages (/about, /services) so one @id never carries two different names.
export const canonicalServiceNames: Record<string, string> = {
  "/branding": "استراتيجية البراند وتصميم الهوية البصرية",
  "/services/brand-naming": "خدمة اقتراح أسماء تجارية وفحص العلامة والدومين",
  "/services/social-media-content": "إدارة السوشيال ميديا وصناعة المحتوى",
  "/digital-marketing": "خدمات التسويق الرقمي وصناعة المحتوى",
  "/paid-ads": "إدارة Google Ads وMeta Ads في السعودية",
  "/website-design": "شركة تصميم مواقع وخدمات تطوير المواقع في السعودية",
  "/offers/landing-page-package": "تصميم صفحة هبوط احترافية",
  "/seo-aeo": "شركة سيو وخدمات SEO وAEO في السعودية",
  "/whatsapp-automation": "أتمتة واتساب مع CRM للشركات",
  "/ai-automation": "أتمتة الأعمال بالذكاء الاصطناعي",
};

export const organizationSchema = {
  "@type": "Organization",
  "@id": organizationId,
  name: organizationName,
  alternateName: organizationAlternateName,
  url: siteUrl,
  logo: `${siteUrl}/dewank-logo.png`,
  image: socialImage,
  description: defaultDescription,
  email: "hello@dewank.com",
  telephone: "+97339066649",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+97339066649",
    contactType: "sales",
    availableLanguage: ["Arabic", "English"],
    areaServed: servedMarkets,
  },
  areaServed: servedMarkets,
  sameAs: [instagramUrl],
  serviceType: [
    "Brand Strategy",
    "Digital Marketing",
    "Website Design",
    "SEO and AEO",
    "Paid Advertising",
    "AI Automation",
    "WhatsApp Automation",
    "CRM Automation",
  ],
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": websiteId,
  url: siteUrl,
  name: organizationName,
  alternateName: organizationAlternateName,
  inLanguage: "ar",
  publisher: organizationRef,
};

export const entityGraph = {
  "@context": "https://schema.org",
  "@graph": [organizationSchema, websiteSchema],
};

// JSON for an inline <script type="application/ld+json">; "<" is escaped so content can never close the tag.
export const jsonLd = (data: unknown) => JSON.stringify(data).replace(/</g, "\\u003c");
