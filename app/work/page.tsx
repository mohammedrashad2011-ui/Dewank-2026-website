import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "../lib/seo";
import { Footer, Header } from "../components/site-shell";
import "./work-page.css";

export const metadata: Metadata = createMetadata({
  title: "أعمال ديوانك | دراسات حالة في البراندينج والتسويق والأتمتة",
  description: "استكشف دراسات حالة ومشروعات ديوانك في استراتيجية البراند، تصميم الهوية، المواقع، التسويق وأتمتة واتساب وCRM.",
  path: "/work",
  keywords: ["أعمال ديوانك", "دراسات حالة تسويق", "تصميم هوية بصرية", "أتمتة واتساب CRM", "Brand Strategy Portfolio"],
});

const concepts = [
  {
    name: "NOMAÏ",
    type: "ضيافة فاخرة · مشروع مفاهيمي",
    challenge: "تمييز وجهة صحراوية فاخرة عن الصور النمطية المتكررة في قطاع الضيافة.",
    decision: "بناء العلامة حول الصمت والبطء وإيقاع المكان بدل الفخامة التقليدية.",
    scope: "التموضع، التسمية، الهوية البصرية، واتجاه تجربة الضيف.",
    impact: "أثر مستهدف: علامة أسهل تذكّرًا وأكثر قدرة على تبرير تجربة وسعر أعلى.",
  },
  {
    name: "KOVA",
    type: "عمارة ومنتجات · مشروع مفاهيمي",
    challenge: "توحيد العمارة والمنتجات والمحتوى داخل علامة واحدة دون فقدان الدقة.",
    decision: "تحويل الهندسة من شكل بصري إلى لغة ثابتة تُستخدم عبر كل نقطة تواصل.",
    scope: "التموضع، نظام الهوية، واتجاه التجربة الرقمية.",
    impact: "أثر مستهدف: وضوح أكبر وتناسق أسرع عند إطلاق منتجات ومشروعات جديدة.",
  },
  {
    name: "LUME",
    type: "عناية بالبشرة · مشروع مفاهيمي",
    challenge: "سوق مزدحم بوعود جمالية متشابهة وضعف واضح في الثقة.",
    decision: "تقديم الدليل العلمي قبل الوعد الجمالي داخل تجربة تحريرية راقية.",
    scope: "التسمية، التغليف، ونظام الحملات.",
    impact: "أثر مستهدف: رفع المصداقية وتسهيل فهم القيمة قبل قرار الشراء.",
  },
];

export default function WorkPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Dewank Work and Case Studies",
    url: "https://dewank.com/work",
    description: "دراسات حالة ومشروعات في البراندينج والتسويق والمواقع والأتمتة.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Clinic WhatsApp Automation and CRM Case Study" },
        ...concepts.map((item, index) => ({ "@type": "ListItem", position: index + 2, name: item.name })),
      ],
    },
  };

  return (
    <main className="work-page" dir="rtl">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="work-hero shell">
        <span className="section-label">[ أعمال ديوانك ]</span>
        <h1>لا نعرض تصاميم جميلة فقط.<br/><em>نعرض قرارات تبني علامة أقوى.</em></h1>
        <p>كل مشروع يبدأ بتحدٍ تجاري، ثم نترجمه إلى استراتيجية وهوية وتجربة أو نظام يساعد العلامة على أن تُفهم، تُتذكر، وتتحرك نحو نتيجة واضحة.</p>
        <div className="work-hero-actions">
          <Link className="button primary" href="/contact">ابدأ مشروعك <span>←</span></Link>
          <a className="button secondary" href="#case-studies">استكشف دراسات الحالة</a>
        </div>
      </section>

      <section className="work-trust shell" aria-label="ما يميز طريقة عمل ديوانك">
        <div>استراتيجية قبل التصميم</div>
        <div>خبرة عملية في أسواق الخليج</div>
        <div>براند وموقع ومحتوى في منظومة واحدة</div>
        <div>تنفيذ مخصص، لا قوالب جاهزة</div>
      </section>

      <section className="real-case shell" id="case-studies">
        <div className="real-case-grid">
          <div className="real-case-copy">
            <span className="section-label">[ دراسة حالة حقيقية · البحرين ]</span>
            <h2>من رسائل متفرقة<br/>إلى رحلة متابعة قابلة للقياس.</h2>
            <p>عيادة تجميل كانت تعتمد على الرد والمتابعة اليدوية عبر واتساب، ما تسبب في بطء الاستجابة وضياع فرص وعدم انتظام التذكير بالمواعيد.</p>
            <div className="case-facts">
              <div><b>التحدي</b><span>عملاء يصلون من الحملات، لكن الرحلة بعد الرسالة لم تكن موحدة أو قابلة للمتابعة.</span></div>
              <div><b>القرار</b><span>ربط المحادثة بالتأهيل والحجز والتذكير والمتابعة داخل CRM واحد.</span></div>
              <div><b>ما نفذناه</b><span>ردود ذكية، تصنيف العملاء، مسارات حجز، تذكيرات، وإعادة تواصل مع العملاء غير المكتملين.</span></div>
              <div><b>الأثر التجاري</b><span>تحسين التحويل وتقليل العبء اليدوي مع رؤية أوضح لحالة كل عميل.</span></div>
            </div>
            <Link className="button primary case-cta" href="/whatsapp-automation">اكتشف خدمة أتمتة واتساب <span>←</span></Link>
          </div>

          <div className="metrics-panel" aria-label="نتائج دراسة الحالة">
            <div className="metric"><strong>+25</strong><span>نقطة تقريبًا في معدل الحضور</span></div>
            <div className="metric"><strong>+30%</strong><span>تحسن تقريبي في التحويل من العميل إلى الحجز</span></div>
            <div className="metric"><strong>-40%</strong><span>انخفاض تقريبي في ضغط العمل على الاستقبال</span></div>
            <p className="metric-note">النتائج مستندة إلى التشغيل الفعلي للمشروع، وقد تختلف حسب حجم الرسائل وجودة العرض وسرعة استجابة الفريق.</p>
          </div>
        </div>
      </section>

      <section className="concepts-section">
        <div className="shell">
          <div className="concepts-head">
            <div>
              <span className="section-label">[ مشروعات مفاهيمية أصلية ]</span>
              <h2>نختبر طريقة التفكير،<br/>لا شكل الشعار فقط.</h2>
            </div>
            <p>هذه المشروعات ليست أعمالًا تعاقدية مع علامات خارجية. أنشأناها لعرض كيف نحول التحدي إلى قرار استراتيجي ثم إلى نظام بصري وتجربة متماسكة.</p>
          </div>

          <div className="concept-grid">
            {concepts.map((item) => (
              <article className="concept-card" key={item.name}>
                <span className="concept-label">{item.type}</span>
                <h3 dir="ltr">{item.name}</h3>
                <dl>
                  <div><dt>التحدي</dt><dd>{item.challenge}</dd></div>
                  <div><dt>القرار الاستراتيجي</dt><dd>{item.decision}</dd></div>
                  <div><dt>ما صممناه</dt><dd>{item.scope}</dd></div>
                  <div><dt>الأثر المستهدف</dt><dd>{item.impact}</dd></div>
                </dl>
                <Link href="/branding">هل تواجه تحديًا مشابهًا؟ <span>←</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="work-method shell">
        <span className="section-label">[ كيف نعمل ]</span>
        <h2>من التحدي إلى نظام<br/>يمكن تنفيذه وقياسه.</h2>
        <div className="work-method-grid">
          <div><span>01</span><h3>نفهم التحدي</h3><p>نحدد أين يتوقف النمو وما الذي يحتاجه العميل فعلًا.</p></div>
          <div><span>02</span><h3>نختار القرار</h3><p>نحدد التموضع والرسالة والأولوية قبل الدخول في التنفيذ.</p></div>
          <div><span>03</span><h3>نبني النظام</h3><p>نحوّل القرار إلى هوية أو موقع أو محتوى أو أتمتة مترابطة.</p></div>
          <div><span>04</span><h3>نقيس ونحسّن</h3><p>نراجع الأداء ونطوّر ما يرفع الوضوح والتحويل والكفاءة.</p></div>
        </div>
      </section>

      <section className="work-final">
        <div>
          <span className="section-label">[ الخطوة التالية ]</span>
          <h2>مشروعك لا يحتاج تصميمًا أكثر.<br/><em>يحتاج قرارًا أوضح.</em></h2>
        </div>
        <div>
          <p>أخبرنا أين يتوقف النمو، وسنقترح عليك أقصر مسار عملي بدل إضافة خدمات لا تحتاجها.</p>
          <Link className="button primary" href="/contact">ناقش مشروعك معنا <span>←</span></Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
