import Link from "next/link";

// Blocks shared by the Arabic and English 30-day content offers: an illustrative publishing plan, collapsed business
// types and extra FAQs. No price is written as text here.

type Locale = "ar" | "en";

const copy = {
  ar: {
    plan: {
      title: "هكذا تبدو خطة النشر التي تستلمها",
      lead: "نموذج توضيحي لأول أسبوع لمقهى مختص. خطتك تُبنى على نشاطك وعروضك وجمهورك.",
      tag: "نموذج توضيحي",
      head: "الأسبوع الأول · مقهى مختص",
      rows: [
        ["الأحد", "بوست", "مشروب الموسم: ما الذي يميزه ولماذا يجربه العميل", "دعوة: زر الفرع"],
        ["الثلاثاء", "ستوري", "تصويت: قهوة باردة أم ساخنة؟", "دعوة: صوّت"],
        ["الأربعاء", "بوست", "كيف تختار الحبوب المناسبة لذوقك", "دعوة: احفظ المنشور"],
        ["الجمعة", "بوست", "عرض نهاية الأسبوع بشروط واضحة", "دعوة: اطلب عبر الرابط"],
      ],
      foot: "كل قطعة تصل ومعها الفكرة والكابشن ودعوة الإجراء.",
    },
    sectors: {
      title: "ماذا ننشر لنشاطك؟",
      lead: "أمثلة على زوايا محتوى نبدأ منها في كل قطاع.",
      items: [
        ["مطعم أو كافيه", "المنتج، العروض، طريقة الطلب، وأسئلة الزبائن المتكررة."],
        ["متجر إلكتروني", "فوائد المنتج، طريقة الاستخدام، الشحن والاستبدال، وما يسأل عنه المشتري قبل الدفع."],
        ["عيادة أو صالون", "شرح الخدمة، الاستعداد للموعد، وبناء الثقة مع الالتزام بضوابط القطاع."],
        ["عقار أو مقاولات", "المشاريع، مراحل العمل، وما يحتاج العميل معرفته قبل التواصل."],
        ["خدمات مهنية", "محتوى يشرح خبرتك ويجيب عن أسئلة العميل."],
        ["علامة أزياء أو مجوهرات", "قصة المجموعة، التفاصيل، وطريقة التنسيق."],
      ],
      link: "إدارة السوشيال ميديا الشهرية",
      href: "/services/social-media-content",
    },
  },
  en: {
    plan: {
      title: "What your publishing plan looks like",
      lead: "An illustrative first week for a specialty café. Your plan is built on your business, your offers and your audience.",
      tag: "Illustrative example",
      head: "Week one · specialty café",
      rows: [
        ["Sunday", "Post", "The seasonal drink: what makes it different and why to try it", "Action: visit the branch"],
        ["Tuesday", "Story", "Poll: iced or hot coffee?", "Action: vote"],
        ["Wednesday", "Post", "How to choose beans that suit your taste", "Action: save the post"],
        ["Friday", "Post", "A weekend offer with clear terms", "Action: order through the link"],
      ],
      foot: "Every piece comes with its idea, caption and call to action.",
    },
    sectors: {
      title: "What would we post for your business?",
      lead: "Examples of content angles we start from in each sector.",
      items: [
        ["Restaurant or café", "The product, offers, how to order and customers' common questions."],
        ["Online store", "Product benefits, how to use it, shipping and returns, and what buyers ask before paying."],
        ["Clinic or salon", "Explaining the service, preparing for the appointment and building trust, within the rules of the sector."],
        ["Real estate or contracting", "Projects, stages of work and what clients need to know before they get in touch."],
        ["Professional services", "Content that explains your expertise and answers clients' questions."],
        ["Fashion or jewellery brand", "The story of the collection, the details and how to style it."],
      ],
      link: "Monthly social media management",
      href: "/en/social-media-content",
    },
  },
} as const;

export function ContentSamplePlan({ locale }: { locale: Locale }) {
  const t = copy[locale].plan;
  return (
    <section className="shell cp-plan" aria-labelledby="cp-plan-title">
      <div>
        <h2 id="cp-plan-title">{t.title}</h2>
        <p>{t.lead}</p>
      </div>
      <div className="cp-plan-card">
        <p className="cp-plan-head"><b>{t.head}</b><small>{t.tag}</small></p>
        <ol>
          {t.rows.map(([day, type, idea, action]) => (
            <li key={day}><span className="cp-plan-day">{day}<small>{type}</small></span><span className="cp-plan-idea"><b>{idea}</b><small>{action}</small></span></li>
          ))}
        </ol>
        <p className="cp-plan-foot">{t.foot}</p>
      </div>
    </section>
  );
}

export function ContentSectors({ locale }: { locale: Locale }) {
  const t = copy[locale].sectors;
  return (
    <section className="shell cp-sectors" aria-labelledby="cp-sectors-title">
      <details>
        <summary><h2 id="cp-sectors-title">{t.title}</h2></summary>
        <p>{t.lead}</p>
        <div className="cp-sector-grid">{t.items.map(([head, text]) => <article key={head}><h3>{head}</h3><p>{text}</p></article>)}</div>
        <Link className="cp-link" href={t.href}>{t.link} {locale === "ar" ? "←" : "→"}</Link>
      </details>
    </section>
  );
}

// Extra questions, appended to each page's FAQ list and so to its FAQPage schema.
export const contentExtraFaqs = {
  ar: [
    ["ما الذي أحتاج إرساله للبدء؟", "نوع نشاطك، عروضك الحالية، رابط حسابك إن وجد، والشعار والصور أو الفيديوهات المتاحة. الريل يُمنتج من المواد التي ترسلها، والتصوير الاحترافي غير مشمول."],
    ["ما الفرق بين الباقة وتصميم المنشورات بالذكاء الاصطناعي؟", "الأداة تعطيك صورة أو نصًا بسرعة. هنا تستلم شهرًا مترابطًا: أفكارًا مبنية على نشاطك، وتصاميم متناسقة، وكابشن ودعوة إجراء لكل قطعة، وخطة نشر، مع جولتي تعديل على التصميمات."],
  ],
  en: [
    ["What do I need to send to start?", "Your business type, current offers, account link if you have one, and the logo, photos or videos you have. The reel is edited from the material you send, and professional photography is not included."],
    ["How is this different from designing posts with AI?", "A tool gives you an image or a text quickly. Here you receive a connected month: ideas built on your business, consistent designs, a caption and a call to action for every piece, and a publishing plan, with two rounds of design revisions."],
  ],
} as const;
