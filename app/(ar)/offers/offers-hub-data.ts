import type { OfferPriceKey } from "./offer-pricing";

// One list of offers for the Arabic and English hubs. Copy, timings and links are the
// approved card facts that were on each page. Prices come from offer-pricing.ts.
export type HubLocale = "ar" | "en";

type HubText = { category: string; time: string; title: string; hook: string; text: string; label: string; aria: string; cta: string };

export type HubOffer = {
  slug: string;
  /** Path without the /en prefix. */
  path: string;
  filter: string;
  priceKey: OfferPriceKey;
  ar: HubText;
  en: HubText;
};

export const hubOffers: HubOffer[] = [
  {
    slug: "30-day-content-package", path: "/offers/30-day-content-package", filter: "content", priceKey: "30-day-content-package",
    ar: { category: "محتوى", time: "10–14 يوم عمل", title: "تصميم محتوى سوشيال ميديا لشهر", hook: "12 بوست و3 ستوري وريل جاهزين للنشر", text: "نجهز أفكار ونصوص وتصميمات الشهر كله مع خطة نشر، لتنشر بانتظام دون أن تبدأ من الصفر كل يوم.", label: "السعر التأسيسي", aria: "شاهد تفاصيل باقة محتوى شهر كامل", cta: "التفاصيل" },
    en: { category: "Content", time: "10–14 working days", title: "Social media content for a month", hook: "12 posts, 3 stories and a reel, ready to post", text: "Ideas, captions, designs and a posting plan for the whole month, so you post on schedule without starting from scratch each day.", label: "Foundation price", aria: "View the 30-day content package", cta: "Details" },
  },
  {
    slug: "landing-page-package", path: "/offers/landing-page-package", filter: "web conversion", priceKey: "landing-page-package",
    ar: { category: "ويب وتحويل", time: "7–10 أيام عمل", title: "تصميم صفحة هبوط لإعلاناتك", hook: "مبنية لتحويل الزائر إلى طلب على واتساب", text: "صفحة مخصصة لعرض واحد: نكتب النص ونصمم ونربط واتساب والنموذج والتحليلات، والباقة الكاملة تشمل الدومين والاستضافة لسنة.", label: "الباقة الأساسية من", aria: "شاهد تفاصيل باقة صفحة الهبوط", cta: "التفاصيل" },
    en: { category: "Web and conversion", time: "7–10 working days", title: "Landing page design for your ads", hook: "Built to turn visits into WhatsApp enquiries", text: "One page for one offer: we write the copy, design it and connect WhatsApp, the form and analytics. The full package includes the domain and hosting for a year.", label: "Base package from", aria: "View the landing page package", cta: "Details" },
  },
  {
    slug: "seo-audit", path: "/offers/seo-audit", filter: "web", priceKey: "seo-audit",
    ar: { category: "SEO وتحليل", time: "48 ساعة للتسليم", title: "فحص SEO لموقعك", hook: "تقرير بالمشاكل وخطة إصلاح خلال 48 ساعة", text: "نراجع الفهرسة والسرعة والمحتوى والكلمات المفتاحية وظهورك في إجابات الذكاء الاصطناعي، وتستلم تقرير PDF وخطة تحسين لـ30 يومًا.", label: "فحص شامل من", aria: "شاهد تفاصيل فحص SEO الشامل", cta: "التفاصيل" },
    en: { category: "SEO and analysis", time: "48 hours to deliver", title: "SEO audit for your website", hook: "A report and fix plan in 48 hours", text: "We review indexing, speed, content, keywords and your visibility in AI answers. You get a PDF report and a 30-day improvement plan.", label: "Full audit from", aria: "View the SEO and AEO audit", cta: "Details" },
  },
  {
    slug: "brand-naming", path: "/offers/brand-naming", filter: "brand", priceKey: "brand-naming",
    ar: { category: "براند", time: "3–5 أيام عمل", title: "اختيار اسم تجاري", hook: "مدروس لمشروعك", text: "10–15 اسمًا مدروسًا، فحص مبدئي للمعنى والتشابه والدومين، أفضل 3 ترشيحات، وتوجه أولي للعلامة للاسم المختار.", label: "الباقة الجاهزة من", aria: "شاهد تفاصيل باقة اختيار الاسم التجاري", cta: "التفاصيل" },
    en: { category: "Brand", time: "3–5 working days", title: "A name that sticks", hook: "And a direction that builds the brand", text: "10–15 considered names, preliminary checks of meaning, similarity and domain, a top three, and an initial brand direction for the chosen name.", label: "Package from", aria: "View the brand naming package", cta: "Details" },
  },
  {
    slug: "whatsapp-automation-starter", path: "/offers/whatsapp-automation-starter", filter: "automation", priceKey: "whatsapp-automation-starter",
    ar: { category: "أتمتة", time: "3–5 أيام عمل", title: "أتمتة واتساب لنشاطك", hook: "رد آلي يجمع بيانات العميل ويؤهله", text: "يرد على الأسئلة المتكررة، ويجمع بيانات العميل ويتابعه، ثم يحوّله للموظف المناسب، فلا تضيع محادثة.", label: "باقة التأسيس من", aria: "شاهد تفاصيل باقة واتساب أوتوميشن", cta: "التفاصيل" },
    en: { category: "Automation", time: "3–5 working days", title: "WhatsApp automation for your business", hook: "Auto-replies that collect and qualify leads", text: "It answers common questions, collects customer details, follows up, then hands over to the right person, so no conversation is lost.", label: "Starter package from", aria: "View the WhatsApp automation starter", cta: "Details" },
  },
  {
    slug: "mini-visual-identity", path: "/offers/mini-visual-identity", filter: "brand", priceKey: "mini-visual-identity",
    ar: { category: "هوية", time: "7–10 أيام عمل", title: "تصميم هوية بصرية", hook: "شعار وألوان وخطوط لمشروعك", text: "شعار أساسي ونسخة مبسطة، ألوان وخطوط وتوجه بصري و3 تطبيقات عملية، لتبدأ علامتك بصورة متماسكة بدل التصميم العشوائي.", label: "الباقة المصغرة من", aria: "شاهد تفاصيل باقة الهوية البصرية المصغرة", cta: "التفاصيل" },
    en: { category: "Identity", time: "7–10 working days", title: "Visual identity design", hook: "Logo, colours and typefaces", text: "A primary logo and a simplified version, colours, typefaces, a visual direction and three practical applications, so the brand starts consistent rather than random.", label: "Mini package from", aria: "View the mini visual identity package", cta: "Details" },
  },
  {
    slug: "google-ads-launch", path: "/offers/google-ads-launch", filter: "ads", priceKey: "google-ads-launch",
    ar: { category: "إعلانات", time: "2–4 أيام عمل", title: "إطلاق حملة Google Ads", hook: "إعداد كامل جاهز للتشغيل خلال 2–4 أيام", text: "حملة بحث بكلمات بنية شراء، كتابة الإعلانات، كلمات سلبية، تتبع التحويل وفحص قبل الإطلاق. إعداد لمرة واحدة، وليست إدارة شهرية.", label: "باقة الإطلاق من", aria: "شاهد تفاصيل باقة إطلاق Google Ads", cta: "التفاصيل" },
    en: { category: "Advertising", time: "2–4 working days", title: "Google Ads campaign setup", hook: "Ready to launch in 2–4 working days", text: "A Search campaign with buyer-intent keywords, ad copy, negative keywords, conversion tracking and a pre-launch check. A one-time setup, not monthly management.", label: "Launch package from", aria: "View the Google Ads launch package", cta: "Details" },
  },
  {
    slug: "instagram-14-day-upgrade", path: "/offers/instagram-14-day-upgrade", filter: "content", priceKey: "instagram-14-day-upgrade",
    ar: { category: "إنستجرام", time: "14 يوم تطوير مركز", title: "تطوير حساب إنستجرام", hook: "بايو وهايلايتس و6 تصميمات خلال 14 يومًا", text: "نراجع الحساب ونحسّن البايو والـCTA والهايلايتس، ونحدد محاور المحتوى والتوجه البصري، مع 6 تصميمات وخطة تنفيذ.", label: "باقة تطوير إنستجرام من", aria: "شاهد تفاصيل تطوير حساب إنستجرام خلال 14 يوم", cta: "التفاصيل" },
    en: { category: "Instagram", time: "14 focused days", title: "Instagram account upgrade", hook: "Bio, highlights and 6 designs in 14 days", text: "We review the account, improve the bio, call to action and highlights, set content themes and a visual direction, and deliver six designs with a plan.", label: "Upgrade package from", aria: "View the 14-day Instagram upgrade", cta: "Details" },
  },
  {
    slug: "small-business-website", path: "/offers/small-business-website", filter: "web", priceKey: "small-business-website",
    ar: { category: "مواقع", time: "حتى 5 صفحات", title: "تصميم موقع للشركات الصغيرة", hook: "حتى 5 صفحات، جاهز للإطلاق", text: "تصميم وتطوير متجاوب مع الجوال، ربط واتساب ونموذج تواصل، تحليلات وSEO أساسي، ومراجعة كاملة قبل الإطلاق.", label: "باقة الموقع من", aria: "شاهد تفاصيل باقة الموقع الصغير", cta: "التفاصيل" },
    en: { category: "Websites", time: "Up to 5 pages", title: "Small business website", hook: "Up to 5 pages, ready to launch", text: "Mobile-friendly design and build, WhatsApp and a contact form, analytics and basic SEO, and a full review before launch.", label: "Website package from", aria: "View the small business website package", cta: "Details" },
  },
  {
    slug: "cro-snapshot", path: "/conversion-rate-optimization#pricing", filter: "web conversion", priceKey: "cro-snapshot",
    ar: { category: "تدقيق وتحويل", time: "3 باقات لمرة واحدة", title: "فحص معدل التحويل لموقعك", hook: "اعرف لماذا يزورك العملاء ولا يطلبون", text: "3 باقات محددة، من فحص صفحة واحدة إلى تحليل المسار كاملًا، وكل باقة توضح ما تشمله ومدة تسليمها قبل الدفع.", label: "يبدأ من", aria: "شاهد باقات فحص التحويل وتدقيق المسار", cta: "الباقات" },
    en: { category: "Audit and conversion", time: "3 one-time packages", title: "Conversion rate audit", hook: "Find out why visitors leave without enquiring", text: "Three fixed packages, from a single-page check to a full funnel review. Each one states its scope and delivery time before you pay.", label: "Starting from", aria: "View the conversion audit packages", cta: "Packages" },
  },
];

export const hubVideo = {
  path: "/offers/ai-video-production",
  filter: "content ads",
  ar: { category: "فيديو AI", time: "3 باقات فيديو واضحة", title: "إنتاج فيديوهات AI وريلز", hook: "مونتاج، إنشاء من الصفر، وإعلانات", text: "فيديوهات قصيرة للشركات والمتاجر، من خاماتك أو من الفكرة. باقات واضحة للريلز وفيديوهات AI والإعلانات مع سكريبت ومونتاج وطلب مباشر.", label: "مونتاج ريلز يبدأ من", aria: "شاهد باقات إنتاج الفيديوهات بالذكاء الاصطناعي والريلز", cta: "استعرض باقات الفيديو", steps: ["مونتاج ريلز", "فيديو AI من الصفر", "إعلانات قصيرة"], posterAlt: "لقطة من شوريل ديوانك لإنتاج الفيديو", badge: "شاهد الشوريل داخل الصفحة" },
  en: { category: "AI video", time: "3 video packages", title: "AI videos and Reels production", hook: "Edit, generate or advertise", text: "Short-form videos for brands and stores. Choose editing from your footage, AI videos from a concept, or purpose-built ad creatives.", label: "Reels editing from", aria: "View AI video production and Reels editing packages", cta: "See the video packages", steps: ["Reels editing", "AI video from scratch", "Short video ads"], posterAlt: "A frame from the Dewank video production showreel", badge: "Watch the showreel on the page" },
} as const;

export const hubCopy = {
  ar: {
    eyebrow: "عروض ديوانك",
    title: "عروض تسويق بنطاق واضح",
    titleAccent: "وسعر تعرفه قبل أن تبدأ",
    lead: "براند، محتوى، فيديو، مواقع، إعلانات وأتمتة. كل عرض يحدد ما تستلمه ومدته وسعر بدايته، وتطلبه مباشرة عبر واتساب.",
    facts: ["11 عرضًا محدد النطاق", "سعر البداية ظاهر", "تأكيد النطاق قبل الدفع"],
    browse: "تصفح العروض",
    recommend: "اطلب ترشيحًا مجانيًا",
    recommendMessage: "مرحبًا ديوانك، أرغب في استشارة مجانية مبدئية لاختيار باقة ديوانك المناسبة. نشاطي: . هدفي: ",
    filterLabel: "تصفية عروض ديوانك حسب نوع الخدمة",
    filterTitle: "اختر حسب هدفك",
    filterGroup: "أنواع العروض",
    filters: ["الكل", "محتوى وإنستجرام", "إعلانات", "مواقع وSEO", "تحسين التحويل", "هوية وبراند", "أتمتة"],
    gridLabel: "عروض ديوانك الحالية",
    featured: "جديد",
    noteEyebrow: "لم تقرر بعد؟",
    noteTitle: "أخبرنا بهدفك ونرشح لك البداية المناسبة",
    noteText: "أرسل نشاطك وهدفك لنرشح العرض الأقرب قبل الاتفاق على النطاق والسعر.",
    noteCta: "احصل على استشارة مجانية الآن",
    faqEyebrow: "أسئلة شائعة",
    faqTitle: "أسئلة قبل أن تختار",
    faqIntro: "إجابات مختصرة عن العروض والأسعار ومدة التنفيذ.",
  },
  en: {
    eyebrow: "DEWANK OFFERS",
    title: "Marketing offers with a clear scope",
    titleAccent: "and a price you see before you start",
    lead: "Brand, content, video, websites, ads and automation. Each offer states what you receive, how long it takes and its starting price, and you order it on WhatsApp.",
    facts: ["11 scoped offers", "Starting price shown", "Scope confirmed before payment"],
    browse: "Browse the offers",
    recommend: "Get a free recommendation",
    recommendMessage: "Hello Dewank, I would like a free initial consultation to choose the right package. My business is: . My goal is: ",
    filterLabel: "Filter Dewank offers by type of service",
    filterTitle: "Choose by your goal",
    filterGroup: "Types of offer",
    filters: ["All", "Content and Instagram", "Advertising", "Websites and SEO", "Conversion optimisation", "Brand and identity", "Automation"],
    gridLabel: "Current Dewank offers",
    featured: "New",
    noteEyebrow: "Not sure yet?",
    noteTitle: "Tell us your goal and we will suggest the right starting point",
    noteText: "Share your business and goal so we can recommend an offer before agreeing the scope and price. Prices default to US dollars, with local pricing where available.",
    noteCta: "Get a free consultation now",
    faqEyebrow: "Common questions",
    faqTitle: "Questions before you choose",
    faqIntro: "Short answers about offers, prices and delivery time.",
  },
} as const;

export const hubFilterIds = ["all", "content", "ads", "web", "conversion", "brand", "automation"] as const;
