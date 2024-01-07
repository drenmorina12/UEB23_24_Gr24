const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");

const cardArray = [
  {
    name: "fries",
    img: "../images/memory-game/fries.png",
  },
  {
    name: "cheeseburger",
    img: "../images/memory-game/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "../images/memory-game/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "../images/memory-game/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "../images/memory-game/milkshake.png",
  },
  {
    name: "pizza",
    img: "../images/memory-game/pizza.png",
  },
  {
    name: "fries",
    img: "../images/memory-game/fries.png",
  },
  {
    name: "cheeseburger",
    img: "../images/memory-game/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "../images/memory-game/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "../images/memory-game/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "../images/memory-game/milkshake.png",
  },
  {
    name: "pizza",
    img: "../images/memory-game/pizza.png",
  },
  {
    name: "test1",
    img: "../images/memory-game/pizza.png",
  },
  {
    name: "test2",
    img: "../images/memory-game/pizza.png",
  },
  {
    name: "test2",
    img: "../images/memory-game/pizza.png",
  },
  {
    name: "test2",
    img: "../images/memory-game/pizza.png",
  },
  {
    name: "test2",
    img: "../images/memory-game/pizza.png",
  },
  {
    name: "test2",
    img: "../images/memory-game/pizza.png",
  },
  {
    name: "test2",
    img: "../images/memory-game/pizza.png",
  },
  {
    name: "test2",
    img: "../images/memory-game/pizza.png",
  },
];

// Shuffles the array randomly
cardArray.sort(() => 0.5 - Math.random());

let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];
let isChecking = false;

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "../images/memory-game/blank-1.png");
    // card.setAttribute("class", "card-bg");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.append(card);
  }
}

createBoard();

function flipCard() {
  if (isChecking) {
    return;
  }

  const cardId = this.getAttribute("data-id");

  if (cardsChosenIds[0] !== cardId) {
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
  }

  console.log("Clicked", cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    isChecking = true;
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  const cards = document.querySelectorAll("#grid img");
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];

  console.log(optionOneId);
  console.log(optionTwoId);
  console.log(cardsChosen[0]);
  console.log(cardsChosen[1]);

  if (cardsChosen[0] === cardsChosen[1] && optionOneId != optionTwoId) {
    alert("You found a match");
    cards[optionOneId].setAttribute("src", "../images/memory-game/white.png");
    cards[optionTwoId].setAttribute("src", "../images/memory-game/white.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen[0]);
  } else {
    cards[optionOneId].setAttribute("src", "../images/memory-game/blank-1.png");
    cards[optionTwoId].setAttribute("src", "../images/memory-game/blank-1.png");
  }
  resultDisplay.textContent = cardsWon.length;

  cardsChosen = [];
  cardsChosenIds = [];

  if (cardsWon.length === cardArray.length / 2) {
    resultDisplay.innerHTML = "You won !!!";
  }

  isChecking = false;
}
