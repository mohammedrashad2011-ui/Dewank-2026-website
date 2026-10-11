import Link from "next/link";
import "./related-guides.css";

export type RelatedGuide = { href: string; title: string };

// Links a service page to the guides that answer the questions a buyer asks before deciding.
export function RelatedGuides({ guides }: { guides: RelatedGuide[] }) {
  return (
    <section className="shell related-guides" aria-labelledby="related-guides-title">
      <span className="section-label">Guides</span>
      <h2 id="related-guides-title">Read before you decide.</h2>
      <div className="related-guides-list">
        {guides.map((guide) => (
          <Link key={guide.href} href={guide.href}>
            <span>{guide.title}</span>
            <span aria-hidden="true">→</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
