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
    navLabel: "Upholstered",
    eyebrow: "Curated comfort",
    description:
      "Sofas and sectionals where masterful upholstery meets everyday ease — the pieces that anchor a living room.",
    heroImage:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 24,
    slug: "wooden-sofa",
    name: "Wooden Sofa",
    navLabel: "Wooden Sofa",
    eyebrow: "Solid timber seating",
    description:
      "Frame-forward sofas in teak and hardwood, built for longevity and the warm grain that only wood can give.",
    heroImage:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 23,
    slug: "wooden-cot",
    name: "Wooden Cot",
    navLabel: "Wooden Cot",
    eyebrow: "Rest, crafted",
    description:
      "Bedroom cots and bedsteads in solid wood — quiet silhouettes, honest joinery, and a finish that ages well.",
    heroImage:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 22,
    slug: "wooden-jhoola",
    name: "Wooden Jhoola",
    navLabel: "Wooden Jhoola",
    eyebrow: "Swing into stillness",
    description:
      "Traditional wooden jhoolas for verandahs and living rooms — a slow, familiar rhythm for Udupi homes.",
    heroImage:
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 19,
    slug: "wooden-dining-5-3",
    name: "Wooden Dining 5/3",
    navLabel: "Dining 5/3",
    eyebrow: "Table for five",
    description:
      "Dining sets proportioned for everyday family meals — a 5/3 configuration with a solid wooden top.",
    heroImage:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 20,
    slug: "wooden-dining-6-3",
    name: "Wooden Dining 6/3",
    navLabel: "Dining 6/3",
    eyebrow: "Gather six",
    description:
      "Generous wooden dining sets for six — the weekend table, festival meals, and conversations that linger.",
    heroImage:
      "https://images.unsplash.com/photo-1617104551722-3b2d51366400?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 21,
    slug: "wooden-dining-glass-4-3",
    name: "Wooden Dining Set with Glass Top 4/3",
    navLabel: "Dining + Glass Top",
    eyebrow: "Light on wood",
    description:
      "Four-seater dining with a glass top — the grain shows through, the surface stays easy to live with.",
    heroImage:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 18,
    slug: "tepoy",
    name: "Tepoy",
    navLabel: "Tepoy",
    eyebrow: "Centre & side tables",
    description:
      "Tepoys and occasional tables that complete a seating arrangement — compact, sturdy, and finely finished.",
    heroImage:
      "https://images.unsplash.com/photo-1554295405-abb8fd54f153?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 17,
    slug: "cushion-chairs",
    name: "Cushion Chairs",
    navLabel: "Cushion Chairs",
    eyebrow: "A chair of one’s own",
    description:
      "Cushioned lounge and accent chairs — extra seating that still feels like a destination in the room.",
    heroImage:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 16,
    slug: "wooden-furniture",
    name: "Wooden furniture",
    navLabel: "Wooden Furniture",
    eyebrow: "The timber atelier",
    description:
      "A wider wooden furniture edit — pieces that sit outside a single collection but share the same workshop DNA.",
    heroImage:
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1600&q=80",
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
