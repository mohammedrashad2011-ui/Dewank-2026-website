import { ImageResponse } from "next/og";

export const alt = "BITHAN — دراسة حالة تسمية وهوية بصرية للمجوهرات";
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
          color: "#FFFFFF",
          padding: "64px 72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "stretch",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "66%",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", color: "#93BFEA", fontSize: 20, letterSpacing: 3, fontWeight: 700 }}>
              DEWANK® · CASE STUDY
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", fontSize: 88, lineHeight: 0.95, fontWeight: 800, letterSpacing: -3 }}>
                BITHAN
              </div>
              <div style={{ display: "flex", marginTop: 20, color: "#C8E4FA", fontSize: 40, lineHeight: 1.1 }}>
                Fine Jewelry
              </div>
              <div style={{ display: "flex", marginTop: 8, color: "#93BFEA", fontSize: 36, lineHeight: 1.15 }}>
                Naming → Identity
              </div>
            </div>

            <div style={{ display: "flex", color: "#C2CCD8", fontSize: 20 }}>
              Qatar · Strategy · Arabic Identity · Applications · 2026
            </div>
          </div>

          <div
            style={{
              display: "flex",
              width: "28%",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(147,191,234,.35)",
              borderRadius: 32,
              background: "#0B1A2B",
            }}
          >
            <div style={{ display: "flex", color: "#93BFEA", fontSize: 18, letterSpacing: 7 }}>FINE</div>
            <div style={{ display: "flex", marginTop: 8, color: "#93BFEA", fontSize: 18, letterSpacing: 7 }}>JEWELRY</div>
            <div style={{ display: "flex", width: 92, height: 2, marginTop: 34, marginBottom: 34, background: "#3E74AE" }} />
            <div style={{ display: "flex", color: "#FFFFFF", fontSize: 56, fontWeight: 700 }}>B</div>
            <div style={{ display: "flex", marginTop: 16, color: "#8EA3BA", fontSize: 16, letterSpacing: 4 }}>2026</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
