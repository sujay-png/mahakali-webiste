import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent } from './astro/server_DPSnU3bI.mjs';
import 'kleur/colors';
import 'clsx';
import { a as $$Icon, C as CATALOG_CATEGORIES, c as categoryPath } from './Layout_DoOydEG6.mjs';
/* empty css                              */

const $$Astro$1 = createAstro("https://mahakalihomefurnitures.com");
const $$CollectionHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CollectionHero;
  const { label, title, description, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="page-hero"${addAttribute(title, "aria-label")}> <img${addAttribute(image, "src")} alt=""> <div class="veil"></div> <div class="wrap copy"> <p class="eyebrow light">${label}</p> <h1>${title}</h1> <p>${description}</p> </div> </section>`;
}, "/Users/sujaykumar/Documents/GitHub/108medz/mahakali-webiste/src/components/Products/CollectionHero.astro", void 0);

const $$CollectionCTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="cta" data-astro-cid-mvc3ojvm> <div class="wrap" data-astro-cid-mvc3ojvm> <p class="eyebrow" data-astro-cid-mvc3ojvm>Bespoke</p> <h2 data-astro-cid-mvc3ojvm>Commission a piece made for your room.</h2> <p data-astro-cid-mvc3ojvm>If the collection is close but not exact, our workshop can tailor upholstery, timber and dimensions.</p> <a href="/contact" class="btn btn-primary" data-astro-cid-mvc3ojvm>Bespoke consultation ${renderComponent($$result, "Icon", $$Icon, { "name": "arrow-right", "data-astro-cid-mvc3ojvm": true })}</a> </div> </section> `;
}, "/Users/sujaykumar/Documents/GitHub/108medz/mahakali-webiste/src/components/Products/CollectionCTA.astro", void 0);

const $$Astro = createAstro("https://mahakalihomefurnitures.com");
const $$ProductSidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProductSidebar;
  const { counts = {}, activeSlug } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<aside class="product-sidebar" data-astro-cid-kxrku2in> <div class="widget" data-astro-cid-kxrku2in> <p class="eyebrow" data-astro-cid-kxrku2in>Look up</p> <h4 class="widget-title font-display" data-astro-cid-kxrku2in>Search this page</h4> <div class="search-input-wrap" data-astro-cid-kxrku2in> <input type="text" placeholder="Search by name" class="search-input" id="product-search-input" data-astro-cid-kxrku2in> ${renderComponent($$result, "Icon", $$Icon, { "name": "search", "class": "search-icon", "data-astro-cid-kxrku2in": true })} </div> </div> <div class="widget" data-astro-cid-kxrku2in> <p class="eyebrow" data-astro-cid-kxrku2in>Atelier</p> <h4 class="widget-title font-display" data-astro-cid-kxrku2in>Collections</h4> <ul class="category-list" data-astro-cid-kxrku2in> <li data-astro-cid-kxrku2in> <a href="/products"${addAttribute(`category-item ${!activeSlug ? "is-active" : ""}`, "class")} data-astro-cid-kxrku2in> <span class="cat-name" data-astro-cid-kxrku2in>All collections</span> </a> </li> ${CATALOG_CATEGORIES.map((cat) => renderTemplate`<li data-astro-cid-kxrku2in> <a${addAttribute(categoryPath(cat.slug), "href")}${addAttribute(`category-item ${activeSlug === cat.slug ? "is-active" : ""}`, "class")} data-astro-cid-kxrku2in> <span class="cat-name" data-astro-cid-kxrku2in>${cat.navLabel}</span> <span class="cat-count" data-astro-cid-kxrku2in>${counts[cat.id] ?? "\u2014"}</span> </a> </li>`)} </ul> </div> </aside> `;
}, "/Users/sujaykumar/Documents/GitHub/108medz/mahakali-webiste/src/components/Products/ProductSidebar.astro", void 0);

export { $$CollectionHero as $, $$ProductSidebar as a, $$CollectionCTA as b };
