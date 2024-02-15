function askGivenNumber(str) {
   return prompt(str);
}

function askGuessedNumber(str) {
  let n = prompt(str);
  if (n >= 0 && n <= 50) return n;
  else {
    alert("Nombre invalide!");
    return askGuessedNumber(str);
  }
}

function didIWin(nPlayer1, nPlayer2) {
   if (nPlayer1 === nPlayer2) {
      alert("Bravo ! Vous avez deviné le nombre");
      return true;
   }
   if (nPlayer1 > nPlayer2) alert("Plus grand");
   else if (nPlayer1 < nPlayer2) alert("plus petit");
   return false;
}

function display() {
   
}

let numberToGuess;
let givenNumber;

function gameplay() {
   if (numberToGuess === undefined) numberToGuess = parseInt(askGuessedNumber("Joueur 1: Donnez un nombre entre 0 et 50"))
   givenNumber = parseInt(askGivenNumber("Joueur 2: Devinez un nombre entre 0 et 50"));

   console.log(numberToGuess, givenNumber);

   if (didIWin(numberToGuess, givenNumber) === false) {
      gameplay();
   }
}

gameplay();