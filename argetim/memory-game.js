const $gridDisplay = $("#grid");
const $resultDisplay = $("#result");
const $notification = $("#notification");
// const $gridDisplay = document.querySelector("#grid");
// const $resultDisplay = document.querySelector("#result");
// const $notification = document.querySelector("#notification");

const cardArray = [
  {
    name: "Blerim",
    img: "../images/blerimi.jpg",
  },
  {
    name: "Blerim",
    img: "../images/blerimi.jpg",
  },
  {
    name: "Qamil",
    img: "../images/qamili.jpg",
  },
  {
    name: "Qamil",
    img: "../images/qamili.jpg",
  },
  {
    name: "Dalina",
    img: "../images/dalina.jpg",
  },
  {
    name: "Dalina",
    img: "../images/dalina.jpg",
  },
  {
    name: "Milaim",
    img: "../images/zabeli.jpg",
  },
  {
    name: "Milaim",
    img: "../images/zabeli.jpg",
  },
  {
    name: "Kadri",
    img: "../images/kadri.jpg",
  },
  {
    name: "Kadri",
    img: "../images/kadri.jpg",
  },
  {
    name: "Qefsere",
    img: "../images/qefsere.jpg",
  },
  {
    name: "Qefsere",
    img: "../images/qefsere.jpg",
  },
  {
    name: "Dhurata",
    img: "../images/dhuarata.jpg",
  },
  {
    name: "Dhurata",
    img: "../images/dhuarata.jpg",
  },
  {
    name: "Isak",
    img: "../images/isaku.jpg",
  },
  {
    name: "Isak",
    img: "../images/isaku.jpg",
  },
  {
    name: "Valon",
    img: "../images/valoni.jpg",
  },
  {
    name: "Valon",
    img: "../images/valoni.jpg",
  },
  {
    name: "Labeat",
    img: "../images/labeati.jpg",
  },
  {
    name: "Labeat",
    img: "../images/labeati.jpg",
  },
];

// Shuffles the array randomly

let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];
let isChecking = false;

$("#memory-game-button").on("click", restartGame);

function restartGame() {
  $gridDisplay.empty();
  createBoard();
}

function createBoard() {
  $resultDisplay.text(0);
  cardArray.sort(() => 0.5 - Math.random());
  for (let i = 0; i < cardArray.length; i++) {
    const $card = $("<img>")
      .attr({
        src: "../images/memory-game/blank-1.png",
        // "class": "card-bg", // uncomment this line if needed
        "data-id": i,
      })
      .on("click", flipCard)
      .css("cursor", "pointer"); // Set the cursor to pointer on hover;

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
    // jquery
    cards.eq(optionOneId).attr("src", "../images/memory-game/white.png");
    cards.eq(optionTwoId).attr("src", "../images/memory-game/white.png");
    cards.eq(optionOneId).off("click", flipCard);
    cards.eq(optionTwoId).off("click", flipCard);
    cardsWon.push(cardsChosen[0]);
    showNotification(`Keni gjetur profen: ${cardsChosen[1]}`);
  } else {
    cards.eq(optionOneId).attr("src", "../images/memory-game/blank-1.png");
    cards.eq(optionTwoId).attr("src", "../images/memory-game/blank-1.png");
  }
  $resultDisplay.text(cardsWon.length);

  cardsChosen = [];
  cardsChosenIds = [];

  if (cardsWon.length === cardArray.length / 2) {
    // $resultDisplay.html("You won !!!");
    alert("Fituat !");
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
