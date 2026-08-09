import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../../components/site-shell";
import { createMetadata, organizationId, siteUrl } from "../../lib/seo";
import { InstagramUpgradePrice, InstagramUpgradeWhatsApp } from "./localized-instagram-upgrade";
import "../offers-page.css";
import "../offer-trust.css";
import "./instagram-upgrade.css";

const title = "تطوير حساب إنستجرام خلال 14 يوم";
const description = "باقة تطوير حساب إنستجرام خلال 14 يوم تشمل مراجعة الحساب، تحسين البايو والـCTA، محاور المحتوى، الهايلايتس، التوجه البصري، 6 تصميمات وخطة تنفيذ واضحة. تبدأ من 590 ريال.";

export const metadata: Metadata = createMetadata({
  title: `${title} | ديوانك`,
  description,
  path: "/offers/instagram-14-day-upgrade",
  keywords: ["تطوير حساب انستقرام", "تحسين حساب انستقرام", "تطوير بروفايل انستقرام", "إدارة انستقرام السعودية", "بايو انستقرام احترافي", "خطة محتوى انستقرام", "تصميم انستقرام للشركات"],
});

const deliverables = [
  ["مراجعة الحساب", "نفحص البايو، الصورة، الرابط، الهايلايتس، شكل الجريد، وضوح العرض ومسار العميل من أول زيارة."],
  ["تحسين البايو والـCTA", "نعيد صياغة التعريف ودعوة الإجراء ليعرف الزائر من أنت، ماذا تقدم، وما الخطوة التالية."],
  ["محاور محتوى واضحة", "نحدد 3–5 محاور محتوى تناسب نشاطك وتوازن بين الثقة، الخبرة، الطلب والتفاعل."],
  ["ترتيب الهايلايتس", "نقترح الهيكل والأسماء والترتيب والمحتوى الأساسي للهايلايتس المهمة."],
  ["توجه بصري للحساب", "نحدد اتجاهًا بصريًا عمليًا للألوان والعناوين وأنواع المنشورات حتى يظهر الحساب بصورة متماسكة."],
  ["6 تصميمات تطبيقية", "نصمم 6 منشورات كنقطة انطلاق فعلية للتوجه الجديد، مع نصوص مختصرة مناسبة لكل منشور."],
  ["خطة 14 يومًا", "خطة تنفيذ قصيرة تحدد ما ينشر وما يتم تحسينه خلال أسبوعين بدل ترك الحساب بعد التعديل دون مسار."],
  ["مراجعة ختامية", "نراجع التطبيق في نهاية الفترة ونرسل ملاحظات التطوير التالية بحسب حالة الحساب."],
];

const faqs = [
  ["هل هذه إدارة حساب لمدة 14 يومًا؟", "لا. هي باقة تطوير مركزة للحساب خلال 14 يومًا: نراجع ونحسن ونبني اتجاهًا وخطة ونماذج تنفيذ. الإدارة اليومية والنشر المستمر خدمة منفصلة."],
  ["هل تشمل 6 تصميمات؟", "نعم، تشمل 6 تصميمات تطبيقية تعكس الاتجاه المقترح للحساب. أي كمية إضافية من المحتوى تُسعّر بشكل منفصل أو عبر باقة المحتوى الشهرية."],
  ["هل تشمل تصوير أو ريلز؟", "لا. التصوير وإنتاج الفيديو والريلز غير مشمولين في هذه الباقة، ويمكن إضافتهم حسب الحاجة."],
  ["هل تشمل الإعلانات؟", "لا. الإعلانات وإدارة الحملات خدمة مستقلة. هذه الباقة تركز على تجهيز الحساب نفسه ليكون أوضح وأقوى عند زيارة العميل له."],
  ["هل تناسب حسابًا جديدًا تمامًا؟", "إذا كان الحساب لم يبدأ بعد ولا توجد عليه بنية أو محتوى، فباقة إطلاق حساب جديد تكون أنسب. هذه الباقة موجهة أساسًا لحساب قائم يحتاج إعادة ترتيب وتطوير."],
  ["متى تبدأ مدة الـ14 يومًا؟", "تبدأ بعد استلام صلاحية الوصول أو المواد المطلوبة واعتماد المعلومات الأساسية عن النشاط والجمهور والخدمة."],
];

export default function Instagram14DayUpgradeOffer() {
  const url = `${siteUrl}/offers/instagram-14-day-upgrade`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "باقة تطوير حساب إنستجرام خلال 14 يوم",
        description,
        serviceType: ["Instagram Profile Optimization", "Social Media Content Strategy", "Social Media Design"],
        provider: { "@id": organizationId },
        areaServed: ["SA", "BH", "AE", "KW", "QA", "OM"],
        offers: { "@type": "Offer", price: "590", priceCurrency: "SAR", availability: "https://schema.org/InStock", url },
        url,
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqs.map(([question, answer]) => ({
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
          { "@type": "ListItem", position: 3, name: "تطوير حساب إنستجرام خلال 14 يوم", item: url },
        ],
      },
    ],
  };

  return (
    <main className="inner-page offers-page instagram-upgrade-page">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="shell offer-detail-hero instagram-upgrade-hero">
        <div>
          <div className="offer-availability"><span className="offer-spots-available"><i aria-hidden="true" /><strong>14</strong> يوم تطوير مركز</span></div>
          <h1>حسابك موجود.<br/><em>لكن هل يقنع العميل؟</em></h1>
          <p>نرتب حساب إنستجرام من الداخل للخارج: البايو، دعوة الإجراء، الهايلايتس، محاور المحتوى، الاتجاه البصري، ثم نعطيك 6 تصميمات وخطة تنفيذ لمدة 14 يومًا.</p>
          <div className="instagram-upgrade-answer" aria-label="الإجابة المختصرة">
            <b>الإجابة المختصرة</b>
            <span>هذه الباقة لحساب قائم يحتاج وضوحًا وشكلًا أكثر احترافية، وليست إدارة يومية للحساب ولا باقة محتوى شهر كامل.</span>
          </div>
        </div>
        <aside className="offer-price-panel instagram-upgrade-price-panel">
          <small>باقة تطوير لمدة 14 يومًا</small>
          <InstagramUpgradePrice />
          <div className="offer-trust-inline"><span>مراجعة شاملة</span><span>6 تصميمات</span><span>خطة 14 يومًا</span></div>
          <p>سعر الباقة يشمل التطوير والنماذج والخطة فقط. لا يشمل الإعلانات أو التصوير أو الإدارة اليومية المستمرة.</p>
          <InstagramUpgradeWhatsApp className="button primary" label="ابدأ تطوير الحساب" />
        </aside>
      </section>

      <section className="shell instagram-upgrade-proof">
        <div className="instagram-upgrade-proof-copy">
          <span className="section-label">[ أين تكون المشكلة؟ ]</span>
          <h2>الزائر يدخل الحساب.<br/>ويقرر خلال ثوانٍ.</h2>
          <p>لو الرسالة غير واضحة، البايو لا يقول ماذا تقدم، الهايلايتس عشوائية والجريد بلا اتجاه، قد تخسر العميل قبل أن يقرأ أي منشور. الباقة تعيد ترتيب هذه النقاط كرحلة واحدة.</p>
        </div>
        <div className="instagram-profile-card" aria-label="تصور مبسط قبل وبعد تطوير الحساب">
          <div className="instagram-profile-top"><span>Instagram Profile</span><small>14-Day Upgrade</small></div>
          <div className="instagram-profile-head"><i>DW</i><div><b>اسم واضح للنشاط</b><span>وصف مختصر + قيمة + دعوة للإجراء</span></div></div>
          <div className="instagram-profile-highlights"><span>الخدمات</span><span>النتائج</span><span>الأسئلة</span><span>تواصل</span></div>
          <div className="instagram-profile-grid">{Array.from({ length: 6 }).map((_, index) => <i key={index} />)}</div>
        </div>
      </section>

      <section className="shell offer-deliverables instagram-upgrade-deliverables">
        <div><span className="section-label">[ ماذا تستلم؟ ]</span><h2>مش تعديل شكلي.<br/>إعادة ترتيب للحساب.</h2><p>كل عنصر في الباقة له دور محدد في جعل الحساب أوضح وأسهل في التصفح واتخاذ القرار.</p></div>
        <div className="deliverable-list">{deliverables.map(([item, text]) => <article className="deliverable-item" key={item}><b>{item}</b><p>{text}</p></article>)}</div>
      </section>

      <section className="shell instagram-upgrade-fit">
        <div className="instagram-upgrade-fit-head"><span className="section-label">[ هل تناسبك؟ ]</span><h2>مناسبة لحساب قائم.<br/>وليس مشروعًا يبدأ من الصفر.</h2></div>
        <div className="offer-fit-grid">
          <article className="offer-fit-card good"><h3>مناسبة لك إذا</h3><ul><li>الحساب موجود لكن شكله غير منظم</li><li>البايو والرسالة غير واضحين</li><li>لا تعرف ماذا تنشر أو كيف ترتب المحتوى</li><li>تحتاج اتجاهًا عمليًا قبل الإدارة الشهرية</li></ul></article>
          <article className="offer-fit-card limits"><h3>اختر خدمة أخرى إذا</h3><ul><li>تحتاج إدارة ونشرًا طوال الشهر</li><li>الحساب جديد تمامًا ولم يتم إطلاقه بعد</li><li>تحتاج تصويرًا أو ريلز بكميات كبيرة</li><li>هدفك الأساسي تشغيل إعلانات مدفوعة</li></ul></article>
        </div>
      </section>

      <section className="shell instagram-upgrade-process">
        <div className="instagram-upgrade-process-head"><span className="section-label">[ الـ14 يومًا ]</span><h2>نراجع. نرتب. نصمم. نثبت الاتجاه.</h2></div>
        <div className="instagram-upgrade-process-grid">
          <article><b>اليوم 1–3</b><h3>تشخيص الحساب</h3><p>مراجعة الحساب والجمهور والعرض والمنافسين، وتحديد نقاط الخلل والأولوية.</p></article>
          <article><b>اليوم 4–6</b><h3>ترتيب البروفايل</h3><p>البايو، CTA، الهايلايتس ومحاور المحتوى والتوجه البصري الأساسي.</p></article>
          <article><b>اليوم 7–11</b><h3>التطبيق العملي</h3><p>تصميم 6 منشورات تعكس الاتجاه الجديد وتوضح كيف يستمر الحساب بصريًا ومحتوائيًا.</p></article>
          <article><b>اليوم 12–14</b><h3>الخطة والمراجعة</h3><p>تسليم خطة التنفيذ ومراجعة التعديلات الأساسية وتحديد الخطوة التالية للحساب.</p></article>
        </div>
      </section>

      <section className="shell offer-confidence instagram-upgrade-confidence">
        <div><span className="section-label">[ حدود الباقة ]</span><h2>واضحة من البداية.</h2></div>
        <div className="offer-confidence-grid">
          <article><b>تشمل</b><p>مراجعة الحساب، تحسين البايو والـCTA، تنظيم الهايلايتس، محاور المحتوى، توجه بصري، 6 تصميمات، خطة 14 يومًا ومراجعة ختامية.</p></article>
          <article><b>لا تشمل</b><p>إدارة يومية، نشر مستمر، الرد على التعليقات والرسائل، إعلانات مدفوعة، تصوير، ريلز، مؤثرين أو إنتاج محتوى شهري كامل.</p></article>
          <article><b>قبل البدء</b><p>نحتاج رابط الحساب، وصف النشاط والخدمات، السوق المستهدف، الهوية إن وجدت، وأي حسابات تراها مرجعًا مناسبًا.</p></article>
        </div>
      </section>

      <section className="shell offer-faq">
        <span className="section-label">[ أسئلة شائعة ]</span><h2>قبل أن تبدأ.</h2>
        <div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="shell offer-final instagram-upgrade-final">
        <div><small>14 DAY INSTAGRAM UPGRADE</small><h2>خلي أول زيارة للحساب<br/><em>تقول إنك مرتب وجاهز.</em></h2><p>لو الحساب قائم لكنه لا يعكس مستوى مشروعك، هذه نقطة بداية مركزة قبل أن تدفع على محتوى أكثر أو إعلانات أكثر.</p></div>
        <InstagramUpgradeWhatsApp className="button primary" label="ابدأ تطوير الحساب" />
        <div className="instagram-upgrade-links"><Link href="/offers/30-day-content-package">تحتاج محتوى شهر كامل؟</Link><Link href="/services/social-media-content">تحتاج إدارة سوشيال ميديا مستمرة؟</Link></div>
      </section>

      <Footer />
    </main>
  );
}
