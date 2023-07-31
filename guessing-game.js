// import readline
const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });


// global secretNumber
const secretNumber = 53;

// function "checkGuess"; input: num; compares num vs global secretNumber
function checkGuess(num) {
  if (num > secretNumber) { // if num > secretNumber
    console.log("Too high."); // print "Too high."
    return false;
  } else if (num < secretNumber) { // if num < secretNumber
    console.log("Too low."); // print "Too low."
    return false;
  } else { // if num equals secretNumber
    console.log("Correct!"); // print "Correct!"
    return true;
  }
}

// askGuess function; use readline's question method to ask user to "Enter a guess:"
function askGuess() {
  rl.question("Enter a guess: ", answer => {
    const guess = checkGuess(Number(answer));

    // if guess is true
    if (guess) {
      console.log("You win!"); // print "You win!"
      rl.close(); // close interface
    // if guess is false
    } else {
      // call askGuess again
      askGuess();
    }
  });
}

// function "randomInRange"; input: min and max numbers; output: return random whole number between provided min and max (inclusive)
function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// function "askRange"; asks user to enter min and max numbers
function askRange() {
  rl.question("Enter a max number: ", getMin);
}

function getMin(max) {
  rl.question("Enter a min number: ", min => {
    console.log(`I'm thinking of a number between ${min} and ${max}...`);
    rl.close(); // close interface
  });
}

/****************************** TESTS ******************************/
// console.log(checkGuess(6)); // "Too low."
// console.log(checkGuess(72)); // "Too high."
// console.log(checkGuess(53)); // "Correct!"

// askGuess();

// console.log(randomInRange(15, 20));
// console.log(randomInRange(15, 20));
// console.log(randomInRange(15, 20));
// rl.close();

askRange();
/*******************************************************************/