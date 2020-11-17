//Variables for beginning and holding quiz questions
var beginQuizBtnEl = document.getElementById("#beginQuizBtn");
var questionHolderEl = document.getElementById("#questions");
//Variables that are used for high scores section
var highScoresEl = document.getElementById("#highScoresHolder");
var goBackBtn = document.getElementById("#goBackBtn");
var clearBtnEl = document.getElementById("#clearBtn");
// variables used for the timer
var timeEl = document.getElementById("#timerHolder");

var time = 75;
var score = 0;
var subtractTime = 15;
var timer = 0;

// var questions arrary for questions
var questionCount = 0;
var questions = [
    {
        title: "What does HTML stand for?",
        choices: ["Hypertext Makeup Language", "How Text Makes Language", "Here This Makes Language", "Hyper Text Make Language"],
        answer: "Hypertext Makeup Language"
    },

    {
        title: "",
        choices: "",
        answer: ""
    },

    {
        title: "",
        choices: "",
        answer: ""
    },

    {
        title: "",
        choices: "",
        answer: ""
    },

    {
        title: "",
        choices: "",
        answer: ""
    },

]

// Listeners for buttons
timeEl.addEventListener.on("click", function () {
    if (timer === 0) {
        timer.setInterval(function () {
            secondsLeft--;
            timerHolder.textContent = document.getElementById("timer-holder") + secondsLeft;
            if (secondsLeft <= 0) {
                clearInterval(timer);
                allDone();
                currentTime.textContent = "Quiz is over.";
            }
        }, 1000);
    }
    render(questions);
});
// Functions for questions and answers

questions.forEach(function (question) {

    for (i = 0; i < questions.length; i++) {
        var question = questions.array[i];

        var li = document.createElement('li');
        var questionsTextEl = document.createTextNode(question);

        li.appendChild(questionsTextEl);
        document.getElementById("#questionsUl").appendChild(li);

        console.log(question);
    }
})
// this function will loop through the questions array and move them to the html


