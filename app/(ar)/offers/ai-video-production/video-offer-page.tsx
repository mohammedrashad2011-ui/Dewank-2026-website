import Link from "next/link";
import { Footer, Header } from "../../../components/site-shell";
import { Footer as EnglishFooter } from "../../../(en)/en/_en/parity/footer";
import { Header as EnglishHeader } from "../../../(en)/en/_en/parity/header";
import { organizationId, servedMarkets, serviceId, siteUrl } from "../../../lib/seo";
import { offerPricing } from "../offer-pricing";
import { videoFaq, videoPackages } from "./video-offer-content";
import VideoOrderWidget from "./video-order-widget";
import VideoHeroPlayer from "./video-hero-player";
import VideoOfferFromPrice from "./video-offer-from-price";
import "./video-studio.css";

type Locale = "ar" | "en";

const copy = {
  ar: {
    breadcrumb: "العروض",
    home: "الرئيسية",
    crumb: "إنتاج الفيديو",
    eyebrow: "ديوانك · استوديو الفيديو",
    title: "ريلز وفيديوهات AI وإعلانات قصيرة",
    titleAccent: "من فكرتك إلى فيديو جاهز للنشر",
    intro: "ثلاث باقات واضحة للشركات والمتاجر في السعودية والخليج: مونتاج لقطاتك، إنتاج فيديو AI من الصفر، أو إعلانات قصيرة بافتتاحية وخطوة واضحة. نؤكد النطاق والسعر قبل البدء.",
    from: "3 باقات تبدأ من",
    cta: "اختر باقتك",
    secondaryCta: "أرسل تفاصيل مشروعك",
    heroFacts: ["نطاق محدد لكل باقة", "جولة تعديل ضمن الباقة", "تأكيد السعر قبل التنفيذ"],
    pricingEyebrow: "الباقات",
    pricingTitle: "اختر طريقة الإنتاج",
    pricingAccent: "التي تناسب ما لديك",
    pricingIntro: "لا تحتاج إلى اختيار برنامج أو أداة. اختر حسب ما تملكه الآن: تصوير جاهز، فكرة، أو عرض تريد بيعه.",
    howEyebrow: "طريقة العمل",
    howTitle: "من الطلب إلى ملف جاهز للنشر",
    steps: [
      ["01", "شاركنا الفكرة", "أرسل النشاط والهدف وأي خامات أو أمثلة تعجبك."],
      ["02", "نعتمد الاتجاه", "نحدد السكريبت والأسلوب البصري والنطاق والسعر قبل الإنتاج."],
      ["03", "ننتج ونراجع", "نجهز النسخ المطلوبة مع جولة تعديل ضمن النطاق المتفق عليه."],
    ],
    boundariesTitle: "ما لا تشمله الباقات",
    boundaries: ["التصوير الميداني وإدارة الحملات الإعلانية خدمات منفصلة.", "الشخصيات المخصصة والمشاهد المعقدة والتراخيص الإضافية تُسعَّر مسبقًا.", "لا نستخدم صورة أو صوت شخص حقيقي دون موافقته وحقوق استخدام مناسبة.", "لا نضمن عدد مشاهدات أو مبيعات، ونلتزم بتسليم الفيديوهات المتفق عليها."],
    faqEyebrow: "قبل أن تطلب",
    faqTitle: "أسئلة عن إنتاج الفيديو",
    closeTitle: "فكرتك. لقطتنا القادمة.",
    closeIntro: "اختر باقتك وشاركنا هدفك. نرد بتأكيد النطاق والتكلفة والمدة قبل أي التزام.",
    closeCta: "ابدأ طلب الفيديو",
    related: "قد تحتاج أيضًا",
    links: [["إدارة محتوى السوشيال ميديا", "/services/social-media-content"], ["الإعلانات المدفوعة", "/paid-ads"], ["كل عروض ديوانك", "/offers"]],
  },
  en: {
    breadcrumb: "Offers",
    home: "Home",
    crumb: "Video production",
    eyebrow: "DEWANK · VIDEO STUDIO",
    title: "Reels, AI videos and short video ads",
    titleAccent: "From your idea to a publish-ready video",
    intro: "Three clear packages for brands and shops in Saudi Arabia and the GCC: we edit your footage, produce AI video from scratch, or build short ads with a hook and a clear next step. Scope and price are confirmed before work starts.",
    from: "3 packages, from",
    cta: "Choose your package",
    secondaryCta: "Send your project brief",
    heroFacts: ["A defined scope per package", "A revision round included", "Price confirmed before production"],
    pricingEyebrow: "PACKAGES",
    pricingTitle: "Choose the production route",
    pricingAccent: "that fits what you have",
    pricingIntro: "You do not need to pick an app or a tool. Choose by what you have now: footage, an idea, or an offer you want to sell.",
    howEyebrow: "HOW IT WORKS",
    howTitle: "From brief to a publish-ready file",
    steps: [
      ["01", "Share the brief", "Tell us about the business, goal, footage and any visual references."],
      ["02", "Approve the direction", "We confirm scripts, style, scope and price before production."],
      ["03", "Create and review", "Receive the agreed formats and one scoped revision round."],
    ],
    boundariesTitle: "What the packages do not include",
    boundaries: ["On-site filming and media buying are separate services.", "Custom characters, complex scenes and extra licences are quoted in advance.", "Real people's voices or likenesses require consent and appropriate rights.", "We do not guarantee views or sales; we commit to the agreed deliverables."],
    faqEyebrow: "BEFORE YOU ORDER",
    faqTitle: "Questions about video production",
    closeTitle: "Your idea. Our next frame.",
    closeIntro: "Choose a package and share your goal. We confirm the scope, price and delivery before any commitment.",
    closeCta: "Start your video brief",
    related: "You may also need",
    links: [["Social media content", "/en/social-media-content"], ["Paid advertising", "/en/paid-advertising"], ["All Dewank offers", "/en/offers"]],
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
            description: ar ? "سعر بداية لنطاق محدد، يُؤكَّد قبل التنفيذ" : "Starting price for defined scope, confirmed before production",
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
        "@type": "VideoObject",
        "@id": url + "#studio-video",
        name: ar ? "شوريل ديوانك لإنتاج الفيديو: من الفكرة إلى الأثر" : "Dewank video production showreel: from idea to impact",
        description: ar
          ? "فيديو ترويجي مدته 25 ثانية من ديوانك يشرح ثلاث طرق للإنتاج: مونتاج الريلز، فيديوهات الذكاء الاصطناعي، والإعلانات القصيرة."
          : "A 25-second promo produced by Dewank showing three production routes: Reels editing, AI video and short-form ads.",
        thumbnailUrl: siteUrl + "/videos/dewank-showreel-2026-poster.jpg",
        uploadDate: "2026-11-15",
        duration: "PT25S",
        contentUrl: siteUrl + "/videos/dewank-showreel-2026.mp4",
        inLanguage: "ar",
        publisher: { "@id": organizationId },
        isFamilyFriendly: true,
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
    <main id="main-content" className="inner-page vs" lang={locale} dir={ar ? "rtl" : "ltr"}>
      {ar ? <Header /> : <EnglishHeader />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }} />

      <section className="vs-hero" aria-labelledby="vs-h1">
        <div className="shell vs-hero-grid">
          <div className="vs-hero-copy">
            <nav className="vs-breadcrumb" aria-label={ar ? "مسار التنقل" : "Breadcrumb"}>
              <Link href={ar ? "/" : "/en"}>{t.home}</Link><span aria-hidden="true">/</span>
              <Link href={ar ? "/offers" : "/en/offers"}>{t.breadcrumb}</Link><span aria-hidden="true">/</span><span aria-current="page">{t.crumb}</span>
            </nav>
            <span className="vs-eyebrow">{t.eyebrow}</span>
            <h1 id="vs-h1">{t.title}<em>{t.titleAccent}</em></h1>
            <p className="vs-lead">{t.intro}</p>
            <div className="vs-hero-buy">
              <div className="vs-hero-from"><small>{t.from}</small><VideoOfferFromPrice locale={locale} /></div>
              <a className="vs-button vs-button-primary" href="#video-packages">{t.cta}<span aria-hidden="true">↓</span></a>
              <a className="vs-button vs-button-ghost" href="#video-brief">{t.secondaryCta}</a>
            </div>
            <ul className="vs-hero-facts">{t.heroFacts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
          </div>
          <VideoHeroPlayer locale={locale} />
        </div>
      </section>

      <section className="vs-commerce" id="video-packages" aria-labelledby="vs-pricing-h">
        <div className="shell">
          <div className="vs-heading">
            <span className="vs-eyebrow">{t.pricingEyebrow}</span>
            <h2 id="vs-pricing-h">{t.pricingTitle} <em>{t.pricingAccent}</em></h2>
            <p>{t.pricingIntro}</p>
          </div>
          <VideoOrderWidget locale={locale} />
        </div>
      </section>

      <section className="vs-process" aria-labelledby="vs-process-h">
        <div className="shell">
          <div className="vs-heading">
            <span className="vs-eyebrow">{t.howEyebrow}</span>
            <h2 id="vs-process-h">{t.howTitle}</h2>
          </div>
          <ol className="vs-steps">{t.steps.map(([num, title, description]) => (
            <li key={num}><span>{num}</span><h3>{title}</h3><p>{description}</p></li>
          ))}</ol>
          <div className="vs-boundaries">
            <h3>{t.boundariesTitle}</h3>
            <ul>{t.boundaries.map((value) => <li key={value}>{value}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="vs-faq" id="video-faq" aria-labelledby="vs-faq-h">
        <div className="shell vs-faq-grid">
          <div className="vs-heading">
            <span className="vs-eyebrow">{t.faqEyebrow}</span>
            <h2 id="vs-faq-h">{t.faqTitle}</h2>
          </div>
          <div className="vs-faq-list">{faq.map(([question, answer]) => (
            <details key={question}><summary>{question}</summary><p>{answer}</p></details>
          ))}</div>
        </div>
      </section>

      <section className="vs-close">
        <div className="shell vs-close-grid">
          <div>
            <h2>{t.closeTitle}</h2>
            <p>{t.closeIntro}</p>
            <a className="vs-button vs-button-primary" href="#video-brief">{t.closeCta}<span aria-hidden="true">↑</span></a>
          </div>
          <aside className="vs-related"><small>{t.related}</small>
            {t.links.map(([label, href]) => <Link key={href} href={href}>{label}<span aria-hidden="true">{ar ? "←" : "→"}</span></Link>)}
          </aside>
        </div>
      </section>
      {ar ? <Footer /> : <EnglishFooter />}
    </main>
  );
}
