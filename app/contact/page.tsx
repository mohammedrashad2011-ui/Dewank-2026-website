import { Footer, Header } from "../components/site-shell";
import ContactForm from "./contact-form";

export default function ContactPage() {
  return <main><Header /><section className="contact-layout shell"><div className="contact-copy"><span className="eyebrow"><i /> ابدأ من هنا</span><h1>أخبرنا أين تريد<br/>أن تصل. <em>ونبدأ.</em></h1><p>شاركنا نبذة مختصرة عن المشروع. كلما كان الهدف أوضح، كانت توصيتنا أدق.</p><div className="contact-points"><div><b>01</b><span><strong>مراجعة أولية</strong><small>نفهم السياق والهدف ونقطة التعطّل.</small></span></div><div><b>02</b><span><strong>توصية واضحة</strong><small>نقترح النطاق والخطوة التالية بلا تعقيد.</small></span></div><div><b>03</b><span><strong>خطة تنفيذ</strong><small>مخرجات، توقيت، ومسؤوليات محددة.</small></span></div></div></div><ContactForm /></section><Footer /></main>;
}
