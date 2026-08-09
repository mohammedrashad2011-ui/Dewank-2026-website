import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../../components/site-shell";
import { createMetadata, organizationId, siteUrl } from "../../lib/seo";
import { GoogleAdsLaunchLink, GoogleAdsLaunchPrice } from "./localized-google-ads-launch";
import "../offers-page.css";
import "../offer-trust.css";
import "./google-ads-launch.css";

const title = "إطلاق Google Ads بـ 790 ريال | حملة بحث جاهزة";
const description = "باقة إطلاق Google Ads للشركات والمشاريع: بحث كلمات، إعداد حملة Search، كتابة الإعلانات، الكلمات السلبية، تتبع تحويل أساسي وإطلاق منظم دون إدارة شهرية.";

export const metadata: Metadata = createMetadata({
  title: `${title} | ديوانك`,
  description,
  path: "/offers/google-ads-launch",
  keywords: ["إعداد حملة جوجل ادز", "إطلاق Google Ads", "سعر إدارة جوجل ادز", "إعلانات بحث جوجل", "Google Ads السعودية", "إعداد حملة بحث جوجل", "إعلانات جوجل للشركات"],
});

const deliverables = [
  ["مراجعة سريعة للحساب والهدف", "نراجع النشاط والصفحة الحالية والهدف الرئيسي قبل بناء الحملة، حتى لا يبدأ الإنفاق على مسار غير واضح."],
  ["بحث كلمات بنية شراء", "نختار حتى 20 كلمة أساسية مرتبطة بطلب الخدمة أو الشراء، مع استبعاد العبارات العامة التي تستهلك الميزانية بلا فائدة."],
  ["حملة Search واحدة", "إعداد حملة بحث واحدة تشمل حتى مجموعتين إعلانيتين، مع ضبط الموقع واللغة والجداول والإعدادات الأساسية."],
  ["كتابة الإعلانات", "صياغة عناوين وأوصاف مناسبة لإعلانات البحث، مع أصول إضافية مثل الروابط والوصف المختصر عند ملاءمتها."],
  ["كلمات سلبية مبدئية", "إنشاء قائمة بداية للكلمات السلبية لتقليل الزيارات غير المناسبة قبل الإطلاق."],
  ["تتبع تحويل أساسي", "ربط هدف رئيسي واحد مثل واتساب أو نموذج أو مكالمة عندما تكون البنية التقنية والصفحة الحالية تسمح بذلك."],
  ["فحص قبل الإطلاق", "مراجعة الروابط والميزانية والمواقع والكلمات والإعلانات وإعدادات القياس قبل تشغيل الحملة."],
  ["7 أيام متابعة تقنية", "نتأكد بعد الإطلاق أن الحملة تعمل والتتبع يسجل بشكل صحيح ونعالج أخطاء الإعداد الأساسية إن ظهرت."],
];

const faqs = [
  ["ماذا تشمل باقة إطلاق Google Ads؟", "تشمل إعداد وإطلاق حملة Google Search واحدة حتى مجموعتين إعلانيتين، بحث الكلمات، كتابة الإعلانات، الكلمات السلبية الأساسية، وتتبع تحويل رئيسي واحد عند توفر المتطلبات التقنية."],
  ["هل تشمل الباقة ميزانية الإعلانات؟", "لا. مبلغ 790 ريال هو أجر إعداد وإطلاق الحملة، أما الميزانية الإعلانية فتدفعها مباشرة إلى Google حسب المبلغ الذي تختاره."],
  ["هل تشمل إدارة الحملة لمدة شهر؟", "لا. الباقة مخصصة للتأسيس والإطلاق مع متابعة تقنية لمدة 7 أيام. الإدارة والتحسين المستمر بعد ذلك خدمة شهرية منفصلة."],
  ["هل تشمل تصميم Landing Page؟", "لا. يجب أن يكون لديك موقع أو صفحة مناسبة لاستقبال الزائر. إذا كانت الصفحة الحالية غير مناسبة للتحويل يمكن إضافة خدمة صفحة هبوط بشكل منفصل."],
  ["هل الباقة مناسبة لأي نشاط؟", "هي أنسب للأنشطة التي يبحث العملاء عن خدماتها أو منتجاتها بالفعل على Google. بعض الأنشطة قد تستفيد أكثر من Meta Ads أو من بناء صفحة هبوط أولًا."],
  ["ما المطلوب قبل البدء؟", "حساب Google Ads صالح للدفع، صفحة أو موقع يعمل، وصول مناسب للحساب والقياس، وعرض أو خدمة واضحة نريد الإعلان عنها."],
  ["كم يستغرق الإعداد؟", "عادة من يومين إلى 4 أيام عمل بعد استلام الصلاحيات والمعلومات واعتماد الكلمات والرسائل الإعلانية."],
];

export default function GoogleAdsLaunchOffer() {
  const url = `${siteUrl}/offers/google-ads-launch`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "باقة إطلاق Google Ads",
        description,
        serviceType: ["Google Ads Setup", "Google Search Ads", "Conversion Tracking"],
        provider: { "@id": organizationId },
        areaServed: ["SA", "BH", "AE", "KW", "QA", "OM"],
        offers: { "@type": "Offer", price: "790", priceCurrency: "SAR", availability: "https://schema.org/InStock", url },
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
          { "@type": "ListItem", position: 3, name: "إطلاق Google Ads", item: url },
        ],
      },
    ],
  };

  return (
    <main className="inner-page offers-page google-ads-page">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="shell offer-detail-hero google-ads-hero">
        <div>
          <div className="offer-availability"><span className="offer-spots-available"><i aria-hidden="true" /><strong>2–4</strong> أيام عمل</span></div>
          <h1>ابدأ Google Ads.<br/><em>من غير ما تحرق الميزانية في البداية.</em></h1>
          <p>نجهز لك حملة بحث واضحة من الصفر: كلمات بنية شراء، إعلانات مناسبة، كلمات سلبية، إعداد قياس أساسي، وفحص كامل قبل الإطلاق.</p>
          <div className="google-ads-answer" aria-label="الإجابة المختصرة">
            <b>الإجابة المختصرة</b>
            <span>هذه باقة تأسيس وإطلاق، وليست إدارة شهرية. مناسبة لو عندك صفحة جاهزة وتريد تشغيل Google Search بطريقة منظمة بدل البدء بإعدادات عشوائية.</span>
          </div>
        </div>
        <aside className="offer-price-panel google-ads-price-panel">
          <small>باقة الإطلاق</small>
          <GoogleAdsLaunchPrice />
          <div className="offer-trust-inline"><span>حملة Search</span><span>تتبع تحويل</span><span>7 أيام متابعة تقنية</span></div>
          <p>ميزانية الإعلان تُدفع إلى Google مباشرة. لا تشمل الباقة Landing Page جديدة أو إدارة وتحسين شهري مستمر.</p>
          <GoogleAdsLaunchLink className="button primary" label="ابدأ حملة Google Ads" />
        </aside>
      </section>

      <section className="shell google-ads-proof">
        <div className="google-ads-proof-copy">
          <span className="section-label">[ ماذا نبني؟ ]</span>
          <h2>من بحث العميل.<br/>إلى خطوة قابلة للقياس.</h2>
          <p>نرتب الرحلة الأساسية بحيث يظهر الإعلان عندما يبحث العميل عن الخدمة، يصل إلى صفحتك الحالية، ثم نسجل الإجراء الأهم مثل واتساب أو النموذج أو المكالمة.</p>
        </div>
        <div className="google-search-card" aria-label="نموذج مبسط لرحلة إعلان بحث Google">
          <div className="google-search-top"><span>Google Search</span><small>نموذج توضيحي</small></div>
          <div className="google-search-query">شركة تصميم مواقع في السعودية</div>
          <div className="google-search-ad">
            <small>إعلان · dewank.com</small>
            <h3>موقع احترافي يساعدك تحول الزيارات إلى فرص بيع</h3>
            <p>حل واضح، صفحة مناسبة، وقياس للنتيجة بدل صرف ميزانية من دون معرفة ما الذي يحدث بعد النقرة.</p>
          </div>
          <div className="google-search-path"><span>بحث</span><span>إعلان</span><span>صفحتك</span><span>تحويل</span></div>
        </div>
      </section>

      <section className="shell offer-deliverables google-ads-deliverables">
        <div><span className="section-label">[ ماذا تستلم؟ ]</span><h2>حملة جاهزة للإطلاق.<br/>بنطاق واضح.</h2><p>نحدد الحدود من البداية حتى لا تتحول باقة التأسيس إلى إدارة شهرية غير محسوبة.</p></div>
        <div className="deliverable-list">{deliverables.map(([item, text]) => <article className="deliverable-item" key={item}><b>{item}</b><p>{text}</p></article>)}</div>
      </section>

      <section className="shell google-ads-fit">
        <div className="google-ads-fit-head"><span className="section-label">[ هل تناسبك؟ ]</span><h2>ليست كل حملة تحتاج نفس البداية.</h2></div>
        <div className="offer-fit-grid">
          <article className="offer-fit-card good"><h3>مناسبة لك إذا</h3><ul><li>لديك صفحة أو موقع جاهز</li><li>الناس تبحث عن خدمتك على Google</li><li>تريد حملة Search محددة بدل إعدادات واسعة</li><li>تحتاج تأسيسًا صحيحًا قبل الإدارة الشهرية</li></ul></article>
          <article className="offer-fit-card limits"><h3>تحتاج خدمة أكبر إذا</h3><ul><li>تحتاج Landing Page جديدة</li><li>تريد إدارة وتحسينًا يوميًا لمدة شهر</li><li>تحتاج حملات متعددة أو أسواق كثيرة</li><li>تحتاج Performance Max أو Shopping أو تكاملات قياس معقدة</li></ul></article>
        </div>
      </section>

      <section className="shell google-ads-process">
        <div className="google-ads-process-head"><span className="section-label">[ طريقة التنفيذ ]</span><h2>نفهم الطلب. نختار الكلمات. نبني. ثم نطلق.</h2></div>
        <div className="google-ads-process-grid">
          <article><b>01</b><h3>تحديد الهدف</h3><p>نختار التحويل الرئيسي والعرض والسوق والصفحة التي ستستقبل الزيارات.</p></article>
          <article><b>02</b><h3>بحث الكلمات</h3><p>نرتب الكلمات حسب نية البحث ونستبعد ما قد يستهلك الميزانية دون جدوى.</p></article>
          <article><b>03</b><h3>بناء الحملة</h3><p>نكتب الإعلانات ونضبط الاستهداف والكلمات السلبية والقياس الأساسي.</p></article>
          <article><b>04</b><h3>الإطلاق والفحص</h3><p>نراجع كل شيء قبل التشغيل ثم نتابع الجانب التقني خلال أول 7 أيام.</p></article>
        </div>
      </section>

      <section className="shell offer-confidence google-ads-confidence">
        <div><span className="section-label">[ حدود الباقة ]</span><h2>790 ريال للتأسيس والإطلاق،<br/>وليس لإدارة شهر كامل.</h2></div>
        <div className="offer-confidence-list">
          <p><b>لا تشمل:</b> ميزانية Google، تصميم Landing Page، إدارة شهرية، تصميمات Display أو فيديو، Merchant Center، أو تكاملات CRM وقياس متقدمة.</p>
          <p><b>المطلوب:</b> حساب Google Ads صالح للدفع، صفحة تعمل، وصول للحساب والقياس، وخدمة أو عرض واضح نعلن عنه.</p>
          <p><b>بعد الإطلاق:</b> يمكنك إدارة الحملة داخليًا أو طلب خدمة إدارة شهرية منفصلة إذا أردت تحسينًا مستمرًا.</p>
        </div>
      </section>

      <section className="shell offer-faq google-ads-faq" id="faq">
        <div><span className="section-label">[ أسئلة سريعة ]</span><h2>قبل ما تبدأ.</h2></div>
        <div className="offer-faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="shell offer-final-cta google-ads-final">
        <div><span className="section-label">[ جاهز للإطلاق؟ ]</span><h2>خلّي أول صرف على Google<br/>يبدأ بإعداد محسوب.</h2><p>أرسل لنا نشاطك، السوق المستهدف، ورابط الصفحة الحالية ونراجع ملاءمتها قبل بدء الحملة.</p></div>
        <GoogleAdsLaunchLink className="button primary" label="ابدأ عبر واتساب" />
        <div className="google-ads-links"><Link href="/offers/landing-page-package">تحتاج صفحة هبوط أولًا؟</Link><Link href="/services">شاهد خدمات التسويق الأخرى</Link></div>
      </section>

      <Footer />
    </main>
  );
}
