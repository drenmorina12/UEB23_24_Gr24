const $gridDisplay = $("#grid");
const $resultDisplay = $("#result");
const $notification = $("#notification");
// const $gridDisplay = document.querySelector("#grid");
// const $resultDisplay = document.querySelector("#result");
// const $notification = document.querySelector("#notification");

const cardArray = [
  {
    name: "Blerimi",
    img: "../images/blerimi.jpg",
  },
  {
    name: "Blerimi",
    img: "../images/blerimi.jpg",
  },
  {
    name: "Qamili",
    img: "../images/qamili.jpg",
  },
  {
    name: "Qamili",
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
    name: "Zabeli",
    img: "../images/zabeli.jpg",
  },
  {
    name: "Zabeli",
    img: "../images/zabeli.jpg",
  },
  {
    name: "Kadria",
    img: "../images/kadri.jpg",
  },
  {
    name: "Kadria",
    img: "../images/kadri.jpg",
  },
  {
    name: "Qefserja",
    img: "../images/qefsere.jpg",
  },
  {
    name: "Qefserja",
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
    name: "Isaku",
    img: "../images/isaku.jpg",
  },
  {
    name: "Isaku",
    img: "../images/isaku.jpg",
  },
  {
    name: "Valoni",
    img: "../images/valoni.jpg",
  },
  {
    name: "Valoni",
    img: "../images/valoni.jpg",
  },
  {
    name: "Labeati",
    img: "../images/labeati.jpg",
  },
  {
    name: "Labeati",
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
