/*
Author: Hannah Givens
Date Started: 10/08/2020
Project: An Impossible Luck Quize!

Date Modified: 10/11/20
Date Modified: 10/12/20
Date Modified: 10/13/20
*/
// * This is where I hold my made Object/class
class Questons {
    constructor(q, a1, a2, a3, a4) {
        this.queston = q;
        this.answer1 = `<button class ='questions' value = '1' id='an1' >${a1}</button>`;
        this.answer2 = `<button class ='questions' value = '2' id='an2' >${a2}</button>`;
        this.answer3 = `<button class ='questions' value = '3' id='an3' >${a3}</button>`;
        this.answer4 = `<button class ='questions' value = '4' id='an4' >${a4}</button>`;
    }

    updateQuestonArea() {
        var grabDiv = document.getElementById("questionsDisplay");
        grabDiv.innerHTML = "";
        grabDiv.innerHTML += "<h1 class= 'words'>" + this.queston + "</h1> ";
        var grabDiv2 = document.getElementById("answersDiplayBtn");
        grabDiv2.innerHTML = "";
        grabDiv2.innerHTML += `${this.answer1} ${this.answer2} ${this.answer3} ${this.answer4}`;
    }
}
// define 'global' variables here so it will be accessable inside any function (look up scope) https://developer.mozilla.org/en-US/docs/Glossary/Scope
var questionArray = [];
var randomGen = Math.floor(Math.random() * 4 + 1);

// * end classes

//calling everything to the load.
window.addEventListener("load", intializePage);

function intializePage() {
    _loadQuestions();
    start();
}
//* START FUNCTION!!!!
function start() {
    var startMessage = document.getElementById("questionsDisplay");
    startMessage.innerHTML =
        "<h1 class= 'words'> Welcom to the IMPOSIBLE LUCK QUIZ! </h1> ";
    var startBtn = document.getElementById("movementHousing");
    startBtn.innerHTML =
        "<button class ='navigationButtons' vlaue = 'start' id = 'start'> START HERE </button>";
    document.getElementById("start").addEventListener("click", startQuiz);
    var emptyAnswers = document.getElementById("answersDiplayBtn");
    emptyAnswers.innerHTML = "";
}

/* 
here Im truning the start button into the next button, and call the id of all buttons 
on click to then send their value of them though an if satement to determine if they are the right answer
*/
function startQuiz() {
    // as long as there are remaining questions, load the next one. If not, load win screen or something
    var startBtn = document.getElementById("movementHousing");
    startBtn.innerHTML =
        "<button class ='navigationButtons' vlaue = 'next' id = 'next'> Submit </button>";
    // try to name functions with verb since they usually do something. LOADnextQuestion
    loadNextQuestion();
}

function loadNextQuestion() {
    document.getElementById("answersDiplayBtn").style.display = "inline";

    questionArray.shift().updateQuestonArea();

    var valueOfClick1 = document.getElementById("an1");
    valueOfClick1.addEventListener("click", clickingValues);
    var valueOfClick2 = document.getElementById("an2");
    valueOfClick2.addEventListener("click", clickingValues);
    var valueOfClick3 = document.getElementById("an3");
    valueOfClick3.addEventListener("click", clickingValues);
    var valueOfClick4 = document.getElementById("an4");
    valueOfClick4.addEventListener("click", clickingValues);

    console.log("random: " + randomGen);
}

//this functoin is pulling the vales of the target witch are the buttons clicked.
function clickingValues(e) {
    validAnswer(e.target);
}

function validAnswer(answer) {
    var val = answer.value;
    if (randomGen == val) {
        alert("YAY! You got it!");
        // load next question after celebrating
        if (questionArray.length) {
            randomGen = Math.floor(Math.random() * 4 + 1);
            loadNextQuestion();
        } else {
            // YOU WON YEAAAAA WHOOOO
            var endMessage = document.getElementById("questionsDisplay");
            endMessage.innerHTML =
                "<h1 class= 'words'> YOU DID TI! YOU BEAT THE GAME! </h1> ";
            var again = document.getElementById("movementHousing");
            again.innerHTML =
                "<button class ='navigationButtons' vlaue = 'again' id = 'again'> AGAIN! </button>";
            document
                .getElementById("again")
                .addEventListener("click", intializePage);
            randomGen = Math.floor(Math.random() * 4 + 1);
            var emptyAnswers = document.getElementById("answersDiplayBtn");
            emptyAnswers.style.display = "none";
        }
    } else {
        alert("THIS IS NOT THE ANSWER, you must go back to start.");
        // reset
        randomGen = Math.floor(Math.random() * 4 + 1);
        intializePage();
    }
}

function _loadQuestions() {
    // empty array in case it still has something in it
    questionArray = [];

    // here im making quetions fro my class
    questionArray.push(
        new Questons(
            "What Grade should I get?",
            "100%",
            "200%",
            "300%",
            "4000%"
        )
    );
    questionArray.push(
        new Questons(
            "what is the color of the sky?",
            "Red",
            "Magenta",
            "Pink",
            "Blue"
        )
    );
    questionArray.push(
        new Questons("What is a cooler mame?", "Jim", "Tim", "Tina", "Jane")
    );
    questionArray.push(
        new Questons(
            "Where is Your cat?",
            "What Cat?",
            "Home",
            "Vet",
            "Mittens?"
        )
    );
    questionArray.push(
        new Questons(
            "Who are you?",
            "THE PRESIDENT",
            "ME, DUH",
            "NOBODY",
            "SOMEBODY"
        )
    );
    questionArray.push(
        new Questons(
            "What fish would you be?",
            "Shark!",
            "Zebra Fish",
            "Dalphine",
            "CatFish"
        )
    );
    questionArray.push(
        new Questons(
            "What's a sekeletons Favorite snack?",
            "SpareRibs",
            "Ribeye",
            "bonless Ribs",
            "Jawbreakers"
        )
    );
    questionArray.push(
        new Questons(
            "Where IS SHREK?",
            "MY SWAMP",
            "His SWAMP",
            "OUR SWAMP",
            "6ft under"
        )
    );
    questionArray.push(
        new Questons(
            "why is 6 afraid of 7?",
            "789",
            "7 ate 9",
            "7 eight 9",
            "hes not!"
        )
    );
    questionArray.push(
        new Questons(
            "whats is the meaning of life?",
            "CODE",
            "42",
            "Games",
            "Nothing"
        )
    );
    questionArray.push(
        new Questons(
            "Help Ive fallen and i cant get up?",
            "LIFEALERT",
            "lifealert",
            "LIfeAlert",
            "ALertLIFE"
        )
    );
    questionArray.push(
        new Questons(
            "what is the best season?",
            "PEPPER",
            "CARJUN ",
            "SUMMER",
            "DEER"
        )
    );
    questionArray.push(
        new Questons(
            "How do you make a pirate ferrious?",
            "Steal His Booty",
            "take away the p",
            "call him polly",
            "arrest him"
        )
    );
    questionArray.push(
        new Questons(
            "what do among us players eat?",
            "Impasta",
            "O2",
            "Reactor",
            "Comms"
        )
    );
    questionArray.push(
        new Questons(
            "What's the difference between a guitar and a fish?",
            "Wood?",
            "fish breaths",
            "you cant tuna fish",
            "fish are animals"
        )
    );
    questionArray.push(
        new Questons(
            "What do you call a gangsta snowman?",
            "Froze-T",
            "Ice-T",
            "Silly, snowman cant be gangsta",
            "Frosty"
        )
    );
}
