import { ImageResponse } from "next/og";

export const alt = "تصميم الهوية البصرية في السعودية — ديوانك";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        dir="rtl"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #071A33 0%, #0B2746 100%)",
          color: "#F8F3EA",
          fontFamily: "sans-serif",
          padding: "70px",
        }}
      >
        <div style={{ position: "absolute", inset: "70px", border: "1px solid rgba(210,168,78,.35)", borderRadius: "28px" }} />
        <div style={{ position: "absolute", width: "420px", height: "420px", borderRadius: "50%", background: "rgba(210,168,78,.06)", left: "-150px", top: "-180px" }} />
        <div style={{ position: "absolute", width: "500px", height: "500px", borderRadius: "50%", background: "rgba(6,212,232,.035)", right: "-220px", bottom: "-320px" }} />

        <div style={{ display: "flex", width: "100%", alignItems: "stretch", justifyContent: "space-between", padding: "58px 42px 48px", zIndex: 1 }}>
          <div style={{ display: "flex", width: "245px", alignItems: "flex-start", justifyContent: "center", direction: "ltr" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "140px", height: "140px", border: "12px solid #D2A84E", borderRadius: "50%", color: "#D2A84E", fontSize: "72px", fontWeight: 800 }}>D</div>
          </div>

          <div style={{ display: "flex", width: "730px", flexDirection: "column", alignItems: "flex-start", justifyContent: "center" }}>
            <div style={{ display: "flex", color: "#D2A84E", fontSize: "24px", fontWeight: 700, marginBottom: "48px" }}>ديوانك — نمو بذكاء</div>
            <div style={{ display: "flex", fontSize: "64px", lineHeight: 1.28, fontWeight: 800 }}>تصميم الهوية البصرية</div>
            <div style={{ display: "flex", fontSize: "64px", lineHeight: 1.28, fontWeight: 800 }}>في السعودية</div>
            <div style={{ display: "flex", color: "#D7CFC2", fontSize: "27px", marginTop: "30px" }}>استراتيجية براند متكاملة تبني وضوحًا وتميّزًا وثقة</div>
            <div style={{ display: "flex", width: "255px", height: "5px", background: "#06D4E8", marginTop: "38px" }} />
          </div>
        </div>
      </div>
    ),
    size,
  );
}
