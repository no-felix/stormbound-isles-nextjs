import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: process.env.NODE_ENV === "production" ? "/stormbound-isles-nextjs" : "",
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "placehold.co", pathname: "/**" },
    ],
  },
};

export default nextConfig;
