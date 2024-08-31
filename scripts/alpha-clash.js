function continueGame(){
    const alphabet = getRandomAlphabet();
    console.log(alphabet);
}

function play(){
    //hide home section
    hideELementById('home');
    // show playground section
    showElementById('playground');
    continueGame();
}