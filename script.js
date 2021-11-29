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