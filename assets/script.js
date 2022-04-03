// go back and finishs generate
// create the timer
//handle displaying local storage

var qCount;

var container = document.querySelector("#board");
var startBtn = document.querySelector("#start");
var score = 0;

var begun = false;

var question = document.querySelector("#questionDisplay");

var btn1 = document.querySelector("#option1");
var btn2 = document.querySelector("#option2");
var btn3 = document.querySelector("#option3");
var btn4 = document.querySelector("#option4");

var option1 = document.querySelector("#label1");
var option2 = document.querySelector("#label2");
var option3 = document.querySelector("#label3");
var option4 = document.querySelector("#label4");

var q1 = {
    question: "which is not a language?",
    options: ["Kevin", "Javascript", "CSS", "HTML"],
    isCorrect: "Kevin"
}

var q2 = {
    question: "which is not a language?",
    options: [ "Kate", "Javascript", "CSS", "HTML"],
    isCorrect: "Kate"
}

var q3 = {
    question: "which is not a language?",
    options: [ "Kyle", "Javascript", "CSS", "HTML"],
    isCorrect: "Kyle"
}

var q4 = {
    question: "which is not a language?",
    options: [ "Kayla", "Javascript", "CSS", "HTML"],
    isCorrect: [true, false, false, false]
}

var q5 = {
    question: "which is not a language?",
    options: [ "Kenji", "Javascript", "CSS", "HTML"],
    isCorrect: "Kenji"
}
var questions = [q1, q2, q3, q4, q5];
var temp = [];

function generate(b){
    var seed;

    //reorder the options
    temp = [];
    for(var i = 0; i < questions[b].options.length; i){
        var j = Math.floor(Math.random()*(questions[b].options.length));
        temp.push(questions[b].options[j]);
        questions[b].options.splice(j, 1);
    }

    for (var i = 0; i < temp.length; i++){
        console.log(temp[i]);
        questions[b].options.push(temp[i]);
    }



    //assign the values
    question.textContent = questions[b].question;
    option1.textContent = questions[b].options[0];
    option2.textContent = questions[b].options[1];
    option3.textContent = questions[b].options[2];
    option4.textContent = questions[b].options[3];

}

function begin(){
    qCount = 0;
    score = 0;
    questions = [q1, q2, q3, q4, q5];

    temp = [];
    for(var i = 0; i < questions.length; i){
        var j = Math.floor(Math.random()*(questions.length));
        temp.push(questions[j]);
        questions.splice(j, 1);
    }

    for (var i; i < temp.length; i++){
        console.log(temp[i]);
        questions.push(temp[i]);
    }

    generate(qCount);
}




// WHEN I answer a question
// THEN I am presented with another question

container.onclick = function(event) {

    qCount++;
    let target = event.target;
    if(target.textContent == "Start Quiz"){
        target.style.display = 'none';
         return;
    }

    if (target.textContent === questions[qCount].isCorrect){
        //add score
        score++;
    }else{
        //shave time

    }

// WHEN the game is over
// THEN I can save my initials and my score

    console.log(qCount);
    if (qCount < questions.length){
        generate(qCount);
    }else if (qCount == questions.length){
        localStorage.setItem( score ,prompt("Score: " + score + ". GAME OVER, enter your name:") );
    }
}


// WHEN I click the start button
// THEN a timer starts and I am presented with a question
startBtn.addEventListener("click", begin);

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock



// WHEN all questions are answered or the timer reaches 0
// THEN the game is over


