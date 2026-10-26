// Shan Sharp 10/23/2026 
"use strict";

/* PLANNING / PSEUDOCODE
1. Initialize score = 0
2. Question 1: 5 + 3

   - Variable name: answer_1
   - Correct answer: 8
   - How I'll validate and check the answer: After prompting user for their
   answer I will convert to a number and check w/ strict equality.
3. Use that structure for all questions.
4. Math: How will I calculate the percentage? 
5. Final feedback logic (if / else if / else):
    - check score ranges to put out different messages depending on the users scores
    - Add special console.log or alert if the score is 3 out of 5.

// Question 2
    - Variable name: answer_2
    - Correct answer: 6
    - How I'll validate and check answer: Same answer as number 1. 
// Question 3
    - Variable name: answer_3 
    - Correct answer: 12
    - How I'll validate and check for answer: Same as answer 1-2.
// Question 4
    - Variable name: answer_4
    - Correct answer: 4
    - How I'll validate and check for answer: Same as answer 1-3.
// Question 5
    - Variable name: about_you
    - Correct answer: n/a, depends on the person
    - How I'll validate: use prompt() for user input, check if the user
    clicks "cancel", use .trim() to take care of any leading/trailing
    whitespace, use .toLowerCase() for any variation of capitalization to 
    be able to be validated, use strict equality to compare the input against
    expected answer.

*/

let score = 0;

const ques_1 = Number(prompt("Question 1: 5 + 3 = ?"));
if (ques_1 === 8) {
    alert("Correct! 5 + 3 = 8.");
    score++;
} else {
    alert("Incorrect. The answer is 8.")
}

const ques_2 = Number(prompt("Question 2: 10-4 = ?"));
if (ques_2 === 6) {
    alert("Correct! 10-4 = 6.");
    score++;
} else {
    alert("Incorrect. The answer is 6")
}

const ques_3 = Number(prompt("Question 3: 4 x 3 = ?"));
if (ques_3 === 12) {
    alert("Correct! 4 x 3 = 12.");
    score++;
} else {
    alert("Incorrect. The answer is 12.")
}

const ques_4 = Number(prompt("Question 4: 20 / 5 = ?"));
if (ques_4 === 4) {
    alert("Correct! 20 / 5 = 4.")
    score++;
} else {
    alert("Incorrect. The answer is 4.")
}

let about_you = prompt("What is your most recent level of math eduacation?");

if(about_you === null) {
    alert("You cancelled your answer, no points awarded.")
} else {
    const updated_about_you = about_you.trim().toLowerCase();
    if (updated_about_you === "") {
        alert("No answer received. No points.")
    } else {
        const my_answer = "College Algebra";
        if (updated_about_you === my_answer) {
            alert(`That's awesome! You entered ${about_you}. That's correct!`)
            score++;
        } else {
            alert(`Thanks for sharing that your favorite is ${about_you}!`)
        
        }
    }
}

const numQuestions = 5;
const percentage = (score / numQuestions) * 100;

if (score === 3) {
    console.log("Great job, you got 3 our of 5 answer correct!")
}

let total_score = "";

if (score === 5) {
    total_score = "Outstanding. Perfect score! 100%";
} else if (score === 4) {
    total_score = "Great job. You scored 80%.";
} else if (score ===3) {
    total_score = "Great effort. You scored 60%.";
} else {
    total_score = "You failed. Don't give up, try again.";
}

alert(`Quiz complete.\n\nYour Final Score: ${score} out of ${5} (${percentage}%)\n\n${total_score}`);
