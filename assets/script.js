// variable to view high scores
var highScoreLink = document.getElementById("highScoreLink");

//variables for working code
var timer = document.getElementById("timer");
var beginBtn = document.getElementById("beginQuizButton");
var questionHolder = document.getElementById("questions");
var questionsUlEl = document.getElementById("questionsUl");

var score = 0;
var questionsIndex = 0;

// variables for time and penalty
var secondsLeft = 75;
var holdInterval = 0;
var penaltyTime = 15;

// questions array
var questions = [
  {
    title: "What can arrays store in javascript?",
    choices: ["numbers", "strings", "multiple arrays", "all of the above"],
    answer: "all of the above",
  },
  {
    title: "What does HTML stand for?",
    choices: [
      "Hypertext Markup Language",
      "Here This Make Language",
      "Hello Thanks For the Language",
      "How's This Make Language?",
    ],
    answer: "Hypertext Markup Language",
  }
];

//timer listener for button activation

timer.addEventListener("click", function () {
  if (holdInterval === 0) {
    holdInterval = setInterval(function () {
      secondsLeft--;
      timer.textContent = timer + secondsLeft;

      if (secondsLeft <= 0) {
        clearInterval(holdInterval);
        //   quizOver();
        timer.textContent = "Time is up, pencils down!";
      }
    }, 1000);
  }
  render(questionsIndex);
});

function render(questionsIndex) {
  questionsUlEl.innerHTML = "";

  //for loops for questions array
  for (var i = 0; i < questionsIndex.length; i++) {
    var questionEl = questions[questionsIndex].title;
    var choicesEl = questions[questionsIndex].choices;
    questionHolder.textContent = questionEl;
  }
}
