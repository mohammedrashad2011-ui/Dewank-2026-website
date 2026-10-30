import type { Metadata } from "next";
import Link from "next/link";
import OffersMotionStage from "./offers-motion-stage";
import OffersMotionDirector from "./offers-motion-director";
import OffersDecisionPanel, { type OfferChoice } from "../../components/offers-decision-panel";
import { Footer, Header } from "../../components/site-shell";
import { createMetadata, siteUrl } from "../../lib/seo";
import { LocalizedOfferPrice } from "./localized-offer";
import { LandingOfferPrice } from "./landing-page-package/localized-landing-offer";
import { SeoAuditOfferPrice } from "./seo-audit/localized-seo-audit-offer";
import { BrandNamingOfferPrice } from "./brand-naming/localized-brand-naming-offer";
import { WhatsAppStarterPrice } from "./whatsapp-automation-starter/localized-whatsapp-starter";
import { MiniIdentityPrice } from "./mini-visual-identity/localized-mini-identity";
import { GoogleAdsLaunchPrice } from "./google-ads-launch/localized-google-ads-launch";
import { InstagramUpgradePrice } from "./instagram-14-day-upgrade/localized-instagram-upgrade";
import { SmallWebsitePrice } from "./small-business-website/localized-small-website";
import "./offers-page.css";
import "./landing-offer.css";
import "./seo-audit/seo-audit-offer.css";
import "./brand-naming/brand-naming-offer.css";
import "./whatsapp-automation-starter/whatsapp-starter.css";
import "./mini-visual-identity/mini-visual-identity.css";
import "./google-ads-launch/google-ads-launch.css";
import "./instagram-14-day-upgrade/instagram-upgrade.css";
import "./small-business-website/small-business-website.css";
import { CroPackagePrice } from "../conversion-rate-optimization/cro-packages";
import "../conversion-rate-optimization/cro.css";
import "./offer-trust.css";
import "./offers-overview.css";
import "./offers-overview-refine.css";
import "./offers-motion-stage.css";
import "./offers-cinematic-grid.css";
import "../../components/offers-decision-panel.css";

const offerChoices: OfferChoice[] = [
  { id: "30-day-content-package", title: "باقة محتوى شهر كامل", filter: "content" },
  { id: "landing-page-package", title: "باقة صفحة الهبوط", filter: "web conversion" },
  { id: "seo-audit", title: "فحص SEO وAEO", filter: "web" },
  { id: "brand-naming", title: "باقة اختيار الاسم التجاري", filter: "brand" },
  { id: "whatsapp-automation-starter", title: "باقة واتساب التأسيسية", filter: "automation" },
  { id: "mini-visual-identity", title: "باقة الهوية البصرية المصغرة", filter: "brand" },
  { id: "google-ads-launch", title: "باقة إطلاق Google Ads", filter: "ads" },
  { id: "instagram-14-day-upgrade", title: "تطوير إنستجرام خلال 14 يوم", filter: "content" },
  { id: "small-business-website", title: "باقة الموقع الصغير", filter: "web" },
  { id: "cro-snapshot", title: "فحص التحويل وتدقيق المسار", filter: "web conversion" },
];


const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "ما الفرق بين العروض والخدمة الكاملة؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "كل عرض له نطاق محدد وسعر يبدأ منه، وتجد في صفحته ما يشمله وما لا يشمله. الخدمات الأوسع، مثل إدارة السوشيال ميديا الشهرية أو إدارة الحملات، تُناقش بشكل منفصل."
      }
    },
    {
      "@type": "Question",
      "name": "كيف أختار العرض المناسب لي؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "اختر حسب هدفك: محتوى، إعلانات، موقع، هوية، أو أتمتة. ولو لم تحدد هدفك بعد، أرسل نشاطك والنتيجة التي تريدها عبر واتساب، ونرشح لك البداية الأنسب."
      }
    },
    {
      "@type": "Question",
      "name": "هل الأسعار المعروضة نهائية؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "السعر الظاهر في كل بطاقة هو سعر البداية، وتفاصيل كل عرض وما يشمله موضحة في صفحته. وقد تختلف الأسعار حسب السوق وطبيعة المشروع، وتؤكد قبل بدء التنفيذ."
      }
    },
    {
      "@type": "Question",
      "name": "كم تستغرق مدة التنفيذ؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "تختلف المدة حسب العرض، وتظهر على كل بطاقة. تتراوح بين يومين و14 يوم عمل تقريبًا، ويبدأ التنفيذ بعد استلام المعلومات المطلوبة."
      }
    },
    {
      "@type": "Question",
      "name": "هل تشمل الأسعار الدومين أو الاستضافة أو رسوم واتساب؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "في أغلب العروض لا تشمل. رسوم الدومين والاستضافة وأدوات واتساب ومنصات الإعلانات تكون منفصلة، ونوضحها قبل بدء أي تنفيذ."
      }
    },
    {
      "@type": "Question",
      "name": "هل تضمنون نتائج المبيعات أو ترتيب البحث؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "لا نضمن أرقام المبيعات أو ترتيب محركات البحث، لكن كل عرض يحدد مخرجاته بوضوح، ونلتزم بالنطاق المتفق عليه."
      }
    }
  ]
};

export const metadata: Metadata = createMetadata({
  title: "عروض ديوانك | محتوى ومواقع وSEO وهوية وأتمتة وإعلانات",
  description: "اكتشف عروض ديوانك الجاهزة: محتوى شهري، صفحات هبوط، SEO، اختيار اسم، واتساب أوتوميشن، هوية بصرية، Google Ads، تطوير إنستجرام، وموقع صغير جاهز للإطلاق.",
  path: "/offers",
  keywords: ["عروض تسويق رقمي", "باقة محتوى انستقرام", "تطوير حساب انستقرام", "تصميم موقع شركة", "موقع صغير للشركات", "تصميم صفحة هبوط", "فحص SEO للموقع", "واتساب أوتوميشن", "إعداد حملة Google Ads"],
});

export default function OffersPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "عروض ديوانك",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "باقة محتوى إنستقرام لمدة شهر", url: `${siteUrl}/offers/30-day-content-package` },
      { "@type": "ListItem", position: 2, name: "باقة تصميم صفحة هبوط احترافية", url: `${siteUrl}/offers/landing-page-package` },
      { "@type": "ListItem", position: 3, name: "فحص SEO شامل للموقع", url: `${siteUrl}/offers/seo-audit` },
      { "@type": "ListItem", position: 4, name: "اختيار اسم تجاري + توجه أولي للعلامة", url: `${siteUrl}/offers/brand-naming` },
      { "@type": "ListItem", position: 5, name: "باقة واتساب أوتوميشن Starter", url: `${siteUrl}/offers/whatsapp-automation-starter` },
      { "@type": "ListItem", position: 6, name: "باقة هوية بصرية مصغرة", url: `${siteUrl}/offers/mini-visual-identity` },
      { "@type": "ListItem", position: 7, name: "باقة إطلاق Google Ads", url: `${siteUrl}/offers/google-ads-launch` },
      { "@type": "ListItem", position: 8, name: "تطوير حساب إنستجرام خلال 14 يوم", url: `${siteUrl}/offers/instagram-14-day-upgrade` },
      { "@type": "ListItem", position: 9, name: "موقع صغير جاهز للإطلاق", url: `${siteUrl}/offers/small-business-website` },
      { "@type": "ListItem", position: 10, name: "فحص التحويل وتدقيق المسار", url: `${siteUrl}/conversion-rate-optimization` },
    ],
  };

  return (
    <main className="inner-page offers-page offers-overview-page">
      <Header />
      <OffersMotionDirector />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <OffersMotionStage locale="ar" />

      <section id="offers-explore" className="offers-filter-shell" aria-label="تصفية عروض ديوانك حسب نوع الخدمة">
        <input defaultChecked type="radio" name="offers-filter" id="offers-all" />
        <input type="radio" name="offers-filter" id="offers-content" />
        <input type="radio" name="offers-filter" id="offers-ads" />
        <input type="radio" name="offers-filter" id="offers-web" />
        <input type="radio" name="offers-filter" id="offers-conversion" />
        <input type="radio" name="offers-filter" id="offers-brand" />
        <input type="radio" name="offers-filter" id="offers-automation" />

        <div className="shell offers-filter-bar">
          <div className="offers-filter-copy"><small>اختيار سريع</small><strong>صفّي العروض حسب احتياجك</strong></div>
          <div className="offers-filter-controls" role="group" aria-label="أنواع العروض">
            <label htmlFor="offers-all">الكل</label>
            <label htmlFor="offers-content">محتوى وإنستجرام</label>
            <label htmlFor="offers-ads">إعلانات</label>
            <label htmlFor="offers-web">مواقع وSEO</label>
            <label htmlFor="offers-conversion">تحسين التحويل</label>
            <label htmlFor="offers-brand">هوية وبراند</label>
            <label htmlFor="offers-automation">أتمتة</label>
          </div>
        </div>

        <OffersDecisionPanel locale="ar" offers={offerChoices} />

        <section className="shell offers-grid offers-grid-nine offers-overview-grid" aria-label="عروض ديوانك الحالية">
          <article data-filter="content" data-category="محتوى" className="offer-card compact-offer-card offer-priority">
            <Link className="offer-card-hit" href="/offers/30-day-content-package" aria-label="شاهد تفاصيل باقة محتوى شهر كامل" />
            <div className="offer-availability"><span className="offer-spots-available"><i aria-hidden="true" /><strong>10–14</strong> يوم عمل</span></div>
            <h2>محتوى شهر كامل<br/><em>جاهز للنشر</em></h2>
            <p>12 بوستًا، 3 ستوري، ريل واحد، أفكار وكابشنات وخطة نشر ليظهر حسابك بصورة متناسقة بدل النشر العشوائي.</p>
            <div className="offer-card-meta"><div><small>السعر التأسيسي</small><LocalizedOfferPrice /></div><span className="button primary">التفاصيل <span>←</span></span></div>
          </article>

          <article data-filter="web conversion" data-category="ويب وتحويل" className="offer-card compact-offer-card landing-offer-card offer-priority">
            <Link className="offer-card-hit" href="/offers/landing-page-package" aria-label="شاهد تفاصيل باقة صفحة الهبوط" />
            <div className="offer-availability"><span className="offer-spots-available"><i aria-hidden="true" /><strong>7–10</strong> أيام عمل</span></div>
            <h2>صفحة واحدة<br/><em>تحوّل الزائر إلى عميل</em></h2>
            <p>صفحة هبوط مخصصة تشمل النص التسويقي والتصميم وربط واتساب والنماذج والتحليلات، مع خيار كامل للدومين والاستضافة.</p>
            <div className="offer-card-meta"><div><small>الباقة الأساسية من</small><LandingOfferPrice kind="base" /></div><span className="button primary">التفاصيل <span>←</span></span></div>
          </article>

          <article data-filter="web" data-category="SEO وتحليل" className="offer-card compact-offer-card seo-audit-offer-card">
            <Link className="offer-card-hit" href="/offers/seo-audit" aria-label="شاهد تفاصيل فحص SEO الشامل" />
            <div className="offer-availability"><span className="offer-spots-available"><i aria-hidden="true" /><strong>48</strong> ساعة للتسليم</span></div>
            <h2>اعرف المشكلة<br/><em>قبل أن تزيد الميزانية</em></h2>
            <p>فحص SEO وAEO شامل يكشف مشاكل الفهرسة والسرعة والمحتوى والكلمات والتحويل، مع تقرير PDF وخطة تحسين مرتبة لمدة 30 يومًا.</p>
            <div className="offer-card-meta"><div><small>فحص شامل من</small><SeoAuditOfferPrice /></div><span className="button primary">التفاصيل <span>←</span></span></div>
          </article>

          <article data-filter="brand" data-category="براند" className="offer-card compact-offer-card brand-naming-offer-card">
            <Link className="offer-card-hit" href="/offers/brand-naming" aria-label="شاهد تفاصيل باقة اختيار الاسم التجاري" />
            <div className="offer-availability"><span className="offer-spots-available"><i aria-hidden="true" /><strong>3–5</strong> أيام عمل</span></div>
            <h2>اسم يعلق<br/><em>واتجاه يبني العلامة</em></h2>
            <p>10–15 اسمًا مدروسًا، فحص مبدئي للمعنى والتشابه والدومين، أفضل 3 ترشيحات، وتوجه أولي للعلامة للاسم المختار.</p>
            <div className="offer-card-meta"><div><small>الباقة الجاهزة من</small><BrandNamingOfferPrice /></div><span className="button primary">التفاصيل <span>←</span></span></div>
          </article>

          <article data-filter="automation" data-category="أتمتة" className="offer-card compact-offer-card whatsapp-starter-offer-card">
            <Link className="offer-card-hit" href="/offers/whatsapp-automation-starter" aria-label="شاهد تفاصيل باقة واتساب أوتوميشن" />
            <div className="offer-availability"><span className="offer-spots-available"><i aria-hidden="true" /><strong>3–5</strong> أيام عمل</span></div>
            <h2>واتساب يرد<br/><em>ويؤهّل قبل الموظف</em></h2>
            <p>مسار تأسيسي للرد على الأسئلة، جمع بيانات العميل، تأهيله، متابعته، ثم تحويله للموظف المناسب بدل ضياع المحادثات.</p>
            <div className="offer-card-meta"><div><small>باقة التأسيس من</small><WhatsAppStarterPrice /></div><span className="button primary">التفاصيل <span>←</span></span></div>
          </article>

          <article data-filter="brand" data-category="هوية" className="offer-card compact-offer-card mini-identity-offer-card">
            <Link className="offer-card-hit" href="/offers/mini-visual-identity" aria-label="شاهد تفاصيل باقة الهوية البصرية المصغرة" />
            <div className="offer-availability"><span className="offer-spots-available"><i aria-hidden="true" /><strong>7–10</strong> أيام عمل</span></div>
            <h2>شكل واحد<br/><em>يتعرف عليك الناس به</em></h2>
            <p>شعار أساسي ونسخة مبسطة، ألوان وخطوط وتوجه بصري و3 تطبيقات عملية، لتبدأ علامتك بصورة متماسكة بدل التصميم العشوائي.</p>
            <div className="offer-card-meta"><div><small>الباقة المصغرة من</small><MiniIdentityPrice /></div><span className="button primary">التفاصيل <span>←</span></span></div>
          </article>

          <article data-filter="ads" data-category="إعلانات" className="offer-card compact-offer-card google-ads-offer-card offer-priority">
            <Link className="offer-card-hit" href="/offers/google-ads-launch" aria-label="شاهد تفاصيل باقة إطلاق Google Ads" />
            <div className="offer-availability"><span className="offer-spots-available"><i aria-hidden="true" /><strong>2–4</strong> أيام عمل</span></div>
            <h2>ابدأ Google Ads<br/><em>بإعداد محسوب</em></h2>
            <p>حملة Search واحدة، بحث كلمات بنية شراء، كتابة الإعلانات، كلمات سلبية، تتبع تحويل أساسي وفحص قبل الإطلاق. باقة تأسيس وليست إدارة شهرية.</p>
            <div className="offer-card-meta"><div><small>باقة الإطلاق من</small><GoogleAdsLaunchPrice /></div><span className="button primary">التفاصيل <span>←</span></span></div>
          </article>

          <article data-filter="content" data-category="إنستجرام" className="offer-card compact-offer-card instagram-upgrade-offer-card">
            <Link className="offer-card-hit" href="/offers/instagram-14-day-upgrade" aria-label="شاهد تفاصيل تطوير حساب إنستجرام خلال 14 يوم" />
            <div className="instagram-card-topline"><span className="instagram-platform-badge"><span className="instagram-platform-icon" aria-hidden="true" />إنستجرام</span><span className="offer-spots-available"><i aria-hidden="true" /><strong>14</strong> يوم تطوير مركز</span></div>
            <h2>طوّر حساب إنستجرام<br/><em>واجعله يقنع العميل</em></h2>
            <p>مراجعة شاملة، تحسين البايو والـCTA والهايلايتس، محاور محتوى وتوجه بصري، 6 تصميمات وخطة تنفيذ لمدة 14 يومًا.</p>
            <div className="offer-card-meta"><div><small>باقة تطوير إنستجرام من</small><InstagramUpgradePrice /></div><span className="button primary">التفاصيل <span>←</span></span></div>
          </article>

          <article data-filter="web" data-category="مواقع" className="offer-card compact-offer-card small-website-offer-card">
            <Link className="offer-card-hit" href="/offers/small-business-website" aria-label="شاهد تفاصيل باقة الموقع الصغير" />
            <div className="offer-availability"><span className="offer-spots-available"><i aria-hidden="true" /><strong>حتى 5</strong> صفحات</span></div>
            <h2>موقع صغير<br/><em>جاهز للإطلاق</em></h2>
            <p>حتى 5 صفحات، تصميم وتطوير متجاوب، واتساب ونموذج تواصل، تحليلات وSEO أساسي، ومراجعة كاملة قبل الإطلاق.</p>
            <div className="offer-card-meta"><div><small>باقة الموقع من</small><SmallWebsitePrice /></div><span className="button primary">التفاصيل <span>←</span></span></div>
          </article>

          <article data-filter="web conversion" data-category="تدقيق وتحويل" className="offer-card compact-offer-card cro-offer-card">
            <Link className="offer-card-hit" href="/conversion-rate-optimization#pricing" aria-label="شاهد باقات فحص التحويل وتدقيق المسار" />
            <div className="offer-availability"><span className="offer-spots-available"><i aria-hidden="true" /><strong>3</strong> باقات لمرة واحدة</span></div>
            <h2>فحص التحويل وتدقيق المسار<br/><em>اعرف أين تتوقف الزيارات</em></h2>
            <p>ثلاث باقات محددة الحدود، من فحص صفحة واحدة إلى تحليل مسار أوسع. كل باقة تحدد ما تشمله ومدة تسليمها قبل الدفع.</p>
            <div className="offer-card-meta"><div><small>يبدأ من</small><CroPackagePrice offerKey="cro-snapshot" /></div><span className="button primary">الباقات <span>←</span></span></div>
          </article>

          <aside className="offers-note offers-overview-note"><div><small>لم تقرر بعد؟</small><h2>أخبرنا بهدفك<br/>ونرشح لك البداية المناسبة</h2><p>أرسل نشاطك وهدفك لنرشح العرض الأقرب قبل الاتفاق على النطاق والسعر.</p></div><a className="button primary" href={"https://wa.me/97339066649?text=" + encodeURIComponent("مرحبًا ديوانك، أحتاج مساعدة في اختيار عرض مناسب. نشاطي: . هدفي: ")} target="_blank" rel="noopener noreferrer">ناقش العرض على واتساب <span>↗</span></a></aside>
        </section>
      </section>
      <section className="shell offer-faq offers-hub-faq" id="offers-faq" aria-labelledby="offers-faq-title">
        <div className="offer-faq-head"><span className="section-label">أسئلة شائعة</span><h2 id="offers-faq-title">أسئلة قبل أن تختار</h2><p>إجابات مختصرة عن العروض والأسعار ومدة التنفيذ.</p></div>
        <div className="offer-faq-list">
          <details><summary>ما الفرق بين العروض والخدمة الكاملة؟</summary><p>كل عرض له نطاق محدد وسعر يبدأ منه، وتجد في صفحته ما يشمله وما لا يشمله. الخدمات الأوسع، مثل إدارة السوشيال ميديا الشهرية أو إدارة الحملات، تُناقش بشكل منفصل.</p></details>
          <details><summary>كيف أختار العرض المناسب لي؟</summary><p>اختر حسب هدفك: محتوى، إعلانات، موقع، هوية، أو أتمتة. ولو لم تحدد هدفك بعد، أرسل نشاطك والنتيجة التي تريدها عبر واتساب، ونرشح لك البداية الأنسب.</p></details>
          <details><summary>هل الأسعار المعروضة نهائية؟</summary><p>السعر الظاهر في كل بطاقة هو سعر البداية، وتفاصيل كل عرض وما يشمله موضحة في صفحته. وقد تختلف الأسعار حسب السوق وطبيعة المشروع، وتؤكد قبل بدء التنفيذ.</p></details>
          <details><summary>كم تستغرق مدة التنفيذ؟</summary><p>تختلف المدة حسب العرض، وتظهر على كل بطاقة. تتراوح بين يومين و14 يوم عمل تقريبًا، ويبدأ التنفيذ بعد استلام المعلومات المطلوبة.</p></details>
          <details><summary>هل تشمل الأسعار الدومين أو الاستضافة أو رسوم واتساب؟</summary><p>في أغلب العروض لا تشمل. رسوم الدومين والاستضافة وأدوات واتساب ومنصات الإعلانات تكون منفصلة، ونوضحها قبل بدء أي تنفيذ.</p></details>
          <details><summary>هل تضمنون نتائج المبيعات أو ترتيب البحث؟</summary><p>لا نضمن أرقام المبيعات أو ترتيب محركات البحث، لكن كل عرض يحدد مخرجاته بوضوح، ونلتزم بالنطاق المتفق عليه.</p></details>
        </div>
      </section>
      <Footer />
    </main>
  );
}
