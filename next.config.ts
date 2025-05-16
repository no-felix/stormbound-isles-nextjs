import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/stormbound-isles-nextjs",
  assetPrefix: "/stormbound-isles-nextjs/",
  trailingSlash: true,
};

export default nextConfig;
