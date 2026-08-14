import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "../lib/seo";
import { Footer, Header } from "../components/site-shell";
import { IdentityShowcase } from "./identity-showcase";
import "./work-page.css";
import "./work-proof-refinement.css";

export const metadata: Metadata = createMetadata({
  title: "أعمال ديوانك ودراسات حالة | براندينج، مواقع وأتمتة",
  description: "شاهد أعمال ودراسات حالة ديوانك في البراندينج والهوية، المواقع وتجربة المستخدم، وأتمتة واتساب وCRM، مع شرح التحدي والقرار والتنفيذ والأثر.",
  path: "/work",
  keywords: ["أعمال ديوانك", "دراسات حالة تسويق", "دراسات حالة براندينج", "تصميم هوية بصرية", "تصميم مواقع للشركات", "أتمتة واتساب CRM", "Brand Strategy Portfolio"],
});

const identityProjects = [
  { name: "ReachwayAD", sector: "التسويق والإعلان", image: "/work/reachwayad-remastered.webp", className: "reachway featured", summary: "هوية مؤسسية تجمع بين الثقة والحركة، مطبقة عبر القرطاسية ونقاط الحضور الرقمية." },
  { name: "Clinika", sector: "الجمال والعناية", image: "/work/clinika-remastered.webp", className: "clinika", summary: "هوية راقية لقطاع الجمال بملامح تحريرية هادئة وتطبيقات تعزز الثقة والانطباع الأول." },
  { name: "Arab Sun", sector: "السفر والسياحة", image: "/work/arab-sun-remastered.webp", className: "arab-sun", summary: "نظام بصري يستلهم الشمس والحركة العربية، مطبق على التغليف والمواد المطبوعة." },
  { name: "دار الصفاء", sector: "الرعاية الصحية", image: "/work/dar-al-safa-remastered.webp", className: "dar-safa wide", summary: "هوية طبية دافئة تجمع بين الرعاية والاحتراف عبر اللافتات والقرطاسية ونقاط الاستقبال." },
];

const proofPaths = [
  { no: "01", label: "أتمتة ومتابعة", title: "من المحادثة إلى الحجز", text: "شاهد كيف تحولت المتابعة اليدوية إلى رحلة قابلة للقياس وربط CRM.", href: "#case-studies" },
  { no: "02", label: "براند وهوية", title: "من الفكرة إلى حضور متماسك", text: "نماذج فعلية لهويات بصرية عبر قطاعات مختلفة، مع تطبيقات واضحة للعلامة.", href: "#brand-identities" },
  { no: "03", label: "طريقة التفكير", title: "من التحدي إلى قرار استراتيجي", text: "مشروعات مفاهيمية نستخدمها لعرض التفكير وراء التموضع والهوية والتجربة.", href: "#concept-work" },
];

const concepts = [
  {
    name: "NOMAÏ",
    type: "ضيافة فاخرة",
    challenge: "تمييز وجهة صحراوية فاخرة عن الصور النمطية المتكررة في قطاع الضيافة.",
    decision: "بناء العلامة حول الصمت والبطء وإيقاع المكان بدل الفخامة التقليدية.",
    scope: "التموضع، التسمية، الهوية البصرية، واتجاه تجربة الضيف.",
    impact: "أثر مستهدف: علامة أسهل تذكّرًا وأكثر قدرة على تبرير تجربة وسعر أعلى.",
  },
  {
    name: "KOVA",
    type: "عمارة ومنتجات",
    challenge: "توحيد العمارة والمنتجات والمحتوى داخل علامة واحدة دون فقدان الدقة.",
    decision: "تحويل الهندسة من شكل بصري إلى لغة ثابتة تُستخدم عبر كل نقطة تواصل.",
    scope: "التموضع، نظام الهوية، واتجاه التجربة الرقمية.",
    impact: "أثر مستهدف: وضوح أكبر وتناسق أسرع عند إطلاق منتجات ومشروعات جديدة.",
  },
  {
    name: "LUME",
    type: "عناية بالبشرة",
    challenge: "سوق مزدحم بوعود جمالية متشابهة وضعف واضح في الثقة.",
    decision: "تقديم الدليل العلمي قبل الوعد الجمالي داخل تجربة تحريرية راقية.",
    scope: "التسمية، التغليف، ونظام الحملات.",
    impact: "أثر مستهدف: رفع المصداقية وتسهيل فهم القيمة قبل قرار الشراء.",
  },
];

const testimonials = [
  {
    quote: "كان رشاد مبادرًا ومنتبهًا جدًا لاحتياجاتي، وصمّم شعارًا يعكس قيم شركتي بشكل مثالي.",
    name: "صوفيا فلوريس",
    country: "الولايات المتحدة",
  },
  {
    quote: "قدرته على تحليل البيانات وعرضها كانت ممتازة. سرعة التنفيذ وجودة العمل جعلتاه مميزًا في أبحاث السوق.",
    name: "مات موناكو",
    country: "الولايات المتحدة",
  },
  {
    quote: "كانت عملية اختيار الاسم مدروسة واحترافية ومنظمة. تواصل ممتاز، وأفكار مبتكرة، والنتيجة النهائية أسعدتني فعلًا.",
    name: "Loukastaki25",
    country: "قبرص",
  },
];

export default function WorkPage() {
  const whatsappHref = "https://wa.me/97339066649?text=" + encodeURIComponent("مرحبًا ديوانك، شاهدت صفحة الأعمال وأريد مناقشة مشروع مشابه. نشاطي هو: ");
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Dewank Work and Case Studies",
    url: "https://dewank.com/work",
    description: "دراسات حالة ومشروعات في البراندينج والمواقع والأتمتة.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Clinic WhatsApp Automation and CRM Case Study" },
        ...identityProjects.map((item, index) => ({ "@type": "ListItem", position: index + 2, name: `${item.name} Brand Identity` })),
        ...concepts.map((item, index) => ({ "@type": "ListItem", position: index + identityProjects.length + 2, name: item.name })),
      ],
    },
  };

  return (
    <main className="work-page work-proof-page" dir="rtl">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="work-hero shell">
        <span className="section-label">أعمال ديوانك</span>
        <h1>النتيجة مهمة.<br/><em>لكن القرار الذي صنعها أهم.</em></h1>
        <p>هنا لا نعرض لقطات جميلة فقط. نوضح التحدي، القرار، ما تم تنفيذه، وما الذي تغيّر أو كان مستهدفًا، حتى ترى طريقة التفكير قبل أن تبدأ مشروعك معنا.</p>
        <div className="work-hero-actions">
          <a className="button primary" href={whatsappHref} target="_blank" rel="noopener noreferrer">ناقش مشروعًا مشابهًا <span>↗</span></a>
          <a className="button secondary" href="#case-studies">ابدأ بدراسة الحالة</a>
        </div>
      </section>

      <section className="work-trust shell" aria-label="ما يميز طريقة عمل ديوانك">
        <div>استراتيجية قبل التصميم</div>
        <div>خبرة عملية في أسواق الخليج</div>
        <div>براند وموقع ومحتوى في منظومة واحدة</div>
        <div>تنفيذ مخصص، لا قوالب جاهزة</div>
      </section>

      <section className="proof-paths shell" aria-labelledby="proof-paths-title">
        <div className="proof-paths-head">
          <span className="section-label">اختر نوع الدليل</span>
          <h2 id="proof-paths-title">لا تتصفح كل شيء.<br/><em>اذهب لما يشبه تحديك.</em></h2>
        </div>
        <div className="proof-path-grid">
          {proofPaths.map((item) => <a href={item.href} className="proof-path-card" key={item.no}><small>{item.no} · {item.label}</small><h3>{item.title}</h3><p>{item.text}</p><span>شاهد القسم ↓</span></a>)}
        </div>
      </section>

      <section className="real-case shell" id="case-studies">
        <div className="real-case-grid">
          <div className="real-case-copy">
            <span className="section-label">دراسة حالة فعلية · البحرين</span>
            <h2>من رسائل متفرقة<br/>إلى رحلة متابعة قابلة للقياس.</h2>
            <p>عيادة تجميل كانت تعتمد على الرد والمتابعة اليدوية عبر واتساب، ما تسبب في بطء الاستجابة وضياع فرص وعدم انتظام التذكير بالمواعيد.</p>
            <div className="case-facts">
              <div><b>التحدي</b><span>عملاء يصلون من الحملات، لكن الرحلة بعد الرسالة لم تكن موحدة أو قابلة للمتابعة.</span></div>
              <div><b>القرار</b><span>ربط المحادثة بالتأهيل والحجز والتذكير والمتابعة داخل CRM واحد.</span></div>
              <div><b>ما نفذناه</b><span>ردود ذكية، تصنيف العملاء، مسارات حجز، تذكيرات، وإعادة تواصل مع العملاء غير المكتملين.</span></div>
              <div><b>الأثر التجاري</b><span>تحسين التحويل وتقليل العبء اليدوي مع رؤية أوضح لحالة كل عميل.</span></div>
            </div>
            <div className="case-service-links">
              <Link className="button primary case-cta" href="/whatsapp-automation">أتمتة واتساب وCRM <span>←</span></Link>
              <Link href="/ai-automation">شاهد أتمتة الأعمال بالذكاء الاصطناعي</Link>
            </div>
          </div>

          <div className="metrics-panel" aria-label="نتائج دراسة الحالة">
            <span className="metric-kicker">نتائج تشغيل فعلية تقريبية</span>
            <div className="metric"><strong>+25</strong><span>نقطة تقريبًا في معدل الحضور</span></div>
            <div className="metric"><strong>+30%</strong><span>تحسن تقريبي في التحويل من العميل إلى الحجز</span></div>
            <div className="metric"><strong>-40%</strong><span>انخفاض تقريبي في ضغط العمل على الاستقبال</span></div>
            <p className="metric-note">النتائج مستندة إلى التشغيل الفعلي للمشروع، وقد تختلف حسب حجم الرسائل وجودة العرض وسرعة استجابة الفريق.</p>
          </div>
        </div>
      </section>

      <section className="identity-work shell" id="brand-identities" aria-labelledby="identity-work-title">
        <div className="identity-work-head">
          <div>
            <span className="section-label">أعمال هوية بصرية مختارة</span>
            <h2 id="identity-work-title">علامات بنينا لها<br/>حضورًا يمكن تذكّره.</h2>
          </div>
          <p>نماذج من أعمال ديوانك الفعلية في تصميم وتطوير الهوية البصرية لقطاعات متنوعة. اضغط على أي مشروع لعرضه بجودة أكبر.</p>
        </div>
        <IdentityShowcase projects={identityProjects} />
        <div className="identity-actions">
          <Link className="button secondary identity-work-cta" href="/branding">اكتشف خدمة الهوية البصرية <span>←</span></Link>
          <Link href="/services/brand-naming">تحتاج اسمًا للعلامة؟</Link>
        </div>
      </section>

      <section className="testimonials-section" aria-labelledby="testimonials-title">
        <div className="shell">
          <div className="testimonials-head">
            <span className="section-label">آراء العملاء</span>
            <h2 id="testimonials-title">الثقة لا نصممها.<br/><em>نبنيها مع كل مشروع.</em></h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <figure className={`testimonial-card${index === 0 ? " featured" : ""}`} key={testimonial.name}>
                <div className="testimonial-stars" aria-label="5 من 5 نجوم">★★★★★</div>
                <blockquote>«{testimonial.quote}»</blockquote>
                <figcaption>
                  <span>{testimonial.name}</span>
                  <small>{testimonial.country}</small>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="testimonials-note">تُرجمت الآراء من لغتها الأصلية مع الحفاظ على معناها.</p>
        </div>
      </section>

      <section className="concepts-section" id="concept-work">
        <div className="shell">
          <div className="concepts-head">
            <div>
              <span className="section-label">استراتيجية التفكير</span>
              <h2>نختبر طريقة التفكير،<br/>لا شكل الشعار فقط.</h2>
            </div>
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
        <span className="section-label">كيف نعمل</span>
        <h2>من التحدي إلى نظام<br/>يمكن تنفيذه وقياسه.</h2>
        <div className="work-method-grid">
          <div><span>01</span><h3>نفهم التحدي</h3><p>نحدد أين يتوقف النمو وما الذي يحتاجه العميل فعلًا.</p></div>
          <div><span>02</span><h3>نختار القرار</h3><p>نحدد التموضع والرسالة والأولوية قبل الدخول في التنفيذ.</p></div>
          <div><span>03</span><h3>نبني النظام</h3><p>نحوّل القرار إلى هوية أو موقع أو محتوى أو أتمتة مترابطة.</p></div>
          <div><span>04</span><h3>نقيس ونحسّن</h3><p>نراجع الأداء ونطوّر ما يرفع الوضوح والتحويل والكفاءة.</p></div>
        </div>
        <div className="work-method-links"><Link href="/services">استكشف كل الخدمات</Link><Link href="/website-design">تصميم المواقع</Link><Link href="/paid-ads">إدارة الإعلانات</Link><Link href="/whatsapp-automation">أتمتة واتساب</Link></div>
      </section>

      <section className="work-final">
        <div>
          <span className="section-label">الخطوة التالية</span>
          <h2>شاهدت الدليل.<br/><em>الآن نحدد ما يناسب مشروعك.</em></h2>
        </div>
        <div>
          <p>أرسل لنا نشاطك والتحدي الحالي. سنحدد هل تحتاج براند، موقع، إعلانات، أتمتة أو مزيجًا أصغر يخدم النتيجة فعلًا.</p>
          <a className="button primary" href={whatsappHref} target="_blank" rel="noopener noreferrer">ناقش مشروعك على واتساب <span>↗</span></a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
