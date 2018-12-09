$( document ).ready(function () {
console.log('ready!');

//Questions//
var questions = [
                {
                question: "1. Who was the vilian in Samurai Jack?",
                choices: ["Abu", "Haiku", "Aku", "Tom"],
                answer: 1,
                },
                {
                question: "2. In Dexter's Laboratory, what is the name of Dexter's sister?",
                choices: ["Libby", "Mi Mi", "Dee Dee", "Darla"],
                answer: 3,
                 },
                 {
                question:  "3. What is the name of the kind-hearted but clueless women in the series Courage the Cowardly Dog?",
                choices: ["Muriel", "Martha", "Mabel", "Mary"],
                answer: 1,
                },
                {
                question: "4. In Johnny Bravo what's Johnny's catchprase?",
                choices: ["Groovy", "Whoa Mama", "Zoinks", "Hey Daddy-O"],
                answer: 2,
                },
                {
                question: "5. In which ficional city does the series Chowder take place?",
                choices: ["Chocolate City", "Pasta Village", "Veggie Village", "Marzipan City"],
                answer: 4,
                },
                {
                question: "6. In The Amazing World of Gumball, what's the name of the pet goldfish taht grew legs and became Gumball's best friend?",
                choices: ["Richard", "Larry", "Darwin", "Fish Mike"],
                answer: 3,
                },
                                
                
]


var correctAnswer= 0;
var wrongAnswer= 0;
var noAnswer= 0;
var userGuess= "";
var answered; 
var userSelect;
var numberOfAnswers = questions.length;



// start game onclick //

$("#start").click(function(){
    console.log("click");
    var timerId = setInterval(countdown, 1000);
    countdown();
    $("#start").hide();
    questionPages();
});

//Timer//
var timeLeft = 30;
var timer = document.getElementById('timer');


function countdown() {
    
    if (timeLeft == -1) {
        // clearTimeout(timerId);//
        //  doSomething();		
        clearInterval(timeLeft);
		answered = false;
        unanswered();
    } else {
        timer.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
        
    }
}


// // Right GIF//
// $('#rightGif').prepend('<img src="assests/images/wrong.gif"/>')

// //Wrong GIF//
// $('#wrongGif').prepend('<img src="assests/images/Right.gif"/>')

function newGame(){
    console.log("New Game")

	$('#correctAnswers').empty();
	$('#incorrectAnswers').empty();
	$('#noAnswer').empty();
	correctAnswer = 0;
	wrongAnswer = 0;
	noAnswer = 0;
    questionPages();
}


function questionPages (){
console.log ("Question Pages!");

// Reset DOM //

// $('#questionsOnPage').empty();
// $('#answersOnPage').remove();
// $('#gif').empty();

$('#questionsOnPage').text(questions[1].question);
 

selectedSet = questions[1];


console.log(selectedSet);

$('#question').text(selectedSet.question);



for (let i = 0; i < selectedSet.choices.length; i++) {
  let userPick = $('<div>');
  userPick.addClass('answers');
  userPick.text(selectedSet.choices[i]);
  userPick.attr("data-value", (i + 1));
  $('#answersOnPage').append(userPick);



}


}

function unanswered (){

console.log("ran out of time");
}
// Results Page// 

function finalPage (){

console.log('finalPage ran');

}








});