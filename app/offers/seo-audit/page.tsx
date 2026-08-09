import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../../components/site-shell";
import { createMetadata, organizationId, siteUrl } from "../../lib/seo";
import { SeoAuditOfferPrice, SeoAuditWhatsApp } from "./localized-seo-audit-offer";
import "../offers-page.css";
import "../offer-trust.css";
import "./seo-audit-offer.css";

export const metadata: Metadata = createMetadata({
  title: "فحص SEO شامل للموقع | تقرير وتحليل وخطة تحسين",
  description: "فحص SEO شامل لموقعك خلال 48 ساعة: مشاكل الفهرسة والزحف والسرعة والمحتوى والكلمات المفتاحية والتحويل، مع تقرير PDF وخطة تحسين مرتبة حسب الأولوية.",
  path: "/offers/seo-audit",
  keywords: [
    "فحص SEO للموقع",
    "تحليل SEO للموقع",
    "تدقيق SEO",
    "SEO audit السعودية",
    "تحليل موقع إلكتروني",
    "فحص سيو الموقع",
    "تحسين ظهور الموقع في جوجل",
    "تقرير SEO",
  ],
});

const auditAreas = [
  ["Technical SEO", "الفهرسة والزحف وrobots.txt وsitemap والـcanonical وأخطاء 404 والـredirects."],
  ["On-page SEO", "العناوين والوصف وH1/H2 والمحتوى والصور والروابط الداخلية وبنية الصفحات."],
  ["السرعة وتجربة الجوال", "Core Web Vitals وأداء الموبايل والمشكلات التي تؤخر التحميل أو تضعف التجربة."],
  ["الكلمات وفرص الظهور", "فرص بحث مرتبطة بالنشاط، فجوات المحتوى، والصفحات التي يمكن تقويتها أولًا."],
  ["Conversion SEO", "وضوح العرض وCTA ومسار التواصل ومدى قدرة الصفحة على تحويل الزيارة إلى استفسار."],
];

const deliverables = [
  ["SEO Score واضح", "تقييم إجمالي يساعدك تفهم حالة الموقع بسرعة من دون غرق في أرقام تقنية."],
  ["أهم 10 مشكلات", "مرتبة إلى حرجة ومهمة وتحسينات، مع توضيح أثر كل مشكلة على الظهور أو التحويل."],
  ["لقطات وأمثلة", "Screenshots من الموقع نفسه لتعرف مكان المشكلة بدل توصيات عامة لا تعرف أين تطبقها."],
  ["فرص كلمات مفتاحية", "من 5 إلى 10 فرص بحث أولية مرتبطة بخدماتك والسوق المستهدف."],
  ["Quick Wins", "تحسينات يمكن تنفيذها بسرعة للحصول على مكاسب مبكرة قبل المشاريع الأكبر."],
  ["خطة 30 يوم", "ترتيب عملي لما يتم إصلاحه أولًا وما يمكن تأجيله وما يحتاج تنفيذًا متخصصًا."],
];

const processSteps = [
  ["01", "أرسل الموقع", "ترسل رابط الموقع، نوع النشاط، السوق المستهدف، وأهم خدمة تريد ظهورها."],
  ["02", "نفحص ونحلل", "نراجع الموقع تقنيًا ومحتوىً وأداءً وفرص بحث وتحويل، ونرتب الأولويات."],
  ["03", "تستلم التقرير", "يصلك PDF واضح مع النتيجة والمشكلات والفرص وخطة تحسين لمدة 30 يومًا."],
];

const faqItems = [
  ["هل يشمل العرض تنفيذ إصلاحات SEO؟", "لا. العرض مخصص للفحص والتحليل والتقرير وخطة الأولويات. أي تنفيذ برمجي أو تحسين محتوى أو SEO مستمر يتم تسعيره بشكل منفصل بعد معرفة ما يحتاجه الموقع فعلًا."],
  ["هل أحتاج إلى إعطائكم بيانات دخول الموقع؟", "في أغلب الحالات لا. يبدأ الفحص من الصفحات العامة والبيانات المتاحة. إذا احتجنا وصولًا إلى Search Console أو Analytics لتشخيص أدق سنطلبه منك بوضوح قبل استخدامه."],
  ["كم يستغرق الفحص؟", "يتم تسليم التقرير عادة خلال 48 ساعة بعد استلام رابط الموقع والمعلومات الأساسية، ما لم يكن الموقع كبيرًا أو يحتاج وصولًا إضافيًا."],
  ["هل الفحص مناسب لموقع جديد؟", "نعم إذا كان الموقع منشورًا ويمكن فحصه. للمواقع الجديدة جدًا نركز أكثر على الأساس التقني وبنية الصفحات والكلمات التي يجب بناء المحتوى حولها."],
  ["هل التقرير مناسب للسعودية والبحرين والخليج؟", "نعم. نربط المراجعة بالسوق واللغة والخدمات المستهدفة، ونوضح فرص البحث وفق الدولة أو السوق الذي تحدده عند الطلب."],
  ["هل يشمل AEO والظهور في أنظمة الإجابة؟", "نراجع قابلية فهم المحتوى والهيكل والعناوين والأسئلة الشائعة والبيانات المنظمة، ونضيف توصيات تساعد محركات البحث وأنظمة الإجابة على فهم صفحاتك بصورة أوضح."],
];

export default function SeoAuditOfferPage() {
  const url = `${siteUrl}/offers/seo-audit`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "فحص SEO شامل للموقع",
        alternateName: "Website SEO Audit",
        description: "فحص SEO شامل يشمل التقنية والمحتوى والسرعة والكلمات المفتاحية والتحويل وAEO مع تقرير PDF وخطة تحسين لمدة 30 يومًا.",
        serviceType: ["SEO Audit", "Technical SEO Audit", "On-page SEO Audit", "AEO Audit", "Website Performance Audit"],
        provider: { "@id": organizationId },
        areaServed: ["Saudi Arabia", "Bahrain", "United Arab Emirates", "GCC"],
        url,
        offers: {
          "@type": "Offer",
          price: "490",
          priceCurrency: "SAR",
          availability: "https://schema.org/InStock",
          url,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
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
          { "@type": "ListItem", position: 3, name: "فحص SEO شامل", item: url },
        ],
      },
    ],
  };

  return (
    <main className="inner-page offers-page seo-audit-page">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="shell offer-detail-hero seo-audit-hero">
        <div>
          <div className="offer-availability"><span className="offer-spots-available"><i aria-hidden="true" /><strong>48</strong> ساعة للتسليم</span></div>
          <h1>موقعك موجود.<br/><em>لكن هل جوجل يفهمه؟</em></h1>
          <p>فحص SEO شامل يكشف ما يعيق ظهور موقعك، ما الذي يحتاج إصلاحًا أولًا، وأين توجد فرص نمو يمكن استغلالها قبل إنفاق المزيد على التسويق.</p>
          <div className="seo-audit-answer" aria-label="الإجابة المختصرة">
            <b>الإجابة المختصرة</b>
            <span>تحصل على تشخيص تقني ومحتوى وسرعة وكلمات وتحويل وAEO، ثم تقرير PDF وخطة تحسين مرتبة لمدة 30 يومًا.</span>
          </div>
        </div>
        <aside className="offer-price-panel seo-audit-price-panel">
          <small>فحص شامل · مرة واحدة</small>
          <SeoAuditOfferPrice />
          <div className="offer-trust-inline"><span>تقرير PDF</span><span>خطة 30 يوم</span><span>بدون اشتراك</span></div>
          <p>السعر يشمل الفحص والتقرير والتوصيات. تنفيذ الإصلاحات أو إدارة SEO الشهرية غير مشمولين.</p>
          <SeoAuditWhatsApp className="button primary" label="أرسل موقعك للفحص" />
        </aside>
      </section>

      <section className="shell seo-audit-proof" aria-labelledby="audit-preview-title">
        <div className="seo-audit-proof-copy">
          <span className="section-label">[ شكل النتيجة ]</span>
          <h2 id="audit-preview-title">تقرير يفهمه صاحب المشروع.<br/>وليس قائمة أخطاء بلا نهاية.</h2>
          <p>نرتب ما وجدناه حسب التأثير، ونوضح ما يحتاج تدخلًا عاجلًا وما يمكن تأجيله، حتى تتحول المراجعة إلى قرارات قابلة للتنفيذ.</p>
        </div>
        <div className="seo-report-mockup" role="img" aria-label="تصور لتقرير SEO يعرض درجة الموقع ومشكلات حرجة وفرص تحسين">
          <div className="seo-report-top"><span>DEWANK SEO AUDIT</span><small>REPORT / 01</small></div>
          <div className="seo-score-row">
            <div className="seo-score-ring"><strong>64</strong><span>/100</span></div>
            <div><small>OVERALL SCORE</small><b>أساس جيد، لكن توجد فرص واضحة للتحسين.</b></div>
          </div>
          <div className="seo-report-bars">
            <div><span>Technical SEO</span><i><em style={{ width: "72%" }} /></i><b>72</b></div>
            <div><span>Content & On-page</span><i><em style={{ width: "61%" }} /></i><b>61</b></div>
            <div><span>Performance</span><i><em style={{ width: "54%" }} /></i><b>54</b></div>
            <div><span>AEO & Structure</span><i><em style={{ width: "68%" }} /></i><b>68</b></div>
          </div>
          <div className="seo-report-flags"><span><i />3 حرجة</span><span><i />5 مهمة</span><span><i />8 فرص تحسين</span></div>
        </div>
      </section>

      <section className="shell offer-deliverables seo-audit-areas">
        <div><span className="section-label">[ ماذا نفحص؟ ]</span><h2>خمسة محاور.<br/>صورة واحدة واضحة.</h2><p>الفحص لا يتوقف عند الكلمات المفتاحية. نراجع ما يساعد جوجل على الوصول والفهم وما يساعد الزائر على اتخاذ الإجراء.</p></div>
        <div className="deliverable-list">{auditAreas.map(([title, text]) => <article className="deliverable-item" key={title}><b>{title}</b><p>{text}</p></article>)}</div>
      </section>

      <section className="shell seo-audit-delivery">
        <div className="seo-audit-delivery-head"><span className="section-label">[ ماذا تستلم؟ ]</span><h2>من التشخيص إلى خطة التنفيذ.</h2></div>
        <div className="seo-audit-delivery-grid">{deliverables.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="shell seo-audit-process">
        <div className="seo-audit-process-head"><span className="section-label">[ كيف تعمل؟ ]</span><h2>ثلاث خطوات فقط.</h2></div>
        <div className="seo-audit-process-grid">{processSteps.map(([n, title, text]) => <article key={n}><b>{n}</b><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="shell offer-confidence seo-audit-confidence">
        <div className="offer-confidence-head"><span className="section-label">[ نطاق واضح ]</span><h2>الفحص يحدد المشكلة.<br/>والتنفيذ قرار منفصل.</h2></div>
        <div className="offer-confidence-grid"><article><b>01</b><span>لا نبيعك تنفيذًا قبل أن نعرف ما يحتاجه الموقع فعلًا.</span></article><article><b>02</b><span>التقرير يوضح ما يمكنك إصلاحه بنفسك وما يحتاج متخصصًا.</span></article><article><b>03</b><span>يمكن تنفيذ التوصيات مع ديوانك أو أي فريق تختاره.</span></article></div>
        <details className="offer-policy"><summary>ما الذي لا يشمله العرض؟</summary><p>لا يشمل تعديل الكود أو كتابة صفحات كاملة أو بناء روابط خارجية أو إدارة SEO شهرية أو ضمان ترتيب محدد في جوجل. هذه خدمات منفصلة تُحدد فقط بعد ظهور نتائج الفحص.</p></details>
      </section>

      <section className="shell offer-faq" id="faq">
        <div className="offer-faq-head"><span className="section-label">[ أسئلة شائعة ]</span><h2>قبل ما ترسل الموقع.</h2></div>
        <div className="offer-faq-list">{faqItems.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="shell offer-final-cta seo-audit-final">
        <span className="offer-kicker">SEO + AEO · تقرير PDF · خلال 48 ساعة</span>
        <h2>اعرف أين تخسر الظهور قبل ما تدفع أكثر لجلب الزيارات.</h2>
        <p>أرسل رابط موقعك ونوع النشاط والسوق المستهدف، ونبدأ الفحص من الصورة الكبيرة إلى التفاصيل التي تؤثر فعلًا.</p>
        <SeoAuditWhatsApp className="button primary" label="افحص موقعي الآن" />
        <div><Link href="/offers">← العودة إلى جميع العروض</Link></div>
      </section>
      <Footer />
    </main>
  );
}
