import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DPSnU3bI.mjs';
import 'kleur/colors';
import { $ as $$Layout, c as categoryPath } from '../chunks/Layout_DoOydEG6.mjs';
import { $ as $$CollectionHero, a as $$ProductSidebar, b as $$CollectionCTA } from '../chunks/ProductSidebar_CwJ6toBk.mjs';
import { g as getCategoryCounts } from '../chunks/catalog_C9AssR4b.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const countsList = await getCategoryCounts();
  const counts = Object.fromEntries(countsList.map((c) => [c.id, c.count]));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Furniture Collections", "description": "Browse Mahakali's wooden sofas, cots, dining sets, tepoys and upholstered seating \u2014 live from the showroom catalog.", "path": "/products", "data-astro-cid-ttgomkr6": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="collection-page" data-astro-cid-ttgomkr6> ${renderComponent($$result2, "CollectionHero", $$CollectionHero, { "label": "The atelier", "title": "Every collection, under one roof", "description": "Ten workshops of seating, dining and rest \u2014 each piece finished in Udupi and waiting in our showrooms.", "image": "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1800&q=80", "data-astro-cid-ttgomkr6": true })} <div class="content-wrapper" data-astro-cid-ttgomkr6> <div class="sidebar-column" data-astro-cid-ttgomkr6> ${renderComponent($$result2, "ProductSidebar", $$ProductSidebar, { "counts": counts, "data-astro-cid-ttgomkr6": true })} </div> <div class="main-column" data-astro-cid-ttgomkr6> <div class="category-mosaic" data-astro-cid-ttgomkr6> ${countsList.map((category) => renderTemplate`<a${addAttribute(categoryPath(category.slug), "href")} class="mosaic-card" data-astro-cid-ttgomkr6> <img${addAttribute(category.heroImage, "src")} alt="" data-astro-cid-ttgomkr6> <span class="mosaic-copy" data-astro-cid-ttgomkr6> <small data-astro-cid-ttgomkr6>${category.eyebrow}</small> <strong class="font-display" data-astro-cid-ttgomkr6>${category.name}</strong> <em data-astro-cid-ttgomkr6>${category.count} ${category.count === 1 ? "piece" : "pieces"}</em> </span> </a>`)} </div> </div> </div> ${renderComponent($$result2, "CollectionCTA", $$CollectionCTA, { "data-astro-cid-ttgomkr6": true })} </main> ` })} `;
}, "/Users/sujaykumar/Documents/GitHub/108medz/mahakali-webiste/src/pages/products/index.astro", void 0);

const $$file = "/Users/sujaykumar/Documents/GitHub/108medz/mahakali-webiste/src/pages/products/index.astro";
const $$url = "/products";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
