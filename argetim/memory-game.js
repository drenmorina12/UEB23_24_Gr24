const $gridDisplay = $("#grid");
const $resultDisplay = $("#result");
const $notification = $("#notification");
// const $gridDisplay = document.querySelector("#grid");
// const $resultDisplay = document.querySelector("#result");
// const $notification = document.querySelector("#notification");

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
    const $card = $("<img>")
      .attr({
        src: "../images/memory-game/blank-1.png",
        // "class": "card-bg", // uncomment this line if needed
        "data-id": i,
      })
      .on("click", flipCard);

    $gridDisplay.append($card);
  }
}

createBoard();

function flipCard() {
  if (isChecking) {
    return;
  }
  // jquery get
  const cardId = $(this).data("id");

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
  const cards = $("#grid img");
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];

  console.log(optionOneId);
  console.log(optionTwoId);
  console.log(cardsChosen[0]);
  console.log(cardsChosen[1]);

  if (cardsChosen[0] === cardsChosen[1] && optionOneId !== optionTwoId) {
    // jquery set
    cards.eq(optionOneId).attr("src", "../images/memory-game/white.png");
    cards.eq(optionTwoId).attr("src", "../images/memory-game/white.png");
    cards.eq(optionOneId).off("click", flipCard);
    cards.eq(optionTwoId).off("click", flipCard);
    cardsWon.push(cardsChosen[0]);
    showNotification(`You found a match: ${cardsChosen[1]}`);
  } else {
    cards.eq(optionOneId).attr("src", "../images/memory-game/blank-1.png");
    cards.eq(optionTwoId).attr("src", "../images/memory-game/blank-1.png");
  }
  $resultDisplay.text(cardsWon.length);

  cardsChosen = [];
  cardsChosenIds = [];

  if (cardsWon.length === cardArray.length / 2) {
    // $resultDisplay.html("You won !!!");
    alert("You won !!!");
  }

  isChecking = false;
}

function showNotification(message) {
  $notification.text(message);
  $notification.fadeIn();

  setTimeout(() => {
    $notification.fadeOut();
  }, 3000);
}
