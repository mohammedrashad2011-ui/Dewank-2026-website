"use client";

import { useState } from "react";

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

const steps = [
  { number: "01", title: { ar: "الرسالة", en: "Enquiry" }, detail: { ar: "استفسار يصل", en: "A message arrives" } },
  { number: "02", title: { ar: "الرد", en: "Reply" }, detail: { ar: "رد أساسي فوري", en: "A first response" } },
  { number: "03", title: { ar: "التأهيل", en: "Qualify" }, detail: { ar: "نفهم الاحتياج", en: "Understand the need" } },
  { number: "04", title: { ar: "التسليم", en: "Handover" }, detail: { ar: "الإنسان يتولى", en: "A person takes over" } },
  { number: "05", title: { ar: "المتابعة", en: "Follow-up" }, detail: { ar: "لا يتوقف الحوار", en: "Keep the conversation moving" } },
] as const;

export function AutomationHeroArt({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  return (
    <div className="wa-cinema-hero-art" aria-label={ar ? "تصور تخطيطي لمسار استقبال الرسائل وتنظيمها" : "Illustration of organising customer enquiries"}>
      <div className="wa-cinema-hero-grid" aria-hidden="true" />
      <div className="wa-cinema-orbit wa-cinema-orbit-a" aria-hidden="true" />
      <div className="wa-cinema-orbit wa-cinema-orbit-b" aria-hidden="true" />
      <div className="wa-cinema-floating wa-cinema-incoming">
        <span className="wa-cinema-mini-dot" />
        <span>{ar ? "رسالة جديدة" : "New message"}</span>
        <b>{ar ? "ممكن التفاصيل؟" : "Can I get details?"}</b>
      </div>
      <div className="wa-cinema-routing" aria-hidden="true"><span>↗</span><span>✧</span><span>↘</span></div>
      <div className="wa-cinema-floating wa-cinema-resolved">
        <span className="wa-cinema-mini-dot" />
        <span>{ar ? "مسار منظم" : "Organised flow"}</span>
        <b>{ar ? "مؤهل ← للموظف" : "Qualified → Team"}</b>
      </div>
      <div className="wa-cinema-hero-caption"><span className="wa-cinema-caption-light" /> {ar ? "رد • تأهيل • تحويل بشري" : "Reply • Qualify • Human handover"}</div>
    </div>
  );
}

export function AutomationJourney({ locale }: { locale: Locale }) {
  const [industry, setIndustry] = useState(0);
  const [stage, setStage] = useState(2);
  const ar = locale === "ar";
  const scenario = scenarios[industry];
  const showBot = stage >= 1;
  const showLead = stage >= 2;
  const showHandover = stage >= 3;
  const showFollowup = stage >= 4;

  return (
    <section className="shell wa-cinema-journey" aria-labelledby={"wa-cinema-journey-title-" + locale} dir={ar ? "rtl" : "ltr"}>
      <div className="wa-cinema-section-head">
        <span className="wa-cinema-eyebrow"><span className="wa-cinema-live" /> {ar ? "تجربة تفاعلية" : "Interactive experience"}</span>
        <h2 id={"wa-cinema-journey-title-" + locale}>{ar ? "من رسالة تائهة" : "From a scattered message"}<br /><em>{ar ? "إلى مسار واضح" : "To a clear next step"}</em></h2>
        <p>{ar ? "اختر نوع النشاط وتنقل بين المراحل لتشوف مثالًا توضيحيًا لمسار يمكن بناؤه ضمن نطاق الباقة التأسيسية" : "Choose a business and step through a conceptual demonstration of what a starter flow can do"}</p>
      </div>

      <div className="wa-cinema-industry" aria-label={ar ? "اختر نوع النشاط" : "Choose a business type"}>
        {scenarios.map((s, index) => <button key={s.id} type="button" aria-pressed={index === industry} onClick={() => { setIndustry(index); setStage(2); }}><span aria-hidden="true">{s.glyph}</span> {t(s.name, locale)}</button>)}
      </div>

      <div className="wa-cinema-stepper" aria-label={ar ? "مراحل المسار التجريبي" : "Example journey steps"}>
        {steps.map((step, index) => <button type="button" key={step.number} aria-current={index === stage ? "step" : undefined} onClick={() => setStage(index)} className={index <= stage ? "is-passed" : ""}>
          <b aria-hidden="true">{["✉", "↩", "◎", "⇢", "✓"][index]}</b><span>{t(step.title, locale)}</span><small>{t(step.detail, locale)}</small>
        </button>)}
      </div>

      <div className="wa-cinema-console">
        <div className="wa-cinema-console-top">
          <span><span className="wa-cinema-live" /> {ar ? "ديوانك | تجربة المسار" : "DEWANK / FLOW LAB"}</span>
          <span>{ar ? "محاكاة، لا محادثات حقيقية" : "Simulation, not live conversations"}</span>
        </div>
        <div className="wa-cinema-console-grid">
          <div className="wa-cinema-chat" key={scenario.id + "-" + stage}>
            <div className="wa-cinema-chat-head"><div className="wa-cinema-chat-avatar">✳</div><div><strong>{ar ? "خدمة العملاء" : "Customer care"}</strong><small>{ar ? "مسار استقبال الطلبات" : "Enquiry flow"}</small></div><span>●●●</span></div>
            <div className="wa-cinema-chat-body">
              <div className="wa-cinema-chat-day">{ar ? "اليوم · سيناريو تجريبي" : "Today · sample scenario"}</div>
              <div className="wa-cinema-bubble is-customer">{t(scenario.customer, locale)}</div>
              {showBot && <div className="wa-cinema-bubble is-system"><span className="wa-cinema-bot-tag">{ar ? "رد أساسي" : "Basic response"}</span>{t(scenario.reply, locale)}</div>}
              {showLead && <div className="wa-cinema-bubble is-choice"><span>✓</span> {t(scenario.detail, locale)}</div>}
              {showHandover && <div className="wa-cinema-bubble is-handover"><span>↗</span> {t(scenario.handover, locale)}</div>}
              {showFollowup && <div className="wa-cinema-bubble is-system"><span className="wa-cinema-bot-tag">{ar ? "متابعة أساسية" : "Basic follow-up"}</span>{t(scenario.followup, locale)}</div>}
            </div>
            <div className="wa-cinema-chat-compose" aria-hidden="true"><span>{ar ? "اكتب رسالة" : "Type a message"}</span><b>➤</b></div>
          </div>
          <div className="wa-cinema-transfer" aria-hidden="true"><span className="wa-cinema-transfer-pulse" /><span>➜</span><small>{ar ? "تنظيم" : "ROUTE"}</small></div>
          <div className="wa-cinema-lead" key={"lead-" + scenario.id + "-" + stage}>
            <div className="wa-cinema-lead-top"><span>{ar ? "سجل الطلب" : "Enquiry record"}</span><span>{ar ? "عرض تجريبي" : "STARTER / DEMO"}</span></div>
            <div className="wa-cinema-lead-icon">◎</div>
            <h3>{showLead ? t(scenario.record, locale) : (ar ? "في انتظار التفاصيل" : "Waiting for details")}</h3>
            <div className="wa-cinema-meta"><span>{ar ? "المرحلة" : "Stage"}</span><strong aria-live="polite">{t(steps[stage].title, locale)}</strong></div>
            <div className="wa-cinema-meta"><span>{ar ? "النشاط" : "Business"}</span><strong>{t(scenario.name, locale)}</strong></div>
            <div className="wa-cinema-meta"><span>{ar ? "تحويل بشري" : "Human handover"}</span><strong className={showHandover ? "wa-cinema-status-ready" : ""}>{showHandover ? (ar ? "جاهز" : "Ready") : (ar ? "عند الحاجة" : "If needed")}</strong></div>
            <div className="wa-cinema-lead-progress"><span style={{ width: ((stage + 1) / steps.length) * 100 + "%" }} /></div>
            <p>{ar ? "مثال لتجميع بيانات أساسية وليس نظامًا كاملًا لإدارة العملاء" : "Illustrative basic record, not a full CRM dashboard"}</p>
          </div>
        </div>
        <div className="wa-cinema-console-bottom">
          <span>◉ {ar ? "مسار تجريبي، بيانات افتراضية" : "Demo flow, fictional data"}</span>
          <div><button type="button" onClick={() => setStage(stage === 0 ? steps.length - 1 : stage - 1)} aria-label={ar ? "الخطوة السابقة" : "Previous step"}>←</button><span aria-live="polite">{t(steps[stage].title, locale)}</span><button type="button" onClick={() => setStage((stage + 1) % steps.length)} aria-label={ar ? "الخطوة التالية" : "Next step"}>→</button></div>
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
