import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../../components/site-shell";
import { createMetadata, organizationId, siteUrl } from "../../lib/seo";
import { GoogleAdsLaunchPrice } from "../../offers/google-ads-launch/localized-google-ads-launch";
import "../guides.css";
import "../whatsapp-family-links.css";

const title = "كم تكلفة إعلانات Google وإدارة Google Ads في السعودية؟";
const description = "دليل عملي لفهم تكلفة Google Ads في السعودية: ميزانية الإعلان، سعر إعداد وتشغيل الحملة، تكلفة الإدارة الشهرية، صفحة الهبوط والتتبع، ومتى تختار الإطلاق أو الإدارة.";

export const metadata: Metadata = createMetadata({
  title: `${title} | دليل ديوانك`,
  description,
  path: "/guides/google-ads-cost-saudi-arabia",
  keywords: [
    "تكلفة إعلانات جوجل في السعودية",
    "تكلفة Google Ads السعودية",
    "سعر إدارة Google Ads",
    "تكلفة إدارة جوجل ادز",
    "سعر إعداد حملة جوجل ادز",
    "تكلفة تشغيل حملة جوجل",
    "ميزانية جوجل ادز",
    "إدارة إعلانات جوجل",
    "Google Ads السعودية",
  ],
});

const faqs = [
  { question: "كم تكلفة Google Ads في السعودية؟", answer: "لا يوجد رقم ثابت لأن التكلفة تنقسم إلى ميزانية تدفعها إلى Google، وأتعاب إعداد أو إدارة، وأحيانًا صفحة هبوط وقياس. تكلفة النقر نفسها تتغير حسب الكلمات والمنافسة وجودة الإعلان والصفحة." },
  { question: "كم سعر إعداد وتشغيل حملة Google Ads؟", answer: "إذا كان المطلوب حملة Search واحدة بتأسيس واضح دون إدارة شهرية، لدى ديوانك باقة إطلاق بسعر محلي ظاهر في الصفحة وتشمل بحث الكلمات والإعلانات والكلمات السلبية وتتبع تحويل أساسي عند توفر المتطلبات." },
  { question: "كم تكلفة إدارة Google Ads شهريًا؟", answer: "تعتمد على عدد الحملات والأسواق وحجم الحساب ونطاق التتبع والتحسين والتقارير. الإدارة الشهرية تختلف عن باقة التأسيس لأن العمل يستمر في قراءة Search Terms والنتائج والميزانية والتحويلات وإجراء التحسينات." },
  { question: "هل ميزانية Google تشمل أتعاب الإدارة؟", answer: "عادة لا. ميزانية الإعلانات تُدفع إلى Google، بينما الإعداد أو الإدارة أو تصميم صفحة الهبوط أو التتبع تكون بنودًا منفصلة حسب نطاق مقدم الخدمة." },
  { question: "هل أبدأ بميزانية كبيرة؟", answer: "ليس بالضرورة. البداية الأفضل هي ميزانية تكفي لجمع بيانات قابلة للقراءة على عدد محدود من الكلمات والصفحات، ثم زيادة الإنفاق بعد ظهور إشارات جودة وتحويل واضحة." },
  { question: "كيف أقارن عرضين لإدارة Google Ads؟", answer: "قارن النطاق قبل السعر: هل يشمل العرض ميزانية Google، وهل هو إعداد لمرة واحدة أم إدارة مستمرة، وكم حملة وسوقًا يغطي، وما التحويل الذي سيُقاس، وهل صفحة الوصول مشمولة. عرضان بسعرين متقاربين قد يغطيان عملين مختلفين." },
  { question: "متى أحتاج صفحة هبوط مستقلة؟", answer: "إذا كانت الصفحة الحالية بطيئة أو عامة أو تعرض خدمات كثيرة أو لا تحتوي على CTA واضح وقياس للتحويل، فقد تكون صفحة هبوط مخصصة أكثر كفاءة للحملة." },
];

export default function GoogleAdsCostGuide() {
  const url = `${siteUrl}/guides/google-ads-cost-saudi-arabia`;
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Article", "@id": `${url}#article`, headline: title, description, inLanguage: "ar-SA", datePublished: "2026-08-11", dateModified: "2026-10-05", mainEntityOfPage: url, author: { "@id": organizationId }, publisher: { "@id": organizationId }, about: ["Google Ads", "إدارة Google Ads", "تكلفة الإعلانات", "السعودية", "إعلانات البحث"] },
    { "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "الرئيسية", item: siteUrl }, { "@type": "ListItem", position: 2, name: "أدلة النمو", item: `${siteUrl}/guides` }, { "@type": "ListItem", position: 3, name: title, item: url }] },
  ] };

  return <main className="guides-page">
    <Header /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <article>
      <header className="article-hero shell">
        <nav className="article-breadcrumbs" aria-label="مسار الصفحة"><Link href="/">الرئيسية</Link><span>/</span><Link href="/guides">أدلة النمو</Link><span>/</span><span>Google Ads</span></nav>
        <h1>{title}</h1>
        <p>إذا كنت تبحث عن سعر Google Ads، فرّق أولًا بين ميزانية الإعلان، إعداد وتشغيل الحملة، والإدارة الشهرية. كل بند يؤدي وظيفة مختلفة، وخلطهم هو أسرع طريق لمقارنة أسعار لا تقارن نفس الشيء.</p>
        <div className="article-meta"><span>آخر تحديث: 5 أكتوبر 2026</span><span>وقت القراءة: 7 دقائق</span><span>السوق: السعودية</span></div>
      </header>
      <div className="article-layout shell"><div className="article-body">
        <h2 id="short-answer">الإجابة المختصرة</h2>
        <div className="article-answer"><p>تكلفة Google Ads في السعودية = <strong>ميزانية Google + إعداد أو إدارة الحملة + صفحة الوصول عند الحاجة + القياس</strong>. إذا أردت تشغيل حملة Search واحدة فقط، ابدأ بتأسيس محدد. وإذا كان الحساب يحتاج تحسينًا مستمرًا، فأنت تبحث عن إدارة Google Ads شهرية.</p></div>

        <h2 id="components">مم تتكون تكلفة Google Ads؟</h2>
        <div className="article-table"><table><thead><tr><th>البند</th><th>ماذا يغطي؟</th><th>متى تحتاجه؟</th></tr></thead><tbody>
          <tr><td><strong>ميزانية Google</strong></td><td>النقرات والوصول داخل المنصة</td><td>دائمًا عند تشغيل الحملة</td></tr>
          <tr><td><strong>إعداد وتشغيل الحملة</strong></td><td>الكلمات، الهيكل، الإعلانات، الكلمات السلبية والقياس الأساسي</td><td>عند بدء حملة جديدة أو إعادة بنائها</td></tr>
          <tr><td><strong>الإدارة الشهرية</strong></td><td>قراءة النتائج، Search Terms، التحسين، الميزانية والتقارير</td><td>عندما تحتاج تحسينًا مستمرًا بعد الإطلاق</td></tr>
          <tr><td><strong>صفحة الوصول</strong></td><td>الرسالة والثقة وCTA وتجربة الجوال</td><td>إذا كانت الصفحة الحالية لا تخدم التحويل</td></tr>
          <tr><td><strong>القياس</strong></td><td>GA4 والتحويلات وواتساب والنماذج</td><td>حتى تعرف ما الذي يبيع فعلًا</td></tr>
        </tbody></table></div>

        <h2 id="setup-vs-management">إعداد حملة Google Ads أم إدارة شهرية؟</h2>
        <p><strong>الإعداد والتشغيل</strong> مناسب عندما يكون لديك عرض واضح وصفحة جاهزة وتريد بناء حملة Search من البداية بشكل منظم. أما <strong>الإدارة الشهرية</strong> فهي للعمل المستمر بعد الإطلاق: تحليل الكلمات وSearch Terms والتحويلات وتعديل عروض الأسعار والميزانية والإعلانات والصفحات عند الحاجة.</p>
        <p>إذا كان احتياجك مجرد تشغيل حملة Search واحدة، راجع <Link className="article-link" href="/offers/google-ads-launch">باقة إعداد وتشغيل Google Ads</Link>. وإذا كان لديك حساب قائم أو تحتاج تحسينًا مستمرًا، راجع <Link className="article-link" href="/paid-ads">خدمة إدارة Google Ads في السعودية</Link>.</p>
        <div className="article-answer"><p>باقة الإطلاق الحالية تبدأ بسعر <GoogleAdsLaunchPrice /> حسب موقع الزائر، وتشمل نطاق تأسيس محدد. ميزانية Google منفصلة، والإدارة الشهرية ليست ضمن الباقة.</p></div>

        <h2 id="budget">كيف تحدد ميزانية اختبار؟</h2>
        <p>ابدأ بعدد محدود من الكلمات عالية النية، ومنطقة جغرافية واضحة، وتحويل رئيسي واحد. الهدف في المرحلة الأولى ليس الوصول لأكبر جمهور، بل معرفة هل البحث الموجود في السوق يتحول إلى استفسارات بجودة مقبولة.</p>
        <p>إذا وزعت الميزانية على عشرات الكلمات والحملات من البداية، قد ينتهي الاختبار قبل أن يحصل أي مسار على بيانات كافية. لذلك نفضل اختبارًا مركزًا ثم توسيع ما يثبت نفسه.</p>

        <h2 id="expensive">متى تبدو Google Ads غالية وهي ليست المشكلة؟</h2>
        <ul><li>الكلمة صحيحة لكن صفحة الوصول لا تطابق نية الباحث.</li><li>الإعلانات تجلب نقرات فضولية لأن الرسالة عامة.</li><li>التحويل غير مضبوط، فتُحسب كل الزيارات كأنها متساوية.</li><li>لا توجد كلمات سلبية تمنع البحث غير المناسب.</li><li>زمن الرد بعد الاستفسار طويل فتضيع الفرصة بعد نجاح الإعلان.</li></ul>
        <p>إذا كانت لديك نقرات بالفعل لكنها لا تتحول إلى فرص، اقرأ دليل <Link className="article-link" href="/guides/google-ads-clicks-no-leads">لماذا Google Ads تجلب زيارات ولا تجلب عملاء؟</Link>.</p>

        <h2 id="compare-offers">كيف تقارن عرضين لإدارة Google Ads؟</h2>
        <p>قد يبدو عرضان لإدارة Google Ads متقاربين في السعر وهما يغطيان عملين مختلفين. اطرح هذه الأسئلة على أي مقدم خدمة قبل المقارنة:</p>
        <div className="article-table"><table><thead><tr><th>السؤال</th><th>لماذا يغير المقارنة؟</th></tr></thead><tbody>
          <tr><td><strong>هل السعر يشمل ميزانية Google؟</strong></td><td>ميزانية الإعلان تُدفع إلى Google، ولا تدخل عادة في أتعاب الإعداد أو الإدارة.</td></tr>
          <tr><td><strong>هل هو إعداد لمرة واحدة أم إدارة مستمرة؟</strong></td><td>الإعداد يؤسس الحملة، أما الإدارة فتعني قراءة النتائج وتحسينها بعد الإطلاق.</td></tr>
          <tr><td><strong>كم حملة وسوقًا يغطي؟</strong></td><td>حملة Search واحدة تختلف عن عدة حملات وأسواق وأنواع إعلانات.</td></tr>
          <tr><td><strong>ما التحويل الذي سيُقاس؟</strong></td><td>واتساب أو نموذج أو مكالمة، وهذا يحدد على أي أساس تُقرأ النتائج.</td></tr>
          <tr><td><strong>هل صفحة الوصول مشمولة؟</strong></td><td>الصفحة الضعيفة تهدر النقرات مهما كان إعداد الحملة جيدًا.</td></tr>
        </tbody></table></div>

        <h2 id="starting">اختر نقطة البداية حسب احتياجك</h2>
        <div className="article-table"><table><thead><tr><th>احتياجك</th><th>الخطوة الأنسب</th></tr></thead><tbody>
          <tr><td>تريد معرفة التكلفة والميزانية</td><td>أكمل هذا الدليل وحدد نطاقك</td></tr>
          <tr><td>تريد تشغيل حملة Search واحدة</td><td><Link className="article-link" href="/offers/google-ads-launch">باقة إطلاق Google Ads</Link></td></tr>
          <tr><td>تريد إدارة وتحسينًا مستمرًا</td><td><Link className="article-link" href="/paid-ads">إدارة Google Ads والإعلانات المدفوعة</Link></td></tr>
          <tr><td>صفحتك الحالية ضعيفة للتحويل</td><td><Link className="article-link" href="/offers/landing-page-package">صفحة هبوط مخصصة</Link></td></tr>
          <tr><td>لا تعرف هل Google أنسب من Meta</td><td><Link className="article-link" href="/guides/google-ads-vs-meta-ads">مقارنة Google Ads وMeta Ads</Link></td></tr>
        </tbody></table></div>

        <section className="article-faq" id="faq"><h2>أسئلة شائعة</h2>{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section>
        <section className="article-cta"><h2>تريد تشغيل Google Ads أم إدارتها؟</h2><p>إذا كانت لديك صفحة جاهزة وتريد بداية محددة، ابدأ بباقة الإطلاق. وإذا كان لديك حساب قائم أو تحتاج تحسينًا مستمرًا، انتقل إلى خدمة الإدارة.</p><Link className="button primary" href="/offers/google-ads-launch">شاهد باقة الإطلاق <span>←</span></Link> <Link className="button" href="/paid-ads">إدارة Google Ads</Link></section>
      </div><aside className="article-side" aria-label="محتويات الدليل"><b>في هذا الدليل</b><a href="#short-answer">الإجابة المختصرة</a><a href="#components">مكونات التكلفة</a><a href="#setup-vs-management">الإعداد أم الإدارة</a><a href="#budget">ميزانية الاختبار</a><a href="#expensive">متى يبدو الإعلان غاليًا</a><a href="#compare-offers">مقارنة العروض</a><a href="#starting">اختيار نقطة البداية</a><a href="#faq">الأسئلة الشائعة</a><Link className="button primary" href="/offers/google-ads-launch">شاهد باقة الإطلاق</Link></aside></div>
    </article><Footer />
  </main>;
}
