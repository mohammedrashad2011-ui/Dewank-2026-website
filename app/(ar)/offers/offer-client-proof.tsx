import Link from "next/link";

// One real client review on an offer page. Quotes are exact (or exact excerpts marked with an ellipsis) from reviews
// already published on the site, without the founder's personal name. The credit names the type of project the review
// came from, so a review is never presented as being about a different service.
const reviews = {
  data: {
    ar: { quote: "قدرته على تحليل البيانات وعرضها كانت ممتازة. سرعة التنفيذ وجودة العمل جعلتاه مميزًا في أبحاث السوق.", credit: "مات موناكو، الولايات المتحدة · مشروع أبحاث سوق وتحليل بيانات" },
    en: { quote: "His ability to analyse and present data was excellent. The speed of execution and the quality of the work made him stand out in market research.", credit: "Matt Monaco, United States · Market research and data analysis project" },
  },
  bithan: {
    ar: { quote: "…يشتغل بضمير واحترافية، ومتعاون ومتقبل للنقاش والملاحظات ومرن في التعامل، ويهتم فعلًا بجودة الشغل، وأهم شي النتيجة ترضي العميل. تجربة موفقة جدًا.", credit: "عميل BITHAN، قطر · مشروع تسمية وهوية بصرية · تقييم 5 من 5" },
    en: { quote: "Dedicated, professional, and easy to communicate with… genuinely cares about delivering good quality work. Great experience overall.", credit: "BITHAN client, Qatar · Naming and visual identity project · 5/5 review" },
  },
} as const;

export function OfferClientProof({ review, locale }: { review: keyof typeof reviews; locale: "ar" | "en" }) {
  const text = reviews[review][locale];
  const ar = locale === "ar";
  return (
    <section className="shell offer-client-proof" aria-label={ar ? "رأي عميل" : "Client review"}>
      <span className="section-label">{ar ? "من تجارب عملائنا" : "From our clients"}</span>
      <blockquote>
        <p>{ar ? `«${text.quote}»` : `“${text.quote}”`}</p>
        <cite>{text.credit}</cite>
      </blockquote>
      <Link className="offer-client-proof-link" href={ar ? "/work" : "/en/work"}>{ar ? "شاهد أعمالنا ←" : "See our work →"}</Link>
    </section>
  );
}
