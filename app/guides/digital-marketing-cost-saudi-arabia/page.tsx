import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../../components/site-shell";
import { createMetadata, organizationId, siteUrl } from "../../lib/seo";
import "../guides.css";

const title = "أسعار التسويق الرقمي في السعودية: ماذا تشمل؟";
const description = "دليل عملي لفهم أسعار التسويق الرقمي في السعودية، نطاقات الميزانية، ما الذي تتضمنه الباقات، الفرق بين أتعاب الإدارة وميزانية الإعلانات، وكيف تقارن العروض.";

export const metadata: Metadata = createMetadata({
  title: `${title} | دليل ديوانك`,
  description,
  path: "/guides/digital-marketing-cost-saudi-arabia",
  keywords: ["أسعار التسويق الرقمي في السعودية", "تكلفة التسويق الإلكتروني", "أسعار إدارة السوشيال ميديا", "تكلفة شركة تسويق", "باقات التسويق الرقمي", "ميزانية التسويق"],
});

const faqs = [
  { question: "كم تكلفة التسويق الرقمي شهريًا في السعودية؟", answer: "تبدأ النطاقات العملية للأنشطة الصغيرة غالبًا من 1,500 إلى 4,000 ريال شهريًا لخدمة محدودة، وقد تصل إلى 4,000–10,000 ريال لخطة نمو متعددة العناصر، بينما تبدأ البرامج المتكاملة عادة من 10,000 ريال قبل الإنفاق الإعلاني. النطاق الفعلي يتغير حسب الهدف والفريق وحجم التنفيذ." },
  { question: "هل ميزانية الإعلانات ضمن أتعاب شركة التسويق؟", answer: "غالبًا لا. أتعاب الإدارة تغطي الاستراتيجية والإعداد والمتابعة والتحسين والتقارير، أما المبلغ المدفوع إلى Meta أو Google فهو ميزانية مستقلة يجب توضيحها في العرض والعقد." },
  { question: "كم أنفق على الإعلانات في البداية؟", answer: "ابدأ بميزانية اختبار تستطيع تحملها وتكفي لجمع بيانات قابلة للقراءة، ثم زدها بعد إثبات جودة العرض والصفحة والمتابعة. رفع الإنفاق قبل إصلاح رحلة العميل يضاعف الهدر." },
  { question: "هل الباقة الشاملة أفضل؟", answer: "ليست أفضل تلقائيًا. الأفضل هو النطاق الذي يعالج عنق الزجاجة الحالي. قد تحتاج حملة وصفحة هبوط وقياسًا، لا عشرات المنشورات وخمس منصات." },
];

const inclusions = [
  ["التشخيص والاستراتيجية", "فهم النشاط والجمهور والمنافسة، تحديد الهدف والقنوات والمؤشرات."],
  ["المحتوى والتصميم", "خطة المحتوى، الكتابة، التصميم أو الفيديو، وعدد واضح من المخرجات والمراجعات."],
  ["إدارة الحملات", "الإعداد والتتبع والاختبار والتحسين؛ مع فصل ميزانية المنصات عن الأتعاب."],
  ["القياس والتقارير", "لوحة أو تقرير يربط المصدر بالفرص والحجوزات والمبيعات، لا الوصول فقط."],
  ["إدارة المشروع", "مسؤول اتصال، جدول اعتماد، اجتماعات مراجعة، وحدود زمن الاستجابة."],
];

export default function DigitalMarketingCostGuide() {
  const url = `${siteUrl}/guides/digital-marketing-cost-saudi-arabia`;
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Article", "@id": `${url}#article`, headline: title, description, inLanguage: "ar", datePublished: "2026-08-03", dateModified: "2026-08-03", mainEntityOfPage: url, author: { "@id": organizationId }, publisher: { "@id": organizationId }, about: ["أسعار التسويق الرقمي في السعودية", "ميزانية التسويق", "باقات التسويق الرقمي"] },
    { "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "الرئيسية", item: siteUrl }, { "@type": "ListItem", position: 2, name: "أدلة النمو", item: `${siteUrl}/guides` }, { "@type": "ListItem", position: 3, name: title, item: url }] },
  ] };

  return <main className="guides-page">
    <Header /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <article>
      <header className="article-hero shell">
        <nav className="article-breadcrumbs" aria-label="مسار الصفحة"><Link href="/">الرئيسية</Link><span>/</span><Link href="/guides">أدلة النمو</Link><span>/</span><span>التسويق الرقمي</span></nav>
        <h1>{title}</h1>
        <p>السؤال الصحيح ليس «كم سعر الباقة؟» فقط، بل: ما المشكلة التي ستحلها، من سينفذها، وكيف سنعرف أن الاستثمار عاد بنتيجة؟</p>
        <div className="article-meta"><span>آخر تحديث: 3 أغسطس 2026</span><span>وقت القراءة: 9 دقائق</span><span>التركيز: الميزانية ونطاق العمل</span></div>
      </header>
      <div className="article-layout shell">
        <div className="article-body">
          <h2 id="short-answer">الإجابة المختصرة</h2>
          <div className="article-answer"><p>للشركات الصغيرة، تتراوح الخدمة المحدودة عادة بين 1,500 و4,000 ريال شهريًا، وخطة النمو بين 4,000 و10,000 ريال، بينما تبدأ البرامج المتكاملة غالبًا من 10,000 ريال شهريًا. هذه نطاقات إرشادية وليست تسعيرة ثابتة، وعادة لا تشمل ميزانية الإعلانات.</p></div>
          <h2 id="ranges">نطاقات الميزانية وما الذي تتوقعه</h2>
          <div className="article-table"><table><thead><tr><th>النطاق الشهري</th><th>مناسب لمن؟</th><th>النطاق الواقعي</th></tr></thead><tbody>
            <tr><td><strong>1,500–4,000 ريال</strong></td><td>نشاط صغير أو بداية منظمة</td><td>قناة واحدة أو مخرجات محدودة مع قياس أساسي</td></tr>
            <tr><td><strong>4,000–10,000 ريال</strong></td><td>شركة تريد نموًا واختبارات مستمرة</td><td>استراتيجية ومحتوى وحملات وقياس ضمن نطاق واضح</td></tr>
            <tr><td><strong>10,000–25,000+ ريال</strong></td><td>فريق أو علامة متعددة القنوات</td><td>تخصصات متعددة، إنتاج أكبر، CRO وأتمتة وتحليلات</td></tr>
          </tbody></table></div>
          <p>لا تقارن النطاقات كمنتجات متطابقة. شركة تبيع تنفيذًا محدودًا تختلف عن فريق يشمل استراتيجية وإنتاجًا وإعلانات وتحليلات. اطلب تفصيل الساعات والمخرجات والمسؤوليات وحدود المراجعة.</p>
          <h2 id="included">ماذا يجب أن يشمل عرض السعر؟</h2>
          {inclusions.map(([heading, body]) => <section key={heading}><h3>{heading}</h3><p>{body}</p></section>)}
          <h2 id="separate">ثلاث ميزانيات يجب ألا تخلط بينها</h2>
          <ol>
            <li><strong>أتعاب الإدارة:</strong> ما تدفعه للفريق مقابل التخطيط والتنفيذ والتحسين.</li>
            <li><strong>الإنفاق الإعلاني:</strong> ما يُدفع مباشرة للمنصات لشراء الوصول والنقرات والتحويلات.</li>
            <li><strong>تكاليف الإنتاج والأدوات:</strong> التصوير، المؤثرون، صفحات الهبوط، CRM، الرسائل أو البرمجيات عند الحاجة.</li>
          </ol>
          <h2 id="price-drivers">ما الذي يرفع السعر فعلًا؟</h2>
          <p>عدد القنوات وحجم الإنتاج وسرعته، مستوى خبرة الفريق، تعقيد التتبع، تعدد المنتجات والأسواق، الحاجة إلى تصوير أو فيديو، حجم الحملات، وسرعة الموافقات. لكن كثرة المنشورات وحدها ليست قيمة؛ الأهم أن يخدم كل عنصر هدفًا واضحًا.</p>
          <h2 id="compare">كيف تقارن بين العروض من دون أن تنخدع؟</h2>
          <p>وحّد المطلوب أولًا، ثم قارن الهدف والنطاق والفريق والملكية والقياس والمدة والسعر. افصل البنود الأساسية عن الاختيارية، واسأل عما يحدث عند ضعف النتائج. راجع أيضًا دليل <Link href="/guides/choose-digital-marketing-company-saudi-arabia">كيف تختار شركة تسويق رقمي في السعودية؟</Link> قبل توقيع عقد طويل.</p>
          <h2 id="budget">كيف تحدد ميزانية مناسبة لنشاطك؟</h2>
          <p>ابدأ من قيمة العميل وهوامش الربح والطاقة التشغيلية، لا من متوسط السوق وحده. إذا كان فريق المبيعات لا يتابع بسرعة أو الموقع لا يحول، أصلح التسرب أولًا. ميزانية إعلانية أكبر لا تصلح عرضًا ضعيفًا أو متابعة متأخرة.</p>
          <section className="article-faq" id="faq"><h2>أسئلة شائعة</h2>{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section>
          <section className="article-cta"><h2>تريد نطاقًا يناسب هدفك لا باقة مزدحمة؟</h2><p>نراجع وضعك ونحدد الأولوية والقنوات والقياس، ثم نبني نطاق عمل واضحًا يمكن تقييمه قبل زيادة الإنفاق.</p><Link className="button primary" href="/digital-marketing">استعرض خدمة التسويق الرقمي <span>←</span></Link></section>
        </div>
        <aside className="article-side" aria-label="محتويات الدليل"><b>في هذا الدليل</b><a href="#short-answer">الإجابة المختصرة</a><a href="#ranges">نطاقات الميزانية</a><a href="#included">مكونات العرض</a><a href="#separate">فصل الميزانيات</a><a href="#price-drivers">عوامل السعر</a><a href="#compare">مقارنة العروض</a><a href="#budget">تحديد الميزانية</a><a href="#faq">الأسئلة الشائعة</a><Link className="button primary" href="/contact">اطلب عرضًا واضحًا</Link></aside>
      </div>
    </article><Footer />
  </main>;
}
