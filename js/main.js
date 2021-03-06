//genero un array con cinque numeri casuali DIVERSI
var rndNums = [];
do {
    let rndInt = Math.floor(Math.random() * 100) + 1;
    if(!rndNums.includes(rndInt)) {
        rndNums.push(rndInt);
    }
} while(rndNums.length < 5)

//genero un alert con i cinque numeri
alert("Ecco i tuoi numeri: " + rndNums + ".")

//inizializzo un array per contenere le risposte dell'utente
var userGuesses = [];

//inizializzo un contatore per i numeri indovinati
var score = 0;

//inizializzo un contatore per il conto alla rovescia da 30 econdi
var clock = 30;

var startingTime = document.getElementById("countdown");

startingTime.innerHTML = clock;

//creo una funzione che stampi dinamicamente il clock in pagina
var countdown = setInterval(
    function(){
        if(clock > 0){
            clock--;
            document.getElementById("countdown").innerHTML = clock;
        } else {
            clearInterval(countdown);
        }
}, 1000);

//imposto un timer che dopo (clock * 1000) secondi faccia comparire i cinque prompt
setTimeout(
    function(){
        while (userGuesses.length < 5) {
            let numGuess = parseInt(prompt("Inserisci un numero tra quelli mostrati."));

            //controllo che l'utente abbia inserito un numero e, in caso contrario, chiedo di reinserirlo
            while(isNaN(numGuess)) {
                alert("Attento! Devi inserire un numero.")
                numGuess = parseInt(prompt("Inserisci un numero tra quelli mostrati."));
            }

            if(!userGuesses.includes(numGuess)) {
                userGuesses.push(numGuess);           
            } else {
                alert("Hai già inserito questo numero!")
            }
        }
            
        //confronto l'array rndNums e userGuesses e, per ogni numero contenuto in entrambi, aumento score
        for (var i = 0; i < rndNums.length; i++) {
            if(userGuesses.includes(rndNums[i])) {
                score++;
            }
        }

        alert("Hai indovinato " + score + " numeri. I numeri da indovinare erano: " + rndNums + ". I numeri che hai inserito sono " + userGuesses + ".");
    }, (clock * 1000) + 100
);
