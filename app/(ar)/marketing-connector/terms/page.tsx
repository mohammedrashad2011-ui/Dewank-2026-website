import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../../../components/site-shell";
import { createMetadata } from "../../../lib/seo";
import { privacyPageCss } from "../../privacy/privacy-page-styles";

export const metadata: Metadata = createMetadata({
  title: "شروط استخدام موصل التسويق | ديوانك",
  description: "شروط استخدام موصل التسويق الخاص لديوانك، وحدود الاستخدام والمسؤوليات.",
  path: "/marketing-connector/terms",
});

export default function MarketingConnectorTermsPage() {
  return (
    <main className="legal-page" dir="rtl" lang="ar">
      <style dangerouslySetInnerHTML={{ __html: privacyPageCss }} />
      <Header />
      <section className="legal-shell shell">
        <span className="legal-eyebrow">ديوانك · موصل التسويق</span>
        <h1>شروط استخدام موصل التسويق</h1>
        <p className="legal-intro">
          <strong>التطبيق للاستخدام الداخلي لديوانك فقط.</strong> هذه الشروط تحدد ما هو مسموح وما هو غير مسموح.
        </p>
        <p className="legal-updated">آخر تحديث: 25 نوفمبر 2026</p>

        <h2 id="use">1. الاستخدام المسموح</h2>
        <p>
          يستخدم التطبيق مشغّل ديوانك المعتمد فقط لتحليل أداء حملات ديوانك ومواقعها عبر خدمات Google المذكورة في{" "}
          <Link href="/marketing-connector">صفحة التعريف</Link>.
        </p>

        <h2 id="limits">2. ما لا يُسمح به</h2>
        <ul>
          <li>استخدام التطبيق لبيانات حسابات Google لا تملكها ديوانك أو لم تُفوّض لها.</li>
          <li>بيع بيانات Google أو تأجيرها أو نقلها لأطراف أخرى.</li>
          <li>استخدام البيانات لعرض إعلانات أو للاستهداف أو إعادة الاستهداف.</li>
          <li>إجراء تغييرات على الحملات أو الإعدادات دون موافقة صريحة من المشغّل في المحادثة.</li>
        </ul>

        <h2 id="changes">3. التغييرات على الحسابات</h2>
        <p>
          يعمل التطبيق بوضع القراءة افتراضيًا. لا تُجرى أي تغييرات على حملات أو وسوم أو إعدادات إلا بعد موافقة صريحة
          من المشغّل في المحادثة، ويُسجَّل كل تغيير.
        </p>

        <h2 id="liability">4. إخلاء المسؤولية</h2>
        <p>
          التوصيات والتحليلات المقدمة من التطبيق مساعدة للقرار، ولا تُعد نصيحة مالية أو قانونية أو استشارية. يتحمل المشغّل
          مسؤولية القرارات التي يتخذها بناءً عليها. ولا تضمن ديوانك دقة كل بيانات تأتي من خدمات Google أو Anthropic.
        </p>

        <h2 id="availability">5. الإتاحة</h2>
        <p>
          تُقدَّم الخدمة كما هي، وقد تتوقف أو تتغير أو تتعطل خدمات Google أو Anthropic التي يعتمد عليها التطبيق، دون أن يترتب
          على ذلك التزام تعويضي من ديوانك.
        </p>

        <h2 id="privacy">6. الخصوصية</h2>
        <p>
          طريقة معالجة البيانات وتخزينها وحذفها موضحة في{" "}
          <Link href="/marketing-connector/privacy">سياسة الخصوصية</Link>، وتُعد جزءًا من هذه الشروط.
        </p>

        <h2 id="termination">7. الإنهاء</h2>
        <p>
          يمكن إيقاف التطبيق أو إلغاء صلاحياته في أي وقت، كما هو موضح في سياسة الخصوصية.
        </p>

        <h2 id="contact">8. التواصل</h2>
        <p>
          للاستفسار راسل <a href="mailto:hello@dewank.com">hello@dewank.com</a>.
        </p>
      </section>
      <Footer />
    </main>
  );
}
