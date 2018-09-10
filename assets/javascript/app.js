// A $( document ).ready() block.
$(document).ready(function () {
    console.log("ready!");

    //====================================================================================================================
    //  Variables
    //====================================================================================================================
    // Array of Questions
    var question_array = [
        {
            question: "Whats my name?",
            choices: ["heber", "katie", "ger", "Stan"],
            answer: 0
        },
        {
            question: "How old am I?",
            choices:["23", "25", "32", "50"],
            answer: 1
        },
        {
            question: "Whos my wife?",
            choices:["heber", "katie", "ger", "Stan"],
            answer: 1
        }
    ];
    // A question from the Array
    var random_question;
    // Players answer choice
    var selected_choice;
    var correct_answers = 0;
    var incorrect_answers = 0;
    var questions_asked = 0;

    // HTML divs________________________________________________________________
    var reset_div = $("#reset");
    var start_button_div = $("#startDiv");
    var timer_div = $("#timerDiv");
    var question_div = $("#questionDiv");
    var correct_answer_div = $("#correctAnswerDiv");
    var answers_div = $("#answers");
    var q0_div = $("#0");
    var q1_div = $("#1");
    var q2_div = $("#2");
    var q3_div = $("#3");
    var congrats_display_div = $("#congratsDisplay");
    var congrats_text_div = $("#congratsText");
    var done_text_div = $("#doneText");
    var answers_correct_text_div = $("#answersCorrectText");
    var correct_counter_div = $("#correctCounter");
    var answers_incorrect_text_div = $("#answersIncorrectText")
    var incorrect_counter_div = $("#incorrectCounter");    

    // Creating HTML elements___________________________________________________
    var start_button = $("<button id='start'>Start</buton>");
    var question_element = $("<h3 id='question'>");

    //====================================================================================================================
    //  Functions
    //====================================================================================================================
    // Displays the trivia question and answer choices__________________________
    function renderQuestion() {
        //clearing the divs for when they have text in them
        congrats_display_div.html("");
        correct_answer_div.html("");

        //selects random question from the array
        random_question = question_array[Math.floor(Math.random() * question_array.length)];

        //Displays the actual question to the html with the possible answers
        question_div.html(question_element.text(random_question.question));
        q0_div.html(random_question.choices[0]);
        q1_div.html(random_question.choices[1]);
        q2_div.html(random_question.choices[2]);
        q3_div.html(random_question.choices[3]);
    }


    // Renders this screen if player answers the question correctly_____________
    function winScreen() {
        showCorrectAnswer(random_question.answer);
        congrats_display_div.html("<h3>CONGRATS!!!!!!</h3>");
    }

    // Renders this screen if player answers the question wrong_________________
    function loseScreen() {
        showCorrectAnswer(random_question.answer);
        congrats_display_div.html("<h3>Sorry, That was the incorrect Answer</h3>");
    }

    // Clears all the wrong answers and only shows the correct answer___________ 
    function showCorrectAnswer(right_answer){
        switch (right_answer) {
            case 0:
                correct_answer_div.html(random_question.choices[0]);
                q0_div.html("");
                q1_div.html("");
                q2_div.html("");
                q3_div.html("");
                break;

            case 1:
                correct_answer_div.html(random_question.choices[1]);
                q0_div.html("");
                q1_div.html("");
                q2_div.html("");
                q3_div.html("");
                break;

            case 2:
                correct_answer_div.html(random_question.choices[2]);
                q0_div.html("");
                q1_div.html("");
                q2_div.html("");
                q3_div.html("");
                break;

            case 3:
                correct_answer_div.html(random_question.choices[3]);
                q0_div.html("");
                q1_div.html("");
                q2_div.html("");
                q3_div.html("");
                break;
        }
    }

    // Clears the content on the screen_________________________________________
    function clearContentSection() {
        timer_div.html("");
        question_div.html("");
        correct_answer_div.html("");
        q0_div.html("");
        q1_div.html("");
        q2_div.html("");
        q3_div.html("");
        congrats_display_div.html("");
        done_text_div.html("");
        congrats_text_div.html("");
        correct_answer_div.html("");
        answers_correct_text_div.html("");
        correct_counter_div.html("");
        answers_incorrect_text_div.html("");
        incorrect_counter_div.html("");
    }

    //====================================================================================================================
    //  Main
    //====================================================================================================================
    start_button_div.html(start_button);

    $(start_button_div).on("click", "#start", function () {
        start_button_div.html("");
        renderQuestion();

        
        $(answers_div).on("click", ".questionChoice", function () {
            selected_choice = $(this);

            if (questions_asked >== 2) {
                questions_asked++;
                if (parseInt(selected_choice.attr("id")) === random_question.answer) {
                    correct_answers++;
                    console.log("correct answer = " + correct_answers);
                    winScreen();
                    setTimeout(renderQuestion, 3000);
                    
                }else{
                    incorrect_answers++;
                    console.log("incorrect answer = " + incorrect_answers);
                    loseScreen();
                    setTimeout(renderQuestion, 3000);
                }
            }else{
                //TODO: Show anwers after done
                //here will display the correct answers
                clearContentSection();
                correct_counter_div.html(correct_answers);
                incorrect_counter_div.html(incorrect_answers)
            }
        });
    });

    $(reset_div).on("click", function() {
        location.reload();
    });
});