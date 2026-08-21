// Reveals any [data-reveal] element once it scrolls into view.
// Elements inside a [data-reveal-group] get an automatic stagger delay
// based on their order, via the --d CSS custom property.

function initScrollReveal() {
  const groups = document.querySelectorAll('[data-reveal-group]');
  groups.forEach((group) => {
    const children = group.querySelectorAll('[data-reveal]');
    children.forEach((el, i) => {
      el.style.setProperty('--d', `${Math.min(i * 0.09, 0.6)}s`);
    });
  });

  const targets = document.querySelectorAll('[data-reveal]');

  if (!('IntersectionObserver' in window) || targets.length === 0) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: '0px 0px -8% 0px' }
  );

  targets.forEach((el) => observer.observe(el));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollReveal);
} else {
  initScrollReveal();
}

// Re-run after Astro view transitions (safe no-op if not used)
document.addEventListener('astro:page-load', initScrollReveal);
