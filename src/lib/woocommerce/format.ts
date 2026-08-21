import {
  CATALOG_CATEGORIES,
  getCategoryById,
  productPath,
  type CatalogCategory,
} from "./categories";

export function formatInr(value: string | number | null | undefined) {
  const amount = Number(value ?? 0);
  if (!Number.isFinite(amount) || amount <= 0) return "Price on request";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function parsePrice(value: string | number | null | undefined) {
  const amount = Number(value ?? 0);
  return Number.isFinite(amount) ? amount : 0;
}

export function discountPercent(regular: number, sale: number) {
  if (!regular || !sale || sale >= regular) return 0;
  return Math.round(((regular - sale) / regular) * 100);
}

export function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

export function resolveCategory(
  wooCategories: { id: number; slug?: string; name?: string }[] | undefined,
): CatalogCategory {
  const match = wooCategories
    ?.map((c) => getCategoryById(c.id))
    .find(Boolean);
  return match ?? CATALOG_CATEGORIES[0];
}

export function toProductHref(
  slug: string,
  wooCategories?: { id: number }[],
) {
  const category = resolveCategory(wooCategories);
  return productPath(category.slug, slug);
}

export function stockLabel(status?: string) {
  if (status === "outofstock") return "Made to order / visit showroom";
  if (status === "onbackorder") return "Available on order";
  return "In showroom & available";
}
