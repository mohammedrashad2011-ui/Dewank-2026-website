"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { flushSync } from "react-dom";

type Locale = "ar" | "en";
type Text = { ar: string; en: string };
const t = (text: Text, locale: Locale) => text[locale];

const scenarios = [
  {
    id: "clinic",
    name: { ar: "عيادة", en: "Clinic" },
    glyph: "✳",
    customer: { ar: "مرحبًا، هل عندكم كشف أسنان؟", en: "Hi, do you offer dental consultations?" },
    reply: { ar: "أهلًا بك! يسعدنا مساعدتك. أي خدمة تحتاج؟", en: "Welcome! Happy to help. What service do you need?" },
    detail: { ar: "كشف أسنان · أول زيارة", en: "Dental consultation · first visit" },
    record: { ar: "استفسار خدمة / عيادة", en: "Service enquiry / clinic" },
    handover: { ar: "تم تجهيز التفاصيل لموظف الاستقبال", en: "Details ready for the reception team" },
    followup: { ar: "هل ترغب في استكمال طلب الاستفسار؟", en: "Would you like to continue your enquiry?" },
  },
  {
    id: "realestate",
    name: { ar: "عقارات", en: "Real estate" },
    glyph: "⌂",
    customer: { ar: "أبحث عن شقة للإيجار", en: "I'm looking for an apartment to rent" },
    reply: { ar: "يسعدنا مساعدتك. ما المنطقة التي تفضلها؟", en: "Happy to help. Which area are you looking in?" },
    detail: { ar: "إيجار · شقة · المنطقة مطلوبة", en: "Rental · apartment · area needed" },
    record: { ar: "طلب عقاري جديد", en: "New property enquiry" },
    handover: { ar: "تم تجهيز الطلب لمستشار العقارات", en: "Enquiry ready for a property adviser" },
    followup: { ar: "هل تود مشاركة المنطقة المناسبة لك؟", en: "Would you like to share your preferred area?" },
  },
  {
    id: "retail",
    name: { ar: "متجر إلكتروني", en: "Online store" },
    glyph: "◈",
    customer: { ar: "هل المنتج متوفر؟", en: "Is this product available?" },
    reply: { ar: "أهلًا! ما اسم المنتج الذي تسأل عنه؟", en: "Hi! Which product are you interested in?" },
    detail: { ar: "سؤال عن منتج · الاسم مطلوب", en: "Product availability · item needed" },
    record: { ar: "استفسار قبل الشراء", en: "Pre-purchase enquiry" },
    handover: { ar: "تم تجهيز السؤال لفريق المبيعات", en: "Question ready for the sales team" },
    followup: { ar: "هل ما زلت بحاجة لمساعدة بشأن المنتج؟", en: "Do you still need help with the product?" },
  },
  {
    id: "service",
    name: { ar: "شركة خدمات", en: "Service business" },
    glyph: "✦",
    customer: { ar: "ممكن أعرف تفاصيل الخدمة؟", en: "Can I get details about your service?" },
    reply: { ar: "طبعًا! ما الخدمة التي تهمك؟", en: "Of course! Which service are you interested in?" },
    detail: { ar: "استفسار خدمات · نوع الطلب", en: "Service enquiry · request type" },
    record: { ar: "عميل مهتم بالخدمة", en: "Interested service lead" },
    handover: { ar: "تم تجهيز البيانات للموظف المختص", en: "Details ready for the relevant team member" },
    followup: { ar: "هل ترغب في متابعة استفسارك؟", en: "Would you like to continue your enquiry?" },
  },
] as const;

// The demonstration in four beats: the enquiry and its first reply, the details captured in the record, then a handover
// to a person or a basic follow-up, and finally the next step. Beat lengths (ms) set the autoplay pace.
const chapters = [
  { title: { ar: "الرسالة", en: "Enquiry" }, detail: { ar: "استفسار يصل", en: "A message arrives" } },
  { title: { ar: "التأهيل", en: "Qualify" }, detail: { ar: "نفهم الاحتياج", en: "Understand the need" } },
  { title: { ar: "التسليم", en: "Handover" }, detail: { ar: "الإنسان يتولى", en: "A person takes over" } },
  { title: { ar: "الخطوة التالية", en: "Next step" }, detail: { ar: "بدل التخمين", en: "Defined, not guessed" } },
] as const;
const followupChapter = { title: { ar: "المتابعة", en: "Follow-up" }, detail: { ar: "لا يتوقف الحوار", en: "Keep the conversation moving" } };
const beats = [3600, 3600, 3400];
const last = chapters.length - 1;

type Branch = "handover" | "followup";
const at = (delay: string) => ({ "--at": delay }) as CSSProperties;

export function AutomationJourney({ locale }: { locale: Locale }) {
  const [industry, setIndustry] = useState(0);
  // The server renders the finished flow, so without JavaScript or with reduced motion the whole journey is visible.
  const [chapter, setChapter] = useState<number>(last);
  const [branch, setBranch] = useState<Branch>("handover");
  const [playing, setPlaying] = useState(false);
  const [run, setRun] = useState(0);
  const film = useRef<HTMLDivElement | null>(null);
  const motion = useRef(false);
  const ar = locale === "ar";
  const scenario = scenarios[industry];
  const followup = branch === "followup";
  const routed = chapter >= 2;
  const handedOver = routed && !followup;
  const focus = chapter === 0 ? "phone" : chapter === 1 ? "record" : chapter === 2 ? (followup ? "phone" : "team") : "all";
  const inFocus = (station: string) => (focus === station || focus === "all" ? " is-focus" : "");
  const chapterText = (index: number) => (index === 2 && followup ? followupChapter : chapters[index]);
  const ready = handedOver ? (ar ? "جاهز" : "Ready") : (ar ? "عند الحاجة" : "If needed");

  // Holds the film below the fold (data-motion "armed") and plays it once, when it is a third visible. With reduced
  // motion nothing is armed and the finished flow stays on screen.
  useEffect(() => {
    const node = film.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    motion.current = true;
    node.dataset.motion = "armed";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        flushSync(() => {
          setChapter(0);
          setPlaying(true);
        });
        node.dataset.motion = "play";
      },
      { threshold: 0.35 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Advances one beat at a time while playing, and holds on the last.
  useEffect(() => {
    if (!playing) return;
    const id = window.setTimeout(() => {
      setChapter(chapter + 1);
      if (chapter + 1 >= last) setPlaying(false);
    }, beats[chapter]);
    return () => window.clearTimeout(id);
  }, [playing, chapter]);

  function restart() {
    setRun((count) => count + 1);
    setChapter(0);
    setPlaying(motion.current);
  }

  function show(index: number) {
    setPlaying(false);
    setChapter(index);
  }

  function choosePath(next: Branch) {
    setPlaying(false);
    setBranch(next);
    setChapter(2);
  }

  function chooseIndustry(index: number) {
    setIndustry(index);
    if (motion.current) restart();
  }

  return (
    <section className="shell wa-cinema-journey" aria-labelledby={"wa-cinema-journey-title-" + locale} dir={ar ? "rtl" : "ltr"}>
      <div className="wa-cinema-section-head">
        <span className="wa-cinema-eyebrow"><span className="wa-cinema-live" /> {ar ? "تجربة تفاعلية" : "Interactive experience"}</span>
        <h2 id={"wa-cinema-journey-title-" + locale}>{ar ? "من رسالة تائهة" : "From a scattered message"}<br /><em>{ar ? "إلى مسار واضح" : "To a clear next step"}</em></h2>
        <p>{ar ? "اختر نوع النشاط وتنقل بين المراحل لتشوف مثالًا توضيحيًا لمسار يمكن بناؤه ضمن نطاق الباقة التأسيسية" : "Choose a business and step through a conceptual demonstration of what a starter flow can do"}</p>
      </div>

      <div className="wa-cinema-industry" aria-label={ar ? "اختر نوع النشاط" : "Choose a business type"}>
        {scenarios.map((s, index) => <button key={s.id} type="button" aria-pressed={index === industry} onClick={() => chooseIndustry(index)}><span aria-hidden="true">{s.glyph}</span> {t(s.name, locale)}</button>)}
      </div>

      <div className="wa-flow" ref={film} data-chapter={chapter} data-focus={focus} data-branch={branch}>
        <div className="wa-cinema-console-top">
          <span><span className="wa-cinema-live" /> {ar ? "ديوانك | تجربة المسار" : "DEWANK / FLOW LAB"}</span>
          <span>{ar ? "محاكاة، لا محادثات حقيقية" : "Simulation, not live conversations"}</span>
        </div>

        <div className="wa-flow-stage">
          <div className="wa-flow-spot" aria-hidden="true" />
          <div className="wa-flow-world" key={scenario.id + "-" + run}>
            <div className={"wa-flow-station wa-flow-phone" + inFocus("phone")}>
              <div className="wa-flow-screen">
                <div className="wa-flow-chat-head"><span className="wa-flow-avatar" aria-hidden="true">✳</span><div><strong>{ar ? "خدمة العملاء" : "Customer care"}</strong><small>{ar ? "مسار استقبال الطلبات" : "Enquiry flow"}</small></div></div>
                <div className="wa-flow-thread">
                  <span className="wa-flow-day">{ar ? "اليوم · سيناريو تجريبي" : "Today · sample scenario"}</span>
                  <p className="wa-flow-bubble is-in" data-at="0" style={at(".25s")}>{t(scenario.customer, locale)}</p>
                  <div className="wa-flow-out">
                    {chapter === 0 && <span className="wa-flow-typing" aria-hidden="true"><i /><i /><i /></span>}
                    <p className="wa-flow-bubble" data-at="0" style={at("1.65s")}><span className="wa-flow-tag">{ar ? "رد أساسي" : "Basic response"}</span>{t(scenario.reply, locale)}</p>
                  </div>
                  {chapter >= 1 && <p className="wa-flow-bubble is-in is-choice" data-at="1" style={at(".2s")}><span aria-hidden="true">✓</span> {t(scenario.detail, locale)}</p>}
                  {routed && followup && <div className="wa-flow-out"><p className="wa-flow-bubble" data-at="2" style={at("1.25s")}><span className="wa-flow-tag">{ar ? "متابعة أساسية" : "Basic follow-up"}</span>{t(scenario.followup, locale)}</p></div>}
                </div>
                <div className="wa-flow-compose" aria-hidden="true"><span>{ar ? "اكتب رسالة" : "Type a message"}</span><b>➤</b></div>
              </div>
            </div>

            <div className={"wa-flow-rail" + (chapter >= 1 ? " is-live" : "")} data-rail="in" aria-hidden="true"><i /></div>

            <div className={"wa-flow-station wa-flow-record" + inFocus("record")}>
              <div className="wa-flow-card-head"><span>{ar ? "سجل الطلب" : "Enquiry record"}</span><small>{ar ? "عرض تجريبي" : "STARTER / DEMO"}</small></div>
              <h3 className="wa-flow-value" key={"record-" + (chapter >= 1)} style={at(chapter === 1 ? "1.35s" : "0s")}>{chapter >= 1 ? t(scenario.record, locale) : (ar ? "في انتظار التفاصيل" : "Waiting for details")}</h3>
              <dl className="wa-flow-fields">
                <div><dt>{ar ? "النشاط" : "Business"}</dt><dd>{t(scenario.name, locale)}</dd></div>
                <div><dt>{ar ? "التفاصيل" : "Details"}</dt><dd className="wa-flow-value" key={"detail-" + (chapter >= 1)} style={at(chapter === 1 ? "1.55s" : "0s")}>{chapter >= 1 ? t(scenario.detail, locale) : "—"}</dd></div>
                <div><dt>{ar ? "المرحلة" : "Stage"}</dt><dd className="wa-flow-value" key={"stage-" + chapter + branch} style={at(chapter === 0 ? "0s" : "1.1s")} aria-live="polite">{t(chapterText(chapter).title, locale)}</dd></div>
                <div><dt>{ar ? "تحويل بشري" : "Human handover"}</dt><dd className={"wa-flow-value" + (handedOver ? " is-ready" : "")} key={"handover-" + handedOver} style={at(handedOver && chapter === 2 ? "1.2s" : "0s")}>{ready}</dd></div>
              </dl>
              <div className={"wa-flow-next" + (chapter === last ? " is-on" : "")} data-at="3" style={at(".55s")} aria-hidden={chapter !== last}>
                <span>{ar ? "الخطوة التالية" : "Next step"}</span>
                <b>{followup ? t(followupChapter.title, locale) + " · " + t(followupChapter.detail, locale) : t(scenario.handover, locale)}</b>
              </div>
              <p className="wa-flow-scope">{ar ? "مثال لتجميع بيانات أساسية وليس نظامًا كاملًا لإدارة العملاء" : "Illustrative basic record, not a full CRM dashboard"}</p>
            </div>

            <div className={"wa-flow-rail" + (handedOver ? " is-live" : "")} data-rail="out" aria-hidden="true"><i /></div>

            <div className={"wa-flow-station wa-flow-team" + inFocus("team") + (handedOver ? " is-ready" : "")}>
              <div className="wa-flow-card-head"><span>{ar ? "تحويل بشري" : "Human handover"}</span><b className="wa-flow-value" key={"team-" + handedOver} style={at(handedOver && chapter === 2 ? "1.1s" : "0s")}>{ready}</b></div>
              <div className="wa-flow-person" aria-hidden="true"><svg viewBox="0 0 48 48"><circle cx="24" cy="17" r="8" /><path d="M9 41c2-9 8-13 15-13s13 4 15 13" /></svg></div>
              <p className="wa-flow-value" key={"team-text-" + handedOver} style={at(handedOver && chapter === 2 ? "1.3s" : "0s")}>{handedOver ? t(scenario.handover, locale) : (ar ? "ينتقل الحوار إلى شخص من الفريق عند الحاجة" : "The conversation moves to someone on your team when needed")}</p>
            </div>
          </div>
        </div>

        <div className="wa-flow-controls">
          <ol className="wa-flow-chapters" aria-label={ar ? "مراحل المسار التجريبي" : "Example journey steps"}>
            {chapters.map((_, index) => (
              <li key={index}>
                <button type="button" aria-current={index === chapter ? "step" : undefined} className={index < chapter ? "is-passed" : undefined} onClick={() => show(index)}>
                  <span>{t(chapterText(index).title, locale)}</span>
                  <small>{t(chapterText(index).detail, locale)}</small>
                  <i aria-hidden="true" key={index + "-" + run + "-" + playing} className={index === chapter && playing ? "is-running" : undefined} style={index === chapter && playing ? ({ "--beat": beats[index] + "ms" } as CSSProperties) : undefined} />
                </button>
              </li>
            ))}
          </ol>
          <div className="wa-flow-actions">
            <div className="wa-flow-paths" role="group" aria-label={ar ? "بعد جمع التفاصيل" : "After the details"}>
              <button type="button" aria-pressed={!followup} onClick={() => choosePath("handover")}>{ar ? "تسليم للموظف" : "Human handover"}</button>
              <button type="button" aria-pressed={followup} onClick={() => choosePath("followup")}>{ar ? "متابعة أساسية" : "Basic follow-up"}</button>
            </div>
            <button type="button" className="wa-flow-play" onClick={() => (playing ? setPlaying(false) : restart())}>{playing ? (ar ? "إيقاف مؤقت" : "Pause") : (ar ? "إعادة العرض" : "Replay")}</button>
          </div>
          <span className="wa-flow-note">◉ {ar ? "مسار تجريبي، بيانات افتراضية" : "Demo flow, fictional data"}</span>
        </div>
      </div>
    </section>
  );
}

export function AutomationContrast({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  return (
    <section className="shell wa-cinema-contrast" aria-labelledby={"wa-cinema-contrast-title-" + locale} dir={ar ? "rtl" : "ltr"}>
      <div className="wa-cinema-section-head">
        <span className="wa-cinema-eyebrow">{ar ? "الفرق الحقيقي" : "The operational difference"}</span>
        <h2 id={"wa-cinema-contrast-title-" + locale}>{ar ? "نفس الرسائل" : "The same enquiries"}<br/><em>{ar ? "طريقة تعامل مختلفة" : "A different way to handle them"}</em></h2>
        <p>{ar ? "الأتمتة مش بديل لفريقك، لكنها تساعد الموظف يستلم محادثة أوضح في الوقت المناسب" : "Automation is not here to replace your team, it helps people take over with a clearer picture"}</p>
      </div>
      <div className="wa-cinema-contrast-grid">
        <article className="wa-cinema-before">
          <div className="wa-cinema-contrast-label"><span>{ar ? "بدون مسار" : "Without a flow"}</span><b>×</b></div>
          <div className="wa-cinema-scatter" aria-hidden="true">
            <span>{ar ? "ممكن الأسعار؟" : "Price?"}</span>
            <span>{ar ? "لسه في حد؟" : "Anyone there?"}</span>
            <span>{ar ? "أريد التفاصيل" : "Details please"}</span>
            <span>{ar ? "متى تردون؟" : "Any update?"}</span>
          </div>
          <h3>{ar ? "استفسارات متناثرة" : "Scattered conversations"}</h3>
          <p>{ar ? "الأسئلة تتكرر، والمعلومات ناقصة، والفريق يبدأ كل مرة من الصفر" : "Questions repeat, details go missing, and every conversation starts over"}</p>
        </article>
        <article className="wa-cinema-after">
          <div className="wa-cinema-contrast-label"><span>{ar ? "بالمسار التأسيسي" : "With Starter"}</span><b>✓</b></div>
          <div className="wa-cinema-ordered" aria-hidden="true">
            <span><i aria-hidden="true">✓</i>{ar ? "رد واضح" : "First reply"}</span>
            <span><i aria-hidden="true">✓</i>{ar ? "تفاصيل أساسية" : "Key details"}</span>
            <span><i aria-hidden="true">✓</i>{ar ? "تسليم للموظف" : "Human handover"}</span>
            <span><i aria-hidden="true">✓</i>{ar ? "متابعة عند الحاجة" : "Follow-up"}</span>
          </div>
          <h3>{ar ? "رحلة مفهومة" : "An organised journey"}</h3>
          <p>{ar ? "من أول سؤال حتى تحويل المحادثة، تعرف الخطوة التالية بدل التخمين" : "From the first question to the right handover, there is a defined next step"}</p>
        </article>
      </div>
      <p className="wa-cinema-scope-note">{ar ? "المشهد توضيحي فقط، والباقة التأسيسية لا تشمل نظامًا كاملًا لإدارة العملاء أو حجزًا متقدمًا، وتُناقش هذه الخدمات بشكل منفصل" : "Illustrative experience only, Starter does not include a full CRM or advanced booking system; these require a separate scope"}</p>
    </section>
  );
}
