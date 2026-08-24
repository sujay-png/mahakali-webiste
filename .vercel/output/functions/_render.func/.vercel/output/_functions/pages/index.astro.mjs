import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_DPSnU3bI.mjs';
import 'kleur/colors';
import { a as $$Icon, C as CATALOG_CATEGORIES, $ as $$Layout } from '../chunks/Layout_DoOydEG6.mjs';
/* empty css                                 */
import 'clsx';
import { e as getHomeShelves } from '../chunks/catalog_C9AssR4b.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$a = createAstro("https://mahakalihomefurnitures.com");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Hero;
  const { slides } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="hero" id="hero-section" data-astro-cid-ocrortkz> <div class="panel" data-astro-cid-ocrortkz> ${slides.map((slide, index) => renderTemplate`<article${addAttribute(`slide ${index === 0 ? "is-active" : ""}`, "class")}${addAttribute(index, "data-index")} data-astro-cid-ocrortkz> <div class="copy" data-astro-cid-ocrortkz> <span class="badge" data-astro-cid-ocrortkz>${slide.eyebrow}</span> <h1 data-astro-cid-ocrortkz> ${slide.title} <em data-astro-cid-ocrortkz>${slide.titleAccent}</em> </h1> <p class="lede" data-astro-cid-ocrortkz>${slide.copy}</p> <div class="actions" data-astro-cid-ocrortkz> <a${addAttribute(slide.ctaPrimary.href, "href")} class="btn btn-primary" data-astro-cid-ocrortkz> ${slide.ctaPrimary.label} ${renderComponent($$result, "Icon", $$Icon, { "name": "arrow-right", "data-astro-cid-ocrortkz": true })} </a> <a${addAttribute(slide.ctaSecondary.href, "href")} class="btn btn-ghost-light" data-astro-cid-ocrortkz> ${slide.ctaSecondary.label} ${renderComponent($$result, "Icon", $$Icon, { "name": "arrow-right", "data-astro-cid-ocrortkz": true })} </a> </div> </div> <div class="stage" data-astro-cid-ocrortkz> <span class="blob" aria-hidden="true" data-astro-cid-ocrortkz></span> <img class="product"${addAttribute(slide.image.src, "src")}${addAttribute(slide.image.alt, "alt")}${addAttribute(index === 0 ? "high" : "low", "fetchpriority")} data-astro-cid-ocrortkz> </div> </article>`)} <div class="pager" data-astro-cid-ocrortkz> ${slides.map((_, index) => renderTemplate`<button${addAttribute(index === 0 ? "is-active" : "", "class")}${addAttribute(index, "data-index")}${addAttribute(`Slide ${index + 1}`, "aria-label")} data-astro-cid-ocrortkz></button>`)} </div> <div class="arrows" data-astro-cid-ocrortkz> <button type="button" data-dir="-1" aria-label="Previous slide" data-astro-cid-ocrortkz>${renderComponent($$result, "Icon", $$Icon, { "name": "chevron-left", "data-astro-cid-ocrortkz": true })}</button> <button type="button" data-dir="1" aria-label="Next slide" data-astro-cid-ocrortkz>${renderComponent($$result, "Icon", $$Icon, { "name": "chevron-right", "data-astro-cid-ocrortkz": true })}</button> </div> </div> </section>  `;
}, "/Users/sujaykumar/Documents/GitHub/108medz/mahakali-webiste/src/components/Home/Hero.astro", void 0);

const $$Astro$9 = createAstro("https://mahakalihomefurnitures.com");
const $$TopCategories = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$TopCategories;
  const { data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="collections" data-astro-cid-lar6i6tz> <div class="wrap wrap--wide" data-astro-cid-lar6i6tz> <div class="head" data-astro-cid-lar6i6tz> <div data-astro-cid-lar6i6tz> <p class="eyebrow" data-astro-cid-lar6i6tz>${data.eyebrow}</p> <h2 data-astro-cid-lar6i6tz>${data.title}</h2> </div> <a${addAttribute(data.viewAllHref, "href")} class="link-arrow" data-astro-cid-lar6i6tz>All collections ${renderComponent($$result, "Icon", $$Icon, { "name": "arrow-right", "data-astro-cid-lar6i6tz": true })}</a> </div> <ul class="index" data-astro-cid-lar6i6tz> ${data.items.map((item, i) => renderTemplate`<li data-astro-cid-lar6i6tz> <a${addAttribute(item.href, "href")} class="item" data-astro-cid-lar6i6tz> <span class="media" data-media data-astro-cid-lar6i6tz> <img${addAttribute(item.image, "src")}${addAttribute(item.name, "alt")} loading="lazy" data-astro-cid-lar6i6tz> </span> <span class="meta" data-astro-cid-lar6i6tz> <small data-astro-cid-lar6i6tz>${String(i + 1).padStart(2, "0")}</small> <strong class="font-display" data-astro-cid-lar6i6tz>${item.name}</strong> </span> </a> </li>`)} </ul> </div> </section> `;
}, "/Users/sujaykumar/Documents/GitHub/108medz/mahakali-webiste/src/components/Home/TopCategories.astro", void 0);

const $$Astro$8 = createAstro("https://mahakalihomefurnitures.com");
const $$PromoStrip = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$PromoStrip;
  const { data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="offers section" data-astro-cid-f4ieuv4v> <div class="wrap wrap--wide bento-grid" data-astro-cid-f4ieuv4v> ${data.map((promo, i) => renderTemplate`<a${addAttribute(promo.cta.href, "href")}${addAttribute(`bento-card bento-card--${i + 1}`, "class")} data-reveal="fade" data-astro-cid-f4ieuv4v> <div class="bg-image"${addAttribute(`background-image: url('${promo.image}')`, "style")} data-astro-cid-f4ieuv4v></div> <div class="content" data-astro-cid-f4ieuv4v> <small data-astro-cid-f4ieuv4v>${promo.tag}</small> <strong class="font-display" data-astro-cid-f4ieuv4v>${promo.title}</strong> <span class="link-arrow" data-astro-cid-f4ieuv4v>${promo.cta.label} ${renderComponent($$result, "Icon", $$Icon, { "name": "arrow-right", "data-astro-cid-f4ieuv4v": true })}</span> </div> </a>`)} </div> </section> `;
}, "/Users/sujaykumar/Documents/GitHub/108medz/mahakali-webiste/src/components/Home/PromoStrip.astro", void 0);

const $$Astro$7 = createAstro("https://mahakalihomefurnitures.com");
const $$TrustBar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$TrustBar;
  const { data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="trust" data-astro-cid-ehmcr3i5> <div class="wrap line" data-astro-cid-ehmcr3i5> ${data.map((item) => renderTemplate`<p data-astro-cid-ehmcr3i5><strong data-astro-cid-ehmcr3i5>${item.title}</strong><span data-astro-cid-ehmcr3i5>${item.copy}</span></p>`)} </div> </section> `;
}, "/Users/sujaykumar/Documents/GitHub/108medz/mahakali-webiste/src/components/Home/TrustBar.astro", void 0);

const $$Astro$6 = createAstro("https://mahakalihomefurnitures.com");
const $$WhyChooseUs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$WhyChooseUs;
  const { data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section why" data-astro-cid-vioth5vx> <div class="wrap wrap--wide why__grid" data-astro-cid-vioth5vx> <div data-reveal="fade" data-astro-cid-vioth5vx> <p class="eyebrow" data-astro-cid-vioth5vx>${data.eyebrow}</p> <h2 data-astro-cid-vioth5vx>Crafted for everyday living.</h2> <p class="lead" data-astro-cid-vioth5vx>${data.copy}</p> </div> <ol data-reveal-group data-astro-cid-vioth5vx> ${data.points.map((point, i) => renderTemplate`<li data-reveal="fade" data-astro-cid-vioth5vx> <span data-astro-cid-vioth5vx>0${i + 1}</span> <div data-astro-cid-vioth5vx> <h3 data-astro-cid-vioth5vx>${point.title}</h3> <p data-astro-cid-vioth5vx>${point.copy}</p> </div> </li>`)} </ol> </div> </section> `;
}, "/Users/sujaykumar/Documents/GitHub/108medz/mahakali-webiste/src/components/Home/WhyChooseUs.astro", void 0);

const $$Astro$5 = createAstro("https://mahakalihomefurnitures.com");
const $$AboutSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$AboutSection;
  const { data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section about" data-astro-cid-2x3ktyxr> <div class="wrap wrap--wide about__grid" data-astro-cid-2x3ktyxr> <div class="visual" data-reveal-group data-astro-cid-2x3ktyxr> <figure data-media class="img-1" data-reveal="fade" data-astro-cid-2x3ktyxr> <img${addAttribute(data.images[0].src, "src")}${addAttribute(data.images[0].alt, "alt")} loading="lazy" data-astro-cid-2x3ktyxr> </figure> <figure data-media class="img-2" data-reveal="up" data-astro-cid-2x3ktyxr> <img${addAttribute(data.images[1].src, "src")}${addAttribute(data.images[1].alt, "alt")} loading="lazy" data-astro-cid-2x3ktyxr> </figure> <figure data-media class="img-3" data-reveal="down" data-astro-cid-2x3ktyxr> <img${addAttribute(data.images[2].src, "src")}${addAttribute(data.images[2].alt, "alt")} loading="lazy" data-astro-cid-2x3ktyxr> </figure> <div class="experience-badge" data-reveal="fade" data-astro-cid-2x3ktyxr> <span class="font-display" data-astro-cid-2x3ktyxr>28</span> <small data-astro-cid-2x3ktyxr>Years Of<br data-astro-cid-2x3ktyxr>Experience</small> </div> </div> <div class="copy" data-reveal="fade" data-astro-cid-2x3ktyxr> <p class="eyebrow" data-astro-cid-2x3ktyxr>${data.eyebrow}</p> <h2 data-astro-cid-2x3ktyxr> ${data.title} <br data-astro-cid-2x3ktyxr> <em class="accent" data-astro-cid-2x3ktyxr>${data.titleAccent}</em><br data-astro-cid-2x3ktyxr> <span class="tail" data-astro-cid-2x3ktyxr>${data.titleTail}</span> </h2> <p class="lead" data-astro-cid-2x3ktyxr>${data.copy}</p> <ul class="bullets" data-astro-cid-2x3ktyxr> ${data.bullets.map((b) => renderTemplate`<li data-astro-cid-2x3ktyxr>${renderComponent($$result, "Icon", $$Icon, { "name": "check", "class": "icon-sm", "data-astro-cid-2x3ktyxr": true })} ${b}</li>`)} </ul> <a class="btn btn-primary btn-outline"${addAttribute(data.cta.href, "href")} data-astro-cid-2x3ktyxr>${data.cta.label}</a> </div> </div> </section> `;
}, "/Users/sujaykumar/Documents/GitHub/108medz/mahakali-webiste/src/components/Home/AboutSection.astro", void 0);

const $$Astro$4 = createAstro("https://mahakalihomefurnitures.com");
const $$DealBanner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$DealBanner;
  const { data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="deal section" data-astro-cid-n6k4unhz> <div class="deal-container wrap wrap--wide" data-reveal-group data-astro-cid-n6k4unhz> <div class="deal-bg" data-reveal="fade" data-astro-cid-n6k4unhz></div> <div class="content-wrapper" data-astro-cid-n6k4unhz> <div class="copy" data-reveal="up" data-astro-cid-n6k4unhz> <p class="eyebrow" data-astro-cid-n6k4unhz>${data.eyebrow}</p> <h2 class="font-display" data-astro-cid-n6k4unhz>${data.title}</h2> <p class="desc" data-astro-cid-n6k4unhz>${data.copy}</p> <div class="features" data-astro-cid-n6k4unhz> ${data.features.map((f) => renderTemplate`<span data-astro-cid-n6k4unhz>${renderComponent($$result, "Icon", $$Icon, { "name": "check", "class": "icon-sm", "data-astro-cid-n6k4unhz": true })} ${f}</span>`)} </div> <div class="price-action" data-astro-cid-n6k4unhz> <div class="price" data-astro-cid-n6k4unhz> <b data-astro-cid-n6k4unhz>${data.price}</b> <s data-astro-cid-n6k4unhz>${data.oldPrice}</s> </div> <a class="btn btn-primary btn-large"${addAttribute(data.cta.href, "href")} data-astro-cid-n6k4unhz> ${data.cta.label} ${renderComponent($$result, "Icon", $$Icon, { "name": "arrow-right", "data-astro-cid-n6k4unhz": true })} </a> </div> </div> <div class="visual" data-reveal="fade" data-astro-cid-n6k4unhz> <div class="image-wrapper" data-astro-cid-n6k4unhz> <img${addAttribute(data.productImage, "src")}${addAttribute(data.title, "alt")} loading="lazy" data-astro-cid-n6k4unhz> <div class="discount-badge" data-astro-cid-n6k4unhz>Save<br data-astro-cid-n6k4unhz>10%</div> </div> </div> </div> </div> </section> `;
}, "/Users/sujaykumar/Documents/GitHub/108medz/mahakali-webiste/src/components/Home/DealBanner.astro", void 0);

const $$Astro$3 = createAstro("https://mahakalihomefurnitures.com");
const $$StarRating = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$StarRating;
  const { rating, max = 5 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span class="stars" role="img"${addAttribute(`Rated ${rating} out of ${max}`, "aria-label")}> ${Array.from({ length: max }).map((_, i) => renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "star", "class": i < rating ? "" : "is-empty" })}`)} </span>`;
}, "/Users/sujaykumar/Documents/GitHub/108medz/mahakali-webiste/src/components/global/UI/StarRating.astro", void 0);

const $$Astro$2 = createAstro("https://mahakalihomefurnitures.com");
const $$ProductLists = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProductLists;
  const { data } = Astro2.props;
  const columns = [data.onSale, data.bestSeller, data.topRated];
  return renderTemplate`${maybeRenderHead()}<section class="section shelves" data-astro-cid-33ujdhek> <div class="wrap wrap--wide grid" data-astro-cid-33ujdhek> ${columns.map((col) => renderTemplate`<div data-astro-cid-33ujdhek> <p class="eyebrow" data-astro-cid-33ujdhek>${col.title}</p> ${col.items.length > 0 ? renderTemplate`<ul data-astro-cid-33ujdhek> ${col.items.map((item) => renderTemplate`<li data-astro-cid-33ujdhek> <a${addAttribute(item.href || "/products", "href")} data-astro-cid-33ujdhek> <span data-media class="thumb" data-astro-cid-33ujdhek> <img${addAttribute(item.image, "src")}${addAttribute(item.name, "alt")} loading="lazy" data-astro-cid-33ujdhek> </span> <span data-astro-cid-33ujdhek> <strong data-astro-cid-33ujdhek>${item.name}</strong> ${renderComponent($$result, "StarRating", $$StarRating, { "rating": item.rating, "data-astro-cid-33ujdhek": true })} <em data-astro-cid-33ujdhek>${item.price}${item.oldPrice && renderTemplate`<s data-astro-cid-33ujdhek>${item.oldPrice}</s>`}</em> </span> </a> </li>`)} </ul>` : renderTemplate`<p class="empty" data-astro-cid-33ujdhek>${col.emptyMessage}</p>`} </div>`)} </div> </section> `;
}, "/Users/sujaykumar/Documents/GitHub/108medz/mahakali-webiste/src/components/Home/ProductLists.astro", void 0);

const $$Astro$1 = createAstro("https://mahakalihomefurnitures.com");
const $$Gallery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Gallery;
  const { data } = Astro2.props;
  const rowA = [...data.images, ...data.images];
  const rowB = [...data.images.slice().reverse(), ...data.images.slice().reverse()];
  return renderTemplate`${maybeRenderHead()}<section class="section gallery" data-astro-cid-bsfwsg5s> <div class="wrap wrap--wide" data-astro-cid-bsfwsg5s> <div class="row-head" data-astro-cid-bsfwsg5s> <div data-astro-cid-bsfwsg5s> <p class="eyebrow" data-astro-cid-bsfwsg5s>${data.eyebrow}</p> <h2 data-astro-cid-bsfwsg5s>${data.title} <em class="accent" data-astro-cid-bsfwsg5s>${data.titleAccent}</em></h2> </div> <a href="/gallery" class="link-arrow" data-astro-cid-bsfwsg5s>Open gallery</a> </div> </div> <div class="gallery-marquee" aria-label="Photo gallery" data-astro-cid-bsfwsg5s> <div class="marquee marquee--slow" data-astro-cid-bsfwsg5s> <div class="marquee__track" data-astro-cid-bsfwsg5s> ${rowA.map((img, i) => renderTemplate`<a href="/gallery"${addAttribute(`frame frame--${i % 3 + 1}`, "class")}${addAttribute(i >= data.images.length ? "true" : void 0, "aria-hidden")}${addAttribute(i >= data.images.length ? -1 : void 0, "tabindex")} data-astro-cid-bsfwsg5s> <img${addAttribute(img.src, "src")}${addAttribute(i >= data.images.length ? "" : img.alt, "alt")} loading="lazy" data-astro-cid-bsfwsg5s> </a>`)} </div> </div> <div class="marquee marquee--slow marquee--reverse" data-astro-cid-bsfwsg5s> <div class="marquee__track" data-astro-cid-bsfwsg5s> ${rowB.map((img, i) => renderTemplate`<a href="/gallery"${addAttribute(`frame frame--${(i + 1) % 3 + 1}`, "class")}${addAttribute(i >= data.images.length ? "true" : void 0, "aria-hidden")}${addAttribute(i >= data.images.length ? -1 : void 0, "tabindex")} data-astro-cid-bsfwsg5s> <img${addAttribute(img.src, "src")} alt="" loading="lazy" data-astro-cid-bsfwsg5s> </a>`)} </div> </div> </div> </section> `;
}, "/Users/sujaykumar/Documents/GitHub/108medz/mahakali-webiste/src/components/Home/Gallery.astro", void 0);

const $$Astro = createAstro("https://mahakalihomefurnitures.com");
const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Testimonials;
  const { data } = Astro2.props;
  const loop = [...data.items, ...data.items];
  return renderTemplate`${maybeRenderHead()}<section class="section quotes" data-astro-cid-tzybv76y> <div class="wrap wrap--wide" data-astro-cid-tzybv76y> <p class="eyebrow" data-astro-cid-tzybv76y>${data.eyebrow}</p> <h2 data-astro-cid-tzybv76y>${data.title} <em class="accent" data-astro-cid-tzybv76y>${data.titleAccent}</em></h2> </div> <div class="quote-marquee marquee marquee--slow" aria-label="Client testimonials" data-astro-cid-tzybv76y> <div class="marquee__track" data-astro-cid-tzybv76y> ${loop.map((t, i) => renderTemplate`<blockquote class="card"${addAttribute(i >= data.items.length ? "true" : void 0, "aria-hidden")} data-astro-cid-tzybv76y> <p data-astro-cid-tzybv76y>“${t.quote}”</p> <footer data-astro-cid-tzybv76y> <strong data-astro-cid-tzybv76y>${t.name}</strong> <span data-astro-cid-tzybv76y>${t.role}, Udupi</span> </footer> </blockquote>`)} </div> </div> </section> `;
}, "/Users/sujaykumar/Documents/GitHub/108medz/mahakali-webiste/src/components/Home/Testimonials.astro", void 0);

const $$ShowroomCTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="cta" data-astro-cid-pn6qmgh7> <div class="wrap" data-reveal="fade" data-astro-cid-pn6qmgh7> <p class="eyebrow light" data-astro-cid-pn6qmgh7>Come experience it</p> <h2 data-astro-cid-pn6qmgh7>Let’s create a space you’ll love coming home to.</h2> <p data-astro-cid-pn6qmgh7>Visit the Mahakali showrooms in Udupi and Kundapura — sit, feel the grain, and choose with our team beside you.</p> <div class="actions" data-astro-cid-pn6qmgh7> <a class="btn btn-primary" href="/contact" data-astro-cid-pn6qmgh7>Get in touch ${renderComponent($$result, "Icon", $$Icon, { "name": "arrow-right", "data-astro-cid-pn6qmgh7": true })}</a> <a class="btn btn-ghost-light" href="/about" data-astro-cid-pn6qmgh7>Our story</a> </div> </div> </section> `;
}, "/Users/sujaykumar/Documents/GitHub/108medz/mahakali-webiste/src/components/Home/ShowroomCTA.astro", void 0);

const categoryImage = (slug) => CATALOG_CATEGORIES.find((c) => c.slug === slug)?.heroImage ?? "";
const heroSlides = [
  {
    eyebrow: "Welcome to Mahakali!",
    title: "Transform your home with",
    titleAccent: "Mahakali Udupi",
    copy: "At Mahakali Udupi, every sofa, mattress and furnishing is designed with comfort, elegance and lasting quality — so your home feels as beautiful as it looks.",
    ctaPrimary: { label: "Shop Now", href: "/products" },
    ctaSecondary: { label: "Learn More", href: "/about" },
    image: {
      src: "https://mahakalihomefurnitures.com/assets/img/hero/01.png",
      alt: "Mahakali sofa"
    }
  },
  {
    eyebrow: "Welcome to Mahakali!",
    title: "Premium comfort with",
    titleAccent: "timeless style",
    copy: "Handcrafted sofas, wooden cots and curated curtains — modern designs meeting trusted craftsmanship for over 28 years.",
    ctaPrimary: { label: "Shop Now", href: "/products" },
    ctaSecondary: { label: "Learn More", href: "/about" },
    image: {
      src: "https://mahakalihomefurnitures.com/assets/img/hero/02.png",
      alt: "Mahakali tepoy and seating"
    }
  },
  {
    eyebrow: "Welcome to Mahakali!",
    title: "Furniture that transforms",
    titleAccent: "the way you live",
    copy: "From seating to dining and rest, we bring comfort, durability and beauty together for living spaces you will love coming home to.",
    ctaPrimary: { label: "Shop Now", href: "/products" },
    ctaSecondary: { label: "Learn More", href: "/about" },
    image: {
      src: "https://mahakalihomefurnitures.com/assets/img/hero/03.png",
      alt: "Mahakali lounge chair"
    }
  }
];
const topCategories = {
  eyebrow: "Collections",
  title: "Furniture for every room in the house.",
  viewAllHref: "/products",
  items: [
    { name: "Upholstered", count: "Collection", href: "/products/upholstered", image: categoryImage("upholstered") },
    { name: "Wooden Sofa", count: "Collection", href: "/products/wooden-sofa", image: categoryImage("wooden-sofa") },
    { name: "Wooden Cot", count: "Collection", href: "/products/wooden-cot", image: categoryImage("wooden-cot") },
    { name: "Wooden Jhoola", count: "Collection", href: "/products/wooden-jhoola", image: categoryImage("wooden-jhoola") },
    { name: "Dining + Glass Top", count: "Collection", href: "/products/wooden-dining-glass-4-3", image: categoryImage("wooden-dining-glass-4-3") },
    { name: "Tepoy", count: "Collection", href: "/products/tepoy", image: categoryImage("tepoy") }
  ]
};
const promoStrip = [
  {
    tag: "Premium Tepoy",
    title: "Elegant Tepoy Collections",
    cta: { label: "Shop Now", href: "/products/tepoy" },
    theme: "blush",
    image: categoryImage("tepoy")
  },
  {
    tag: "Hot Sale",
    title: "Premium Sofa Sale Collections",
    cta: { label: "Discover Now", href: "/products/upholstered" },
    theme: "sand",
    image: categoryImage("upholstered")
  },
  {
    tag: "Best Cot",
    title: "Premium Cot Collections",
    cta: { label: "Discover Now", href: "/products/wooden-cot" },
    theme: "sky",
    image: categoryImage("wooden-cot")
  }
];
const trustBar = [
  { icon: "truck", title: "Free Delivery", copy: "For any order" },
  { icon: "refresh", title: "No Refund", copy: "There is no refund" },
  { icon: "shield", title: "Safe Payment", copy: "100% secure payment" },
  { icon: "headset", title: "9:30 AM – 7:00 PM", copy: "Feel free to call us" }
];
const whyChooseUs = {
  eyebrow: "Why Choose Us",
  title: "Trusted for 28+ years in comfort, style & quality",
  copy: "Mahakali Sofas & Curtains is Udupi's most trusted destination for premium sofas, mattresses, curtains and custom furniture. We provide long-lasting quality, modern designs, and a smooth shopping experience trusted by thousands of customers.",
  image: {
    src: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=80",
    alt: "Beige corner sofa set styled in a bright living room"
  },
  points: [
    { icon: "medal", title: "28+ Years Of Trust", copy: "Serving Udupi since 1997 with top-quality sofas, mattresses, curtains and custom furniture trusted by thousands of happy customers." },
    { icon: "tag", title: "Affordable Premium Quality", copy: "We offer modern, elegant and durable designs at prices that fit every budget — without compromising on material quality or comfort." },
    { icon: "van", title: "Home Delivery Available", copy: "Hassle-free delivery and installation on request, ensuring your furniture is safely set up exactly the way you want." }
  ]
};
const aboutSection = {
  eyebrow: "About Us",
  title: "Mahakali Sofas & Curtains",
  titleAccent: "Udupi's Most Trusted Name",
  titleTail: "For Comfort, Elegance & Timeless Living.",
  copy: "For over 28 years, we have been enhancing homes with premium sofas, cosy mattresses, beautiful curtains and customised furniture that perfectly blend comfort and style. Located near Adarsh Hospital in Brahmagiri, we are your reliable destination for quality home furnishings. Our products are crafted to last and our guidance ensures you choose what suits your lifestyle best.",
  bullets: [
    "Streamlined shopping experience",
    "Affordable modern design",
    "Competitive price & easy to shop",
    "We made awesome products"
  ],
  cta: { label: "Discover More", href: "/about" },
  badge: "28 Years Of Experience",
  images: [
    { src: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=700&q=80", alt: "Warm-toned living room styled by Mahakali interiors" },
    { src: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=500&q=80", alt: "Wooden coffee table detail" },
    { src: "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=500&q=80", alt: "Cosy furnished corner with dining set" }
  ]
};
const dealBanner = {
  eyebrow: "Best Deal",
  title: "Wooden L Corner Kerala Model",
  copy: "Get the best deal on premium furniture with the highest discount available today. Upgrade your home with comfort and style.",
  price: "₹38,250.00",
  oldPrice: "₹42,500.00",
  features: ["Best-seller product", "Premium quality materials", "Fast delivery available"],
  cta: { label: "View Product", href: "/products/wooden-l-corner-kerala" },
  productImage: "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=600&q=80"
};
const gallery = {
  eyebrow: "Our Gallery",
  title: "Let’s Check Our Photo",
  titleAccent: "Gallery",
  images: [
    { src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80", alt: "Brown sectional sofa in a sunlit living room" },
    { src: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=600&q=80", alt: "Handcrafted wooden side table" },
    { src: "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=600&q=80", alt: "Teal curtains styled beside an accent chair" },
    { src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80", alt: "Cream sofa with round coffee table" },
    { src: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=600&q=80", alt: "Wooden rocking chair detail" },
    { src: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=600&q=80", alt: "Beige sofa set on a red rug" }
  ]
};
const testimonials = {
  eyebrow: "Testimonials",
  title: "What Our Client",
  titleAccent: "Say's",
  items: [
    { name: "Shilpa Bhat", role: "Customer", rating: 5, quote: "I recently purchased a sofa set from them and the quality is excellent. The finish, comfort and fabric are exactly as shown. Their team kept me updated till delivery. Truly a satisfying experience." },
    { name: "Vishwanath Nayak", role: "Customer", rating: 5, quote: "Very good service and genuine pricing. I ordered a customised TV unit and the workmanship was perfect. The installation team was polite and cooperative. I will surely recommend them to others." },
    { name: "Raghavendra Bhat", role: "Customer", rating: 4, quote: "I loved their collection and how they guided me with measurements for my living room. They delivered on time and the furniture looks premium. I am very happy with the purchase and will surely buy again." }
  ]
};

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const shelves = await getHomeShelves();
  const liveProductLists = {
    onSale: {
      title: "On Sale",
      items: shelves.onSale,
      emptyMessage: "No sale pieces online right now \u2014 ask in-store."
    },
    bestSeller: {
      title: "Best Seller",
      items: shelves.bestSeller,
      emptyMessage: "Best sellers will appear once the catalog is connected."
    },
    topRated: {
      title: "Top Rated",
      items: shelves.topRated,
      emptyMessage: "Ratings sync from WooCommerce after keys are added."
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Mahakali Home Furnitures & Interiors | Premium Sofas, Cots & Curtains in Udupi", "description": "Udupi's most trusted furniture store since 1997. Handcrafted sofas, wooden cots, dining sets and curtains with free delivery and 28+ years of quality craftsmanship.", "path": "/" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, { "slides": heroSlides })} ${renderComponent($$result2, "TrustBar", $$TrustBar, { "data": trustBar })} ${renderComponent($$result2, "TopCategories", $$TopCategories, { "data": topCategories })} ${renderComponent($$result2, "PromoStrip", $$PromoStrip, { "data": promoStrip })} ${renderComponent($$result2, "WhyChooseUs", $$WhyChooseUs, { "data": whyChooseUs })} ${renderComponent($$result2, "AboutSection", $$AboutSection, { "data": aboutSection })} ${renderComponent($$result2, "DealBanner", $$DealBanner, { "data": dealBanner })} ${renderComponent($$result2, "ProductLists", $$ProductLists, { "data": liveProductLists })} ${renderComponent($$result2, "Gallery", $$Gallery, { "data": gallery })} ${renderComponent($$result2, "Testimonials", $$Testimonials, { "data": testimonials })} ${renderComponent($$result2, "ShowroomCTA", $$ShowroomCTA, {})} </main> ` })}`;
}, "/Users/sujaykumar/Documents/GitHub/108medz/mahakali-webiste/src/pages/index.astro", void 0);

const $$file = "/Users/sujaykumar/Documents/GitHub/108medz/mahakali-webiste/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
