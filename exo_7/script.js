let matches = 50;

function removeMatches(n) {
   matches -= n;
}

function getMatchesNumber() {
   const matchesSelect = document.getElementById("matches-number");
   const options = matchesSelect.options;
   const selectedOptionIndex = matchesSelect.selectedIndex;
   const res = options[selectedOptionIndex].value;

   if (res < 1 || res > 6 || res > matches) {
      if (matches === 1) alert("Il reste une allumette !")
      else alert(`Choisissez un nombre entre 1 et ${matches < 6 ? matches : 6} !`);

      return 0;
   }

   return parseInt(res);
}

function didPlayerWin() {
   return matches === 0;
}

function gameplay(numberOfPlayer) {
   let turn = 1;

   displayMatchesCount();
   displayNumberOfPlayers(numberOfPlayer);

   document.getElementById("remove").addEventListener("click", () => {
      let removedMatchesNumber = getMatchesNumber();
      removeMatches(removedMatchesNumber);
      displayMatchesCount();

      if (didPlayerWin()) {
         alert(`Le joueur ${turn} a gagné !`);
      }

      if (removedMatchesNumber != 0) {
         turn = turn < numberOfPlayer ? turn + 1 : 1;
         displayPlayerTurn(turn);
      }
   });
}

function displayMatchesCount() {
   document.getElementById("matches-count").textContent = matches;
}

function displayNumberOfPlayers(n) {
   document.getElementById(
      "playerNumber"
   ).textContent = `Nombre de joueurs : ${n}`;
}

function displayPlayerTurn(n) {
   document.getElementById("player-turn").textContent = `Tour du joueur ${n} :`;
}

/********************************************************************/

displayMatchesCount();
gameplay(parseInt(prompt("Combien de joueur ?")));
