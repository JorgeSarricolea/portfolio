document.addEventListener("DOMContentLoaded", function () {
  import("typed.js")
    .then((module) => {
      const Typed = module.default;
      new Typed("#multiText", {
        strings: [
          "Software Engineer",
          "Back-End Developer",
          "Front-End Developer",
          "Full-Stack Developer",
        ],
        loop: true,
        typeSpeed: 30,
        backSpeed: 30,
        backDelay: 2000,
      });
    })
    .catch((error) => {
      console.error('Error al cargar "typed.js"', error);
    });
});
