import { ImageResponse } from "next/og";

// Shared social card for the essential visual identity offer (Arabic and English pages).
// Latin text only: the default OG font has no Arabic shaping. No price, because prices differ by country.
export const ogSize = { width: 1200, height: 630 };

export function identityOgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#0B1A2B", color: "#FFFFFF", padding: "64px 72px", fontFamily: "Arial, sans-serif" }}>
        <div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "stretch" }}>
          <div style={{ display: "flex", width: "64%", flexDirection: "column", justifyContent: "space-between" }}>
            <div style={{ display: "flex", color: "#E3B04B", fontSize: 20, letterSpacing: 3, fontWeight: 700 }}>DEWANK® · ESSENTIAL PACKAGE</div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", fontSize: 76, lineHeight: 1, fontWeight: 800, letterSpacing: -2 }}>Logo & Brand</div>
              <div style={{ display: "flex", fontSize: 76, lineHeight: 1.05, fontWeight: 800, letterSpacing: -2, color: "#E3B04B" }}>Identity Design</div>
              <div style={{ display: "flex", marginTop: 26, color: "#C9D3DE", fontSize: 30 }}>Logo · Colours · Typefaces · 3 applications</div>
            </div>
            <div style={{ display: "flex", color: "#9FB0C2", fontSize: 22 }}>7–10 working days · Two revision rounds · Arabic & English</div>
          </div>
          <div style={{ display: "flex", width: "28%", flexDirection: "column", alignItems: "center", justifyContent: "center", borderRadius: 32, border: "1px solid rgba(227,176,75,.4)", background: "#10243A" }}>
            <div style={{ display: "flex", width: 120, height: 120, borderRadius: 60, background: "#E3B04B", alignItems: "center", justifyContent: "center", color: "#0B1A2B", fontSize: 64, fontWeight: 800 }}>D</div>
            <div style={{ display: "flex", marginTop: 30, gap: 12 }}>
              <div style={{ display: "flex", width: 34, height: 34, borderRadius: 8, background: "#E3B04B" }} />
              <div style={{ display: "flex", width: 34, height: 34, borderRadius: 8, background: "#F3EEE3" }} />
              <div style={{ display: "flex", width: 34, height: 34, borderRadius: 8, background: "#3E74AE" }} />
            </div>
            <div style={{ display: "flex", marginTop: 26, color: "#9FB0C2", fontSize: 16, letterSpacing: 5 }}>VISUAL IDENTITY</div>
          </div>
        </div>
      </div>
    ),
    ogSize,
  );
}
