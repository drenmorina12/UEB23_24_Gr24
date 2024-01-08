const themelimiText = document.querySelector(".themelimi");

const dataEThemelimit = new Date("December 23, 1970");
const currentDate = new Date();

const yearsSinceOpening =
  currentDate.getFullYear() - dataEThemelimit.getFullYear();

themelimiText.textContent = `Universiteti i Prishtinës ofron shërbime cilësore që prej ${yearsSinceOpening} vitesh.`;
