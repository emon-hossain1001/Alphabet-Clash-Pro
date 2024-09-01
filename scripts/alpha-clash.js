function handleKeyboardButtonPress(e){
    const playerPressed = e.key;

    const currentAlphabetElement = document.getElementById('currentAlphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    if(playerPressed === expectedAlphabet)
    {
        const currentScore = getTextElementValue('current-score');
        const newScore = currentScore + 1;
        setTextElement('current-score', newScore);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else
    {
        const currentLife = getTextElementValue('life');
        const newLife = currentLife - 1;
        setTextElement('life',newLife);
    }
}

document.addEventListener('keyup', handleKeyboardButtonPress);

function continueGame(){
    const alphabet = getRandomAlphabet();
    const currentAlphabet = document.getElementById('currentAlphabet');
    currentAlphabet.innerHTML = alphabet;
    setBackgroundColorById(alphabet);
}

function play(){
    //hide home section
    hideELementById('home');
    // show playground section
    showElementById('playground');
    continueGame();
}
