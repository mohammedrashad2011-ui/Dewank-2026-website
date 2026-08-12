import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../../components/site-shell";
import { createMetadata, organizationId, siteUrl } from "../../lib/seo";
import { WhatsAppStarterPrice } from "../../offers/whatsapp-automation-starter/localized-whatsapp-starter";
import "../guides.css";

const title = "كم تكلفة أتمتة واتساب في السعودية؟ الأسعار وCRM";
const description = "تعرف على تكلفة أتمتة واتساب للشركات في السعودية، الفرق بين باقة تأسيس بسيطة ونظام WhatsApp + CRM متكامل، ورسوم التشغيل والتكاملات قبل الشراء.";

export const metadata: Metadata = createMetadata({
  title: `${title} | دليل ديوانك`,
  description,
  path: "/guides/whatsapp-crm-automation-cost-saudi-arabia",
  keywords: [
    "تكلفة أتمتة واتساب",
    "سعر أتمتة واتساب",
    "أسعار واتساب أوتوميشن",
    "واتساب أوتوميشن سعر",
    "تكلفة CRM واتساب",
    "ربط واتساب CRM السعودية",
    "WhatsApp automation cost Saudi Arabia",
  ],
});

const faqs = [
  { question: "كم سعر أتمتة واتساب للشركات؟", answer: "لا يوجد سعر واحد لكل الأنظمة. يمكن البدء بباقة تأسيس محدودة مثل Starter، بينما يرتفع السعر عند إضافة CRM كامل أو حجز أو فروع أو تكاملات وتقارير وذكاء اصطناعي." },
  { question: "هل باقة 890 ريال هي سعر النظام الكامل؟", answer: "لا. سعر Starter هو لنطاق تأسيسي محدد للرد والتأهيل وجمع البيانات والتحويل للموظف. نظام WhatsApp + CRM المتكامل يُسعّر حسب الرحلة والتكاملات وحجم التشغيل." },
  { question: "هل السعر يشمل رسوم رسائل واتساب؟", answer: "ليس دائمًا. رسوم واتساب أو مزود الربط أو الأدوات والتراخيص الخارجية قد تكون منفصلة، ويجب توضيحها قبل التنفيذ." },
  { question: "هل أحتاج إلى ذكاء اصطناعي؟", answer: "ليس بالضرورة. الكثير من الرد والتأهيل والحجز والتذكير يمكن تنفيذه بقواعد واضحة. يضاف AI عندما توجد أسئلة متنوعة أو قاعدة معرفة تحتاج فهمًا أوسع للغة." },
  { question: "كيف أقارن بين عرضين؟", answer: "قارن نفس النطاق: عدد المسارات، CRM، الحجز، التكاملات، الفروع، الدعم، الرسوم الخارجية، وملكية الحسابات والبيانات. لا تقارن الرقم وحده." },
];

const ranges = [
  ["Starter محدود", "ابتداءً من السعر الظاهر في العرض", "رد وتأهيل وجمع بيانات وتحويل للموظف ضمن نطاق تأسيسي واضح."],
  ["نظام WhatsApp + CRM", "يُسعّر حسب النطاق", "مراحل مبيعات، CRM، حجز، تذكيرات، تقارير وتكاملات أوسع."],
  ["متعدد الفروع أو الفرق", "تقدير مخصص", "صلاحيات وفروع ومسارات متعددة وحوكمة وتقارير ودعم أعلى."],
  ["تشغيل وصيانة", "بحسب الأدوات والحجم", "استضافة وتراخيص ورسوم القناة والمراقبة والتطوير المستمر حسب الاتفاق."],
];

export default function WhatsappCrmCostGuide() {
  const url = `${siteUrl}/guides/whatsapp-crm-automation-cost-saudi-arabia`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Article", "@id": `${url}#article`, headline: title, description, inLanguage: "ar-SA", datePublished: "2026-08-04", dateModified: "2026-08-12", mainEntityOfPage: url, author: { "@id": organizationId }, publisher: { "@id": organizationId }, about: ["تكلفة أتمتة واتساب", "WhatsApp Automation", "CRM", "السعودية"] },
      { "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "الرئيسية", item: siteUrl }, { "@type": "ListItem", position: 2, name: "أدلة النمو", item: `${siteUrl}/guides` }, { "@type": "ListItem", position: 3, name: title, item: url }] },
    ],
  };

  return <main className="guides-page">
    <Header />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <article>
      <header className="article-hero shell">
        <nav className="article-breadcrumbs" aria-label="مسار الصفحة"><Link href="/">الرئيسية</Link><span>/</span><Link href="/guides">أدلة النمو</Link><span>/</span><span>تكلفة أتمتة واتساب</span></nav>
        <h1>{title}</h1>
        <p>تكلفة أتمتة واتساب تعتمد على ما تريد أن يحدث بعد أول رسالة: هل تحتاج ردًا وتأهيلًا بسيطًا، أم CRM وحجزًا وتذكيرات وتقارير وتكاملات كاملة؟</p>
        <div className="article-meta"><span>آخر تحديث: 12 أغسطس 2026</span><span>وقت القراءة: 7 دقائق</span><span>السوق: السعودية</span></div>
      </header>

      <div className="article-layout shell">
        <div className="article-body">
          <h2 id="short-answer">الإجابة المختصرة</h2>
          <div className="article-answer">
            <p>لو احتياجك هو <strong>رد آلي + تأهيل + جمع بيانات + تحويل للموظف</strong>، يمكنك البدء بباقة Starter بنطاق محدود وواضح:</p>
            <div style={{marginTop:"18px"}}><WhatsAppStarterPrice /></div>
            <p style={{marginTop:"16px"}}>أما لو تحتاج <strong>WhatsApp + CRM + حجز + مراحل مبيعات + تقارير أو تكاملات متعددة</strong>، فالسعر يحتاج تقديرًا حسب الرحلة والحجم. لذلك لا نعامل سعر Starter كسعر النظام الكامل.</p>
          </div>

          <h2 id="levels">أي مستوى تحتاج؟</h2>
          <div className="article-table"><table><thead><tr><th>المستوى</th><th>طريقة التسعير</th><th>ما الذي يعنيه؟</th></tr></thead><tbody>{ranges.map(([level, cost, scope]) => <tr key={level}><td><strong>{level}</strong></td><td>{cost}</td><td>{scope}</td></tr>)}</tbody></table></div>

          <h2 id="starter">متى تكفيك باقة Starter؟</h2>
          <p>Starter مناسبة عندما تكون المشكلة واضحة ومحدودة: نفس الأسئلة تتكرر، الرد يتأخر، بيانات العملاء تضيع، أو الموظف يدخل كل محادثة قبل أن يعرف هل العميل مناسب أصلًا. في هذه الحالة الهدف هو تقليل الاحتكاك وتنظيم أول جزء من الرحلة.</p>
          <p><Link href="/offers/whatsapp-automation-starter"><strong>راجع باقة أتمتة واتساب Starter</strong></Link> إذا كنت تريد نطاقًا تأسيسيًا واضحًا بدل بناء CRM كامل من البداية.</p>

          <h2 id="full-system">متى تحتاج WhatsApp + CRM كاملًا؟</h2>
          <p>النظام الكامل يصبح منطقيًا عندما يكون لديك فريق مبيعات أو حجوزات أو أكثر من مرحلة متابعة أو عدة فروع، أو عندما تحتاج تسجيل مصدر العميل وحالته وربط المحادثة بالتقارير والحجز والمهام والتذكيرات.</p>
          <p>في هذه الحالة راجع <Link href="/whatsapp-automation"><strong>خدمة أتمتة واتساب مع CRM</strong></Link> لأنها تستهدف نية النظام المتكامل، وليس مجرد الرد الآلي.</p>

          <h2 id="components">مم تتكوّن التكلفة؟</h2>
          <ul>
            <li><strong>تحليل الرحلة:</strong> الأسئلة والنوايا ومراحل التأهيل والتحويل للموظف.</li>
            <li><strong>التنفيذ:</strong> بناء التدفقات والردود وقواعد التشغيل والاستثناءات.</li>
            <li><strong>CRM والحجز:</strong> حفظ البيانات والمراحل والمواعيد والتذكيرات إن كانت مطلوبة.</li>
            <li><strong>التكاملات:</strong> النماذج والإعلانات والتقارير والأدوات الداخلية.</li>
            <li><strong>القناة والتراخيص:</strong> رسوم واتساب أو مزود الربط أو CRM أو أداة الأتمتة.</li>
            <li><strong>الدعم والتحسين:</strong> المراقبة وتعديل المسارات والردود بعد التشغيل.</li>
          </ul>

          <h2 id="drivers">ما الذي يرفع السعر؟</h2>
          <p>يزداد النطاق مع عدد الفروع واللغات والمستخدمين والمسارات والتكاملات، وتعقيد الحجز أو التأهيل، والحاجة إلى AI أو قاعدة معرفة، ومستوى التقارير والدعم. عدد الرسائل وحده لا يحدد تعقيد المشروع.</p>

          <h2 id="compare">كيف تقارن بين عرضين؟</h2>
          <ol>
            <li>تأكد أن العرضين يحلان نفس المشكلة ونفس نطاق الرحلة.</li>
            <li>افصل تكلفة التأسيس عن رسوم القناة والتراخيص والتشغيل.</li>
            <li>اسأل هل CRM كامل أم مجرد سجل بيانات بسيط.</li>
            <li>حدد من يملك الحسابات والبيانات والتدفقات عند انتهاء التعاون.</li>
            <li>قارن ما يحدث للـLead بعد الرسالة، لا عدد الردود التلقائية فقط.</li>
          </ol>

          <section className="article-faq" id="faq"><h2>أسئلة شائعة</h2>{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section>

          <section className="article-cta"><h2>تريد تعرف أي مستوى يناسبك؟</h2><p>لو تحتاج بداية محدودة اختر Starter. ولو عندك CRM أو حجز أو فريق ومراحل متابعة، أرسل لنا الرحلة الحالية ونحدد نطاق النظام الكامل.</p><Link className="button primary" href="/offers/whatsapp-automation-starter">شاهد باقة Starter <span>←</span></Link></section>
        </div>

        <aside className="article-side" aria-label="محتويات الدليل">
          <b>في هذا الدليل</b>
          <a href="#short-answer">الإجابة المختصرة</a>
          <a href="#levels">مستويات التنفيذ</a>
          <a href="#starter">متى تكفي Starter؟</a>
          <a href="#full-system">متى تحتاج CRM كاملًا؟</a>
          <a href="#components">مكونات التكلفة</a>
          <a href="#drivers">عوامل السعر</a>
          <a href="#compare">مقارنة العروض</a>
          <a href="#faq">الأسئلة الشائعة</a>
          <Link className="button primary" href="/whatsapp-automation">خدمة WhatsApp + CRM</Link>
        </aside>
      </div>
    </article>
    <Footer />
  </main>;
}
