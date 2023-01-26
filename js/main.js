let middeleeuwen; 

let buttons; 

let aantalGokkenTotaal = 0; 

let aantalGokkengoed = 0; 

let aantalTotaleLettersGoed = 0; 

let maxAantalLevens = 6; 

let gekozenLetter; 

let geradenLetters = []; 

 

middeleeuwen = ['bard','belfort','donjon','gigue','goedendag','hexachord','horig','jakobakan','jongleur','kruisvaarder','lans','morgenster','meistreel','malie','muteren','proosdij','rondeau','schwegel','speelman','steekspel','strijdknots','tiendpachter','tiendplicht','trip','troubadour','trouvère','veem','vierendelen','woontoren','zwaardleen','zwaardridder',]; 

 

let alfabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']; 

let wordPicker = Math.floor(Math.random()*middeleeuwen.length); 

let woord = middeleeuwen[wordPicker]; 

 

function init() { 

    document.getElementById("maxAantalLevens").innerHTML = maxAantalLevens 

 

    for(let o= 0; o < woord.length; o++) { 

        let woordholder = document.getElementById("word")  

        let letterHolder = document.getElementById("Li"); 

        letterHolder.innerHTML = "_"; 

        geradenLetters[o] = letterHolder; 

    } 

} 

init(); 

 

function returnPressedLetter(key) { 

    if((key.charCode <= 122 && key. charCode >= 97) || (key.charCode <= 90 && key.charCode >= 65)){ 

        let PressedLetter = String.fromCharCode(key.keyCode).toLowerCase(); 

        checkLetter(returnPressedLetter) 

    } 

} 

let knoppen = document.getElementById("alfabet_knoppen"); 

knoppen.addEventListener("click",returnChosenLettter); 

 

function returnChosenLettter(letter) { 

    if(letter.target !== letter.currentTarget){ 

        checkLetter(letter.target.id); 

    } 

} 

 

function checkLetter(gekozenLetter) { 

    let gekozenLetterKnop = document.getElementById(gekozenLetter); 

    if(gekozenLetterKnop.classList.contains("active") === false) { 

        gekozenLetterKnop.classList.add("active"); 

        aantalGokkenTotaal++; 

        document.getElementById("aantalGokkenTotaal").innerHTML = aantalGokkenTotaal; 

        for(let o = 0; o <woord.length; o++) { 

            if(woord[o].toLowerCase()=== gekozenLetter) { 

                geradenLetters[o].innerHTML = woord[o]; 

                aantalTotaleLettersGoed -= 1; 

            } 

        } 

    }else{ 

        alert ("Je hebt deze letter al gekozen"); 

        return false; 

    } 

} 

 

function checkGekozenLetter(letter) { 

    let j = (woord.toLowerCase().indexOf(letter)); 

    if(j === -1) { 

        maxAantalLevens--; 

        document.getElementById("maxAantalLevens").innerHTML = maxAantalLevens; 

        veranderplaatje(maxAantalLevens); 

        checkverlies(maxAantalLevens); 

    }else { 

        aantalGokkengoed++; 

        document.getElementById("aantalGokkenGoed").innerHTML = aantalGokkengoed; 

        checkwinst(aantalTotaleLettersGoed); 

    } 

} 

 

function checkWinst(lettersGoed) { 

    if(woord.length === lettersGoed) { 

        if(alert('gefeliciteerd, je hebt gewonnen')) { 

        }else { 

            window.location.reload(); 

        } 

    } 

} 

 

function checkverlies(levens) { 

    if(levens < 1) { 

        if(alert("je hebt verloren. Het antwoord was")); 

    }else{ 

        window.location.reload(); 

    } 

} 

 

function veranderplaatje(levens) { 

    document.getElementById("img levens").src = "img/galgje.pgn.webp"+levens+"jpg"; 

} 

console.log(woord); 