var questions = [{
    question: "In what year did the Tour de France begin?",
    answerChoices: ["1925", "1903", "1848", "2001"],
    correctAnswer: "1"
},

{
    question: "Who was the first winner of the Tour?",
    answerChoices: ["Henri Cornet", "Lance Armstrong", "Michael Phelps", "Maurice Garin"],
    correctAnswer: "3"
},

{
    question: "Through which mountain range does the race pass?",
    answerChoices: ["Alps", "Himalayas", "Pyrenees", "Rockies"],
    correctAnswer: "0"
},

{
    question: "The cyclists must race how many miles per day?",
    answerChoices: ["500", "400", "100", "200"],
    correctAnswer: "2"
},

{
    question: "What is the total distance the racers will have traveled by the end of the Tour?",
    answerChoices: ["2,200", "9,050", "800", "1,370"],
    correctAnswer: "0"
}
];

var correctAnswers = 0;
var incorrectAnswers = 0;
var currentQuestion = 0;
var correct;
var question;
var sum = correctAnswers + incorrectAnswers;
var background = $('#background');

$(document).ready(function () {
    background.hide();
    var start = $('#start');
    var time = 30;
    var initialOffset = '440';
    var i = 1;

    //Starting the game and the clock on click
    start.click(function () {
        background.show();
        $('.circle_animation').css('stroke-dashoffset', initialOffset-(1*(initialOffset/time)));
        displayQuestion();
        start.hide();
        
        var interval = setInterval(function() {
                $('#timeRemaining').text(i);
                if (i === time) {  	
                    clearInterval(interval);
                    showResults();
                    clock.hide();
            }
            else {
                $('.circle_animation').css('stroke-dashoffset', initialOffset-((i+1)*(initialOffset/time)));
                i++;  
            }
        }, 1000);
    });

    //Display questions in the DOM
    function displayQuestion() {
        question = questions[currentQuestion].question;
        correct = questions[currentQuestion].correctAnswer;
        $('#question').html(question);

        for (var i = 0; i < 4; i++) {
            var answers = questions[currentQuestion].answerChoices[i];
            $('#form').append('<div><button type="button" class="btn btn-lg btn-block btn-outline-secondary" name="option" value="' + i + '" id="' + i + '">' + answers + '</button></div>');
            $('#option').prop('checked', true);
        }
        $('.btn-lg').on("click", function () {
            var id = $(this).attr('id');
            if (id === correct) {
                correctAnswers++;
                $('#form').empty();
                currentQuestion++;
                console.log("Correct!")
                showResults();

            }
            else if (id !== correct) {
                console.log("WRONG!");
                incorrectAnswers++;
                currentQuestion++;
                $('#form').empty();
                showResults();
            }

        })
    }
    // displayQuestion();
    
    //Function to show Results
    function showResults() {
        if (currentQuestion === 5 || i === 30 ) {
            $('#correct').html("Correct:" + correctAnswers);
            $('#incorrect').html("Incorrect:" + incorrectAnswers);
            $('#question').empty();
            $('#form').empty();
            $('#clock').empty();
        }
        else {
            displayQuestion();
        }
    }
});










