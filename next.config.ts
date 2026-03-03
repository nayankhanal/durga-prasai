import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    '/api/**/*': ['./node_modules/**/*.so.node'],
  },
};

export default nextConfig;
// module.exports = nextConfig;
