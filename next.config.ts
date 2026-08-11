import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Pin the workspace root to this project so a lockfile in a parent
    // directory doesn't get picked up as the root.
    root: path.join(__dirname),
  },
};

export default nextConfig;
