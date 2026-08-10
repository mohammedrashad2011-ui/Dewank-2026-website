import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../../components/site-shell";
import { createMetadata, organizationId, siteUrl } from "../../lib/seo";
import "../guides.css";

const title = "كيف تبني رحلة عميل من الإعلان إلى واتساب ثم الحجز؟";
const description = "دليل عملي لربط الإعلان بواتساب وCRM والحجز، وقياس نقاط التسرب من النقرة حتى الحضور أو البيع بدل الاكتفاء بعدد الرسائل.";

export const metadata: Metadata = createMetadata({
  title: `${title} | دليل ديوانك`,
  description,
  path: "/guides/ad-to-whatsapp-booking-journey",
  keywords: ["رحلة العميل من الإعلان إلى واتساب", "إعلانات واتساب", "تحويل رسائل واتساب إلى حجوزات", "ربط الإعلانات CRM", "زيادة حجوزات واتساب"],
});

const faqs = [
  { question: "هل كثرة رسائل واتساب تعني أن الحملة ناجحة؟", answer: "لا. قد تكون الرسائل كثيرة لكن غير مؤهلة أو لا تتحول إلى حجز. قيّم التكلفة لكل عميل مؤهل، ونسبة الحجز والحضور والبيع، لا تكلفة المحادثة وحدها." },
  { question: "هل أرسل العميل إلى واتساب مباشرة أم إلى صفحة هبوط؟", answer: "أرسل مباشرة عندما يكون العرض بسيطًا والقرار يحتاج سؤالًا أو حجزًا سريعًا. استخدم صفحة هبوط عندما يحتاج العميل إلى شرح أو مقارنة أو إثبات ثقة قبل المحادثة." },
  { question: "متى أحتاج CRM في هذه الرحلة؟", answer: "عندما تتعدد المصادر أو الموظفون، أو تحتاج متابعة منظمة ومعرفة حالة كل فرصة. إذا كانت الرسائل قليلة ويديرها شخص واحد بانضباط فقد تبدأ بتتبع أبسط ثم تتوسع." },
  { question: "ما أول نقطة أصلحها إذا كانت الحجوزات ضعيفة؟", answer: "حدد أولًا أين يحدث الانخفاض: الإعلان، فتح المحادثة، الرد، التأهيل، اختيار الموعد أم الحضور. إصلاح المرحلة الخطأ يرفع التكلفة من دون تحسين النتيجة." },
];

const stages = [
  ["1. إعلان بوعد محدد", "خدمة واحدة، مشكلة واضحة، وجمهور مناسب. الإعلان العام يجلب فضولًا أكثر مما يجلب نية شراء."],
  ["2. انتقال بلا احتكاك", "رسالة واتساب مسبقة وواضحة أو صفحة هبوط قصيرة، مع الحفاظ على مصدر الحملة والإعلان."],
  ["3. رد أول مفيد", "تأكيد سريع لما سيحدث بعد ذلك، ثم سؤالان أو ثلاثة للتأهيل بدل ترحيب طويل أو قائمة خدمات."],
  ["4. تسجيل الفرصة", "حفظ المصدر والخدمة والحالة والمسؤول والخطوة التالية داخل CRM أو نظام متابعة موحد."],
  ["5. الحجز", "عرض المواعيد المناسبة وتأكيدها وتسجيلها في التقويم والنظام من دون إدخال يدوي متكرر."],
  ["6. المتابعة والتذكير", "متابعة من لم يكمل الحجز، وتذكير من حجز، مع إيقاف الرسائل فور الرد أو الإلغاء."],
  ["7. الحضور والنتيجة", "تسجيل الحضور والبيع والقيمة، ثم إعادة هذه البيانات إلى التقارير لتقييم جودة الإعلان."],
];

export default function AdToWhatsappBookingJourneyGuide() {
  const url = `${siteUrl}/guides/ad-to-whatsapp-booking-journey`;
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Article", "@id": `${url}#article`, headline: title, description, inLanguage: "ar", datePublished: "2026-08-04", dateModified: "2026-08-10", mainEntityOfPage: url, author: { "@id": organizationId }, publisher: { "@id": organizationId }, about: ["رحلة العميل", "إعلانات واتساب", "CRM", "الحجز", "تحسين التحويل"] },
    { "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "الرئيسية", item: siteUrl }, { "@type": "ListItem", position: 2, name: "أدلة النمو", item: `${siteUrl}/guides` }, { "@type": "ListItem", position: 3, name: title, item: url }] },
  ] };

  return <main className="guides-page">
    <Header /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <article>
      <header className="article-hero shell">
        <nav className="article-breadcrumbs" aria-label="مسار الصفحة"><Link href="/">الرئيسية</Link><span>/</span><Link href="/guides">أدلة النمو</Link><span>/</span><span>الإعلان إلى الحجز</span></nav>
        <h1>{title}</h1>
        <p>نجاح الحملة لا ينتهي عند وصول الرسالة. الرحلة الناجحة تحافظ على سياق الإعلان، تؤهل العميل، تنقله إلى موعد واضح، ثم تقيس الحضور والبيع.</p>
        <div className="article-meta"><span>آخر تحديث: 10 أغسطس 2026</span><span>وقت القراءة: 9 دقائق</span><span>التركيز: التحويل والحجز</span></div>
      </header>
      <div className="article-layout shell">
        <div className="article-body">
          <h2 id="short-answer">الإجابة المختصرة</h2>
          <div className="article-answer"><p><strong>ابنِ الرحلة كنظام واحد، لا كإعلان منفصل وموظف واتساب منفصل.</strong> اربط الوعد الإعلاني بالرسالة الأولى، سجّل المصدر والحالة، قلّل أسئلة التأهيل، اجعل الحجز فوريًا، ثم تابع من توقف وقِس النتيجة حتى الحضور أو البيع.</p></div>
          <h2 id="stages">المراحل السبع من الإعلان إلى النتيجة</h2>
          {stages.map(([heading, body]) => <section key={heading}><h3>{heading}</h3><p>{body}</p></section>)}
          <h2 id="leaks">أين تتسرب الفرص؟</h2>
          <div className="article-table"><table><thead><tr><th>الإشارة</th><th>السبب المرجح</th><th>ما يجب اختباره</th></tr></thead><tbody>
            <tr><td>نقرات كثيرة ورسائل قليلة</td><td>وعد غير متطابق أو انتقال مربك</td><td>الـCTA والرسالة المسبقة وصفحة الهبوط</td></tr>
            <tr><td>رسائل كثيرة وتأهيل ضعيف</td><td>استهداف أو عرض يجذب الفضوليين</td><td>صياغة الوعد والسعر المبدئي وشروط الخدمة</td></tr>
            <tr><td>عملاء مؤهلون بلا حجز</td><td>رد بطيء أو خطوات كثيرة أو مواعيد غير واضحة</td><td>زمن الرد وتدفق الحجز والاعتراضات</td></tr>
            <tr><td>حجوزات كثيرة وحضور ضعيف</td><td>تأكيد وتذكير ضعيفان أو التزام منخفض</td><td>التأكيد وإعادة الجدولة والتذكيرات</td></tr>
          </tbody></table></div>
          <h2 id="metrics">المؤشرات الصحيحة لكل مرحلة</h2>
          <ul>
            <li><strong>الإعلان:</strong> تكلفة النقرة، فتح المحادثة، وجودة الرسائل بحسب الإعلان.</li>
            <li><strong>المحادثة:</strong> زمن الرد، اكتمال التأهيل، ونسبة العملاء المؤهلين.</li>
            <li><strong>الحجز:</strong> التحويل من عميل مؤهل إلى موعد، ووقت الوصول إلى الحجز.</li>
            <li><strong>التشغيل:</strong> الحضور، الإلغاء، إعادة الجدولة، والفرص بلا خطوة تالية.</li>
            <li><strong>العائد:</strong> تكلفة الحجز والحضور والبيع، والإيراد بحسب المصدر والحملة.</li>
          </ul>
          <h2 id="example">مثال تشخيصي سريع</h2>
          <p>إذا جلب الإعلان 100 محادثة، تأهل منها 40 عميلًا، وحجز 20، وحضر 12، فالمشكلة لا تُختصر في «نحتاج رسائل أكثر». لديك ثلاثة معدلات يجب فصلها: جودة التأهيل 40%، والتحويل إلى حجز 50% من المؤهلين، والحضور 60% من الحجوزات. قد يكون رفع الحضور والمتابعة أوفر من مضاعفة الإنفاق.</p>
          <h2 id="implementation">خطة تنفيذ خلال أربع خطوات</h2>
          <ol>
            <li>ارسم الرحلة الحالية وأضف رقمًا حقيقيًا لكل انتقال.</li>
            <li>اختر أكبر نقطة تسرب قابلة للإصلاح، لا أكثر أداة إثارة.</li>
            <li>طبّق مسارًا واحدًا لخدمة واحدة، مع قواعد تحويل للموظف وإيقاف المتابعة.</li>
            <li>اختبر أسبوعين أو حجمًا كافيًا، ثم قارن الحجز والحضور والعائد بخط الأساس.</li>
          </ol>
          <p>لفهم البنية التقنية والمتابعة اقرأ دليل <Link href="/guides/whatsapp-crm-automation">أتمتة واتساب مع CRM</Link>، وإذا كنت تختار النظام المناسب راجع <Link href="/guides/best-crm-whatsapp-saudi-arabia">دليل اختيار CRM لواتساب</Link>.</p>
          <p>إذا كان الخلل بعد وصول الرسالة وليس في الإعلان نفسه، راجع <Link href="/whatsapp-automation">خدمة أتمتة واتساب مع CRM</Link>. ولتجربة نطاق بداية واضح قبل بناء منظومة أوسع، يمكنك الاطلاع على <Link href="/offers/whatsapp-automation-starter">عرض أتمتة واتساب Starter</Link>.</p>
          <section className="article-faq" id="faq"><h2>أسئلة شائعة</h2>{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section>
          <section className="article-cta"><h2>تريد معرفة أين تضيع حجوزاتك؟</h2><p>نراجع الإعلان ورسائل واتساب والحجز والمتابعة والقياس، ثم نحدد نقطة التسرب ذات الأولوية ونبني مسارًا يناسب فريقك.</p><Link className="button primary" href="/whatsapp-automation">استعرض خدمة أتمتة واتساب <span>←</span></Link></section>
        </div>
        <aside className="article-side" aria-label="محتويات الدليل"><b>في هذا الدليل</b><a href="#short-answer">الإجابة المختصرة</a><a href="#stages">مراحل الرحلة</a><a href="#leaks">نقاط التسرب</a><a href="#metrics">مؤشرات القياس</a><a href="#example">مثال تشخيصي</a><a href="#implementation">خطة التنفيذ</a><a href="#faq">الأسئلة الشائعة</a><Link className="button primary" href="/contact">راجع رحلتك</Link></aside>
      </div>
    </article><Footer />
  </main>;
}
