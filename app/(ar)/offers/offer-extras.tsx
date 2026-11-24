import Link from "next/link";
import { offerExtras, type OfferExtraKey } from "./offer-extras-data";
import "./offer-extras.css";

// Blocks shared by the Arabic and English offers. The content lives in offer-extras-data.ts and no price is written as text.

type Props = { offer: OfferExtraKey; locale: "ar" | "en" };

export function OfferMicro({ offer, locale }: Props) {
  return <p className="oe-micro">{offerExtras[locale][offer].micro}</p>;
}

// An illustrative deliverable and the problems the package solves.
export function OfferSample({ offer, locale }: Props) {
  const { sample, problems } = offerExtras[locale][offer];
  return (
    <section className="shell oe-sample" aria-labelledby="oe-sample-title">
      <div>
        <h2 id="oe-sample-title">{sample.title}</h2>
        <p>{sample.lead}</p>
        <div className="oe-problems">
          <h3>{problems.title}</h3>
          <ul>{problems.items.map(([head, text]) => <li key={head}><b>{head}</b><span>{text}</span></li>)}</ul>
        </div>
      </div>
      <div className="oe-card">
        <p className="oe-card-head"><b>{sample.head}</b><small>{locale === "ar" ? "نموذج توضيحي" : "Illustrative example"}</small></p>
        <dl>{sample.rows.map(([label, text]) => <div key={label}><dt>{label}</dt><dd>{text}</dd></div>)}</dl>
        <p className="oe-card-foot">{sample.foot}</p>
      </div>
    </section>
  );
}

// Comparison with the alternatives and business types, collapsed. The text stays in the HTML.
export function OfferGuide({ offer, locale }: Props) {
  const { compare, sectors } = offerExtras[locale][offer];
  return (
    <section className="shell oe-guide">
      <details>
        <summary><h2>{compare.title}</h2></summary>
        <div className="oe-compare">
          <table>
            <thead><tr>{compare.heads.map((head) => <th key={head} scope="col">{head}</th>)}</tr></thead>
            <tbody>{compare.rows.map(([option, when, what]) => <tr key={option}><th scope="row">{option}</th><td data-label={compare.heads[1]}>{when}</td><td data-label={compare.heads[2]}>{what}</td></tr>)}</tbody>
          </table>
        </div>
      </details>
      <details>
        <summary><h2>{sectors.title}</h2></summary>
        <div className="oe-sectors">{sectors.items.map(([head, text]) => <article key={head}><h3>{head}</h3><p>{text}</p></article>)}</div>
        {sectors.link ? <Link className="oe-link" href={sectors.link[1]}>{sectors.link[0]} {locale === "ar" ? "←" : "→"}</Link> : null}
      </details>
    </section>
  );
}
