import type { ReactNode } from "react";
import OfferInterestTracker from "./offer-interest-tracker";

export default function OffersLayout({ children }: { children: ReactNode }) {
  return <><OfferInterestTracker />{children}</>;
}
