import { d as createAstro, c as createComponent, m as maybeRenderHead, r as renderComponent, F as Fragment, a as renderTemplate, b as addAttribute, f as renderSlot, u as unescapeHTML } from '../../../chunks/astro/server_DPSnU3bI.mjs';
import 'kleur/colors';
import { a as $$Icon, g as getCategoryBySlug, c as categoryPath, s as siteInfo, $ as $$Layout } from '../../../chunks/Layout_DoOydEG6.mjs';
/* empty css                                        */
import { s as stripHtml, b as getWooConfig, c as getProductBySlug, d as getRelatedProducts, f as featuresFromProduct } from '../../../chunks/catalog_C9AssR4b.mjs';
import 'clsx';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useReducedMotion, AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
export { renderers } from '../../../renderers.mjs';

const $$Astro$4 = createAstro("https://mahakalihomefurnitures.com");
const $$ProductBreadcrumbs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ProductBreadcrumbs;
  const { items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav class="breadcrumb-nav" aria-label="Breadcrumb" data-astro-cid-b4tnihsd> ${items.map((item, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-b4tnihsd": true }, { "default": ($$result2) => renderTemplate`${item.link ? renderTemplate`<a${addAttribute(item.link, "href")} class="breadcrumb-link" data-astro-cid-b4tnihsd>${item.label}</a>` : renderTemplate`<span class="breadcrumb-current" data-astro-cid-b4tnihsd>${item.label}</span>`}${index < items.length - 1 && renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "chevron-right", "class": "breadcrumb-separator", "data-astro-cid-b4tnihsd": true })}`}` })}`)} </nav> `;
}, "/Users/sujaykumar/Documents/GitHub/108medz/mahakali-webiste/src/components/Products/ProductDetails/ProductBreadcrumbs.astro", void 0);

const $$Astro$3 = createAstro("https://mahakalihomefurnitures.com");
const $$ProductInfo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ProductInfo;
  const {
    title,
    rating,
    stars,
    ratingCount = 0,
    currentPrice,
    originalPrice,
    discountText,
    discountLabel = "Showroom price",
    sku,
    stockStatus,
    categoryName,
    categoryHref,
    whatsappHref,
    contactHref = "/contact",
    excerptHtml = ""
  } = Astro2.props;
  const fullStars = Math.max(1, Math.min(5, Math.round(stars || rating || 5)));
  const excerpt = stripHtml(excerptHtml);
  return renderTemplate`${maybeRenderHead()}<div class="product-info-wrapper" data-astro-cid-qt35por4> <a class="collection-chip"${addAttribute(categoryHref, "href")} data-astro-cid-qt35por4>${categoryName}</a> <div class="info-header" data-astro-cid-qt35por4> <h1 class="product-title font-display" data-astro-cid-qt35por4>${title}</h1> <div class="rating-container" data-astro-cid-qt35por4> ${Array.from({ length: fullStars }).map(() => renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "star-filled", "class": "star-icon", "data-astro-cid-qt35por4": true })}`)} <span class="rating-text" data-astro-cid-qt35por4> ${rating.toFixed(1)}${ratingCount ? ` \xB7 ${ratingCount} reviews` : ""} </span> </div> </div> <div class="pricing-container" data-astro-cid-qt35por4> <div class="price-details" data-astro-cid-qt35por4> <span class="discount-label" data-astro-cid-qt35por4>${discountLabel}</span> <div class="price-row" data-astro-cid-qt35por4> <span class="current-price font-display" data-astro-cid-qt35por4>${currentPrice}</span> ${originalPrice && renderTemplate`<span class="original-price" data-astro-cid-qt35por4>${originalPrice}</span>`} </div> </div> ${discountText && renderTemplate`<span class="discount-badge" data-astro-cid-qt35por4>${discountText}</span>`} </div> ${excerpt && renderTemplate`<p class="excerpt" data-astro-cid-qt35por4>${excerpt}</p>`} <div class="meta-container" data-astro-cid-qt35por4> <p class="product-codes" data-astro-cid-qt35por4>SKU ${sku}</p> <p class="stock-status" data-astro-cid-qt35por4> ${renderComponent($$result, "Icon", $$Icon, { "name": "info", "class": "info-icon", "data-astro-cid-qt35por4": true })} ${stockStatus} </p> </div> ${renderSlot($$result, $$slots["default"])} <div class="cta-row" data-astro-cid-qt35por4> <a class="btn btn-primary"${addAttribute(whatsappHref, "href")} data-astro-cid-qt35por4>
Enquire on WhatsApp
${renderComponent($$result, "Icon", $$Icon, { "name": "arrow-right", "class": "cart-icon", "data-astro-cid-qt35por4": true })} </a> <a class="btn btn-secondary"${addAttribute(contactHref, "href")} data-astro-cid-qt35por4>Visit a showroom</a> </div> </div> `;
}, "/Users/sujaykumar/Documents/GitHub/108medz/mahakali-webiste/src/components/Products/ProductDetails/ProductInfo.astro", void 0);

const $$Astro$2 = createAstro("https://mahakalihomefurnitures.com");
const $$ProductSpecs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProductSpecs;
  const { features, specifications, descriptionHtml = "", productCodeRef } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="product-specs-container" data-tabs data-astro-cid-rxblm7pn> <div class="tabs-header" data-astro-cid-rxblm7pn> <button class="tab-btn active" type="button" data-tab="desc" data-astro-cid-rxblm7pn>Description</button> <button class="tab-btn" type="button" data-tab="info" data-astro-cid-rxblm7pn>Details</button> </div> <div class="tab-panel" data-panel="desc" data-astro-cid-rxblm7pn> ${descriptionHtml ? renderTemplate`<div class="rich-text" data-astro-cid-rxblm7pn>${unescapeHTML(descriptionHtml)}</div>` : renderTemplate`<ul class="features-list" data-astro-cid-rxblm7pn> ${features.map((feature) => renderTemplate`<li class="feature-item" data-astro-cid-rxblm7pn><span class="bullet" data-astro-cid-rxblm7pn></span>${feature}</li>`)} </ul>`} </div> <div class="tab-panel" data-panel="info" hidden data-astro-cid-rxblm7pn> <div class="specs-list" data-astro-cid-rxblm7pn> ${specifications.map((spec) => renderTemplate`<div class="spec-row" data-astro-cid-rxblm7pn> <span class="spec-label" data-astro-cid-rxblm7pn>${spec.label}</span> <span class="spec-value" data-astro-cid-rxblm7pn>${spec.value}</span> </div>`)} </div> <p class="ref-text" data-astro-cid-rxblm7pn>Product code ${productCodeRef}</p> </div> </div>  `;
}, "/Users/sujaykumar/Documents/GitHub/108medz/mahakali-webiste/src/components/Products/ProductDetails/ProductSpecs.astro", void 0);

const $$Astro$1 = createAstro("https://mahakalihomefurnitures.com");
const $$RelatedProducts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$RelatedProducts;
  const { products } = Astro2.props;
  return renderTemplate`${products.length > 0 && renderTemplate`${maybeRenderHead()}<section class="related-masterpieces" data-astro-cid-li4bqw6y><p class="eyebrow" data-astro-cid-li4bqw6y>Continue looking</p><h2 class="font-display section-title" data-astro-cid-li4bqw6y>From the same workshop</h2><div class="related-grid" data-astro-cid-li4bqw6y>${products.map((product) => renderTemplate`<a${addAttribute(product.link, "href")} class="related-card" data-astro-cid-li4bqw6y><div class="image-wrapper" data-media data-astro-cid-li4bqw6y><span class="stock-badge" data-astro-cid-li4bqw6y>${product.stockStatus}</span><img${addAttribute(product.image, "src")}${addAttribute(product.name, "alt")} class="related-img" loading="lazy" data-astro-cid-li4bqw6y></div><div class="related-info" data-astro-cid-li4bqw6y><h3 class="font-display product-title" data-astro-cid-li4bqw6y>${product.name}</h3><span class="product-price" data-astro-cid-li4bqw6y>${product.price}</span></div></a>`)}</div></section>`}`;
}, "/Users/sujaykumar/Documents/GitHub/108medz/mahakali-webiste/src/components/Products/ProductDetails/RelatedProducts.astro", void 0);

function ProductGallery({ images, title }) {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const current = images[index] ?? images[0];
  if (!current) return null;
  return /* @__PURE__ */ jsxs("div", { className: "pg", children: [
    /* @__PURE__ */ jsx("div", { className: "pg__stage", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(
      motion.img,
      {
        src: current.src,
        alt: current.alt || title,
        initial: reduce ? false : { opacity: 0, scale: 1.04 },
        animate: { opacity: 1, scale: 1 },
        exit: reduce ? void 0 : { opacity: 0, scale: 0.98 },
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
        className: "pg__image"
      },
      current.src
    ) }) }),
    images.length > 1 && /* @__PURE__ */ jsx("div", { className: "pg__thumbs", role: "list", children: images.map((image, i) => /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        className: i === index ? "is-active" : "",
        onClick: () => setIndex(i),
        "aria-label": `View image ${i + 1}`,
        children: /* @__PURE__ */ jsx("img", { src: image.src, alt: "" })
      },
      image.src + i
    )) }),
    /* @__PURE__ */ jsx("style", { children: `
        .pg { display: grid; gap: 0.9rem; }
        .pg__stage {
          position: relative;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          background: #ebe4da;
        }
        .pg__image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .pg__thumbs {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(72px, 1fr));
          gap: 0.55rem;
        }
        .pg__thumbs button {
          aspect-ratio: 1;
          overflow: hidden;
          border: 1px solid transparent;
          padding: 0;
          opacity: 0.55;
          transition: opacity 0.35s ease, border-color 0.35s ease;
        }
        .pg__thumbs button img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .pg__thumbs button:hover { opacity: 1; }
        .pg__thumbs button.is-active {
          opacity: 1;
          border-color: #241c18;
        }
      ` })
  ] });
}

function whatsappEnquire(productName, productUrl = "") {
  const digits = getWooConfig().whatsapp.replace(/\D/g, "");
  const text = productUrl ? `Hello Mahakali, I would like to know more about ${productName}. ${productUrl}` : `Hello Mahakali, I would like to know more about ${productName}.`;
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://mahakalihomefurnitures.com");
const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const categorySlug = Astro2.params.category ?? "";
  const slug = Astro2.params.slug ?? "";
  const category = getCategoryBySlug(categorySlug);
  const product = await getProductBySlug(slug);
  if (!category || !product) {
    return Astro2.redirect(category ? categoryPath(category.slug) : "/products");
  }
  const related = await getRelatedProducts(product);
  const features = featuresFromProduct(product);
  const specifications = [
    { label: "Collection", value: category.name },
    { label: "SKU", value: product.sku },
    ...product.attributes,
    { label: "Availability", value: product.stockStatus }
  ];
  const pageUrl = `${siteInfo.url}/products/${category.slug}/${product.slug}`;
  const whatsappHref = whatsappEnquire(product.name, pageUrl);
  const description = stripHtml(product.shortDescriptionHtml || product.descriptionHtml).slice(0, 180) || product.name;
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    sku: product.sku,
    image: product.images.map((img) => img.src),
    description,
    brand: { "@type": "Brand", name: siteInfo.legalName },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: product.rawPrice || void 0,
      availability: "https://schema.org/InStoreOnly",
      url: pageUrl
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": product.name, "description": description, "image": product.image, "path": `/products/${category.slug}/${product.slug}`, "data-astro-cid-acnzt36x": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<main class="product-details-page" data-astro-cid-acnzt36x> <div class="content-wrapper" data-astro-cid-acnzt36x> ${renderComponent($$result2, "ProductBreadcrumbs", $$ProductBreadcrumbs, { "items": [
    { label: "Home", link: "/" },
    { label: "Collections", link: "/products" },
    { label: category.name, link: categoryPath(category.slug) },
    { label: product.name }
  ], "data-astro-cid-acnzt36x": true })} <div class="product-grid-layout" data-astro-cid-acnzt36x> <div class="gallery-column" data-astro-cid-acnzt36x> ${renderComponent($$result2, "ProductGallery", ProductGallery, { "client:load": true, "images": product.images, "title": product.name, "client:component-hydration": "load", "client:component-path": "/Users/sujaykumar/Documents/GitHub/108medz/mahakali-webiste/src/components/Products/ProductDetails/ProductGallery.tsx", "client:component-export": "default", "data-astro-cid-acnzt36x": true })} </div> <div class="info-column" data-astro-cid-acnzt36x> ${renderComponent($$result2, "ProductInfo", $$ProductInfo, { "title": product.name, "rating": product.stars, "stars": product.stars, "ratingCount": product.ratingCount, "currentPrice": product.price, "originalPrice": product.regularPrice, "discountText": product.discountText, "discountLabel": product.discountLabel, "sku": product.sku, "stockStatus": product.stockStatus, "categoryName": category.name, "categoryHref": categoryPath(category.slug), "whatsappHref": whatsappHref, "excerptHtml": product.shortDescriptionHtml, "data-astro-cid-acnzt36x": true }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "ProductSpecs", $$ProductSpecs, { "features": features, "specifications": specifications, "descriptionHtml": product.descriptionHtml, "productCodeRef": product.sku, "data-astro-cid-acnzt36x": true })} ` })} </div> </div> ${renderComponent($$result2, "RelatedProducts", $$RelatedProducts, { "products": related, "data-astro-cid-acnzt36x": true })} </div> </main> `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": async ($$result3) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> "])), unescapeHTML(JSON.stringify(productSchema))) })}` })} `;
}, "/Users/sujaykumar/Documents/GitHub/108medz/mahakali-webiste/src/pages/products/[category]/[slug].astro", void 0);

const $$file = "/Users/sujaykumar/Documents/GitHub/108medz/mahakali-webiste/src/pages/products/[category]/[slug].astro";
const $$url = "/products/[category]/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
