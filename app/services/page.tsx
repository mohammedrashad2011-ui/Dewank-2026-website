import Link from "next/link";
import { Footer, Header, PageHero } from "../components/site-shell";

const groups = [
  { n: "01", en: "BRAND SYSTEMS", tone: "brand", title: "البراندينج الاستراتيجي", lead: "نبني الأساس الذي يجعل كل قرار لاحق أكثر وضوحًا واتساقًا.", items: ["بحث السوق والمنافسين", "استراتيجية وتموضع البراند", "تسمية العلامة والسلوجن", "الهوية البصرية ودليل الاستخدام", "نبرة الصوت والرسائل الرئيسية"] },
  { n: "02", en: "DIGITAL GROWTH", tone: "growth", title: "التسويق وصناعة الطلب", lead: "نحوّل الاستراتيجية إلى حضور مستمر يقود العميل من الانتباه إلى الفعل.", items: ["استراتيجية التسويق والمحتوى", "خطط LinkedIn وInstagram", "حملات الإعلانات المدفوعة", "صفحات الهبوط والرسائل البيعية", "تحسين SEO وAEO"] },
  { n: "03", en: "AI AUTOMATION", tone: "automation", title: "أتمتة الذكاء الاصطناعي", lead: "نبني سير عمل يخفف التشغيل اليدوي ويحسن سرعة الاستجابة وجودتها.", items: ["تحليل العمليات المتكررة", "تصميم سير العمل الذكي", "أنظمة المحتوى والمبيعات", "مساعدات ووكلاء الذكاء الاصطناعي", "تكامل الأدوات والتوثيق"] },
  { n: "04", en: "WEB EXPERIENCES", tone: "web", title: "تصميم وبناء المواقع", lead: "نحوّل رسالتك إلى تجربة رقمية سريعة وواضحة تقود الزائر من الانطباع الأول إلى الإجراء.", items: ["استراتيجية وهيكلة الموقع", "تصميم UI/UX متجاوب", "تطوير صفحات ومواقع الشركات", "تحسين السرعة والتحويل CRO", "تهيئة SEO وAEO والتحليلات"] },
];

export default function ServicesPage() {
  return (
    <main className="inner-page services-page">
      <Header />
      <PageHero eyebrow="خدمات ديوانك" title={<>من الوضوح إلى النمو،<br/><em>دون فجوات.</em></>} text="يمكنك البدء بخدمة واحدة أو بناء منظومة متكاملة تجمع العلامة والتسويق والمواقع والأتمتة حول هدف تجاري واضح." />
      <section className="shell services-detail-bento">
        {groups.map((group) => (
          <article id={group.tone} className={`service-detail ${group.tone}`} key={group.n}>
            <div className="detail-top"><span>{group.n}</span><small>{group.en}</small></div>
            <div className={`service-symbol ${group.tone}`} aria-hidden="true"><i/><i/><i/></div>
            <div className="detail-copy"><h2>{group.title}</h2><p>{group.lead}</p></div>
            <ul>{group.items.map(item => <li key={item}><span>↙</span>{item}</li>)}</ul>
            {group.tone === "automation" && <Link className="detail-link" href="/whatsapp-automation">شاهد منظومة واتساب Next‑Gen <span>←</span></Link>}
          </article>
        ))}
      </section>
      <section className="fit-section shell"><div><span className="section-label">[ قبل أن نبدأ ]</span><h2>الخدمة المناسبة ليست الأكبر.<br/><em>بل الأقرب لمشكلتك.</em></h2></div><div className="fit-card"><p>ابدأ بجلسة اكتشاف قصيرة. نحدد فيها نقطة الاختناق، والنتيجة المطلوبة، وأصغر نطاق يصنع فرقًا حقيقيًا.</p><Link className="button primary" href="/contact">ناقش مشروعك <span>←</span></Link></div></section>
      <Footer />
    </main>
  );
}
