const asosacioni = document.querySelector("#asosacioni");

const columns = ["A", "B", "C", "D"];

const solutions = {
  A: "Zgjidhja A",
  B: "Zgjidhja B",
  C: "Zgjidhja C",
  D: "Zgjidhja D",
};

const words = {
  A: ["A1", "A2", "A3", "A4", solutions.A],
  B: ["B1", "B2", "B3", "B4", solutions.B],
  C: ["C1", "C2", "C3", "C4", solutions.C],
  D: ["D1", "D2", "D3", "D4", solutions.D],
};

const finalResult = "Zgjidhja Perfundimtare";

function createTable() {
  for (let i = 0; i < 5; i++) {
    const row = document.createElement("div");
    row.className = "row";

    columns.forEach((column) => {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.textContent = words[column][i].toLocaleUpperCase();
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

cells.forEach((cell) => {
  cell.addEventListener("click", (e) => {
    console.log(e);
  });
});
