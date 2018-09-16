// A $( document ).ready() block.
$(document).ready(function () {
    console.log("ready!");

    //====================================================================================================================
    // Array of Questions
    //====================================================================================================================
    var question_array = [
        {
            question: "What is the symbol for Slytherin house?",
            choices: ["A Lion", "An Eagle", "A badger", "A Snake"],
            answer: 3
        },
        {
            question: "Who is Ginny's first boyfriend?",
            choices: ["Michael Corner", "Dean Thomas", "Harry Potter", "Zacharias Smith"],
            answer: 0
        },
        {
            question: "In the Harry Potter series, what is the name of Harry’s pet owl?",
            choices: ["Soren", "Pigwidgeon", "Owl", "Hedwig"],
            answer: 3
        },
        {
            question: "In Harry Potter and the Philosopher's Stone which Gringotts vault was the Philosopher's Stone kept in?",
            choices: ["703", "504", "713", "217"],
            answer: 2
        },
        {
            question: "Whose mother was Rowena Ravenclaw?",
            choices: ["Moaning Myrtle", "Lily Potter", "The Fat Lady", "The Grey Lady"],
            answer: 3
        },
        {
            question: "How much do Fred and George Weasley bet on the Quidditch World Cup?",
            choices: ["37 Galleons, 15 Sickles and 3 Knuts", "37 Galleons, 3 Sickles and 3 Knuts", "15 Galleons, 37 Sickles and 8 Knuts", "3 Galleons, 15 Sickles and 37 Knuts"],
            answer: 0
        },
        {
            question: "How many points is the Golden Snitch worth?",
            choices: ["150", "500", "100", "50"],
            answer: 0
        },
        {
            question: "How many goal posts are there on a Quidditch pitch?",
            choices: ["3", "6", "8", "2"],
            answer: 1
        },
        {
            question: "Who tells Harry and Ron that people can be a ‘bit stupid' about their pets?",
            choices: ["Professor Dumbledore", "Hermione", "Professor Lupin", "Hagrid"],
            answer: 3
        },
        {
            question: "What is the symbol for Ravenclaw",
            choices: ["A Lion", "An Eagle", "A badger", "A Snake"],
            answer: 1
        },
        {
            question: "How did Harry's parents die according to the Dursleys?",
            choices: ["They were both sick", "Lost at sea", "Car crash", "Murderderd"],
            answer: 2
        },
        {
            question: "What is the name of the fountain inside the Ministry of Magic?",
            choices: ["Fountain of Fair Fortune", "Fountain of Magical Brethern", "Fountain of Eros", "Magic Might"],
            answer: 1
        },
        {
            question: "How much does a twelve-week course of Apparition lessons cost?",
            choices: ["12 Galleons", "3 Galleons", "17 Galleons", "It's Free"],
            answer: 0
        },
        {
            question: "What is the only antidote to Basilisk venom?",
            choices: ["Pheonix Tears", "Dragon's Blood", "a Bezoar", "Mandrake Draught"],
            answer: 0
        },
        {
            question: "When is Harry Potter's birthday?",
            choices: ["August 31", "July 31", "October 31", "September 31"],
            answer: 1
        },
        {
            question: "What was Tom Riddle's mother's maiden name?",
            choices: ["Riddle", "Clearwater", "Peverell", "Gaunt"],
            answer: 3
        },
        {
            question: "How many staircases does Hogwarts have?",
            choices: ["356", "258", "142", "109"],
            answer: 2
        },
        {
            question: "How many possible Quidditch fouls are there?",
            choices: ["50", "200", "450", "700"],
            answer: 3
        },
        {
            question: "What is the max speed for a Firebolt broomstick?",
            choices: ["150mph", "200mph", "250mph", "300mph"],
            answer: 0
        },
    ];

    //====================================================================================================================
    //  Variables
    //====================================================================================================================
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
    var incorrect_answer_div = $("#incorrectAnswerDiv")
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
    var start_button = $("<button id='start'>Start</buton>").attr("class", "btn btn-primary");
    var question_element = $("<h3 id='question'>");

    //====================================================================================================================
    // Timer
    //====================================================================================================================
    // Sets the time in seconds
    var time = 10
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
        timer_div.html("Time Remaining: " + time);
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
        time = 10;
        start();


        //clearing the divs for when they have text in them
        clearContentSection();
        //Rendering the timer
        timer_div.html("Time Remaining: " + time);
        //selects random question from the array
        random_question = question_array[Math.floor(Math.random() * question_array.length)];
        //only shows questions and answers if it is less then the number
        if (questions_asked < 10) {
            question_div.html(question_element.text(random_question.question));
            q0_div.html(random_question.choices[0]);
            q1_div.html(random_question.choices[1]);
            q2_div.html(random_question.choices[2]);
            q3_div.html(random_question.choices[3]);

        }else{
            showScoreBoard();
        }
        // increments how many questions have been asked
        questions_asked++;

    }

    // Renders this screen if player answers the question correctly_____________
    function winScreen() {
        showCorrectAnswer(random_question.answer);
        congrats_display_div.html("<h3>CONGRATS!!!!!!</h3>");
    }

    // Renders this screen if player answers the question wrong_________________
    function loseScreen(selected_choice) {
        var num_id = parseInt(selected_choice.attr("id"));
        incorrect_answer_div.html("Your answer: " + random_question.choices[num_id]);
        showCorrectAnswer(random_question.answer);
        congrats_text_div.html("<h3>Sorry, That was the incorrect Answer</h3>");
    }

    // Renders when a player doesnt answer a question___________________________
    //TODO: Finish the didnt answer screen::: done?
    function didntAnswer() {
        showCorrectAnswer(random_question.answer);
        congrats_text_div.html("<h3>You Ran out of time! Better luck next time!</h3>")
        setTimeout(renderQuestion, 3000);
    }

    // Clears all the wrong answers and only shows the correct answer___________
    function showCorrectAnswer(right_answer) {
        switch (right_answer) {
            case 0:
                correct_answer_div.html("Correct answer: " + random_question.choices[0]);
                q0_div.html("");
                q1_div.html("");
                q2_div.html("");
                q3_div.html("");
                break;

            case 1:
                correct_answer_div.html("Correct answer: " + random_question.choices[1]);
                q0_div.html("");
                q1_div.html("");
                q2_div.html("");
                q3_div.html("");
                break;

            case 2:
                correct_answer_div.html("Correct answer: " + random_question.choices[2]);
                q0_div.html("");
                q1_div.html("");
                q2_div.html("");
                q3_div.html("");
                break;

            case 3:
                correct_answer_div.html("Correct answer: " + random_question.choices[3]);
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
        unanswered_text_div.html("Unanswered: ");
        unanswered_counter_div.html(unanswered_questions)
        start_over_text_div.html("Would you like Play again?")
    }

    // Clears the content on the screen_________________________________________
    function clearContentSection() {
        start_button_div.html("");
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
        incorrect_answer_div.html("");
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
    //Renders the start button on the screen____________________________________
    start_button_div.html(start_button);

    //Runs once start button has been clicked___________________________________
    $(start_button_div).on("click", "#start", function () {
        renderQuestion();
    });

    //Runs once an answer has been clicked______________________________________
    $(answers_div).on("click", ".questionChoice", function () {
        selected_choice = $(this);
        stop();

        if (parseInt(selected_choice.attr("id")) === random_question.answer) {
            correct_answers++;
            winScreen();

        } else {
            incorrect_answers++;
            loseScreen(selected_choice);
        }

        setTimeout(renderQuestion, 3000);
    });

    //Runs if reset button is clicked___________________________________________
    $(reset_div).on("click", function () {
        location.reload();
    });

    //Runs if they choose to play again_________________________________________
    $(start_over_text_div).on("click", function() {
        questions_asked = 0;
        correct_answers = 0;
        incorrect_answers = 0;
        unanswered_questions = 0;
        renderQuestion();
    });
});
