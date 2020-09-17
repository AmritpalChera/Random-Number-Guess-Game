

// Variable to store the list of guesses 
let guesses = [];
// Variable for store the correct random number 
let correctNumber = getRandomNumber();
//console.log(correctNumber);


window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);
    domEvents();
}
/*
function domEvents(){
  alert(document.body.lastElementChild.innerHTML)
}
*/
/**
 * Functionality for playing the whole game
 */
function playGame(e){
  e.preventDefault();
  let numberGuess = document.getElementById("number-guess").value;
  saveGuessHistory(numberGuess);
  displayResult(numberGuess);
  displayHistory();
  
  
}

/**
 * Show the result for if the guess it too high, too low, or correct
 */
function displayResult(numberGuess){
  
  if (numberGuess > correctNumber) showNumberAbove();
  else if (numberGuess < correctNumber) showNumberBelow();
  else showYouWon();
}


/**
 * Initialize a new game by resetting all values and content on the page
 */
function initGame(){
  // reset rand number, reset the guess list, reset the result display, history display
  correctNumber = getRandomNumber();
  guesses = [];
  document.getElementById("history").innerHTML = "";
  document.getElementById("result").innerHTML = "";
  document.body.style.backgroundImage = "none";
}

/**
 * Reset the HTML content for guess history
 */
function resetResultContent(){
  document.getElementById("result").innerHTML = "";
}

/**
 * Return a random number between 1 and 100
 */
function getRandomNumber(){
  return Math.floor(Math.random()*100)+1;
}

/**
 * Save guess history 
 */
function saveGuessHistory(guess) {
  guesses.push(guess);
  //console.log(guesses);
}

/**
 * Display guess history to user
 */
function displayHistory() {
  let index = guesses.length -1; // TODO
  let list = "<ul class='list-group'>";
  for  (index; index >=0; index--){
      list+=`<li class='list-group-item'>You guessed ${guesses[index]}</li>`
  }
  list += '</ul>'
  document.getElementById("history").innerHTML = list;
}



/**
 * Retrieve the dialog based on if the guess is wrong or correct 
 */
function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

function showYouWon(){
  const text = "Awesome job, you got it!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   */
  let dialog = getDialog("won", text);
  document.getElementById("result").innerHTML = dialog;
  document.body.style.backgroundImage = "url('https://www.digitaldealer.com/wp-content/uploads/2014/08/winning.jpg')";
}

function showNumberAbove(){
  const text = "Your guess is too high!";
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog 
   */
  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  const text = "Your guess is too low!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   */
  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}
