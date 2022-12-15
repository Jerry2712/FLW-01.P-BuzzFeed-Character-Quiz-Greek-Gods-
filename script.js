document.addEventListener('DOMContentLoaded', buzzfeedQuiz, false);

function buzzfeedQuiz() {

  // task 4: declare variables for the html elements you'll use as selectors later. You need the submit button, display div, and all three inputs for your questions.
  
  let button = document.querySelector(".submit");
  let displayResult = document.querySelector(".displayResult");
  let q1 = document.querySelector(".q1");
  let q2 = document.querySelector(".q2");
  let q3 = document.querySelector(".q3");


  // task 5: declare variables for values we'll set later. You'll need one for an image source, a result and a score for each question.
  let water = document.querySelector(".water")
  let lightning = document.querySelector(".lightning")
  let time = document.querySelector(".time") 
  let fire = document.querySelector(".fire")

  //create a global counter containing the score
  let counter = 0

  water.onclick  = function () {

    counter ++
    console.log(counter)
    
  }

  lightning.onclick = function () {
    
    counter = counter + 2
    console.log(counter)
  }

  time.onclick = function () {

    counter = counter + 3
    console.log(counter)
  }

  fire.onclick = function () {

    counter = counter + 4
    console.log(counter)
  }
  
  
  //create an onclick function for every img
  //increase the counter how ever you see fit based on what's clicked

  button.onclick = function() {

    // task 6: Declare user input variables for each of your questions. If you have three questions, you should have three variables. These variables should equal the value of the user input for each question.





    // task 7: create a conditional statement for the responses to Question 1 based on the user input.




    // task 8: create a conditional statement for the responses to Question 2 based on the user input.




    // task 9: create a conditional statement for the responses to Question 3 based on the user input.




    // task 10: declare a variable for the total score of the quiz and set it equal to the sum of each question score.


    

    // task 11: create a conditional statement for the result to the quiz based on the total score. Using string interpolation, display these to the page: the result, an image that corresponds and a message to go with it.






  };
}