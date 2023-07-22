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


/****************************** TESTS ******************************/
// console.log(checkGuess(6)); // "Too low."
// console.log(checkGuess(72)); // "Too high."
// console.log(checkGuess(53)); // "Correct!"
/*******************************************************************/