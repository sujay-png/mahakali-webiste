import { b as getCategoryById, C as CATALOG_CATEGORIES, p as productPath, g as getCategoryBySlug } from './Layout_DoOydEG6.mjs';

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "PUBLIC_SITE_URL": "https://mahakalihomefurnitures.com", "PUBLIC_WHATSAPP_NUMBER": "919948642754", "PUBLIC_WOOCOMMERCE_URL": "", "SITE": "https://mahakalihomefurnitures.com", "SSR": true};
function read(name, fallback = "") {
  const value = Object.assign(__vite_import_meta_env__, { WOOCOMMERCE_URL: "https://mahakali.aksharadigital.in", WOOCOMMERCE_CONSUMER_KEY: "ck_a826d0c8f8628c411333e7e86789189fff70df3b", WOOCOMMERCE_CONSUMER_SECRET: "cs_e99307260116536ce6f8a4e4af7c5b2f6c1bc5fc", WOOCOMMERCE_CACHE_SECONDS: "120", WOOCOMMERCE_TIMEOUT_MS: "15000", _: process.env._ })[name];
  return typeof value === "string" ? value.trim() : fallback;
}
function readNumber(name, fallback) {
  const raw = read(name);
  const parsed = Number(raw);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : fallback;
}
function getWooConfig() {
  const url = read("WOOCOMMERCE_URL") || read("PUBLIC_WOOCOMMERCE_URL");
  return {
    url: url.replace(/\/$/, ""),
    consumerKey: read("WOOCOMMERCE_CONSUMER_KEY"),
    consumerSecret: read("WOOCOMMERCE_CONSUMER_SECRET"),
    cacheSeconds: readNumber("WOOCOMMERCE_CACHE_SECONDS", 120),
    timeoutMs: readNumber("WOOCOMMERCE_TIMEOUT_MS", 15e3),
    siteUrl: read("PUBLIC_SITE_URL", "https://mahakalihomefurnitures.com"),
    whatsapp: read("PUBLIC_WHATSAPP_NUMBER", "919948642754")
  };
}
function isWooConfigured() {
  const { url, consumerKey, consumerSecret } = getWooConfig();
  if (!url || url.includes("YOUR-STORE")) return false;
  return Boolean(consumerKey && consumerSecret) || Boolean(url);
}
function hasRestCredentials() {
  const { consumerKey, consumerSecret } = getWooConfig();
  return consumerKey.startsWith("ck_") && consumerSecret.startsWith("cs_") && !consumerKey.includes("xxxxxxxx");
}

const memoryCache = /* @__PURE__ */ new Map();
function buildQuery(params) {
  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value === void 0 || value === "") continue;
    search.set(key, String(value));
  }
  return search.toString();
}
async function request(path, params = {}) {
  const config = getWooConfig();
  if (!isWooConfigured()) {
    throw new Error("WooCommerce is not configured. Add WOOCOMMERCE_URL to .env");
  }
  const useRest = hasRestCredentials();
  const apiBase = useRest ? `${config.url}/wp-json/wc/v3` : `${config.url}/wp-json/wc/store/v1`;
  const query = { ...params };
  if (useRest) {
    query.consumer_key = config.consumerKey;
    query.consumer_secret = config.consumerSecret;
  }
  const url = `${apiBase}${path}?${buildQuery(query)}`;
  const cacheKey = url.replace(config.consumerKey, "ck").replace(config.consumerSecret, "cs");
  if (config.cacheSeconds > 0) {
    const hit = memoryCache.get(cacheKey);
    if (hit && hit.expires > Date.now()) return hit.payload;
  }
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), config.timeoutMs);
  try {
    const response = await fetch(url, {
      headers: { Accept: "application/json" },
      signal: controller.signal
    });
    if (!response.ok) {
      const body = await response.text();
      throw new Error(`WooCommerce ${response.status}: ${body.slice(0, 200)}`);
    }
    const payload = await response.json();
    if (config.cacheSeconds > 0) {
      memoryCache.set(cacheKey, {
        expires: Date.now() + config.cacheSeconds * 1e3,
        payload
      });
    }
    return payload;
  } finally {
    clearTimeout(timer);
  }
}
async function fetchRestProducts(params = {}) {
  return request("/products", {
    status: "publish",
    per_page: 100,
    ...params
  });
}
async function fetchRestProductBySlug(slug) {
  const products = await fetchRestProducts({ slug, per_page: 1 });
  return products[0] ?? null;
}
async function fetchRestProductById(id) {
  try {
    return await request(`/products/${id}`);
  } catch {
    return null;
  }
}
async function fetchStoreProducts(params = {}) {
  return request("/products", {
    per_page: 100,
    ...params
  });
}
async function fetchRestCategories() {
  const ids = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25].join(",");
  return request(
    "/products/categories",
    { include: ids, per_page: 100 }
  );
}

function formatInr(value) {
  const amount = Number(value ?? 0);
  if (!Number.isFinite(amount) || amount <= 0) return "Price on request";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(amount);
}
function parsePrice(value) {
  const amount = Number(value ?? 0);
  return Number.isFinite(amount) ? amount : 0;
}
function discountPercent(regular, sale) {
  if (!regular || !sale || sale >= regular) return 0;
  return Math.round((regular - sale) / regular * 100);
}
function stripHtml(html) {
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}
function resolveCategory(wooCategories) {
  const match = wooCategories?.map((c) => getCategoryById(c.id)).find(Boolean);
  return match ?? CATALOG_CATEGORIES[0];
}
function toProductHref(slug, wooCategories) {
  const category = resolveCategory(wooCategories);
  return productPath(category.slug, slug);
}
function stockLabel(status) {
  if (status === "outofstock") return "Made to order / visit showroom";
  if (status === "onbackorder") return "Available on order";
  return "In showroom & available";
}

function minorToMajor(value, minorUnit = 2) {
  const raw = Number(value ?? 0);
  if (!Number.isFinite(raw)) return 0;
  return raw / 10 ** minorUnit;
}
function mapRestProduct(product) {
  const category = resolveCategory(product.categories);
  const sale = parsePrice(product.sale_price || product.price);
  const regular = parsePrice(product.regular_price || product.price);
  const current = sale || regular;
  const off = discountPercent(regular, sale);
  const images = (product.images ?? []).map((img) => ({
    src: img.src,
    alt: img.alt || product.name
  }));
  return {
    id: product.id,
    name: product.name,
    slug: product.slug,
    link: toProductHref(product.slug, product.categories),
    price: formatInr(current),
    rawPrice: current,
    regularPrice: off ? formatInr(regular) : void 0,
    onSale: product.on_sale && off > 0,
    stars: Number(product.average_rating) || 4.5,
    image: images[0]?.src ?? category.heroImage,
    category: category.name,
    categorySlug: category.slug,
    stockStatus: stockLabel(product.stock_status),
    sku: product.sku || `MK-${product.id}`,
    descriptionHtml: product.description || product.short_description,
    shortDescriptionHtml: product.short_description,
    images: images.length ? images : [{ src: category.heroImage, alt: product.name }],
    attributes: (product.attributes ?? []).filter((attr) => attr.options?.length).map((attr) => ({
      label: attr.name,
      value: attr.options.join(", ")
    })),
    relatedIds: product.related_ids ?? [],
    ratingCount: product.rating_count ?? 0,
    discountLabel: off ? "Mahakali showroom price" : "Showroom price",
    discountText: off ? `${off}% Off` : void 0
  };
}
function mapStoreProduct(product) {
  const category = resolveCategory(product.categories);
  const unit = product.prices?.currency_minor_unit ?? 2;
  const sale = minorToMajor(product.prices?.sale_price || product.prices?.price, unit);
  const regular = minorToMajor(product.prices?.regular_price || product.prices?.price, unit);
  const current = sale || regular;
  const off = discountPercent(regular, sale);
  const images = (product.images ?? []).map((img) => ({
    src: img.src,
    alt: img.alt || product.name
  }));
  return {
    id: product.id,
    name: product.name,
    slug: product.slug,
    link: toProductHref(product.slug, product.categories),
    price: formatInr(current),
    rawPrice: current,
    regularPrice: off ? formatInr(regular) : void 0,
    onSale: off > 0,
    stars: Number(product.average_rating) || 4.5,
    image: images[0]?.src ?? category.heroImage,
    category: category.name,
    categorySlug: category.slug,
    stockStatus: product.is_in_stock === false ? stockLabel("outofstock") : stockLabel("instock"),
    sku: product.sku || `MK-${product.id}`,
    descriptionHtml: product.description || product.short_description || "",
    shortDescriptionHtml: product.short_description || "",
    images: images.length ? images : [{ src: category.heroImage, alt: product.name }],
    attributes: [],
    relatedIds: [],
    ratingCount: product.review_count ?? 0,
    discountLabel: off ? "Mahakali showroom price" : "Showroom price",
    discountText: off ? `${off}% Off` : void 0
  };
}
function toCard(product) {
  const {
    id,
    name,
    slug,
    link,
    price,
    rawPrice,
    onSale,
    stars,
    image,
    category,
    categorySlug,
    stockStatus,
    regularPrice
  } = product;
  return { id, name, slug, link, price, rawPrice, onSale, stars, image, category, categorySlug, stockStatus, regularPrice };
}
function toShelfItem(product) {
  return {
    name: product.name,
    rating: product.stars,
    price: product.price,
    oldPrice: product.regularPrice,
    image: product.image,
    href: product.link
  };
}
function featuresFromProduct(product) {
  const fromHtml = stripHtml(product.shortDescriptionHtml).split(/[.•\n]/).map((part) => part.trim()).filter((part) => part.length > 12).slice(0, 5);
  if (fromHtml.length) return fromHtml;
  return [
    "Hand-finished in our Udupi workshop",
    "Showroom viewing available at all three branches",
    "Home delivery and installation on request",
    "Crafted for daily use with premium materials"
  ];
}

async function loadMappedProducts(params = {}) {
  if (!isWooConfigured()) return [];
  try {
    if (hasRestCredentials()) {
      const products2 = await fetchRestProducts(params);
      return products2.map(mapRestProduct);
    }
    const products = await fetchStoreProducts(params);
    return products.map(mapStoreProduct);
  } catch (error) {
    console.error("[woocommerce]", error);
    return [];
  }
}
async function getProductsByCategory(category) {
  const products = await loadMappedProducts({ category: category.id, per_page: 100 });
  return products.map(toCard);
}
async function getProductBySlug(slug) {
  if (!isWooConfigured()) return null;
  try {
    if (hasRestCredentials()) {
      const product = await fetchRestProductBySlug(slug);
      return product ? mapRestProduct(product) : null;
    }
    const products = await fetchStoreProducts({ slug });
    const match = products.find((item) => item.slug === slug) ?? products[0];
    return match ? mapStoreProduct(match) : null;
  } catch (error) {
    console.error("[woocommerce] product", error);
    return null;
  }
}
async function getRelatedProducts(product, limit = 4) {
  if (hasRestCredentials() && product.relatedIds.length) {
    const related = await Promise.all(
      product.relatedIds.slice(0, limit).map((id) => fetchRestProductById(id))
    );
    return related.filter((item) => Boolean(item)).map(mapRestProduct).map(toCard);
  }
  const category = getCategoryBySlug(product.categorySlug);
  if (!category) return [];
  const siblings = await getProductsByCategory(category);
  return siblings.filter((item) => item.id !== product.id).slice(0, limit);
}
async function getHomeShelves() {
  const [onSale, featured, latest] = await Promise.all([
    loadMappedProducts({ on_sale: true, per_page: 6, orderby: "date" }),
    loadMappedProducts({ featured: true, per_page: 6 }),
    loadMappedProducts({ per_page: 8, orderby: "popularity" })
  ]);
  const fallback = latest.length ? latest : onSale.concat(featured);
  return {
    onSale: (onSale.length ? onSale : fallback).slice(0, 3).map(toShelfItem),
    bestSeller: (featured.length ? featured : fallback).slice(0, 3).map(toShelfItem),
    topRated: (latest.length ? latest : fallback).slice(0, 3).map(toShelfItem)
  };
}
async function getCategoryCounts() {
  if (!isWooConfigured()) {
    return CATALOG_CATEGORIES.map((category) => ({ ...category, count: 0 }));
  }
  try {
    if (hasRestCredentials()) {
      const remote = await fetchRestCategories();
      const byId = new Map(remote.map((item) => [item.id, item.count]));
      return CATALOG_CATEGORIES.map((category) => ({
        ...category,
        count: byId.get(category.id) ?? 0
      }));
    }
  } catch (error) {
    console.error("[woocommerce] counts", error);
  }
  const counts = await Promise.all(
    CATALOG_CATEGORIES.map(async (category) => {
      const products = await getProductsByCategory(category);
      return { ...category, count: products.length };
    })
  );
  return counts;
}

export { getProductsByCategory as a, getWooConfig as b, getProductBySlug as c, getRelatedProducts as d, getHomeShelves as e, featuresFromProduct as f, getCategoryCounts as g, stripHtml as s };
