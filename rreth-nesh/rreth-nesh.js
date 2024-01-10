const themelimiText = document.querySelector(".themelimi");

const dataEThemelimit = new Date("December 23, 1970");
const currentDate = new Date();

const yearsSinceOpening =
  currentDate.getFullYear() - dataEThemelimit.getFullYear();

themelimiText.textContent = `Universiteti i Prishtinës ofron shërbime cilësore që prej ${yearsSinceOpening} vitesh.`;

// replace() :
let str = document.getElementById("demoo").innerHTML; 
let res = str.replace(/HAPJE/g, "MBYLLJE");
document.getElementById("demoo").innerHTML = res;
// Zevendsojme fjalen HAPJE me fjalen MBYLLJE ne display ne fund te rreth nesh del-  NË MBYLLJE :

// match() :
let text = "UP Student Toolkit";
let result = text.match("z"); 
document.getElementById("demoo2").innerHTML = result;     
// letra z nuk gjindet ne text=UP Student Toolkit prandaj nuk shfaqet asgje ne ekran.