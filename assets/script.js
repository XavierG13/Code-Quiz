//Variables for beginning and holding quiz questions
var beginQuizBtnEl = document.getElementById("beginQuizBtn");
var questionHolderEl = document.getElementById("questions");
var questionsUlEl = document.getElementById("questionsUl");
//Variables that are used for high scores section
var highScoresEl = document.getElementById("highScoresHolder");
var goBackBtn = document.getElementById("goBackBtn");
var clearBtnEl = document.getElementById("clearBtn");
// variables used for the timer
var timeEl = document.getElementById("timer");

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

//this will set a timer once the quiz has begun
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time:" + secondsLeft;

        if (time === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }

    }, 1000);
}

//will alert if the question was correct or incorrect and track the score
function nextQuestion(currentQuestion) {
    var answer = questions[questionCount].answer;
    var wrong = createTextNode("Incorrext!");
    var correct = createTextNode("Correct!");

    if (currentQuestion === answer) {
        score++;
        alert(correct);

    } else {
        alret(wrong);

    }
    questionCount++;
    console.log(questionCount);
}

//starts the quiz once the button is clicked
beginQuizBtnEl.addEventListener("click", function () {

    for (var i = 0; i < questions.length; i++);
    console.log(questions);

    var li = document.createElement("li");
    newQuestion = document.createTextNode(questions[i]);
    console.log(newQuestion);

    li.appendChild(newQuestion);
    questionsUlEl.appendChild(li);
})
































// // Listeners for buttons
// beginQuizBtnEl.addEventListener.on("click", function () {
//     if (time === 0) {
//         timer.setInterval(function () {
//             time--;
//             console.log(time);
//             timerHolder.textContent = "Time:" + time;
//             if (secondsLeft <= 0) {
//                 clearInterval(timer);
//                 allDone();
//                 timeEl.textContent = "Quiz is over.";
//             }
//         }, 1000);
//     }
//     questions();
// })
// // Functions for questions and answers

// questions.forEach(function (question) {

//     for (i = 0; i < questions.length; i++) {
//         var question = questions.array[i];

//         var li = document.createElement('li');
//         var questionsTextEl = document.createTextNode(question);

//         li.appendChild(questionsTextEl);
//         document.getElementById("#questionsUl").appendChild(li);

//         console.log(question);
//     }
// });
// this function will loop through the questions array and move them to the html


