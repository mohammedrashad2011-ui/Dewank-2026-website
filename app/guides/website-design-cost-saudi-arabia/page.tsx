import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../../components/site-shell";
import { createMetadata, organizationId, siteUrl } from "../../lib/seo";
import { LandingOfferPrice } from "../../offers/landing-page-package/localized-landing-offer";
import { SmallWebsitePrice } from "../../offers/small-business-website/localized-small-website";
import "../guides.css";

const title = "كم تكلفة تصميم موقع إلكتروني في السعودية؟";
const description = "دليل أسعار تصميم المواقع في السعودية: ما الذي يحدد سعر تصميم موقع إلكتروني، وكيف تقارن بين العروض، ومتى تختار صفحة هبوط أو موقع شركة متكامل.";

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
    "شركة تصميم مواقع",
    "تصميم موقع شركة",
    "تكلفة إنشاء موقع إلكتروني",
  ],
});

const faqs = [
  {
    question: "ما متوسط تكلفة تصميم موقع إلكتروني في السعودية؟",
    answer: "لا يوجد سعر واحد صالح لكل المشاريع. السعر يتغير حسب نوع الموقع وعدد القوالب والمحتوى والتكاملات ومستوى التصميم والتهيئة التقنية والدعم. الأفضل مقارنة نطاق العمل وما يحققه الموقع، وليس الرقم النهائي فقط.",
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
    question: "هل الموقع الرخيص كافٍ في البداية؟",
    answer: "قد يكون كافيًا إذا كان نطاقه واضحًا ويؤدي وظيفة محددة. يصبح الاختيار مكلفًا عندما تضطر لإعادة البناء بسبب ضعف السرعة أو تجربة الجوال أو المحتوى أو القياس أو صعوبة الإدارة.",
  },
  {
    question: "كم يستغرق إنشاء موقع شركة؟",
    answer: "يتأثر الوقت بعدد الصفحات وسرعة توفير المحتوى والموافقات والتكاملات. الموقع التعريفي المنظم أسرع من متجر كبير أو منصة تحتاج منطقًا مخصصًا واختبارات متعددة.",
  },
  {
    question: "كيف أعرف أن عرض تصميم الموقع مناسب لسعره؟",
    answer: "تأكد أن العرض يوضح الصفحات، التصميم، كتابة المحتوى، الجوال، السرعة، SEO الأساسي، التحليلات، النماذج أو واتساب، الملكية، الدعم، وعدد جولات المراجعة. أي سعر بلا نطاق واضح يصعب مقارنته.",
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
        dateModified: "2026-08-12",
        mainEntityOfPage: url,
        author: { "@id": organizationId },
        publisher: { "@id": organizationId },
        about: [
          "تكلفة تصميم موقع إلكتروني",
          "أسعار تصميم المواقع",
          "سعر تصميم موقع إلكتروني",
          "تصميم مواقع الشركات في السعودية",
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
    <main className="guides-page">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article>
        <header className="article-hero shell">
          <nav className="article-breadcrumbs" aria-label="مسار الصفحة">
            <Link href="/">الرئيسية</Link><span>/</span><Link href="/guides">أدلة النمو</Link><span>/</span><span>أسعار تصميم المواقع</span>
          </nav>
          <span className="article-intent-label">دليل أسعار تصميم المواقع في السعودية</span>
          <h1>{title}</h1>
          <p>لو تبحث عن سعر تصميم موقع إلكتروني أو تقارن بين أسعار شركات تصميم المواقع، فالمهم ليس الرقم وحده. هذا الدليل يوضح ما الذي يرفع أو يخفض التكلفة، وأي نوع موقع يناسب هدفك قبل أن تدفع.</p>
          <div className="article-meta"><span>آخر تحديث: 12 أغسطس 2026</span><span>وقت القراءة: 8 دقائق</span><span>السوق: السعودية</span></div>
        </header>

        <div className="article-layout shell">
          <div className="article-body">
            <h2 id="short-answer">كم سعر تصميم موقع إلكتروني؟ الإجابة المختصرة</h2>
            <div className="article-answer">
              <p>سعر تصميم الموقع يتحدد حسب الهدف والنطاق والوظائف. صفحة هبوط لحملة ليست مثل موقع شركة متعدد الصفحات، وموقع تعريفي ليس مثل متجر أو منصة. قارن دائمًا ما الذي ستحصل عليه مقابل السعر وما الإجراء التجاري المطلوب من الموقع.</p>
            </div>
            <p>قد تتلقى عرضين بعنوان «تصميم موقع» لكن أحدهما يشمل استراتيجية المحتوى وتجربة الجوال وSEO الأساسي وربط التحليلات، بينما الآخر يسلّم قالبًا مع تعديلات محدودة. لذلك <strong>أسعار تصميم المواقع لا تُقارن قبل توحيد نطاق العمل.</strong></p>

            <section className="guide-commercial-box" aria-labelledby="ready-prices-title">
              <div className="guide-commercial-head">
                <div>
                  <small>لو تريد رقمًا واضحًا بدل التقدير المفتوح</small>
                  <h2 id="ready-prices-title">نطاقان جاهزان للبدء.</h2>
                </div>
                <Link href="/website-design">شاهد خدمة تصميم المواقع <span>←</span></Link>
              </div>
              <div className="guide-price-grid">
                <article>
                  <small>لحملة أو خدمة واحدة</small>
                  <h3>صفحة هبوط احترافية</h3>
                  <LandingOfferPrice kind="base" />
                  <p>نص تسويقي، تصميم، واتساب أو نموذج، وربط التحليلات ضمن هدف تحويل واحد.</p>
                  <Link className="button secondary" href="/offers/landing-page-package">شاهد التفاصيل <span>←</span></Link>
                </article>
                <article>
                  <small>لنشاط يحتاج حضورًا متكاملًا</small>
                  <h3>موقع صغير جاهز للإطلاق</h3>
                  <SmallWebsitePrice />
                  <p>موقع سريع حتى 5 صفحات يوضح نشاطك وخدماتك ويقود الزائر إلى خطوة تواصل واضحة.</p>
                  <Link className="button secondary" href="/offers/small-business-website">شاهد التفاصيل <span>←</span></Link>
                </article>
              </div>
              <p className="guide-price-note">الأسعار المعروضة تتغير تلقائيًا حسب بلد الزائر. المشاريع الأكبر أو ذات التكاملات الخاصة تحتاج نطاقًا مخصصًا.</p>
            </section>

            <h2 id="types">كيف تختلف أسعار تصميم المواقع حسب النوع؟</h2>
            <div className="article-table">
              <table>
                <thead><tr><th>نوع المشروع</th><th>متى يناسبك؟</th><th>ما الذي يغيّر السعر؟</th></tr></thead>
                <tbody>
                  <tr><td><strong>صفحة هبوط</strong></td><td>إعلان أو عرض أو خدمة واحدة</td><td>البحث، النص، التصميم، النماذج والتتبع</td></tr>
                  <tr><td><strong>موقع شركة</strong></td><td>تعريف النشاط والخدمات وبناء الثقة</td><td>عدد القوالب، المحتوى، اللغات، التكاملات</td></tr>
                  <tr><td><strong>متجر إلكتروني</strong></td><td>بيع منتجات وإدارة الطلبات</td><td>حجم الكتالوج، الدفع، الشحن والعمليات</td></tr>
                  <tr><td><strong>منصة مخصصة</strong></td><td>حسابات، حجوزات أو عمليات خاصة</td><td>المنطق البرمجي، الصلاحيات، الأمان والاختبارات</td></tr>
                </tbody>
              </table>
            </div>
            <p>لو هدفك إنشاء موقع شركة في السعودية، راجع <Link href="/website-design">خدمة تصميم وتطوير المواقع</Link> لمعرفة المنهج الكامل من الاستراتيجية وUX حتى التطوير والقياس.</p>

            <h2 id="factors">7 عوامل تحدد تكلفة إنشاء الموقع</h2>
            <h3>1. الهدف التجاري</h3><p>موقع هدفه إثبات الوجود يختلف عن موقع مطلوب منه توليد استفسارات أو حجوزات أو مبيعات. كلما كان الهدف أوضح، أمكن توجيه الميزانية لما يؤثر فعلًا.</p>
            <h3>2. التصميم المخصص أم القالب</h3><p>القالب يقلل وقت التنفيذ، لكنه قد يفرض قيودًا على الهوية وتجربة الاستخدام. التصميم المخصص يحتاج قرارات أكثر، ويكون منطقيًا عندما تكون الثقة والتميّز والتحويل جزءًا من قيمة المشروع.</p>
            <h3>3. كتابة المحتوى واللغات</h3><p>كتابة النصوص وتنظيم الرسائل وتجهيز الصور والترجمة تؤثر في التكلفة. الموقع ثنائي اللغة يحتاج أكثر من مجرد ترجمة حرفية، خصوصًا في اتجاه العرض والكلمات المستخدمة في كل سوق.</p>
            <h3>4. الوظائف والتكاملات</h3><p>الدفع، الشحن، الحجز، CRM، واتساب، البريد والتحليلات تضيف وقتًا للتنفيذ والاختبار. اطلب تحديد كل تكامل بالاسم ورسوم الأدوات الخارجية إن وجدت.</p>
            <h3>5. SEO والسرعة والقياس</h3><p>تهيئة العناوين والبنية وSchema وتجربة الجوال والسرعة وربط GA4 والتحويلات يجب أن تدخل في الحساب من البداية. لو عندك موقع قائم وتريد تشخيصه قبل إعادة البناء، راجع <Link href="/offers/seo-audit">عرض فحص SEO وAEO</Link>.</p>
            <h3>6. لوحة الإدارة</h3><p>اسأل من سيضيف الخدمات أو المنتجات بعد التسليم. سهولة الإدارة والتدريب تقلل اعتمادك على المطور في كل تعديل صغير.</p>
            <h3>7. الدعم والملكية</h3><p>يجب أن يوضح الاتفاق ملكية الدومين والاستضافة والحسابات، وفترة إصلاح الأخطاء، وما يُعد تعديلًا جديدًا برسوم إضافية.</p>

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

            <section className="guide-lead-bridge" aria-labelledby="quote-check-title">
              <small>قبل أن تقارن سعرين</small>
              <h2 id="quote-check-title">أرسل نطاق مشروعك، وليس كلمة «موقع» فقط.</h2>
              <p>نوع النشاط + السوق + الهدف + الصفحات المتوقعة + اللغات + أي حجز أو دفع أو CRM. بهذه البيانات نقدر نحدد لك هل تحتاج صفحة هبوط، موقعًا صغيرًا، أم مشروعًا مخصصًا.</p>
              <div className="guide-lead-actions">
                <a className="button primary" href={whatsappHref} target="_blank" rel="noopener noreferrer">اسأل عن السعر عبر واتساب <span>↗</span></a>
                <Link className="button secondary" href="/website-design">راجع نطاق خدمة المواقع <span>←</span></Link>
              </div>
              <small className="guide-lead-note">محادثة أولية لتحديد النطاق، بدون التزام.</small>
            </section>

            <h2 id="mistakes">متى يصبح الموقع الأرخص هو الأغلى؟</h2>
            <p>عندما يطلق الموقع ببطء على الهاتف، أو بدون محتوى واضح، أو بدون قياس للتحويلات، أو على حسابات لا تملكها، قد تضطر لإعادة العمل. السعر المنخفض ليس المشكلة. المشكلة هي <strong>النطاق الغامض الذي لا يحدد ما الذي يجب أن يحققه الموقع.</strong></p>

            <h2 id="brief">ما الذي ترسله للحصول على سعر أدق؟</h2>
            <p>أرسل نوع النشاط، السوق، الهدف الرئيسي، الصفحات المتوقعة، اللغات، الوظائف المطلوبة، أمثلة تعجبك والموعد المستهدف. وإذا كان لديك موقع بالفعل لكن الزيارات لا تتحول إلى استفسارات، ابدأ بدليل <Link href="/guides/why-website-does-not-generate-leads">لماذا موقعك لا يجلب عملاء؟</Link> قبل التفكير في إعادة بنائه بالكامل.</p>

            <section className="article-faq" id="faq">
              <h2>أسئلة شائعة عن أسعار تصميم المواقع</h2>
              {faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
            </section>

            <section className="article-cta">
              <h2>تريد معرفة النطاق المناسب قبل طلب عرض سعر؟</h2>
              <p>أرسل لنا نشاطك وهدف الموقع، ونساعدك تحدد هل تحتاج Landing Page، موقع شركة صغيرًا، أم نطاقًا مخصصًا.</p>
              <a className="button primary" href={whatsappHref} target="_blank" rel="noopener noreferrer">ناقش موقعك عبر واتساب <span>↗</span></a>
            </section>
          </div>

          <aside className="article-side" aria-label="محتويات الدليل">
            <b>في هذا الدليل</b>
            <a href="#short-answer">كم سعر تصميم الموقع؟</a>
            <a href="#types">الأسعار حسب نوع الموقع</a>
            <a href="#factors">عوامل تحديد التكلفة</a>
            <a href="#compare">مقارنة عروض الشركات</a>
            <a href="#mistakes">متى يصبح الأرخص أغلى؟</a>
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
