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
     
    if (userChoice.toLowerCase() === "string" || userChoice.toLowerCase() === "larger" || userChoice.toLowerCase() === "Mellower") {
         alert("correct");
        
       
    }
   else {
     alert("wrong asnswer")
   }
   $("section").empty(); 

function quest(question, answ1, answ2) {
    this.question = question; 
    this.answ1 = answ1; 
    this.answ2= answ2; 
    
    return document.querySelector("section").innerHTML = question + answ1 + answ2;
    
}

quest("<h4>The sound of a viola, compared to a violin is:<h4>", "<li>Mellower</li>", "<li>Louder</li>" )

}
    
})







    
