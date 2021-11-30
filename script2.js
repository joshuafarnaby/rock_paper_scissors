// new script created when UI was fleshed out for second iteration

// const rock = document.getElementById('rock');
// const paper = document.getElementById('paper');
// const scissors = document.getElementById('scissors');

const playContainer = document.getElementById('play-container');
const playIcons = [...playContainer.children];
const resultContainer = document.getElementById('result-container');

let playerLives = 5;
let computerLives = 5

playIcons.forEach(icon => icon.addEventListener('click', playRound));
resultContainer.addEventListener('transitionend', hideContainer);

function hideContainer() {
  resultContainer.classList.add('hide');
}

function playRound(e) {
  let playerChoice = e.target.id;
  let computerChoice = getComputerChoice();

  console.log(playerChoice, computerChoice);

  let roundWinner = compareChoices(playerChoice, computerChoice);

  console.log(roundWinner);

  if (roundWinner == 'draw') {
    declareDraw(playerChoice)
  } else {
    declareRoundWinner(roundWinner, computerChoice);
    updateLives(roundWinner);
    if (checkGameOver()) {
      declareGameOver(roundWinner)
    }
  }
}

function updateLives(roundWinner) {
  let heartListToUpdate = getHeartList(roundWinner);
  let targetIndex = roundWinner == 'player' ? --computerLives : --playerLives;

  console.log(`
    player lives: ${playerLives}
    computer lives: ${computerLives}
  `);

  heartListToUpdate[targetIndex].classList.add('faded');
}

function getHeartList(roundWinner) {
  let roundLoser = roundWinner == 'player' ? 'computer' : 'player';

  let heartContainer = document.getElementById(`${roundLoser}-lives`).querySelector('.heart-container');

  return [...heartContainer.children]
}

function declareGameOver(roundWinner) {
  playIcons.forEach(icon => {
    icon.removeEventListener('click', playRound);
    icon.classList.remove('hover');
    icon.classList.add('game-over');
  })

  resultContainer.removeEventListener('transitionend', hideContainer);

  resultContainer.querySelector('h2').textContent = `congratulions ${roundWinner}`
  resultContainer.querySelector('h4').textContent = 'you\'re the winner!'

}

function checkGameOver() {
  return playerLives == 0 || computerLives == 0;
}
 
function declareRoundWinner(roundWinner, computerChoice) {
  resultContainer.querySelector('h2').innerText = `computer chose ${computerChoice}`;
  resultContainer.querySelector('h4').innerText = `${roundWinner} wins this round!`;

  resultContainer.classList.remove('hide');
}

function declareDraw(playerChoice) {
  resultContainer.querySelector('h2').innerText = `you both chose ${playerChoice}`;
  resultContainer.querySelector('h4').innerText = `this one was a draw`

  resultContainer.classList.remove('hide');
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



