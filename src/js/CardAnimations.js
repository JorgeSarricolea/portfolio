document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const direction = entry.target.getAttribute(
            "data-animation-direction"
          );
          const animationClass =
            direction === "left"
              ? "animate-slideInLeft"
              : "animate-slideInRight";
          entry.target.classList.add(animationClass);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  // Main container
  const elements = document.querySelectorAll(".observer-element");
  elements.forEach((el) => {
    observer.observe(el);
  });
});
