document.addEventListener("DOMContentLoaded", function () {
  import("typed.js")
    .then((Typed) => {
      // Una vez que la biblioteca se haya cargado correctamente, puedes crear la instancia de Typed
      let multiText = new Typed.default("#multiText", {
        strings: [
          "a Fullstack Developer",
          "a UX/UI Designer",
          "Jorge Sarricolea",
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
