"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [state, setState] = useState<'idle'|'sending'|'success'|'error'>('idle');
  const [message, setMessage] = useState('');
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setState('sending'); setMessage('');
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: {'content-type':'application/json'}, body: JSON.stringify(data) });
      const result = await response.json() as { error?: string };
      if (!response.ok) throw new Error(result.error || 'تعذر إرسال الطلب');
      setState('success'); form.reset();
    } catch (error) { setState('error'); setMessage(error instanceof Error ? error.message : 'تعذر إرسال الطلب'); }
  }
  return <form className="contact-form" onSubmit={submit}><div className="form-row"><label>الاسم<input name="name" required minLength={2} placeholder="اسمك" /></label><label>البريد الإلكتروني<input name="email" required type="email" placeholder="name@company.com" dir="ltr" /></label></div><label>اسم الشركة أو المشروع<input name="company" placeholder="اختياري" /></label><label>ما الخدمة الأقرب لاحتياجك؟<select name="service" required defaultValue=""><option value="" disabled>اختر الخدمة</option><option>البراندينج الاستراتيجي</option><option>التسويق وصناعة المحتوى</option><option>أتمتة الذكاء الاصطناعي</option><option>منظومة متكاملة</option></select></label><label>نبذة عن المشروع<textarea name="brief" required minLength={20} rows={5} placeholder="ما الهدف، وما التحدي الحالي؟" /></label><label className="honeypot" aria-hidden="true">اترك هذا الحقل فارغًا<input name="website" tabIndex={-1} autoComplete="off" /></label><button className="button primary submit" disabled={state==='sending'} type="submit">{state==='sending' ? 'جارٍ الإرسال…' : 'إرسال الطلب'} <span>↙</span></button>{state==='success' && <p className="form-status success" role="status">وصل طلبك بنجاح. سنراجعه ونعود إليك بالخطوة المناسبة.</p>}{state==='error' && <p className="form-status error" role="alert">{message}</p>}<small className="privacy-note">نستخدم بياناتك فقط للرد على طلبك.</small></form>;
}
