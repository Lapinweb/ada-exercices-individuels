function didPlayerWin(word, base) {
   if (word.localeCompare(base, "fr", {sensitivity : "base"}) === 0) return true;
   return false;
}

function tryWord(word, base) {
   // TODO: fix jeu sensible à la casse.
   let wellPlaced = [];
   let notInWord = [];
   let missplaced = [];

   let arrayBase = base.split("");
   let arrayWord = word.split("");

   for (let i = 0; i < arrayWord.length; i++) {
      if (arrayBase[i] === arrayWord[i]) {
         wellPlaced.push(arrayWord[i]);
      } else if (arrayBase.includes(arrayWord[i])) {
         missplaced.push(arrayWord[i]);
      } else {
         notInWord.push(arrayWord[i]);
      }
   }

   return {
      wellPlaced: wellPlaced,
      missplaced: missplaced,
      notInWord: notInWord,
   };
}

function guess() {
   let base = "étoile";
   let word = document.getElementById("word").value;
   if (didPlayerWin(word, base)) {
      document.getElementById("guess-input").classList.toggle("hide");
      document.getElementById("game-text").classList.toggle("hide");
      document.getElementById("win-text").classList.toggle("hide");
      document.getElementById("win").innerText = "Vous avez gagné";
   } else {
      let result = tryWord(word, base);
      document.getElementById("word").value = "";
      document.getElementById("try").innerText = word;
      document.getElementById("well").innerText =
         "Bien placé: " + result.wellPlaced.join(", ");
      document.getElementById("miss").innerText =
         "Mal placé: " + result.missplaced.join(", ");
      document.getElementById("not").innerText =
         "Pas dans le mot: " + result.notInWord.join(", ");
   }
}
