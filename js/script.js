let $ = document;

const inptElm = $.querySelector("input");
const containerElm = $.querySelector(".container");

inptElm.addEventListener("change", () => {
  containerElm.style.filter = "brightness(" + inptElm.value + "%)";
});
