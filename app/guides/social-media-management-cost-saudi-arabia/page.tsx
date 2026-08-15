import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../../components/site-shell";
import { createMetadata, organizationId, siteUrl } from "../../lib/seo";
import "../guides.css";
import "./cost-guide-upgrade.css";
import "./decision-upgrade.css";

const title = "أسعار إدارة السوشيال ميديا في السعودية: الباقات والتكلفة";
const description = "دليل أسعار إدارة السوشيال ميديا في السعودية: نطاقات التكلفة، الفرق بين الإدارة الشهرية وباقات المحتوى، وما الذي يدخل في السعر قبل التعاقد.";

export const metadata: Metadata = createMetadata({
  title: `${title} | دليل ديوانك`,
  description,
  path: "/guides/social-media-management-cost-saudi-arabia",
  keywords: [
    "أسعار إدارة السوشيال ميديا",
    "أسعار إدارة حسابات التواصل الاجتماعي في السعودية",
    "باقات إدارة السوشيال ميديا",
    "تكلفة إدارة انستقرام",
    "أسعار صناعة المحتوى في السعودية",
    "سعر إدارة حسابات التواصل الاجتماعي",
  ],
});

const faqs = [
  { question: "كم سعر إدارة حسابات التواصل الاجتماعي شهريًا؟", answer: "تبدأ الخدمات المحدودة غالبًا من 1,500 إلى 3,500 ريال شهريًا، بينما تتراوح الإدارة المتكاملة للمشروعات الصغيرة والمتوسطة غالبًا بين 3,500 و8,000 ريال، وقد تتجاوز 8,000 ريال عند تعدد المنصات أو زيادة إنتاج الفيديو والتصوير. هذه نطاقات إرشادية وليست قائمة أسعار ديوانك." },
  { question: "كم تكلفة إدارة حساب إنستقرام في السعودية؟", answer: "تختلف تكلفة إدارة إنستقرام حسب هل المطلوب محتوى فقط أم نشر ومتابعة وتقارير وإدارة مجتمع. إذا كان المطلوب إنتاج المحتوى فقط فقد يكون النطاق المحدد أقل من الإدارة الشهرية الكاملة." },
  { question: "كم تكلفة صناعة المحتوى شهريًا؟", answer: "التكلفة تعتمد على عدد القطع ونوعها ومستوى التصميم والفيديو والتصوير. باقة محتوى محددة قد تكون مناسبة عندما لا تحتاج إدارة رسائل أو نشرًا يوميًا أو إدارة مجتمع." },
  { question: "هل توجد باقة أرخص إذا كنت أحتاج المحتوى فقط؟", answer: "نعم. إذا كنت لا تحتاج إدارة رسائل أو نشرًا يوميًا أو إدارة مجتمع، فقد تكون باقة محتوى محددة لمدة 30 يومًا أنسب وأوضح من التعاقد على إدارة شهرية كاملة." },
  { question: "هل تصوير المنتجات والفيديو ضمن الباقة؟", answer: "ليس دائمًا. التصميم والكتابة قد يكونان ضمن الإدارة الشهرية، لكن جلسات التصوير والموديل والموقع والمونتاج المتقدم غالبًا تسعّر كبند مستقل." },
  { question: "هل إدارة الإعلانات ضمن إدارة الحسابات؟", answer: "غالبًا تكون خدمة منفصلة، كما أن ميزانية الإعلان المدفوعة إلى Meta أو TikTok لا تدخل ضمن أتعاب إدارة السوشيال ميديا." },
  { question: "هل زيادة عدد المنشورات تعني باقة أفضل؟", answer: "لا. الباقة الأفضل هي التي تربط المحتوى بهدف تجاري واضح وتحافظ على الجودة والاستمرارية، لا التي تكدّس أكبر عدد من القطع." },
];

const scope = [
  ["الاستراتيجية وخطة المحتوى", "تحديد الجمهور، الرسائل، محاور المحتوى، المنصات المناسبة وجدول النشر."],
  ["الكتابة والتصميم", "عدد محدد من المنشورات والقصص والفيديوهات مع مستوى الإنتاج وجولات المراجعة."],
  ["النشر وإدارة الحساب", "الجدولة، تحسين النصوص والوسوم والملف، ومتابعة التنفيذ وفق التقويم."],
  ["التفاعل وخدمة المجتمع", "الردود والتعليقات وتحويل الاستفسارات، مع تحديد ساعات العمل وحدود المسؤولية."],
  ["التقارير والتحسين", "قياس الوصول والتفاعل والزيارات والاستفسارات وما يمكن ربطه بالمبيعات، ثم تعديل الخطة."],
];

const priceSnapshot = [
  ["إدارة محدودة", "1,500–3,500 ريال", "حساب واحد أو نطاق بسيط مع عدد محدود من القطع والنشر."],
  ["إدارة متكاملة", "3,500–8,000 ريال", "استراتيجية وكتابة وتصميم ونشر وتقارير مع حضور منتظم."],
  ["إدارة متقدمة", "8,000–20,000+ ريال", "علامة متعددة المنصات أو إنتاج مرتفع يشمل فيديو وتصوير وإدارة مجتمع."],
];

const servicePaths = [
  { label: "محتوى فقط", title: "تحتاج أفكارًا وتصميمًا وكابشنات وخطة شهر", text: "لا تدفع تلقائيًا مقابل إدارة كاملة إذا كان احتياجك الأساسي هو إنتاج المحتوى.", href: "/offers/30-day-content-package", cta: "راجع باقة 30 يومًا" },
  { label: "إدارة شهرية", title: "تحتاج نشرًا ومتابعة وتطويرًا وتقارير", text: "هذا نطاق أوسع من صناعة المحتوى وحدها ويُبنى حسب عدد المنصات ومستوى المتابعة.", href: "/services/social-media-content", cta: "راجع خدمة الإدارة" },
  { label: "إعلانات", title: "هدفك الأساسي Leads أو مبيعات من الحملات", text: "إدارة الإعلانات وميزانية المنصة مسار مستقل عن إدارة المحتوى والحسابات.", href: "/paid-ads", cta: "راجع الإعلانات المدفوعة" },
];

const providerPaths = [
  { label: "FREELANCER", title: "فريلانسر", text: "مناسب عندما يكون النطاق صغيرًا ومحددًا وتحتاج مرونة وتكلفة أقل.", bullets: ["تكلفة أقل غالبًا", "تواصل مباشر", "قد يعتمد التنفيذ على شخص واحد"] },
  { label: "AGENCY / STUDIO", title: "وكالة أو استوديو", text: "مناسب عندما تحتاج أكثر من تخصص ومسار واضح للاستراتيجية والتنفيذ والمتابعة.", bullets: ["تخصصات متعددة", "استمرارية وتنظيم أكبر", "تكلفة أعلى من الفرد غالبًا"] },
  { label: "IN-HOUSE", title: "موظف داخلي", text: "مناسب عندما يكون لديك حجم محتوى مستمر ويحتاج النشاط وجودًا يوميًا داخل الفريق.", bullets: ["معرفة يومية بالنشاط", "سرعة تنسيق داخلية", "تكلفة ثابتة وتحتاج إدارة وتخصصات مساندة"] },
];

export default function SocialMediaManagementCostGuide() {
  const url = `${siteUrl}/guides/social-media-management-cost-saudi-arabia`;
  const whatsappHref = "https://wa.me/97339066649?text=" + encodeURIComponent("مرحبًا ديوانك، أريد تحديد النطاق المناسب لإدارة السوشيال ميديا. النشاط: ");
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Article", "@id": `${url}#article`, headline: title, description, inLanguage: "ar", datePublished: "2026-08-03", dateModified: "2026-08-16", mainEntityOfPage: url, author: { "@id": organizationId }, publisher: { "@id": organizationId }, about: ["إدارة السوشيال ميديا", "أسعار إدارة حسابات التواصل الاجتماعي", "باقات السوشيال ميديا", "صناعة المحتوى", "تكلفة إدارة إنستقرام"] },
    { "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "الرئيسية", item: siteUrl }, { "@type": "ListItem", position: 2, name: "أدلة النمو", item: `${siteUrl}/guides` }, { "@type": "ListItem", position: 3, name: title, item: url }] },
  ] };

  return <main className="guides-page cost-guide-page">
    <Header /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <article>
      <header className="article-hero shell cost-guide-hero">
        <nav className="article-breadcrumbs" aria-label="مسار الصفحة"><Link href="/">الرئيسية</Link><span>/</span><Link href="/guides">أدلة النمو</Link><span>/</span><span>أسعار السوشيال ميديا</span></nav>
        <span className="article-intent-label">دليل أسعار · السعودية</span>
        <h1>{title}</h1>
        <p>إذا تبحث عن السعر، خذ الرقم أولًا ثم قارن النطاق. الفرق الحقيقي في التكلفة ليس عدد البوستات فقط، بل هل تحتاج محتوى فقط أم إدارة حساب كاملة أم حملات إعلانية مستقلة.</p>
        <div className="article-meta"><span>آخر تحديث: 16 أغسطس 2026</span><span>وقت القراءة: 10 دقائق</span><span>التركيز: السعر واختيار النطاق</span></div>
      </header>

      <section className="shell cost-price-snapshot" aria-labelledby="price-snapshot-title">
        <div className="cost-snapshot-head">
          <span>الإجابة السريعة</span>
          <h2 id="price-snapshot-title">كم تتوقع أن تدفع شهريًا؟</h2>
          <p>نطاقات سوقية إرشادية تساعدك على فهم مستوى الخدمة قبل مقارنة العروض.</p>
        </div>
        <div className="cost-snapshot-grid">
          {priceSnapshot.map(([label, price, text]) => <article key={label}><small>{label}</small><strong>{price}</strong><p>{text}</p></article>)}
        </div>
        <div className="cost-snapshot-note"><strong>تحتاج المحتوى فقط؟</strong><span>قد لا تحتاج إدارة شهرية كاملة. ابدأ بنطاق محدد ثم وسّع الخدمة عند الحاجة.</span><Link href="/offers/30-day-content-package">شاهد باقة محتوى 30 يومًا</Link></div>
      </section>

      <div className="article-layout shell">
        <div className="article-body">
          <h2 id="short-answer">الإجابة المختصرة</h2>
          <div className="article-answer"><p><strong>الإدارة الشهرية ليست نفس باقة صناعة المحتوى.</strong> في السعودية تبدأ الإدارة المحدودة عادة من 1,500 إلى 3,500 ريال شهريًا، وتتراوح الإدارة المتكاملة غالبًا بين 3,500 و8,000 ريال، وقد تتجاوز ذلك مع تعدد المنصات والفيديو والتصوير. أما إذا كان احتياجك محتوى جاهزًا فقط، فقد تكون <Link href="/offers/30-day-content-package">باقة محتوى 30 يومًا</Link> أكثر كفاءة وأقل التزامًا.</p></div>

          <h2 id="choose">اختَر نوع الخدمة قبل مقارنة السعر</h2>
          <div className="cost-path-grid">
            {servicePaths.map((item) => <article key={item.label}><small>{item.label}</small><h3>{item.title}</h3><p>{item.text}</p><Link href={item.href}>{item.cta} <span>←</span></Link></article>)}
          </div>

          <h2 id="ranges">نطاقات الأسعار المتوقعة للإدارة الشهرية</h2>
          <div className="article-table"><table><thead><tr><th>النطاق الشهري</th><th>مناسب لمن؟</th><th>ما تتوقعه واقعيًا</th></tr></thead><tbody>
            <tr><td><strong>1,500–3,500 ريال</strong></td><td>نشاط ناشئ أو حساب واحد</td><td>خطة بسيطة وعدد محدود من التصميمات والنشر</td></tr>
            <tr><td><strong>3,500–8,000 ريال</strong></td><td>مشروع يريد حضورًا منتظمًا ونموًا</td><td>استراتيجية وكتابة وتصميم وفيديو خفيف وتقارير</td></tr>
            <tr><td><strong>8,000–20,000+ ريال</strong></td><td>علامة متعددة المنصات أو عالية الإنتاج</td><td>فريق متخصص وتصوير وفيديو وإدارة مجتمع وتحليل أعمق</td></tr>
          </tbody></table></div>
          <p>هذه نطاقات سوقية إرشادية وليست تسعيرة ثابتة من ديوانك. المقارنة الصحيحة تبدأ بتوحيد نطاق العمل أولًا.</p>

          <section className="cost-mid-cta" aria-label="اختيار النطاق المناسب">
            <span>قبل ما تختار الباقة</span>
            <h2>لا تدفع لإدارة كاملة إذا كان احتياجك محتوى فقط.</h2>
            <p>قارن النطاق أولًا: محتوى فقط، إدارة شهرية، أو إعلانات. إذا كان هدفك تجهيز شهر كامل من المحتوى، راجع الباقة المحددة قبل التزام شهري أكبر.</p>
            <div><Link className="button primary" href="/offers/30-day-content-package">شاهد باقة 30 يومًا</Link><Link className="cost-text-link" href="/services/social-media-content">أحتاج إدارة شهرية كاملة</Link></div>
          </section>

          <h2 id="instagram-cost">كم تكلفة إدارة حساب إنستقرام في السعودية؟</h2>
          <p>تكلفة إدارة إنستقرام لا يحددها اسم المنصة وحده. اسأل أولًا: هل المطلوب أفكار وتصميم وكابشنات فقط، أم نشر ومتابعة وتعليقات وتقارير؟ إذا كان النطاق محتوى فقط، لا تقارن سعره بعقد إدارة شهرية كاملة. وإذا كان الحساب يحتاج تصويرًا وفيديو وإدارة مجتمع، ترتفع التكلفة لأن التنفيذ صار أوسع من مجرد تصميم المنشورات.</p>

          <h2 id="content-cost">كم تكلفة صناعة المحتوى شهريًا؟</h2>
          <p>صناعة المحتوى قد تكون خدمة مستقلة عن إدارة الحساب. السعر يتأثر بعدد القطع، مستوى التصميم، كمية الريلز، الحاجة إلى تصوير، وعدد جولات المراجعة. لذلك الأفضل مقارنة <strong>المخرجات الفعلية</strong> لا اسم الباقة فقط. لو كان احتياجك شهرًا جاهزًا من الأفكار والتصميم والكابشنات وخطة النشر، راجع <Link href="/offers/30-day-content-package">باقة محتوى 30 يومًا</Link> كمثال على نطاق محدد وواضح.</p>

          <h2 id="included">ما الذي يجب أن تتضمنه باقة الإدارة؟</h2>
          {scope.map(([heading, body]) => <section key={heading}><h3>{heading}</h3><p>{body}</p></section>)}

          <h2 id="separate">خدمات لا تفترض أنها مشمولة</h2>
          <ul>
            <li><strong>التصوير الاحترافي:</strong> الموقع والمعدات والموديل وتنسيق المنتجات والمونتاج المتقدم.</li>
            <li><strong>إدارة الإعلانات:</strong> إعداد الحملات والتتبع والتحسين، بالإضافة إلى ميزانية المنصات نفسها.</li>
            <li><strong>خدمة العملاء الكاملة:</strong> الرد على الرسائل طوال اليوم، معالجة الشكاوى، وإغلاق المبيعات.</li>
            <li><strong>المؤثرون والمسابقات:</strong> أتعاب التعاون والجوائز والشحن وإدارة الاتفاقات.</li>
          </ul>

          <h2 id="drivers">ما الذي يرفع تكلفة إدارة الحساب؟</h2>
          <p>عدد المنصات، كمية الفيديو، الحاجة إلى تصوير، سرعة النشر، عدد اللغات، حجم التفاعل، جولات المراجعة، ومدى اعتماد العمل على فريق متخصص. المنصة الثانية لا تعني نسخ المحتوى نفسه؛ لكل منصة صيغة وسلوك جمهور مختلفان.</p>

          <h2 id="compare">كيف تقارن بين الباقات؟</h2>
          <p>قارن الهدف والاستراتيجية ونوع المخرجات لا العدد فقط. اسأل بوضوح: من يكتب؟ من يصمم؟ من ينشر؟ من يرد؟ هل توجد تقارير؟ وهل التصوير والإعلانات داخل السعر أم خارجه؟ وإذا كان احتياجك الأساسي هو المحتوى فقط، لا تدفع تلقائيًا مقابل إدارة شهرية كاملة.</p>

          <section className="cost-provider-compare" id="provider-compare" aria-labelledby="provider-compare-title">
            <h2 id="provider-compare-title">فريلانسر أم وكالة أم موظف داخلي؟</h2>
            <p>لا يوجد خيار أفضل دائمًا. القرار يعتمد على حجم العمل، عدد التخصصات المطلوبة، وكم تحتاج من متابعة يومية داخل نشاطك.</p>
            <div className="cost-provider-grid">{providerPaths.map((item) => <article className="cost-provider-card" key={item.title}><small>{item.label}</small><h3>{item.title}</h3><p>{item.text}</p><ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></article>)}</div>
          </section>

          <h2 id="methodology">كيف بنينا نطاقات الأسعار في هذا الدليل؟</h2>
          <div className="cost-methodology">
            <p>الأرقام هنا ليست عرض سعر من ديوانك. هي نطاقات إرشادية مبنية على حجم النطاق الذي يغيّر تكلفة التنفيذ، وأهم عناصر المقارنة هي:</p>
            <ul><li>عدد المنصات المطلوب إدارتها.</li><li>كمية التصميم والفيديو والتصوير.</li><li>هل الخدمة تشمل النشر وإدارة المجتمع.</li><li>عدد اللغات وجولات المراجعة وسرعة التنفيذ.</li><li>مستوى التقارير والتحليل والمتابعة المطلوبة.</li></ul>
            <p><strong>قاعدة المقارنة:</strong> لا تقارن السعر قبل توحيد عدد المنصات، عدد ونوع المخرجات، مستوى الفيديو والتصوير، وحجم إدارة المجتمع. غير ذلك قد يجعلك تقارن خدمتين مختلفتين كأنهما نفس الباقة.</p>
          </div>

          <section className="cost-decision-block" id="right-package" aria-labelledby="right-package-title">
            <span>اختيار سريع</span>
            <h2 id="right-package-title">كيف تعرف النطاق المناسب لك؟</h2>
            <div className="cost-decision-grid">
              <article><b>تحتاج المحتوى فقط؟</b><p>ابدأ بباقة محتوى محددة بدل عقد إدارة كامل.</p></article>
              <article><b>تحتاج نشرًا ومتابعة؟</b><p>الإدارة الشهرية أنسب لأنها تشمل تشغيل الحساب ومراجعته.</p></article>
              <article><b>تريد Leads ومبيعات؟</b><p>راجع الإعلانات والصفحة والتتبع، لا عدد البوستات فقط.</p></article>
              <article><b>الرسائل تضيع؟</b><p>المشكلة قد تكون في المتابعة وواتساب وCRM أكثر من المحتوى نفسه.</p></article>
            </div>
          </section>

          <h2 id="decision">متى تكون الإدارة الشهرية استثمارًا سيئًا؟</h2>
          <p>عندما لا يوجد عرض واضح أو طريقة سهلة للطلب أو قدرة على متابعة العملاء، أو عندما تكون حاجتك الفعلية مجرد تجهيز محتوى الشهر. وقتها قد يكون البدء بنطاق أصغر أكثر عقلانية.</p>
          <p><strong>لو تريد التنفيذ:</strong> راجع <Link href="/services/social-media-content">خدمة إدارة السوشيال ميديا وصناعة المحتوى</Link> للإدارة الأوسع، أو <Link href="/offers/30-day-content-package">باقة محتوى 30 يومًا</Link> إذا كنت تريد بداية محددة المخرجات ومنخفضة الالتزام.</p>

          <section className="article-faq" id="faq"><h2>أسئلة شائعة</h2>{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section>
          <section className="article-cta"><h2>مش متأكد تحتاج إدارة كاملة ولا محتوى فقط؟</h2><p>ابدأ بتحديد المشكلة: هل تحتاج من ينتج المحتوى، أم من يدير الحساب يوميًا، أم من يدير الإعلانات؟ لما نفصل النطاق، يصبح السعر والقرار أوضح.</p><div className="guide-lead-actions"><a className="button primary cost-whatsapp-cta" href={whatsappHref} target="_blank" rel="noopener noreferrer">أرسل حسابك ونحدد النطاق <span>↗</span></a><Link className="button secondary" href="/offers/30-day-content-package">راجع باقة 30 يومًا <span>←</span></Link><Link className="button secondary" href="/services/social-media-content">قارن خدمة الإدارة</Link></div></section>
        </div>
        <aside className="article-side" aria-label="محتويات الدليل"><b>في هذا الدليل</b><a href="#short-answer">الإجابة المختصرة</a><a href="#choose">اختيار نوع الخدمة</a><a href="#ranges">نطاقات الأسعار</a><a href="#instagram-cost">تكلفة إدارة إنستقرام</a><a href="#content-cost">تكلفة صناعة المحتوى</a><a href="#included">مكونات الباقة</a><a href="#separate">الخدمات المنفصلة</a><a href="#drivers">عوامل التكلفة</a><a href="#compare">مقارنة الباقات</a><a href="#provider-compare">فريلانسر أم وكالة؟</a><a href="#methodology">منهجية الأسعار</a><a href="#right-package">اختيار النطاق</a><a href="#decision">قبل التعاقد</a><a href="#faq">الأسئلة الشائعة</a><a className="button primary cost-whatsapp-cta" href={whatsappHref} target="_blank" rel="noopener noreferrer">اسأل عن حسابك</a></aside>
      </div>
    </article><Footer />
  </main>;
}
