let playerScore = 0;
let computerScore = 0;

playGame()

function playGame() {

  let keepPlaying = true;

  while (keepPlaying) {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();

    let roundWinner = compareChoices(playerChoice, computerChoice);

    updateScores(roundWinner);

    if (playerScore == 5 || computerScore == 5) {
      keepPlaying = false
    }
  }

  let gameWinner = playerScore > computerScore ? 'Player' : 'Computer'

  declareWinner(gameWinner)
}

function getPlayerChoice() {
  let keepAsking = true;
  let input;

  while (keepAsking) {
    input = prompt('Player! Choose your weapon!', 'Rock, Paper, Scissors');
    input = input.trim().toLowerCase();

    if (input == 'rock' || input == 'paper' || input == 'scissors') {
      keepAsking = false;
    } else {
      alert('Player, that is not a valid input! Try again.');
    }
  }

  return input
}

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber == 1) {
    return 'rock';
  } else if (randomNumber == 2) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function compareChoices(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {
    return 'draw';
  }

  if (playerChoice == 'rock') {
    if (computerChoice == 'paper') {
      return 'computer';
    } else {
      return 'player';
    }
  } else if (playerChoice == 'paper') {
    if (computerChoice == 'scissors') {
      return 'computer';
    } else {
      return 'player';
    }
  } else {
    if (computerChoice == 'rock') {
      return 'computer';
    } else {
      return 'player';
    }
  }
}

function updateScores(winner) {
  if (winner == 'player') {
    playerScore++
  } else {
    computerScore++
  }

  console.log(`Player Score: ${playerScore}`);
  console.log(`Computer Score: ${computerScore}`);
}

function declareWinner(gameWinner) {
  console.log(`Congratulations ${gameWinner}, you win!`);
}