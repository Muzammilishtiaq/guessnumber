let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displaymessage = function (message) {
    document.querySelector(".message").textContent = message;
}

// check button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
//no number
  if (!guess) {
    // document.querySelector(".message").textContent = "No Number!";
    displaymessage("No Number!")
  } else if (guess === secretnumber) {
    // document.querySelector(".message").textContent = "correct number";
    displaymessage("correct number")
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretnumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }

  // correct number
  else if (score !== secretnumber) {
      if (score > 1) {
    displaymessage(guess > secretnumber ? "Too High" : "Too Lower")
      // document.querySelector(".message").textContent = guess > secretnumber ? "Too High" : "Too Lower";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = "You Lost The Game";
    displaymessage("You Lost The Game")
      document.querySelector(".score").textContent = 0;
    }
  }
  //  else if (guess > secretnumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too High";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You Lost The Game";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
  //  else if (guess < secretnumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too Lower";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You Lost The Game";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

//    again button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  displaymessage("Start guessing...")
  // document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#000";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".highscore").textContent = 0;
});

///////////////////////////////////////
// Coding Challenge #1

/* 
  Implement a game rest functionality, so that the player can make a new guess! Here is how:
  
  1. Select the element with the 'again' class and attach a click event handler
  2. In the handler function, restore initial values of the score and secretNumber variables
  3. Restore the initial conditions of the message, number, score and guess input field
  4. Also restore the original background color (#222) and number width (15rem)
  
  GOOD LUCK 😀
  */
