import type { Metadata } from "next";
import { Header, Footer } from "../../../components/site-shell";
import { createMetadata, organizationId, siteUrl, servedMarkets } from "../../../lib/seo";
import CompanyProfileLanding, { companyProfileFaqs } from "./company-profile-landing";

export const metadata: Metadata = createMetadata({
  title: "تصميم بروفايل شركة احترافي في السعودية | ملف تعريفي للشركات | ديوانك",
  description: "تصميم بروفايل شركة مخصص من ديوانك: حتى 12 صفحة بلغة واحدة، صياغة محتوى احترافي، تصميم بهوية الشركة، جولتا تعديل وملفات PDF رقمية وللطباعة، من 990 ريال سعودي.",
  path: "/offers/company-profile",
  keywords: ["تصميم بروفايل شركة","تصميم ملف تعريفي للشركات","بروفايل شركات احترافي","سعر تصميم بروفايل شركة","Company Profile Design Saudi Arabia","تصميم ملف شركة PDF","تصميم بروفايل شركات السعودية"],
});

const url = siteUrl + "/offers/company-profile";
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service", "@id": url + "#service",
      "name": "تصميم بروفايل شركة احترافي",
      "serviceType": "Company Profile Design",
      "description": "حتى 12 صفحة بلغة واحدة، صياغة وتحرير المحتوى من معلومات العميل، تصميم مخصص، جولتا تعديل، ونسختان PDF للعرض والطباعة.",
      "provider": { "@id": organizationId },
      "areaServed": servedMarkets, "url": url,
      "offers": { "@type": "Offer", "price": "990", "priceCurrency": "SAR", "url": url, "availability": "https://schema.org/InStock" }
    },
    { "@type": "FAQPage", "@id": url + "#faq", "mainEntity": companyProfileFaqs.ar.map(([q,a]) => ({
      "@type": "Question", "name": q, "acceptedAnswer": { "@type": "Answer", "text": a }
    })) },
    { "@type": "BreadcrumbList", "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "الرئيسية", "item": siteUrl },
      { "@type": "ListItem", "position": 2, "name": "العروض", "item": siteUrl + "/offers" },
      { "@type": "ListItem", "position": 3, "name": "تصميم بروفايل شركة", "item": url }
    ]}
  ]
};

export default function CompanyProfileOfferPage() {
  return <main className="inner-page"><Header /><script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd).replace(/</g,"\\u003c")}} /><CompanyProfileLanding locale="ar"/><Footer /></main>;
}
