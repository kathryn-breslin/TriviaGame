//create variables
//set the timer to countdown after start button is pressed
//create radio buttons that only capture one response
//'Done' button that will submit answers
//Page 'clears' are reveals Number of Correct Answers, Incorrect Answers, and those left unanswered

//create radion buttons

// function quizQuestion(question, answerChoices, correctAnswer) {
//     this.question = question;
//     this.answerChoices = answerChoices;
//     this.correctAnswer = correctAnswer;
// }

var questions = [{
    question: "What year did the Tour de France begin?",
    answerChoices: ["1925", "1903", "1848", "2001"], 
    correctAnwer: 2
},

{
    question: "Who was the first winner of the Tour?",
    answerChoices: ["Henri Cornet", "Lance Armstrong", "Michael Phelps", "Maurice Garin"],
    correctAnswer: 4
},

{
    question: "What mountain ranges does the race pass through?",
    answerChoices: ["Alps", "Himalayas", "Pyrenees", "Rockies"],
    correctAnswer: 1
},

{
    question: "How many miles a day do the cyclists have to ride?",
    answerChoices: ["500", "400", "100", "200"],
    correctAnswer: 3
},

{
    question: "What is the total distance the racers will have traveled by the end of the Tour?",
    answerChoices: ["2,200", "9,050", "800", "1,370"],
    correctAnswer: 1
}
];

var currentQuestion = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;


function questionOptions() {

    $('#container').hide();
    $('#next').hide();
    $('#timeRemaining').hide();

    $('#question').html(parseInt(currentQuestion) + 1 + ". " + questions[currentQuestion].question);
    //var options = questions[currentQuestion].answerChoices;
    var formHtml = '';
        
    for (var i = 0; i < questions.length; i++) {
        formHtml += '<div><input type="radio" name="option" value="' + i + '" id="option' + i + '"><label for="option' + i + '">' + questions[currentQuestion].answerChoices[i] + '</label></div><br/>';
    }

    $('#form').html(formHtml);
    $('#option').prop('checked', true);
    

};

function checkAnswers() {
    if($('input[name=option]:checked').val() === questions[currentQuestion].correctAnswer) {
        correctAnswers++;
    }
    else if ($('input[name=option]:checked').val() != questions[currentQuestion].correctAnswer) {
        incorrectAnswers++;
    }
};

$(document).ready(function() {
var start = $('#start');
var next = $('#next');
var results = $('#results');
var stop;

start.click(function() {
    $("#start").hide();
    $('#timeRemaining').show();
    $('#container').show();
    $('#next').show();
    var time = 30;
    setInterval(function() {
    time--; 
    
    if (time >= 0) {
    $('#timeRemaining').html("<h4>" + time + " Seconds <h4>");

    }
    if (time === 0) {
        stop();
        clearInterval(time);
        }
    }, 1000);
    });

next.click(function() {
    event.preventDefault();
    checkAnswers();
    currentQuestion++;
    questionOptions();
    $('#container').show();
    $('#next').show();
    $('#timeRemaining').show();
    
});

if (currentQuestion < questions.length) {
    questionOptions();
    if (currentQuestion === questions.length -1) {
        $('#next').html("Submit");
        $('#next').click(function() {
            $('#results').show();
            $('#results').html("Correct Answers: " + correctAnswers + "Incorrect Answers: " + incorrectAnswers);
        
           // $('#results').html("Incorrect Answers: " + incorrectAnswers);
            });
        };
    };
 
});








    

