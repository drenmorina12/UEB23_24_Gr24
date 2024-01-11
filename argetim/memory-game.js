const $gridDisplay = $("#grid");
const $resultDisplay = $("#result");
const $notification = $("#notification");

// Define a constructor function for a Card
function Card(name, img) {
  this.name = name;
  this.img = img;
}

// Create instances of Card
const cardArray = [
  new Card("C++", "../images/cpp.jpg"),
  new Card("C++", "../images/cpp.jpg"),
  new Card("HTML", "../images/htmll.jpg"),
  new Card("HTML", "../images/htmll.jpg"),
  new Card("CSS", "../images/csss.jpg"),
  new Card("CSS", "../images/csss.jpg"),
  new Card("Javascript", "../images/javascriptt.jpg"),
  new Card("Javascript", "../images/javascriptt.jpg"),
  new Card("Java", "../images/javaa.jpg"),
  new Card("Java", "../images/javaa.jpg"),
  new Card("Python", "../images/pythonn.jpg"),
  new Card("Python", "../images/pythonn.jpg"),
  new Card("React", "../images/reactt.jpg"),
  new Card("React", "../images/reactt.jpg"),
  new Card("PHP", "../images/phpp.jpg"),
  new Card("PHP", "../images/phpp.jpg"),
  new Card("Ruby", "../images/rubii.jpg"),
  new Card("Ruby", "../images/rubii.jpg"),
  new Card("C#", "../images/csh.jpg"),
  new Card("C#", "../images/csh.jpg"),
];

let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];
let isChecking = false;
// jquery add
$("#memory-game-button").on("click", restartGame);

function restartGame() {
  $gridDisplay.empty();
  createBoard();
}

function createBoard() {
  $resultDisplay.text(0);
  // Shuffles the array randomly
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
    // jquery set
    cards.eq(optionOneId).attr("src", "../images/memory-game/white.png");
    cards.eq(optionTwoId).attr("src", "../images/memory-game/white.png");
    // jquery remove
    cards.eq(optionOneId).off("click", flipCard);
    cards.eq(optionTwoId).off("click", flipCard);
    cardsWon.push(cardsChosen[0]);
    showNotification(`Keni gjetur gjuhën programuese: ${cardsChosen[1]}`);
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

function fadeOutAnimation() {
  $notification.fadeOut();
}

function showNotification(message) {
  // jquery callback function
  $notification.text(message);
  $notification.fadeIn();

  setTimeout(() => {
    fadeOutAnimation();
  }, 3000);
}
