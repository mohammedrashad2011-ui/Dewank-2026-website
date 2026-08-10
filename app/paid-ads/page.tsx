import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../components/site-shell";
import { createMetadata, organizationId, siteUrl } from "../lib/seo";
import { GoogleAdsLaunchPrice } from "../offers/google-ads-launch/localized-google-ads-launch";
import "./paid-ads-page.css";
import "./paid-ads-cluster.css";

export const metadata: Metadata = createMetadata({
  title: "إدارة إعلانات Google وMeta في السعودية | ديوانك",
  description: "إدارة وتحسين حملات Google Ads وMeta Ads للشركات في السعودية والخليج، مع الاستهداف والتتبع وتحسين التحويل والعائد على الإنفاق الإعلاني.",
  path: "/paid-ads",
  keywords: ["إدارة إعلانات جوجل", "إدارة إعلانات ميتا", "شركة إعلانات في السعودية", "Google Ads السعودية", "Meta Ads السعودية", "إدارة حملات إعلانية", "تحسين العائد الإعلاني"],
});

const channels = [
  ["Google Ads", "التقاط الطلب الموجود بالفعل عبر البحث والكلمات ذات النية العالية، ثم توجيه المستخدم إلى صفحة محسوبة."],
  ["Meta Ads", "صناعة الاهتمام، اختبار الرسائل، الوصول إلى جماهير جديدة، وإعادة استهداف من تفاعل أو زار الموقع."],
];

const scope = [
  ["Google Search", "حملات بحث مبنية على نية المستخدم والكلمات الأكثر ارتباطًا بالشراء أو الحجز."],
  ["Performance Max", "توسيع الوصول عبر منظومة Google عندما تكون البيانات والتتبع جاهزين."],
  ["Meta Leads & Messages", "نماذج ورسائل وواتساب لاستقبال الطلبات وتقليل الاحتكاك."],
  ["Sales & Conversions", "حملات موجهة إلى الشراء أو الحجز أو الإجراء الأساسي في الموقع."],
  ["Retargeting", "استعادة الزوار والمتفاعلين برسائل تناسب المرحلة التي وصلوا إليها."],
  ["Creative Testing", "اختبار الزوايا والعروض والتصميمات بدل الاعتماد على إعلان واحد."],
];

const journey = [
  ["01", "بحث", "نفهم السوق والجمهور والعرض والمنافسين قبل إطلاق أي ميزانية."],
  ["02", "رسالة", "نبني الزاوية الإعلانية والعرض والنسخ بما يخدم قرار العميل."],
  ["03", "استهداف", "نحدد الكلمات والجماهير والقنوات وفق نية الشراء ورحلة العميل."],
  ["04", "تحويل", "نربط الإعلان بصفحة أو نموذج أو واتساب واضح وسريع."],
  ["05", "قياس", "نضبط التتبع ونقرأ تكلفة النتيجة وجودتها، لا عدد النقرات فقط."],
  ["06", "تحسين", "نوقف الضعيف، نوسع الناجح، ونبني قرارات الميزانية على البيانات."],
];

const metrics = ["تكلفة العميل المحتمل", "تكلفة الحجز", "تكلفة الاستحواذ", "معدل التحويل", "العائد على الإنفاق", "جودة العملاء المحتملين"];
const deliverables = ["استراتيجية قنوات وميزانية مرتبطة بالهدف التجاري.", "إعداد أو مراجعة حسابات Google وMeta.", "إعداد Pixel وGA4 والتحويلات المطلوبة.", "بحث الكلمات والجماهير وبناء هيكل الحملات.", "كتابة النسخ الإعلانية وتوجيه التصميمات.", "إدارة الميزانية والاختبارات والتحسين المستمر.", "تقارير واضحة مع قرارات وتوصيات، لا أرقام معزولة."];
const fitFor = ["شركة تنفق حاليًا ولا تعرف أي حملة تصنع النتيجة.", "نشاط يريد عملاء محتملين أو حجوزات أو مبيعات قابلة للقياس.", "متجر يحتاج تحسين الاستحواذ وإعادة الاستهداف.", "عيادة أو خدمة محلية تعتمد على الطلبات والمواعيد.", "شركة تستعد لإطلاق عرض أو سوق أو فرع جديد."];
const faqs = [
  { question: "ما الحد الأدنى المناسب للميزانية؟", answer: "يعتمد على السوق وسعر المنتج والهدف والقناة. نحدد ميزانية اختبار واقعية تسمح بجمع بيانات كافية بدل توزيع مبلغ صغير على حملات كثيرة." },
  { question: "هل أتعاب الإدارة تشمل ميزانية الإعلان؟", answer: "لا. ميزانية المنصات منفصلة عن أتعاب الإدارة والإعداد والتصميم أو صفحة الهبوط حسب نطاق المشروع." },
  { question: "متى تبدأ النتائج في الظهور؟", answer: "قد تظهر إشارات أولية سريعًا، لكن الوصول إلى قرار موثوق يحتاج فترة اختبار وبيانات كافية. المدة تختلف حسب السوق والعرض والتتبع ودورة قرار العميل." },
  { question: "هل توفرون التصاميم والنسخ الإعلانية؟", answer: "نعم، يمكن أن يشمل النطاق كتابة الإعلانات وتوجيه أو تنفيذ التصميمات والفيديوهات المطلوبة للاختبار." },
  { question: "هل نحتاج صفحة هبوط؟", answer: "عندما تكون الصفحة الحالية بطيئة أو مشتتة أو لا تدعم هدف الحملة، تصبح صفحة الهبوط ضرورية لحماية الميزانية ورفع التحويل." },
  { question: "هل يمكنكم إدارة حساب إعلاني قائم؟", answer: "نعم. نبدأ بمراجعة الهيكل والتتبع والجماهير والنتائج السابقة، ثم نقرر ما يجب إصلاحه أو إعادة بنائه." },
];

const paidAdsGuides = [
  { href: "/guides/google-ads-cost-saudi-arabia", label: "التكلفة والميزانية", title: "كم تكلفة إعلانات Google في السعودية؟", text: "افهم ميزانية المنصة والتأسيس والصفحة والقياس قبل تحديد رقم الاختبار." },
  { href: "/guides/google-ads-vs-meta-ads", label: "اختيار القناة", title: "Google Ads أم Meta Ads؟", text: "اختَر حسب نية العميل ومرحلة القرار بدل تشغيل القناة الأشهر بشكل تلقائي." },
  { href: "/guides/google-ads-clicks-no-leads", label: "تشخيص التحويل", title: "نقرات كثيرة ولا يوجد عملاء؟", text: "شخّص Search Terms والإعلان والصفحة والتتبع والمتابعة قبل زيادة الميزانية." },
];

export default function PaidAdsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "@id": `${siteUrl}/paid-ads#service`, name: "إدارة إعلانات Google وMeta", alternateName: "Google Ads and Meta Ads Management", description: "إدارة وتحسين الحملات الإعلانية المدفوعة للشركات في السعودية والخليج مع التتبع وتحسين التحويل.", serviceType: ["Google Ads Management", "Meta Ads Management", "Paid Media", "Performance Marketing"], provider: { "@id": organizationId }, areaServed: ["Saudi Arabia", "Bahrain", "GCC"], url: `${siteUrl}/paid-ads` },
      { "@type": "FAQPage", "@id": `${siteUrl}/paid-ads#faq`, mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "الرئيسية", item: siteUrl }, { "@type": "ListItem", position: 2, name: "الخدمات", item: `${siteUrl}/services` }, { "@type": "ListItem", position: 3, name: "إعلانات Google وMeta", item: `${siteUrl}/paid-ads` }] },
    ],
  };

  return (
    <main className="pa-page">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="pa-hero shell">
        <div className="pa-hero-copy">
          <div className="pa-kicker"><span>GOOGLE ADS</span><span>META ADS</span><span>PERFORMANCE</span></div>
          <h1>لا نشتري وصولًا فقط.<br/><em>نبني طلبًا قابلًا للقياس.</em></h1>
          <p>ندير حملات Google وMeta للشركات في السعودية والخليج من البحث والرسالة إلى التتبع وصفحة الهبوط والتحسين، بهدف واضح: عملاء أفضل وتكلفة أكثر منطقية.</p>
          <div className="pa-actions"><Link className="button primary" href="/contact">ناقش حملتك <span>←</span></Link><a href="#journey">استعرض النظام</a></div>
        </div>
        <div className="pa-dashboard" aria-label="لوحة تصور أداء الحملات">
          <div className="pa-dashboard-top"><b>PAID MEDIA CONTROL</b><span>LIVE VIEW</span></div>
          <div className="pa-score"><small>PRIMARY GOAL</small><strong>Qualified Leads</strong><span>النتيجة قبل النقرات</span></div>
          <div className="pa-bars"><i style={{height:"42%"}}></i><i style={{height:"62%"}}></i><i style={{height:"54%"}}></i><i style={{height:"80%"}}></i><i style={{height:"72%"}}></i><i style={{height:"94%"}}></i></div>
          <div className="pa-metrics"><div><small>CPL</small><b>↓ 18%</b></div><div><small>CVR</small><b>↑ 31%</b></div><div><small>ROAS</small><b>4.2x</b></div></div>
        </div>
      </section>

      <section className="pa-truth"><div className="shell pa-truth-grid"><div><span className="pa-label">[ الفكرة الأساسية ]</span><h2>الإعلان ليس حملة منفصلة.<br/><em>إنه جزء من منظومة البيع.</em></h2></div><div><p>عندما يكون العرض ضعيفًا أو التتبع ناقصًا أو صفحة الوصول مربكة، تصبح الزيادة في الإنفاق مجرد زيادة في الهدر.</p><p>لذلك نربط القناة بالرسالة والجمهور والتحويل والمتابعة حتى نعرف ما الذي يعمل ولماذا.</p></div></div></section>

      <section className="pa-channels shell"><div className="pa-section-head"><div><span className="pa-label">[ اختيار القناة ]</span><h2>Google يلتقط الطلب.<br/><em>Meta يصنع الاهتمام.</em></h2></div><p>لا نختار المنصة لأنها الأكثر انتشارًا، بل لأنها تناسب نية العميل ومرحلة القرار.</p></div><div className="pa-channel-grid">{channels.map((item, index) => <article key={item[0]}><span>0{index + 1}</span><h3>{item[0]}</h3><p>{item[1]}</p></article>)}</div></section>

      <section className="pa-scope"><div className="shell"><div className="pa-section-head"><div><span className="pa-label">[ نطاق الإدارة ]</span><h2>حملات تخدم الهدف.<br/><em>لا قائمة منصات.</em></h2></div><p>نحدد المزيج حسب البيانات والميزانية والسوق، ونبني الاختبارات بالتدريج.</p></div><div className="pa-scope-grid">{scope.map((item, index) => <article key={item[0]}><b>{String(index + 1).padStart(2,"0")}</b><h3>{item[0]}</h3><p>{item[1]}</p></article>)}</div></div></section>

      <section className="pa-journey shell" id="journey"><div className="pa-section-head"><div><span className="pa-label">[ من الإنفاق إلى النتيجة ]</span><h2>كل خطوة تحمي الميزانية.<br/><em>وكل رقم يقود إلى قرار.</em></h2></div><p>نحوّل إدارة الإعلانات من رد فعل يومي إلى نظام اختبار وقياس وتحسين.</p></div><div className="pa-journey-list">{journey.map((item) => <article key={item[0]}><span>{item[0]}</span><h3>{item[1]}</h3><p>{item[2]}</p></article>)}</div></section>

      <section className="pa-measure"><div className="shell pa-measure-grid"><div><span className="pa-label">[ القياس الحقيقي ]</span><h2>لا نحتفل بعدد النقرات.<br/><em>نقيس قيمة النتيجة.</em></h2></div><div className="pa-measure-list">{metrics.map((item, index) => <p key={item}><span>{String(index + 1).padStart(2,"0")}</span>{item}</p>)}</div></div></section>

      <section className="pa-deliverables shell"><div className="pa-section-head"><div><span className="pa-label">[ ما الذي تستلمه ]</span><h2>إدارة كاملة.<br/><em>ورؤية أوضح.</em></h2></div><p>تعرف أين تذهب الميزانية، وما الذي يتم اختباره، وما القرار التالي.</p></div><div className="pa-deliverables-list">{deliverables.map((item, index) => <div key={item}><b>{String(index + 1).padStart(2,"0")}</b><p>{item}</p></div>)}</div></section>

      <section className="pa-fit"><div className="shell pa-fit-grid"><div><span className="pa-label">[ لمن تناسب الخدمة ]</span><h2>عندما تصبح الإعلانات<br/><em>استثمارًا يحتاج إدارة.</em></h2></div><div>{fitFor.map((item) => <p key={item}>{item}</p>)}</div></div></section>

      <section className="pa-cluster shell" aria-labelledby="pa-cluster-title">
        <div className="pa-cluster-head"><div><span className="pa-label">[ قبل تشغيل الميزانية ]</span><h2 id="pa-cluster-title">اختر القناة وافهم التكلفة.<em>ثم شخّص التحويل.</em></h2></div><p>ثلاثة أدلة تربط قرار الإعلان بالميزانية والقناة والصفحة، بدل التعامل مع كل جزء بمعزل عن الآخر.</p></div>
        <div className="pa-guide-grid">{paidAdsGuides.map((guide) => <Link className="pa-guide-card" href={guide.href} key={guide.href}><small>{guide.label}</small><h3>{guide.title}</h3><p>{guide.text}</p><span>اقرأ الدليل ↗</span></Link>)}</div>
        <div className="pa-offer-row"><div className="pa-offer-copy"><small>لو تحتاج بداية محددة</small><h3>باقة إطلاق Google Ads</h3><p>حملة Search واحدة بنطاق واضح، بحث كلمات وإعلانات وكلمات سلبية وتتبع تحويل أساسي، بدون خلطها بإدارة شهرية كاملة.</p></div><Link className="pa-offer-price-card" href="/offers/google-ads-launch"><GoogleAdsLaunchPrice /><b>شاهد العرض ↗</b></Link></div>
      </section>

      <section className="pa-faq shell"><div className="pa-section-head"><div><span className="pa-label">[ أسئلة شائعة ]</span><h2>قبل إطلاق الميزانية.</h2></div><p>إجابات مباشرة عن الميزانية والمدة والتصميم والتتبع.</p></div><div className="pa-faq-grid">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}</div></section>

      <section className="pa-final shell"><div><span className="pa-label">[ الخطوة التالية ]</span><h2>أرسل حسابك الحالي<br/><em>أو تفاصيل النشاط.</em></h2></div><div><p>سنحدد الهدف والقناة وميزانية الاختبار ونقطة القياس التي يجب أن تبدأ منها الحملة.</p><Link className="button primary" href="/contact">ابدأ مراجعة حملتك <span>←</span></Link></div></section>
      <Footer />
    </main>
  );
}
