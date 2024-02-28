import Typed from "typed.js";

document.addEventListener("DOMContentLoaded", function () {
  let pageTitle = new Typed("#pageTitle", {
    strings: ["Fullstack Developer", "UX/UI Designer", "Jorge Sarricolea"],
    loop: false,
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
  });

  let multiText = new Typed("#multiText", {
    strings: ["Fullstack Developer", "UX/UI Designer", "Jorge Sarricolea"],
    loop: true,
    typeSpeed: 30,
    backSpeed: 30,
    backDelay: 2000,
  });
});
