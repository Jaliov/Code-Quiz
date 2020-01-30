//var counter=setInterval(timer, 1000); //1000 will  run it every 1 second



// function timer(time,update,complete) {
//     var start = new Date().getTime();
//     var interval = setInterval(function() {
//         var now = time-(new Date().getTime()-start);
//         if( now <= 0) {
//             clearInterval(interval);
//             complete();
//         }
//         // else update(Math.floor(now/1000));
//     },100); // the smaller this number, the more accurate the timer will be
// }

// document.getElementById("start").addEventListener("click", timer)
// timer(
//     5000, // milliseconds
//     function(timeleft) { // called every step to update the visible c(ountdown
//         console.log(timeleft+" second(s)")
//         return timeleft+" second(s)";
//     },
//     function() { // what to do after
//         alert("Timer complete!");
//     }
// );

$( document ).ready(function() {
    console.log( "ready!" );


var submitBtn = document.getElementById("submit")
submitBtn.addEventListener("click", chooseFamily)

var getFamily = document.querySelector("#ans")
function chooseFamily() {
    console.log(getFamily)
    var userChoice = getFamily.value;
    console.log(userChoice)

    if (userChoice.toLowerCase() === "string" || "Under the chin" || "Mellower") {
        alert("correct")  
     
    if (userChoice === true) {
        $("#instruFamily").empty(); 
    }
    } else {
        alert("wrong answer")
    }  
    
     var elementrplce = document.querySelector("section")
    
    

elementrplce.innerHTML = "<h4>Compared in snbbbbbbjjkkkk<h4>";
  "<li>ttler</li>" +
  "<li>Larger</li>" +
  "<li>Eqtl</li>" +
"</ol>" +
"</div >";
}
})


    
