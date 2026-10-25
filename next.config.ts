import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  // Do not advertise the framework.
  poweredByHeader: false,
  // Shared hosts can expose many CPUs while enforcing a much smaller process limit.
  experimental: process.env.VERCEL === "1" ? {} : { cpus: 2 },
  async redirects() {
    return [
      // Legacy /portfolio (404, still shown in Google at ~position 3) maps to the current case-study index.
      {
        source: "/portfolio",
        has: [{ type: "host", value: "www.dewank.com" }],
        destination: "https://dewank.com/work",
        permanent: true,
      },
      {
        source: "/portfolio",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.dewank.com" }],
        destination: "https://dewank.com/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        source: "/fonts/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=2592000" }],
      },
      {
        source: "/brand/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=2592000" }],
      },
      // The homepage's below-fold project artwork changes infrequently.
      // Browsers can reuse it on repeat visits; leave HTML and API responses uncached.
      {
        source: "/work/:path*.:ext(webp|svg|png|jpg|jpeg|avif)",
        headers: [{ key: "Cache-Control", value: "public, max-age=2592000" }],
      },
      {
        source: "/en/work/:path*.:ext(webp|svg|png|jpg|jpeg|avif)",
        headers: [{ key: "Cache-Control", value: "public, max-age=2592000" }],
      },
    ];
  },
};

export default nextConfig;
