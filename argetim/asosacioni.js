const asosacioni = document.querySelector("#asosacioni-table");
const asosacioniButtons = document.querySelectorAll(".asosacioni-button");
const resetBtn = document.querySelector(".reset-button");
const asosacioniHeaderText = document.querySelector(
  "#asosacioni .heading-text h3"
);

let currentAsosacion;
let currentAsosacionText = '"Përgjithshëm"';

// Templates -----------------------------
const columns = ["A", "B", "C", "D"];

const template = {
  A: ["A1", "A2", "A3", "A4", "Zgjidhja A", "TEST ZGJIDHJA"],
  B: ["B1", "B2", "B3", "B4", "Zgjidhja B"],
  C: ["C1", "C2", "C3", "C4", "Zgjidhja C"],
  D: ["D1", "D2", "D3", "D4", "Zgjidhja D"],
};

const finalResulTemplate = "Zgjidhja Perfundimtare";
// ---------------------------------------

const fizikaSolutions = {
  A: "BOMBA",
  B: "BËRTHAM/ORE",
  C: "GRIMCË",
  D: "CHERNOBYL",
};

const finalResultFizika = "Atomi";

const fizika = {
  A: [
    "Shpërthim",
    "Hiroshima - 1945",
    "Lufta",
    "Montimi",
    fizikaSolutions.A,
    finalResultFizika,
  ],
  B: ["Toka", "Avokado", "Armët", "Energji-", fizikaSolutions.B],
  C: ["Orizi", "Molekula", "E imët", "bit", fizikaSolutions.C],
  D: ["Ukraina", "Katastrofa", "Rrezatimi", "I Pa banuar", fizikaSolutions.D],
};

const matematikaSolution = {
  A: "HEXADECIMAL",
  B: "INT",
  C: "VITI",
  D: "IMAGJINARË",
};

const finalResultMatematika = "Numrat";

const matematika = {
  A: [
    "Sistem",
    "16",
    "Shkronja",
    "0-F",
    matematikaSolution.A,
    finalResultMatematika,
  ],
  B: ["4-byte", "Shifra", "Programim", "Deklarim", matematikaSolution.B],
  C: ["I brishtë", "Akademik", "Qytet", "I Ri", matematikaSolution.C],
  D: ["Ëndërra", "Jo reale", "Dëshira", "Truri", matematikaSolution.D],
};

const pergjithshemSolution = {
  A: "GJURI",
  B: "KUPA",
  C: "SYRI",
  D: "TENXHERE",
};

const finalResultPergjithshem = "Kapaku";

const pergjithshem = {
  A: [
    "Këmba",
    "Femuri",
    "Meniskusi",
    "Patella",
    pergjithshemSolution.A,
    finalResultPergjithshem,
  ],
  B: ["Ari", "Qielli", "Finale", "Trofe", pergjithshemSolution.B],
  C: ["Londra", "Shqisa", "Shqiponj", "Syzet", pergjithshemSolution.C],
  D: ["Gjella", "Zierja", "Ceka", "E metalit", pergjithshemSolution.D],
};

const webSolutions = {
  A: "KUQE",
  B: "GAZETA",
  C: "NUMRI",
  D: "WEB-",
};

const finalResulWeb = "Faqe";

const web = {
  A: ["RGB", "Zemra", "Vera", "Molla", webSolutions.A, finalResulWeb],
  B: ["Lajme", "Ditore", "Leximi", "Letra", webSolutions.B],
  C: ["Romak", "Monedh", "Binar", "Fanella", webSolutions.C],
  D: ["www", "Interneti", "URL", "Domeni", webSolutions.D],
};

//--------------------------------------------------

function createTable() {
  for (let i = 0; i < 5; i++) {
    const row = document.createElement("div");
    row.className = "row";

    columns.forEach((column) => {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.textContent = template[column][i].toLocaleUpperCase();
      cell.setAttribute("data-column", column);

      row.appendChild(cell);
    });

    asosacioni.appendChild(row);
  }

  const row = document.createElement("div");
  row.className = "row";

  const cell = document.createElement("div");
  cell.className = "cell";
  cell.setAttribute("id", "final-cell");
  cell.setAttribute("data-column", "A");
  cell.textContent = template["A"][5].toLocaleUpperCase();
  row.appendChild(cell);
  asosacioni.appendChild(row);
}

function upadteCellContent(e, wordList) {
  const column = e.currentTarget.getAttribute("data-column");

  const row = Array.from(
    e.currentTarget.parentElement.parentElement.children
  ).indexOf(e.currentTarget.parentElement);

  e.currentTarget.textContent = wordList[column][row];
  e.currentTarget.style.cssText =
    "background-color: white; color: #002244; border: 2px solid #002244";
}

function addCellEventListeners(subject) {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("click", (e) => upadteCellContent(e, subject));
    asosacioniHeaderText.textContent = `Jeni duke lujatur asoacionin me temen ${currentAsosacionText} !!`;
  });
}

function resetAsosacioni() {
  asosacioni.innerHTML = "";
}

function setActiveButton(button) {
  asosacioniButtons.forEach((btn) => btn.classList.remove("active"));
  button.classList.add("active");
}

resetBtn.addEventListener("click", () => {
  resetAsosacioni();
  createTable();
  addCellEventListeners(currentAsosacion);
});

asosacioniButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveButton(button);
    resetAsosacioni();
    createTable();
    const subject = button.getAttribute("data-name");

    switch (subject) {
      case "matematika":
        currentAsosacionText = '"Matematika"';
        addCellEventListeners(matematika);
        currentAsosacion = matematika;

        break;
      case "fizika":
        currentAsosacionText = '"Fizika"';
        addCellEventListeners(fizika);
        currentAsosacion = fizika;
        break;
      case "pergjithshem":
        currentAsosacionText = '"Përgjithshëm"';
        addCellEventListeners(pergjithshem);
        currentAsosacion = pergjithshem;
        break;
      case "web":
        currentAsosacionText = '"Web"';
        addCellEventListeners(web);
        currentAsosacion = web;
        break;
      default:
        alert("Ky asosacion nuk ekziston! ");
        break;
    }
  });
});

createTable();
addCellEventListeners(pergjithshem);
