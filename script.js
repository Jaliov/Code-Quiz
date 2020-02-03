var timeEl = document.querySelector(".time");

var startButton = document.getElementById("start")
startButton.addEventListener("click", setTime)

var t = 60;
function setTime() {
    quesSection.innerHTML = multiChoice[0];
    var timerInterval = setInterval(function () {
        t--;
        timeEl.textContent = t + " Test Started";
        if (t === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}

var score = 0;
function sendMessage() {
    timeEl.textContent = "Test Over!";
    if ("Text Over") {
        initialStorage();
        document.getElementById("result").innerHTML = "Score : " + score;
    
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
            alert("(It will make you a better person.)")
            alert("Your initials and score have been saved!")
        }
    }
}
var initStorage = document.querySelector("#initials");
var quesSection = document.querySelector('section');

console.log(multiChoice)
//All mutiple choice 
var multiChoice = [
    //1
    "<h4>The viola is a member of which family of musical instruments?:</h4><ul><li>Brass</li><li>String</li><li>Woodwinds</li></ul>",
    //2
    "<h4>The size of a viola, compared to a violin is:</h4><ul><li>Larger</li><li>Smaller</li><li>Same</li></ul>",
    //3
    "<h4>The tone of a viola, compared to a violin is:</h4><ul><li>Mellower</li><li>Brighter</li></ul>",
    //4
    "<h4>The 4 strings of a viola are tuned lower than a violin, how much lower?:</h4><ul><li>Octave</li><li>third</li><li>fifth</li></ul><br><h5>",
    //5
    "<h4>While played the viola is held under the chin like a violin:</h4><ul><li>true<li><li>false</li></ul>",
    //6
    "<h4>The role the viola generally plays in the symphony orchestra is</h4><p> (Please enter a number):</p><ol><li>Mostly accompaniment<li>Mostly melody</li><li>The bass line</li></ol>",
    //7
    "<h4>Perhaps the most famous work for solo viola, however, which is also symphonic, is entitled <p>(Please enter a number):</p></h4><ol><li><i>Finalandia</i><li>Afternoon of a Fawn</li><li><i>Harold in Italy</i></ol>",
    //8
    "<h4>Finished</h4>"
]


function nextQues(x) {
    alert("correct")
    quesSection.innerHTML = x;
    score = score + 1;
    document.getElementById("result").innerHTML = "Score : " + score;
    return x;
}

function nextQuesAlt(x) {
    quesSection.innerHTML = x;
    return x;
}

function cnsoleInitials() {
    console.log("initials : " + initStorage.value)
}
var initialBtn = document.getElementById("initialSubmit")
initialBtn.addEventListener('click', cnsoleInitials)

var submitBtn = document.getElementById("submit")
submitBtn.addEventListener('click', chooseFamily);

var choice;
for (y = 1; y < multiChoice.length; y++) {
    choice === multiChoice[y];
}
var correctAnswArr = ["string", "larger", "mellower", "true", "fifth", "1", "3"]

for (i = 0; i < correctAnswArr.length; i++) {
    correctAnswArr[i];
    console.log(correctAnswArr[i])
}

function chooseFamily() {
    console.log(submitAnsw)
    var submitAnsw = document.querySelector("#ans")
    var userChoice = submitAnsw.value;
    console.log(userChoice)
    //var clearIt = document.getElementById("ans").placeholder
    //1
    if (userChoice.toLowerCase() === correctAnswArr[0]) {
        nextQues(multiChoice[1])
        //2
    } else if (userChoice.toLowerCase() === correctAnswArr[1]) {
        nextQues(multiChoice[2])
        //3
    } else if (userChoice.toLowerCase() === correctAnswArr[2]) {
        nextQues(multiChoice[3])
        //4
    } else if (userChoice.toLowerCase() === correctAnswArr[3]) {
        nextQues(multiChoice[4])
        //5
    } else if (userChoice.toLowerCase() === correctAnswArr[4]) {
        nextQues(multiChoice[5])
        //6
    } else if (userChoice.toLowerCase() === correctAnswArr[5]) {
        nextQues(multiChoice[6])
        //7
    } else if (userChoice.toLowerCase() === correctAnswArr[6]) {
        nextQues(multiChoice[7])
    } else {
        alert("incorrect")
        score === score + 0;
    }
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