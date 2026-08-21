import {
  CATALOG_CATEGORIES,
  getCategoryById,
} from "./categories";
import type { WooRestProduct, WooStoreProduct } from "./client";
import {
  discountPercent,
  formatInr,
  parsePrice,
  resolveCategory,
  stockLabel,
  stripHtml,
  toProductHref,
} from "./format";
import type { HomeShelfItem, ProductCardModel, ProductDetailModel } from "./types";

function minorToMajor(value: string | undefined, minorUnit = 2) {
  const raw = Number(value ?? 0);
  if (!Number.isFinite(raw)) return 0;
  return raw / 10 ** minorUnit;
}

export function mapRestProduct(product: WooRestProduct): ProductDetailModel {
  const category = resolveCategory(product.categories);
  const sale = parsePrice(product.sale_price || product.price);
  const regular = parsePrice(product.regular_price || product.price);
  const current = sale || regular;
  const off = discountPercent(regular, sale);
  const images = (product.images ?? []).map((img) => ({
    src: img.src,
    alt: img.alt || product.name,
  }));

  return {
    id: product.id,
    name: product.name,
    slug: product.slug,
    link: toProductHref(product.slug, product.categories),
    price: formatInr(current),
    rawPrice: current,
    regularPrice: off ? formatInr(regular) : undefined,
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
    attributes: (product.attributes ?? [])
      .filter((attr) => attr.options?.length)
      .map((attr) => ({
        label: attr.name,
        value: attr.options.join(", "),
      })),
    relatedIds: product.related_ids ?? [],
    ratingCount: product.rating_count ?? 0,
    discountLabel: off ? "Mahakali showroom price" : "Showroom price",
    discountText: off ? `${off}% Off` : undefined,
  };
}

export function mapStoreProduct(product: WooStoreProduct): ProductDetailModel {
  const category = resolveCategory(product.categories);
  const unit = product.prices?.currency_minor_unit ?? 2;
  const sale = minorToMajor(product.prices?.sale_price || product.prices?.price, unit);
  const regular = minorToMajor(product.prices?.regular_price || product.prices?.price, unit);
  const current = sale || regular;
  const off = discountPercent(regular, sale);
  const images = (product.images ?? []).map((img) => ({
    src: img.src,
    alt: img.alt || product.name,
  }));

  return {
    id: product.id,
    name: product.name,
    slug: product.slug,
    link: toProductHref(product.slug, product.categories),
    price: formatInr(current),
    rawPrice: current,
    regularPrice: off ? formatInr(regular) : undefined,
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
    discountText: off ? `${off}% Off` : undefined,
  };
}

export function toCard(product: ProductDetailModel): ProductCardModel {
  const {
    id, name, slug, link, price, rawPrice, onSale, stars, image, category, categorySlug, stockStatus, regularPrice,
  } = product;
  return { id, name, slug, link, price, rawPrice, onSale, stars, image, category, categorySlug, stockStatus, regularPrice };
}

export function toShelfItem(product: ProductDetailModel): HomeShelfItem {
  return {
    name: product.name,
    rating: product.stars,
    price: product.price,
    oldPrice: product.regularPrice,
    image: product.image,
    href: product.link,
  };
}

export function featuresFromProduct(product: ProductDetailModel) {
  const fromHtml = stripHtml(product.shortDescriptionHtml)
    .split(/[.•\n]/)
    .map((part) => part.trim())
    .filter((part) => part.length > 12)
    .slice(0, 5);

  if (fromHtml.length) return fromHtml;

  return [
    "Hand-finished in our Udupi workshop",
    "Showroom viewing available at all three branches",
    "Home delivery and installation on request",
    "Crafted for daily use with premium materials",
  ];
}

export function fallbackCategoryForUnknown(id?: number) {
  return (id && getCategoryById(id)) || CATALOG_CATEGORIES[0];
}
