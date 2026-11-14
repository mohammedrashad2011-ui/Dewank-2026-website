import Link from "next/link";
import { Footer, Header } from "../../../components/site-shell";
import { Footer as EnglishFooter } from "../../../(en)/en/_en/parity/footer";
import { Header as EnglishHeader } from "../../../(en)/en/_en/parity/header";
import { organizationId, servedMarkets, serviceId, siteUrl } from "../../../lib/seo";
import { offerPricing } from "../offer-pricing";
import { videoFaq, videoPackages } from "./video-offer-content";
import VideoOrderWidget from "./video-order-widget";
import VideoHeroPlayer from "./video-hero-player";
import "./video-offer.css";

type Locale = "ar" | "en";

const copy = {
  ar: {
    breadcrumb: "العروض",
    home: "الرئيسية",
    crumb: "إنتاج الفيديو",
    eyebrow: "DEWANK / VIDEO STUDIO",
    title: "فيديوهات قصيرة.",
    titleAccent: "فكرة قوية. أثر أوضح.",
    intro: "إنتاج ريلز وفيديوهات AI وإعلانات قصيرة للشركات والمتاجر. سواء لديك لقطات جاهزة أو تبدأ بفكرة، نختار أسلوب الإنتاج الذي يخدم رسالتك وميزانيتك.",
    cta: "اكتشف الباقات",
    secondaryCta: "أرسل تفاصيل مشروعك",
    heroFacts: ["3 طرق إنتاج", "نطاق واضح", "جاهز للسوشيال والإعلانات"],
    visualTag: "تصوّر إبداعي",
    visualDisclaimer: "عرض تصميمي توضيحي، وليس عيّنة مشروع منفّذ أو فيديو قابل للتشغيل.",
    visualLabel: "FRAME / 01",
    whyTitle: "لا تبدأ باختيار الأداة.",
    whyAccent: "ابدأ بالنتيجة.",
    whyIntro: "العميل لا يحتاج معرفة برنامج المونتاج أو مولّد المشاهد. يحتاج فيديو يتحدث إلى جمهوره ويصلح للمنصة المستهدفة. لذلك نحدد مسار الإنتاج قبل التنفيذ.",
    pathways: [
      ["لديك تصوير", "نختار المونتاج", "نحوّل خاماتك إلى ريلز بإيقاع واضح وترجمة وهوية متسقة."],
      ["لديك فكرة أو منتج", "نختار AI أو الموشن", "نصمم مشاهد بصرية من الصفر دون اشتراط جلسة تصوير."],
      ["تريد الإعلان", "نبدأ بالعرض والرسالة", "نكتب افتتاحية وخطوة تالية واضحة ونبني الكرياتيف حولهما."],
    ],
    pricingEyebrow: "PACKAGES / 03",
    pricingTitle: "باقات واضحة،",
    pricingAccent: "من أول فيديو.",
    pricingIntro: "اختَر الأنسب لطريقة الإنتاج. الأسعار المعروضة أسعار بداية محددة النطاق، وتُعتمد التكلفة النهائية قبل التنفيذ.",
    howEyebrow: "THE PROCESS",
    howTitle: "من الفكرة إلى ملف جاهز للنشر.",
    steps: [
      ["01", "شاركنا الفكرة", "أرسل النشاط والهدف وأي خامات أو أمثلة تعجبك."],
      ["02", "نعتمد الاتجاه", "نحدد السكريبت والأسلوب البصري والنطاق والسعر قبل الإنتاج."],
      ["03", "ننتج ونراجع", "نجهز النسخ المطلوبة مع جولة تعديل ضمن النطاق المتفق عليه."],
    ],
    boundariesTitle: "وضوح قبل الإنتاج",
    boundaries: ["لا يشمل السعر تصويرًا ميدانيًا أو إدارة الحملات الإعلانية.", "أي شخصيات مخصصة أو مشاهد معقدة أو تراخيص إضافية تُسعَّر مسبقًا.", "لا نستخدم صورة أو صوت شخص حقيقي دون موافقته وحقوق استخدام مناسبة.", "لا نضمن عدد مشاهدات أو مبيعات؛ نلتزم بتسليم الفيديوهات المتفق عليها."],
    faqEyebrow: "GOOD TO KNOW",
    faqTitle: "أسئلة قبل أن تبدأ",
    closeTitle: "فيديوك القادم يبدأ بقرار واحد.",
    closeIntro: "اختر باقتك وشاركنا هدفك. سنرد بتأكيد النطاق والتكلفة والمدة قبل أي التزام.",
    closeCta: "ابدأ طلب الفيديو",
    related: "قد تحتاج أيضًا",
    relatedContent: "إدارة محتوى السوشيال ميديا",
    relatedAds: "الإعلانات المدفوعة",
    relatedHrefContent: "/services/social-media-content",
    relatedHrefAds: "/paid-ads",
  },
  en: {
    breadcrumb: "Offers",
    home: "Home",
    crumb: "Video production",
    eyebrow: "DEWANK / VIDEO STUDIO",
    title: "Short-form video.",
    titleAccent: "Clear idea. Stronger impact.",
    intro: "Short-form Reels, AI video production and ad creatives for brands, shops and service businesses. From your footage or a fresh concept, we choose the production route that fits your message and budget.",
    cta: "Explore the packages",
    secondaryCta: "Send your project brief",
    heroFacts: ["3 production paths", "Defined scope", "Social and ads ready"],
    visualTag: "Creative direction preview",
    visualDisclaimer: "Illustrative concept only, not a completed client project or playable video.",
    visualLabel: "FRAME / 01",
    whyTitle: "Do not start with the tool.",
    whyAccent: "Start with the outcome.",
    whyIntro: "You should not need to choose a video generator or editing app. You need a video that speaks to your buyers and suits its destination. We choose the right production approach first.",
    pathways: [
      ["You have footage", "We edit it", "Turn your recordings into sharply paced, captioned, branded Reels."],
      ["You have an idea", "We create with AI or motion", "Design a visual story from scratch without an on-site film shoot."],
      ["You need an ad", "We build around the offer", "Start with a hook, a relevant message and a clear next step."],
    ],
    pricingEyebrow: "PACKAGES / 03",
    pricingTitle: "Clear packages.",
    pricingAccent: "From the first frame.",
    pricingIntro: "Choose how you want to produce. Prices are scoped starting points, and the final quote is confirmed before work begins.",
    howEyebrow: "THE PROCESS",
    howTitle: "From idea to publish-ready video.",
    steps: [
      ["01", "Share the brief", "Tell us about the business, goal, footage and any visual references."],
      ["02", "Approve the direction", "We confirm scripts, style, scope and price before production."],
      ["03", "Create and review", "Receive the agreed formats and one scoped revision round."],
    ],
    boundariesTitle: "Clear from the start",
    boundaries: ["On-site filming and media-buying services are not included.", "Complex characters, scenes and additional licences are scoped separately.", "Real people's voices or likenesses require consent and appropriate rights.", "No guaranteed views or sales; we commit to the agreed deliverables."],
    faqEyebrow: "GOOD TO KNOW",
    faqTitle: "Before you order",
    closeTitle: "Your next video starts with one decision.",
    closeIntro: "Select a package and share your goal. We confirm the scope, price and delivery before any commitment.",
    closeCta: "Start your video brief",
    related: "You may also need",
    relatedContent: "Social media content",
    relatedAds: "Paid advertising",
    relatedHrefContent: "/en/social-media-content",
    relatedHrefAds: "/en/paid-advertising",
  },
} as const;

export default function VideoOfferPage({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const t = copy[locale];
  const urlPath = ar ? "/offers/ai-video-production" : "/en/offers/ai-video-production";
  const url = siteUrl + urlPath;
  const faq = videoFaq[locale];
  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": serviceId(urlPath),
        name: ar ? "إنتاج فيديوهات إعلانية قصيرة وريلز بالذكاء الاصطناعي" : "Short-form video ads, Reels editing and AI video production",
        alternateName: ar ? "تصميم فيديوهات AI ومونتاج ريلز" : "AI Video Production and Reels Editing",
        description: t.intro,
        serviceType: ["Short-form video production", "Reels editing", "AI video production", "Video advertising creatives"],
        provider: { "@id": organizationId },
        areaServed: servedMarkets,
        inLanguage: locale,
        url,
        offers: videoPackages.map((item) => ({
          "@type": "Offer",
          name: item[locale].title,
          description: item[locale].description,
          url: url + "#video-packages",
          price: String(offerPricing[item.priceKey].initial.amount),
          priceCurrency: "SAR",
          priceSpecification: {
            "@type": "PriceSpecification",
            price: String(offerPricing[item.priceKey].initial.amount),
            priceCurrency: "SAR",
            description: ar ? "سعر بداية لنطاق محدد، يُؤكَّد قبل التنفيذ" : "Starting price for defined scope, confirmed before production",
          },
        })),
      },
      {
        "@type": "FAQPage",
        "@id": url + "#faq",
        inLanguage: locale,
        mainEntity: faq.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t.home, item: ar ? siteUrl : siteUrl + "/en" },
          { "@type": "ListItem", position: 2, name: t.breadcrumb, item: ar ? siteUrl + "/offers" : siteUrl + "/en/offers" },
          { "@type": "ListItem", position: 3, name: t.crumb, item: url },
        ],
      },
    ],
  };

  return (
    <main id="main-content" className="inner-page offers-page vop" lang={locale} dir={ar ? "rtl" : "ltr"}>
      {ar ? <Header /> : <EnglishHeader />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }} />
      <div className="vop-background">
        <section className="vop-hero shell" aria-labelledby="vop-h1">
          <div className="vop-hero-copy">
            <nav className="vop-breadcrumb" aria-label={ar ? "مسار التنقل" : "Breadcrumb"}>
              <Link href={ar ? "/" : "/en"}>{t.home}</Link><span aria-hidden="true">/</span>
              <Link href={ar ? "/offers" : "/en/offers"}>{t.breadcrumb}</Link><span aria-hidden="true">/</span><span aria-current="page">{t.crumb}</span>
            </nav>
            <span className="vop-eyebrow">{t.eyebrow}</span>
            <h1 id="vop-h1">{t.title}<span>{t.titleAccent}</span></h1>
            <p className="vop-lead">{t.intro}</p>
            <div className="vop-hero-ctas">
              <a className="vop-button vop-button-primary" href="#video-packages">{t.cta}<span aria-hidden="true">↗</span></a>
              <a className="vop-button vop-button-ghost" href="#video-brief">{t.secondaryCta}</a>
            </div>
            <ul className="vop-hero-facts">{t.heroFacts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
          </div>
          <VideoHeroPlayer locale={locale} />
        </section>
      </div>

      <section className="vop-pathways shell" aria-labelledby="vop-why">
        <div className="vop-section-heading">
          <span className="vop-eyebrow">THE CREATIVE APPROACH</span>
          <h2 id="vop-why">{t.whyTitle}<span>{t.whyAccent}</span></h2>
          <p>{t.whyIntro}</p>
        </div>
        <div className="vop-path-grid">{t.pathways.map(([overline, title, description], index) => (
          <article key={title} className="vop-path">
            <span className="vop-path-number">0{index + 1}</span><small>{overline}</small>
            <h3>{title}</h3><p>{description}</p>
          </article>
        ))}</div>
      </section>

      <section className="vop-commerce" id="video-packages" aria-labelledby="vop-pricing-h">
        <div className="shell">
          <div className="vop-section-heading vop-pricing-heading">
            <span className="vop-eyebrow">{t.pricingEyebrow}</span>
            <h2 id="vop-pricing-h">{t.pricingTitle}<span>{t.pricingAccent}</span></h2>
            <p>{t.pricingIntro}</p>
          </div>
          <VideoOrderWidget locale={locale} />
        </div>
      </section>

      <section className="vop-process shell" aria-labelledby="vop-process-h">
        <div className="vop-section-heading">
          <span className="vop-eyebrow">{t.howEyebrow}</span>
          <h2 id="vop-process-h">{t.howTitle}</h2>
        </div>
        <ol className="vop-steps">{t.steps.map(([num, title, description]) => (
          <li key={num}><span>{num}</span><h3>{title}</h3><p>{description}</p></li>
        ))}</ol>
        <div className="vop-boundaries">
          <h3>{t.boundariesTitle}</h3>
          <ul>{t.boundaries.map((value) => <li key={value}>{value}</li>)}</ul>
        </div>
      </section>

      <section className="vop-faq-shell" id="video-faq" aria-labelledby="vop-faq-h">
        <div className="shell vop-faq-layout">
          <div className="vop-section-heading">
            <span className="vop-eyebrow">{t.faqEyebrow}</span>
            <h2 id="vop-faq-h">{t.faqTitle}</h2>
          </div>
          <div className="vop-faq-list">{faq.map(([question, answer]) => (
            <details key={question}><summary>{question}</summary><p>{answer}</p></details>
          ))}</div>
        </div>
      </section>

      <section className="vop-last shell">
        <div><span className="vop-eyebrow">NEXT FRAME</span><h2>{t.closeTitle}</h2><p>{t.closeIntro}</p>
          <a className="vop-button vop-button-primary" href="#video-brief">{t.closeCta}<span aria-hidden="true">↗</span></a>
        </div>
        <aside className="vop-related"><small>{t.related}</small>
          <Link href={t.relatedHrefContent}>{t.relatedContent}<span aria-hidden="true">↗</span></Link>
          <Link href={t.relatedHrefAds}>{t.relatedAds}<span aria-hidden="true">↗</span></Link>
        </aside>
      </section>
      {ar ? <Footer /> : <EnglishFooter />}
    </main>
  );
}
