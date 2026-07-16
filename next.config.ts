import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.dewank.com",
          },
        ],
        destination: "https://dewank.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
