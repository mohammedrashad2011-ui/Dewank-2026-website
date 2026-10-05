"use client";

import { useEffect, type ReactNode } from "react";
import RiyadhInteractions from "./riyadh-interactions";
import "./riyadh-interactions.css";

export default function RiyadhMarketingAgencyTemplate({ children }: { children: ReactNode }) {
  // The root layout is Arabic-only; mark the rendered document as English for this page and restore it on navigation.
  useEffect(() => {
    const root = document.documentElement;
    const previous = root.lang;
    root.lang = "en";
    return () => {
      root.lang = previous || "ar";
    };
  }, []);

  return (
    <>
      <RiyadhInteractions />
      {children}
    </>
  );
}
