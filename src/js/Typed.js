import Typed from "typed.js";

document.addEventListener("DOMContentLoaded", function () {
  let multiText = new Typed("#multiText", {
    strings: ["Fullstack Developer", "UX/UI Designer", "Jorge Sarricolea"],
    loop: true,
    typeSpeed: 30,
    backSpeed: 30,
    backDelay: 2000,
  });
});
