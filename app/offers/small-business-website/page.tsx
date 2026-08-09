import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../../components/site-shell";
import { createMetadata, siteUrl } from "../../lib/seo";
import { SmallWebsitePrice, SmallWebsiteWhatsApp } from "./localized-small-website";
import "../offers-page.css";
import "./small-business-website.css";

export const metadata: Metadata = createMetadata({
  title: "موقع شركة صغير جاهز للإطلاق بـ 1,990 ريال | ديوانك",
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
  ["تطوير الموقع", "تحويل التصميم إلى صفحات فعلية سريعة وقابلة للاستخدام مع مراجعة الروابط والمكونات الأساسية."],
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
  ["كم يستغرق التنفيذ؟", "غالبًا من 7 إلى 12 يوم عمل بعد استلام المحتوى والمعلومات المطلوبة واعتماد اتجاه التنفيذ، وقد تتغير المدة إذا تأخرت الملاحظات أو المواد."],
];

export default function SmallBusinessWebsiteOfferPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "باقة موقع صغير جاهز للإطلاق",
        description: "تصميم وتطوير موقع تعريفي صغير حتى 5 صفحات مع ربط التواصل والتحليلات وSEO أساسي وتجهيز الإطلاق.",
        provider: { "@type": "Organization", name: "ديوانك", url: siteUrl },
        areaServed: ["SA", "BH", "AE", "KW", "QA", "OM"],
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
        mainEntity: faqItems.map(([question, answer]) => ({
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
          <h1>موقع صغير.<br/><em>لكن جاهز يشتغل باسمك.</em></h1>
          <p>باقة واضحة للشركات والمشاريع التي تحتاج موقعًا تعريفيًا احترافيًا من غير مشروع ضخم: حتى 5 صفحات، تصميم وتطوير متجاوب، واتساب ونموذج تواصل، تحليلات وSEO أساسي وتجهيز كامل للإطلاق.</p>
          <div className="small-website-answer"><b>ماذا تحصل عليه؟</b><span>موقع تعريفي متكامل بنطاق محدد، وليس قالب صفحة واحدة ولا متجرًا إلكترونيًا.</span></div>
        </div>
        <aside className="offer-price-panel small-website-price-panel">
          <small>الباقة كاملة من</small>
          <SmallWebsitePrice />
          <p>يشمل حتى 5 صفحات. لا يشمل الدومين والاستضافة أو البرمجة الخاصة والخدمات الخارجية المدفوعة.</p>
          <SmallWebsiteWhatsApp className="button primary" label="ابدأ موقعك عبر واتساب" />
        </aside>
      </section>

      <section className="shell small-website-proof">
        <div className="small-website-proof-copy">
          <span className="section-label">[ نطاق واضح ]</span>
          <h2>مش كل مشروع<br/><em>يحتاج موقعًا ضخمًا.</em></h2>
          <p>أحيانًا ما تحتاجه فعلًا هو موقع مرتب يشرح من أنت، ماذا تقدم، وكيف يتواصل العميل معك. الباقة تقفل هذه الفجوة بسرعة من غير أن تدفع في خصائص لن تستخدمها.</p>
        </div>
        <div className="small-site-map" aria-label="مثال هيكل موقع صغير">
          <div className="small-site-map-top"><b>هيكل موقع صغير</b><small>حتى 5 صفحات</small></div>
          <div className="small-site-home">الرئيسية</div>
          <div className="small-site-pages"><span>الخدمات</span><span>من نحن</span><span>تواصل</span><span>صفحة إضافية</span></div>
          <div className="small-site-path"><span>زيارة</span><b>→</b><span>فهم الخدمة</span><b>→</b><span>تواصل</span></div>
        </div>
      </section>

      <section className="shell offer-deliverables small-website-deliverables">
        <div><span className="section-label">[ ماذا تشمل الباقة؟ ]</span><h2>كل الأساسيات.<br/><em>من غير حشو.</em></h2></div>
        <div className="deliverable-list">{deliverables.map(([title, text]) => <article className="deliverable-item" key={title}><b>{title}</b><p>{text}</p></article>)}</div>
      </section>

      <section className="shell small-website-process">
        <div className="small-website-process-head"><span className="section-label">[ طريقة التنفيذ ]</span><h2>من أول صفحة.<br/><em>لحد الإطلاق.</em></h2></div>
        <div className="small-website-process-grid">{process.map(([number, title, text]) => <article key={number}><b>{number}</b><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="shell offer-fit small-website-fit">
        <span className="section-label">[ هل الباقة مناسبة لك؟ ]</span>
        <h2>مناسبة للموقع التعريفي.<br/><em>مش لكل نوع مشروع.</em></h2>
        <div className="offer-fit-grid">
          <article className="offer-fit-card good"><h3>مناسبة إذا</h3><ul>{fitFor.map((item) => <li key={item}>{item}</li>)}</ul></article>
          <article className="offer-fit-card limits"><h3>غير مشمول</h3><ul>{exclusions.map((item) => <li key={item}>{item}</li>)}</ul></article>
        </div>
      </section>

      <section className="shell small-website-scope-note">
        <div><span className="section-label">[ قبل أن تبدأ ]</span><h2>لو احتياجك أكبر،<br/><em>ما نضغطوش داخل باقة صغيرة.</em></h2></div>
        <div><p>إذا كنت تحتاج متجرًا، نظام حجز، عضويات، CRM، أتمتة، عدد صفحات كبير أو استراتيجية موقع كاملة، الأفضل الانتقال إلى خدمة تصميم وتطوير المواقع بدل توسيع هذه الباقة حتى تفقد وضوحها.</p><Link href="/website-design">شاهد خدمة تصميم وتطوير المواقع <span>←</span></Link></div>
      </section>

      <section className="shell offer-faq small-website-faq">
        <span className="section-label">[ أسئلة شائعة ]</span>
        <h2>قبل حجز الباقة.</h2>
        <div>{faqItems.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="shell offer-final-cta small-website-final">
        <span className="section-label">[ جاهز تبدأ؟ ]</span>
        <h2>خلي مشروعك يبقى له<br/><em>عنوان رقمي حقيقي.</em></h2>
        <p>ابدأ بموقع واضح وسريع، وبعدها وسّعه فقط عندما يحتاج المشروع فعلًا.</p>
        <SmallWebsiteWhatsApp className="button primary" label="ابدأ موقعك الآن" />
        <div className="small-website-links"><Link href="/offers/landing-page-package">تحتاج صفحة هبوط فقط؟</Link><Link href="/website-design">تحتاج موقعًا أكبر؟</Link></div>
      </section>

      <Footer />
    </main>
  );
}
