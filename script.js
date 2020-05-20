var multiChoices = [
  {
    question:
      "<h4 class = 'text-left'>The viola is a member of which family of musical instruments?</h4><ol class = 'text-left'><li>Brass</li><li>String</li><li>Woodwinds</li></ol>",
    answer: '2',
  },
  {
    question:
      "<h4 class = 'text-left'>The size of a viola, compared to a violin is a bit:</h4><ol class = 'text-left'><li>Larger</li><li>Smaller</li><li>Just the same</li></ol>",
    answer: '1',
  },
  {
    question:
      "<h4 class = 'text-left'>Compared to a violin, the 4 strings of a viola are tuned:</h4><ol class = 'text-left'><li>Higher than a violin</li><li>Lower than a violin</li><li>Lower than a cello</li><ol class = 'text-left'>",
    answer: '2',
  },
  {
    question:
      "<h4 class = 'text-left'>While played the viola is held under the chin like a violin:</h4><ol class = 'text-left'><li>true</li><li>false</li></ol>",
    answer: '1',
  },
  {
    question:
      "<h4 class = 'text-left'>The role the viola generally plays in the symphony orchestra is</h4><ol class = 'text-left'><li>Mostly melody</li><li>Mostly accompaniment</li><li>The bass line</li></ol>",
    answer: '2',
  },
  {
    question:
      "<h4 class = 'text-left'>Perhaps the most famous work for solo viola, however, which is also symphonic, is entitled:</h4><ol class = 'text-left'><li><i>Finalandia</i><li>Afternoon of a Fawn</li><li><i>Harold in Italy</i></ol>",
    answer: '3',
  },
];

var qIndex = 0;
var nextQuesArr = [];
var initStorage = document.querySelector('#initials');
var quesSection = document.querySelector('section');
var timeEl = document.querySelector('.time');
var startButton = document.getElementById('start');
startButton.addEventListener('click', setTime);
var scoreDisplay = document.getElementById('result');
var initialsClear = document.getElementById('clearField');
var userChoice;

var t = 60;

var score = 0;

function loadStart() {
  event.preventDefault();
  initialsClear.innerHTML = '';
  document.getElementById('testInit').innerHTML =
    "<h5 class='text-center'>Answer Here: <input type='number' id='ans' name='scoreRecord' placeholder = '1,2,3' min='1' max='3'></h5><button class='btn btn-outline-light mx-auto' style='width: 100px;' id='submit'>Submit</button>";
  var submitBtn = document.getElementById('submit');
  submitBtn.addEventListener('click', chooseFamily);
}

function setTime() {
  //initialStorage();
  loadStart();
  startButton.innerHTML = '';
  //initialsClear.innerHTML = "";
  nextQuesArr.push(multiChoices[qIndex].question);
  quesSection.innerHTML = nextQuesArr;
  var timerInterval = setInterval(function () {
    t--;
    timeEl.textContent = t + ' Timer';
    if (t === 0 || qIndex === 6 || score === 6 || t < 0) {
      clearInterval(timerInterval);
      sendMessage();
      nextQuesArr = null;
      setTimeout(quizRepeat, 3000);
    }
  }, 1000);
}

quizRepeat = () => {
  return location.reload(true / false);
};

function sendMessage() {
  timeEl.textContent = 'Test Over!';
  if ('Test Over') {
    scoreDisplay.innerHTML = 'Score : ' + score;
    quesSection.innerHTML = '';
    userChoice = '';
    console.log('score at close :' + score);
    initialStorage();
    if (score === 6) {
      setTimeout(function () {
        alert('Perfect score, congratulations!'),
          alert('Your initials and score have been saved!');
      }, 3000);
    } else if (score >= 4) {
      setTimeout(function () {
        alert('Good score, congratulations!'),
          alert('Your initials and score have been saved!');
      }, 3000);
    } else if (score < 4 && score > 0) {
      setTimeout(function () {
        alert(
          'Perhaps you should study up on the viola! (It will make you a better person!)'
        ),
          alert('Your initials and score have been saved!');
      }, 3000);
    } else {
      quizRepeat();
    }
  }
}

function cnsoleInitials() {
  console.log('initials : ' + initStorage.value);
}
var initialBtn = document.getElementById('initialSubmit');
initialBtn.addEventListener('click', cnsoleInitials);

//Load questions
function chooseFamily() {
  var submitAnsw = document.querySelector('#ans');
  userChoice = submitAnsw.value;
  if (userChoice === multiChoices[qIndex].answer) {
    //alert("Correct!")
    $('#modal_correct').modal();
    scoreDisplay.innerHTML = 'Score: ' + parseInt(++score);
  } else {
    $('#modal_incorrect').modal();
    score = score;
    t = t + 5;
  }
  scoreDisplay.innerHTML = 'Score: ' + score;
  nextQuesArr.push(multiChoices[++qIndex].question);
  nextQuesArr.shift(multiChoices[qIndex].question);
  quesSection.innerHTML = nextQuesArr;
}

//Storage
const initialStorage = () => {
  const quizStats = {
    PlayerInitials: initStorage.value,
    finalScore: score,
  };
  typeof Storage !== 'undefined'
    ? console.log(quizStats)
    : (document.getElementById('result').innerHTML =
        'Sorry, your browser does not support Web Storage...');

  let AppendValueToStorage = (key, value) => {
    let RetrievedInput = JSON.parse(localStorage.getItem(key));
    if (RetrievedInput === null) {
      RetrievedInput = [];
    }

    RetrievedInput.push(value);
    localStorage.setItem(key, JSON.stringify(RetrievedInput));
    console.log(localStorage.getItem(key));
  };
  AppendValueToStorage('PlayerInitials', quizStats);
  //   document.forms[0].reset();
};
