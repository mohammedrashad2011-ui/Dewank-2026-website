import Link from "next/link";
import { HubPrice } from "../offers-hub-price";
import "./company-profile.css";

type Locale = "ar" | "en";

const copy = {
  ar: {
    eyebrow: "ديوانك | Company Profile Design",
    kicker: "بروفايل لشركتك، مش مجرد صفحات متجمعة",
    title: "تصميم بروفايل شركة",
    accent: "يحكي قيمتك من أول نظرة",
    lead: "قبل الاجتماع أو عرض السعر، قدّم شركتك في ملف واضح، مصاغ باحتراف ومصمم بهويتك. من قصتك وخدماتك إلى أعمالك ووسائل التواصل.",
    priceLabel: "سعر إطلاق الباقة · مرة واحدة",
    priceNote: "حتى 12 صفحة · لغة واحدة · 5–7 أيام عمل",
    order: "اطلب ملف شركتك",
    details: "شاهد ما تتسلمه",
    sample: "تصور بصري توضيحي، وليس عملًا منفذًا لعميل",
    sampleCover: "ملف شركتك",
    sampleSub: "Company Profile",
    sampleSection: "من نحن",
    sampleLabel: "هوية واضحة · قصة موجزة · عرض متماسك",
    support: ["صياغة المحتوى", "تصميم مخصص", "نسخة رقمية ونسخة للطباعة"],
    whoTitle: "ليس مجرد تصميم جميل",
    whoAccent: "ملف يساعد العميل يفهمك",
    whoText: "البروفايل الجيد يشرح نشاطك وقيمتك وما يميزك من غير صفحات حشو. نختار الترتيب والمحتوى والأسلوب البصري بناءً على هدف الملف.",
    scenarios: [
      ["لقاءات العملاء", "قدّم صورة منظمة عن خدماتك وخبراتك قبل الاجتماع."],
      ["الشراكات والموردون", "عرّف الأطراف الجديدة بنطاق عملك وقدراتك بوضوح."],
      ["المبيعات والعروض", "أرفق ملفًا موجزًا يساند عرض السعر أو المقترح."],
    ],
    deliverTitle: "إيه اللي داخل الباقة؟",
    deliverLead: "نطاق محدد من البداية، من غير وعود مفتوحة أو تكاليف مفاجئة.",
    deliver: [
      ["حتى 12 صفحة", "تشمل الغلاف والصفحات الداخلية وصفحة التواصل؛ يحدد الترتيب حسب طبيعة نشاطك."],
      ["صياغة وتحرير المحتوى", "نرتب المعلومات التي تزوّدنا بها ونصيغها بلغة مهنية واضحة، مع مراجعتك للحقائق."],
      ["تصميم بهوية شركتك", "ألوان وخطوط وصور وتخطيط مناسب لأسلوب العلامة، بدون قالب مكرر."],
      ["جولتا تعديل", "مراجعتان مجمعتان للنص والتصميم ضمن النطاق المتفق عليه."],
      ["ملفان PDF", "نسخة خفيفة للمشاركة ونسخة عالية الجودة للطباعة."],
    ],
    notIncluded: "غير مشمول: التصوير، الطباعة الورقية، ابتكار شعار جديد، الترجمة أو اللغة الثانية، الصفحات الإضافية، وتسليم ملفات المصدر القابلة للتعديل. يمكن تسعيرها منفصلة.",
    processTitle: "من أول رسالة إلى ملف جاهز للإرسال",
    steps: [
      ["نفهم نشاطك", "ترسل الشعار ومعلومات الشركة وخدماتها وأعمالها والهدف من البروفايل."],
      ["نصوغ ونرتب", "نجهز تسلسل الصفحات والمحتوى، ونطلب تأكيد أي رقم أو ادعاء قبل نشره."],
      ["نصمم ونراجع", "نطور التصميم ثم ننفذ جولتي المراجعة المتفقتين."],
      ["نسلم الملف", "تستلم نسختي PDF وتقدر تبعتهما مباشرة إلى عملائك."],
    ],
    faqs: [
      ["هل لازم يكون عندي محتوى جاهز؟", "مش لازم يكون مكتوبًا بصورة نهائية. يكفي تزويدنا بمعلومات صحيحة عن نشاطك، ونقوم بصياغتها وتنظيمها. لا نخترع أرقامًا أو شهادات أو عملاء."],
      ["هل السعر يشمل العربي والإنجليزي؟", "الباقة تشمل لغة واحدة فقط. اللغة الثانية تُسعَّر بشكل منفصل حسب حجم المحتوى."],
      ["هل أستلم ملف قابل للتعديل؟", "الباقة تشمل نسختي PDF فقط. ملفات المصدر القابلة للتعديل يمكن طلبها كإضافة منفصلة."],
      ["متى يبدأ وقت التنفيذ؟", "بعد استلام معلومات الشركة وشعارها ومحتوى الأعمال المطلوب والموافقة على النطاق."],
      ["هل الصور المعروضة هي ملفات عملاء حقيقية؟", "المعاينة هنا توضح أسلوب التصميم فقط، وليست حالة عميل موثقة. نخصص كل بروفايل حسب هوية الشركة ومحتواها."],
    ],
    faqTitle: "أسئلة قبل ما تبدأ",
    finalTitle: "شركتك عندها قصة. خلّي عرضها يليق بيها.",
    finalText: "ابعت لنا اسم الشركة، مجال عملها، والشعار إن وجد. هنراجع احتياجك ونأكد السعر والنطاق قبل أي دفع.",
    back: "كل عروض ديوانك",
    waMessage: "مرحبًا ديوانك، أرغب في طلب باقة تصميم بروفايل شركة (حتى 12 صفحة، لغة واحدة). اسم الشركة: . النشاط: .",
  },
  en: {
    eyebrow: "Dewank | Company Profile Design",
    kicker: "A company profile, not a stack of slides",
    title: "Company profile design",
    accent: "That tells your story at a glance",
    lead: "Before the meeting or proposal, present your business in a clear, professionally written and branded document, from your story and services to your work and contact details.",
    priceLabel: "Launch package · one-time",
    priceNote: "Up to 12 pages · one language · 5–7 working days",
    order: "Request your profile",
    details: "See what's included",
    sample: "Illustrative visual concept, not a client project",
    sampleCover: "Your company",
    sampleSub: "Company Profile",
    sampleSection: "About us",
    sampleLabel: "Clear identity · Concise story · Cohesive presentation",
    support: ["Copywriting", "Custom design", "Digital and print-ready PDFs"],
    whoTitle: "More than attractive pages",
    whoAccent: "A profile that helps buyers understand you",
    whoText: "A useful profile explains what you do, what makes you different and why it matters. We structure the copy and design around the document's actual purpose.",
    scenarios: [
      ["Client meetings", "Give prospects a clear introduction to your capabilities."],
      ["Partnerships", "Help new partners and vendors understand your business."],
      ["Sales proposals", "Send a concise company overview alongside your quotation."],
    ],
    deliverTitle: "What's included?",
    deliverLead: "A clear scope from the start, with no unlimited revisions or vague extras.",
    deliver: [
      ["Up to 12 pages", "Including cover, inside pages and contact page. Structure depends on your business."],
      ["Writing and editing", "We organize and rewrite information you provide, with factual claims checked by you."],
      ["Brand-aligned design", "Visuals, typography, imagery and layout tailored to your company, not a generic template."],
      ["Two revision rounds", "Two consolidated rounds covering copy and design within the agreed scope."],
      ["Two PDF exports", "A lightweight sharing file and a high-resolution file for printing."],
    ],
    notIncluded: "Not included: photography, physical printing, a new logo, translation or a second language, extra pages, or editable source files. These can be quoted separately.",
    processTitle: "From brief to ready-to-send file",
    steps: [
      ["Understand your company", "Send your logo, services, company facts, work examples and intended use."],
      ["Write and structure", "We draft the story and page sequence, and ask you to confirm all claims and figures."],
      ["Design and refine", "We build the design and complete the two included revision rounds."],
      ["Deliver", "You receive both PDF files ready to share with prospects."],
    ],
    faqs: [
      ["Do I need ready-written copy?", "No. Share accurate business information and we will write and structure it. We do not invent clients, figures or credentials."],
      ["Does the price include Arabic and English?", "The package includes one language. A second-language edition is quoted separately."],
      ["Are editable files included?", "The package includes two PDFs. Editable source files are available as an additional service."],
      ["When does the timeline start?", "After we receive the required business information and logo, and the scope is agreed."],
      ["Are the visuals actual client work?", "The preview is an illustrative design concept, not a documented client case study. Every profile is tailored to the company's identity and materials."],
    ],
    faqTitle: "Questions before you start",
    finalTitle: "Your company has a story. Present it properly.",
    finalText: "Send your company name, industry and logo if available. We'll confirm scope and price before payment.",
    back: "All Dewank offers",
    waMessage: "Hello Dewank, I would like the Company Profile Design package (up to 12 pages, one language). Company: . Industry: .",
  },
} as const;

export const companyProfileFaqs = { ar: copy.ar.faqs, en: copy.en.faqs };

export default function CompanyProfileLanding({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const ar = locale === "ar";
  const whatsapp = "https://wa.me/97339066649?text=" + encodeURIComponent(t.waMessage);
  return (
    <div className="cp" lang={locale} dir={ar ? "rtl" : "ltr"}>
      <section className="cp-hero">
        <div className="shell cp-hero-grid">
          <div className="cp-intro">
            <span className="cp-eyebrow">{t.eyebrow}</span>
            <span className="cp-kicker">{t.kicker}</span>
            <h1>{t.title}<strong>{t.accent}</strong></h1>
            <p>{t.lead}</p>
            <div className="cp-pricebox">
              <span>{t.priceLabel}</span>
              <HubPrice locale={locale} offerKey="company-profile" />
              <small>{t.priceNote}</small>
            </div>
            <div className="cp-actions">
              <a href={whatsapp} className="cp-button cp-button-primary" target="_blank" rel="noopener noreferrer">{t.order} <span aria-hidden="true">↗</span></a>
              <a href="#cp-deliverables" className="cp-button cp-button-outline">{t.details} <span aria-hidden="true">↓</span></a>
            </div>
            <ul className="cp-support">{t.support.map(x => <li key={x}>{x}</li>)}</ul>
          </div>
          <div className="cp-scene" aria-label={t.sample}>
            <div className="cp-halo" aria-hidden="true" />
            <div className="cp-scene-page cp-scene-back" aria-hidden="true"><span>{t.sampleSection}</span><i /><i /><i /></div>
            <div className="cp-scene-page cp-scene-front" aria-hidden="true"><span>{t.sampleSub}</span><b>{t.sampleCover}</b><i /></div>
            <div className="cp-scene-foot">{t.sampleLabel}</div>
            <small className="cp-sample-disclaimer">{t.sample}</small>
          </div>
        </div>
      </section>

      <section className="shell cp-section cp-why">
        <div className="cp-section-head"><span className="cp-eyebrow">{t.whoTitle}</span><h2>{t.whoAccent}</h2><p>{t.whoText}</p></div>
        <div className="cp-three">{t.scenarios.map(([title, desc]) => <article key={title}><span aria-hidden="true">✦</span><h3>{title}</h3><p>{desc}</p></article>)}</div>
      </section>

      <section className="cp-deliverables" id="cp-deliverables">
        <div className="shell cp-section">
          <div className="cp-section-head"><span className="cp-eyebrow">THE PACKAGE</span><h2>{t.deliverTitle}</h2><p>{t.deliverLead}</p></div>
          <div className="cp-list">{t.deliver.map(([title, desc]) => <article key={title}><b>{title}</b><p>{desc}</p></article>)}</div>
          <p className="cp-exclusions">{t.notIncluded}</p>
        </div>
      </section>

      <section className="shell cp-section">
        <div className="cp-section-head"><span className="cp-eyebrow">THE PROCESS</span><h2>{t.processTitle}</h2></div>
        <div className="cp-steps">{t.steps.map(([title, desc], i) => <article key={title}><span>{String(i + 1).padStart(2,"0")}</span><h3>{title}</h3><p>{desc}</p></article>)}</div>
      </section>

      <section className="cp-faq">
        <div className="shell cp-section">
          <div className="cp-section-head"><span className="cp-eyebrow">FAQ</span><h2>{t.faqTitle}</h2></div>
          <div className="cp-faq-list">{t.faqs.map(([q,a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
        </div>
      </section>
      <section className="cp-final">
        <div className="shell cp-final-inner"><div><h2>{t.finalTitle}</h2><p>{t.finalText}</p></div><div className="cp-final-links"><a className="cp-button cp-button-primary" href={whatsapp} target="_blank" rel="noopener noreferrer">{t.order} ↗</a><Link href={ar ? "/offers" : "/en/offers"}>{t.back}</Link></div></div>
      </section>
    </div>
  );
}
