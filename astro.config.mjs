import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  site: "https://mahakalihomefurnitures.com",
  output: "hybrid",
  adapter: vercel(),
  integrations: [react()],
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
});
