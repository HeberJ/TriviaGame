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
            choices: ["23", "25", "32", "50"],
            answer: 1
        },
        {
            question: "Whos my wife?",
            choices: ["heber", "katie", "ger", "Stan"],
            answer: 1
        }
    ];
    // A question from the Array
    var random_question;
    // Players answer choice
    var selected_choice;
    // number of questios answered correctly
    var correct_answers = 0;
    // number of questions answered incorrectly
    var incorrect_answers = 0;
    // number of questions unanswered
    var unanswered_questions = 0;
    // tracks how many questions have been asked
    var questions_asked = 0;
    // variable for the counter
    var countInterval;

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
    var unanswered_text_div = $("#unansweredText");
    var unanswered_counter_div = $("#unansweredCounter");
    var start_over_text_div = $("#startOverText");
    
    // Creating HTML elements___________________________________________________
    var start_button = $("<button id='start'>Start</buton>");
    var question_element = $("<h3 id='question'>");
    
    //====================================================================================================================
    // Timer
    //====================================================================================================================
    // Sets the time in seconds
    var time = 3
    //starts the timer
    var start = function () {
        countInterval = setInterval(count, 1000);
    }
    //stops the timer
    var stop = function () {
        clearInterval(countInterval);
    }
    //Negates 1 from the time every time it is called
    var count = function () {
        time--;
        console.log(time);
        if (time <= 0) {
            stop();
            unanswered_questions++
            didntAnswer();
        }
    } 


    //====================================================================================================================
    //  Functions
    //====================================================================================================================
    // Displays the trivia question and answer choices__________________________
    function renderQuestion() {
        console.log(unanswered_questions + "NOT Answered");
        time = 3;
        start();
        

        //clearing the divs for when they have text in them
        congrats_display_div.html("");
        correct_answer_div.html("");

        //selects random question from the array
        random_question = question_array[Math.floor(Math.random() * question_array.length)];
        if (questions_asked < 2) {
            question_div.html(question_element.text(random_question.question));
            q0_div.html(random_question.choices[0]);
            q1_div.html(random_question.choices[1]);
            q2_div.html(random_question.choices[2]);
            q3_div.html(random_question.choices[3]);

        }else{
            showScoreBoard();
        }
        // tracking how many questions have been asked
        questions_asked++;
    
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

    // Renders when a player doesnt answer a question___________________________
    function didntAnswer() {
        clearContentSection();
        setTimeout(renderQuestion, 2000);
    }

    // Clears all the wrong answers and only shows the correct answer___________ 
    function showCorrectAnswer(right_answer) {
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

    // Shows scoreboard after a certain amount of questions are asked __________
    function showScoreBoard() {
        stop();
        clearContentSection();
        question_div.html("Finished! This is how you did!");
        answers_correct_text_div.html("Correct Answers: ");
        correct_counter_div.html(correct_answers);
        answers_incorrect_text_div.html("Incorrect Answers: ")
        incorrect_counter_div.html(incorrect_answers)
        start_over_text_div.html("Would you like Play again?")
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
        unanswered_text_div.html("");
        unanswered_counter_div.html("");
        start_over_text_div.html("");
    }

    //====================================================================================================================
    //  Main
    //====================================================================================================================
    start_button_div.html(start_button);

    $(start_button_div).on("click", "#start", function () {
        start_button_div.html("");
        clearContentSection();
        renderQuestion();
    });

    //
    $(answers_div).on("click", ".questionChoice", function () {
        selected_choice = $(this);

        if (parseInt(selected_choice.attr("id")) === random_question.answer) {
            correct_answers++;
            winScreen();

        } else {
            incorrect_answers++;
            loseScreen();
        }

        setTimeout(renderQuestion, 3000);
    });

    //
    $(reset_div).on("click", function () {
        location.reload();
    });

    //
    $(start_over_text_div).on("click", function() {
        questions_asked = 0;
        clearContentSection();
        renderQuestion();
    });
});


/*
$(answers_div).on("click", ".questionChoice", function () {
    selected_choice = $(this);

    questions_asked++;
    if (parseInt(selected_choice.attr("id")) === random_question.answer) {
        correct_answers++;
        winScreen();

    } else {
        incorrect_answers++;
        loseScreen();
    }

    if (questions_asked === 2) {
        setTimeout(showScoreBoard, 3000);
        
    }else{
        setTimeout(renderQuestion, 3000);
    }
});

*/