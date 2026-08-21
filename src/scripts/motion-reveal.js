import { animate, inView } from "motion";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function revealElement(el, delay = 0) {
  const type = el.getAttribute("data-reveal");
  const from =
    type === "left"
      ? "translateX(-28px)"
      : type === "right"
        ? "translateX(28px)"
        : type === "scale"
          ? "scale(0.96)"
          : "translateY(22px)";

  animate(
    el,
    { opacity: [0, 1], transform: [from, "none"] },
    { delay, duration: 0.7, easing: [0.22, 1, 0.36, 1] },
  );
}

function initMotion() {
  if (prefersReducedMotion()) {
    document.querySelectorAll("[data-reveal]").forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
    return;
  }

  document.querySelectorAll("[data-reveal-group]").forEach((group) => {
    const children = group.querySelectorAll("[data-reveal]");
    inView(
      group,
      () => {
        children.forEach((child, index) => revealElement(child, index * 0.07));
      },
      { amount: 0.16 },
    );
  });

  document.querySelectorAll("[data-reveal]").forEach((el) => {
    if (el.closest("[data-reveal-group]")) return;
    inView(el, () => revealElement(el), { amount: 0.18 });
  });
}

initMotion();
document.addEventListener("astro:page-load", initMotion);
