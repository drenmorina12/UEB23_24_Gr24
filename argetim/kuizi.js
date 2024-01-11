let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

function QuizItem(id, question, options, correct) {
  this.id = id;
  this.question = question;
  this.options = options;
  this.correct = correct;
}

// Create quizArray with function constructor
const quizArray = [
  new QuizItem(
    "0",
    "Qfare kuptimi ka HTML?",
    [
      "HyperText Markup Language",
      "HighText Marketing Language",
      "Hover Textual Medium Language",
      "Hacker Tool Language",
    ],
    "HyperText Markup Language"
  ),
  new QuizItem(
    "1",
    "Qfare sherben tag-u strong ne front developing?",
    [
      "Mundson siguri me te madhe ne web-faqe",
      "Tregon numrin e karaktereve",
      "Rrit weight-in e nje pjese te deshiruar",
      "Tag-u nuk egziston",
    ],
    "Rrit weight-in e nje pjese te deshiruar"
  ),
  new QuizItem(
    "2",
    "Cfare shkurtese/prapashtese vendoset pas . kur ruajme file te gjuhes javascript?",
    [".javasc", ".js", ".script", ".JavaScript"],
    ".js"
  ),
  new QuizItem(
    "3",
    "Si formohet një hyperlink në html &lt &gt?",
    ["link", "web", "linkto", "a"],
    "a"
  ),
];

//Questions and Options array

// const quizArray = [
//   {
//     id: "0",
//     question: "Qfare kuptimi ka HTML?",
//     options: ["HyperText Markup Language", "HighText Marketing Language", "Hover Textual Medium Language", "Hacker Tool Language"],
//     correct: "HyperText Markup Language",
//   },
//   {
//     id: "1",
//     question: "Qfare sherben tag-u strong ne front developing?",
//     options: ["Mundson siguri me te madhe ne web-faqe", "Tregon numrin e karaktereve", "Rrit weight-in e nje pjese te deshiruar", "Tag-u nuk egziston"],
//     correct: "Rrit weight-in e nje pjese te deshiruar",
//   },
//   {
//     id: "2",
//     question: "Cfare shkurtese/prapashtese vendoset pas . kur ruajme file te gjuhes javascript?",
//     options: [".javasc", ".js", ".script", ".JavaScript"],
//     correct: ".js",
//   },
//   {
//     id: "3",
//     question: "Si formohet një hyperlink në html &lt &gt?",
//     options: ["link", "web", "linkto", "a"],
//     correct: "a",
//   }
// ];

//Restart Quiz
restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    questionCount += 1;

    if (questionCount == quizArray.length) {
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      userScore.innerHTML =
        "Keni qelluar " + scoreCount + " nga " + questionCount + " pyetje !";
    } else {
      countOfQuestion.innerHTML =
        questionCount + 1 + " nga " + quizArray.length + " pyetje";
      quizDisplay(questionCount);
      count = 11;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);  

//Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  quizCards[questionCount].classList.remove("hide");
};

//Quiz
function quizCreator() {
  //randomly sort questions
  quizArray.sort(() => Math.random() - 0.5);
  for (let i of quizArray) {
    //randomly sort options
    i.options.sort(() => Math.random() - 0.5);
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    //question number
    countOfQuestion.innerHTML = 1 + " nga " + quizArray.length + " pyetje";
    //question
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    //options
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    //For marking the correct option
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }
}

function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 11;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};

//audio at start and restart button
function playAudio2() {
  var audio = document.getElementById("startAudio");
  audio.play();
}
function playAudio1() {
  var audio = document.getElementById("restartAudio");
  audio.play();
}
