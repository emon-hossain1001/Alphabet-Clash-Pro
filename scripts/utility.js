function hideELementById(ID){
    document.getElementById(ID).classList.add('hidden');
}

function showElementById(ID){
    document.getElementById(ID).classList.remove('hidden');
}

function getRandomAlphabet(){
    // get or create a alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    // get a random index between 0-25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    
    const alphabet = alphabets[index];
    return alphabet;
}