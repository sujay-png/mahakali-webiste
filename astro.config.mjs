import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import node from "@astrojs/node";

export default defineConfig({
  site: "https://mahakalihomefurnitures.com",
  output: "hybrid",
  adapter: node({ mode: "standalone" }),
  integrations: [react()],
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
  server: {
    host: true,
    port: Number(process.env.PORT) || 4321,
  },
});
