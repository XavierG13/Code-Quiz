// variable to view high scores
var highScoreLink = document.getElementById("highScoreLink");

//variables for working code
var timer = document.getElementById("timer");
var beginBtn = document.getElementById("beginQuizButton");
var questionsEl = document.getElementById("questions");

var score = 0;
var questionsIndex = 0;

// variables for time and penalty
var secondsLeft = 75;
var holdInterval = 0;
var penaltyTime = 15;

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
