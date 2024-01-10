const cellElements = document.querySelectorAll("[data-cell]");
const board = document.querySelector("#board");
const winningMessageTextElement = document.querySelector(
  ".winning-message-text"
);
const winningMessageElement = document.querySelector("#winningMessage");
const restartButton = document.querySelector("#restartButton");
const circleScore = document.querySelector(".circle-score");
const xScore = document.querySelector(".x-score");

const X_CLASS = "x";
const CIRLCE_CLASS = "circle";
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let circleTurn;
let circleWins = 0;
let xWins = 0;

startGame();

restartButton.addEventListener("click", startGame);

function startGame() {
  circleTurn = false;
  cellElements.forEach((cell) => {
    cell.classList.remove(X_CLASS);
    cell.classList.remove(CIRLCE_CLASS);
    cell.removeEventListener("click", handleClick);
    cell.addEventListener("click", handleClick, { once: true });
  });
  setBoardHoverClass();
  winningMessageElement.classList.remove("show");
}

function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? CIRLCE_CLASS : X_CLASS;
  placeMark(cell, currentClass);
  if (checkWin(currentClass)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  }

  swapTurns();
  setBoardHoverClass();
}

function endGame(draw) {
  if (draw) {
    winningMessageTextElement.textContent = `Barazim!`;
  } else {
    winningMessageTextElement.textContent = `${circleTurn ? "O" : "X"} Fiton!`;
    circleTurn
      ? (circleScore.textContent = ++circleWins)
      : (xScore.textContent = ++xWins);
  }
  winningMessageElement.classList.add("show");
}

function isDraw() {
  return [...cellElements].every((cell) => {
    return (
      cell.classList.contains(X_CLASS) || cell.classList.contains(CIRLCE_CLASS)
    );
  });
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

function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some((combination) => {
    return combination.every((index) => {
      return cellElements[index].classList.contains(currentClass);
    });
  });
}
