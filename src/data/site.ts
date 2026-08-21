// Global, site-wide data. Any future page (About, Products, Contact...)
// imports from here so nav/footer/contact stay in one place.

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
  phone: '99486 42754',
  needHelp: 'Need Help?',
  social: [
    { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
    { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
    { label: 'YouTube', href: 'https://youtube.com', icon: 'youtube' }
  ]
};

export const mainNav = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'Upholstered', href: '/products/upholstered' },
      { label: 'Wooden Sofa', href: '/products/wooden-sofa' },
      { label: 'Wooden Cot', href: '/products/wooden-cot' },
      { label: 'Wooden Jhoola', href: '/products/wooden-jhoola' },
      { label: 'Dining Sets', href: '/products/dining-sets' }
    ]
  }
];

export const branches = [
  {
    name: 'Kereebettu Branch',
    lines: ['First Floor, KSRTC Bus Stand,', 'Baraniya, Udupi', 'Karnataka 576101'],
    phone: '99486 42754'
  },
  {
    name: 'Brahmagiri Branch',
    lines: ['Behind Hotel Janardana,', 'near Old KSRTC Bus Stand,', 'Udupi, Karnataka 576101'],
    phone: '098602 84996'
  },
  {
    name: 'Kunjibettu Branch',
    lines: ['Karkeni complex, beside KSRTC,', 'bus depot, Vaderhobli,', 'Kundapura, Karnataka 576201'],
    phone: '066739 80332'
  }
];

export const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Latest News', href: '/blog' },
  { label: 'Terms Of Service', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Delivery & Installation Policy', href: '/delivery-policy' }
];

export const supportCenter = [
  { label: "FAQ's", href: '/faq' },
  { label: 'Track Your Order', href: '/' },
  { label: 'Returns Policy', href: '/returns' }
];

export const footerNote = `© ${new Date().getFullYear()} Mahakali Furnitures. All Rights Reserved.`;
