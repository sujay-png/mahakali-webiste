/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL?: string;
  readonly PUBLIC_WHATSAPP_NUMBER?: string;
  readonly PUBLIC_WOOCOMMERCE_URL?: string;
  readonly WOOCOMMERCE_URL?: string;
  readonly WOOCOMMERCE_CONSUMER_KEY?: string;
  readonly WOOCOMMERCE_CONSUMER_SECRET?: string;
  readonly WOOCOMMERCE_CACHE_SECONDS?: string;
  readonly WOOCOMMERCE_TIMEOUT_MS?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  __mahakaliHeaderScroll?: boolean;
  closeLightbox?: () => void;
}
