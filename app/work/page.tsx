import type { Metadata } from "next";
import { createMetadata } from "../lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Dewank Portfolio | Brand Strategy and Visual Identity Work",
  description: "استكشف أعمال ديوانك المفاهيمية في استراتيجية البراند، التسمية، الهوية البصرية والتجارب الرقمية للعلامات الطموحة.",
  path: "/work",
  keywords: ["أعمال براندينج", "تصميم هوية بصرية", "Brand Identity Portfolio", "استراتيجية العلامة"],
});
import Link from "next/link";
import { Footer, Header } from "../components/site-shell";

const cases=[
 {no:'01',id:'nomai',name:'NOMAÏ',type:'ضيافة فاخرة',place:'العلا · السعودية',year:'2026',statement:'إقامة تتجاوز الزمن',about:'هوية لوجهة فندقية تستمد هدوءها من الصمت والحجر الرملي وإيقاع الصحراء البطيء.',scope:['استراتيجية البراند','الهوية البصرية','تجربة الضيف']},
 {no:'02',id:'kova',name:'KOVA',type:'عمارة وتصميم منتجات',place:'كوبنهاغن · الدنمارك',year:'2026',statement:'الشكل يتبع الإحساس',about:'نظام بصري منضبط تتحول فيه الهندسة إلى لغة موحدة للمساحات والمنتجات والأفكار.',scope:['التموضع','نظام الهوية','الاتجاه الرقمي']},
 {no:'03',id:'lume',name:'LUME',type:'عناية متقدمة بالبشرة',place:'باريس · فرنسا',year:'2026',statement:'الدليل قبل الوعود',about:'دقة علمية تلتقي بجمال تحريري داخل علامة عناية بالبشرة مبنية على الثقة الذكية.',scope:['التسمية','التغليف','نظام الحملات']},
];

function Nomai(){return <div className="identity-stage nomai-stage"><div className="nomai-sky"><span>DESERT<br/>HOUSE</span></div><div className="nomai-door"><b>N</b></div><div className="nomai-paper"><small>WELCOME TO</small><strong>NOMAÏ</strong><i>23°08′N<br/>37°06′E</i></div><div className="nomai-mark">N</div></div>}
function Kova(){return <div className="identity-stage kova-stage"><div className="kova-board"><small>KOVA / OBJECTS</small><b>FORM<br/>FOLLOWS<br/><i>FEELING</i></b><span>COLLECTION 01—26</span></div><div className="kova-cube"><span>K</span></div><div className="kova-book"><b>KO<br/>VA</b><small>ARCHITECTURE<br/>AND OBJECTS</small></div><div className="kova-ruler">01 02 03 04 05 06 07 08</div></div>}
function Lume(){return <div className="identity-stage lume-stage"><div className="lume-title">LUME</div><div className="lume-tube"><small>LUME / 01</small><b>C+</b><span>BRIGHTENING<br/>CONCENTRATE</span><i>30 ML</i></div><div className="lume-carton"><small>CLINICALLY<br/>CONSIDERED</small><b>LUME</b><span>PROOF<br/>OVER<br/><i>PROMISES</i></span></div><div className="lume-sphere"/></div>}
function Visual({id}:{id:string}){return id==='nomai'?<Nomai/>:id==='kova'?<Kova/>:<Lume/>}

export default function WorkPage(){return <main className="global-portfolio" dir="rtl"><Header/>
 <section className="pf-hero"><div className="pf-edition">ديوانك / عوالم مختارة / 2026</div><h1>نصنع للعلامة<br/><i>عالمًا متكاملًا.</i></h1><div className="pf-hero-foot"><p>استراتيجية وهوية وتجارب لعلامات تطمح إلى المنافسة عالميًا.</p><span>اكتشف المشاريع ↓</span></div></section>
 <section id="work" className="pf-cases">{cases.map(c=><article className={`pf-case ${c.id}`} key={c.id}><div className="pf-meta"><span>{c.no}</span><span>{c.type}</span><span>{c.place}</span><span>{c.year}</span></div><div dir="ltr"><Visual id={c.id}/></div><div className="pf-info"><div><span className="pf-name" dir="ltr">{c.name}</span><h2>{c.statement}</h2></div><div><p>{c.about}</p><div className="pf-tags">{c.scope.map(s=><span key={s}>{s}</span>)}</div></div></div></article>)}</section>
 <section className="pf-disclaimer"><span>مشروعات مفاهيمية مستقلة</span><p>هويات أصلية ابتكرناها لعرض مستوى ديوانك الاستراتيجي والإبداعي. لا توحي هذه النماذج بوجود علاقة تعاقدية مع علامات أو جهات خارجية.</p></section>
 <section className="seo-content shell" aria-labelledby="portfolio-process-title"><span className="section-label">[ HOW WE BUILD BRANDS ]</span><h2 id="portfolio-process-title">الأعمال القوية تبدأ بقرار استراتيجي.</h2><div className="seo-content-grid"><p>كل مشروع هوية يبدأ بفهم الجمهور والسوق والفرصة التنافسية، وليس باختيار شكل جميل فقط. نحدد الفكرة المركزية للعلامة، نختبر قدرتها على التميّز، ثم نحوّلها إلى نظام بصري ولغوي قابل للتطبيق.</p><p>تشمل عملية البراندينج عند الحاجة استراتيجية العلامة، التسمية، الرسائل، الشعار، الألوان، الخطوط، قواعد الاستخدام، واتجاهات التطبيق على الموقع والمحتوى والحملات.</p><p>المشروعات المعروضة هنا مفاهيم أصلية تشرح طريقة التفكير ومستوى التنفيذ. عند العمل مع عميل حقيقي، يتم بناء الحل وفق بياناته وسوقه وأهدافه بدل إعادة استخدام قالب جاهز.</p></div></section>
 <section className="pf-close"><small>قد تكون علامتك هي التالية</small><h2>اجعلها<br/><i>مستحيلة التجاهل.</i></h2><Link href="/contact">ابدأ مشروعك <span>↙</span></Link></section>
 <Footer/>
 </main>}
