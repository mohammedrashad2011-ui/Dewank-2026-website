import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { InlineOfferPrice } from "../../offers/inline-offer-price";
import type { OfferPriceKey } from "../../offers/offer-pricing";
import { OfferPrice } from "../../../(en)/en/_en/lib/localized-price";

// Blocks shared by the Arabic and English social media management pages: design samples, the three ways to start, the
// problems we start from, and collapsed business types. Package prices come from the localization engine only, and
// monthly management has no published price.

type Locale = "ar" | "en";

export function SocialPrice({ locale, offerKey }: { locale: Locale; offerKey: OfferPriceKey }) {
  return locale === "ar" ? <InlineOfferPrice offerKey={offerKey} /> : <OfferPrice offerKey={offerKey} className="sm-price-value" />;
}

const samples = [
  ["bunnah", "مقهى", "Café"],
  ["qrmsha", "مطعم", "Restaurant"],
  ["nova-play", "تطبيق ترفيهي", "Entertainment app"],
  ["calm-root", "منتجات عناية", "Personal care"],
  ["rihla", "سفر وسياحة", "Travel"],
  ["buno", "مخبوزات", "Bakery"],
  ["madar", "خدمات مهنية", "Professional services"],
] as const;

const copy = {
  ar: {
    samples: {
      title: "نماذج من تصاميم المحتوى",
      lead: "نماذج تصميم من قطاعات مختلفة توضح مستوى التنفيذ. النتيجة تختلف حسب نشاطك وموادك.",
      alt: (sector: string) => `نموذج تصميم محتوى سوشيال ميديا: ${sector}`,
    },
    paths: {
      label: "باقات إدارة السوشيال ميديا",
      title: "اختر البداية المناسبة لحسابك",
      cards: [
        { name: "تطوير الحساب", time: "14 يومًا", from: "تبدأ من", fit: "لحساب قائم يحتاج ترتيبًا.", key: "instagram-14-day-upgrade", items: ["مراجعة الحساب والبايو والهايلايتس", "3–5 محاور محتوى", "6 تصميمات تطبيقية وخطة 14 يومًا"], href: "/offers/instagram-14-day-upgrade", cta: "تفاصيل باقة 14 يومًا" },
        { name: "باقة المحتوى", time: "30 يومًا", from: "", fit: "لمن يحتاج محتوى جاهزًا وينشره بنفسه.", key: "30-day-content-package", items: ["12 بوستًا و3 ستوري وريل واحد", "أفكار وكابشنات لكل قطعة", "خطة نشر 30 يومًا"], href: "/offers/30-day-content-package", cta: "تفاصيل باقة 30 يومًا" },
      ],
      monthly: { name: "الإدارة الشهرية", time: "مستمرة", fit: "لمن يحتاج تخطيطًا ونشرًا ومتابعة كل شهر.", price: "السعر بعد مراجعة حسابك", items: ["استراتيجية وتقويم محتوى", "تصميم وكابشنات ونشر", "مراجعة النتائج وتطوير الاتجاه"] },
      note: "الإعلانات المدفوعة والتصوير الاحترافي يُسعَّران منفصلين، ونكتب لك النطاق قبل الدفع.",
      compare: "قارن الأسعار والنطاقات في السعودية",
      compareHref: "/guides/social-media-management-cost-saudi-arabia",
    },
    problems: {
      title: "نبدأ من المشكلة التي تعطل حسابك",
      items: [
        ["تحتار كل مرة ماذا تنشر", "نجهز الأفكار وتقويم المحتوى قبل بداية الشهر."],
        ["حسابك يظهر ثم يختفي", "نضع إيقاع نشر يمكنك الاستمرار عليه."],
        ["تفاعل بلا استفسارات", "نربط كل قطعة بخطوة واضحة: متابعة أو رسالة أو طلب."],
      ],
    },
    sectors: {
      title: "إدارة سوشيال ميديا حسب نشاطك",
      lead: "ما ينشره المطعم لا يناسب العيادة. هذه أمثلة على ما نركز عليه في كل قطاع.",
      items: [
        ["مطعم أو كافيه", "صور المنتج والعروض والموقع وطريقة الطلب."],
        ["متجر إلكتروني", "فوائد المنتج وطريقة الاستخدام والشحن والأسئلة المتكررة قبل الشراء."],
        ["عيادة أو صالون", "شرح الخدمة وبناء الثقة وتسهيل الحجز، مع الالتزام بضوابط القطاع."],
        ["عقار أو مقاولات", "عرض المشاريع ومراحل العمل وما يسأل عنه العميل قبل التواصل."],
        ["خدمات مهنية", "محتوى يشرح خبرتك ويجيب عن أسئلة العميل قبل أن يراسلك."],
        ["علامة أزياء أو مجوهرات", "هوية بصرية ثابتة وقصة وراء كل مجموعة."],
      ],
    },
  },
  en: {
    samples: {
      title: "Samples of content design",
      lead: "Design samples from different sectors, in Arabic, that show the level of execution. Results differ by business and by the material you provide.",
      alt: (sector: string) => `Sample social media content design: ${sector}`,
    },
    paths: {
      label: "Social media packages",
      title: "Choose the right way to start",
      cards: [
        { name: "Account upgrade", time: "14 days", from: "From", fit: "For an existing account that needs tidying up.", key: "instagram-14-day-upgrade", items: ["Account, bio and highlights review", "Three to five content themes", "Six applied designs and a 14-day plan"], href: "/en/offers/instagram-14-day-upgrade", cta: "See the 14-day package" },
        { name: "Content package", time: "30 days", from: "", fit: "If you need ready content and publish it yourself.", key: "30-day-content-package", items: ["12 posts, 3 stories and one reel", "Ideas and captions for every piece", "A 30-day publishing plan"], href: "/en/offers/30-day-content-package", cta: "See the 30-day package" },
      ],
      monthly: { name: "Monthly management", time: "Ongoing", fit: "If you need planning, publishing and follow-up every month.", price: "Priced after reviewing your account", items: ["Strategy and a content calendar", "Design, captions and publishing", "Review of results and direction changes"] },
      note: "Paid advertising and professional photography are priced separately. You receive a written scope before you pay.",
      compare: "", compareHref: "",
    },
    problems: {
      title: "We start from the problem holding your account back",
      items: [
        ["You never know what to post", "Ideas and a content calendar are ready before the month starts."],
        ["Your account goes quiet", "We set a publishing rhythm you can sustain."],
        ["Engagement without enquiries", "Every piece leads to a clear step: follow, message or order."],
      ],
    },
    sectors: {
      title: "Social media management by business type",
      lead: "What a restaurant posts does not suit a clinic. These are examples of what we focus on in each sector.",
      items: [
        ["Restaurant or café", "Product images, offers, location and how to order."],
        ["Online store", "Product benefits, how to use it, shipping and the questions buyers ask first."],
        ["Clinic or salon", "Explaining the service, building trust and easy booking, within the rules of the sector."],
        ["Real estate or contracting", "Projects, stages of work and what clients ask before they get in touch."],
        ["Professional services", "Content that explains your expertise and answers questions before the first message."],
        ["Fashion or jewellery brand", "A consistent look and a story behind every collection."],
      ],
    },
  },
} as const;

export function SocialSamples({ locale }: { locale: Locale }) {
  const t = copy[locale].samples;
  return (
    <section className="content-samples shell" aria-labelledby="content-samples-title">
      <h2 id="content-samples-title">{t.title}</h2>
      <p className="sm-lead">{t.lead}</p>
      <div className="sm-samples" role="region" aria-label={t.title} tabIndex={0}>
        {samples.map(([file, ar, en]) => {
          const sector = locale === "ar" ? ar : en;
          return (
            <figure key={file}>
              <Image src={`/showcase/content/${file}.webp`} width={1122} height={1402} sizes="(max-width: 640px) 62vw, 260px" alt={t.alt(sector)} loading="lazy" />
              <figcaption>{sector}</figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}

export function SocialPaths({ locale, cta }: { locale: Locale; cta: ReactNode }) {
  const t = copy[locale].paths;
  const arrow = locale === "ar" ? "←" : "→";
  return (
    <section className="content-paths shell" id="pricing" aria-labelledby="content-paths-title">
      <span className="section-label">{t.label}</span>
      <h2 id="content-paths-title">{t.title}</h2>
      <div className="sm-paths">
        <article className="sm-path sm-path-main">
          <p className="sm-path-time">{t.monthly.time}</p>
          <h3>{t.monthly.name}</h3>
          <p>{t.monthly.fit}</p>
          <p className="sm-path-price">{t.monthly.price}</p>
          <ul>{t.monthly.items.map((item) => <li key={item}>{item}</li>)}</ul>
          {cta}
        </article>
        {t.cards.map((card) => (
          <article className="sm-path" key={card.key}>
            <p className="sm-path-time">{card.time}</p>
            <h3>{card.name}</h3>
            <p>{card.fit}</p>
            <p className="sm-path-price">{card.from ? <small>{card.from} </small> : null}<SocialPrice locale={locale} offerKey={card.key} /></p>
            <ul>{card.items.map((item) => <li key={item}>{item}</li>)}</ul>
            <Link className="button secondary" href={card.href}>{card.cta} <span aria-hidden="true">{arrow}</span></Link>
          </article>
        ))}
      </div>
      <p className="sm-note">{t.note}{t.compareHref ? <> <Link href={t.compareHref}>{t.compare}</Link></> : null}</p>
    </section>
  );
}

export function SocialProblems({ locale }: { locale: Locale }) {
  const t = copy[locale].problems;
  return (
    <div className="sm-problems">
      <h3>{t.title}</h3>
      <ul>{t.items.map(([head, text]) => <li key={head}><b>{head}</b><span>{text}</span></li>)}</ul>
    </div>
  );
}

export function SocialSectors({ locale }: { locale: Locale }) {
  const t = copy[locale].sectors;
  return (
    <section className="content-sectors shell" aria-labelledby="content-sectors-title">
      <details>
        <summary><h2 id="content-sectors-title">{t.title}</h2></summary>
        <p>{t.lead}</p>
        <div className="sm-sector-grid">{t.items.map(([head, text]) => <article key={head}><h3>{head}</h3><p>{text}</p></article>)}</div>
      </details>
    </section>
  );
}

// Extra questions, appended to each page's FAQ list and so to its FAQPage schema.
export const socialExtraFaqs = {
  ar: [
    ["ما باقات إدارة السوشيال ميديا لديكم؟", "ثلاث بدايات: تطوير حساب قائم خلال 14 يومًا، وباقة محتوى 30 يومًا تنشرها بنفسك، وإدارة شهرية تشمل التخطيط والتصميم والنشر والمتابعة حسب النطاق. سعر الباقتين المحددتين معروض في الصفحة بعملة بلدك، وسعر الإدارة الشهرية يُحدد بعد مراجعة حسابك."],
    ["هل يكفي الذكاء الاصطناعي لإدارة محتوى السوشيال ميديا؟", "يساعد في الأفكار والمسودات، لكنه لا يعرف عرضك وجمهورك وأسئلة عملائك ما لم يحددها أحد. نبدأ بالهدف والرسالة، ثم نراجع كل نص وتصميم قبل النشر حتى لا يبدو حسابك مثل غيره."],
  ],
  en: [
    ["Which social media packages do you offer?", "Three ways to start: an upgrade of an existing account in 14 days, a 30-day content package you publish yourself, and monthly management that covers planning, design, publishing and follow-up depending on the scope. The two defined packages show their price on this page in your currency where an approved price exists. Monthly management is priced after we review your account."],
    ["Is AI enough to manage social media content?", "It helps with ideas and drafts, but it does not know your offer, your audience or your customers' questions unless someone defines them. We start with the goal and the message, then review every caption and design before publishing, so your account does not look like everyone else's."],
  ],
} as const;
