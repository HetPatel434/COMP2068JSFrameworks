// Require the prompt package to get user input
const prompt = require('prompt');

// Start the prompt
prompt.start();

// Ask the user to choose ROCK, PAPER, or SCISSORS
prompt.get(['choice'], function (err, result) {
  if (err) { return onErr(err); }
  console.log('Command-line input received:');
  console.log('  User Choice: ' + result.choice);

  // Convert user choice to uppercase for consistency
  let userSelection = result.choice.toUpperCase();
  
  // Generate computer's selection
  let computerSelectionNumber = Math.random();
  let computerSelection = '';
  if (computerSelectionNumber <= 0.34) {
    computerSelection = 'PAPER';
  } else if (computerSelectionNumber <= 0.67) {
    computerSelection = 'SCISSORS';
  } else {
    computerSelection = 'ROCK';
  }

  console.log('Computer Choice: ' + computerSelection);

  // Determine the winner
  let winner = determineWinner(userSelection, computerSelection);
  console.log(winner);
});

function determineWinner(userSelection, computerSelection) {
  if (userSelection === computerSelection) {
    return "It's a tie";
  }

  if (userSelection === 'ROCK') {
    return computerSelection === 'SCISSORS' ? 'User Wins' : 'Computer Wins';
  } else if (userSelection === 'PAPER') {
    return computerSelection === 'ROCK' ? 'User Wins' : 'Computer Wins';
  } else if (userSelection === 'SCISSORS') {
    return computerSelection === 'PAPER' ? 'User Wins' : 'Computer Wins';
  }
}

function onErr(err) {
  console.log(err);
  return 1;
}
