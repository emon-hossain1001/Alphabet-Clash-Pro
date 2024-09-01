function handleKeyboardButtonPress(e) {
  const playerPressed = e.key;

  if(playerPressed === 'Escape'){
    gameOver();
  }

  const currentAlphabetElement = document.getElementById("currentAlphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();

  if (playerPressed === expectedAlphabet) {
    const currentScore = getTextElementValue("current-score");
    const newScore = currentScore + 1;
    setTextElement("current-score", newScore);
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    const currentLife = getTextElementValue("life");
    const newLife = currentLife - 1;
    setTextElement("life", newLife);

    if (newLife === 0) {
      gameOver();
    }
  }
}

document.addEventListener("keyup", handleKeyboardButtonPress);

function continueGame() {
  const alphabet = getRandomAlphabet();
  const currentAlphabet = document.getElementById("currentAlphabet");
  currentAlphabet.innerHTML = alphabet;
  setBackgroundColorById(alphabet);
}

function play() {
  hideELementById("home");
  hideELementById("final-score");
  showElementById("playground");

  setTextElement('life', 5);
  setTextElement('current-score', 0);

  continueGame();
}

function gameOver() {
  hideELementById("playground");
  showElementById("final-score");

  const gameScore = getTextElementValue('current-score');
  setTextElement('game-score', gameScore);

  const currentAlphabet = getElementText('currentAlphabet');
  removeBackgroundColorById(currentAlphabet);
}

