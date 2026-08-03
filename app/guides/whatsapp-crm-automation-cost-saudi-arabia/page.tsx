import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../../components/site-shell";
import { createMetadata, organizationId, siteUrl } from "../../lib/seo";
import "../guides.css";

const title = "كم تكلفة أتمتة واتساب مع CRM في السعودية؟";
const description = "دليل عملي لفهم تكلفة إعداد أتمتة واتساب وربطها مع CRM في السعودية، وما الذي يدخل في رسوم التأسيس والاشتراك والتشغيل، وكيف تقارن العروض.";
export const metadata: Metadata = createMetadata({
  title: `${title} | دليل ديوانك`, description,
  path: "/guides/whatsapp-crm-automation-cost-saudi-arabia",
  keywords: ["تكلفة أتمتة واتساب", "أسعار واتساب CRM", "ربط واتساب CRM السعودية", "واتساب أوتوميشن سعر"],
});

const faqs = [
  { question: "هل السعر يشمل رسوم رسائل واتساب؟", answer: "ليس دائمًا. يجب أن يوضح العرض هل رسوم القناة والقوالب والمحادثات مدرجة أم تُدفع مباشرة لمزود الخدمة، لأن استهلاك الرسائل متغير." },
  { question: "هل أحتاج إلى ذكاء اصطناعي؟", answer: "ليس بالضرورة. الحجز والتذكير وجمع البيانات غالبًا تعمل بقواعد واضحة أقل تكلفة ومخاطر. يضاف AI عندما توجد أسئلة متنوعة تستحق فهم اللغة، مع مصدر معرفة وتحويل للموظف." },
  { question: "لماذا توجد رسوم تأسيس واشتراك شهري؟", answer: "التأسيس يغطي تحليل الرحلة وبناء التكاملات والاختبار. الاشتراك يغطي الاستضافة والمراقبة والصيانة والتحديثات والدعم، وقد يشمل تراخيص بحسب الاتفاق." },
  { question: "كيف أعرف أن العرض مناسب؟", answer: "اطلب نطاقًا مكتوبًا يحدد القنوات والتكاملات وعدد التدفقات والمسؤوليات والرسوم الخارجية والدعم ومؤشرات النجاح، ثم قارن النتيجة المتوقعة لا عدد الرسائل الآلية." },
];

const ranges = [
  ["تدفق أساسي", "1,500–4,000 ريال تأسيس", "رد أول، جمع بيانات، تحويل لموظف، وتكامل واحد بسيط."],
  ["نظام مبيعات أو حجز", "4,000–12,000 ريال تأسيس", "CRM ومراحل متابعة وحجز وتذكيرات وتقارير واختبارات أوسع."],
  ["تنفيذ متعدد الفروع", "12,000 ريال فأكثر", "صلاحيات وفروع وتكاملات متعددة وتقارير وحوكمة ودعم أعلى."],
  ["تشغيل وصيانة", "500–3,000+ ريال شهريًا", "بحسب الحجم والاستضافة والتراخيص والمراقبة والتطوير المستمر."],
];

export default function WhatsappCrmCostGuide() {
  const url = `${siteUrl}/guides/whatsapp-crm-automation-cost-saudi-arabia`;
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Article", "@id": `${url}#article`, headline: title, description, inLanguage: "ar", datePublished: "2026-08-04", dateModified: "2026-08-04", mainEntityOfPage: url, author: { "@id": organizationId }, publisher: { "@id": organizationId }, about: ["تكلفة أتمتة واتساب", "CRM", "السعودية"] },
    { "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "الرئيسية", item: siteUrl }, { "@type": "ListItem", position: 2, name: "أدلة النمو", item: `${siteUrl}/guides` }, { "@type": "ListItem", position: 3, name: title, item: url }] },
  ] };

  return <main className="guides-page">
    <Header /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <article>
      <header className="article-hero shell">
        <nav className="article-breadcrumbs" aria-label="مسار الصفحة"><Link href="/">الرئيسية</Link><span>/</span><Link href="/guides">أدلة النمو</Link><span>/</span><span>تكلفة واتساب وCRM</span></nav>
        <h1>{title}</h1>
        <p>السؤال الصحيح ليس: كم سعر البوت؟ بل: ما الرحلة التي سيشغّلها، وما الأنظمة التي سيربطها، ومن سيتابعها بعد الإطلاق؟</p>
        <div className="article-meta"><span>آخر تحديث: 4 أغسطس 2026</span><span>وقت القراءة: 8 دقائق</span><span>التركيز: التكلفة والعائد</span></div>
      </header>
      <div className="article-layout shell">
        <div className="article-body">
          <h2 id="short-answer">الإجابة المختصرة</h2>
          <div className="article-answer"><p><strong>قد يبدأ تنفيذ بسيط من نحو 1,500 ريال، بينما نظام الحجز أو المبيعات المتكامل غالبًا يقع بين 4,000 و12,000 ريال، وتزيد المشاريع متعددة الفروع عن ذلك.</strong> هذه نطاقات إرشادية وليست تسعيرة رسمية؛ الرسوم الشهرية ورسوم واتساب والتراخيص تعتمد على الحجم والمزود والنطاق.</p></div>
          <h2 id="ranges">نطاقات تكلفة إرشادية</h2>
          <div className="article-table"><table><thead><tr><th>المستوى</th><th>النطاق</th><th>ما الذي يعنيه؟</th></tr></thead><tbody>{ranges.map(([level, cost, scope]) => <tr key={level}><td><strong>{level}</strong></td><td>{cost}</td><td>{scope}</td></tr>)}</tbody></table></div>
          <h2 id="components">مم تتكوّن الفاتورة؟</h2>
          <ul>
            <li><strong>تحليل وتصميم الرحلة:</strong> الحالات والأسئلة ومراحل CRM وقواعد التحويل والإيقاف.</li>
            <li><strong>التنفيذ والتكامل:</strong> واتساب وCRM والحجز أو المتجر والإعلانات والتقارير.</li>
            <li><strong>القناة والاستهلاك:</strong> رسوم المزود والقوالب والمحادثات أو الرسائل حسب الاتفاق.</li>
            <li><strong>الاستضافة والتراخيص:</strong> CRM وأداة الأتمتة وقاعدة البيانات والمراقبة.</li>
            <li><strong>الصيانة والدعم:</strong> معالجة الأخطاء وتحديث التدفقات والتوافق مع تغييرات الأنظمة.</li>
          </ul>
          <h2 id="drivers">ما الذي يرفع التكلفة؟</h2>
          <p>يزداد السعر مع عدد الفروع واللغات والمستخدمين والتكاملات، وتعقيد التأهيل والحجز، ونقل البيانات القديمة، والحاجة إلى AI، ومستوى التقارير والأمان والدعم. عدد الرسائل وحده لا يحدد صعوبة المشروع.</p>
          <h2 id="compare">كيف تقارن بين عرضين؟</h2>
          <ol>
            <li>ثبّت نفس نطاق الرحلة والتكاملات قبل مقارنة الأرقام.</li>
            <li>افصل رسوم التأسيس عن التشغيل والاستهلاك والتراخيص.</li>
            <li>اسأل من يملك الحسابات والبيانات والتدفقات عند انتهاء العقد.</li>
            <li>اطلب خطة اختبار، تحويل للموظف، نسخًا احتياطيًا ومؤشرات نجاح.</li>
            <li>احسب تكلفة الفرص الضائعة والعمل اليدوي، لا سعر البرنامج فقط.</li>
          </ol>
          <h2 id="bad-investment">متى يصبح المشروع استثمارًا سيئًا؟</h2>
          <p>إذا لم توجد رسائل كافية أو رحلة واضحة أو شخص مسؤول عن المبيعات، فقد تكون إعادة تنظيم الرد اليدوي أولًا أكثر عقلانية. الأتمتة لا تصلح عرضًا ضعيفًا ولا فريقًا لا يتابع العملاء.</p>
          <p>لفهم البنية قبل التسعير، اقرأ دليل <Link href="/guides/whatsapp-crm-automation">كيف تعمل أتمتة واتساب مع CRM؟</Link>.</p>
          <section className="article-faq" id="faq"><h2>أسئلة شائعة</h2>{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section>
          <section className="article-cta"><h2>تريد تقديرًا يناسب رحلتك؟</h2><p>أرسل حجم الرسائل، عدد الموظفين، نظام الحجز أو CRM، والخطوات المطلوب تشغيلها؛ نحدد نطاقًا واضحًا قبل أي تنفيذ.</p><Link className="button primary" href="/whatsapp-automation">استعرض خدمة أتمتة واتساب <span>←</span></Link></section>
        </div>
        <aside className="article-side" aria-label="محتويات الدليل"><b>في هذا الدليل</b><a href="#short-answer">الإجابة المختصرة</a><a href="#ranges">نطاقات التكلفة</a><a href="#components">مكونات الفاتورة</a><a href="#drivers">عوامل السعر</a><a href="#compare">مقارنة العروض</a><a href="#bad-investment">متى لا تستثمر؟</a><a href="#faq">الأسئلة الشائعة</a><Link className="button primary" href="/contact">اطلب تقدير التكلفة</Link></aside>
      </div>
    </article><Footer />
  </main>;
}
