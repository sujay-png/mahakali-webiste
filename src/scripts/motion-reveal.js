import { animate, inView } from "motion";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function markVisible(el) {
  el.classList.add("is-visible");
  el.dataset.revealed = "true";
  el.style.opacity = "1";
  el.style.removeProperty("transform");
}

function revealElement(el, delay = 0) {
  if (!(el instanceof HTMLElement) || el.dataset.revealed === "true") return;

  const type = el.getAttribute("data-reveal");
  const from =
    type === "left"
      ? "translateX(-24px)"
      : type === "right"
        ? "translateX(24px)"
        : type === "scale"
          ? "translateY(16px)"
          : type === "fade"
            ? "none"
            : "translateY(18px)";

  markVisible(el);

  animate(
    el,
    { opacity: [0, 1], transform: from === "none" ? ["none", "none"] : [from, "none"] },
    { delay, duration: 0.65, easing: [0.22, 1, 0.36, 1] },
  ).finished.catch(() => {}).then(() => markVisible(el));
}

function bindInView(el, onEnter) {
  if (!(el instanceof HTMLElement) || el.dataset.motionBound === "true") return;
  el.dataset.motionBound = "true";

  inView(
    el,
    () => {
      onEnter();
    },
    { amount: 0.08, margin: "0px 0px -6% 0px" },
  );
}

function initMotion() {
  if (prefersReducedMotion()) {
    document.querySelectorAll("[data-reveal]").forEach((el) => markVisible(el));
    return;
  }

  document.querySelectorAll("[data-reveal-group]").forEach((group) => {
    bindInView(group, () => {
      group.querySelectorAll("[data-reveal]").forEach((child, index) => {
        revealElement(child, index * 0.06);
      });
    });
  });

  document.querySelectorAll("[data-reveal]").forEach((el) => {
    if (el.closest("[data-reveal-group]")) return;
    bindInView(el, () => revealElement(el));
  });
}

initMotion();
document.addEventListener("astro:page-load", initMotion);
