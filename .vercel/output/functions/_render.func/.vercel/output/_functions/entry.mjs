import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_PxXF_2ac.mjs';
import { manifest } from './manifest_DYcN3U6d.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/contact.astro.mjs');
const _page3 = () => import('./pages/delivery-policy.astro.mjs');
const _page4 = () => import('./pages/faq.astro.mjs');
const _page5 = () => import('./pages/gallery.astro.mjs');
const _page6 = () => import('./pages/privacy.astro.mjs');
const _page7 = () => import('./pages/products/_category_/_slug_.astro.mjs');
const _page8 = () => import('./pages/products/_category_.astro.mjs');
const _page9 = () => import('./pages/products.astro.mjs');
const _page10 = () => import('./pages/returns.astro.mjs');
const _page11 = () => import('./pages/terms.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about/index.astro", _page1],
    ["src/pages/contact/index.astro", _page2],
    ["src/pages/delivery-policy/index.astro", _page3],
    ["src/pages/faq/index.astro", _page4],
    ["src/pages/gallery/index.astro", _page5],
    ["src/pages/privacy/index.astro", _page6],
    ["src/pages/products/[category]/[slug].astro", _page7],
    ["src/pages/products/[category].astro", _page8],
    ["src/pages/products/index.astro", _page9],
    ["src/pages/returns/index.astro", _page10],
    ["src/pages/terms/index.astro", _page11],
    ["src/pages/index.astro", _page12]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "808e74e2-2e5b-4905-9519-a1ca38e05f9f",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
