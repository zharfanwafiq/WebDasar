const toggle = document.querySelector("svg");
const menu = document.querySelector("#menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("open");
});
