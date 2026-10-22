"use client";

import Link from "next/link";
import { useOfferPrice } from "../../offers/use-offer-price";

export function NamingLocalizedPrice() {
  const price = useOfferPrice("brand-naming");
  return (
    <span className="naming-localized-price" dir="rtl">
      <b dir="ltr">{price.formattedAmount}</b>
      <span>{price.currencyLabel}</span>
    </span>
  );
}

export function NamingLocalizedOfferLink() {
  const price = useOfferPrice("brand-naming");
  return (
    <Link className="button whatsapp" href="/offers/brand-naming">
      شاهد الباقة: <b dir="ltr">{price.formattedAmount}</b> {price.currencyLabel} <span aria-hidden="true">←</span>
    </Link>
  );
}

export function NamingLocalizedPriceAnswer() {
  const price = useOfferPrice("brand-naming");
  return (
    <p>تبدأ الباقة الجاهزة من <b dir="ltr">{price.formattedAmount}</b> {price.currencyLabel} وتشمل 10–15 اسمًا مع المعاني والفحص المبدئي والدومين وأفضل الترشيحات والتوجّه الأولي للعلامة. يتغير السعر عند تعدد الأسواق أو اللغات أو الحاجة إلى بحث أوسع.</p>
  );
}
