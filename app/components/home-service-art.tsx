// Illustrations for the four Arabic homepage service cards. Each one is drawn for its service:
//   growth      نجذب الطلب   rising bars and a demand arrow that ends on a target
//   web         نبني المواقع  a browser layout with a cursor pressing the call to action
//   brand       نبني البراند والمحتوى  an identity emblem on an orbit
//   automation  نؤتمت المتابعة  a conversation handed to a clock and then to a completed check
// The artwork is decorative (aria-hidden). Colours are the card's own: ink, paper, lime, coral and blue.
// Shapes sit inside a 240 x 150 canvas, so the card can size the box without distorting them.

// Tones come from the service list in app/page.tsx. Any tone other than the three named below uses the automation art.
export function ServiceArt({ tone }: { tone: string }) {
  if (tone === "growth") {
    return (
      <svg viewBox="0 0 240 150" aria-hidden="true" focusable="false">
        <line x1="8" y1="132" x2="232" y2="132" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" />
        <rect x="18" y="98" width="26" height="34" rx="6" fill="#0a0a0a" />
        <rect x="60" y="74" width="26" height="58" rx="6" fill="#0a0a0a" />
        <rect x="102" y="88" width="26" height="44" rx="6" fill="#0a0a0a" />
        <rect x="144" y="44" width="26" height="88" rx="6" fill="#0a0a0a" />
        <path d="M14 96 L70 60 L112 74 L196 22" fill="none" stroke="#ff5438" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M176 20 L198 20 L196 42" fill="none" stroke="#ff5438" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="196" cy="22" r="7" fill="#0a0a0a" />
      </svg>
    );
  }

  if (tone === "web") {
    return (
      <svg viewBox="0 0 240 150" aria-hidden="true" focusable="false">
        <rect x="58" y="26" width="170" height="112" rx="16" fill="#1647ff" />
        <rect x="36" y="14" width="170" height="112" rx="16" fill="#ffffff" stroke="#d6d9e0" />
        <path d="M36 30 Q36 14 52 14 H190 Q206 14 206 30 V38 H36 Z" fill="#eceef3" />
        <circle cx="52" cy="26" r="3" fill="#9aa0ad" />
        <circle cx="62" cy="26" r="3" fill="#9aa0ad" />
        <circle cx="72" cy="26" r="3" fill="#9aa0ad" />
        <rect x="50" y="50" width="142" height="40" rx="10" fill="#1647ff" />
        <rect x="62" y="62" width="74" height="7" rx="3.5" fill="#ffffff" opacity=".92" />
        <rect x="62" y="75" width="48" height="7" rx="3.5" fill="#ffffff" opacity=".55" />
        <rect x="50" y="100" width="66" height="18" rx="6" fill="#c8ff00" />
        <rect x="126" y="100" width="66" height="18" rx="6" fill="#ff5438" />
        <path d="M176 92 L176 118 L183 112 L188 124 L194 121 L189 110 L198 110 Z" fill="#0a0a0a" stroke="#ffffff" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    );
  }

  if (tone === "brand") {
    return (
      <svg viewBox="0 0 240 150" aria-hidden="true" focusable="false">
        <ellipse cx="120" cy="75" rx="108" ry="32" fill="none" stroke="#0a0a0a" strokeWidth="1.5" transform="rotate(-14 120 75)" />
        <circle cx="120" cy="75" r="50" fill="#0a0a0a" />
        <path d="M120 75 L120 25 A50 50 0 0 1 170 75 Z" fill="#ff5438" />
        <circle cx="120" cy="75" r="9" fill="#f5f1e7" />
        <circle cx="227" cy="48" r="6" fill="#1647ff" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 240 150" aria-hidden="true" focusable="false">
      <path d="M80 72 C 92 72, 96 54, 102 52" fill="none" stroke="#ffffff" strokeOpacity=".6" strokeWidth="2" strokeDasharray="4 6" strokeLinecap="round" />
      <path d="M140 60 C 156 62, 158 98, 166 98" fill="none" stroke="#ffffff" strokeOpacity=".6" strokeWidth="2" strokeDasharray="4 6" strokeLinecap="round" />
      <rect x="20" y="52" width="60" height="40" rx="14" fill="rgba(255,255,255,.16)" stroke="#ffffff" strokeOpacity=".7" />
      <path d="M34 92 L30 104 L46 92 Z" fill="rgba(255,255,255,.16)" stroke="#ffffff" strokeOpacity=".7" strokeLinejoin="round" />
      <rect x="32" y="64" width="36" height="5" rx="2.5" fill="#ffffff" opacity=".92" />
      <rect x="32" y="75" width="24" height="5" rx="2.5" fill="#ffffff" opacity=".6" />
      <circle cx="120" cy="52" r="20" fill="rgba(255,255,255,.16)" stroke="#ffffff" strokeOpacity=".7" />
      <path d="M120 42 V52 L127 57" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="190" cy="98" r="24" fill="#c8ff00" />
      <path d="M178 98 L187 107 L203 90" fill="none" stroke="#0a0a0a" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
