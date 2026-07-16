import type { Metadata } from "next";
import { createMetadata } from "../lib/seo";

export const metadata: Metadata = createMetadata({
  title: "واتساب أوتوميشن وCRM للشركات",
  description: "نظام واتساب أوتوميشن ذكي يرد على العملاء 24/7، يؤهلهم، يوجّههم للحجز، يرسل التذكيرات ويربط المحادثات بنظام CRM.",
  path: "/whatsapp-automation",
  keywords: ["واتساب أوتوميشن", "WhatsApp Automation", "CRM واتساب", "شات بوت واتساب", "أتمتة المبيعات"],
});
import Link from "next/link";
import { Footer, Header } from "../components/site-shell";
import AutomationFlow from "../components/automation-flow";
import ConnectedSystem from "../components/connected-system";
export default function WhatsAppAutomation(){return <main><Header/><section className="wa-hero"><div className="shell wa-hero-grid"><div><span className="eyebrow">[ WHATSAPP NEXT‑GEN ]</span><h1>واتساب لا يرد فقط.<br/><em>يفهم، يؤهّل، ويتحرّك.</em></h1><p>منظومة محادثة ذكية تربط التسويق بالمبيعات وخدمة العملاء، وتحوّل كل رسالة إلى خطوة واضحة بدل أن تظل مجرد إشعار.</p><Link className="button primary" href="/contact">صمّم منظومتك <span>↙</span></Link></div><div className="phone-demo" tabIndex={0}><div className="phone-head"><b>ديوانك AI</b><span>متصل الآن ●</span></div><div className="bubble bot">أهلًا 👋 كيف نقدر نساعد مشروعك اليوم؟</div><div className="bubble user">أريد أتمتة واتساب للمبيعات</div><div className="bubble bot">ممتاز. هل هدفك زيادة التحويل أم تقليل وقت الرد؟</div><div className="typing">•••</div></div></div></section><section className="shell flow-section"><span className="section-label">[ THE FLOW ]</span><h2>من أول «مرحبًا»<br/>إلى <mark>إجراء قابل للقياس.</mark></h2><AutomationFlow/></section><section className="automation-core"><div className="shell core-grid"><div className="core-copy"><span className="section-label">[ ONE CONNECTED SYSTEM ]</span><h2>المحادثة في المنتصف.<br/><mark>كل شيء حولها متصل.</mark></h2></div><ConnectedSystem/></div></section><section className="shell wa-benefits"><div><b>24/7</b><p>استجابة فورية دون انتظار ساعات العمل.</p></div><div><b>1→1</b><p>رحلات مختلفة حسب نية كل عميل.</p></div><div><b>360°</b><p>سجل موحّد يساعد فريقك على إكمال الحوار.</p></div></section><section className="wa-cta"><div className="shell"><p>الأتمتة الجيدة لا تجعل العميل يشعر أنه يتحدث مع روبوت.</p><h2>تجعل الطريق إلى القرار<br/><mark>أقصر وأسهل.</mark></h2><Link className="button primary" href="/contact">ابدأ خريطة الأتمتة <span>↙</span></Link></div></section><Footer/></main>}
