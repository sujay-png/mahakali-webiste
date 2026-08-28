import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://mahakalihomefurnitures.com",

  output: "server",

  adapter: vercel(),

  integrations: [react()],

  compressHTML: true,

  build: {
    inlineStylesheets: "auto",
  },
});