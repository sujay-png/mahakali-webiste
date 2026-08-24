import { d as createAstro, c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate, b as addAttribute } from '../../chunks/astro/server_DPSnU3bI.mjs';
import 'kleur/colors';
import { a as $$Icon, g as getCategoryBySlug, $ as $$Layout } from '../../chunks/Layout_DoOydEG6.mjs';
import { $ as $$CollectionHero, a as $$ProductSidebar, b as $$CollectionCTA } from '../../chunks/ProductSidebar_CwJ6toBk.mjs';
/* empty css                                         */
import { a as getProductsByCategory, g as getCategoryCounts } from '../../chunks/catalog_C9AssR4b.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$3 = createAstro("https://mahakalihomefurnitures.com");
const $$ProductToolbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ProductToolbar;
  const { categoryName, totalResults } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="toolbar-section" data-astro-cid-5ke4n2fk> <div class="toolbar-inner" data-astro-cid-5ke4n2fk> <div class="toolbar-breadcrumb" data-astro-cid-5ke4n2fk> <a href="/" data-astro-cid-5ke4n2fk>Home</a> ${renderComponent($$result, "Icon", $$Icon, { "name": "chevron-right", "class": "icon-14", "data-astro-cid-5ke4n2fk": true })} <a href="/products" data-astro-cid-5ke4n2fk>Collections</a> ${renderComponent($$result, "Icon", $$Icon, { "name": "chevron-right", "class": "icon-14", "data-astro-cid-5ke4n2fk": true })} <span class="current-category" data-astro-cid-5ke4n2fk>${categoryName}</span> <span class="results-count" data-astro-cid-5ke4n2fk>(${totalResults} pieces)</span> </div> <div class="sort-dropdown" data-astro-cid-5ke4n2fk> <select id="product-sort-select" aria-label="Sort products" data-astro-cid-5ke4n2fk> <option value="default" data-astro-cid-5ke4n2fk>Featured</option> <option value="price-asc" data-astro-cid-5ke4n2fk>Price: Low to High</option> <option value="price-desc" data-astro-cid-5ke4n2fk>Price: High to Low</option> </select> ${renderComponent($$result, "Icon", $$Icon, { "name": "chevron-down", "class": "icon-16 sort-icon", "data-astro-cid-5ke4n2fk": true })} </div> </div> </section> `;
}, "/Users/sujaykumar/Documents/GitHub/108medz/mahakali-webiste/src/components/Products/ProductToolbar.astro", void 0);

const $$Astro$2 = createAstro("https://mahakalihomefurnitures.com");
const $$ProductCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProductCard;
  const {
    name,
    price,
    stars,
    image,
    link,
    category = "",
    regularPrice,
    onSale = false
  } = Astro2.props;
  const fullStars = Math.floor(stars);
  const hasHalfStar = stars % 1 !== 0;
  const emptyStars = Math.max(0, 5 - Math.ceil(stars));
  const numericPrice = Number(String(price).replace(/[^0-9.-]+/g, "")) || 0;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")} class="product-card"${addAttribute(name.toLowerCase(), "data-name")}${addAttribute(numericPrice, "data-price")}${addAttribute(category.toLowerCase(), "data-category")} data-astro-cid-wasfh675> <div class="card-image-container" data-media data-astro-cid-wasfh675> <img${addAttribute(image, "src")}${addAttribute(name, "alt")} class="card-image" loading="lazy" data-astro-cid-wasfh675> ${onSale && renderTemplate`<span class="sale-chip" data-astro-cid-wasfh675>Sale</span>`} <span class="quick-view-btn" data-astro-cid-wasfh675>View piece</span> </div> <div class="card-info" data-astro-cid-wasfh675> <div class="card-details" data-astro-cid-wasfh675> ${category && renderTemplate`<p class="product-cat" data-astro-cid-wasfh675>${category}</p>`} <h3 class="product-name font-display" data-astro-cid-wasfh675>${name}</h3> <div class="star-rating"${addAttribute(`${stars} out of 5`, "aria-label")} data-astro-cid-wasfh675> ${Array.from({ length: fullStars }).map(() => renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "star-filled", "class": "star-icon", "data-astro-cid-wasfh675": true })}`)} ${hasHalfStar && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "star-half", "class": "star-icon", "data-astro-cid-wasfh675": true })}`} ${Array.from({ length: emptyStars }).map(() => renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "star", "class": "star-icon", "data-astro-cid-wasfh675": true })}`)} </div> </div> <div class="price-stack" data-astro-cid-wasfh675> <span class="product-price" data-astro-cid-wasfh675>${price}</span> ${regularPrice && onSale && renderTemplate`<s class="was" data-astro-cid-wasfh675>${regularPrice}</s>`} </div> </div> </a> `;
}, "/Users/sujaykumar/Documents/GitHub/108medz/mahakali-webiste/src/components/Products/ProductCard.astro", void 0);

const $$Astro$1 = createAstro("https://mahakalihomefurnitures.com");
const $$ProductGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProductGrid;
  const {
    products,
    emptyTitle = "This collection is between seasons",
    emptyCopy = "Add your WooCommerce keys in .env and the live catalog will appear here automatically."
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="product-grid-section" data-astro-cid-3ep4br4u> ${products.length === 0 ? renderTemplate`<div class="empty" data-astro-cid-3ep4br4u> <p class="empty-kicker" data-astro-cid-3ep4br4u>Showroom note</p> <h3 class="font-display" data-astro-cid-3ep4br4u>${emptyTitle}</h3> <p data-astro-cid-3ep4br4u>${emptyCopy}</p> <a href="/contact" class="btn btn-primary" data-astro-cid-3ep4br4u>Talk to the showroom</a> </div>` : renderTemplate`<div class="grid-container" id="product-grid" data-astro-cid-3ep4br4u> ${products.map((product) => renderTemplate`${renderComponent($$result, "ProductCard", $$ProductCard, { ...product, "data-astro-cid-3ep4br4u": true })}`)} </div>`} </section>  `;
}, "/Users/sujaykumar/Documents/GitHub/108medz/mahakali-webiste/src/components/Products/ProductGrid.astro", void 0);

const $$Astro = createAstro("https://mahakalihomefurnitures.com");
const prerender = false;
const $$category = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$category;
  const slug = Astro2.params.category ?? "";
  const category = getCategoryBySlug(slug);
  if (!category) {
    return Astro2.redirect("/products");
  }
  const [products, countsList] = await Promise.all([
    getProductsByCategory(category),
    getCategoryCounts()
  ]);
  const counts = Object.fromEntries(countsList.map((c) => [c.id, c.count]));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": category.name, "description": category.description, "image": category.heroImage, "path": `/products/${category.slug}`, "data-astro-cid-u4mlytlj": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="collection-page" data-astro-cid-u4mlytlj> ${renderComponent($$result2, "CollectionHero", $$CollectionHero, { "label": category.eyebrow, "title": category.name, "description": category.description, "image": category.heroImage, "data-astro-cid-u4mlytlj": true })} <div class="content-wrapper" data-astro-cid-u4mlytlj> <div class="sidebar-column" data-astro-cid-u4mlytlj> ${renderComponent($$result2, "ProductSidebar", $$ProductSidebar, { "counts": counts, "activeSlug": category.slug, "data-astro-cid-u4mlytlj": true })} </div> <div class="main-column" data-astro-cid-u4mlytlj> ${renderComponent($$result2, "ProductToolbar", $$ProductToolbar, { "categoryName": category.name, "totalResults": products.length, "data-astro-cid-u4mlytlj": true })} ${renderComponent($$result2, "ProductGrid", $$ProductGrid, { "products": products, "emptyTitle": `No ${category.name.toLowerCase()} listed yet`, "emptyCopy": "Once WooCommerce credentials are in place, this collection will load live from the store.", "data-astro-cid-u4mlytlj": true })} </div> </div> ${renderComponent($$result2, "CollectionCTA", $$CollectionCTA, { "data-astro-cid-u4mlytlj": true })} </main> ` })} `;
}, "/Users/sujaykumar/Documents/GitHub/108medz/mahakali-webiste/src/pages/products/[category].astro", void 0);

const $$file = "/Users/sujaykumar/Documents/GitHub/108medz/mahakali-webiste/src/pages/products/[category].astro";
const $$url = "/products/[category]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$category,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
