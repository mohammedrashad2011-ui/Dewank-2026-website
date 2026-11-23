import { enMetadata } from "../../_en/metadata";
import { Header } from "../../_en/parity/header";
import { Footer } from "../../_en/parity/footer";
import CompanyProfileLanding, { companyProfileFaqs } from "../../../../(ar)/offers/company-profile/company-profile-landing";

export const metadata = enMetadata(
  "Company Profile Design for Saudi and Gulf Businesses | Dewank",
  "Custom company profile design: up to 12 pages in one language, professional copywriting, two revisions, digital and print-ready PDFs, from SAR 990.",
  "/en/offers/company-profile",
);

const url = "https://dewank.com/en/offers/company-profile";
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Service", "@id": url + "#service", "name": "Company Profile Design",
      "description": "Up to 12 pages, one language, copywriting from client-supplied information, custom design, two revision rounds, digital and print-ready PDFs.",
      "serviceType": "Company Profile Design", "provider": { "@id": "https://dewank.com/#organization" },
      "url": url, "offers": { "@type": "Offer", "price": "990", "priceCurrency": "SAR", "url": url, "availability": "https://schema.org/InStock" } },
    { "@type": "FAQPage", "@id": url + "#faq", "mainEntity": companyProfileFaqs.en.map(([q,a]) => ({
      "@type": "Question", "name": q, "acceptedAnswer": { "@type": "Answer", "text": a }
    })) },
    { "@type": "BreadcrumbList", "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dewank.com/en" },
      { "@type": "ListItem", "position": 2, "name": "Offers", "item": "https://dewank.com/en/offers" },
      { "@type": "ListItem", "position": 3, "name": "Company profile design", "item": url }
    ]}
  ]
};

export default function CompanyProfileOfferPage() {
  return <main className="inner-page" lang="en" dir="ltr"><Header/><script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd).replace(/</g,"\\u003c")}}/><CompanyProfileLanding locale="en"/><Footer/></main>;
}
