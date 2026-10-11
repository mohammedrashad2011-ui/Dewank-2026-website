"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";

declare global {
  interface Window {
    va?: (...args: unknown[]) => void;
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName: string;
  eventLocation: string;
};

export function BithanTrackedLink({
  eventName,
  eventLocation,
  onClick,
  ...props
}: TrackedLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    const payload = {
      case_study: "BITHAN",
      location: eventLocation,
      destination: typeof props.href === "string" ? props.href : "",
    };

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: eventName, ...payload });

    window.gtag?.("event", eventName, payload);
    window.va?.("event", { name: eventName, data: payload });

    onClick?.(event);
  }

  return <a {...props} onClick={handleClick} />;
}
