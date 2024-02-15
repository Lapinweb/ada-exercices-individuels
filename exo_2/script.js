let numberToGuess;
let givenNumber;
let minRange = 0;
let maxRange = 50;
let guessCount = 0;

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
      //alert("Bravo ! Vous avez deviné le nombre");
      return true;
   }
   //if (nPlayer1 > nPlayer2) alert("Plus grand");
   //else if (nPlayer1 < nPlayer2) alert("plus petit");
   return false;
}

function modifyRange(n) {
   if (n > minRange && n < numberToGuess) {
      minRange = n;
      document.getElementById("min").innerText = `${minRange} < `;
   }
   if (n < maxRange && n > numberToGuess) {
      maxRange = n;
      document.getElementById("max").innerText = ` < ${maxRange}`;
   }
   if (n < minRange || n > maxRange) alert(`Le nombre doit être entre ${minRange} et ${maxRange} !`);
}

function displayCount(n) {
   let displayedCount = document.getElementById("count");

   if (displayedCount) displayedCount.innerText = `Nombre de tentatives : ${n}`;
   else {
      let countNode = document.createElement("p")
      countNode.setAttribute("id", "count");
      document.body.append(countNode);
      displayCount(n);
   }
}

function displayWin() {
   document.getElementById("main").setAttribute("hidden", true);
   let displayedMessage = document.createElement("p");
   displayedMessage.setAttribute("id", "win");
   document.body.append(displayedMessage);
   displayedMessage.innerText = "Bravo ! Vous avez deviné le nombre !";

}

function getNumber() {
   const res = parseInt(document.getElementById("guess").value);
   document.getElementById("guess").value = "";
   return res;
}

function gameplay() {
   //if (numberToGuess === undefined) numberToGuess = parseInt(askGuessedNumber("Joueur 1: Donnez un nombre entre 0 et 50"))
   //givenNumber = parseInt(askGivenNumber("Joueur 2: Devinez un nombre entre 0 et 50"));

   console.log("hello");

   if (numberToGuess === undefined) {
      numberToGuess = getNumber();
      return;
   }

   givenNumber = getNumber();

   console.log(numberToGuess, givenNumber)

   
   if (didIWin(numberToGuess, givenNumber) === false) {
      guessCount++;
      displayCount(guessCount);
      modifyRange(givenNumber);
   } else {
      displayWin();
   }
}

//gameplay();