// Print 'hi' to the console
console.log('hi');

// Function to get the user's choice
const getUserChoice = userInput => {
  // Convert the user input to lowercase
  userInput = userInput.toLowerCase();
  
  // Check if the user input is valid ('rock', 'paper', or 'scissors')
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput; // Return the user's choice
  } else {
    console.log('Error!'); // Print an error message if the user input is invalid
  }
};

// Function to get the computer's choice
function getComputerChoice() {
  // Generate a random number between 0 and 2
  randomNumber = Math.floor(Math.random() * 3);
  
  // Assign the computer's choice based on the random number using a switch statement
  switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
};

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
  // Check if it's a tie
  if (userChoice === computerChoice) {
    return 'This is a Tie!.';
  }
  
  // Check all possible win/lose combinations and return the result
  if (userChoice === 'rock' && computerChoice === 'scissors') {
    return 'Human wins and Computer lose.';
  }
  if (userChoice === 'rock' && computerChoice === 'paper') {
    return 'Human lose and Computer Wins.';
  }
  if (userChoice === 'paper' && computerChoice === 'scissors') {
    return 'Human lose and Computer Wins.';
  }
  if (userChoice === 'paper' && computerChoice === 'rock') {
    return 'Human wins and Computer lose.';
  }
  if (userChoice === 'scissors' && computerChoice === 'paper') {
    return 'Human wins and Computer lose.';
  }
  if (userChoice === 'scissors' && computerChoice === 'rock') {
    return 'Human lose and Computer Wins.';
  }
};

// Function to play the game
const playGame = () => {
  // Get the user's choice
  const userChoice = getUserChoice('scissors');
  
  // Get the computer's choice
  const computerChoice = getComputerChoice();
  
  // Print the user's and computer's choices
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  
  // Determine the winner and print the result
  console.log(determineWinner(userChoice, computerChoice));
};

// Call the playGame function to start the game
playGame();
