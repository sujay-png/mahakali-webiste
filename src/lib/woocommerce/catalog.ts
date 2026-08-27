import { CATALOG_CATEGORIES, getCategoryBySlug, type CatalogCategory } from "./categories";
import {
  fetchRestCategories,
  fetchRestProductById,
  fetchRestProductBySlug,
  fetchRestProducts,
  fetchStoreProducts,
  type WooRestProduct,
  type WooStoreProduct,
} from "./client";
import { hasRestCredentials, isWooConfigured } from "./env";
import { mapRestProduct, mapStoreProduct, toCard, toShelfItem } from "./mappers";
import type { HomeShelfItem, ProductCardModel, ProductDetailModel } from "./types";

async function loadMappedProducts(params: Record<string, string | number | boolean> = {}) {
  if (!isWooConfigured()) return [] as ProductDetailModel[];

  try {
    if (hasRestCredentials()) {
      const products = await fetchRestProducts(params);
      return products.map(mapRestProduct);
    }
    const products = await fetchStoreProducts(params);
    return products.map(mapStoreProduct);
  } catch (error) {
    console.error("[woocommerce]", error);
    return [] as ProductDetailModel[];
  }
}

export async function getProductsByCategory(
  category: CatalogCategory,
): Promise<ProductCardModel[]> {
  const products = await loadMappedProducts({ category: category.id, per_page: 100 });
  return products.map(toCard);
}

export async function getAllCatalogProducts(): Promise<ProductCardModel[]> {
  const batches = await Promise.all(
    CATALOG_CATEGORIES.map((category) => getProductsByCategory(category)),
  );
  const seen = new Set<number>();
  return batches.flat().filter((product) => {
    if (seen.has(product.id)) return false;
    seen.add(product.id);
    return true;
  });
}

export async function getProductBySlug(
  slug: string,
): Promise<ProductDetailModel | null> {
  if (!isWooConfigured()) return null;

  try {
    if (hasRestCredentials()) {
      const product = await fetchRestProductBySlug(slug);
      return product ? mapRestProduct(product) : null;
    }
    const products = await fetchStoreProducts({ slug });
    const match = products.find((item: WooStoreProduct) => item.slug === slug) ?? products[0];
    return match ? mapStoreProduct(match) : null;
  } catch (error) {
    console.error("[woocommerce] product", error);
    return null;
  }
}

export async function getRelatedProducts(
  product: ProductDetailModel,
  limit = 4,
): Promise<ProductCardModel[]> {
  if (hasRestCredentials() && product.relatedIds.length) {
    const related = await Promise.all(
      product.relatedIds.slice(0, limit).map((id) => fetchRestProductById(id)),
    );
    return related
      .filter((item): item is WooRestProduct => Boolean(item))
      .map(mapRestProduct)
      .map(toCard);
  }

  const category = getCategoryBySlug(product.categorySlug);
  if (!category) return [];
  const siblings = await getProductsByCategory(category);
  return siblings.filter((item) => item.id !== product.id).slice(0, limit);
}

export async function getHomeShelves(): Promise<{
  onSale: HomeShelfItem[];
  bestSeller: HomeShelfItem[];
  topRated: HomeShelfItem[];
}> {
  const [onSale, featured, latest] = await Promise.all([
    loadMappedProducts({ on_sale: true, per_page: 6, orderby: "date" }),
    loadMappedProducts({ featured: true, per_page: 6 }),
    loadMappedProducts({ per_page: 8, orderby: "popularity" }),
  ]);

  const fallback = latest.length ? latest : onSale.concat(featured);
  return {
    onSale: (onSale.length ? onSale : fallback).slice(0, 3).map(toShelfItem),
    bestSeller: (featured.length ? featured : fallback).slice(0, 3).map(toShelfItem),
    topRated: (latest.length ? latest : fallback).slice(0, 3).map(toShelfItem),
  };
}

export async function getCategoryCounts() {
  if (!isWooConfigured()) {
    return CATALOG_CATEGORIES.map((category) => ({ ...category, count: 0 }));
  }

  try {
    if (hasRestCredentials()) {
      const remote = await fetchRestCategories();
      const byId = new Map(remote.map((item) => [item.id, item.count]));
      return CATALOG_CATEGORIES.map((category) => ({
        ...category,
        count: byId.get(category.id) ?? 0,
      }));
    }
  } catch (error) {
    console.error("[woocommerce] counts", error);
  }

  const counts = await Promise.all(
    CATALOG_CATEGORIES.map(async (category) => {
      const products = await getProductsByCategory(category);
      return { ...category, count: products.length };
    }),
  );
  return counts;
}
