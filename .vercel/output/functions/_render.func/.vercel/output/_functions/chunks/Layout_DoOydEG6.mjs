import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderComponent, a as renderTemplate, F as Fragment, f as renderSlot, g as renderHead, u as unescapeHTML } from './astro/server_DPSnU3bI.mjs';
import 'kleur/colors';
/* empty css                         */
import 'clsx';

const CATALOG_CATEGORIES = [
  {
    id: 25,
    slug: "upholstered",
    name: "Upholstered",
    navLabel: "Upholstered",
    eyebrow: "Curated comfort",
    description: "Sofas and sectionals where masterful upholstery meets everyday ease — the pieces that anchor a living room.",
    heroImage: "https://mahakalihomefurnitures.com/uploads/category/1775277522_e7ab339c-4222-41f0-a2be-1584e09eb38a.jpeg"
  },
  {
    id: 24,
    slug: "wooden-sofa",
    name: "Wooden Sofa",
    navLabel: "Wooden Sofa",
    eyebrow: "Solid timber seating",
    description: "Frame-forward sofas in teak and hardwood, built for longevity and the warm grain that only wood can give.",
    heroImage: "https://mahakalihomefurnitures.com/uploads/category/1775625955_image.jpg"
  },
  {
    id: 23,
    slug: "wooden-cot",
    name: "Wooden Cot",
    navLabel: "Wooden Cot",
    eyebrow: "Rest, crafted",
    description: "Bedroom cots and bedsteads in solid wood — quiet silhouettes, honest joinery, and a finish that ages well.",
    heroImage: "https://mahakalihomefurnitures.com/uploads/category/1776681424_41ad91c8-1400-4175-b283-c5ff71558fa4.jpeg"
  },
  {
    id: 22,
    slug: "wooden-jhoola",
    name: "Wooden Jhoola",
    navLabel: "Wooden Jhoola",
    eyebrow: "Swing into stillness",
    description: "Traditional wooden jhoolas for verandahs and living rooms — a slow, familiar rhythm for Udupi homes.",
    heroImage: "https://mahakalihomefurnitures.com/uploads/category/1776080159_aac22c29-86dd-48f6-9e8c-d8183556ec22.jpeg"
  },
  {
    id: 19,
    slug: "wooden-dining-5-3",
    name: "Wooden Dining 5/3",
    navLabel: "Dining 5/3",
    eyebrow: "Table for five",
    description: "Dining sets proportioned for everyday family meals — a 5/3 configuration with a solid wooden top.",
    heroImage: "https://mahakalihomefurnitures.com/uploads/category/1776336410_5566e1df-5547-4d76-9176-571a76663461.jpeg"
  },
  {
    id: 20,
    slug: "wooden-dining-6-3",
    name: "Wooden Dining 6/3",
    navLabel: "Dining 6/3",
    eyebrow: "Gather six",
    description: "Generous wooden dining sets for six — the weekend table, festival meals, and conversations that linger.",
    heroImage: "https://mahakalihomefurnitures.com/uploads/category/1776250417_f0e56a86-42c2-42c2-af5f-14ab62416bc8.jpeg"
  },
  {
    id: 21,
    slug: "wooden-dining-glass-4-3",
    name: "Wooden Dining Set with Glass Top 4/3",
    navLabel: "Dining + Glass Top",
    eyebrow: "Light on wood",
    description: "Four-seater dining with a glass top — the grain shows through, the surface stays easy to live with.",
    heroImage: "https://mahakalihomefurnitures.com/uploads/category/1776147783_d3c91ee4-27c6-4fdf-b772-81cd2143ca1d.jpeg"
  },
  {
    id: 18,
    slug: "tepoy",
    name: "Tepoy",
    navLabel: "Tepoy",
    eyebrow: "Centre & side tables",
    description: "Tepoys and occasional tables that complete a seating arrangement — compact, sturdy, and finely finished.",
    heroImage: "https://mahakalihomefurnitures.com/uploads/category/1776750765_0985A978-2698-4362-985F-C9F6B50B9CFB.png"
  },
  {
    id: 17,
    slug: "cushion-chairs",
    name: "Cushion Chairs",
    navLabel: "Cushion Chairs",
    eyebrow: "A chair of one’s own",
    description: "Cushioned lounge and accent chairs — extra seating that still feels like a destination in the room.",
    heroImage: "https://mahakalihomefurnitures.com/uploads/category/1778477217_IMG_1713.jpeg"
  },
  {
    id: 16,
    slug: "wooden-furniture",
    name: "Wooden furniture",
    navLabel: "Wooden Furniture",
    eyebrow: "The timber atelier",
    description: "A wider wooden furniture edit — pieces that sit outside a single collection but share the same workshop DNA.",
    heroImage: "https://mahakalihomefurnitures.com/uploads/category/1779278761_6C91D122-7ED2-4BAD-8F6B-ABDEAE1D2686.png"
  }
];
const bySlug = new Map(CATALOG_CATEGORIES.map((c) => [c.slug, c]));
const byId = new Map(CATALOG_CATEGORIES.map((c) => [c.id, c]));
function getCategoryBySlug(slug) {
  return bySlug.get(slug);
}
function getCategoryById(id) {
  return byId.get(id);
}
function productPath(categorySlug, productSlug) {
  return `/products/${categorySlug}/${productSlug}`;
}
function categoryPath(categorySlug) {
  return `/products/${categorySlug}`;
}

const siteInfo = {
  name: "Mahakali",
  legalName: "Mahakali Home Furnitures & Interiors",
  url: "https://mahakalihomefurnitures.com",
  description: "Udupi's most trusted name for premium sofas, mattresses, cots and curated curtains. 28+ years of handcrafted comfort, timeless style and honest pricing.",
  email: "mahakali@gmail.com",
  phones: ["0824-4123456", "99486 42754", "098602 84996"],
  founded: 1997};
const topBar = {
  social: [
    { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
    { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
    { label: "YouTube", href: "https://youtube.com", icon: "youtube" }
  ]
};
const mainNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  {
    label: "Collections",
    href: "/products",
    children: CATALOG_CATEGORIES.map((category) => ({
      label: category.navLabel,
      href: categoryPath(category.slug)
    }))
  },
  { label: "Contact", href: "/contact" }
];
const branches = [
  {
    name: "Kereebettu Branch",
    lines: ["First Floor, KSRTC Bus Stand,", "Baraniya, Udupi", "Karnataka 576101"],
    phone: "99486 42754"
  },
  {
    name: "Brahmagiri Branch",
    lines: ["Behind Hotel Janardana,", "near Old KSRTC Bus Stand,", "Udupi, Karnataka 576101"],
    phone: "098602 84996"
  },
  {
    name: "Kunjibettu Branch",
    lines: ["Karkeni complex, beside KSRTC,", "bus depot, Vaderhobli,", "Kundapura, Karnataka 576201"],
    phone: "066739 80332"
  }
];
const footerNote = `© ${(/* @__PURE__ */ new Date()).getFullYear()} Mahakali Furnitures. All Rights Reserved.`;

const $$Astro$3 = createAstro("https://mahakalihomefurnitures.com");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Icon;
  const { name, class: className = "" } = Astro2.props;
  const paths = {
    truck: "M3 7h11v8H3zM14 10h4l3 3v2h-7zM6.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM17.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z",
    refresh: "M4 4v5h5M20 20v-5h-5M4.5 9a8 8 0 0113.9-3.5L20 9M19.5 15a8 8 0 01-13.9 3.5L4 15",
    shield: "M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z",
    headset: "M4 13a8 8 0 0116 0v4a2 2 0 01-2 2h-1v-6h3M4 13v4a2 2 0 002 2h1v-6H4M15 19a2 2 0 01-2 2h-1",
    medal: "M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 14.5 7.2 16.9l.9-5.4L4.2 7.7l5.4-.8L12 2z",
    tag: "M20 12l-8 8-9-9V4h7l10 10zM7 7h.01",
    van: "M2 8h11v9H2zM13 11h4l4 3v3h-8zM6 20a2 2 0 100-4 2 2 0 000 4zM17 20a2 2 0 100-4 2 2 0 000 4z",
    star: "M12 2.5l2.9 6 6.6.9-4.8 4.6 1.1 6.5L12 17.3l-5.8 3.2 1.1-6.5-4.8-4.6 6.6-.9L12 2.5z",
    "arrow-right": "M5 12h14M13 6l6 6-6 6",
    "chevron-left": "M15 18l-6-6 6-6",
    "chevron-right": "M9 6l6 6-6 6",
    "chevron-down": "M6 9l6 6 6-6",
    filter: "M22 3H2l8 9.46V19l4 2v-8.54L22 3z",
    facebook: "M14 9h3V6h-3a4 4 0 00-4 4v2H8v3h2v6h3v-6h3l1-3h-4v-2a1 1 0 011-1z",
    instagram: "M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zM12 8a4 4 0 100 8 4 4 0 000-8zM17.5 6.5h.01",
    youtube: "M22 12s0-3.5-.4-5a3 3 0 00-2.2-2.1C17.8 4.5 12 4.5 12 4.5s-5.8 0-7.4.4A3 3 0 002.4 7C2 8.5 2 12 2 12s0 3.5.4 5a3 3 0 002.2 2.1c1.6.4 7.4.4 7.4.4s5.8 0 7.4-.4A3 3 0 0021.6 17c.4-1.5.4-5 .4-5zM10 9l6 3-6 3V9z",
    phone: "M4 5c0 8.3 6.7 15 15 15l3-3-5-4-2 2a11 11 0 01-6-6l2-2-4-5-3 3z",
    mail: "M3 6h18v12H3zM3 6l9 7 9-7",
    menu: "M3 6h18M3 12h18M3 18h18",
    close: "M6 6l12 12M18 6L6 18",
    quote: "M7 7a4 4 0 00-4 4v6h6v-6H6a2 2 0 012-2V7zM17 7a4 4 0 00-4 4v6h6v-6h-3a2 2 0 012-2V7z",
    location: "M12 2a7 7 0 00-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 00-7-7zM12 12a3 3 0 100-6 3 3 0 000 6z",
    clock: "M12 7v5l3.5 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    search: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
    bag: "M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0",
    chair: "M4 11V9a2 2 0 012-2h12a2 2 0 012 2v2M4 11h16M4 11v6m16-6v6M4 17a2 2 0 002 2h12a2 2 0 002-2M6 17v2m12-2v2M12 11v6",
    info: "M12 8h.01M11 12h1v4h1M12 21a9 9 0 110-18 9 9 0 010 18z",
    check: "M5 13l4 4L19 7"
  };
  const isFilled = name.includes("-filled");
  const baseName = name.replace("-filled", "");
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(className, "class")} viewBox="0 0 24 24" width="1em" height="1em"${addAttribute(isFilled ? "currentColor" : "none", "fill")} stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"> ${name === "star-half" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <path${addAttribute(paths.star, "d")} fill="none"></path> <path d="M12 17.3l-5.8 3.2 1.1-6.5-4.8-4.6 6.6-.9L12 2.5v14.8z" fill="currentColor" stroke="none"></path> ` })}` : renderTemplate`<path${addAttribute(paths[baseName] ?? paths.star, "d")}></path>`} </svg>`;
}, "/Users/sujaykumar/Documents/GitHub/108medz/mahakali-webiste/src/components/global/UI/Icon.astro", void 0);

const $$Astro$2 = createAstro("https://mahakalihomefurnitures.com");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const isHome = Astro2.url.pathname === "/" || Astro2.url.pathname === "";
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(`site-header ${isHome ? "is-overlay" : ""}`, "class")} data-astro-cid-urn6yvll> <div class="header__inner" data-astro-cid-urn6yvll> <a href="/" class="brand" data-astro-cid-urn6yvll> <img src="/images/new-logo.png" alt="Mahakali Home Furnitures" class="brand-logo-img" data-astro-cid-urn6yvll> </a> <nav class="desktop-nav" aria-label="Primary" data-astro-cid-urn6yvll> <ul data-astro-cid-urn6yvll> ${mainNav.map((item) => {
    const isActive = Astro2.url.pathname === item.href || item.href !== "/" && Astro2.url.pathname.startsWith(item.href);
    return renderTemplate`<li${addAttribute(item.children ? "has-children" : "", "class")} data-astro-cid-urn6yvll> <a${addAttribute(item.href, "href")}${addAttribute(isActive ? "is-active" : "", "class")} data-astro-cid-urn6yvll> ${item.label} ${item.children && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "chevron-down", "class": "icon-10 caret", "data-astro-cid-urn6yvll": true })}`} </a> ${item.children && renderTemplate`<div class="mega" data-astro-cid-urn6yvll> <div class="mega__head" data-astro-cid-urn6yvll> <p data-astro-cid-urn6yvll>Collections</p> <a href="/products" data-astro-cid-urn6yvll>View all</a> </div> <ul data-astro-cid-urn6yvll> ${CATALOG_CATEGORIES.map((cat, i) => renderTemplate`<li data-astro-cid-urn6yvll> <a${addAttribute(`/products/${cat.slug}`, "href")} data-astro-cid-urn6yvll> <img${addAttribute(cat.heroImage, "src")} alt="" data-astro-cid-urn6yvll> <span data-astro-cid-urn6yvll> <small data-astro-cid-urn6yvll>${String(i + 1).padStart(2, "0")}</small> <strong data-astro-cid-urn6yvll>${cat.navLabel}</strong> </span> </a> </li>`)} </ul> </div>`} </li>`;
  })} </ul> </nav> <div class="header__actions" data-astro-cid-urn6yvll> <a href="/contact" class="btn-inquiry" data-astro-cid-urn6yvll>Visit Showroom</a> <button class="icon-action nav-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu" id="nav-toggle" data-astro-cid-urn6yvll> <span class="toggle-bars" aria-hidden="true" data-astro-cid-urn6yvll></span> </button> </div> </div> </header> <div id="mobile-menu" class="mobile-menu" hidden data-astro-cid-urn6yvll> <div class="mobile-menu__inner" data-astro-cid-urn6yvll> <p class="menu-kicker" data-astro-cid-urn6yvll>Menu</p> <nav aria-label="Mobile" data-astro-cid-urn6yvll> <ul class="menu-links" data-astro-cid-urn6yvll> ${mainNav.map((item, i) => renderTemplate`<li${addAttribute(`--d: ${0.08 + i * 0.06}s`, "style")} data-astro-cid-urn6yvll> ${item.children ? renderTemplate`<div class="menu-group" data-astro-cid-urn6yvll> <a${addAttribute(item.href, "href")} class="menu-link" data-astro-cid-urn6yvll>${item.label}</a> <ul class="menu-sub" data-astro-cid-urn6yvll> ${item.children.map((child) => renderTemplate`<li data-astro-cid-urn6yvll><a${addAttribute(child.href, "href")} data-astro-cid-urn6yvll>${child.label}</a></li>`)} </ul> </div>` : renderTemplate`<a${addAttribute(item.href, "href")} class="menu-link" data-astro-cid-urn6yvll>${item.label}</a>`} </li>`)} </ul> </nav> <a href="/contact" class="btn btn-primary menu-cta" data-astro-cid-urn6yvll>Visit showroom</a> </div> </div>  `;
}, "/Users/sujaykumar/Documents/GitHub/108medz/mahakali-webiste/src/components/global/Header/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const nav = mainNav.filter((item) => !item.children);
  return renderTemplate`${maybeRenderHead()}<footer class="footer" data-astro-cid-negprvz4> <div class="wrap wrap--wide top" data-astro-cid-negprvz4> <div data-astro-cid-negprvz4> <img src="/images/new-logo.png"${addAttribute(siteInfo.name, "alt")} class="logo" data-astro-cid-negprvz4> <p data-astro-cid-negprvz4>${siteInfo.description}</p> </div> <div data-astro-cid-negprvz4> <p class="label" data-astro-cid-negprvz4>Visit</p> <ul data-astro-cid-negprvz4> ${branches.map((b) => renderTemplate`<li data-astro-cid-negprvz4> <strong data-astro-cid-negprvz4>${b.name}</strong> <span data-astro-cid-negprvz4>${b.lines.join(" ")}</span> <a${addAttribute(`tel:${b.phone.replace(/\s/g, "")}`, "href")} data-astro-cid-negprvz4>${b.phone}</a> </li>`)} </ul> </div> <div data-astro-cid-negprvz4> <p class="label" data-astro-cid-negprvz4>Navigate</p> <ul class="links" data-astro-cid-negprvz4> ${nav.map((item) => renderTemplate`<li data-astro-cid-negprvz4><a${addAttribute(item.href, "href")} data-astro-cid-negprvz4>${item.label}</a></li>`)} <li data-astro-cid-negprvz4><a href="/products" data-astro-cid-negprvz4>Collections</a></li> <li data-astro-cid-negprvz4><a href="/faq" data-astro-cid-negprvz4>FAQs</a></li> <li data-astro-cid-negprvz4><a href="/terms" data-astro-cid-negprvz4>Terms</a></li> <li data-astro-cid-negprvz4><a href="/privacy" data-astro-cid-negprvz4>Privacy</a></li> </ul> </div> </div> <div class="wrap wrap--wide bottom" data-astro-cid-negprvz4> <p data-astro-cid-negprvz4>${footerNote}</p> <div class="social" data-astro-cid-negprvz4> ${topBar.social.map((s) => renderTemplate`<a${addAttribute(s.href, "href")}${addAttribute(s.label, "aria-label")} target="_blank" rel="noopener noreferrer" data-astro-cid-negprvz4> ${renderComponent($$result, "Icon", $$Icon, { "name": s.icon, "class": "icon-16", "data-astro-cid-negprvz4": true })} </a>`)} </div> </div> </footer> `;
}, "/Users/sujaykumar/Documents/GitHub/108medz/mahakali-webiste/src/components/global/Footer/Footer.astro", void 0);

const $$Astro$1 = createAstro("https://mahakalihomefurnitures.com");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/sujaykumar/Documents/GitHub/108medz/mahakali-webiste/node_modules/astro/components/ViewTransitions.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://mahakalihomefurnitures.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = siteInfo.description,
    image = "/og-cover.jpg",
    path = "/"
  } = Astro2.props;
  const canonicalURL = new URL(path, siteInfo.url).toString();
  const pageTitle = title.includes("Mahakali") ? title : `${title} | Mahakali Home Furnitures & Interiors`;
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "FurnitureStore",
    name: siteInfo.legalName,
    description: siteInfo.description,
    url: siteInfo.url,
    telephone: siteInfo.phones[0],
    email: siteInfo.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Udupi",
      addressRegion: "Karnataka",
      addressCountry: "IN"
    },
    areaServed: "Udupi, Karnataka",
    priceRange: "\u20B9\u20B9",
    foundingDate: String(siteInfo.founded)
  };
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg">', "<!-- Primary SEO --><title>", '</title><meta name="description"', '><link rel="canonical"', '><meta name="robots" content="index, follow"><meta name="theme-color" content="#f7f3ee"><!-- Open Graph --><meta property="og:type" content="website"><meta property="og:site_name"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:image"', '><meta property="og:locale" content="en_IN"><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><!-- Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><!-- Structured data --><script type="application/ld+json">', "<\/script>", "", "</head> <body> ", " ", " ", "  </body> </html>"])), renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), pageTitle, addAttribute(description, "content"), addAttribute(canonicalURL, "href"), addAttribute(siteInfo.legalName, "content"), addAttribute(pageTitle, "content"), addAttribute(description, "content"), addAttribute(canonicalURL, "content"), addAttribute(new URL(image, siteInfo.url).toString(), "content"), addAttribute(pageTitle, "content"), addAttribute(description, "content"), addAttribute(new URL(image, siteInfo.url).toString(), "content"), unescapeHTML(JSON.stringify(localBusinessSchema)), renderSlot($$result, $$slots["head"]), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/sujaykumar/Documents/GitHub/108medz/mahakali-webiste/src/layouts/Layout.astro", void 0);

export { $$Layout as $, CATALOG_CATEGORIES as C, $$Icon as a, getCategoryById as b, categoryPath as c, getCategoryBySlug as g, productPath as p, siteInfo as s };
