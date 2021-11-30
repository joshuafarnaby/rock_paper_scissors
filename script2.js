// new script created when UI was fleshed out for second iteration

// const rock = document.getElementById('rock');
// const paper = document.getElementById('paper');
// const scissors = document.getElementById('scissors');

const playContainer = document.getElementById('play-container');
const playIcons = [...playContainer.children];
const resultContainer = document.getElementById('result-container');

playIcons.forEach(icon => icon.addEventListener('click', playRound));

resultContainer.addEventListener('transitionend', () => resultContainer.classList.add('hide'));

function playRound(e) {
  let playerChoice = e.target.id;
  let computerChoice = getComputerChoice();

  console.log(playerChoice, computerChoice);

  let roundWinner = compareChoices(playerChoice, computerChoice);

  console.log(roundWinner);

  if (roundWinner == 'draw') {
    declareDraw(playerChoice)
  } else {
    //declareRoundWinner
    //updateScore
    //checkGameOver
  }
}

function declareDraw(playerChoice) {
  let resultHeading = resultContainer.querySelector('h2');
  let resultText = resultContainer.querySelector('h4');

  resultHeading.innerText = `you both chose ${playerChoice}`;
  resultText.innerText = `this one was a draw`

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

