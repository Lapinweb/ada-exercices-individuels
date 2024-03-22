let matches = 50;

function removeMatches(n) {
   matches -= n;
}

function getNumberOfPlayer() {
   let res = parseInt(prompt("Combien de joueur ?"));
   while (isNaN(res) || res < 1) {
      alert("Nombre invalide !");
      res = parseInt(prompt("Combien de joueur ?"));
   }
   return res;
}

function getMatchesNumber() {
   const matchesSelect = document.getElementById("matches-number");
   const options = matchesSelect.options;
   const selectedOptionIndex = matchesSelect.selectedIndex;
   const res = options[selectedOptionIndex].value;

   if (res < 1 || res > 6 || res > matches) {
      if (matches === 1) alert("Il reste une allumette !");
      else
         alert(
            `Choisissez un nombre entre 1 et ${matches < 6 ? matches : 6} !`
         );

      return 0;
   }

   return parseInt(res);
}

function didPlayerWin() {
   return matches === 0;
}

function displayMatchesCount() {
   document.getElementById(
      "matches-count"
   ).textContent = `Nombre d'allumettes : ${matches}`;
}

function displayMatchesImage() {
   const matchesImg = document.getElementById("matches-draw");

   if (matchesImg.childNodes.length === 0) {
      for (let i = 0; i < matches; i++) {
         const oneMatch = document.createElement("span");
         oneMatch.textContent = "‖";
         matchesImg.append(oneMatch);
      }
   }

   while (matchesImg.childNodes.length > matches) {
      matchesImg.removeChild(matchesImg.lastChild);
   }
}

function displayNumberOfPlayers(n) {
   document.getElementById(
      "playerNumber"
   ).textContent = `Nombre de joueurs : ${n}`;
}

function displayPlayerTurn(n) {
   document.getElementById("player-turn").textContent = `Tour du joueur ${n}`;
}

function displayWin(player) {
   const main = document.querySelector("main");
   main.replaceChildren();

   let message = document.createElement("p");
   message.classList.add("win-message")
   message.textContent = `Bravo ! Le joueur ${player} a gagné!`;

   main.append(message);
}

function gameplay(numberOfPlayer) {
   let turn = 1;

   displayMatchesCount();
   displayMatchesImage();
   displayNumberOfPlayers(numberOfPlayer);

   document.getElementById("remove").addEventListener("click", () => {
      let removedMatchesNumber = getMatchesNumber();
      removeMatches(removedMatchesNumber);
      displayMatchesCount();
      displayMatchesImage();

      if (didPlayerWin()) {
         displayWin(turn);
      } else if (removedMatchesNumber != 0) {
         turn = turn < numberOfPlayer ? turn + 1 : 1;
         displayPlayerTurn(turn);
      }
   });
}

/********************************************************************/

gameplay(getNumberOfPlayer());
