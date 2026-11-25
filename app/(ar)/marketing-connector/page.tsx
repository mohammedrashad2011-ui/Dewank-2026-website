import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../../components/site-shell";
import { createMetadata } from "../../lib/seo";
import { privacyPageCss } from "../privacy/privacy-page-styles";

export const metadata: Metadata = createMetadata({
  title: "موصل التسويق الخاص | ديوانك",
  description:
    "أداة تسويق داخلية تستخدمها ديوانك لقراءة بيانات حملات جوجل ومؤشرات الموقع، وتحليلها وتقديم توصيات. تعرّف على البيانات التي تصل إليها وكيف نعالجها.",
  path: "/marketing-connector",
});

export default function MarketingConnectorPage() {
  return (
    <main className="legal-page" dir="rtl" lang="ar">
      <style dangerouslySetInnerHTML={{ __html: privacyPageCss }} />
      <Header />
      <section className="legal-shell shell">
        <span className="legal-eyebrow">ديوانك · موصل التسويق</span>
        <h1>موصل التسويق الخاص لديوانك</h1>
        <p className="legal-intro">
          <strong>ما هذه الصفحة؟</strong> موصل تسويق داخلي تستخدمه ديوانك لتحليل أداء حملاتنا ومواقعنا عبر خدمات Google،
          ثم تقديم توصيات مكتوبة للفريق. لا يستخدمه أشخاص آخرون، ولا يتيح لأي زائر الوصول إلى بيانات.
        </p>
        <p className="legal-updated">آخر تحديث: 25 نوفمبر 2026</p>

        <h2 id="purpose">1. الغرض من التطبيق</h2>
        <p>
          يستخدم التطبيق صلاحيات القراءة للحصول على تقارير الأداء من خدمات Google التالية، ثم يحوّلها إلى ملخصات
          ومقارنات يراجعها مشغّل ديوانك المعتمد قبل أي قرار.
        </p>

        <h2 id="apis">2. خدمات Google التي يتصل بها التطبيق</h2>
        <ul>
          <li><strong>Google Ads API:</strong> قراءة أداء الحملات والكلمات المفتاحية وعروض الإعلانات وسجل التغييرات.</li>
          <li><strong>Google Analytics Data API:</strong> قراءة تقارير الزيارات والأحداث والتحويلات لموقع dewank.com.</li>
          <li><strong>Google Analytics Admin API:</strong> قراءة إعدادات الممتلكات وقائمة أحداث التحويل.</li>
          <li><strong>Google Tag Manager API:</strong> قراءة الوسوم والمشغّلات والمتغيرات لحاوية الموقع.</li>
          <li><strong>Google Search Console API:</strong> قراءة النقرات والظهور والترتيب وخريطة الموقع لـ dewank.com.</li>
        </ul>
        <p>
          <strong>وضع القراءة افتراضيًا.</strong> لا يُنشئ التطبيق حملات ولا يغيّر ميزانيات أو كلمات مفتاحية أو وسوم
          أو إعدادات بدون موافقة صريحة من المشغّل في المحادثة.
        </p>

        <h2 id="processing">3. كيف نعالج البيانات</h2>
        <p>
          تُجلب البيانات بناءً على طلب المشغّل فقط، ولا تُجمع بشكل دوري إلا إذا فعّل المشغّل مهمة مجدولة صراحةً.
          بعد الجلب، تُعالَج البيانات محليًا على جهاز المشغّل، ويُرسل محتواها إلى نموذج الذكاء الاصطناعي من Anthropic
          عبر Claude Code لتحليلها وصياغة التوصيات. التفاصيل في سياسة الخصوصية.
        </p>

        <h2 id="ai">4. استخدام الذكاء الاصطناعي</h2>
        <p>
          يعمل Claude Code من جهاز المشغّل، لكنه يرسل المطالبات ومخرجات النموذج عبر الإنترنت إلى Anthropic لتشغيل
          النموذج. لا تُستخدم بيانات Google لعرض إعلانات، ولا لبيعها، ولا لأي غرض غير التحليل الداخلي لأداء ديوانك.
        </p>

        <h2 id="policies">5. الصفحات القانونية</h2>
        <p>
          <Link href="/marketing-connector/privacy">سياسة الخصوصية</Link> تشرح البيانات التي نصل إليها، وأين تُعالج
          وتُخزَّن، ومدة الاحتفاظ، وكيف تُلغى الصلاحيات وتُحذف البيانات.{" "}
          <Link href="/marketing-connector/terms">شروط الاستخدام</Link> تحدد حدود الاستخدام والمسؤوليات.
        </p>

        <h2 id="contact">6. التواصل</h2>
        <p>
          للاستفسارات حول هذه الصفحات أو طلبات الحذف، راسلنا على{" "}
          <a href="mailto:hello@dewank.com">hello@dewank.com</a>.
        </p>
      </section>
      <Footer />
    </main>
  );
}
