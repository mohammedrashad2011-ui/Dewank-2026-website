import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../../components/site-shell";
import { createMetadata, organizationId, siteUrl } from "../../lib/seo";
import "../guides.css";

const title = "كيف تختار شركة تصميم هوية بصرية في السعودية؟";
const description = "دليل عملي لاختيار شركة براندنج وتصميم هوية بصرية في السعودية، وتقييم الاستراتيجية والبورتفوليو والعقد والمخرجات وحقوق الملكية قبل التعاقد.";

export const metadata: Metadata = createMetadata({
  title: `${title} | دليل ديوانك`,
  description,
  path: "/guides/choose-branding-agency-saudi-arabia",
  keywords: ["شركة تصميم هوية بصرية في السعودية", "أفضل شركة براندنج في السعودية", "اختيار شركة تصميم شعار", "شركة بناء علامة تجارية", "تصميم هوية تجارية"],
});

const faqs = [
  { question: "كيف أعرف أن شركة تصميم الهوية مناسبة لمشروعي؟", answer: "ابحث عن عملية واضحة تبدأ بفهم النشاط والجمهور والمنافسين، وقدرة على تفسير القرارات، ونطاق مكتوب يحدد المخرجات والملكية والمراجعات. التشابه القطاعي مفيد، لكنه أقل أهمية من جودة التفكير والتنفيذ." },
  { question: "هل أختار وكالة أم مصممًا مستقلًا؟", answer: "المستقل مناسب غالبًا للنطاق المحدود وسرعة التواصل، بينما تفيد الوكالة عندما تحتاج بحثًا واستراتيجية وكتابة وتصميمًا وتطبيقات متعددة. القرار يعتمد على تعقيد المشروع والمسؤوليات، لا على المسمى وحده." },
  { question: "كم اتجاهًا تصميميًا يجب أن أطلب؟", answer: "اتجاهان أو ثلاثة مدروسون عادة أفضل من عشرات الخيارات السطحية. المهم أن يكون لكل اتجاه منطق مرتبط بالاستراتيجية، وأن تتفقوا مسبقًا على عدد جولات المراجعة وآلية اعتماد القرار." },
  { question: "هل يجب تسليم الملفات المفتوحة؟", answer: "نعم، إذا كانت ضمن الاتفاق. يجب أن يوضح العقد ملفات المصدر والصيغ النهائية وحقوق الاستخدام والملكية وتراخيص الخطوط والصور. لا تعتمد على افتراض شفهي في هذه النقاط." },
];

const scorecard = [
  ["فهم النشاط والسوق", "هل تسأل الشركة عن الجمهور والمنافسين والتموضع والهدف قبل الحديث عن الشكل؟"],
  ["منهجية العمل", "هل توجد مراحل واضحة للبحث والاستراتيجية والاتجاهات والتطوير والتسليم؟"],
  ["جودة البورتفوليو", "هل ترى أنظمة هوية قابلة للاستخدام، أم شعارات وموكابات جذابة فقط؟"],
  ["وضوح النطاق", "هل يحدد العرض المخرجات والمراجعات والمدة والمسؤوليات وما لا يشمله؟"],
  ["الملكية والتراخيص", "هل يوضح العقد حقوق الملفات والخطوط والصور والتطبيقات؟"],
  ["القدرة على التطبيق", "هل تستطيع الشركة تحويل الهوية إلى سوشيال وموقع وعروض وتغليف عند الحاجة؟"],
];

export default function ChooseBrandingAgencyGuide() {
  const url = `${siteUrl}/guides/choose-branding-agency-saudi-arabia`;
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Article", "@id": `${url}#article`, headline: title, description, inLanguage: "ar", datePublished: "2026-08-04", dateModified: "2026-08-04", mainEntityOfPage: url, author: { "@id": organizationId }, publisher: { "@id": organizationId }, about: ["اختيار شركة تصميم هوية", "شركات البراندنج في السعودية", "بناء العلامة التجارية"] },
    { "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "الرئيسية", item: siteUrl }, { "@type": "ListItem", position: 2, name: "أدلة النمو", item: `${siteUrl}/guides` }, { "@type": "ListItem", position: 3, name: title, item: url }] },
  ] };

  return <main className="guides-page">
    <Header /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <article>
      <header className="article-hero shell">
        <nav className="article-breadcrumbs" aria-label="مسار الصفحة"><Link href="/">الرئيسية</Link><span>/</span><Link href="/guides">أدلة النمو</Link><span>/</span><span>البراندنج</span></nav>
        <h1>{title}</h1>
        <p>لا تختَر من يصمم أجمل عرض تقديمي؛ اختر من يفهم القرار التجاري، ويبني نظامًا يمكن لفريقك استخدامه بعد انتهاء المشروع.</p>
        <div className="article-meta"><span>آخر تحديث: 4 أغسطس 2026</span><span>وقت القراءة: 9 دقائق</span><span>التركيز: التقييم والتعاقد</span></div>
      </header>
      <div className="article-layout shell">
        <div className="article-body">
          <h2 id="short-answer">الإجابة المختصرة</h2>
          <div className="article-answer"><p>قيّم شركة الهوية على ستة محاور: فهم السوق، منهجية العمل، جودة النظام لا جمال الموكاب، وضوح النطاق، حقوق الملكية، والقدرة على التطبيق. لا تجعل السعر أو عدد الشعارات المقترحة معيارك الأول؛ العرض الرخيص يصبح مكلفًا إذا انتهى بشعار لا يعمل أو ملفات لا تملكها.</p></div>
          <h2 id="before-search">حدّد ما تحتاجه قبل البحث</h2>
          <p>هل تحتاج شعارًا فقط، هوية بصرية، أم إعادة تموضع وبناء علامة؟ كثير من الخلافات تبدأ لأن العميل يطلب “براندنج” بينما العرض يتضمن شعارًا وألوانًا فقط. اكتب هدف المشروع، الجمهور، نقاط الاستخدام، الموعد، الميزانية، ومن صاحب قرار الاعتماد.</p>
          <h2 id="scorecard">بطاقة تقييم شركة الهوية</h2>
          <div className="article-table"><table><thead><tr><th>المعيار</th><th>السؤال الذي يجب طرحه</th></tr></thead><tbody>
            {scorecard.map(([criterion, question]) => <tr key={criterion}><td><strong>{criterion}</strong></td><td>{question}</td></tr>)}
          </tbody></table></div>
          <h2 id="portfolio">كيف تقرأ البورتفوليو بذكاء؟</h2>
          <p>لا تنبهر بالموكابات وحدها. ابحث عن تنوع الاستخدامات، وضوح الفكرة، قابلية القراءة، الاتساق عبر المنصات، وكيف يختلف كل مشروع عن الآخر. اسأل عن المشكلة والقرار والنتيجة، ولا تفترض أن كل عمل معروض نُفذ بالكامل بواسطة الفريق الحالي.</p>
          <h2 id="agency-vs-freelancer">وكالة أم مصمم مستقل؟</h2>
          <div className="article-table"><table><thead><tr><th>الخيار</th><th>يناسبك عندما</th><th>انتبه إلى</th></tr></thead><tbody>
            <tr><td><strong>مصمم مستقل</strong></td><td>النطاق محدود، والقرار سريع، ولديك استراتيجية واضحة</td><td>تغطية البحث والكتابة والتطبيقات واستمرارية الدعم</td></tr>
            <tr><td><strong>وكالة متخصصة</strong></td><td>تحتاج استراتيجية وفريقًا متعدد التخصصات وتطبيقات كثيرة</td><td>من سينفذ فعليًا، وطبقات الإدارة، وما إذا كان النطاق يناسب حجمك</td></tr>
            <tr><td><strong>فريق هجين</strong></td><td>لديك قيادة داخلية وتحتاج خبرات محددة حسب المرحلة</td><td>توزيع المسؤولية واتساق القرار بين الأطراف</td></tr>
          </tbody></table></div>
          <h2 id="questions">أسئلة المقابلة قبل التعاقد</h2>
          <ul>
            <li>ما مراحل المشروع وما القرار المطلوب في نهاية كل مرحلة؟</li>
            <li>من سيعمل على المشروع، ومن يملك القرار الإبداعي؟</li>
            <li>كيف تبحثون السوق والجمهور والمنافسين؟</li>
            <li>كم اتجاهًا وجولة مراجعة يشمل العرض؟ وما تكلفة التوسع؟</li>
            <li>ما الملفات والتطبيقات التي سأستلمها؟ ومن يملك الحقوق؟</li>
            <li>كيف تختبرون الهوية على الجوال والطباعة والخلفيات المختلفة؟</li>
          </ul>
          <h2 id="proposal">ما الذي يجب أن يتضمنه العرض والعقد؟</h2>
          <p>يجب أن يحدد الهدف والنطاق والمخرجات والجدول والدفع والمراجعات ومعايير الاعتماد وحقوق الملكية والسرية والإلغاء. اطلب قائمة صريحة بما لا يشمله العرض، خصوصًا التسمية والتسجيل القانوني وشراء الخطوط والصور والطباعة وصناعة المحتوى.</p>
          <h2 id="red-flags">إشارات تدعوك للتوقف</h2>
          <ul>
            <li>الحديث عن الأسلوب والألوان قبل فهم النشاط والهدف.</li>
            <li>ضمان أن الهوية وحدها ستزيد المبيعات أو تجعل العلامة “الأفضل”.</li>
            <li>نسخ واضح للاتجاهات الرائجة أو تشابه المشاريع في البورتفوليو.</li>
            <li>غياب عقد يوضح الملفات والملكية والتراخيص.</li>
            <li>عدد ضخم من المقترحات مع وقت قصير جدًا ومن دون منطق قرار.</li>
          </ul>
          <h2 id="decision">كيف تتخذ القرار النهائي؟</h2>
          <p>اختر أعلى قيمة متوقعة، لا أقل سعر ولا أجمل عينة. أعطِ كل معيار درجة من 5، ثم راجع المخاطر والنطاق والتوافق في التواصل. بعد توحيد المخرجات، قارن الميزانية عبر <Link href="/guides/branding-identity-cost-saudi-arabia">دليل تكلفة تصميم الهوية البصرية في السعودية</Link>.</p>
          <section className="article-faq" id="faq"><h2>أسئلة شائعة</h2>{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section>
          <section className="article-cta"><h2>تحتاج شريكًا يبني الهوية كنظام؟</h2><p>نربط الاستراتيجية بالهوية والتطبيق، ونحدد النطاق والملكية والمخرجات بوضوح قبل بدء التصميم.</p><Link className="button primary" href="/branding">استعرض خدمة بناء الهوية <span>←</span></Link></section>
        </div>
        <aside className="article-side" aria-label="محتويات الدليل"><b>في هذا الدليل</b><a href="#short-answer">الإجابة المختصرة</a><a href="#before-search">تحديد الاحتياج</a><a href="#scorecard">بطاقة التقييم</a><a href="#portfolio">قراءة البورتفوليو</a><a href="#agency-vs-freelancer">وكالة أم مستقل؟</a><a href="#questions">أسئلة المقابلة</a><a href="#proposal">العرض والعقد</a><a href="#red-flags">إشارات الخطر</a><a href="#decision">القرار النهائي</a><a href="#faq">الأسئلة الشائعة</a><Link className="button primary" href="/contact">ناقش مشروع الهوية</Link></aside>
      </div>
    </article><Footer />
  </main>;
}
