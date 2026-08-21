function read(name: string, fallback = "") {
  const value = import.meta.env[name];
  return typeof value === "string" ? value.trim() : fallback;
}

function readNumber(name: string, fallback: number) {
  const raw = read(name);
  const parsed = Number(raw);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : fallback;
}

export function getWooConfig() {
  const url = read("WOOCOMMERCE_URL") || read("PUBLIC_WOOCOMMERCE_URL");
  return {
    url: url.replace(/\/$/, ""),
    consumerKey: read("WOOCOMMERCE_CONSUMER_KEY"),
    consumerSecret: read("WOOCOMMERCE_CONSUMER_SECRET"),
    cacheSeconds: readNumber("WOOCOMMERCE_CACHE_SECONDS", 120),
    timeoutMs: readNumber("WOOCOMMERCE_TIMEOUT_MS", 15000),
    siteUrl: read("PUBLIC_SITE_URL", "https://mahakalihomefurnitures.com"),
    whatsapp: read("PUBLIC_WHATSAPP_NUMBER", "919948642754"),
  };
}

export function isWooConfigured() {
  const { url, consumerKey, consumerSecret } = getWooConfig();
  if (!url || url.includes("YOUR-STORE")) return false;
  return Boolean(consumerKey && consumerSecret) || Boolean(url);
}

export function hasRestCredentials() {
  const { consumerKey, consumerSecret } = getWooConfig();
  return (
    consumerKey.startsWith("ck_") &&
    consumerSecret.startsWith("cs_") &&
    !consumerKey.includes("xxxxxxxx")
  );
}
