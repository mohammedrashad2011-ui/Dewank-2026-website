import type { ReactNode } from "react";
import Link from "next/link";
import { InlineOfferPrice } from "../inline-offer-price";
import { OfferPrice } from "../../../(en)/en/_en/lib/localized-price";
import type { OfferPriceKey } from "../offer-pricing";

// Sections added below the Brand Naming hero, shared by the Arabic and English offer pages. The hero, the package
// price, the CTA labels and the WhatsApp message are not touched. Every add-on price comes from the localization engine
// (offer-pricing.ts); nothing here writes a price as text.

type Locale = "ar" | "en";

export const addonKeys = {
  tagline: "brand-naming-addon-tagline",
  competitors: "brand-naming-addon-competitors",
  extraNames: "brand-naming-addon-extra-names",
  rush: "brand-naming-addon-rush",
} as const satisfies Record<string, OfferPriceKey>;

const copy = {
  ar: {
    risk: {
      title: "قبل أن تطبع اسمك على لافتة أو فاتورة",
      lead: "الاسم الذي يُختار على عجل يظهر ثمنه لاحقًا. هذه ثلاث مشاكل نراها كثيرًا، ونفحصها قبل أن ترشّح لك أي اسم.",
      items: [
        ["اسم قريب من منافس", "يخلط العميل بينك وبينه، وقد تضطر إلى تغيير الاسم بعد الطباعة والإعلان."],
        ["دومين أو حساب مشغول", "تكتشف ذلك بعد أن تحجز الشعار والمطبوعات، فتبدأ من جديد."],
        ["اسم يُكتب بأكثر من طريقة", "يبحث عنك العميل فلا يجدك لأنه كتب الاسم بشكل مختلف عن شكلك الرسمي."],
      ],
      close: "فحص الاسم قبل استخدامه أسهل من تغييره بعد أن يعرفك الناس به.",
    },
    addons: {
      title: "تحتاج أكثر من الباقة الأساسية؟",
      lead: "الباقة كاملة بذاتها. هذه إضافات اختيارية تُطلب في نفس رسالة الواتساب، ولا تغيّر ما تستلمه في الباقة الأساسية.",
      items: [
        ["tagline", "شعار لفظي (Tagline)", "3 شعارات لفظية قصيرة للاسم الذي تختاره، بالعربية أو الإنجليزية، مع سبب كل شعار."],
        ["competitors", "بحث المنافسين", "مراجعة أقرب 5 منافسين في سوقك: أسماؤهم ونبرتهم، لنتجنب التشابه ونحدد ما يميزك."],
        ["extraNames", "10 أسماء إضافية", "اتجاهات تسمية جديدة تُضاف إلى القائمة إذا أردت خيارات أوسع قبل أن تحسم."],
        ["rush", "تسليم أسرع خلال 48 ساعة", "تسليم خلال 48 ساعة من استلام معلومات المشروع كاملة، حسب توفر الجدول، ونؤكده لك قبل أن نبدأ."],
      ] as const,
      note: "اذكر الإضافات التي تريدها في رسالتك وسنؤكد لك الإجمالي قبل البدء.",
      bundle: "تحتاج الشعار والهوية بعد الاسم؟ الاسم والهوية معًا بسعر أقل",
    },
    reviews: {
      title: "ماذا قال عملاء خدمة التسمية",
      lead: "تقييمات 5 من 5 من عملاء في السعودية والولايات المتحدة وأوروبا. الأصل بالإنجليزية وتحته ترجمة.",
      label: "ترجمة",
    },
    sectors: {
      title: "أسماء تناسب نشاطك",
      lead: "نبني الاسم حسب نشاطك وسوقك، وهذه أمثلة على ما نراعيه في كل نشاط.",
      items: [
        ["اسم مطعم أو كافيه", "اسم سهل التذكر يصلح للافتة وحسابات التواصل ويُنطق بسهولة."],
        ["اسم متجر إلكتروني", "اسم قصير يُكتب بالعربية والإنجليزية ويتوفر له دومين مناسب."],
        ["اسم شركة مقاولات أو خدمات", "اسم يعطي ثقة ويصلح للتسجيل والمراسلات الرسمية."],
        ["اسم عيادة أو صالون", "اسم هادئ ومريح، بعيد عن التشابه مع الأسماء الشائعة في مدينتك."],
        ["اسم شركة ناشئة أو تقنية", "اسم قابل للتوسع في أكثر من سوق ولغة دون أن يفقد معناه."],
        ["اسم علامة أزياء أو مجوهرات", "اسم يحمل طابعًا راقيًا ويصلح للتغليف والمنتج."],
      ] as const,
      guide: "اقرأ دليل اختيار الاسم التجاري",
      guideHref: "/guides/how-to-choose-brand-name-saudi-arabia",
      bundleHref: "/offers/name-identity",
    },
  },
  en: {
    risk: {
      title: "Before you print your name on a sign or an invoice",
      lead: "A name chosen in a hurry shows its cost later. These are three problems we see often, and we check for them before we recommend any name.",
      items: [
        ["A name close to a competitor", "Customers confuse you with them, and you may have to change the name after printing and advertising."],
        ["A taken domain or handle", "You find out after you have booked the logo and the print, and you start again."],
        ["A name spelled several ways", "A customer searches for you and does not find you because they spelled it differently from your official form."],
      ],
      close: "Checking a name before you use it is easier than changing it after people know you by it.",
    },
    addons: {
      title: "Need more than the core package?",
      lead: "The package is complete on its own. These optional add-ons are requested in the same WhatsApp message, and they do not change what the core package delivers.",
      items: [
        ["tagline", "A tagline", "3 short taglines for the name you choose, in Arabic or English, with the reason for each."],
        ["competitors", "Competitor research", "A review of your closest 5 competitors: their names and tone, so we avoid similarity and define what sets you apart."],
        ["extraNames", "10 extra names", "New naming directions added to the list if you want wider options before you decide."],
        ["rush", "Faster delivery in 48 hours", "Delivery within 48 hours of receiving the complete project information, subject to availability, confirmed before we start."],
      ] as const,
      note: "Mention the add-ons you want in your message and we will confirm the total before we start.",
      bundle: "Need the logo and identity after the name? The name and identity together, for less",
    },
    reviews: {
      title: "What naming clients said",
      lead: "5 out of 5 reviews from clients in Saudi Arabia, the United States and Europe.",
      label: "",
    },
    sectors: {
      title: "Names for your type of business",
      lead: "We build the name around your business and your market. These are examples of what we consider for each type.",
      items: [
        ["A restaurant or café name", "Easy to remember, works on a sign and on social handles, and is easy to say."],
        ["An online store name", "Short, easy to write in Arabic and English, with a suitable domain available."],
        ["A contracting or services company name", "A name that builds trust and works for registration and official letters."],
        ["A clinic or salon name", "Calm and comfortable, and unlike the common names in your city."],
        ["A startup or tech company name", "A name that can scale across markets and languages without losing its meaning."],
        ["A fashion or jewellery brand name", "A refined name that works on packaging and on the product."],
      ] as const,
      guide: "Read the guide to choosing a business name",
      guideHref: "/guides/how-to-choose-brand-name-saudi-arabia",
      bundleHref: "/en/offers/name-identity",
    },
  },
} as const;

// Real reviews of the naming service, left by clients on the freelance marketplace where the service was first sold.
// Quotes are exact (or exact excerpts marked with an ellipsis). The founder's personal name is removed, so an excerpt
// starts after it, and the credit gives the client's country and the type of project, never a username.
const reviews = [
  {
    country: { ar: "السعودية", en: "Saudi Arabia" },
    en: "…Their top-notch service, coupled with a catchy name that's perfectly aligned with SEO, made my order a breeze. I'm definitely planning to order again.",
    ar: "…خدمتهم ممتازة، مع اسم جذاب ومتوافق تمامًا مع السيو، وجعل طلبي سهلًا. أنوي بالتأكيد الطلب مرة أخرى.",
  },
  {
    country: { ar: "الولايات المتحدة", en: "United States" },
    en: "…did an AMAZING job crafting business names and slogans for us! Their attention to detail and adaptability to our brief were superb. Couple that with proactive communication, and they truly EXCEEDED our expectations.",
    ar: "…قدّموا عملًا رائعًا في صياغة أسماء تجارية وشعارات لنا. اهتمامهم بالتفاصيل ومرونتهم مع موجزنا كانا ممتازين، ومع تواصلهم الاستباقي تجاوزوا توقعاتنا فعلًا.",
  },
  {
    country: { ar: "قبرص", en: "Cyprus" },
    en: "Excellent work from start to finish. The naming process was thoughtful, professional, and well-structured. Great communication, creative ideas, and a final result I'm genuinely happy with.",
    ar: "عمل ممتاز من البداية إلى النهاية. كانت عملية التسمية مدروسة ومحترفة ومنظمة. تواصل رائع وأفكار إبداعية ونتيجة نهائية سعيد بها فعلًا.",
  },
  {
    country: { ar: "السعودية", en: "Saudi Arabia" },
    en: "Great job, professional, fast delivery, good communication.",
    ar: "عمل رائع واحترافي وتسليم سريع وتواصل جيد.",
  },
  {
    country: { ar: "فرنسا", en: "France" },
    en: "Great service! … excellent names with slogans and descriptions that align perfectly with .com domains, all within less than 2 hours. I truly appreciate your professionalism.",
    ar: "خدمة رائعة! … أسماء ممتازة مع شعارات وأوصاف تتوافق تمامًا مع دومينات .com، كل ذلك في أقل من ساعتين. أقدّر احترافيتكم فعلًا.",
  },
  {
    country: { ar: "الولايات المتحدة", en: "United States" },
    en: "They did an excellent job researching and creating names. everything we were looking for! definitely using them again!",
    ar: "قدّموا عملًا ممتازًا في البحث وابتكار الأسماء. كل ما كنا نبحث عنه! سنتعامل معهم مرة أخرى بالتأكيد.",
  },
] as const;

export function NamingRisk({ locale }: { locale: Locale }) {
  const t = copy[locale].risk;
  return (
    <section className="shell bn3-risk" aria-labelledby="bn3-risk-title">
      <h2 id="bn3-risk-title">{t.title}</h2>
      <p className="bn3-lead">{t.lead}</p>
      <div className="bn3-risk-grid">
        {t.items.map(([head, text]) => <article key={head}><h3>{head}</h3><p>{text}</p></article>)}
      </div>
      <p className="bn3-risk-close">{t.close}</p>
    </section>
  );
}

export function NamingAddons({ locale, cta }: { locale: Locale; cta: ReactNode }) {
  const t = copy[locale].addons;
  const bundleHref = copy[locale].sectors.bundleHref;
  return (
    <section className="shell bn3-addons" aria-labelledby="bn3-addons-title">
      <h2 id="bn3-addons-title">{t.title}</h2>
      <p className="bn3-lead">{t.lead}</p>
      <ul className="bn3-addon-list">
        {t.items.map(([key, head, text]) => (
          <li key={key}>
            <div className="bn3-addon-copy"><b>{head}</b><p>{text}</p></div>
            <span className="bn3-addon-price">
              <span aria-hidden="true">+</span>{" "}
              {locale === "ar" ? <InlineOfferPrice offerKey={addonKeys[key]} /> : <OfferPrice offerKey={addonKeys[key]} className="bn3-en-price" />}
            </span>
          </li>
        ))}
      </ul>
      <p className="bn3-note">{t.note}</p>
      <div className="bn3-cta">{cta}</div>
      <Link className="bn3-link" href={bundleHref}>{t.bundle} {locale === "ar" ? "←" : "→"}</Link>
    </section>
  );
}

export function NamingReviews({ locale, cta }: { locale: Locale; cta: ReactNode }) {
  const t = copy[locale].reviews;
  return (
    <section className="shell bn3-reviews" aria-labelledby="bn3-reviews-title">
      <h2 id="bn3-reviews-title">{t.title}</h2>
      <p className="bn3-lead">{t.lead}</p>
      <div className="bn3-review-grid">
        {reviews.map((review) => (
          <figure key={review.en} className="bn3-review">
            <div className="bn3-stars" role="img" aria-label={locale === "ar" ? "تقييم 5 من 5" : "Rated 5 out of 5"}>★★★★★</div>
            {locale === "ar" ? (
              <>
                <blockquote><p>«{review.ar}»</p></blockquote>
                <p className="bn3-original" lang="en" dir="ltr"><span>{t.label}</span> “{review.en}”</p>
              </>
            ) : (
              <blockquote><p>“{review.en}”</p></blockquote>
            )}
            <figcaption>{locale === "ar" ? `عميل من ${review.country.ar} · مشروع تسمية` : `Client in ${review.country.en} · Naming project`}</figcaption>
          </figure>
        ))}
      </div>
      <div className="bn3-cta">{cta}</div>
    </section>
  );
}

export function NamingSectors({ locale }: { locale: Locale }) {
  const t = copy[locale].sectors;
  return (
    <section className="shell bn3-sectors" aria-labelledby="bn3-sectors-title">
      <h2 id="bn3-sectors-title">{t.title}</h2>
      <p className="bn3-lead">{t.lead}</p>
      <div className="bn3-sector-grid">
        {t.items.map(([head, text]) => <article key={head}><h3>{head}</h3><p>{text}</p></article>)}
      </div>
      <Link className="bn3-link" href={t.guideHref}>{t.guide} {locale === "ar" ? "←" : "→"}</Link>
    </section>
  );
}

// Extra questions, appended to the existing FAQ list on each page (and so to its FAQPage schema).
export const extraFaqs = {
  ar: [
    ["ما الإضافات التي يمكن طلبها مع الباقة؟", "يمكن إضافة 3 شعارات لفظية، أو بحث المنافسين لأقرب 5 منافسين، أو 10 أسماء إضافية، أو تسليم أسرع خلال 48 ساعة. الإضافات اختيارية، وأسعارها معروضة في قسم الإضافات بعملة بلدك، وتطلبها في نفس رسالة الواتساب."],
    ["هل أحصل على شعار لفظي (Slogan) مع الاسم؟", "الباقة الأساسية لا تشمل شعارًا لفظيًا، لكنه متاح كإضافة اختيارية: 3 شعارات قصيرة للاسم الذي تختاره مع سبب كل شعار."],
    ["هل الأفضل أن أطلب الاسم فقط أم الاسم والهوية؟", "اطلب الاسم فقط إذا كنت ما زلت تحسم اسم المشروع. وإذا كنت تعرف أنك ستحتاج شعارًا وهوية بصرية بعده، فباقة الاسم والهوية معًا أقل سعرًا من طلب كل واحدة منفصلة."],
  ],
  en: [
    ["Which add-ons can I order with the package?", "You can add 3 taglines, competitor research on your closest 5 competitors, 10 extra names, or faster delivery in 48 hours. The add-ons are optional, their prices are shown in the add-ons section in your local currency, and you request them in the same WhatsApp message."],
    ["Do I get a tagline with the name?", "The core package does not include a tagline, but it is available as an optional add-on: 3 short taglines for the name you choose, with the reason for each."],
    ["Should I order the name only, or the name and the identity?", "Order the name only if you are still deciding the name of the project. If you know you will need a logo and visual identity after it, the name and identity package costs less than ordering each one separately."],
  ],
} as const;

// Schema: the add-ons as an offer catalog, at the base SAR price from the pricing configuration.
export function addonCatalogSchema(locale: Locale, basePrices: Record<keyof typeof addonKeys, number>) {
  return {
    "@type": "OfferCatalog",
    name: locale === "ar" ? "إضافات اختيارية لباقة التسمية" : "Optional add-ons for the naming package",
    itemListElement: copy[locale].addons.items.map(([key, head, text]) => ({
      "@type": "Offer",
      price: String(basePrices[key]),
      priceCurrency: "SAR",
      itemOffered: { "@type": "Service", name: head, description: text },
    })),
  };
}
