import { ImageResponse } from "next/og";

export const alt = "BITHAN Fine Jewelry — Brand Naming & Identity Case Study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#050B13",
          color: "white",
          position: "relative",
          overflow: "hidden",
          padding: "64px 72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ position: "absolute", width: 420, height: 420, borderRadius: 420, right: -90, top: -110, background: "rgba(62,116,174,.22)" }} />
        <div style={{ position: "absolute", width: 380, height: 2, right: -70, top: 110, background: "linear-gradient(90deg, transparent, #93BFEA, transparent)", transform: "rotate(-42deg)" }} />
        <div style={{ position: "absolute", width: 320, height: 2, left: -80, bottom: 105, background: "linear-gradient(90deg, transparent, #3E74AE, transparent)", transform: "rotate(-42deg)" }} />

        <div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "stretch", position: "relative", zIndex: 2 }}>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "64%" }}>
            <div style={{ display: "flex", fontSize: 22, letterSpacing: 4, color: "#93BFEA", fontWeight: 700 }}>
              DEWANK® · SELECTED CASE STUDY
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 82, lineHeight: .92, fontWeight: 800, letterSpacing: -4 }}>BITHAN</div>
              <div style={{ fontSize: 44, lineHeight: 1.06, color: "#C8E4FA", marginTop: 18 }}>
                Fine Jewelry Brand Naming
                <br />&amp; Identity Case Study
              </div>
            </div>
            <div style={{ display: "flex", gap: 18, fontSize: 20, color: "rgba(255,255,255,.72)" }}>
              <span>Naming</span><span>·</span><span>Strategy</span><span>·</span><span>Arabic Identity</span><span>·</span><span>Qatar</span>
            </div>
          </div>

          <div style={{ width: "28%", border: "1px solid rgba(147,191,234,.25)", borderRadius: 34, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: "linear-gradient(145deg,#07111D,#0D2238)" }}>
            <div style={{ fontSize: 28, letterSpacing: 10, color: "#93BFEA" }}>FINE</div>
            <div style={{ fontSize: 28, letterSpacing: 10, color: "#93BFEA", marginTop: 8 }}>JEWELRY</div>
            <div style={{ width: 90, height: 1, background: "#3E74AE", margin: "32px 0" }} />
            <div style={{ fontSize: 18, letterSpacing: 5, color: "rgba(255,255,255,.5)" }}>2026</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
