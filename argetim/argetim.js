const asosacioni = document.querySelector("#asosacioni");
const asosacioniButtons = document.querySelectorAll(".asosacioni-buttons");

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
  A: "Zgjidhja A TEST",
  B: "Zgjidhja B TEST",
  C: "Zgjidhja C TEST",
  D: "Zgjidhja D TEST",
};

const finalResultFizika = "Atomi";

const fizika = {
  A: ["A1-test", "A2-test", "A3-test", "A4-test", fizikaSolutions.A, "TESTTT"],
  B: ["B1-test", "B2-test", "B3-test", "B4-test", fizikaSolutions.B],
  C: ["C1-test", "C2-test", "C3-test", "C4-test", fizikaSolutions.C],
  D: ["D1-test", "D2-test", "D3-test", "D4-test", fizikaSolutions.D],
};

const matematikaSolution = {
  A: "Zgjidhja 1",
  B: "Zgjidhja 2",
  C: "Zgjidhja 3",
  D: "Zgjidhja 4",
};

const finalResultMatematika = "integrali";

const matematika = {
  A: [
    "Math",
    "test",
    "modulo",
    "vija",
    matematikaSolution.A,
    finalResultMatematika,
  ],
  B: ["plus", "numer", ",", "romb", matematikaSolution.B],
  C: ["minus", "/", ".", "rreth", matematikaSolution.C],
  D: ["derivat", "*", "i", "katror", matematikaSolution.D],
};

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
  });
}

asosacioniButtons.forEach((button) => {
  button.addEventListener("click", () => {
    createTable();
    const subject = button.getAttribute("data-name");

    switch (subject) {
      case "matematika":
        addCellEventListeners(matematika);
        break;
      case "fizika":
        addCellEventListeners(fizika);
        break;
      case "pergjithshem":
        addCellEventListeners(pergjithshem);
        break;
      default:
        alert("Ky asosacion nuk ekziston! ");
        break;
    }
  });
});
