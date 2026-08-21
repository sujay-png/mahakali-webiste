// Lightweight scroll-snap carousel controller.
// Works on any `.carousel` root containing a `.carousel__viewport`
// (the scrollable element) with card children. Prev/next buttons and
// dots are optional and auto-wired by data-attributes.
//
// Markup contract:
// <div class="carousel" data-autoplay="6000">
//   <div class="carousel__viewport"> ...cards... </div>
//   <div class="carousel__controls">
//     <button data-action="prev">...</button>
//     <div class="carousel__dots"></div>
//     <button data-action="next">...</button>
//   </div>
// </div>

function setupCarousel(root) {
  if (root.closest('.gallery')) return;
  if (root.dataset.carouselInitialized === 'true') return;
  root.dataset.carouselInitialized = 'true';

  const viewport = root.querySelector('.carousel__viewport');
  if (!viewport) return;

  const cards = Array.from(viewport.children);
  if (cards.length === 0) return;

  const dotsWrap = root.querySelector('.carousel__dots');
  const prevBtn = root.querySelector('[data-action="prev"]');
  const nextBtn = root.querySelector('[data-action="next"]');

  function cardStep() {
    const card = cards[0];
    if (!card) return 0;
    const style = getComputedStyle(viewport);
    const gap = parseFloat(style.columnGap || style.gap || '0') || 0;
    return card.getBoundingClientRect().width + gap;
  }

  function pageCount() {
    return cards.length;
  }

  function currentPage() {
    const step = cardStep();
    if (!step) return 0;
    return Math.round(viewport.scrollLeft / step);
  }

  function buildDots() {
    if (!dotsWrap) return;
    dotsWrap.innerHTML = '';
    const pages = pageCount();
    for (let i = 0; i < pages; i++) {
      const dot = document.createElement('button');
      dot.className = 'carousel__dot';
      dot.type = 'button';
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', () => goToPage(i));
      dotsWrap.appendChild(dot);
    }
    syncDots();
  }

  function syncDots() {
    if (!dotsWrap) return;
    const active = currentPage();
    Array.from(dotsWrap.children).forEach((dot, i) => {
      dot.classList.toggle('is-active', i === active);
    });
  }

  function goToPage(page) {
    const maxPage = Math.max(0, pageCount() - 1);
    const safePage = Math.max(0, Math.min(page, maxPage));
    viewport.scrollTo({
      left: safePage * cardStep(),
      behavior: 'smooth'
    });
  }

  function move(direction) {
    const totalPages = pageCount();
    const page = (currentPage() + direction + totalPages) % totalPages;
    goToPage(page);
  }

  nextBtn && nextBtn.addEventListener('click', () => move(1));
  prevBtn && prevBtn.addEventListener('click', () => move(-1));

  let scrollTimer;
  viewport.addEventListener('scroll', () => {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(syncDots, 90);
  }, { passive: true });

  window.addEventListener('resize', () => buildDots());

  buildDots();

  const autoplayMs = Number(root.dataset.autoplay || 0);
  if (autoplayMs > 0) {
    let timer = setInterval(() => move(1), autoplayMs);
    root.addEventListener('mouseenter', () => clearInterval(timer));
    root.addEventListener('mouseleave', () => {
      timer = setInterval(() => move(1), autoplayMs);
    });
  }
}

function initCarousels() {
  document.querySelectorAll('.carousel').forEach(setupCarousel);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCarousels);
} else {
  initCarousels();
}

document.addEventListener('astro:page-load', initCarousels);
