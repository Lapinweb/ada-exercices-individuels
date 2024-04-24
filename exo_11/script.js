function parseString(string) {
   const sameCharRegex = /(\w)\1*/g; //regex to find successive consecutive characters
   const sameCharArray = string.match(sameCharRegex); //array of smaller strings that match the regex
   const sameCharString = sameCharArray.join(" "); //fuse array in one string separated by spaces
   return sameCharString;
}

function describeString(string) {
   const arrayOfSmallStrings = parseString(string).split(" ");
   const descriptionArray = arrayOfSmallStrings.map((smallString) => {
      return `${smallString.length}${smallString.charAt(0)}`;
   })

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
   return descriptionsArray.join("\n");
}


/******************************************************/
const tests = [
   ["a", 3],
   ["1", 6]
]
//console.log(describeString("aabbca"));
console.log(suiteConway(...tests[1]));