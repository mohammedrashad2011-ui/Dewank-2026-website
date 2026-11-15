import type { ReactNode } from "react";

// One thin line icon per service type. Generic shapes only: no platform or brand logos.
const paths: Record<string, ReactNode> = {
  calendar: <><rect x="3.5" y="5" width="17" height="15.5" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></>,
  camera: <><rect x="3" y="6.5" width="18" height="13" rx="3" /><circle cx="12" cy="13" r="3.2" /><path d="M8.5 6.5 9.8 4.5h4.4l1.3 2" /></>,
  layout: <><rect x="3.5" y="4.5" width="17" height="15" rx="2" /><path d="M3.5 9.5h17" /><rect x="7" y="13" width="10" height="3" rx="1.5" /></>,
  browser: <><rect x="3.5" y="4.5" width="17" height="15" rx="2" /><path d="M3.5 9h17M7 6.8h.01" /></>,
  search: <><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4 4" /></>,
  chat: <path d="M4.5 19.5 6 15.8A7.5 7.5 0 1 1 9.7 18.7z" />,
  target: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r=".8" /></>,
  tag: <><path d="M3.5 12.2V4.5a1 1 0 0 1 1-1h7.7l8.3 8.3a1 1 0 0 1 0 1.4l-7.4 7.4a1 1 0 0 1-1.4 0z" /><circle cx="8" cy="8" r="1.4" /></>,
  shapes: <><circle cx="9" cy="9" r="5" /><rect x="12.5" y="12.5" width="7" height="7" rx="1.5" /></>,
  funnel: <path d="M3.5 4.5h17l-6.5 8v6l-4 1.5v-7.5z" />,
  film: <><rect x="3.5" y="5" width="17" height="14" rx="2" /><path d="M7.5 5v14M16.5 5v14M3.5 9.5h4M3.5 14.5h4M16.5 9.5h4M16.5 14.5h4" /></>,
};

export type OfferIconName = keyof typeof paths;

export function OfferIcon({ name }: { name: OfferIconName }) {
  return (
    <svg className="oh-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {paths[name]}
    </svg>
  );
}
