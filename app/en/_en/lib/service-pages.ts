// Content for the English service pages. Written for an international audience from the verified
// capabilities of the Arabic service pages. No prices, no result promises, no client claims.

export type Faq = { q: string; a: string };
export type Option = { name: string; text: string };

export type ServiceDetail = {
  slug: string;
  path: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lead: string;
  serviceName: string;
  serviceType: string;
  scopeSubject: string;
  intro?: { title: string; paragraphs: string[] };
  options?: { title: string; items: Option[]; note?: string };
  included: string[];
  steps: { title: string; text: string }[];
  fit: { yes: string; no: string };
  faqs: Faq[];
  proof?: { label: string; href: string };
  related: { label: string; href: string }[];
};

export const SERVICE_PAGES: Record<string, ServiceDetail> = {
  "paid-advertising": {
    slug: "paid-advertising",
    path: "/en/paid-advertising",
    title: "Paid Advertising: Google Ads and Meta Ads",
    description:
      "Google Ads and Meta Ads planned, launched and optimised around enquiries: campaign structure, creative, landing paths, conversion tracking and written monthly reviews.",
    eyebrow: "Paid advertising",
    h1: "Paid advertising measured by enquiries, not clicks.",
    lead:
      "We plan, launch and manage Google and Meta campaigns from the keyword or audience through the landing page, the conversion tracking and the follow-up. You see which spend produces real enquiries, and where a campaign needs fixing.",
    serviceName: "Paid advertising management: Google Ads and Meta Ads",
    serviceType: "Paid advertising management",
    scopeSubject: "Paid advertising scope request",
    intro: {
      title: "Google or Meta?",
      paragraphs: [
        "Google Search captures demand from people already looking for a service. Meta builds demand through audiences and creative. Many businesses use both.",
        "We recommend the mix after reviewing your offer, your market and your budget.",
      ],
    },
    included: [
      "Campaign structure and a keyword or audience plan, built around one clear offer per campaign.",
      "Ad copy and creative briefs, tested against the message on your landing page.",
      "Landing paths matched to each campaign, or a clear recommendation when the current page cannot convert.",
      "Conversion tracking in GA4, Google Ads and Meta, so enquiries are recorded as conversions.",
      "Search term, placement and audience reviews, with negative keywords and exclusions.",
      "A written review each month: what changed, what was learned and what we test next.",
    ],
    options: {
      title: "Launch or ongoing management",
      items: [
        { name: "Launch", text: "One organised campaign set, set up, tested and handed over." },
        { name: "Ongoing management", text: "Continuous testing, review and adjustment, with a monthly decision log." },
      ],
      note: "We agree which one fits your stage in the scope call.",
    },
    steps: [
      { title: "Review", text: "We review your offer, your market, any existing accounts and your tracking." },
      { title: "Measure first", text: "We set up conversion tracking before spend increases, so results can be read." },
      { title: "Launch a focused test", text: "One clear campaign set, with a defined budget and a landing path." },
      { title: "Review and decide", text: "Regular checks for issues, and monthly decisions on budget, creative and audiences." },
    ],
    fit: {
      yes: "You have an offer ready to test, and a page or contact route that can convert the traffic.",
      no: "You need a guaranteed number of leads or sales. Results depend on the offer, the market and the budget, and we do not promise specific outcomes.",
    },
    faqs: [
      {
        q: "Do you guarantee results?",
        a: "No. Results depend on the offer, the market, the budget and how quickly enquiries are answered. We commit to a clear process, measured reporting and recommendations we can explain.",
      },
      {
        q: "How long before we see results?",
        a: "Campaigns need enough data to be judged. The first weeks are mostly for learning. We agree the review schedule and the measures we will use before launch.",
      },
      {
        q: "Do we need a separate landing page?",
        a: "Often, yes. If the current page does not explain the offer or make contact easy, paid traffic is wasted. We advise on this before spend increases, and a new page can be scoped separately.",
      },
    ],
    related: [
      { label: "SEO, GEO and AEO", href: "/en/seo-geo-aeo" },
      { label: "Website design and conversion", href: "/en/website-design" },
      { label: "WhatsApp and CRM follow-up", href: "/en/whatsapp-crm-automation" },
    ],
  },

  "seo-geo-aeo": {
    slug: "seo-geo-aeo",
    path: "/en/seo-geo-aeo",
    title: "SEO, GEO and AEO: Search and AI Answer Visibility",
    description:
      "SEO, GEO and AEO for businesses that want accurate visibility in search results and AI answer systems: technical audit, page structure, answer-ready content and structured data.",
    eyebrow: "SEO, GEO and AEO",
    h1: "Clear pages that search engines and AI answers can understand.",
    lead:
      "Search results and AI answers both depend on pages that answer real questions clearly and describe the business accurately. We improve the foundations you control: technical health, page structure, content and structured data.",
    serviceName: "SEO, GEO and AEO services",
    serviceType: "Search engine optimisation",
    scopeSubject: "SEO, GEO and AEO scope request",
    intro: {
      title: "Three terms, one discipline",
      paragraphs: [
        "SEO (search engine optimisation) makes your pages easier to find and understand in traditional search results.",
        "GEO and AEO (generative and answer engine optimisation) prepare the same pages to be summarised accurately by AI answer systems. They rest on the same foundations: clear content, consistent business information and a useful structure.",
        "No one can guarantee rankings or citations in an AI answer. We make your pages as clear, accurate and useful as possible, and we measure what changes.",
      ],
    },
    included: [
      "Technical audit: indexing, crawlability, speed and mobile usability.",
      "A priority plan that orders issues by their likely impact on commercial pages.",
      "Information architecture that links service, guide and FAQ pages in a logical structure.",
      "Answer-ready content: direct answers, definitions and FAQs written for people first.",
      "Structured data: valid schema for your organisation, services and FAQs, used only where it matches the visible page.",
      "Measurement in Search Console and GA4, with a monthly summary.",
    ],
    steps: [
      { title: "Audit", text: "We review indexing, technical issues, content and the pages that matter commercially." },
      { title: "Prioritise", text: "We rank the fixes by impact and effort, and agree the first sprint." },
      { title: "Implement", text: "We improve titles, headings, content, internal links and structured data." },
      { title: "Measure", text: "We track search visibility and enquiries, then adjust the plan." },
    ],
    fit: {
      yes: "Your business depends on people finding you through search, and you want durable visibility rather than short-term traffic.",
      no: "You want a quick ranking guarantee. Search performance changes over months and depends on competition and content quality.",
    },
    faqs: [
      {
        q: "What is the difference between SEO, GEO and AEO?",
        a: "SEO is about visibility in traditional search results. GEO and AEO describe optimising for generative and answer engines that summarise information. The foundations overlap: clear pages, accurate facts and a logical structure.",
      },
      {
        q: "Does structured data guarantee AI citations?",
        a: "No. Structured data helps machines read a page accurately. It does not guarantee that a search engine or an AI system will show or cite the page.",
      },
      {
        q: "How long does SEO take?",
        a: "Search results usually change over months rather than days. We agree a measurement plan at the start, so progress is visible even before rankings move.",
      },
      {
        q: "Do you write the content?",
        a: "Where it is in scope, yes. We write or edit pages to match your business facts. We ask you to approve anything that makes a claim about your company.",
      },
    ],
    related: [
      { label: "Website design and conversion", href: "/en/website-design" },
      { label: "Paid advertising", href: "/en/paid-advertising" },
      { label: "Analytics and conversion tracking", href: "/en/services#analytics" },
    ],
  },

  "website-design": {
    slug: "website-design",
    path: "/en/website-design",
    title: "Website Design, Development and Conversion",
    description:
      "Website design and development for businesses that need a clear message, a mobile-first build, SEO foundations and tracking. Landing pages and company websites, scoped to your goal.",
    eyebrow: "Websites",
    h1: "A website that explains the offer and guides the next step.",
    lead:
      "A website should make it easy to understand what you do, why it matters and how to contact you. We design and build mobile-first pages with SEO foundations, analytics and clear contact paths from the start.",
    serviceName: "Website design, development and conversion",
    serviceType: "Website design and development",
    scopeSubject: "Website scope request",
    options: {
      title: "Choose the right format",
      items: [
        {
          name: "Landing page",
          text: "One campaign, offer or decision, with proof and a single next step. Good for launches and paid campaigns.",
        },
        {
          name: "Company website",
          text: "Several services, pages and audiences, with a clear structure and internal links between them.",
        },
        {
          name: "Custom project",
          text: "Larger requirements, such as booking flows or integrations. These are scoped after a review, not priced from a template.",
        },
      ],
      note: "If you are not sure, we will recommend the format in the scope call.",
    },
    included: [
      "Message and page structure, planned before any visual design.",
      "Responsive design and build, tested on mobile and desktop.",
      "SEO foundations: titles, headings, descriptions, internal links and a sitemap.",
      "Analytics and conversion events, so enquiries can be measured.",
      "Contact paths, such as a form, email and WhatsApp, matched to how your customers prefer to reach you.",
      "Performance and accessibility checks before launch.",
    ],
    steps: [
      { title: "Start with the role", text: "Decide what the site must do for the business before choosing colours or layouts." },
      { title: "Structure the pages", text: "Plan the message, proof and navigation for each page." },
      { title: "Design and build", text: "Mobile first, with one consistent visual system." },
      { title: "Test and measure", text: "Check speed, forms, links and tracking before and after launch." },
    ],
    fit: {
      yes: "Your site does not yet explain the offer clearly, or it does not make contact easy.",
      no: "You need a large custom platform, such as a marketplace. We review those in a scope call before agreeing whether and how we can help.",
    },
    faqs: [
      {
        q: "Do you work with clients in other countries?",
        a: "Yes. We work remotely with businesses in other markets when the scope and time zone fit.",
      },
      {
        q: "Will the site rank in Google?",
        a: "We build the foundations search engines need, but rankings depend on competition, content and time. We do not promise rankings.",
      },
      {
        q: "Who manages the site after launch?",
        a: "We agree the post-launch arrangement in the written scope, including any ongoing support.",
      },
      {
        q: "Do you need our content?",
        a: "Not always. We can help write the core pages, but we need accurate facts about your business, and we ask for your approval before anything is published.",
      },
    ],
    related: [
      { label: "SEO, GEO and AEO", href: "/en/seo-geo-aeo" },
      { label: "Paid advertising", href: "/en/paid-advertising" },
      { label: "WhatsApp and CRM follow-up", href: "/en/whatsapp-crm-automation" },
    ],
  },

  "whatsapp-crm-automation": {
    slug: "whatsapp-crm-automation",
    path: "/en/whatsapp-crm-automation",
    title: "WhatsApp, CRM and Follow-Up Automation",
    description:
      "WhatsApp and CRM automation that answers enquiries quickly, qualifies leads, books appointments and hands over to your team with the full context.",
    eyebrow: "WhatsApp and CRM",
    h1: "Fewer lost enquiries between the first message and the booking.",
    lead:
      "Many enquiries are lost in the gap between the first message and the next step. We design the response, qualification, booking and follow-up flow across WhatsApp and your CRM, so every conversation has a clear status and a clear owner.",
    serviceName: "WhatsApp and CRM follow-up automation",
    serviceType: "Marketing automation",
    scopeSubject: "WhatsApp and CRM scope request",
    intro: {
      title: "Automation is more than an auto-reply",
      paragraphs: [
        "A useful flow answers the common questions straight away, captures the details your team needs, and passes the conversation to a person when a decision is required.",
        "The aim is that every message has a clear next step.",
      ],
    },
    options: {
      title: "Choose the scope that fits",
      items: [
        {
          name: "Starter: reply, qualify, hand over",
          text: "For businesses where slow replies, repeated questions or incomplete handovers are the main problem.",
        },
        {
          name: "WhatsApp with CRM",
          text: "For teams with sales stages, bookings and follow-ups, who need lead status, reminders and reports across a longer journey.",
        },
      ],
      note: "If you are not sure, start with the smallest setup that solves today's problem, then expand once the journey is clear.",
    },
    included: [
      "Conversation review: repeated questions, drop-off points and the most common enquiry types.",
      "Flow design: replies, qualification, booking, reminders and human handover.",
      "Connections between WhatsApp, your CRM and booking tools, as agreed in scope.",
      "Testing with realistic conversations before anything goes live.",
      "Improvements based on real conversations after launch.",
    ],
    steps: [
      { title: "Review", text: "We look at current conversations, where time is lost and where enquiries disappear." },
      { title: "Design the path", text: "We choose the simplest flow that solves the problem." },
      { title: "Connect and test", text: "We set up the integrations and test real scenarios." },
      { title: "Improve", text: "We refine replies and rules using real conversations." },
    ],
    fit: {
      yes: "Your team loses time to repeated questions, or enquiries wait too long for a reply.",
      no: "You want a bot to replace every human conversation. Automation handles routine steps. Pricing exceptions, complaints and approvals stay with your team.",
    },
    faqs: [
      {
        q: "Will the automation replace our team?",
        a: "No. It handles repeated questions and captures the details, then passes the conversation to a person when a decision is needed.",
      },
      {
        q: "Do we need a CRM first?",
        a: "Not always. We start with the smallest setup that solves the current problem, and expand when the customer journey requires it.",
      },
      {
        q: "Does it work with our existing CRM?",
        a: "We confirm compatibility in the scope call, before any connection is built.",
      },
      {
        q: "Who owns the conversation data?",
        a: "Data handling, access and retention are agreed in the scope call, before any system is connected.",
      },
    ],
    proof: { label: "See the anonymised clinic follow-up case", href: "/en/work#clinic" },
    related: [
      { label: "AI automation and workflows", href: "/en/ai-automation" },
      { label: "Paid advertising", href: "/en/paid-advertising" },
      { label: "Analytics and conversion tracking", href: "/en/services#analytics" },
    ],
  },

  "ai-automation": {
    slug: "ai-automation",
    path: "/en/ai-automation",
    title: "AI Automation and Workflows",
    description:
      "AI automation and workflow design that maps your process first, removes repeated manual steps and keeps people in control of sensitive decisions.",
    eyebrow: "AI automation",
    h1: "Map the process first. Use AI where it genuinely helps.",
    lead:
      "We start with the process as it runs today. Then we decide which steps should follow fixed rules, which need AI to understand text, and which must stay with a person. Finally we build the simplest workflow that does the job.",
    serviceName: "AI automation and workflow design",
    serviceType: "Business process automation",
    scopeSubject: "AI automation scope request",
    options: {
      title: "Three kinds of step",
      items: [
        {
          name: "Fixed rules",
          text: "Send an alert, update a CRM record, create a task, move data or trigger a reminder after a set time.",
        },
        {
          name: "Understanding and classification",
          text: "Read a customer message, classify a request, summarise a conversation, suggest a reply or route a case.",
        },
        {
          name: "Human decisions",
          text: "Complaints, approvals, negotiation, exceptions and any decision with high risk stay with a responsible person.",
        },
      ],
      note: "Rules are cheaper to test and easier to audit. Use AI only where a rule cannot handle the input.",
    },
    intro: {
      title: "Workflow or agent?",
      paragraphs: [
        "A workflow runs predefined steps in the same order every time. It is easy to test and review, and it suits most repeated processes.",
        "An agent lets a model choose its next step. That suits changing tasks, but it needs clear limits, logs and monitoring. We recommend workflows unless the task truly varies.",
      ],
    },
    included: [
      "Process mapping of the current steps, owners and handoffs.",
      "Workflow design with error handling and logs.",
      "Integrations with the tools you already use, as agreed in scope.",
      "Human handover points, written into the flow.",
      "Documentation and a handover session for the people who will own the workflow.",
    ],
    steps: [
      { title: "Map", text: "We document the process as it runs today, including the messy parts." },
      { title: "Decide", text: "We classify each step as a rule, an AI task or a person's decision." },
      { title: "Build and test", text: "We build the workflow and test it with real cases." },
      { title: "Hand over", text: "We document the workflow and train the people who will run it." },
    ],
    fit: {
      yes: "You repeat the same steps across marketing, sales or operations, and you know which steps are slow or error-prone.",
      no: "The process is not defined yet. We clarify it first, because automating an unclear process usually automates the confusion.",
    },
    faqs: [
      {
        q: "Is AI automation the same as a chatbot?",
        a: "No. A chatbot is one possible interface. Automation is the design of steps, rules and handovers behind a process, and AI is used only where a step needs to understand language.",
      },
      {
        q: "Which tools do you use?",
        a: "We choose tools after mapping the process. We do not start from a favourite tool, and we say so when a simpler tool is enough.",
      },
      {
        q: "How do you handle our data?",
        a: "We agree data access, storage and the systems involved in the scope call, before any connection is made.",
      },
      {
        q: "Can we start with one process?",
        a: "Yes. Starting with one clearly defined process is usually the most reliable route.",
      },
    ],
    related: [
      { label: "WhatsApp and CRM follow-up", href: "/en/whatsapp-crm-automation" },
      { label: "Analytics and conversion tracking", href: "/en/services#analytics" },
      { label: "Digital marketing strategy", href: "/en/services#digital-strategy" },
    ],
  },

  "social-media-content": {
    slug: "social-media-content",
    path: "/en/social-media-content",
    title: "Social Media Management and Content",
    description:
      "Social media management and content planning that connects every post to a business goal: strategy, creative, captions, publishing and a monthly review.",
    eyebrow: "Social media and content",
    h1: "Turn scattered posts into a content system with a clear purpose.",
    lead:
      "We plan the messages, ideas, design, captions and publishing schedule around a business goal, so each post supports a follow, a save, an enquiry or a visit. Content becomes part of the customer journey rather than a routine.",
    serviceName: "Social media management and content",
    serviceType: "Social media management",
    scopeSubject: "Social media scope request",
    options: {
      title: "Choose the level of support",
      items: [
        { name: "Ideas and design", text: "Content themes, post designs and captions for your team to publish." },
        { name: "Full management", text: "Content strategy, production, a publishing plan and a monthly review, with the scope agreed in advance." },
        { name: "Account clean-up", text: "A review of an existing account, then a practical plan for what to stop, keep and change." },
      ],
    },
    included: [
      "Content strategy tied to goals and to the audience you want to reach.",
      "A monthly content plan with themes and formats.",
      "Creative design and captions written for each platform.",
      "A publishing schedule agreed before launch.",
      "A monthly review of what worked, what did not, and what changes next.",
    ],
    steps: [
      { title: "Define the goal", text: "What should people do after they see the content?" },
      { title: "Plan the themes", text: "We choose the themes, formats and channels for the period." },
      { title: "Produce and approve", text: "We design and write, then review with you before anything is published." },
      { title: "Publish and review", text: "We publish to the plan and review the results every month." },
    ],
    fit: {
      yes: "You have an audience or a clear market, and you want a steady publishing system.",
      no: "You want followers bought or a guaranteed growth number. We do not sell followers or promise follower counts. We measure engagement and enquiries from the content.",
    },
    faqs: [
      {
        q: "How often do you post?",
        a: "The frequency is agreed in the scope, based on the channels, your team's capacity and your goals.",
      },
      {
        q: "Do you run paid social campaigns?",
        a: "Paid campaigns are a separate service. See paid advertising for how we plan and measure them.",
      },
      {
        q: "Which platforms do you cover?",
        a: "We agree the channels in the scope call, based on where your customers are.",
      },
      {
        q: "Who approves the content?",
        a: "You do. Nothing is published without your approval.",
      },
    ],
    related: [
      { label: "Paid advertising", href: "/en/paid-advertising" },
      { label: "Website design and conversion", href: "/en/website-design" },
      { label: "Digital marketing strategy", href: "/en/services#digital-strategy" },
    ],
  },
};
