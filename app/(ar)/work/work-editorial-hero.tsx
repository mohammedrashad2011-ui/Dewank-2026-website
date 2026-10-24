import Link from "next/link";

type Locale = "ar" | "en";
const copy = {
  ar: {
    eyebrow:"ديوانك  /  أعمال مختارة",
    label:"عمل حقيقي  ·  من التحدي للتنفيذ",
    lineOne:"الفكرة لا تكفي",
    lineTwo:"القرار يصنع الفارق",
    intro:"من بناء الهوية والتسمية إلى أتمتة رحلة العميل، هنا تشوف الشغل وراء كل قرار، مش مجرد صور جميلة",
    contact:"ناقش مشروعك",
    explore:"استكشف المشاريع",
    project:"BITHAN  /  Fine Jewelry",
    projectDescription:"تسمية وهوية بصرية متكاملة  ·  مشروع عميل فعلي",
    projectLink:"اكتشف دراسة الحالة",
    bands:["استراتيجية","هوية","تسمية","أتمتة","نمو","تنفيذ"],
    imageAlt:"الهوية المعتمدة لعلامة BITHAN للمجوهرات، من أعمال ديوانك",
    otherImageAlt:"تصميم الهوية المؤسسية لمشروع ReachwayAD"
  },
  en: {
    eyebrow:"DEWANK  /  SELECTED WORK",
    label:"REAL WORK  ·  FROM THINKING TO EXECUTION",
    lineOne:"BEYOND THE VISUAL",
    lineTwo:"BUILT ON DECISIONS",
    intro:"From brand naming and identity to connected customer journeys, explore the thinking, craft and execution behind the work",
    contact:"Discuss your project",
    explore:"Explore the work",
    project:"BITHAN  /  Fine Jewelry",
    projectDescription:"Naming and complete identity  ·  Real client engagement",
    projectLink:"Explore the case study",
    bands:["STRATEGY","IDENTITY","NAMING","AUTOMATION","GROWTH","CRAFT"],
    imageAlt:"Approved BITHAN fine jewellery identity, a real Dewank client project",
    otherImageAlt:"ReachwayAD corporate brand identity by Dewank"
  }
} as const;

export default function WorkEditorialHero({locale,whatsappHref}:{locale:Locale;whatsappHref:string}) {
  const c=copy[locale];
  const prefix=locale==="ar"?"/work":"/en/work";
  return (
    <section className="wk-intro" dir={locale==="ar"?"rtl":"ltr"} aria-label={locale==="ar"?"أعمال ديوانك المختارة":"Selected Dewank work"}>
      <div className="wk-intro-shell">
        <div className="wk-intro-topline">
          <span className="wk-intro-eyebrow">{c.eyebrow}</span>
          <span className="wk-intro-note">{c.label}</span>
        </div>
        <div className="wk-intro-grid">
          <div className="wk-intro-content">
            <div className="wk-intro-index" aria-hidden="true"><span className="wk-intro-index-line"/><span>DEWANK STUDIO</span></div>
            <h1>
              <span className="wk-intro-line"><span>{c.lineOne}</span></span>
              <span className="wk-intro-line wk-intro-line-accent"><span>{c.lineTwo}</span></span>
            </h1>
            <p>{c.intro}</p>
            <div className="wk-intro-actions">
              <a className="wk-intro-primary" href={whatsappHref} target="_blank" rel="noopener noreferrer">{c.contact}<span aria-hidden="true">↗</span></a>
              <a className="wk-intro-secondary" href="#case-studies">{c.explore}<span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className="wk-intro-art">
            <div className="wk-intro-art-halo" aria-hidden="true"/>
            <Link href={prefix+"/bithan"} className="wk-intro-project" aria-label={c.projectLink}>
              <div className="wk-intro-project-media">
                <img src={locale==="ar"?"/work/bithan/hero.svg":"/en/work/bithan/hero.svg"} alt={c.imageAlt} width="860" height="1050" fetchPriority="high" decoding="async"/>
              </div>
              <div className="wk-intro-project-caption">
                <div><strong>{c.project}</strong><span>{c.projectDescription}</span></div>
                <span className="wk-intro-project-arrow" aria-hidden="true">↗</span>
              </div>
            </Link>
            <div className="wk-intro-art-stamp" aria-hidden="true">IDENTITY / THINKING / CRAFT</div>
          </div>
        </div>
      </div>
      <div className="wk-intro-band" aria-hidden="true">
        <div className="wk-intro-band-runner">
          {[0,1,2,3].map(i=><span className="wk-intro-band-unit" key={i}>
            {c.bands.map(b=><span key={b}>{b}<i>/</i></span>)}
          </span>)}
        </div>
      </div>
    </section>
  );
}
