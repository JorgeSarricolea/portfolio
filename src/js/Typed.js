document.addEventListener("DOMContentLoaded", function () {
  import("typed.js")
    .then((module) => {
      const Typed = module.default;
      new Typed("#multiText", {
        strings: [
          "Jorge Sarricolea",
          "a Software Engineer",
          "a Back-End Developer",
          "a Front-End Developer",
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
