import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

const fallbackTitle = "حلول نمو ذكية للشركات";

export async function GET(request: NextRequest) {
  const rawTitle = request.nextUrl.searchParams.get("title")?.trim() || fallbackTitle;
  const title = rawTitle.slice(0, 72);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#071A33",
          color: "#FFF9EF",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 28,
            border: "2px solid #D2A84E",
            borderRadius: 30,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 460,
            height: 460,
            left: -160,
            bottom: -220,
            border: "74px solid rgba(210,168,78,.16)",
            borderRadius: "50%",
            display: "flex",
          }}
        />
        <div
          style={{
            width: "100%",
            padding: "82px 92px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              direction: "ltr",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                color: "#D2A84E",
                fontSize: 26,
                letterSpacing: 5,
              }}
            >
              DEWANK
              <div style={{ width: 70, height: 2, background: "#D2A84E", display: "flex" }} />
            </div>
            <img
              src="https://dewank.com/favicon.svg"
              width="86"
              height="86"
              alt=""
              style={{ borderRadius: 14 }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              direction: "rtl",
              maxWidth: 960,
              marginLeft: "auto",
            }}
          >
            <div style={{ color: "#D2A84E", fontSize: 25, marginBottom: 22, display: "flex" }}>
              نمو بذكاء
            </div>
            <div
              style={{
                fontSize: title.length > 38 ? 58 : 72,
                fontWeight: 700,
                lineHeight: 1.2,
                textAlign: "right",
                display: "flex",
              }}
            >
              {title}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              direction: "ltr",
              color: "#D2A84E",
              fontSize: 21,
            }}
          >
            <span>DEWANK.COM</span>
            <span style={{ color: "#FFF9EF", opacity: 0.74 }}>BRAND · GROWTH · AUTOMATION</span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        "Cache-Control": "public, max-age=86400, s-maxage=604800",
      },
    },
  );
}
