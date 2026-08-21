export type GalleryItem = {
  name: string;
  image: string;
  category?: string;
  action?: string;
  colSpan?: number;
};

export type GalleryCategory = {
  title: string;
  items: GalleryItem[];
};

export const galleryCategories: GalleryCategory[] = [
  {
    title: "UPHOLSTERED",
    items: [
      { name: "ALEN GOLD SOFA", category: "Upholstered", image: "/images/gallery/gallery-upholstered-1.jpg" },
      { name: "POLARIS", category: "Upholstered", image: "/images/gallery/gallery-upholstered-2.jpg" },
      { name: "MERCEDES", category: "Upholstered", image: "/images/gallery/gallery-upholstered-3.jpg" }
    ]
  },
  {
    title: "WOODEN SOFA",
    items: [
      { name: "WOODEN SOFA SINGAPURI", category: "Wooden Sofa", image: "/images/gallery/gallery-wooden-1.jpg" },
      { name: "WOODEN L CORNER KERALA MODEL", category: "Wooden Sofa", image: "/images/gallery/gallery-wooden-2.jpg" },
      { name: "WOODEN SOFA CROSS PATTI", category: "Wooden Sofa", image: "/images/gallery/gallery-wooden-3.jpg" },
      { name: "WOODEN SOFA MAHARAJA", category: "Wooden Sofa", image: "/images/gallery/gallery-wooden-4.jpg" },
      { name: "WOODEN L CORNER GULLI SOFA", category: "Wooden Sofa", image: "/images/gallery/gallery-wooden-5.jpg" },
      { name: "CUSHION CHAIR", category: "Wooden Sofa", image: "/images/gallery/gallery-wooden-6.jpg" }
    ]
  },
  {
    title: "OTHER CATEGORIES",
    items: [
      { name: "WOODEN COT", action: "Explore Category", colSpan: 1, image: "/images/gallery/gallery-wooden-2.jpg" },
      { name: "WOODEN JOOLA", action: "Explore Category", colSpan: 1, image: "/images/gallery/gallery-cta-1.jpg" },
      { name: "TEPOY", action: "Explore Category", colSpan: 1, image: "/images/gallery/gallery-cta-2.jpg" },
      { name: "CUSHION CHAIRS", action: "Explore Category", colSpan: 1, image: "/images/gallery/gallery-wooden-6.jpg" },
      { name: "Wooden furniture", action: "View Full Collection", colSpan: 4, image: "/images/gallery/gallery-wooden-1.jpg" }
    ]
  }
];
