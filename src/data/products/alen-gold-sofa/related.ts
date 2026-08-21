export interface RelatedProduct {
  title: string;
  price: string;
  image: string;
  stockStatus: string;
}

export const relatedProducts: RelatedProduct[] = [
  {
    title: "3 Seater Bed Cum Sofa",
    price: "₹42000.00",
    image: "/images/products/related-1.jpg",
    stockStatus: "Out of Stock"
  },
  {
    title: "Exterior Sofa Set 2",
    price: "₹62000.00",
    image: "/images/products/related-2.jpg",
    stockStatus: "Out of Stock"
  },
  {
    title: "Exterior Sofa Set",
    price: "₹57000.00",
    image: "/images/products/related-3.jpg",
    stockStatus: "Out of Stock"
  }
];
