export type WooImage = {
  src: string;
  alt: string;
};

export type ProductCardModel = {
  id: number;
  name: string;
  slug: string;
  link: string;
  price: string;
  rawPrice: number;
  regularPrice?: string;
  onSale: boolean;
  stars: number;
  image: string;
  category: string;
  categorySlug: string;
  stockStatus: string;
};

export type ProductDetailModel = ProductCardModel & {
  sku: string;
  descriptionHtml: string;
  shortDescriptionHtml: string;
  images: WooImage[];
  attributes: { label: string; value: string }[];
  relatedIds: number[];
  ratingCount: number;
  discountLabel?: string;
  discountText?: string;
};

export type HomeShelfItem = {
  name: string;
  rating: number;
  price: string;
  oldPrice?: string;
  image: string;
  href: string;
};
