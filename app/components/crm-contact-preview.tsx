"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { explicitConsent, permittedCampaign } from "@/app/lib/crm/browser-attribution";

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

// In preview, validate locally only; live mode waits for a committed server response.
export function CrmContactPreview({ locale, preview=true }: { locale: "ar" | "en"; preview?: boolean }) {
  const ar = locale === "ar";
  const [service,setService] = useState("not-sure");
  const [result,setResult] = useState<"idle"|"valid"|"phone"|"sending"|"failed">("idle");
  const [reference,setReference]=useState("");
  const [failure,setFailure]=useState("");
  const requestRef=useRef<{key:string;fingerprint:string}|null>(null);
  const inFlight=useRef(false);
  const phoneRef = useRef<HTMLInputElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const offer = new URLSearchParams(window.location.search).get("offer");
    if (SERVICES.some(([id])=>id===offer)) setService(offer!);
  },[]);
  useEffect(() => { if (result==="valid") statusRef.current?.focus(); },[result]);
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if(inFlight.current)return;
    const data = new FormData(event.currentTarget);
    const phone = String(data.get("phone")??"").replace(/[\u0660-\u0669\u06f0-\u06f9]/g,c=>String(c.charCodeAt(0)-(c.charCodeAt(0)>=0x6f0?0x6f0:0x660))).replace(/[\s().-]/g,"").replace(/^00/,"+");
    if (!/^\+[1-9]\d{6,14}$/.test(phone)) {setResult("phone");phoneRef.current?.focus();return;}
    if(preview){setResult("valid");return;}
    const params=new URLSearchParams(window.location.search);
    const offer=params.get("offer")==="brand-naming"?"brand-naming":null;
    const campaign=permittedCampaign(params);
    const consent=explicitConsent();
    const payload={
      name:String(data.get("name")??"").trim(),phone,service,locale,
      company:String(data.get("company")??""),email:String(data.get("email")??""),brief:String(data.get("brief")??""),
      website:String(data.get("website")??""),contactConsent:data.get("contactConsent")==="on",
      analyticsConsent:consent.analytics===true,advertisingConsent:consent.advertising===true,
      offer,landingPath:offer?(ar?"/offers/brand-naming":"/en/offers/brand-naming"):window.location.pathname,
      utmSource:campaign.utm_source,utmMedium:campaign.utm_medium,utmCampaign:campaign.utm_campaign,utmContent:campaign.utm_content,gclid:campaign.gclid
    };
    const fingerprint=JSON.stringify(payload);
    if(!requestRef.current||requestRef.current.fingerprint!==fingerprint) requestRef.current={key:crypto.randomUUID(),fingerprint};
    inFlight.current=true;
    setResult("sending");
    setFailure("");
    try{
      const response=await fetch("/api/leads",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...payload,requestId:requestRef.current.key}),cache:"no-store",signal:AbortSignal.timeout(15000)});
      const body=await response.json();
      if(!response.ok || typeof body.reference!=="string" || !/^[0-9a-f-]{36}$/i.test(body.reference) || typeof body.created!=="boolean") {
        setFailure(response.status===429?(ar?"وصلنا عدد كبير من الطلبات. حاول بعد دقيقة.":"Too many requests. Please retry in a minute."):response.status===422?(ar?"راجع الاسم ورقم الهاتف والبيانات المطلوبة.":"Please check your name, phone and required fields."):(ar?"تعذّر تأكيد استلام طلبك. حاول مرة أخرى أو تواصل عبر واتساب.":"We could not confirm receipt. Try again or use WhatsApp."));
        setResult("failed");return;
      }
      setReference(body.reference);
      setResult("valid");
      // Only confirmed new inserts, explicit analytics permission, no personal data.
      if(body.created===true && explicitConsent().analytics===true){
        const trackingWindow=window as unknown as {dataLayer?:Record<string,unknown>[]};
        try{(trackingWindow.dataLayer??=[]).push({event:"generate_lead",lead_intent:service,source_path:ar?"/contact":"/en/contact",cta_location:"crm_contact_form"});}catch{}
      }
    }catch{
      setFailure(ar?"تعذّر تأكيد استلام طلبك. حاول مرة أخرى أو تواصل عبر واتساب.":"We could not confirm receipt. Try again or use WhatsApp.");
      setResult("failed");
    }finally{inFlight.current=false;}
  }
  return (
    <div id="brief-form" className="crm-contact-preview" dir={ar?"rtl":"ltr"}>
      {preview && <p className="crm-preview-note" role="note">{ar?"نسخة معاينة فقط. استخدم بيانات وهمية، لن تُحفظ أو تُرسل.":"Preview only. Use fictional details; nothing is saved or sent."}</p>}
      {result==="valid" ? <div ref={statusRef} tabIndex={-1} className="crm-preview-result" role="status">
        <h3>{preview?(ar?"نجحت معاينة النموذج":"Form preview passed"):(ar?"تم استلام طلبك بنجاح":"Your enquiry has been received")}</h3>
        <p>{preview?(ar?"لم يُرسل أي طلب حقيقي الآن.":"No real enquiry was sent."):(ar?"سيتواصل معك فريق ديوانك بخصوص طلبك.":"The Dewank team will contact you about your enquiry.")}</p>
        {!preview && <><p>{ar?"رقم الطلب:":"Reference:"} <bdi>{reference}</bdi></p><a className="button whatsapp" href={"https://wa.me/97339066649?text="+encodeURIComponent((ar?"مرحبًا، أود متابعة طلبي رقم ":"Hello, I would like to follow up on enquiry ")+reference)} target="_blank" rel="noopener noreferrer">{ar?"تواصل عبر واتساب الآن (اختياري)":"Message us on WhatsApp (optional)"}</a></>}
        {preview && <button className="button" type="button" onClick={()=>setResult("idle")}>{ar?"إعادة المعاينة":"Try again"}</button>}
      </div> : <form className="contact-form" onSubmit={onSubmit} aria-busy={result==="sending"}>
        <div hidden aria-hidden="true"><input name="website" tabIndex={-1} autoComplete="off"/></div>
        <fieldset disabled={result==="sending"} className="crm-preview-fields">
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
        {result==="failed" && <div role="alert" className="crm-preview-error">{failure} <a href="https://wa.me/97339066649" target="_blank" rel="noopener noreferrer">{ar?"واتساب":"WhatsApp"}</a></div>}
        <button className="button primary submit" type="submit" disabled={result==="sending"}>{result==="sending"?(ar?"جارٍ إرسال الطلب…":"Sending…"):preview?(ar?"معاينة إرسال الطلب":"Preview submission"):(ar?"أرسل طلبك":"Send enquiry")}</button>
        </fieldset>
      </form>}
    </div>
  );
}
