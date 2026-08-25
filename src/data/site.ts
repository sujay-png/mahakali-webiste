import { CATALOG_CATEGORIES, categoryPath } from "../lib/woocommerce/categories";

export const siteInfo = {
  name: 'Mahakali',
  tagline: 'Home Furnitures & Interiors',
  legalName: 'Mahakali Home Furnitures & Interiors',
  url: 'https://mahakalihomefurnitures.com',
  description:
    "Udupi's most trusted name for premium sofas, mattresses, cots and curated curtains. 28+ years of handcrafted comfort, timeless style and honest pricing.",
  email: 'mahakali@gmail.com',
  phones: ['0824-4123456', '99486 42754', '098602 84996'],
  founded: 1997,
  yearsOfTrust: 28
};

export const topBar = {
  email: 'mahakali@gmail.com',
  phone: '091486 43754',
  needHelp: 'Need Help?',
  social: [
    { label: 'Facebook', href: 'https://www.facebook.com/mahakalisofas/', icon: 'facebook' },
    { label: 'Instagram', href: 'https://www.instagram.com/mahakalifurnishings/', icon: 'instagram' },
  ]
};

export const mainNav = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  {
    label: 'Products',
    href: '/products',
    children: CATALOG_CATEGORIES.map((category) => ({
      label: category.navLabel,
      href: categoryPath(category.slug),
    })),
  },
  { label: 'User Dashboard', href: '/user-dashboard' },
  { label: 'Contact Us', href: '/contact' },
];

export const branches = [
  {
    name: 'Main Branch',
    lines: ['First Floor, KSRTC Bus Stand,', 'Bananje, Udupi,', 'Karnataka 576101'],
    phone: '091486 43754'
  },
  {
    name: 'Kundapura Branch',
    lines: ['Karanth complex, beside KSRTC,', 'bus depot, Vaderhobli,', 'Kundapura, Karnataka 576201'],
    phone: '099729 80332'
  },
  {
    name: 'Our Branch',
    lines: ['Behind Hotel Janardana', 'near Old KSRTC Bus Stand,', 'Udupi, Karnataka 576101'],
    phone: '099802 84696'
  }
];

export const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Update News', href: '/blog' },
  { label: 'Terms Of Service', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Delivery & Installation Policy', href: '/delivery-policy' }
];

export const supportCenter = [
  { label: "FAQ's", href: '/faq' },
  { label: 'Track Your Order', href: '/track-order' },
  { label: 'Returns Policy', href: '/return' }
];

export const footerNote = `© ${new Date().getFullYear()} Mahakali Furnitures. All Rights Reserved.`;
