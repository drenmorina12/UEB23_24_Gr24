const cellElements = document.querySelectorAll("[data-cell]");
const board = document.querySelector("#board");

const X_CLASS = "x";
const CIRLCE_CLASS = "circle";
let circleTurn;

cellElements.forEach((cell) => {
  cell.addEventListener("click", handleClick, { once: true });
});

function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? CIRLCE_CLASS : X_CLASS;
  placeMark(cell, currentClass);
  // placeMark
  // checkForWin
  // checkForDraw
  // switchTurns
  swapTurns();
  setBoardHoverClass();
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function swapTurns() {
  circleTurn = !circleTurn;
}

function setBoardHoverClass() {
  board.classList.remove(X_CLASS);
  board.classList.remove(CIRLCE_CLASS);
  if (circleTurn) {
    board.classList.add(CIRLCE_CLASS);
  } else {
    board.classList.add(X_CLASS);
  }
}
