import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../../components/site-shell";
import { createMetadata, organizationId, siteUrl } from "../../lib/seo";
import { LandingOfferPrice } from "../../offers/landing-page-package/localized-landing-offer";
import { SmallWebsitePrice } from "../../offers/small-business-website/localized-small-website";
import "../guides.css";
import "./website-cost-guide.css";

const title = "كم تكلفة تصميم موقع إلكتروني في السعودية؟";
const description = "دليل أسعار تصميم المواقع في السعودية: سعر صفحة الهبوط وموقع الشركة، وما الذي يرفع تكلفة إنشاء موقع إلكتروني، وكيف تقارن بين عروض شركات تصميم المواقع.";

export const metadata: Metadata = createMetadata({
  title: "تكلفة تصميم موقع إلكتروني في السعودية | الأسعار والعوامل",
  description,
  path: "/guides/website-design-cost-saudi-arabia",
  keywords: [
    "تكلفة تصميم موقع إلكتروني",
    "تكلفة تصميم موقع إلكتروني في السعودية",
    "أسعار تصميم المواقع",
    "أسعار تصميم المواقع الإلكترونية",
    "أسعار تصميم المواقع في السعودية",
    "سعر تصميم موقع إلكتروني",
    "سعر تصميم موقع في السعودية",
    "سعر تصميم موقع شركة",
    "تكلفة إنشاء موقع إلكتروني",
    "تكلفة موقع شركة",
    "شركة تصميم مواقع",
    "تصميم موقع شركة",
  ],
});

const faqs = [
  {
    question: "كم سعر تصميم موقع إلكتروني في السعودية؟",
    answer: "السعر يتغير حسب نوع الموقع وعدد الصفحات أو القوالب وكتابة المحتوى والتصميم والتكاملات واللغات وSEO والقياس. صفحة هبوط بعرض واحد أقل نطاقًا من موقع شركة متعدد الصفحات، بينما المتجر أو المنصة يحتاجان وظائف واختبارات أوسع.",
  },
  {
    question: "كم سعر تصميم موقع شركة؟",
    answer: "سعر موقع الشركة لا يتحدد بعدد الصفحات وحده. يجب معرفة هل السعر يشمل كتابة المحتوى، تصميم الجوال، صفحات الخدمات، النماذج أو واتساب، SEO الأساسي، التحليلات، اللغات، والاستضافة والدعم بعد الإطلاق.",
  },
  {
    question: "ما الفرق بين سعر صفحة هبوط وسعر موقع شركة؟",
    answer: "صفحة الهبوط تركز على عرض واحد وإجراء واحد، لذلك يكون نطاقها أصغر عادةً. موقع الشركة يحتاج صفحات ومسارات أكثر، وهيكلة للمحتوى والخدمات والثقة وSEO، وقد يحتاج تكاملات وإدارة محتوى أوسع.",
  },
  {
    question: "هل الدومين والاستضافة داخل سعر تصميم الموقع؟",
    answer: "ليس دائمًا. يجب أن يوضح العرض هل يشمل تسجيل الدومين والاستضافة وشهادة SSL والبريد المهني والتجديد السنوي، ومن يملك الحسابات بعد التسليم.",
  },
  {
    question: "هل كتابة المحتوى وSEO ضمن سعر تصميم الموقع؟",
    answer: "يختلف ذلك بين الشركات. اطلب توضيحًا مكتوبًا لما يشمله السعر: هيكلة الصفحات، كتابة النصوص، العناوين والوصف، Schema، السرعة، تجربة الجوال، وربط التحليلات والتحويلات.",
  },
  {
    question: "هل الموقع الرخيص كافٍ في البداية؟",
    answer: "قد يكون كافيًا إذا كان نطاقه واضحًا ويؤدي وظيفة محددة. يصبح الاختيار مكلفًا عندما تضطر لإعادة البناء بسبب ضعف السرعة أو تجربة الجوال أو المحتوى أو القياس أو صعوبة الإدارة.",
  },
  {
    question: "كم يستغرق إنشاء موقع شركة؟",
    answer: "يتأثر الوقت بعدد الصفحات وسرعة توفير المحتوى والموافقات والتكاملات. الموقع التعريفي المنظم أسرع من متجر كبير أو منصة تحتاج منطقًا مخصصًا واختبارات متعددة.",
  },
];

const decisionCards = [
  {
    eyebrow: "حملة أو خدمة واحدة",
    title: "صفحة هبوط",
    text: "مناسبة عندما تريد تحويل زيارات الإعلان أو البحث إلى واتساب أو نموذج ضمن عرض واحد واضح.",
    href: "/offers/landing-page-package",
    cta: "راجع صفحة الهبوط",
  },
  {
    eyebrow: "شركة صغيرة أو متوسطة",
    title: "موقع شركة",
    text: "مناسب عندما تحتاج عرض الخدمات، بناء الثقة، الظهور في البحث، ومسار تواصل واضح عبر عدة صفحات.",
    href: "/offers/small-business-website",
    cta: "راجع الموقع الصغير",
  },
  {
    eyebrow: "وظائف أو عمليات خاصة",
    title: "موقع مخصص",
    text: "مناسب للحجوزات المعقدة أو المتاجر أو التكاملات أو الأنظمة التي تحتاج منطقًا واختبارات خارج نطاق الموقع التعريفي.",
    href: "/website-design",
    cta: "ناقش النطاق المخصص",
  },
];

export default function WebsiteDesignCostGuide() {
  const url = `${siteUrl}/guides/website-design-cost-saudi-arabia`;
  const whatsappHref = "https://wa.me/97339066649?text=" + encodeURIComponent("مرحبًا ديوانك، أريد معرفة النطاق والسعر المناسب لتصميم موقعي. نشاطي هو: ");

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: title,
        description,
        inLanguage: "ar-SA",
        datePublished: "2026-08-03",
        dateModified: "2026-08-14",
        mainEntityOfPage: url,
        author: { "@id": organizationId },
        publisher: { "@id": organizationId },
        about: [
          "تكلفة تصميم موقع إلكتروني",
          "أسعار تصميم المواقع في السعودية",
          "سعر تصميم موقع شركة",
          "تكلفة إنشاء موقع إلكتروني",
          "شركة تصميم مواقع",
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "الرئيسية", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "أدلة النمو", item: `${siteUrl}/guides` },
          { "@type": "ListItem", position: 3, name: title, item: url },
        ],
      },
    ],
  };

  return (
    <main className="guides-page website-cost-guide">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article>
        <header className="article-hero shell website-cost-hero">
          <nav className="article-breadcrumbs" aria-label="مسار الصفحة">
            <Link href="/">الرئيسية</Link><span>/</span><Link href="/guides">أدلة النمو</Link><span>/</span><span>أسعار تصميم المواقع</span>
          </nav>
          <span className="article-intent-label">أسعار تصميم المواقع في السعودية</span>
          <h1>{title}</h1>
          <p>إذا كنت تبحث عن سعر تصميم موقع إلكتروني أو تقارن بين عروض شركات تصميم المواقع، ابدأ بتحديد نوع المشروع. صفحة الهبوط، موقع الشركة، المتجر والمنصة المخصصة ليست نفس المنتج ولا يجب مقارنتها بالسعر وحده.</p>
          <div className="article-meta"><span>آخر تحديث: 14 أغسطس 2026</span><span>وقت القراءة: 9 دقائق</span><span>السوق: السعودية</span></div>

          <div className="website-cost-quick" aria-label="الإجابة السريعة عن تكلفة تصميم الموقع">
            <div className="website-cost-quick-copy">
              <small>الإجابة السريعة</small>
              <strong>ابدأ من نوع الموقع، ثم قارن ما يشمله السعر.</strong>
              <p>أسرع طريقة للحصول على رقم منطقي هي معرفة هل تحتاج صفحة هبوط، موقع شركة، أو نطاقًا مخصصًا. لدينا نطاقان جاهزان بأسعار واضحة، والمشاريع الأكبر تسعّر بعد تحديد الوظائف.</p>
            </div>
            <a className="button primary" href="#prices">شاهد الأسعار الجاهزة <span>↓</span></a>
          </div>
        </header>

        <div className="article-layout shell">
          <div className="article-body">
            <section id="prices" className="website-price-snapshot" aria-labelledby="website-price-snapshot-title">
              <div className="website-price-snapshot-head">
                <small>أسعار واضحة قبل طلب عرض</small>
                <h2 id="website-price-snapshot-title">كم يكلف البدء مع ديوانك؟</h2>
                <p>هذه أسعار نطاقات جاهزة فعلًا، وليست متوسطات سوقية عامة. إذا خرج مشروعك عن هذه الحدود نحدد النطاق أولًا ثم السعر.</p>
              </div>
              <div className="website-price-snapshot-grid">
                <article>
                  <span>01</span>
                  <small>عرض واحد + تحويل واحد</small>
                  <h3>صفحة هبوط احترافية</h3>
                  <LandingOfferPrice kind="base" />
                  <p>نص تسويقي، تصميم متجاوب، واتساب أو نموذج، وربط التحليلات ضمن صفحة هدفها التحويل.</p>
                  <Link className="button secondary" href="/offers/landing-page-package">شاهد ما يشمله السعر <span>←</span></Link>
                </article>
                <article>
                  <span>02</span>
                  <small>حضور شركة حتى 5 صفحات</small>
                  <h3>موقع صغير جاهز للإطلاق</h3>
                  <SmallWebsitePrice />
                  <p>موقع سريع يشرح النشاط والخدمات ويبني الثقة ويقود الزائر إلى تواصل واضح.</p>
                  <Link className="button secondary" href="/offers/small-business-website">شاهد ما يشمله السعر <span>←</span></Link>
                </article>
                <article className="website-price-custom">
                  <span>03</span>
                  <small>متجر، حجوزات أو تكاملات</small>
                  <h3>موقع أو منصة مخصصة</h3>
                  <div className="website-custom-price">حسب النطاق</div>
                  <p>نحدد الصفحات والوظائف والتكاملات واللغات قبل التسعير حتى يكون عرض السعر قابلًا للمقارنة والتنفيذ.</p>
                  <a className="button secondary" href={whatsappHref} target="_blank" rel="noopener noreferrer">اطلب تقدير النطاق <span>↗</span></a>
                </article>
              </div>
              <p className="guide-price-note">الأسعار الجاهزة المعروضة تتغير تلقائيًا حسب بلد الزائر. الدومين والاستضافة أو أي خدمات خارج النطاق توضح داخل صفحة كل عرض.</p>
            </section>

            <h2 id="choose">أي نوع موقع تحتاج قبل مقارنة السعر؟</h2>
            <div className="website-decision-grid">
              {decisionCards.map((card, index) => (
                <article key={card.title}>
                  <span>0{index + 1}</span>
                  <small>{card.eyebrow}</small>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <Link href={card.href}>{card.cta} <span>←</span></Link>
                </article>
              ))}
            </div>

            <h2 id="types">كيف تختلف تكلفة تصميم المواقع حسب نوع المشروع؟</h2>
            <div className="article-table">
              <table>
                <thead><tr><th>نوع المشروع</th><th>الهدف الأساسي</th><th>أهم عناصر التكلفة</th></tr></thead>
                <tbody>
                  <tr><td><strong>صفحة هبوط</strong></td><td>إعلان أو خدمة أو عرض واحد</td><td>البحث، النص، التصميم، النماذج والتتبع</td></tr>
                  <tr><td><strong>موقع شركة</strong></td><td>الخدمات والثقة والظهور في البحث</td><td>الصفحات، المحتوى، SEO، اللغات والتكاملات</td></tr>
                  <tr><td><strong>متجر إلكتروني</strong></td><td>بيع المنتجات وإدارة الطلبات</td><td>الكتالوج، الدفع، الشحن، الضرائب والعمليات</td></tr>
                  <tr><td><strong>منصة مخصصة</strong></td><td>حجوزات أو حسابات أو عمليات خاصة</td><td>المنطق البرمجي، الصلاحيات، الأمان والاختبارات</td></tr>
                </tbody>
              </table>
            </div>

            <section className="website-intent-answers" aria-labelledby="intent-answers-title">
              <small>أسئلة السعر الأكثر شيوعًا</small>
              <h2 id="intent-answers-title">ما الذي تقصده فعلًا عندما تبحث عن «سعر تصميم موقع»؟</h2>
              <div>
                <article><h3>سعر تصميم موقع شركة</h3><p>لا تقارن عدد الصفحات فقط. قارن هيكلة الخدمات، كتابة المحتوى، تجربة الجوال، SEO، التحليلات، النماذج أو واتساب، والملكية بعد التسليم.</p></article>
                <article><h3>تكلفة إنشاء موقع إلكتروني</h3><p>التكلفة ليست التصميم وحده. قد تشمل التطوير، إعداد المحتوى، الدومين، الاستضافة، الأدوات الخارجية، وربط التحليلات أو CRM حسب المشروع.</p></article>
                <article><h3>أسعار شركات تصميم المواقع</h3><p>السعر الأرخص لا يعني عرضًا مماثلًا. ضع العروض جنبًا إلى جنب بنفس البنود قبل الحكم: ماذا يشمل؟ ماذا لا يشمل؟ ومن يملك الحسابات والكود أو المنصة؟</p></article>
              </div>
            </section>

            <h2 id="factors">7 عوامل تحدد تكلفة إنشاء الموقع</h2>
            <h3>1. الهدف التجاري</h3><p>موقع هدفه إثبات الوجود يختلف عن موقع مطلوب منه توليد استفسارات أو حجوزات أو مبيعات. كلما كان الهدف أوضح، أمكن توجيه الميزانية لما يؤثر فعلًا.</p>
            <h3>2. التصميم المخصص أم القالب</h3><p>القالب يقلل وقت التنفيذ، لكنه قد يفرض قيودًا على الهوية وتجربة الاستخدام. التصميم المخصص يحتاج قرارات أكثر ويكون منطقيًا عندما تكون الثقة والتميّز والتحويل جزءًا من قيمة المشروع.</p>
            <h3>3. كتابة المحتوى واللغات</h3><p>كتابة النصوص وتنظيم الرسائل وتجهيز الصور والترجمة تؤثر في التكلفة. الموقع ثنائي اللغة يحتاج أكثر من ترجمة حرفية، خصوصًا في اتجاه العرض والكلمات المستخدمة لكل سوق.</p>
            <h3>4. الوظائف والتكاملات</h3><p>الدفع، الشحن، الحجز، CRM، واتساب، البريد والتحليلات تضيف وقتًا للتنفيذ والاختبار. اطلب تحديد كل تكامل بالاسم ورسوم الأدوات الخارجية إن وجدت.</p>
            <h3>5. SEO والسرعة والقياس</h3><p>تهيئة العناوين والبنية وSchema وتجربة الجوال والسرعة وربط GA4 والتحويلات يجب أن تدخل في الحساب من البداية. لو عندك موقع قائم وتريد تشخيصه قبل إعادة البناء، راجع <Link href="/offers/seo-audit">عرض فحص SEO وAEO</Link>.</p>
            <h3>6. لوحة الإدارة</h3><p>اسأل من سيضيف الخدمات أو المنتجات بعد التسليم. سهولة الإدارة والتدريب تقلل اعتمادك على المطور في كل تعديل صغير.</p>
            <h3>7. الدعم والملكية</h3><p>يجب أن يوضح الاتفاق ملكية الدومين والاستضافة والحسابات، وفترة إصلاح الأخطاء، وما يُعد تعديلًا جديدًا برسوم إضافية.</p>

            <section className="website-scope-check" aria-labelledby="scope-check-title">
              <small>لا تقارن رقمين قبل توحيد النطاق</small>
              <h2 id="scope-check-title">ما الذي يجب أن يشمله عرض تصميم الموقع؟</h2>
              <div className="website-scope-list">
                <span>هيكلة الصفحات</span><span>تصميم الجوال</span><span>كتابة المحتوى</span><span>SEO الأساسي</span><span>السرعة</span><span>GA4 والتحويلات</span><span>نماذج أو واتساب</span><span>الملكية والتسليم</span><span>الدعم والمراجعات</span>
              </div>
            </section>

            <h2 id="compare">كيف تقارن بين أسعار شركات تصميم المواقع؟</h2>
            <ul>
              <li>قارن نطاق العمل بندًا بندًا، وليس الرقم النهائي فقط.</li>
              <li>اطلب مواقع حقيقية تعمل على الجوال بدل الاكتفاء بصور التصميم.</li>
              <li>تأكد من وجود CTA ونماذج أو واتساب وربط للتحويلات.</li>
              <li>اسأل هل كتابة المحتوى وSEO الأساسي ضمن السعر أم منفصلان.</li>
              <li>تحقق من السرعة والاستضافة وملكية الدومين والحسابات.</li>
              <li>اعرف عدد جولات المراجعة وما الذي يندرج تحت الدعم بعد التسليم.</li>
              <li>اربط الدفعات بمراحل واضحة يمكن مراجعتها.</li>
            </ul>

            <section className="guide-lead-bridge website-lead-bridge" aria-labelledby="quote-check-title">
              <small>تحويل البحث عن السعر إلى قرار واضح</small>
              <h2 id="quote-check-title">أرسل نشاطك، ونحدد لك نوع الموقع قبل السعر.</h2>
              <p>اكتب نوع النشاط + السوق + الهدف + الصفحات المتوقعة + اللغات + أي حجز أو دفع أو CRM. بهذه البيانات نقدر نحدد هل تحتاج صفحة هبوط، موقع شركة صغيرًا، أم مشروعًا مخصصًا.</p>
              <div className="guide-lead-actions">
                <a className="button primary" href={whatsappHref} target="_blank" rel="noopener noreferrer">اعرف النطاق المناسب عبر واتساب <span>↗</span></a>
                <Link className="button secondary" href="/website-design">راجع خدمة تصميم المواقع <span>←</span></Link>
              </div>
              <small className="guide-lead-note">محادثة أولية لتحديد النطاق، بدون التزام.</small>
            </section>

            <h2 id="mistakes">متى يصبح الموقع الأرخص هو الأغلى؟</h2>
            <p>عندما يطلق الموقع ببطء على الهاتف، أو بدون محتوى واضح، أو بدون قياس للتحويلات، أو على حسابات لا تملكها، قد تضطر لإعادة العمل. السعر المنخفض ليس المشكلة. المشكلة هي <strong>النطاق الغامض الذي لا يحدد ما الذي يجب أن يحققه الموقع.</strong></p>

            <h2 id="methodology">كيف نتعامل مع أرقام التكلفة في هذا الدليل؟</h2>
            <p>لا نضع متوسطات سوقية عامة على أنها سعر ثابت. الأسعار الجاهزة أعلاه مرتبطة بعروض محددة ومخرجات واضحة من ديوانك. أما المتاجر والمنصات والمشاريع متعددة اللغات أو ذات التكاملات الخاصة فتحتاج تحديد نطاق العمل أولًا، لأن مقارنة رقم بلا نطاق قد تكون مضللة.</p>

            <h2 id="brief">ما الذي ترسله للحصول على سعر أدق؟</h2>
            <p>أرسل نوع النشاط، السوق، الهدف الرئيسي، الصفحات المتوقعة، اللغات، الوظائف المطلوبة، أمثلة تعجبك والموعد المستهدف. وإذا كان لديك موقع بالفعل لكن الزيارات لا تتحول إلى استفسارات، ابدأ بدليل <Link href="/guides/why-website-does-not-generate-leads">لماذا موقعك لا يجلب عملاء؟</Link> قبل التفكير في إعادة بنائه بالكامل.</p>

            <section className="article-faq" id="faq">
              <h2>أسئلة شائعة عن أسعار تصميم المواقع</h2>
              {faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
            </section>

            <section className="article-cta">
              <h2>تريد معرفة تكلفة موقعك بدل قراءة متوسطات عامة؟</h2>
              <p>أرسل لنا نشاطك وهدف الموقع، ونحدد معك هل تحتاج Landing Page، موقع شركة صغيرًا، أم نطاقًا مخصصًا.</p>
              <a className="button primary" href={whatsappHref} target="_blank" rel="noopener noreferrer">ناقش موقعك عبر واتساب <span>↗</span></a>
            </section>
          </div>

          <aside className="article-side" aria-label="محتويات الدليل">
            <b>في هذا الدليل</b>
            <a href="#prices">الأسعار الجاهزة</a>
            <a href="#choose">اختيار نوع الموقع</a>
            <a href="#types">تكلفة كل نوع</a>
            <a href="#factors">عوامل التكلفة</a>
            <a href="#compare">مقارنة عروض الشركات</a>
            <a href="#methodology">منهجية الأسعار</a>
            <a href="#brief">تجهيز طلب السعر</a>
            <a href="#faq">الأسئلة الشائعة</a>
            <a className="button primary" href={whatsappHref} target="_blank" rel="noopener noreferrer">اسأل عن سعر موقعك</a>
          </aside>
        </div>
      </article>
      <Footer />
    </main>
  );
}
