//create variables
//set the timer to countdown after start button is pressed
//create radio buttons that only capture one response
//'Done' button that will submit answers
//Page 'clears' are reveals Number of Correct Answers, Incorrect Answers, and those left unanswered

//create radion buttons
function quizQuestion(question, answerChoices, correctAnswer) {
    this.question = question;
    this.answerChoices = answerChoices;
    this.correctAnswer = correctAnswer;
}

var questions = [{
    question: "What year did the Tour de France begin?",
    answerChoices: ["1925", "2008", "1848", "1957"], 
    correctAnwer: 2
},

{
    question: "Who was the first winner of the Tour?",
    answerChoices: ["Name1", "Name2", "Name3", "Name4"],
    correctAnswer: 4
},

{
    question: "What mountain range does the race pass through?",
    answerChoices: ["One", "Two", "Three", "Four"],
    correctAnswer: 1
},

{
    question: "How many miles a day do the cyclists have to ride?",
    answerChoices: ["500", "400", "300", "200"],
    correctAnswer: 3
},

{
    question: "What is the total distance the racers will have traveled by the end of the Tour?",
    answerChoice: ["1000", "900", "800", "700"],
    correctAnswer: 1
}
];

var currentQuestion = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;

function questionOptions() {
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

start.click(function() {
    var time = 45;
    setInterval(function() {
    time--; 
    
    if (time >= 0) {
    $('#timeRemaining').html("<h4>" + time + " Seconds <h4>");

    }
    if (time === 0) {
        stop();
        alert("Time's Up!"); 
        $('#results').html("Correct Answers: " + correctAnswers);
        $('#results').html("Incorrect Answers: " + incorrectAnswers);
        clearInterval(time);
        }
    }, 1000);
    });

    next.click(function() {
    event.preventDefault();
    (this).question;
    checkAnswers();
    currentQuestion++;
    });

    questionOptions();

    if (currentQuestion < questions.length) {
        questionOptions();
        if (currentQuestion === questions.length -1) {
            $('#next').html('Submit');
            $('#next').click(function() {
                $('#results').html("Correct Answers: " + correctAnswers);
                $('#results').html("Incorrect Answers: " + incorrectAnswers);
                });
            };
        };

});






    

