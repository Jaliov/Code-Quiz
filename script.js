var multiChoices = [
    {
        question: "<h4>The viola is a member of which family of musical instruments?:</h4><ol><li>Brass</li><li>String</li><li>Woodwinds</li></ol>",
        answer: "2"
    },
    {
        question: "<h4>The size of a viola, compared to a violin is a bit:</h4><ol><li>Larger</li><li>Smaller</li><li>Just the same</li></ol>",
        answer: "1"
    },
    {  
        question: "<h4>By what musical intetrval are the 4 strings of a viola tuned lower than a violin?</h4><ol><li>1 Octave</li><li>1 third</li><li>1 fifth</li></ol><br><h5>",
        answer: "3"
    },
    {
        question: "<h4>While played the viola is held under the chin like a violin:</h4><ol><li>true</li><li>false</li></ol>",
        answer: "1"
    },
    {
        question: "<h4>The role the viola generally plays in the symphony orchestra is</h4><ol><li>Mostly accompaniment<li>Mostly melody</li><li>The bass line</li></ol>",
        answer: "1"
    },
    {
        question: "<h4>Perhaps the most famous work for solo viola, however, which is also symphonic, is entitled:</h4><ol><li><i>Finalandia</i><li>Afternoon of a Fawn</li><li><i>Harold in Italy</i></ol>",
        answer: "3"
    }
]
var qIndex = 0;
var nextQuesArr = [];
var initStorage = document.querySelector("#initials");
var quesSection = document.querySelector('section'); 
var timeEl = document.querySelector(".time");
var startButton = document.getElementById("start")
startButton.addEventListener("click", setTime)
var scoreDisplay =   document.getElementById("result");
var userChoice;

var t = 60;

function setTime() {
   nextQuesArr.push(multiChoices[qIndex].question)
   quesSection.innerHTML = nextQuesArr;
   var timerInterval = setInterval(function () {
        t--;
        timeEl.textContent = t + " Test Started";
        if (t === 0 || score === 6) {
            clearInterval(timerInterval);
            sendMessage();
            nextQuesArr = [""];
        }
    }, 1000);
}

var score = 0;

function sendMessage() {
    timeEl.textContent = "Test Over!";
    if ("Text Over") {
        initialStorage();
        scoreDisplay.innerHTML = "Score : " + score;
        quesSection.innerHTML = "";
        userChoice = "";
        console.log("score at close :" + score)
        storeScore(score);
        if (score === 6) {
            alert("Perfect Score! Congratulations!")
            alert("Your initials and score have been saved!")
        } else if (score >= 4) {
            alert("Good Score! Congratulations!")
            alert("Your initials and score have been saved!")
        } else if (score < 4) {
            alert("Perhaps you should study up on the viola")
            alert("(It will make you a better person!)")
            alert("Your initials and score have been saved!")
        }
    }
}

function cnsoleInitials() {
    console.log("initials : " + initStorage.value)
}
var initialBtn = document.getElementById("initialSubmit")
initialBtn.addEventListener('click', cnsoleInitials)

var submitBtn = document.getElementById("submit")
submitBtn.addEventListener('click', chooseFamily);
 
function chooseFamily() {
    console.log(submitAnsw) 

    var submitAnsw = document.querySelector("#ans")
    userChoice = submitAnsw.value

    if(userChoice === multiChoices[qIndex].answer) {
        alert("Correct!")
        scoreDisplay.innerHTML = "Score: " + parseInt(++score)
                       }
        else{ alert("Incorrect");
        score = score
        t = t+5;}
        nextQuesArr.push(multiChoices[++qIndex].question)
        nextQuesArr.shift(multiChoices[qIndex].question)
        quesSection.innerHTML = nextQuesArr;
}
 

//Storage
function initialStorage() {
    if (typeof (Storage) !== "undefined") {
        console.log("initStorage :" + initStorage.innerHTML)
        // Store
        localStorage.setItem("PlayerIntials", initStorage.innerHTML = initials.value);
        var getInits = localStorage.getItem("PlayerIntials")
    } else {
        document.getElementById("result2").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}

function storeScore(scoreFinal) {
    if (typeof (Storage) !== "undefined") {
        // Store
        localStorage.setItem("score", scoreFinal);
        var testScore = localStorage.getItem("score")
        testScore = parseInt(testScore)
    } else {
        document.getElementById("result2").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}


