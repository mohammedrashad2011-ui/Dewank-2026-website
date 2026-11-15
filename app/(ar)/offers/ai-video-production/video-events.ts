// dataLayer events for the video offer. GTM already records WhatsApp link clicks
// (links to wa.me), so this file adds only the two steps before that click:
// playing the showreel and choosing a package. No form text is sent.
type VideoEventName = "video_showreel_play" | "video_package_select";

export function pushVideoEvent(event: VideoEventName, payload: Record<string, string | number>) {
  if (typeof window === "undefined") return;
  const win = window as Window & { dataLayer?: Array<Record<string, unknown>> };
  win.dataLayer = win.dataLayer || [];
  win.dataLayer.push({ event, ...payload });
}
