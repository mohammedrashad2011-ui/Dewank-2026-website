"use client";

import type { ReactNode } from "react";
import RiyadhInteractions from "./riyadh-interactions";
import "./riyadh-interactions.css";

export default function RiyadhMarketingAgencyTemplate({ children }: { children: ReactNode }) {
  return (
    <>
      <RiyadhInteractions />
      {children}
    </>
  );
}
