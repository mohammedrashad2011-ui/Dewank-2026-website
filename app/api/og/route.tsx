import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

const fallbackTitle = "ديوانك";

export async function GET(request: NextRequest) {
  const rawTitle = request.nextUrl.searchParams.get("title")?.trim() || fallbackTitle;
  const isHomepage = rawTitle === "ديوانك";
  const title = rawTitle.slice(0, 52);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#06182F",
          color: "#FFF9EF",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 30,
            border: "2px solid rgba(215,170,75,.72)",
            borderRadius: 30,
            display: "flex",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: 520,
            height: 520,
            left: -250,
            bottom: -300,
            border: "82px solid rgba(215,170,75,.10)",
            borderRadius: "50%",
            display: "flex",
          }}
        />

        <div
          style={{
            width: "100%",
            padding: "78px 86px 70px",
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
                gap: 18,
                color: "#D7AA4B",
                fontSize: 23,
                letterSpacing: 5,
              }}
            >
              DEWANK
              <div style={{ width: 74, height: 2, background: "#D7AA4B", display: "flex" }} />
            </div>
            <img
              src="https://dewank.com/favicon.svg"
              width="112"
              height="112"
              alt=""
              style={{ borderRadius: 22 }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              direction: "rtl",
              maxWidth: 940,
              marginLeft: "auto",
            }}
          >
            <div
              style={{
                color: "#D7AA4B",
                fontSize: isHomepage ? 84 : title.length > 30 ? 48 : 66,
                fontWeight: 700,
                lineHeight: 1.18,
                textAlign: "right",
                display: "flex",
              }}
            >
              {title}
            </div>
            <div
              style={{
                width: 96,
                height: 4,
                background: "#D7AA4B",
                marginTop: 24,
                marginBottom: 22,
                display: "flex",
              }}
            />
            <div
              style={{
                color: "#FFF9EF",
                fontSize: 34,
                lineHeight: 1.3,
                textAlign: "right",
                display: "flex",
              }}
            >
              {isHomepage ? "حلول نمو ذكية للشركات" : "نحوّل الخدمة إلى نظام نمو أوضح"}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              direction: "ltr",
              color: "#D7AA4B",
              fontSize: 20,
              letterSpacing: 1,
            }}
          >
            <span>DEWANK.COM</span>
            <span style={{ color: "#FFF9EF", opacity: 0.68 }}>BRAND · GROWTH · AUTOMATION</span>
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
