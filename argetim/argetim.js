const asosacioni = document.querySelector("#asosacioni");

const columns = ["A", "B", "C", "D"];

const words = {
  A: ["A1", "A2", "A3", "A4"],
  B: ["B1", "B2", "B3", "B4"],
  C: ["C1", "C2", "C3", "C4"],
  D: ["D1", "D2", "D3", "D4"],
};

const solutions = {
  A: "solution1",
  B: "solution2",
  C: "solution3",
  D: "solution4",
};

const finalResult = "Zgjidhja Perfundimtare";

function createTable() {
  for (let i = 0; i < 4; i++) {
    const row = document.createElement("div");
    row.className = "row";

    columns.forEach((column) => {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.textContent = words[column][i];
      row.appendChild(cell);
    });
    asosacioni.appendChild(row);
  }
}

createTable();
