# Mahakali Home Furnitures — Astro Rebuild

A from-scratch redesign of the Mahakali homepage: same content and information
architecture as the original site, new "Carved Warmth" visual language
(burnt terracotta + brass on linen, chamfered/cut-corner cards referencing
joinery, a wood-grain divider as the signature motif). Built with **Astro**,
**WooCommerce** for the live catalog, and **Motion** (Framer) for animation.

## Run it

```bash
cp .env.example .env   # then fill WooCommerce keys
npm install
npm run dev            # http://localhost:4321
npm run build          # SSR build → dist/
npm start              # HOST=0.0.0.0 node ./dist/server/entry.mjs
```

## WooCommerce

Copy `.env.example` to `.env` and replace the placeholders:

| Variable | What it is |
| --- | --- |
| `WOOCOMMERCE_URL` | WordPress store origin, no trailing slash |
| `WOOCOMMERCE_CONSUMER_KEY` | REST key (`ck_…`) with **Read** access |
| `WOOCOMMERCE_CONSUMER_SECRET` | REST secret (`cs_…`) |
| `PUBLIC_SITE_URL` | Canonical public site URL |
| `PUBLIC_WHATSAPP_NUMBER` | Enquiry number, digits with country code |

Category IDs are mapped in `src/lib/woocommerce/categories.ts`.
Product URLs are `/products/{category}/{slug}`.

## Folder structure

```
src/
├── data/                 ← DATA LAYER — every section reads from here.
│   ├── site.ts           ← global: nav, top bar, branches, footer links
│   └── home.ts            ← homepage-only: hero, categories, promos,
│                             deal banner, product lists, gallery,
│                             testimonials, blog, instagram
├── layouts/
│   └── Layout.astro      ← <head> SEO tags, OG/Twitter cards, JSON-LD
│                             FurnitureStore schema, global CSS + scripts
├── components/
│   ├── Header.astro       AboutSection.astro     Gallery.astro
│   ├── Footer.astro       DealBanner.astro        Testimonials.astro
│   ├── Hero.astro         ProductLists.astro      BlogSection.astro
│   ├── TopCategories.astro TrustBar.astro         InstagramStrip.astro
│   ├── PromoStrip.astro   WhyChooseUs.astro
│   ├── TrendingBanner.astro
│   ├── Icon.astro         ← single inline-SVG icon set, used everywhere
│   ├── StarRating.astro   ← shared rating widget
│   └── GrainDivider.astro ← signature wood-grain section divider
├── scripts/
│   ├── motion-reveal.js  ← Motion (Framer) scroll reveals
│   └── carousel.js       ← vanilla scroll-snap carousel (dots + arrows)
├── styles/
│   └── global.css        ← design tokens, reset, type scale, buttons,
│                             chamfer-card, carousel base, reveal system
└── pages/
    └── index.astro        ← assembles the sections above for "/"
```

### Why this shape

- **One data file per page** (`home.ts`), plus one **shared** file
  (`site.ts`) for things every page needs (nav, footer, contact, branches).
  Add `about.ts`, `products.ts`, etc. the same way as you build more pages —
  components stay dumb and only render what they're given as props.
- **Every component is self-contained**: its markup, scoped `<style>`, and
  (where needed) a small inline `<script>` live in one `.astro` file. No
  global class soup — Astro scopes component CSS automatically.
- **Two small vanilla-JS engines** power all motion:
  - `data-reveal="fade|left|right|scale"` on any element + `data-reveal-group`
    on its wrapper → scroll-triggered reveal with automatic stagger.
  - `.carousel` + `.carousel__viewport` → scroll-snap carousel with
    generated dots, prev/next buttons, optional `data-autoplay="ms"`.
  Both respect `prefers-reduced-motion`.

## SEO built in

- Unique `<title>` / meta description per page via `Layout.astro` props.
- Canonical URL, Open Graph + Twitter card tags, `theme-color`.
- `FurnitureStore` JSON-LD structured data (address, phone, price range).
- Semantic landmarks (`header`, `main`, `section`, `footer`), one `<h1>`
  per page, descriptive `alt` text on every image, `loading="lazy"` on
  below-the-fold images and `fetchpriority="high"` on the hero image.
- `public/robots.txt` with a sitemap pointer — wire up `@astrojs/sitemap`
  when you add more pages.

## Content parity with the original

Every section from the reference screenshot is present, just restyled:
top bar + mega nav, hero, top categories, 3 promo banners, trending/huge-sale
banner, trust bar (delivery/refund/payment/support), "Why Choose Us",
"About Us" with the 28-years badge, best-deal spotlight, On Sale / Best
Seller / Top Rated columns, photo gallery, testimonials, latest blog post,
and an Instagram strip. Swap the Unsplash placeholders in `data/home.ts`
for real product/store photography before launch.
