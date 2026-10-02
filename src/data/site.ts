import { CATALOG_CATEGORIES, categoryPath } from "../lib/woocommerce/categories";

export const siteInfo = {
  name: 'Mahakali',
  tagline: 'Home Furnitures & Interiors',
  legalName: 'Mahakali Home Furnitures & Interiors',
  url: 'https://mahakalihomefurnitures.com',
  description:
    "Udupi and Kundapura's most trusted name for premium sofas, mattresses, cots and curated curtains. 28+ years of handcrafted comfort, timeless style and honest pricing.",
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
    { label: 'Instagram', href: 'https://www.instagram.com/mahakali_home_furnitures/', icon: 'instagram' },
  ]
};

export const mainNav = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  {
    label: 'Collections',
    href: '/products',
    children: CATALOG_CATEGORIES.map((category) => ({
      label: category.navLabel,
      href: categoryPath(category.slug),
    })),
  },
  { label: 'Contact Us', href: '/contact' },
];

export const branches = [
  {
    name: 'Main Branch',
    lines: ['First Floor, KSRTC Bus Stand,', 'Bananje, Udupi,', 'Karnataka 576101'],
    phone: '091486 43754',
    mapLink: 'https://www.google.com/maps/dir//Mahakali+Home+Furnitures+and+Interiors,+1st+floor,+New+KSRTC,+bus+stand,+Udupi,+Karnataka+576101/@13.3247898,74.764419,32293m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3bbcbbe20d44c209:0x77f2a12c93e9b743!2m2!1d74.7383303!2d13.3451152?entry=ttu&g_ep=EgoyMDI2MDkyNy4xIKXMDSoASAFQAw%3D%3D'
  },
  {
    name: 'Kundapura Branch',
    lines: ['Karanth complex, beside KSRTC,', 'bus depot, Vaderhobli,', 'Kundapura, Karnataka 576201'],
    phone: '099729 80332',
    mapLink: 'https://www.google.com/maps/dir//Mahakali+Home+Furnitures+%26+Interiors,+Karanth+complex,+bus+depot,+beside+KSRTC+Vaderhobli,+Kundapur,+Karnataka+576201/@12.8527141,74.8617728,3401m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3bbc9134172d8e13:0xd6062e8a6032899e!2m2!1d74.693658!2d13.6149847?entry=ttu&g_ep=EgoyMDI2MDkyNy4xIKXMDSoASAFQAw%3D%3D'
  },
  {
    name: 'Our Branch',
    lines: ['Behind Hotel Janardana', 'near Old KSRTC Bus Stand,', 'Udupi, Karnataka 576101'],
    phone: '099802 84696',
    mapLink: 'https://www.google.com/maps/dir//Mahakali+Sofas+%26+Curtains,+Bus+Stand,+near+Adarsh+Hospital,+next+to+KSRTC,+Brahmagiri,+Udupi,+Karnataka+576101/@12.8527141,74.8617728,3401m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3bbcbb6f8e44e5cf:0x42503cad4986627a!2m2!1d74.7473293!2d13.3404993?entry=ttu&g_ep=EgoyMDI2MDkyNy4xIKXMDSoASAFQAw%3D%3D'
  }
];

export const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Update News', href: '/blog' },
  { label: 'Terms Of Service', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' }
];

export const supportCenter = [
  { label: "FAQ's", href: '/faq' },
  { label: 'Track Your Order', href: '#' },
  { label: 'Returns Policy', href: '/returns' },
  { label: 'Delivery & Installation Policy', href: '/delivery-policy' }
];

export const footerNote = `© ${new Date().getFullYear()} Mahakali Furnitures. All Rights Reserved.`;
