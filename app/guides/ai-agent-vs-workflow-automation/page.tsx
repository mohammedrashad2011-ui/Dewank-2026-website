import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../../components/site-shell";
import { createMetadata, organizationId, siteUrl } from "../../lib/seo";
import "../guides.css";
import "../whatsapp-family-links.css";

const title = "وكيل ذكاء اصطناعي أم أتمتة سير عمل؟ كيف تقرر لشركتك في السعودية";
const description = "دليل عملي للفرق بين وكيل الذكاء الاصطناعي (AI Agent) وأتمتة سير العمل، ومتى تحتاج كلًا منهما، وحدود التسليم للموظف، وخصوصية بيانات العملاء قبل أن تبدأ.";
const anthropicSource = "https://www.anthropic.com/engineering/building-effective-agents";
const pdplSource = "https://dgp.sdaia.gov.sa/wps/portal/pdp/home";

export const metadata: Metadata = createMetadata({
  title: `${title} | دليل ديوانك`,
  description,
  path: "/guides/ai-agent-vs-workflow-automation",
  keywords: ["وكيل ذكاء اصطناعي للشركات", "AI Agent السعودية", "الفرق بين AI Agent وأتمتة سير العمل", "أتمتة سير العمل", "أتمتة الأعمال بالذكاء الاصطناعي"],
});

const faqs = [
  { question: "هل أحتاج وكيل ذكاء اصطناعي أم أتمتة عادية؟", answer: "ابدأ بأتمتة سير العمل إذا كانت الخطوات معروفة ومتكررة، مثل الحجز والتذكير وتحديث CRM. أضف الذكاء الاصطناعي في الخطوة التي تحتاج فهم نص أو تصنيفًا أو تلخيصًا. ولا تنتقل إلى وكيل يقرر خطواته بنفسه إلا إذا تعذّر حل المشكلة بمسار واضح، لأنه يحتاج حدودًا ومراقبة أكبر." },
  { question: "هل يستطيع الوكيل التعامل مع رسائل العملاء بالعربية؟", answer: "يمكن تصميم ردود ومسارات بالعربية والإنجليزية، لكن جودة الفهم تختلف حسب الأداة والنموذج وطريقة صياغة العملاء. لذلك تُختبر الرسائل الحقيقية لنشاطك قبل التشغيل، مع إخفاء البيانات الشخصية، وتُحدد حالات التحويل للموظف عند الشك." },
  { question: "ما القرارات التي لا يجب ترك أمرها لنموذج ذكاء اصطناعي؟", answer: "الأسعار الخاصة، والاسترداد، والشكاوى الحساسة، والحالات الصحية أو القانونية أو المالية، وأي موافقة تترتب عليها التزامات. هذه تبقى بيد موظف مسؤول، ويقتصر دور النظام على جمع المعلومات وتلخيصها وتسليمها." },
  { question: "ماذا عن خصوصية بيانات العملاء؟", answer: "تمر عبر أنظمة الأتمتة أسماء وأرقام وأسئلة العملاء، وهي بيانات شخصية تحكمها في السعودية أحكام نظام حماية البيانات الشخصية. اسأل أي مزود عن البيانات التي ستمر، وأين تُخزَّن، وهل تُرسل إلى أداة خارجية، وكيف تُحذف أو تُصدَّر، وراجع مستشارًا قانونيًا مؤهلًا لمتطلبات نشاطك." },
  { question: "كم تكلفة أتمتة الأعمال بالذكاء الاصطناعي؟", answer: "لا يوجد رقم واحد، لأن التكلفة تتغير بعدد المسارات والتكاملات وحجم الاستخدام والرسوم الخارجية للأدوات. يوجد عرض Starter لأتمتة واتساب بنطاق محدد، بينما تُسعَّر الأنظمة الأوسع بعد مراجعة العملية الحالية." },
];

export default function AiAgentVsWorkflowGuide() {
  const url = `${siteUrl}/guides/ai-agent-vs-workflow-automation`;
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Article", "@id": `${url}#article`, headline: title, description, inLanguage: "ar", datePublished: "2026-10-05", dateModified: "2026-10-05", mainEntityOfPage: url, author: { "@id": organizationId }, publisher: { "@id": organizationId }, about: ["وكيل الذكاء الاصطناعي", "أتمتة سير العمل", "أتمتة الأعمال بالذكاء الاصطناعي"] },
    { "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "الرئيسية", item: siteUrl }, { "@type": "ListItem", position: 2, name: "أدلة النمو", item: `${siteUrl}/guides` }, { "@type": "ListItem", position: 3, name: title, item: url }] },
  ] };

  return <main className="guides-page">
    <Header /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <article>
      <header className="article-hero shell">
        <nav className="article-breadcrumbs" aria-label="مسار الصفحة"><Link href="/">الرئيسية</Link><span>/</span><Link href="/guides">أدلة النمو</Link><span>/</span><span>الأتمتة والذكاء الاصطناعي</span></nav>
        <h1>{title}</h1>
        <p>ليس كل ما يُسمّى «وكيل ذكاء اصطناعي» يحتاجه نشاطك. الاختيار الصحيح يبدأ من العملية وحدود الخطأ المقبول، لا من الاسم الرائج.</p>
        <div className="article-meta"><span>آخر تحديث: 5 أكتوبر 2026</span><span>وقت القراءة: 7 دقائق</span><span>التركيز: الاختيار والمخاطر</span></div>
      </header>
      <div className="article-layout shell">
        <div className="article-body">
          <h2 id="short-answer">الإجابة المختصرة</h2>
          <div className="article-answer"><p><strong>أتمتة سير العمل تنفّذ خطوات كتبتها مسبقًا بالترتيب نفسه كل مرة. وكيل الذكاء الاصطناعي يقرر بنفسه ما يفعله بعد ذلك وأي أداة يستخدم لتحقيق هدف محدد.</strong> تصف Anthropic الفرق بأن <a className="article-link" href={anthropicSource} target="_blank" rel="noopener noreferrer">سير العمل أنظمة تُنسَّق فيها النماذج والأدوات عبر مسارات محددة مسبقًا، بينما الوكلاء أنظمة يوجّه فيها النموذج عملياته واستخدامه للأدوات ديناميكيًا</a>، وتنصح بالبدء بأبسط حل ممكن وعدم زيادة التعقيد إلا عند الحاجة. وهذا ما ننصح به لمعظم الشركات: سير عمل واضح أولًا، ثم AI في الخطوة التي تحتاج فهمًا.</p></div>
          <h2 id="difference">الفرق بينهما في الاستخدام اليومي</h2>
          <div className="article-table"><table><thead><tr><th>السؤال</th><th>أتمتة سير العمل</th><th>وكيل ذكاء اصطناعي</th></tr></thead><tbody>
            <tr><td><strong>من يحدد الخطوات؟</strong></td><td>أنت، مسبقًا وبوضوح.</td><td>النموذج يقرر الخطوات والأدوات ضمن حدود تضعها.</td></tr>
            <tr><td><strong>التوقع والمراجعة</strong></td><td>مرتفعان، فكل مسار يمكن اختباره ومراجعته.</td><td>أقل، ويحتاج سجلات ومراقبة وحدودًا صارمة.</td></tr>
            <tr><td><strong>السرعة والتكلفة</strong></td><td>أبسط في الغالب وأسهل في الصيانة.</td><td>تذكر Anthropic أن الأنظمة الوكيلة تقايض السرعة والتكلفة بأداء أفضل في بعض المهام.</td></tr>
            <tr><td><strong>الأنسب لـ</strong></td><td>حجز، تذكير، تحديث CRM، توزيع طلبات، نقل بيانات.</td><td>أسئلة متنوعة غير متوقعة، تلخيص محادثات، مهام من عدة خطوات متغيرة.</td></tr>
            <tr><td><strong>أبرز مخاطره</strong></td><td>جمود أمام حالة لم يتوقعها المسار.</td><td>تصرف غير متوقع أو قرار خارج الحدود المطلوبة.</td></tr>
          </tbody></table></div>
          <h2 id="examples">أمثلة من الأنشطة في السعودية والخليج</h2>
          <p>هذه أمثلة تصميمية توضح أين يدخل كل نوع، وليست نتائج مقاسة.</p>
          <ul>
            <li><strong>العيادات والمراكز:</strong> مسار ثابت يجمع الخدمة والفرع والموعد ويحجز ويذكّر. قد يفيد AI في فهم صياغات متنوعة للطلب نفسه. وتبقى الحالات الحساسة وتعديل المواعيد المعقد بيد الموظف.</li>
            <li><strong>العقارات:</strong> مسار يسجل نوع الطلب والمنطقة والميزانية التقريبية ويوزع الفرصة على المسؤول. قد يلخص AI المحادثة له. ويبقى التفاوض والعروض الخاصة بشريًا.</li>
            <li><strong>الخدمات والتجزئة:</strong> مسار يؤكد الطلب ويحدّث حالته ويتابع. قد يجيب AI عن أسئلة متنوعة اعتمادًا على معلومات معتمدة فقط. وتبقى الاسترجاعات والاستثناءات بيد الفريق.</li>
          </ul>
          <h2 id="handoff">حدود التسليم للموظف</h2>
          <ul>
            <li>حدد القرارات التي لا تُترك لنموذج: السعر الخاص، الاسترداد، الشكوى الحساسة، وأي موافقة تترتب عليها التزامات.</li>
            <li>اربط الإجابات بمصدر معتمد للمعلومات، وإذا لم تتوفر الإجابة فليحوّل النظام المحادثة إلى موظف بدل التخمين.</li>
            <li>اترك للعميل دائمًا طريقًا واضحًا للتحدث مع موظف، وأوقف الرسائل الآلية فور تدخله.</li>
            <li>سجّل ما أرسله النظام وما قرره كي تستطيع مراجعته وتصحيحه.</li>
            <li>اختبر على رسائل حقيقية من نشاطك بعد إخفاء البيانات الشخصية، ثم شغّل Pilot محدودًا قبل التوسع.</li>
          </ul>
          <p>لأمثلة على أسئلة التأهيل وقواعد التوجيه بحسب النشاط، راجع <Link className="article-link" href="/guides/whatsapp-crm-automation#qualification-routing">قسم التأهيل والتوجيه في دليل أتمتة واتساب مع CRM</Link>.</p>
          <h2 id="data">البيانات والخصوصية</h2>
          <p>تمر عبر أنظمة الأتمتة أسماء وأرقام وأسئلة العملاء. وبحسب <a className="article-link" href={pdplSource} target="_blank" rel="noopener noreferrer">المنصة الوطنية لحوكمة البيانات التابعة لسدايا</a>، فنظام حماية البيانات الشخصية هو النظام الأساسي الذي يعنى بحماية البيانات الشخصية للأفراد ويكفل حقوقهم ويحدد الالتزامات التي تقع على جهات التحكم وجهات المعالجة. اسأل أي مزود قبل التعاقد:</p>
          <ul>
            <li>ما البيانات التي ستمر عبر النظام، ولماذا؟</li>
            <li>أين تُخزَّن، ومن يستطيع الوصول إليها؟</li>
            <li>هل تُرسل محادثات العملاء إلى أداة أو نموذج خارجي؟</li>
            <li>كيف تُحذف البيانات أو تُصدَّر عند انتهاء التعاون؟</li>
            <li>من يملك الحسابات والتدفقات بعد التسليم؟</li>
          </ul>
          <p>المتطلبات التفصيلية تحددها الجهات المختصة وتتطور، فراجع صفحاتها الرسمية أو مستشارًا قانونيًا مؤهلًا. وما سبق معلومات عامة وليس استشارة قانونية.</p>
          <h2 id="start">كيف تبدأ دون أن تضيف AI إلى الفوضى؟</h2>
          <ol>
            <li>اختر عملية واحدة تتكرر يوميًا وتكلفك وقتًا أو عملاء.</li>
            <li>ارسم خطواتها الحالية كما تحدث فعلًا، حتى لو كانت فوضوية.</li>
            <li>حوّل الخطوات الثابتة إلى قواعد، وحدد الخطوة التي تحتاج فهمًا ليدخل فيها AI.</li>
            <li>ابنِ نسخة قابلة للاختبار مع نقاط تسليم للموظف.</li>
            <li>شغّل Pilot، راجع المحادثات والنتائج، ثم وسّع.</li>
          </ol>
          <p>قبل أن تتواصل مع مزود، جهّز وصفًا للعملية الحالية، وقائمة الأدوات التي تستخدمها، وأمثلة رسائل حقيقية بعد إخفاء بياناتها الشخصية، واسم من يستلم الحالات.</p>
          <h2 id="evaluate">كيف تقيّم عرض أتمتة قبل الموافقة؟</h2>
          <ul>
            <li>هل النطاق مكتوب: ما العمليات والمسارات والتكاملات المشمولة وما المستثنى؟</li>
            <li>هل يوضح العرض ما يقرره AI وما يقرره الموظف، ونقاط التحويل؟</li>
            <li>من يملك الحسابات والبيانات والتدفقات، وهل تستطيع تصديرها؟</li>
            <li>ما خطة الاختبار قبل التشغيل، وكيف تُراجع المحادثات بعده؟</li>
            <li>ما الرسوم الخارجية للأدوات والقنوات، وهل هي منفصلة عن تكلفة التنفيذ؟</li>
          </ul>
          <p>إذا كانت عمليتك تدور حول واتساب والتأهيل والحجز، فاقرأ <Link className="article-link" href="/guides/whatsapp-crm-automation#whatsapp-business-platform">الفرق بين تطبيق WhatsApp Business وWhatsApp Business Platform</Link>، وراجع <Link className="article-link" href="/whatsapp-automation">خدمة أتمتة واتساب مع CRM</Link>.</p>
          <section className="article-faq" id="faq"><h2>أسئلة شائعة</h2>{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section>
          <section className="article-cta"><h2>عندك عملية تريد أتمتتها؟</h2><p>نراجع العملية كما تعمل الآن، ونحدد أين تكفي القواعد وأين يفيد AI وما الذي يجب أن يبقى بيد الفريق.</p><Link className="button primary" href="/ai-automation">استعرض خدمة أتمتة الأعمال <span>←</span></Link></section>
        </div>
        <aside className="article-side" aria-label="محتويات الدليل"><b>في هذا الدليل</b><a href="#short-answer">الإجابة المختصرة</a><a href="#difference">الفرق بينهما</a><a href="#examples">أمثلة من الأنشطة</a><a href="#handoff">حدود التسليم</a><a href="#data">البيانات والخصوصية</a><a href="#start">كيف تبدأ</a><a href="#evaluate">تقييم العرض</a><a href="#faq">الأسئلة الشائعة</a><Link className="button primary" href="/contact">ناقش عمليتك</Link></aside>
      </div>
    </article><Footer />
  </main>;
}
