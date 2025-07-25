/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images-assets.nasa.gov",
        port: "",
        pathname: "/**",
      },
    ],
  },

  // For reducing build times and type errors.)
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },

  // Only disable for development to speed up iteration
  // typescript: {
  //   ignoreBuildErrors: process.env.NODE_ENV !== "production",
  // },
  // eslint: {
  //   ignoreDuringBuilds: process.env.NODE_ENV !== "production",
  // },
};

export default config;
