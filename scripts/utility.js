function hideELementById(ID){
    document.getElementById(ID).classList.add('hidden');
}

function showElementById(ID){
    document.getElementById(ID).classList.remove('hidden');
}

function setBackgroundColorById(ID){
    document.getElementById(ID).classList.add('bg-orange-600');
}

function removeBackgroundColorById(ID){
    document.getElementById(ID).classList.remove('bg-orange-600');
}

function getTextElementValue(ID){
    const element = document.getElementById(ID);
    const elementValueText = element.innerText;
    const elementValue = parseInt(elementValueText);
    return elementValue;
}

function setTextElement(ID, value){
    const element = document.getElementById(ID);
    element.innerText = value;
}

function getElementText(ID){
    const element = document.getElementById(ID);
    const text = element.innerText;
    return text;
}

function getRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet;
}

