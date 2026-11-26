"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";

const SERVICES = [
  ["brand-naming","اختيار اسم تجاري","Brand naming"],
  ["strategy-identity","البراندينج والهوية","Brand strategy and identity"],
  ["digital-marketing","التسويق والمحتوى","Marketing and content"],
  ["paid-tracking","إدارة الحملات الإعلانية","Paid advertising"],
  ["website-conversion","تصميم وتطوير المواقع","Websites and conversion"],
  ["seo-aeo","SEO وAEO","SEO and AEO"],
  ["follow-up-automation","أتمتة واتساب وCRM","WhatsApp and CRM automation"],
  ["ai-automation","أتمتة الذكاء الاصطناعي","AI automation"],
  ["career-branding","السيرة الذاتية وLinkedIn","CV and LinkedIn"],
  ["integrated","منظومة متكاملة","Integrated services"],
  ["not-sure","غير متأكد، أحتاج ترشيحًا","Not sure yet"],
] as const;

// Preview only: intentionally no request, persistence, analytics or notifications.
// Keep this component isolated from the live WhatsApp contact forms until the backend is verified.
export function CrmContactPreview({ locale }: { locale: "ar" | "en" }) {
  const ar = locale === "ar";
  const [service,setService] = useState("not-sure");
  const [result,setResult] = useState<"idle"|"valid"|"phone">("idle");
  const phoneRef = useRef<HTMLInputElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const offer = new URLSearchParams(window.location.search).get("offer");
    if (SERVICES.some(([id])=>id===offer)) setService(offer!);
  },[]);
  useEffect(() => { if (result==="valid") statusRef.current?.focus(); },[result]);
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const phone = String(data.get("phone")??"").replace(/[\u0660-\u0669\u06f0-\u06f9]/g,c=>String(c.charCodeAt(0)-(c.charCodeAt(0)>=0x6f0?0x6f0:0x660))).replace(/[\s().-]/g,"").replace(/^00/,"+");
    if (!/^\+[1-9]\d{6,14}$/.test(phone)) {setResult("phone");phoneRef.current?.focus();return;}
    setResult("valid");
  }
  return (
    <div id="brief-form" className="crm-contact-preview" dir={ar?"rtl":"ltr"}>
      <p className="crm-preview-note" role="note">{ar?"نسخة معاينة فقط. استخدم بيانات وهمية، لن تُحفظ أو تُرسل.":"Preview only. Use fictional details; nothing is saved or sent."}</p>
      {result==="valid" ? <div ref={statusRef} tabIndex={-1} className="crm-preview-result" role="status">
        <h3>{ar?"نجحت معاينة النموذج":"Form preview passed"}</h3>
        <p>{ar?"في النسخة النهائية سيظهر تأكيد الاستلام بعد حفظ الطلب على السيرفر. لم يُرسل أي طلب حقيقي الآن.":"The final version will confirm receipt only after the server saves the lead. No real enquiry was sent."}</p>
        <button className="button" type="button" onClick={()=>setResult("idle")}>{ar?"إعادة المعاينة":"Try again"}</button>
      </div> : <form className="contact-form" onSubmit={onSubmit}>
        <label>{ar?"الاسم":"Name"} *<input name="name" autoComplete="name" required minLength={2} maxLength={100}/></label>
        <label>{ar?"رقم واتساب مع مفتاح الدولة":"WhatsApp number with country code"} *<input ref={phoneRef} name="phone" type="tel" inputMode="tel" autoComplete="tel" dir="ltr" required maxLength={40} placeholder="+966 5X XXX XXXX" aria-invalid={result==="phone"} aria-describedby="crm-phone-hint"/></label>
        <p id="crm-phone-hint" className={result==="phone"?"crm-preview-error":"crm-preview-hint"} role={result==="phone"?"alert":undefined}>{result==="phone"?(ar?"أدخل رقمًا دوليًا صحيحًا يبدأ بمفتاح الدولة.":"Enter a valid international number with its country code."):(ar?"يمكن كتابة الرقم بأي مفتاح دولة.":"Any international country code is supported.")}</p>
        <label>{ar?"الخدمة المطلوبة":"Service"}<select name="service" value={service} onChange={e=>setService(e.target.value)}>{SERVICES.map(([id,arabic,english])=><option key={id} value={id}>{ar?arabic:english}</option>)}</select></label>
        <details className="crm-preview-details"><summary>{ar?"أضف تفاصيل عن المشروع (اختياري)":"Add project details (optional)"}</summary>
          <div className="crm-preview-extra">
            <label>{ar?"اسم الشركة":"Company"}<input name="company" autoComplete="organization" maxLength={120}/></label>
            <label>{ar?"البريد الإلكتروني":"Email"}<input name="email" autoComplete="email" type="email" dir="ltr" maxLength={160}/></label>
            <label>{ar?"نبذة عن المشروع":"Project brief"}<textarea name="brief" rows={4} maxLength={3000}/></label>
          </div>
        </details>
        <label className="crm-preview-consent"><input name="contactConsent" type="checkbox" required/><span>{ar?"أوافق على تواصل ديوانك معي بخصوص طلبي.":"I agree that Dewank may contact me about my enquiry."} <a href={ar?"/privacy":"/en/privacy"}>{ar?"سياسة الخصوصية":"Privacy notice"}</a></span></label>
        <button className="button primary submit" type="submit">{ar?"معاينة إرسال الطلب":"Preview submission"}</button>
      </form>}
    </div>
  );
}
