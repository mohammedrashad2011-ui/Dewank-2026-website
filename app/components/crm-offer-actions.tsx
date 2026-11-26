import type { ReactNode } from "react";
import { CrmOfferContactLink } from "@/app/components/crm-offer-contact-link";

// Keep the original CTA as the only rendered child while CRM is disabled.
export function CrmOfferActions({enabled,locale,offer,children}:{enabled:boolean;locale:"ar"|"en";offer:string;children:ReactNode}) {
  if(!enabled)return <>{children}</>;
  return <div className="crm-offer-actions" data-crm-group={offer}>
    {children}
    <CrmOfferContactLink locale={locale} offer={offer}/>
  </div>;
}
