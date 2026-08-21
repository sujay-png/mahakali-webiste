export interface BreadcrumbItem {
  label: string;
  link?: string;
}

export const productBreadcrumbs: BreadcrumbItem[] = [
  { label: "Home", link: "/" },
  { label: "Collections", link: "/products/upholstered" },
  { label: "The Alen Gold Collection" }
];
