var questions = [{
    question: "What year did the Tour de France begin?",
    answerChoices: ["1925", "1903", "1848", "2001"], 
    correctAnwer: [1]
},

{
    question: "Who was the first winner of the Tour?",
    answerChoices: ["Henri Cornet", "Lance Armstrong", "Michael Phelps", "Maurice Garin"],
    correctAnswer: [3]
},

{
    question: "What mountain ranges does the race pass through?",
    answerChoices: ["Alps", "Himalayas", "Pyrenees", "Rockies"],
    correctAnswer: [0]
},

{
    question: "How many miles a day do the cyclists have to ride?",
    answerChoices: ["500", "400", "100", "200"],
    correctAnswer: [2]
},

{
    question: "What is the total distance the racers will have traveled by the end of the Tour?",
    answerChoices: ["2,200", "9,050", "800", "1,370"],
    correctAnswer: [0]
}
];

var currentQuestion = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;

function questionOptions() {

    $('#container').hide();
    $('#next').hide();
    $('#timeRemaining').hide();
    $('#submit').hide();
    $('#results').hide();

    $('#question').html(parseInt(currentQuestion) + 1 + ". " + questions[currentQuestion].question);
    var formHtml = '';
        
    for (var i = 0; i < questions.length; i++) {
        formHtml += '<div><input type="radio" name="option" value="' + i + '" id="option' + i + '"><label for="option' + i + '">' + questions[currentQuestion].answerChoices[i] + '</label></div><br/>';
    }

    $('#form').html(formHtml);
    $('#option').prop('checked', true);

};

//not functioning
function checkAnswers() {
    if($('input[type=radio]:checked').val() === questions[currentQuestion].correctAnswer) {
        correctAnswers++;
        console.log(this.val);
    }
    else if ($('input[type=radio]:checked').val() != questions[currentQuestion].correctAnswer) {
        incorrectAnswers++;
        console.log(this.val);
    }
    
};

$(document).ready(function() {
var start = $('#start');
var next = $('#next');
var results = $('#results'); //not functioning
var stop;

start.click(function() {
    $("#start").hide();
    $('#submit').hide();
    $('#results').hide();
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
        $('#results').show();
        }
    }, 1000);
    });

next.click(function() {
    event.preventDefault();
    checkAnswers(); //incorrect
    currentQuestion++;
    questionOptions();
    $('#container').show();
    $('#next').show();
    $('#timeRemaining').show();
    $('#submit').hide();
    $('#results').hide();
});

//not functioning
if (currentQuestion < questions.length) {
    questionOptions();
}
    else if (currentQuestion === questions.length -1) {
        $('#next').append('#submit');
       // $('#submit').show();
        $('#submit').click(function() {
            $('#results').show();
            $('#results').html("Correct Answers: " + correctAnswers + "Incorrect Answers: " + incorrectAnswers);
          });
          
        };
 
});








    

