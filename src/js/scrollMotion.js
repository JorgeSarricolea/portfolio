import { animate, inView } from "motion";

const easeSmooth = [0.22, 1, 0.36, 1];
const DURATION = 0.48;
const STAGGER = 0.085;
const HERO_EASE = [0.16, 1, 0.3, 1];

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function revealElements(selectors) {
  selectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
  });
}

function fadeUp(target, { y = 28, delay = 0, duration = DURATION, ease = easeSmooth } = {}) {
  return animate(target, { opacity: [0, 1], y: [y, 0] }, { duration, delay, ease });
}

function scaleIn(target, { delay = 0, duration = DURATION + 0.08, ease = easeSmooth } = {}) {
  return animate(
    target,
    { opacity: [0, 1], scale: [0.94, 1] },
    { duration, delay, ease },
  );
}

function resetMotionTargets(section) {
  const targets = section.querySelectorAll("[data-motion-header], [data-motion-item], [data-hero]");
  targets.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "";
  });
}

function playSlideAnimations(section) {
  const isHome = section.id === "home";

  if (isHome) {
    initHeroMotion();
    return;
  }

  const header = section.querySelector("[data-motion-header]");
  const items = section.querySelectorAll("[data-motion-item]");

  if (header) fadeUp(header, { y: 28 });
  items.forEach((item, index) => {
    fadeUp(item, { y: 14, delay: 0.1 + index * STAGGER });
  });
}

function initHeroMotion() {
  const heroSteps = [
    { selector: "#home [data-hero='text']", y: 30, delay: 0.2, duration: 1 },
    { selector: "#home [data-hero='photo']", scale: true, delay: 0.4, duration: 1 },
    { selector: "#home [data-hero='subtitle']", y: 30, delay: 0.5, duration: 1 },
    { selector: "#home [data-hero='desc']", y: 30, delay: 0.65, duration: 1 },
    { selector: "#home [data-hero='socials']", y: 30, delay: 0.8, duration: 1 },
  ];

  heroSteps.forEach(({ selector, y, delay, duration, scale }) => {
    const el = document.querySelector(selector);
    if (!el) return;

    if (scale) {
      scaleIn(el, { delay, duration, ease: HERO_EASE });
      return;
    }

    fadeUp(el, { y, delay, duration, ease: HERO_EASE });
  });
}

function setActiveSlide(index, sections) {
  sections.forEach((section, i) => {
    section.classList.toggle("is-active", i === index);
  });

  document.querySelectorAll(".slide-nav-dot").forEach((dot, i) => {
    const active = i === index;
    dot.classList.toggle("is-active", active);
    dot.setAttribute("aria-current", active ? "step" : "false");
  });

  const nextBtn = document.getElementById("slide-next");
  if (nextBtn) {
    nextBtn.hidden = index >= sections.length - 1;
  }
}

function navigateToSlide(index, scrollRoot, sections) {
  const section = sections[index];
  if (!section || !scrollRoot) return;
  scrollRoot.scrollTo({ top: section.offsetTop, behavior: "smooth" });
}

function initSlideObserver(scrollRoot, sections) {
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visible.length === 0) return;

      const index = Number(visible[0].target.dataset.slideIndex);
      if (!Number.isNaN(index)) setActiveSlide(index, sections);
    },
    {
      root: scrollRoot,
      threshold: [0.35, 0.5, 0.65],
    },
  );

  sections.forEach((section) => observer.observe(section));
  return observer;
}

function initSlideAnimations(scrollRoot, sections) {
  sections.forEach((section) => {
    inView(
      section,
      () => {
        playSlideAnimations(section);
        return () => resetMotionTargets(section);
      },
      { root: scrollRoot, amount: 0.45, once: false },
    );
  });
}

function initSlideNav(scrollRoot, sections) {
  document.querySelectorAll(".slide-nav-dot").forEach((dot) => {
    dot.addEventListener("click", () => {
      const index = Number(dot.dataset.slideIndex);
      navigateToSlide(index, scrollRoot, sections);
    });
  });

  document.getElementById("slide-next")?.addEventListener("click", () => {
    const active = sections.findIndex((section) => section.classList.contains("is-active"));
    const next = active < 0 ? 0 : Math.min(active + 1, sections.length - 1);
    navigateToSlide(next, scrollRoot, sections);
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const id = link.getAttribute("href")?.slice(1);
      if (!id) return;

      const target = document.getElementById(id);
      if (!target?.classList.contains("slide-section")) return;

      event.preventDefault();
      scrollRoot.scrollTo({ top: target.offsetTop, behavior: "smooth" });
    });
  });
}

function initNextButtonMotion() {
  const nextBtn = document.getElementById("slide-next");
  if (!nextBtn || prefersReducedMotion()) return;

  animate(nextBtn, { y: [0, 6, 0] }, { duration: 1.8, repeat: Infinity, ease: "easeInOut" });
}

export function initScrollMotion() {
  const scrollRoot = document.getElementById("slide-scroll");
  const sections = [...document.querySelectorAll(".slide-section")];

  if (!scrollRoot || sections.length === 0) return;

  if (prefersReducedMotion()) {
    revealElements(["[data-motion-header]", "[data-motion-item]", "[data-hero]"]);
    setActiveSlide(0, sections);
    initSlideNav(scrollRoot, sections);
    return;
  }

  setActiveSlide(0, sections);
  initSlideObserver(scrollRoot, sections);
  initSlideAnimations(scrollRoot, sections);
  initSlideNav(scrollRoot, sections);
  initNextButtonMotion();
  playSlideAnimations(sections[0]);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initScrollMotion);
} else {
  initScrollMotion();
}
