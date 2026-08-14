"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const SitewideWhatsAppBridge = dynamic(() => import("./sitewide-whatsapp-bridge"), { ssr: false });
const InstagramFollowCard = dynamic(() => import("./instagram-follow-card"), { ssr: false });

export default function DeferredClientLayer() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let timeoutId: number | undefined;
    let idleId: number | undefined;

    const activate = () => setReady(true);
    const win = window as Window & {
      requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    if (win.requestIdleCallback) {
      idleId = win.requestIdleCallback(activate, { timeout: 1200 });
    } else {
      timeoutId = window.setTimeout(activate, 900);
    }

    return () => {
      if (idleId !== undefined) win.cancelIdleCallback?.(idleId);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, []);

  if (!ready) return null;

  return (
    <>
      <SitewideWhatsAppBridge />
      <InstagramFollowCard />
    </>
  );
}
