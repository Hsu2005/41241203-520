let playerScore = 0;
let computerScore = 0;

function getRandomChoice() {
  const choices = ['石頭', '布', '剪刀'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playGame(playerChoice) {
  const computerChoice = getRandomChoice();
  
  console.log(`玩家選擇: ${playerChoice}, 電腦選擇: ${computerChoice}`);
  
  let resultText = '';
  let resultClass = '';
  let sound;

  if (playerChoice === computerChoice) {
    resultText = '平手!';
    resultClass = 'draw';
    sound = new Audio('draw.mp3');
  } else if (
    (playerChoice === '石頭' && computerChoice === '剪刀') ||
    (playerChoice === '布' && computerChoice === '石頭') ||
    (playerChoice === '剪刀' && computerChoice === '布')
  ) {
    resultText = '你贏了!';
    resultClass = 'win';
    sound = new Audio('win.mp3');
    playerScore++;
  } else {
    resultText = '你輸了!';
    resultClass = 'lose';
    sound = new Audio('lose.mp3');
    computerScore++;
  }

  console.log(resultText);

  sound.play();

  document.getElementById("result").textContent = `你選擇了 ${playerChoice}，電腦選擇了 ${computerChoice}。${resultText}`;
  document.getElementById("result").className = `result ${resultClass}`;
  document.getElementById("playerScore").textContent = playerScore;
  document.getElementById("computerScore").textContent = computerScore;

  if (playerScore === 3) {
    Swal.fire('恭喜！', '你獲得三勝！', 'success');
    resetGame();
  } else if (computerScore === 3) {
    Swal.fire('很遺憾', '電腦獲得三勝。', 'error');
    resetGame();
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  document.getElementById("playerScore").textContent = playerScore;
  document.getElementById("computerScore").textContent = computerScore;
  document.getElementById("result").textContent = '';
}
