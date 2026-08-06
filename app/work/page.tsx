import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "../lib/seo";
import { Footer, Header } from "../components/site-shell";
import { IdentityShowcase } from "./identity-showcase";
import "./work-page.css";

export const metadata: Metadata = createMetadata({
  title: "أعمال ديوانك | دراسات حالة في البراندينج والتسويق والأتمتة",
  description: "استكشف دراسات حالة ومشروعات ديوانك في استراتيجية البراند، تصميم الهوية، المواقع، التسويق وأتمتة واتساب وCRM.",
  path: "/work",
  keywords: ["أعمال ديوانك", "دراسات حالة تسويق", "تصميم هوية بصرية", "أتمتة واتساب CRM", "Brand Strategy Portfolio"],
});

const identityProjects = [
  { name: "ReachwayAD", sector: "التسويق والإعلان", image: "/work/reachwayad-remastered.webp", className: "reachway featured", summary: "هوية مؤسسية تجمع بين الثقة والحركة، مطبقة عبر القرطاسية ونقاط الحضور الرقمية." },
  { name: "Clinika", sector: "الجمال والعناية", image: "/work/clinika-remastered.webp", className: "clinika", summary: "هوية راقية لقطاع الجمال بملامح تحريرية هادئة وتطبيقات تعزز الثقة والانطباع الأول." },
  { name: "LUME", sector: "العناية بالبشرة", image: "/work/lume-showcase.svg", className: "lume", summary: "هوية هادئة وموثوقة لعلامة عناية بالبشرة، تجمع بين الطابع العلمي واللمسة الراقية عبر التغليف والمنتجات ونقاط البيع." },
  { name: "KOVA", sector: "العمارة والمنتجات", image: "/work/kova-showcase.svg", className: "kova wide", summary: "نظام بصري هندسي يوحّد العمارة والمنتجات والمواد داخل علامة معاصرة واضحة وقابلة للتطبيق." },
  { name: "Arab Sun", sector: "السفر والسياحة", image: "/work/arab-sun-remastered.webp", className: "arab-sun", summary: "نظام بصري يستلهم الشمس والحركة العربية، مطبق على التغليف والمواد المطبوعة." },
  { name: "NOMAI", sector: "الضيافة الفاخرة", image: "/work/nomai-showcase.svg", className: "nomai", summary: "هوية ضيافة راقية مستلهمة من الصحراء والهدوء وإحساس المكان، مطبقة على تجربة الإقامة والمواد الفندقية." },
  { name: "دار الصفاء", sector: "الرعاية الصحية", image: "/work/dar-al-safa-remastered.webp", className: "dar-safa wide", summary: "هوية طبية دافئة تجمع بين الرعاية والاحتراف عبر اللافتات والقرطاسية ونقاط الاستقبال." },
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
        ...identityProjects.map((item, index) => ({ "@type": "ListItem", position: index + 2, name: `${item.name} Brand Identity` })),
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

      <section className="identity-work shell" id="brand-identities" aria-labelledby="identity-work-title">
        <div className="identity-work-head">
          <div>
            <span className="section-label">[ أعمال هوية بصرية مختارة ]</span>
            <h2 id="identity-work-title">علامات بنينا لها<br/>حضورًا يمكن تذكّره.</h2>
          </div>
          <p>نماذج مختارة من تصميم وتطوير الهوية البصرية لقطاعات متنوعة، من الجمال والضيافة إلى العمارة والرعاية الصحية.</p>
        </div>
        <IdentityShowcase projects={identityProjects} />
        <Link className="button secondary identity-work-cta" href="/branding">اكتشف خدمة الهوية البصرية <span>←</span></Link>
      </section>

      <section className="testimonials-section" aria-labelledby="testimonials-title">
        <div className="shell">
          <div className="testimonials-head">
            <span className="section-label">[ آراء العملاء ]</span>
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
