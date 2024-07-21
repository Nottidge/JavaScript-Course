let score = JSON.parse(localStorage.getItem('score'))
   
if (score === null) {
  score = {
    wins:  0,
    losses: 0,
    ties: 0
  };
}

 updateScoreElement(); 
  
  function playGame (playerMove) {
    const computerMove = pickComputerMove();

let result = '';
if (playerMove === 'ROCK') {
if (computerMove === 'ROCK') { result = 'TIE.';}
else if (computerMove === 'PAPER') {result = 'You LOSE.';}
else if (computerMove === 'SCISSORS') {result = 'You WIN.';}
}
else if (playerMove === 'PAPER') {
if (computerMove === 'ROCK') { result = 'You WIN.';}
else if (computerMove === 'PAPER') {result = 'TIE.';}
else if (computerMove === 'SCISSORS') {result = 'You LOSE.';}
}
else if (playerMove === 'SCISSORS') {
if (computerMove === 'ROCK') { result = 'You LOSE.';}
else if (computerMove === 'PAPER') {result = 'You WIN.';}
else if (computerMove === 'SCISSORS') {result = 'TIE.';}
}

if (result === 'You WIN.') {
score.wins = score.wins + 1;
} else if (result === 'TIE.') {
score.ties = score.ties + 1;
} if (result === 'You LOSE.') {
score.losses = score.losses + 1;
}

localStorage.setItem('score', JSON.stringify(score));

  document.querySelector('.js-moves').innerHTML = `You
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">
Computer`
  document.querySelector('.js-result').innerHTML = `${result}`
  updateScoreElement();
  }

  function updateScoreElement () {
    document.querySelector('.js-score').innerHTML = `wins: ${score.wins}, ties: ${score.ties}, losses: ${score.losses}`
  }

  function pickComputerMove () {
   Math.random();
   const randomNumber = (Math.random());

let computerMove = '';

if (randomNumber >= 0 && randomNumber < 1/3) {computerMove = 'ROCK';}
else if (randomNumber >= 1/3 && randomNumber < 2/3) {computerMove = 'PAPER';}
else if (randomNumber >= 2/3 && randomNumber < 1) {computerMove = 'SCISSORS';}

  return computerMove;
}