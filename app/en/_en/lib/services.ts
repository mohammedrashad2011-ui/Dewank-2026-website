// Full commercial catalogue, organised into categories. This is the single source for the
// navigation panel, the homepage cards and the services page, so every link stays consistent.
//
// A service with `detailHref` links to a dedicated English page. Every other service links to its
// anchor on /services. All anchors must exist on that page (checked by scripts/qa.mjs).
// No prices are published here; every engagement is scoped and quoted in writing.

export type Service = {
  id: string;
  name: string;
  summary: string;
  covers: string;
  forWhom: string;
  scopeSubject: string;
  detailHref?: string;
  proof?: { label: string; href: string };
};

export type Category = {
  id: string;
  label: string;
  title: string;
  intro: string;
  services: Service[];
};

export const SERVICE_CATEGORIES: Category[] = [
  {
    id: "brand",
    label: "Brand",
    title: "Brand foundations",
    intro: "The name, the position and the visual system that every other channel depends on.",
    services: [
      {
        id: "naming",
        name: "Brand naming and preliminary checks",
        summary: "A name that is easy to say, fits the business and passes preliminary checks before you invest in identity.",
        covers: "Naming research, linguistic and cultural checks, preliminary similarity research, domain and handle availability, a shortlist and one development round.",
        forWhom: "New businesses and brands preparing a launch or a repositioning.",
        scopeSubject: "Naming scope request",
        detailHref: "/en/brand-naming",
        proof: { label: "See the BITHAN naming and identity case", href: "/en/work#bithan" },
      },
      {
        id: "brand-strategy",
        name: "Brand strategy and positioning",
        summary: "The audience, the category and the message that guide every decision that comes after.",
        covers: "Market and competitor research, positioning, messaging and the brand direction.",
        forWhom: "Companies that need clear positioning before they spend on marketing or identity.",
        scopeSubject: "Brand strategy scope request",
      },
      {
        id: "brand-identity",
        name: "Brand identity",
        summary: "A visual system built from the strategy, so the identity has a reason to exist.",
        covers: "Logo systems, colour, typography, applications and usage rules.",
        forWhom: "Brands moving from a name to a complete, consistent visual system.",
        scopeSubject: "Brand identity scope request",
        proof: { label: "See the identity work", href: "/en/work#identity" },
      },
    ],
  },
  {
    id: "content",
    label: "Content and social",
    title: "Content and social media",
    intro: "A publishing system that stays on brand and points attention at enquiries.",
    services: [
      {
        id: "social-content",
        name: "Social media management and content",
        summary: "Content strategy, design, captions and a publishing plan that keeps an account consistent and useful.",
        covers: "Content strategy, creative design, captions, scheduling plans and monthly review.",
        forWhom: "Businesses with an active audience that need a steady, on-brand publishing system.",
        scopeSubject: "Social media scope request",
      },
    ],
  },
  {
    id: "growth",
    label: "Growth",
    title: "Growth and demand",
    intro: "Channels, search and measurement, planned as one journey rather than separate tasks.",
    services: [
      {
        id: "digital-strategy",
        name: "Digital marketing strategy",
        summary: "A connected plan across channels, the offer and the follow-up, so each activity supports the same customer journey.",
        covers: "Channel plan, offer and message architecture, measurement plan and quarterly priorities.",
        forWhom: "Companies running several channels without one plan.",
        scopeSubject: "Digital marketing strategy scope request",
      },
      {
        id: "paid-acquisition",
        name: "Paid acquisition: Google and Meta",
        summary: "Campaign setup, creative and landing paths, measured by enquiries rather than clicks.",
        covers: "Campaign structure, creative briefs, audience setup, conversion tracking and reporting.",
        forWhom: "Businesses with an offer ready to test and a page that can convert the traffic.",
        scopeSubject: "Paid acquisition scope request",
      },
      {
        id: "seo-aeo",
        name: "SEO, AEO and GEO",
        summary: "Technical SEO, content structure and entity clarity, so search engines and AI answer systems can find and describe your business accurately.",
        covers: "Technical audit, content and information architecture, structured data and answer-ready page structure.",
        forWhom: "Companies that want durable organic visibility rather than short-term traffic.",
        scopeSubject: "SEO, AEO and GEO scope request",
      },
      {
        id: "analytics",
        name: "Analytics and conversion tracking",
        summary: "Measurement set up so you can see which channels produce enquiries and what happens after the click.",
        covers: "GA4 and tag management setup, conversion events, dashboards and a written tracking plan.",
        forWhom: "Any business spending on marketing without clear measurement.",
        scopeSubject: "Analytics and tracking scope request",
      },
    ],
  },
  {
    id: "web",
    label: "Websites",
    title: "Websites and conversion",
    intro: "Pages that explain the offer clearly and guide the visitor to one next step.",
    services: [
      {
        id: "websites",
        name: "Website design and conversion",
        summary: "Company websites with a clear message, a clear structure and one next step, built mobile first.",
        covers: "Information architecture, design, responsive build, SEO foundations and conversion review.",
        forWhom: "Businesses whose site does not yet explain the offer or guide visitors to make contact.",
        scopeSubject: "Website scope request",
      },
      {
        id: "landing-pages",
        name: "Landing pages",
        summary: "Focused campaign and offer pages built around one decision, with proof and a clear contact route.",
        covers: "Message hierarchy, page design, mobile build and a measured contact path.",
        forWhom: "Campaigns and launches that need a page built for one action.",
        scopeSubject: "Landing page scope request",
      },
    ],
  },
  {
    id: "automation",
    label: "Automation",
    title: "Automation and follow-up",
    intro: "Response, qualification and follow-up, so good enquiries are not lost between channels.",
    services: [
      {
        id: "whatsapp-crm",
        name: "WhatsApp, CRM and follow-up automation",
        summary: "Response, qualification, booking, reminders and follow-up across WhatsApp and your CRM, designed around how your team works.",
        covers: "Conversation flows, lead qualification rules, booking paths, reminders and CRM setup.",
        forWhom: "Businesses that lose enquiries between the first message and the booking.",
        scopeSubject: "WhatsApp and CRM scope request",
        proof: { label: "See the clinic follow-up case", href: "/en/work#clinic" },
      },
      {
        id: "ai-automation",
        name: "AI automation and workflows",
        summary: "Workflow design and integrations that remove manual steps between marketing, sales and operations.",
        covers: "Process mapping, workflow build, integrations and a handover with documentation.",
        forWhom: "Teams with repeated manual processes they want to structure before automating.",
        scopeSubject: "AI automation scope request",
      },
    ],
  },
  {
    id: "career",
    label: "Career",
    title: "Career services",
    intro: "Career documents for professionals applying for roles in the Gulf market.",
    services: [
      {
        id: "career-cv",
        name: "ATS CV and career branding",
        summary: "Role-specific CVs written for applicant tracking systems, with LinkedIn positioning.",
        covers: "Target-role analysis, ATS-readable CV, achievement wording and LinkedIn positioning.",
        forWhom: "Professionals applying for roles in the Gulf market.",
        scopeSubject: "ATS CV scope request",
      },
    ],
  },
];

export const ALL_SERVICES = SERVICE_CATEGORIES.flatMap((c) => c.services);

// Href used by every "Services" link: the category anchor on the services page.
export function categoryHref(category: Category) {
  return `/en/services#${category.id}`;
}

export function serviceHref(service: Service) {
  return service.detailHref ?? `/en/services#${service.id}`;
}
