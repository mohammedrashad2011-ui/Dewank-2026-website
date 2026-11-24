import Link from "next/link";

// Blocks shared by the Arabic and English small business website offers: the problems the site solves, an illustrative
// page plan, collapsed business types and extra FAQs. No price is written as text here.

type Locale = "ar" | "en";

const copy = {
  ar: {
    plan: {
      label: "نطاق واضح",
      title: "ماذا تضع في 5 صفحات؟",
      lead: "ليس كل مشروع يحتاج موقعًا ضخمًا. هذا نموذج توضيحي لمكتب خدمات، وخطتك تُبنى على نشاطك.",
      tag: "نموذج توضيحي",
      head: "هيكل موقع · مكتب خدمات",
      rows: [
        ["الرئيسية", "من أنت، وماذا تقدم، ولمن، وزر واتساب من أول شاشة."],
        ["الخدمات", "كل خدمة بنطاقها وخطواتها والأسئلة المتكررة."],
        ["من نحن", "الخبرة والفريق وما يطمئن العميل قبل التواصل."],
        ["صفحة إضافية", "أعمالك أو الأسعار أو المناطق التي تخدمها."],
        ["تواصل", "نموذج وواتساب وموقعك وساعات العمل."],
      ],
      path: ["زيارة", "فهم الخدمة", "تواصل"],
    },
    problems: {
      title: "ثلاث مشاكل يعالجها الموقع",
      items: [
        ["أسئلة متكررة على واتساب", "صفحة الخدمات تشرح النطاق والخطوات قبل أن يراسلك العميل."],
        ["لا عنوان رسمي لشركتك", "رابط واحد تضعه في الإعلانات والعروض وحسابات التواصل."],
        ["لا تعرف ما يحدث بعد الزيارة", "تحليلات أساسية تقيس التفاعل مع الموقع."],
      ],
    },
    sectors: {
      title: "تصميم موقع حسب نشاطك",
      lead: "الصفحات نفسها، لكن ما يبحث عنه العميل يختلف. هذه أمثلة على ما نركز عليه.",
      items: [
        ["مكتب استشارات أو محاماة", "التخصصات والخبرة وخطوات طلب الاستشارة."],
        ["شركة مقاولات أو صيانة", "الخدمات ومناطق العمل والمشاريع وطلب عرض سعر."],
        ["عيادة أو مركز تجميل", "الخدمات والفريق والموقع وطريقة التواصل للحجز."],
        ["مطعم أو كافيه", "القائمة والفروع وساعات العمل وروابط الطلب."],
        ["شركة ناشئة", "المنتج والفكرة ونموذج التسجيل أو التواصل."],
        ["مدرب أو مستشار مستقل", "البرامج والخبرة وطريقة حجز أول مكالمة."],
      ],
      link: "قارن أسعار تصميم المواقع في السعودية",
      href: "/guides/website-design-cost-saudi-arabia",
    },
  },
  en: {
    plan: {
      label: "A clear scope",
      title: "What goes in five pages?",
      lead: "Not every project needs a large website. This is an illustrative plan for a services office, and yours is built on your business.",
      tag: "Illustrative example",
      head: "Site structure · services office",
      rows: [
        ["Home", "Who you are, what you offer and for whom, with WhatsApp in the first screen."],
        ["Services", "Each service with its scope, steps and common questions."],
        ["About", "Experience, team and what reassures a client before contact."],
        ["One extra page", "Your work, prices or the areas you serve."],
        ["Contact", "A form, WhatsApp, your location and working hours."],
      ],
      path: ["Visit", "Understand the service", "Contact"],
    },
    problems: {
      title: "Three problems the website solves",
      items: [
        ["The same questions on WhatsApp", "The services page explains scope and steps before clients write to you."],
        ["No official address", "One link for your ads, proposals and social accounts."],
        ["No view of what happens after a visit", "Basic analytics measure engagement with the site."],
      ],
    },
    sectors: {
      title: "Website design by business type",
      lead: "The pages are similar, but what clients look for differs. These are examples of what we focus on.",
      items: [
        ["Consulting or law office", "Specialities, experience and how to request a consultation."],
        ["Contracting or maintenance company", "Services, areas served, projects and quote requests."],
        ["Clinic or beauty centre", "Services, team, location and how to get in touch to book."],
        ["Restaurant or café", "Menu, branches, opening hours and ordering links."],
        ["Startup", "The product, the idea and a sign-up or contact form."],
        ["Coach or independent consultant", "Programmes, experience and how to book the first call."],
      ],
      link: "Website design and development service",
      href: "/en/website-design",
    },
  },
} as const;

export function WebsitePlan({ locale }: { locale: Locale }) {
  const t = copy[locale].plan;
  return (
    <section className="shell sw-plan" aria-labelledby="sw-plan-title">
      <div>
        <span className="section-label">{t.label}</span>
        <h2 id="sw-plan-title">{t.title}</h2>
        <p>{t.lead}</p>
      </div>
      <div className="sw-plan-card">
        <p className="sw-plan-head"><b>{t.head}</b><small>{t.tag}</small></p>
        <dl>{t.rows.map(([page, text]) => <div key={page}><dt>{page}</dt><dd>{text}</dd></div>)}</dl>
        <p className="sw-plan-path">{t.path.map((step, index) => <span key={step}>{index > 0 ? <i aria-hidden="true">{locale === "ar" ? "←" : "→"}</i> : null}{step}</span>)}</p>
      </div>
    </section>
  );
}

export function WebsiteProblems({ locale }: { locale: Locale }) {
  const t = copy[locale].problems;
  return (
    <section className="shell sw-problems-wrap" aria-labelledby="sw-problems-title">
      <div className="sw-problems">
        <h2 id="sw-problems-title">{t.title}</h2>
        <ul>{t.items.map(([head, text]) => <li key={head}><b>{head}</b><span>{text}</span></li>)}</ul>
      </div>
    </section>
  );
}

export function WebsiteSectors({ locale }: { locale: Locale }) {
  const t = copy[locale].sectors;
  return (
    <section className="shell sw-sectors" aria-labelledby="sw-sectors-title">
      <details>
        <summary><h2 id="sw-sectors-title">{t.title}</h2></summary>
        <p>{t.lead}</p>
        <div className="sw-sector-grid">{t.items.map(([head, text]) => <article key={head}><h3>{head}</h3><p>{text}</p></article>)}</div>
        <Link className="sw-link" href={t.href}>{t.link} {locale === "ar" ? "←" : "→"}</Link>
      </details>
    </section>
  );
}

// Extra questions, appended to each page's FAQ list and so to its FAQPage schema.
export const websiteExtraFaqs = {
  ar: [
    ["ما الفرق بين الباقة ومنصات بناء المواقع الجاهزة؟", "المنصة تعطيك قالبًا وتترك لك الترتيب والنصوص والربط والاختبار. هنا نحدد الصفحات ونرتب الرسائل ونصمم ونطوّر ونربط واتساب والنموذج والتحليلات، ونختبر الموقع قبل الإطلاق. إذا كان لديك الوقت وتحتاج صفحة بسيطة جدًا، فقد تكفيك المنصة."],
    ["ما الذي أحتاج إرساله للبدء؟", "الشعار والألوان إن وجدت، وصف الخدمات، بيانات التواصل، والصور المتاحة، وبيانات الدومين والاستضافة إن كانت لديك. نرتب معك الناقص قبل التصميم، ومدة التنفيذ تبدأ بعد استلام المواد."],
  ],
  en: [
    ["How is this different from a website builder?", "A builder gives you a template and leaves the structure, wording, connections and testing to you. Here we define the pages, arrange the messages, design, build, connect WhatsApp, the form and analytics, and test the site before launch. If you have the time and need a very simple page, a builder may be enough."],
    ["What do I need to send to start?", "Your logo and colours if you have them, a description of your services, contact details, the photos you have, and your domain and hosting details if you have them. We arrange what is missing with you before design, and the timeline starts once we receive the materials."],
  ],
} as const;
