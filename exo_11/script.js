function parseString(string) {
   const sameCharRegex = /(\w)\1*/g; //regex to find successive consecutive characters
   const sameCharArray = string.match(sameCharRegex);
   const sameCharString = sameCharArray.join(" ");
   return sameCharString;
}

function describeString(string) {
   const arrayOfSmallStrings = parseString(string).split(" ");
   const descriptionArray = arrayOfSmallStrings.map((smallString) => {
      return `${smallString.length}${smallString.charAt(0)}`;
   })

   return descriptionArray.join("");
}

console.log(describeString("aabbca"));