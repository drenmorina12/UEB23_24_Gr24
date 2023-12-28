const asosacioni = document.querySelector("#asosacioni");

const columns = ["A", "B", "C", "D"];

const solutions = {
  A: "Zgjidhja A TEST",
  B: "Zgjidhja B TEST",
  C: "Zgjidhja C TEST",
  D: "Zgjidhja D TEST",
};

const template = {
  A: ["A1", "A2", "A3", "A4", "Zgjidhja A"],
  B: ["B1", "B2", "B3", "B4", "Zgjidhja B"],
  C: ["C1", "C2", "C3", "C4", "Zgjidhja C"],
  D: ["D1", "D2", "D3", "D4", "Zgjidhja D"],
};

const words = {
  A: ["A1-test", "A2-test", "A3-test", "A4-test", solutions.A],
  B: ["B1-test", "B2-test", "B3-test", "B4-test", solutions.B],
  C: ["C1-test", "C2-test", "C3-test", "C4-test", solutions.C],
  D: ["D1-test", "D2-test", "D3-test", "D4-test", solutions.D],
};

const finalResult = "Zgjidhja Perfundimtare";

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
  const cells = document.querySelectorAll(".cell");

  const row = document.createElement("div");
  row.className = "row";

  const cell = document.createElement("div");
  cell.className = "final-cell";
  cell.textContent = finalResult.toLocaleUpperCase();
  row.appendChild(cell);
  asosacioni.appendChild(row);

  return cells;
}

const cells = createTable();

function upadteCellContent(e, wordList) {
  const column = e.currentTarget.getAttribute("data-column");

  const row = Array.from(
    e.currentTarget.parentElement.parentElement.children
  ).indexOf(e.currentTarget.parentElement);

  e.currentTarget.textContent = wordList[column][row];
  e.currentTarget.style.cssText =
    "background-color: white; color: #002244; border: 2px solid #002244";
}

cells.forEach((cell) => {
  cell.addEventListener("click", (e) => upadteCellContent(e, words));
});
