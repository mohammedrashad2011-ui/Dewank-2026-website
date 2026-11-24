import type { ReactNode } from "react";
import Link from "next/link";

// Sections added below the Brand Naming hero, shared by the Arabic and English offer pages. The hero, the package
// price, the CTA labels and the WhatsApp message are not touched. No price is written as text here.

type Locale = "ar" | "en";

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
    reviews: {
      title: "ماذا قال عملاء خدمة التسمية",
      badge: "تقييمات 5 من 5 من عملاء حقيقيين",
      lead: "عملاء من السعودية والولايات المتحدة وأوروبا، بكلماتهم.",
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
    reviews: {
      title: "What naming clients said",
      badge: "5 out of 5 reviews from real clients",
      lead: "Clients in Saudi Arabia, the United States and Europe, in their own words.",
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

export function NamingReviews({ locale, cta }: { locale: Locale; cta: ReactNode }) {
  const t = copy[locale].reviews;
  const ar = locale === "ar";
  return (
    <section className="shell bn3-reviews" aria-labelledby="bn3-reviews-title">
      <div className="bn3-reviews-head">
        <p className="bn3-badge"><span aria-hidden="true">★★★★★</span> {t.badge}</p>
        <h2 id="bn3-reviews-title">{t.title}</h2>
        <p className="bn3-lead">{t.lead}</p>
      </div>
      <div className="bn3-review-grid" role="region" aria-label={t.title} tabIndex={0}>
        {reviews.map((review, index) => (
          <figure key={review.en} className={index === 0 ? "bn3-review bn3-review-featured" : "bn3-review"}>
            <div className="bn3-stars" role="img" aria-label={ar ? "تقييم 5 من 5" : "Rated 5 out of 5"}>★★★★★</div>
            <blockquote>
              <p>{ar ? `«${review.ar}»` : `“${review.en}”`}</p>
            </blockquote>
            {ar ? <p className="bn3-original" lang="en" dir="ltr">“{review.en}”</p> : null}
            <figcaption>
              <span className="bn3-avatar" aria-hidden="true">{review.country[locale].charAt(0)}</span>
              <span><b>{ar ? `عميل من ${review.country.ar}` : `Client in ${review.country.en}`}</b><small>{ar ? "مشروع تسمية" : "Naming project"}</small></span>
            </figcaption>
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
    ["هل أحصل على شعار لفظي (Slogan) مع الاسم؟", "نعم. تشمل الباقة 3 شعارات لفظية قصيرة للاسم الذي تختاره، بالعربية أو الإنجليزية، مع سبب كل شعار."],
    ["هل الأفضل أن أطلب الاسم فقط أم الاسم والهوية؟", "اطلب الاسم فقط إذا كنت ما زلت تحسم اسم المشروع. وإذا كنت تعرف أنك ستحتاج شعارًا وهوية بصرية بعده، فباقة الاسم والهوية معًا أقل سعرًا من طلب كل واحدة منفصلة."],
  ],
  en: [
    ["Do I get a tagline with the name?", "Yes. The package includes 3 short taglines for the name you choose, in Arabic or English, with the reason for each."],
    ["Should I order the name only, or the name and the identity?", "Order the name only if you are still deciding the name of the project. If you know you will need a logo and visual identity after it, the name and identity package costs less than ordering each one separately."],
  ],
} as const;

