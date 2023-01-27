let Landen;
let buttons;
let aantalGokkenTotaal = 0;
let aantalGokkenGoed = 0;
let aantalTotaleLettersGoed = 0;
let maxAantalLevens = 10;
let gekozenLetter;
let geradenLetters = [];

Landen=['Netherlands','Belgium','Denmark','China','Canada','Sweden','Florida','Ohio','Manchester','Qatar','Nepal','Peru','Argentina','Brazil','Chile','Congo','Colombia','Croatia','Cuba','Finland','Germany','Ghana','Greece','Iceland','Italy','India','Japan','Luxembourg','Madgascar','Mali','Mexico',];
alfabet=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

let wordPicker = Math.floor(Math.random()*Landen.length);
let woord = Landen[wordPicker];

function init(){
    document.getElementById("maxAantalLevens").innerHTML = maxAantalLevens;
    for (let i = 0; i < woord.length; i++) {
        let woordHolder = document.getElementById("woord");
        letterHolder = document.createElement('li');
        letterHolder.setAttribute('class', 'letter');
        letterHolder.innerHTML = "_";
        geradenLetters[i] = letterHolder;
        woordHolder.appendChild(letterHolder);
    }
}
init();

let knoppen = document.getElementById("alfabet_knoppen");
knoppen.addEventListener("click", returnChosenLetter);

function returnChosenLetter(letter) {
    if (letter.target !== letter.currentTarget) {
        checkLetter(letter.target.id);
    } 
}

function checkLetter(gekozenLetter) {
    let gekozenLetterKnop = document.getElementById(gekozenLetter);
    if(gekozenLetterKnop.classList.contains("active") === false) {
        gekozenLetterKnop.classList.add("active");
        aantalGokkenTotaal++;
        document.getElementById("aantalGokkenTotaal").innerHTML = aantalGokkenTotaal;
        for (let i = 0; i < woord.length; i++) {
            if (woord[i].toLowerCase() === gekozenLetter) {
                geradenLetters[i].innerHTML = woord[i];
                aantalTotaleLettersGoed += 1;
            }
        }
        checkGekozenLetter(gekozenLetter);
    } else {
        alert ("Je hebt deze letter al gekozen");
        return false;
    }
}

function checkGekozenLetter(letter){
    let j = (woord.toLowerCase().indexOf(letter));
    if (j === -1) {
        maxAantalLevens--;
        document.getElementById("maxAantalLevens").innerHTML = maxAantalLevens;
        checkVerlies(maxAantalLevens);
    } else {
        aantalGokkenGoed++;
        document.getElementById("aantalGokkenGoed").innerHTML = aantalGokkenGoed;
        checkWinst(aantalTotaleLettersGoed);
    }
}

function checkWinst(lettersGoed) {
    if(woord.length === lettersGoed){
        if( alert('Gefeliciteerd, je hebt gewonnen het woord was:' + woord) ){
        } else {
            window.location.reload();
        }
    }
}

function checkVerlies(levens) {
    if(levens < 1){
        if( alert('Je hebt verloren. Het woord was ' + woord) ){
        } else {
           window.location.reload();
        }
    }
}console.log(woord); 
//Dit is aleen een check voor my zelf om te kijken of de code werkt of niet en het leek handig om te checken of het goed was of niet

