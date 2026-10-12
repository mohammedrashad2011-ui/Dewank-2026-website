"use client";

import type { ReactNode } from "react";
import RiyadhInteractions from "./riyadh-interactions";
import "./riyadh-interactions.css";

// The document language comes from the English root layout (app/(en)/layout.tsx), so no client-side lang change is needed.
export default function RiyadhMarketingAgencyTemplate({ children }: { children: ReactNode }) {
  return (
    <>
      <RiyadhInteractions />
      {children}
    </>
  );
}
