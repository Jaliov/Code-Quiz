var multiChoices = [
    {
        question: "<h4 class = 'text-left'>The viola is a member of which family of musical instruments?</h4><ol class = 'text-left'><li>Brass</li><li>String</li><li>Woodwinds</li></ol>",
        answer: "2"
    },
    {
        question: "<h4 class = 'text-left'>The size of a viola, compared to a violin is a bit:</h4><ol class = 'text-left'><li>Larger</li><li>Smaller</li><li>Just the same</li></ol>",
        answer: "1"
    },
    {  
        question: "<h4 class = 'text-left'>Compared to a violin, the 4 strings of a viola are tuned:</h4><ol class = 'text-left'><li>Higher than a violin</li><li>Lower than a violin</li><li>Lower than a cello</li><ol class = 'text-left'>",
        answer: "2"
    },
    {
        question: "<h4 class = 'text-left'>While played the viola is held under the chin like a violin:</h4><ol class = 'text-left'><li>true</li><li>false</li></ol>",
        answer: "1"
    },
    {
        question: "<h4 class = 'text-left'>The role the viola generally plays in the symphony orchestra is</h4><ol class = 'text-left'><li>Mostly melody</li><li>Mostly accompaniment</li><li>The bass line</li></ol>",
        answer: "2"
    },
    {
        question: "<h4 class = 'text-left'>Perhaps the most famous work for solo viola, however, which is also symphonic, is entitled:</h4><ol class = 'text-left'><li><i>Finalandia</i><li>Afternoon of a Fawn</li><li><i>Harold in Italy</i></ol>",
        answer: "3"
    }
]
var qIndex = 0;
var nextQuesArr = [];
var initStorage = document.querySelector("#initials")
var quesSection = document.querySelector('section'); 
var timeEl = document.querySelector(".time");
var startButton = document.getElementById("start")
startButton.addEventListener("click", setTime)
var scoreDisplay =   document.getElementById("result");
var initialsClear = document.getElementById("clearField")
var userChoice;


var t = 60;

var score = 0;

function loadStart() { 
    event.preventDefault();
    initialsClear.innerHTML = "";
    document.getElementById("testInit").innerHTML = "<h5 class='text-center'>Answer Here: <input type='number' id='ans' name='scoreRecord' placeholder = '1,2,3' min='1' max='3'></h5><button class='btn btn-outline-light mx-auto' style='width: 100px;' id='submit'>Submit</button>"  
    var submitBtn = document.getElementById("submit")
    submitBtn.addEventListener('click', chooseFamily); 
    
}

function setTime() {
    
    initialStorage();
    loadStart();
    startButton.innerHTML = "";
    //initialsClear.innerHTML = "";
   nextQuesArr.push(multiChoices[qIndex].question)
   quesSection.innerHTML = nextQuesArr;
   var timerInterval = setInterval(function () {
        t--;
        timeEl.textContent = t + " Timer";
        if (t === 0 || qIndex === 5 || score === 6 || t < 0 ) {
            clearInterval(timerInterval);
            sendMessage();
            nextQuesArr = null;
            setTimeout(quizRepeat, 3000)
        }
    }, 1000);
}

quizRepeat = () => {
    return location.reload(true/false)
 }

function sendMessage() {
    timeEl.textContent = "Test Over!";
    if ("Test Over") {
      
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
            alert("Perhaps you should study up on the viola! (It will make you a better person!)")
            alert("Your initials and score have been saved!")
        }
    }
}

function cnsoleInitials() {
    console.log("initials : " + initStorage.value)
  
}
var initialBtn = document.getElementById("initialSubmit")
initialBtn.addEventListener('click', cnsoleInitials)
 
function chooseFamily() {  
    console.log(submitAnsw) 
    var submitAnsw = document.querySelector("#ans")
    userChoice = submitAnsw.value

    if(userChoice === multiChoices[qIndex].answer) {
        alert("Correct!")
        scoreDisplay.innerHTML = "Score: " + parseInt(++score)
                       }
        else{alert("Incorrect");
        score = score
        t = t+5;}
        nextQuesArr.push(multiChoices[++qIndex].question)
        nextQuesArr.shift(multiChoices[qIndex].question)
        quesSection.innerHTML = nextQuesArr;
}
 
//Storage
function initialStorage() {
    if (typeof (Storage) !== "undefined") {
        console.log("initStorage :" + initStorage.value)
        // Store
        localStorage.setItem("PlayerInitials", initStorage.value);
        var getInits = localStorage.getItem("PlayerInitials")
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


