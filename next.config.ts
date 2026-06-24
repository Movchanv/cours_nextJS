import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  pageExtensions: ["mdx", "tsx", "ts"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.prismic.io",
      },
    ],
  },
  // async redirects() {
    // return [
      // {
        // source: "/",
        // destination: "/websites",
        // permanent: true,
      // },
    // ];
  // }
};
// module.exports = nextConfig;
const withMDX = createMDX();
export default withMDX(nextConfig);
