import type { NextConfig } from "next";
import { config as loadEnv } from "dotenv";
import { existsSync } from "fs";
import { nodeLogger } from "./src/services/logger/node.logger";

const mode =
  process.env.NODE_ENV === "production" ? "production" : "development";

const envFilePath = `./env/.env.${mode}`;

if (existsSync(envFilePath)) {
  loadEnv({ path: envFilePath });
  nodeLogger.info(`🔵 Loaded env file: ${envFilePath}`);
} else {
  nodeLogger.warn(`🔴 Env file not found: ${envFilePath}`);
}

const nextConfig: NextConfig = {
  reactStrictMode: true,

  async headers() {
    return [
      {
        source: "/service-worker/service-worker.js",
        headers: [
          {
            key: "Service-Worker-Allowed",
            value: "/",
          },
        ],
      },
    ];
  },

  // Optional: Expose NEXT_PUBLIC_* values to the client
  env: {
    // All NEXT_PUBLIC_ vars will automatically pass through
  },
  reactCompiler: true,
};

export default nextConfig;
