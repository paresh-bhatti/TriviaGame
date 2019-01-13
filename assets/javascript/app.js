

function check() {
    var q1 = document.trivia.q1.value;
    var q2 = document.trivia.q2.value;
    var q3 = document.trivia.q3.value;
    var q4 = document.trivia.q4.value;
    var q5 = document.trivia.q5.value;

    
    var timer = 50;

    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    if (q1 == "Less Than Zero") {
        correct++;
    
    } else if (q1!= "Less Than Zero" && q1 !== "") {
        incorrect++;
    
    } else if (q1 === "" ) {
        incorrect++;
        unanswered++;
    }

    
    if (q2 == "Jane Weidlin") {
        correct++;
       
    } else if (q2 != "Jane Weidlin" && q2 !== "") { 
        incorrect++;
        
    } else if (q2 === "" ) {
        incorrect++;
        unanswered++;
    }

    
    if (q3 == "Paul McCartney") {
        correct++;
        
    } else if (q3!= "Paul McMartney" && q3 !== "") {
        incorrect++;
        
    } else if (q3 === "" ) {
        incorrect++;
        unanswered++;
    }
    
    
    if (q4 == "The Waitresses") {
        correct++;
     
    } else if (q4!= "The Waitresses" && q4 !== "") {
        incorrect++;
       
    } else if (q4 === "" ) {
        incorrect++;
        unanswered++;
    }
    
   
    if (q5 == "he forgets") {
        correct++;
        
    } else if (q5!= "he forgets" && q5 !== "") {
        incorrect++;
        
    } else if (q5 === "" ) {
        incorrect++;
        unanswered++;
    }


    document.getElementById("afterSubmit").style.visibility = "visible";
    window.clearInterval(update);
    document.getElementById("timer").innerHTML = "Time Remaining: " + s + " seconds";
    document.getElementById("correctAnswers").innerHTML = "You got " + correct + " correct.";
    document.getElementById("wrongAnswers").innerHTML = "You got " + incorrect + " wrong.";
    document.getElementById("unanswered").innerHTML = "You did not answer " + unanswered + " questions!";
}
s = 51;
function timer001() {
    s = s - 1;
    if (s >=0 ) {
        document.getElementById("timer").innerHTML = "Time Remaining: " + s + " seconds";
    }

    else if (s <= 1) {
        
        window.clearInterval(update);
        alert("Time's Up! Thanks for playing...");
      

    }
}
var update = setInterval("timer001()", 1000);

