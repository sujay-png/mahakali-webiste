export type CatalogCategory = {
  id: number;
  slug: string;
  name: string;
  navLabel: string;
  eyebrow: string;
  description: string;
  heroImage: string;
};

/**
 * Canonical catalog. IDs match WooCommerce product categories.
 * Slugs are the public URL segment: /products/{slug}
 */
export const CATALOG_CATEGORIES: CatalogCategory[] = [
  {
    id: 25,
    slug: "upholstered",
    name: "Upholstered",
    navLabel: "UPHOLSTERED",
    eyebrow: "Curated comfort",
    description:
      "Sofas and sectionals where masterful upholstery meets everyday ease — the pieces that anchor a living room.",
    heroImage:
      "https://mahakalihomefurnitures.com/uploads/category/1775277522_e7ab339c-4222-41f0-a2be-1584e09eb38a.jpeg",
  },
  {
    id: 24,
    slug: "wooden-sofa",
    name: "Wooden Sofa",
    navLabel: "WOODEN SOFA",
    eyebrow: "Solid timber seating",
    description:
      "Frame-forward sofas in teak and hardwood, built for longevity and the warm grain that only wood can give.",
    heroImage:
      "https://mahakalihomefurnitures.com/uploads/category/1775625955_image.jpg",
  },
  {
    id: 23,
    slug: "wooden-cot",
    name: "Wooden Cot",
    navLabel: "WOODEN COT",
    eyebrow: "Rest, crafted",
    description:
      "Bedroom cots and bedsteads in solid wood — quiet silhouettes, honest joinery, and a finish that ages well.",
    heroImage:
      "https://mahakalihomefurnitures.com/uploads/category/1776681424_41ad91c8-1400-4175-b283-c5ff71558fa4.jpeg",
  },
  {
    id: 22,
    slug: "wooden-jhoola",
    name: "Wooden Jhoola",
    navLabel: "WOODEN JOOLA",
    eyebrow: "Swing into stillness",
    description:
      "Traditional wooden jhoolas for verandahs and living rooms — a slow, familiar rhythm for Udupi homes.",
    heroImage:
      "https://mahakalihomefurnitures.com/uploads/category/1776080159_aac22c29-86dd-48f6-9e8c-d8183556ec22.jpeg",
  },
  {
    id: 19,
    slug: "wooden-dining-5-3",
    name: "Wooden Dining 5/3",
    navLabel: "WOODEN DINING 5/3",
    eyebrow: "Table for five",
    description:
      "Dining sets proportioned for everyday family meals — a 5/3 configuration with a solid wooden top.",
    heroImage:
      "https://mahakalihomefurnitures.com/uploads/category/1776336410_5566e1df-5547-4d76-9176-571a76663461.jpeg",
  },
  {
    id: 20,
    slug: "wooden-dining-6-3",
    name: "Wooden Dining 6/3",
    navLabel: "WOODEN DINING 6/3",
    eyebrow: "Gather six",
    description:
      "Generous wooden dining sets for six — the weekend table, festival meals, and conversations that linger.",
    heroImage:
      "https://mahakalihomefurnitures.com/uploads/category/1776250417_f0e56a86-42c2-42c2-af5f-14ab62416bc8.jpeg",
  },
  {
    id: 21,
    slug: "wooden-dining-glass-4-3",
    name: "Wooden Dining Set with Glass Top 4/3",
    navLabel: "WOODEN DINING SET WITH GLASS TOP 4/3",
    eyebrow: "Light on wood",
    description:
      "Four-seater dining with a glass top — the grain shows through, the surface stays easy to live with.",
    heroImage:
      "https://mahakalihomefurnitures.com/uploads/category/1776147783_d3c91ee4-27c6-4fdf-b772-81cd2143ca1d.jpeg",
  },
  {
    id: 18,
    slug: "tepoy",
    name: "Tepoy",
    navLabel: "TEPOY",
    eyebrow: "Centre & side tables",
    description:
      "Tepoys and occasional tables that complete a seating arrangement — compact, sturdy, and finely finished.",
    heroImage:
      "https://mahakalihomefurnitures.com/uploads/category/1776750765_0985A978-2698-4362-985F-C9F6B50B9CFB.png",
  },
  {
    id: 17,
    slug: "cushion-chairs",
    name: "Cushion Chairs",
    navLabel: "CUSHION CHAIRS",
    eyebrow: "A chair of one’s own",
    description:
      "Cushioned lounge and accent chairs — extra seating that still feels like a destination in the room.",
    heroImage:
      "https://mahakalihomefurnitures.com/uploads/category/1778477217_IMG_1713.jpeg",
  },
  {
    id: 16,
    slug: "wooden-furniture",
    name: "Wooden furniture",
    navLabel: "Wooden furniture",
    eyebrow: "The timber atelier",
    description:
      "A wider wooden furniture edit — pieces that sit outside a single collection but share the same workshop DNA.",
    heroImage:
      "https://mahakalihomefurnitures.com/uploads/category/1779278761_6C91D122-7ED2-4BAD-8F6B-ABDEAE1D2686.png",
  },
];

const bySlug = new Map(CATALOG_CATEGORIES.map((c) => [c.slug, c]));
const byId = new Map(CATALOG_CATEGORIES.map((c) => [c.id, c]));

export function getCategoryBySlug(slug: string) {
  return bySlug.get(slug);
}

export function getCategoryById(id: number) {
  return byId.get(id);
}

export function productPath(categorySlug: string, productSlug: string) {
  return `/products/${categorySlug}/${productSlug}`;
}

export function categoryPath(categorySlug: string) {
  return `/products/${categorySlug}`;
}
