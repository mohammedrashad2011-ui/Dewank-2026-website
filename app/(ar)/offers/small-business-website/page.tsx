import "@/app/components/crm-contact-preview.css";
import { crmVisible } from "@/app/lib/crm/capture-mode";
import { CrmOfferActions } from "@/app/components/crm-offer-actions";
import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../../../components/site-shell";
import { createMetadata, siteUrl, servedMarkets, serviceId, organizationId } from "../../../lib/seo";
import { SmallWebsitePrice, SmallWebsiteSticky, SmallWebsiteWhatsApp } from "./localized-small-website";
import { OfferClientProof } from "../offer-client-proof";
import { InlineOfferPrice } from "../inline-offer-price";
import { WebsitePlan, WebsiteProblems, WebsiteSectors, websiteExtraFaqs } from "./website-extras";
import "../offers-page.css";
import "../offer-trust.css";
import "./small-business-website.css";
import "./website-extras.css";

export const metadata: Metadata = createMetadata({
  title: "تصميم وإنشاء موقع إلكتروني لشركتك | 5 صفحات | ديوانك",
  description: "باقة موقع تعريفي صغير حتى 5 صفحات تشمل التصميم والتطوير المتجاوب وربط واتساب والنماذج والتحليلات وSEO أساسي وتجهيز الإطلاق.",
  path: "/offers/small-business-website",
  keywords: [
    "تصميم موقع شركة صغير",
    "سعر تصميم موقع شركة",
    "موقع تعريفي للشركات",
    "تصميم موقع 5 صفحات",
    "تصميم مواقع السعودية",
    "موقع جاهز للإطلاق",
  ],
});

const deliverables = [
  ["حتى 5 صفحات", "موقع تعريفي مركز يصل إلى خمس صفحات أساسية حسب احتياج النشاط، مثل الرئيسية والخدمات ومن نحن والتواصل وصفحة إضافية."],
  ["تصميم متجاوب", "واجهة مرتبة تعمل على الجوال والتابلت والكمبيوتر مع أولوية للوضوح وسهولة التواصل."],
  ["إنشاء الموقع وتطويره", "تحويل التصميم إلى صفحات فعلية سريعة وقابلة للاستخدام مع مراجعة الروابط والمكونات الأساسية."],
  ["واتساب ونموذج تواصل", "إضافة مسار تواصل واضح عبر واتساب ونموذج أساسي لاستقبال الاستفسارات."],
  ["تحليلات أساسية", "ربط Google Analytics وقياس التفاعلات الأساسية المتاحة ضمن البنية التقنية للموقع."],
  ["SEO أساسي", "إعداد العناوين والوصف والروابط القانونية والسكيما وخريطة الموقع للصفحات المشمولة."],
  ["مراجعة قبل الإطلاق", "اختبار الجوال والكمبيوتر والروابط والنماذج والتصفح قبل نشر النسخة النهائية."],
  ["7 أيام دعم بعد الإطلاق", "متابعة تقنية قصيرة لمعالجة الأخطاء الناتجة عن التنفيذ بعد نشر الموقع."],
];

const process = [
  ["01", "نحدد الصفحات", "نفهم النشاط والخدمات والهدف ثم نحدد الصفحات الخمس أو أقل وما يحتاجه كل جزء."],
  ["02", "نرتب المحتوى", "نحدد التسلسل والعناوين والمعلومات المطلوبة قبل دخول التصميم في التفاصيل."],
  ["03", "نصمم ونطوّر", "نبني الواجهة ثم ننفذها بصورة متجاوبة ونربط التواصل والتحليلات الأساسية."],
  ["04", "نراجع ونطلق", "نختبر الموقع ونغلق الملاحظات المتفق عليها ثم نجهز النسخة النهائية للإطلاق."],
];

const fitFor = [
  "شركة أو مكتب خدمات يحتاج حضورًا احترافيًا بدل الاعتماد على السوشيال ميديا فقط.",
  "مشروع جديد يحتاج موقعًا بسيطًا وسريعًا قبل الحملات أو التواصل التجاري.",
  "نشاط لديه خدمات واضحة ولا يحتاج متجرًا إلكترونيًا أو نظامًا برمجيًا معقدًا.",
  "عميل يريد تكلفة ونطاقًا معروفين من البداية بدل مشروع مفتوح بلا حدود.",
];

const exclusions = [
  "متجر إلكتروني أو بوابة دفع أو إدارة مخزون.",
  "أنظمة حجز أو عضويات أو لوحات تحكم مخصصة وبرمجة خاصة.",
  "تكاملات CRM أو API أو أتمتة معقدة.",
  "كتابة كمية كبيرة من المحتوى أو تصوير وإنتاج صور وفيديوهات خاصة.",
  "تكاليف الدومين والاستضافة والخدمات الخارجية المدفوعة ما لم يتم الاتفاق عليها ضمن عرض مستقل.",
  "SEO شهري أو إدارة محتوى مستمرة بعد الإطلاق.",
];

const faqItems = [
  ["كم صفحة تشمل الباقة؟", "تشمل حتى خمس صفحات أساسية. إذا احتاج المشروع صفحات أكثر أو أنواع صفحات خاصة يتم تسعير الإضافة قبل بدء التنفيذ."],
  ["هل يشمل السعر الدومين والاستضافة؟", "السعر الأساسي يغطي تصميم وتطوير وتجهيز الموقع. الدومين والاستضافة وأي خدمات خارجية مدفوعة ليست ضمن الباقة الأساسية إلا إذا تم الاتفاق عليها بشكل منفصل."],
  ["هل تكتبون محتوى الموقع؟", "نساعد في ترتيب وصياغة العناوين والرسائل الأساسية ضمن الصفحات المشمولة. المحتوى الطويل أو المتخصص أو كميات المقالات الكبيرة يحتاج نطاقًا إضافيًا."],
  ["هل الموقع مناسب للجوال؟", "نعم. الباقة تشمل تصميمًا وتطويرًا متجاوبًا مع مراجعة الاستخدام على الشاشات الأساسية قبل الإطلاق."],
  ["هل يشمل SEO؟", "يشمل الأساس التقني للصفحات المشمولة، مثل العناوين والوصف والسكيما وخريطة الموقع. المنافسة المستمرة على الكلمات تحتاج خدمة SEO منفصلة."],
  ["هل يمكن إضافة متجر لاحقًا؟", "يمكن تقييم التوسع لاحقًا، لكن المتجر الإلكتروني ليس جزءًا من هذه الباقة وقد يحتاج بنية أو مشروع تطوير مستقل."],
  ["كم يستغرق إنشاء موقع إلكتروني لشركتي؟", "غالبًا من 7 إلى 12 يوم عمل بعد استلام المحتوى والمعلومات المطلوبة واعتماد اتجاه التنفيذ، وقد تتغير المدة إذا تأخرت الملاحظات أو المواد."],
];

const allFaqs = [...faqItems, ...websiteExtraFaqs.ar];

export default function SmallBusinessWebsiteOfferPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": serviceId("/offers/small-business-website"),
        name: "باقة موقع صغير جاهز للإطلاق",
        description: "تصميم وتطوير موقع تعريفي صغير حتى 5 صفحات مع ربط التواصل والتحليلات وSEO أساسي وتجهيز الإطلاق.",
        provider: { "@id": organizationId },
        areaServed: servedMarkets,
        url: `${siteUrl}/offers/small-business-website`,
        offers: {
          "@type": "Offer",
          price: "1990",
          priceCurrency: "SAR",
          availability: "https://schema.org/InStock",
          url: `${siteUrl}/offers/small-business-website`,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: allFaqs.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "الرئيسية", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "العروض", item: `${siteUrl}/offers` },
          { "@type": "ListItem", position: 3, name: "موقع صغير جاهز للإطلاق", item: `${siteUrl}/offers/small-business-website` },
        ],
      },
    ],
  };

  return (
    <main className="inner-page offers-page small-website-page">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="shell offer-detail-hero small-website-hero">
        <div>
          <div className="offer-availability"><span className="offer-spots-available"><i aria-hidden="true" /><strong>7–12</strong> يوم عمل</span></div>
          <h1>تصميم موقع إلكتروني لشركتك<br/><em>حتى 5 صفحات، جاهز للإطلاق</em></h1>
          <p>موقع تعريفي متكامل: تصميم وتطوير متجاوب مع الجوال، واتساب ونموذج تواصل، تحليلات وSEO أساسي، ومراجعة كاملة قبل الإطلاق. الباقة تبدأ من <span className="sw-inline-price"><InlineOfferPrice offerKey="small-business-website" /></span>.</p>
          <div className="sw-hero-actions">
            <SmallWebsiteWhatsApp id="order-cta" className="button primary offer-consultation-cta" label="ابدأ موقعك" />
            <p className="sw-microcopy">بدون أي التزام. أرسل نوع نشاطك، ونؤكد لك الصفحات والنطاق قبل البدء.</p>
          </div>
          <Link className="offer-work-link" href="/work">شاهد أعمال ديوانك ودراسات الحالة ←</Link>
        </div>
        <aside id="order-panel" className="offer-price-panel small-website-price-panel">
          <small>الباقة كاملة من</small>
          <SmallWebsitePrice />
          <div className="offer-trust-inline"><span>حتى 5 صفحات</span><span>متجاوب مع الجوال</span><span>واتساب وتحليلات</span></div>
          <p>يشمل حتى 5 صفحات. لا يشمل الدومين والاستضافة أو البرمجة الخاصة والخدمات الخارجية المدفوعة.</p>
          <p className="sw-assure">مراجعة كاملة قبل الإطلاق، و7 أيام دعم تقني بعده ضمن السعر.</p>
          <SmallWebsiteWhatsApp id="order-panel-cta" className="button primary offer-consultation-cta" label="ابدأ موقعك" />
        </aside>
      </section>

      <WebsitePlan locale="ar" />

      <WebsiteProblems locale="ar" />

      <section className="shell offer-deliverables small-website-deliverables">
        <div><span className="section-label">ماذا تشمل الباقة؟</span><h2>كل الأساسيات<br/><em>دون حشو</em></h2></div>
        <div className="deliverable-list">{deliverables.map(([title, text]) => <article className="deliverable-item" key={title}><b>{title}</b><p>{text}</p></article>)}</div>
      </section>

      <section className="shell small-website-process">
        <div className="small-website-process-head"><span className="section-label">طريقة التنفيذ</span><h2>من أول صفحة<br/><em>حتى الإطلاق</em></h2></div>
        <div className="small-website-process-grid">{process.map(([number, title, text]) => <article key={number}><b>{number}</b><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="shell offer-fit small-website-fit">
        <span className="section-label">هل الباقة مناسبة لك؟</span>
        <h2>مناسبة للموقع التعريفي<br/><em>وليست لكل نوع مشروع</em></h2>
        <div className="offer-fit-grid">
          <article className="offer-fit-card good"><h3>مناسبة إذا</h3><ul>{fitFor.map((item) => <li key={item}>{item}</li>)}</ul></article>
          <article className="offer-fit-card limits"><h3>غير مشمول</h3><ul>{exclusions.map((item) => <li key={item}>{item}</li>)}</ul></article>
        </div>
        <p className="sw-bigger">تحتاج متجرًا أو نظام حجز أو CRM أو عدد صفحات أكبر؟ <Link href="/website-design">شاهد خدمة تصميم وتطوير المواقع</Link></p>
      </section>

      <OfferClientProof review="bithan" locale="ar" />

      <WebsiteSectors locale="ar" />

      <section className="shell offer-faq small-website-faq">
        <span className="section-label">أسئلة شائعة</span>
        <h2>قبل حجز الباقة</h2>
        <div>{allFaqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
      </section>

      <section id="order-final" className="shell offer-final-cta small-website-final">
        <span className="section-label">جاهز للبدء؟</span>
        <h2>اجعل لمشروعك<br/><em>عنوانًا رقميًا حقيقيًا</em></h2>
        <p>ابدأ بموقع واضح وسريع، وبعدها وسّعه فقط عندما يحتاج المشروع فعلًا.</p>
        <CrmOfferActions enabled={crmVisible} locale="ar" offer="small-business-website"><SmallWebsiteWhatsApp className="button primary offer-consultation-cta" label="ابدأ موقعك" /></CrmOfferActions>
        <div className="small-website-links"><Link href="/offers/landing-page-package">تحتاج صفحة هبوط فقط؟</Link><Link href="/website-design">تحتاج موقعًا أكبر؟</Link><Link href="/guides/website-design-cost-saudi-arabia">قارن أسعار تصميم المواقع</Link></div>
      </section>

      <SmallWebsiteSticky watchIds={["order-cta", "order-panel-cta", "order-final", "order-footer"]} />
      <div id="order-footer"><Footer /></div>
    </main>
  );
}
