import Link from "next/link";

// Blocks shared by the Arabic and English visual identity offers: the problems the package solves, the BITHAN identity
// file, collapsed business types, and extra FAQs. No price is written as text here.

type Locale = "ar" | "en";

const copy = {
  ar: {
    problems: {
      title: "ثلاث مشاكل نعالجها داخل الباقة",
      items: [
        ["شعار لا يُقرأ في المساحات الصغيرة", "تستلم نسخة مبسطة لصور الحسابات والأيقونات."],
        ["ألوان تتغير من تصميم إلى آخر", "تستلم لوحة ألوان بأكوادها."],
        ["خط عربي لا ينسجم مع الإنجليزي", "نقترح خطوطًا للعناوين والنصوص باللغتين."],
      ],
    },
    sectors: {
      title: "تصميم شعار وهوية حسب نشاطك",
      lead: "نبدأ من طبيعة النشاط، وهذه أمثلة على ما نراعيه في كل قطاع.",
      items: [
        ["متجر إلكتروني", "شعار واضح في أيقونة المتجر وصورة الحساب، وألوان تبقى ثابتة في صور المنتجات."],
        ["مطعم أو كافيه", "هوية تُقرأ على اللافتة والقائمة، وتظهر جيدًا في صور التواصل."],
        ["شركة مقاولات أو خدمات", "شعار رصين يناسب العروض والعقود والمراسلات."],
        ["عيادة أو صالون", "مزاج بصري هادئ يعطي ثقة من أول نظرة."],
        ["شركة ناشئة أو تقنية", "نظام بسيط يعمل على الشاشات ويسهل توسيعه لاحقًا."],
        ["علامة أزياء أو مجوهرات", "تفاصيل راقية يمكن تطبيقها على المواد المطبوعة."],
      ],
      link: "كم تكلفة الهوية الكاملة في السعودية؟",
      href: "/guides/branding-identity-cost-saudi-arabia",
    },
    file: {
      label: "مشروع فعلي",
      title: "BITHAN: من الاسكتش إلى هوية كاملة",
      text: "هوية عربية وإنجليزية لدار مجوهرات راقية في قطر. نطاق BITHAN هوية كاملة أوسع من الباقة الأساسية، ونعرضه لترى أسلوب العمل.",
      head: "ملف هوية من مشروع فعلي",
      rows: [
        ["نسخ الشعار", "معدنية أساسية، ومسطحة للخلفيات الداكنة والفاتحة، وأحادية اللون."],
        ["التطبيقات", "علبة مجوهرات، حقيبة تسوق، بطاقة أعمال، صورة حساب."],
        ["الملفات", "PNG · PDF · SVG · AI · EPS"],
      ],
      colors: "لوحة الألوان المعتمدة",
      link: "اطّلع على دراسة الحالة كاملة",
      href: "/work/bithan",
    },
  },
  en: {
    problems: {
      title: "Three problems the package solves",
      items: [
        ["A logo that cannot be read at small sizes", "You receive a simplified version for profile pictures and icons."],
        ["Colours that change from one design to the next", "You receive a colour palette with its codes."],
        ["Arabic and English type that do not match", "We suggest typefaces for headings and text in both languages."],
      ],
    },
    sectors: {
      title: "Logo and identity design by business type",
      lead: "We start from the nature of the business. These are examples of what we consider in each sector.",
      items: [
        ["Online store", "A logo that is clear as a store icon and profile picture, and colours that stay the same across product images."],
        ["Restaurant or café", "An identity that reads on a sign and a menu, and looks good on social media."],
        ["Contracting or services company", "A restrained logo that suits proposals, contracts and letters."],
        ["Clinic or salon", "A calm visual mood that builds trust at first sight."],
        ["Startup or tech company", "A simple system that works on screens and is easy to extend later."],
        ["Fashion or jewellery brand", "Refined details that can be applied to printed materials."],
      ],
      link: "Full brand strategy and identity",
      href: "/en/branding",
    },
    file: {
      label: "A real project",
      title: "BITHAN: from the sketch to a complete identity",
      text: "An Arabic and English identity for a fine jewellery house in Qatar. BITHAN was a full identity with a broader scope than the essential package. We show it so you can see how we work.",
      head: "An identity file from a real project",
      rows: [
        ["Logo versions", "Primary metallic, flat for dark and light backgrounds, and monochrome."],
        ["Applications", "Jewellery box, shopping bag, business card, profile picture."],
        ["Files", "PNG · PDF · SVG · AI · EPS"],
      ],
      colors: "The approved colour palette",
      link: "Read the full case study",
      href: "/en/work/bithan",
    },
  },
} as const;

// Colours published in the BITHAN case study.
const bithanColors = [
  ["Deep Sapphire", "#234F82"],
  ["Azure Blue", "#3E74AE"],
  ["Ice Mist", "#93BFEA"],
  ["Frost Light", "#C8E4FA"],
  ["Rich Black", "#000000"],
  ["White", "#FFFFFF"],
] as const;

export function IdentityProblems({ locale }: { locale: Locale }) {
  const t = copy[locale].problems;
  return (
    <div className="vi-problems">
      <h3>{t.title}</h3>
      <ul>{t.items.map(([head, text]) => <li key={head}><b>{head}</b><span>{text}</span></li>)}</ul>
    </div>
  );
}

export function IdentityCaseFile({ locale }: { locale: Locale }) {
  const t = copy[locale].file;
  return (
    <section className="shell vi-case" aria-labelledby="vi-case-title">
      <div>
        <span className="section-label">{t.label}</span>
        <h2 id="vi-case-title">{t.title}</h2>
        <p>{t.text}</p>
        <Link className="vi-link" href={t.href}>{t.link} {locale === "ar" ? "←" : "→"}</Link>
      </div>
      <div className="vi-file">
        <p className="vi-file-head">{t.head}</p>
        <dl>
          {t.rows.map(([label, text]) => <div key={label}><dt>{label}</dt><dd>{/^[A-Z ·]+$/.test(text) ? <bdi dir="ltr" lang="en">{text}</bdi> : text}</dd></div>)}
          <div>
            <dt>{t.colors}</dt>
            <dd className="vi-swatches" dir="ltr">{bithanColors.map(([name, hex]) => <span key={hex}><i aria-hidden="true" style={{ background: hex }} /><small lang="en">{name}</small></span>)}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

export function IdentitySectors({ locale }: { locale: Locale }) {
  const t = copy[locale].sectors;
  return (
    <section className="shell vi-sectors" aria-labelledby="vi-sectors-title">
      <details>
        <summary><h2 id="vi-sectors-title">{t.title}</h2></summary>
        <p>{t.lead}</p>
        <div className="vi-sector-grid">
          {t.items.map(([head, text]) => <article key={head}><h3>{head}</h3><p>{text}</p></article>)}
        </div>
        <Link className="vi-link" href={t.href}>{t.link} {locale === "ar" ? "←" : "→"}</Link>
      </details>
    </section>
  );
}

// Extra questions, appended to each page's FAQ list and so to its FAQPage schema.
export const identityExtraFaqs = {
  ar: [
    ["ما الفرق بين تصميم شعار بالذكاء الاصطناعي وهذه الباقة؟", "أداة الذكاء الاصطناعي تعطيك صورة شعار بسرعة، وقد تكفي لفكرة أولية. هنا تستلم شعارًا ونسخة مبسطة وألوانًا بأكوادها وخطوطًا وتوجهًا بصريًا و3 تطبيقات، بعد فهم النشاط والجمهور والمنافسين، مع جولتي تعديل ضمن السعر."],
    ["ماذا لو لم يعجبني الاتجاه الأولي؟", "تشمل الباقة جولتي تعديل مجمعتين بعد عرض الاتجاه الأولي، لضبط الهوية قبل التسليم النهائي."],
  ],
  en: [
    ["How is this different from an AI logo maker?", "An AI tool gives you a logo image quickly, and that may be enough for an early idea. Here you receive a logo and a simplified version, colours with their codes, typefaces, a visual direction and three applications, after we understand the business, the audience and the competitors, with two revision rounds included."],
    ["What if I do not like the initial direction?", "The package includes two grouped rounds of revision after the initial direction is presented, to refine the identity before final delivery."],
  ],
} as const;
