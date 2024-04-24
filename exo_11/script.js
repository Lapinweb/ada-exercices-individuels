function parseString(string) {
   const sameCharRegex = /(\S)\1*/g; //regex to find successive consecutive characters
   const sameCharArray = string.match(sameCharRegex); //array of smaller strings that match the regex
   const sameCharString = sameCharArray.join(" "); //fuse array in one string separated by spaces
   return sameCharString;
}

function describeString(string) {
   const arrayOfSmallStrings = parseString(string).split(" ");
   const descriptionArray = arrayOfSmallStrings.map((smallString) => {
      return `${smallString.length}${smallString.charAt(0)}`;
   });

   return descriptionArray.join("");
}

function suiteConway(char, n) {
   let descriptionsArray = [];
   descriptionsArray[0] = char;
   for (let i = 1; i < n; i++) {
      const previousDescription = descriptionsArray[i - 1];
      const newDescription = describeString(previousDescription);
      descriptionsArray.push(newDescription);
   }
   return descriptionsArray;
}

function displaySuit(suitArray) {
   const suitDisplay = document.querySelector(".suit-display");
   suitDisplay.replaceChildren();

   suitArray.forEach((suit) => {
      const line = document.createElement("p");
      line.textContent = suit;

      suitDisplay.appendChild(line);
   });
}

/******************************************************/
const charInput = document.getElementById("char-input");
const numberInput = document.getElementById("number-input");
let selectedChar = "";
let selectedNumber = 1;

charInput.addEventListener("input", (e) => {
   selectedChar = e.target.value;
   if (selectedChar.trim().length != 0) displaySuit(suiteConway(selectedChar, selectedNumber));
})

numberInput.addEventListener("change", (e) => {
   selectedNumber = e.target.value;
   if (selectedChar.trim().length != 0) displaySuit(suiteConway(selectedChar, selectedNumber));
})