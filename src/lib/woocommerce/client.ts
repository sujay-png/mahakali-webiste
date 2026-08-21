import { getWooConfig, hasRestCredentials, isWooConfigured } from "./env";

type Query = Record<string, string | number | boolean | undefined>;

type CacheEntry = { expires: number; payload: unknown };
const memoryCache = new Map<string, CacheEntry>();

function buildQuery(params: Query) {
  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === "") continue;
    search.set(key, String(value));
  }
  return search.toString();
}

async function request<T>(path: string, params: Query = {}): Promise<T> {
  const config = getWooConfig();
  if (!isWooConfigured()) {
    throw new Error("WooCommerce is not configured. Add WOOCOMMERCE_URL to .env");
  }

  const useRest = hasRestCredentials();
  const apiBase = useRest
    ? `${config.url}/wp-json/wc/v3`
    : `${config.url}/wp-json/wc/store/v1`;

  const query = { ...params };
  if (useRest) {
    query.consumer_key = config.consumerKey;
    query.consumer_secret = config.consumerSecret;
  }

  const url = `${apiBase}${path}?${buildQuery(query)}`;
  const cacheKey = url.replace(config.consumerKey, "ck").replace(config.consumerSecret, "cs");

  if (config.cacheSeconds > 0) {
    const hit = memoryCache.get(cacheKey);
    if (hit && hit.expires > Date.now()) return hit.payload as T;
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), config.timeoutMs);

  try {
    const response = await fetch(url, {
      headers: { Accept: "application/json" },
      signal: controller.signal,
    });

    if (!response.ok) {
      const body = await response.text();
      throw new Error(`WooCommerce ${response.status}: ${body.slice(0, 200)}`);
    }

    const payload = (await response.json()) as T;
    if (config.cacheSeconds > 0) {
      memoryCache.set(cacheKey, {
        expires: Date.now() + config.cacheSeconds * 1000,
        payload,
      });
    }
    return payload;
  } finally {
    clearTimeout(timer);
  }
}

export async function fetchRestProducts(params: Query = {}) {
  return request<WooRestProduct[]>("/products", {
    status: "publish",
    per_page: 100,
    ...params,
  });
}

export async function fetchRestProductBySlug(slug: string) {
  const products = await fetchRestProducts({ slug, per_page: 1 });
  return products[0] ?? null;
}

export async function fetchRestProductById(id: number) {
  try {
    return await request<WooRestProduct>(`/products/${id}`);
  } catch {
    return null;
  }
}

export async function fetchAllCategoryProducts(categoryId: number) {
  const perPage = 100;
  const first = await fetchRestProducts({
    category: categoryId,
    per_page: perPage,
    page: 1,
  });
  return first;
}

export async function fetchStoreProducts(params: Query = {}) {
  return request<WooStoreProduct[]>("/products", {
    per_page: 100,
    ...params,
  });
}

export async function fetchRestCategories() {
  const ids = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25].join(",");
  return request<{ id: number; count: number; name: string; slug: string }[]>(
    "/products/categories",
    { include: ids, per_page: 100 },
  );
}

export type WooRestProduct = {
  id: number;
  name: string;
  slug: string;
  sku: string;
  price: string;
  regular_price: string;
  sale_price: string;
  on_sale: boolean;
  description: string;
  short_description: string;
  average_rating: string;
  rating_count: number;
  stock_status: string;
  related_ids: number[];
  images: { src: string; alt: string }[];
  categories: { id: number; name: string; slug: string }[];
  attributes: { name: string; options: string[] }[];
};

export type WooStoreProduct = {
  id: number;
  name: string;
  slug: string;
  sku?: string;
  description?: string;
  short_description?: string;
  prices?: {
    price?: string;
    regular_price?: string;
    sale_price?: string;
    currency_minor_unit?: number;
  };
  images?: { src: string; alt?: string }[];
  categories?: { id: number; name: string; slug: string }[];
  average_rating?: string;
  review_count?: number;
  is_in_stock?: boolean;
};
