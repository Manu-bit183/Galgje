let Landen;//Dit zijn alle landen die je moet ragen
let buttons;//Dit is voor de CSS en de HTMLom die met elkaar te verbinden
let aantalGokkenTotaal = 0;//je hebt in totaal 12 gokken dat is wat er op de scherm staat maar je hebt er 13 zodat het niet al te moeilijk is om te raden
let aantalGokkenGoed = 0;//Het licht meer aan de totale aantal goed wat je kan hebben door heolang het woord is
let aantalTotaleLettersGoed = 0;
let maxAantalLevens = 10;//Dit is het totale aantal levens die je zal krijgen
let gekozenLetter;//Dit is zodat je een bericht krijgt als je het al hebt geraden
let geradenLetters = [];

Landen=['Netherlands','Belgium','Denmark','China','Canada','Sweden','Florida','Ohio','Manchester','Qatar','Nepal','Peru','Argentina','Brazil','Chile','Congo','Colombia','Croatia','Cuba','Finland','Germany','Ghana','Greece','Iceland','Italy','India','Japan','Luxembourg','Madgascar','Mali','Mexico',];
//Dit zijn alle landen die je moet ragen
alfabet=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
//Alle 26 letters in de alfabet voor de woorden

let wordPicker = Math.floor(Math.random()*Landen.length);//zorgt dat er elke keer een andere letter word gekozen elke keer
let woord = Landen[wordPicker];//verbind de Math.random in 1 woord


function init(){
    document.getElementById("maxAantalLevens").innerHTML = maxAantalLevens;
    for (let i = 0; i < woord.length; i++) {//Dit is voor het totale aantal levens die je zal krijgen
        let woordHolder = document.getElementById("woord");//vindbind met HTML
        letterHolder = document.createElement('li');//vindbind met HTML
        letterHolder.setAttribute('class', 'letter');//vindbind met HTML
        letterHolder.innerHTML = "_";//Toont het totale aantal worden dat je moet radden
        geradenLetters[i] = letterHolder;//De hoeveelheid woorden dat je hebt graden 
        woordHolder.appendChild(letterHolder);//De hoeveelheid woorden dat je hebt graden laten zien
    }
}
init();

let knoppen = document.getElementById("alfabet_knoppen");//Haal dit weg en de knoppen kun je niet clicken
knoppen.addEventListener("click", returnChosenLetter);//Haal dit weg en de knoppen kun je niet clicken

function returnChosenLetter(letter) {
    if (letter.target !== letter.currentTarget) {//Zorgd dat je de goede letter pakt
        checkLetter(letter.target.id);
    } 
}

function checkLetter(gekozenLetter) {
    let gekozenLetterKnop = document.getElementById(gekozenLetter);//Laat de knoppen die in zijn gedrukt zien
    if(gekozenLetterKnop.classList.contains("active") === false) {//Elke keer 1 bij doen als je het goed hebt
        gekozenLetterKnop.classList.add("active");//Elke keer 1 bij doen als je het goed hebt
        aantalGokkenTotaal++;
        document.getElementById("aantalGokkenTotaal").innerHTML = aantalGokkenTotaal;
        for (let i = 0; i < woord.length; i++) {//Elke keer 1 bij doen als je het goed hebt
            if (woord[i].toLowerCase() === gekozenLetter) {//Elke keer 1 bij doen als je het goed hebt
                geradenLetters[i].innerHTML = woord[i];//Elke keer 1 bij doen als je het goed hebt
                aantalTotaleLettersGoed += 1;//Elke keer 1 bij doen als je het goed hebt
            }
        }
        checkGekozenLetter(gekozenLetter);
    } else {
        alert ("Je hebt deze letter al gekozen");// Als je dubble druk zal je deze pop up krijgen
        return false;
    }
}

function checkGekozenLetter(letter){
    let j = (woord.toLowerCase().indexOf(letter));
    if (j === -1) {// laat je levens naar benden gaan
        maxAantalLevens--;
        document.getElementById("maxAantalLevens").innerHTML = maxAantalLevens;//Laat je maxaantal levens zien
        checkVerlies(maxAantalLevens);//Laat je maxaantal levens zien
    } else {
        aantalGokkenGoed++;
        document.getElementById("aantalGokkenGoed").innerHTML = aantalGokkenGoed;//Laat je zien wat je allen maal goed hebt
        checkWinst(aantalTotaleLettersGoed);;//Laat je zien wat je allen maal goed hebt
    }
}

function checkWinst(lettersGoed) {
    if(woord.length === lettersGoed){
        if( alert('Gefeliciteerd, je hebt gewonnen het woord was:' + woord) ){//geeft een pop up met de woord
        } else {
            window.location.reload();//Reload als je het woord goed hebt
        }
    }
}

function checkVerlies(levens) {
    if(levens < 1){
        if( alert('Je hebt verloren. Het woord was ' + woord) ){//geeft een pop up met de woord
        } else {
           window.location.reload();//Reload als je het woord fout hebt
        }
    }
}console.log(woord); 
//Dit is aleen een check voor my zelf om te kijken of de code werkt of niet en het leek handig om te checken of het goed was of niet

