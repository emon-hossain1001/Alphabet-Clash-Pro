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
