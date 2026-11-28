"use client";

import { resolveCurrentOfferPrice, yearEndOffer, type OfferPriceKey } from "./offer-pricing";
import { useLocalizedOfferCountry } from "./use-offer-price";
import "./promotional-price.css";

type Props = { offerKey: OfferPriceKey; locale?: "ar" | "en"; amountClassName?: string; startingAt?: string };

export function PromotionalPrice(props: Props) {
  const country = useLocalizedOfferCountry(props.locale === "en" ? 6500 : 2200);
  return <PromotionalPriceDisplay {...props} country={country} />;
}

export function PromotionalPriceDisplay({ offerKey, locale = "ar", country, amountClassName = "offer-price", startingAt }: Props & { country: string | null }) {
  const quote = resolveCurrentOfferPrice(offerKey, country);
  const ar = locale === "ar";
  const currency = ar ? quote.currencyLabel : quote.currency;
  const format = (amount: number) => new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(amount);
  const endDate = new Intl.DateTimeFormat(ar ? "ar-SA-u-ca-gregory" : "en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(yearEndOffer.endDate + "T00:00:00Z"));
  return (
    <div className="dp-promotion" lang={locale} dir={ar ? "rtl" : "ltr"}>
      {quote.active && <div className="dp-promotion-label">{ar ? "سعر العرض" : "Offer price"}</div>}
      <div className={amountClassName}>{startingAt && <small>{startingAt}</small>}<strong>{format(quote.amount)}</strong><span>{currency}</span></div>
      {quote.active && quote.savings > 0 && (
        <div className="dp-promotion-details">
          <div className="dp-promotion-next">
            <span>{ar ? "السعر بعد انتهاء العرض" : "Price after offer ends"}</span>
            <span><bdi>{format(quote.futureAmount)}</bdi> {currency}</span>
          </div>
          <div className="dp-promotion-saving">{ar ? "وفر" : "Save"} <bdi>{format(quote.savings)}</bdi> {currency} <span dir="ltr">({format(quote.savingsPercent)}%)</span></div>
          <div className="dp-promotion-end">{ar ? "العرض حتى" : "Offer ends"} <time dateTime={yearEndOffer.endDate}>{endDate}</time></div>
        </div>
      )}
    </div>
  );
}

/** Small card treatment: keep the current price dominant and avoid repeating the full offer panel. */
export function PromotionalSaving({ quote, locale = "ar" }: { quote: ReturnType<typeof resolveCurrentOfferPrice>; locale?: "ar" | "en" }) {
  if (!quote.active || quote.savings <= 0) return null;
  const percent = new Intl.NumberFormat(locale, { style: "percent", maximumFractionDigits: 0 }).format(quote.savingsPercent / 100);
  return <span className="dp-card-saving" lang={locale}>{locale === "ar" ? "وفر" : "Save"} <bdi>{percent}</bdi></span>;
}

export function LocalizedPromotionalSaving({ offerKey, locale = "ar", delay }: { offerKey: OfferPriceKey; locale?: "ar" | "en"; delay?: number }) {
  const country = useLocalizedOfferCountry(delay ?? (locale === "ar" ? 2200 : 6500));
  return <PromotionalSaving quote={resolveCurrentOfferPrice(offerKey, country)} locale={locale} />;
}
