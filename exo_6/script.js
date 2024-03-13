function maxDaysInMonth(monthNumber) {
   if (monthNumber === 2) return 28;
   if (monthNumber === 1, 3, 5, 7, 8, 10, 12) return 31;
   return 30;
}

function isValidDate(string) {
   const isValidForm = string.match(/^\d\d\/\d\d\/\d\d\d\d$/);
   if (isValidForm === null) return false;

   const dateArray = string.split("/").map((n) => parseInt(n));
   const date = {
      day: dateArray[0],
      month: dateArray[1],
      year: dateArray[2],
   };
   
   if (date.month < 1 || date.month > 12) return false;
   if (date.day < 0 || date.day > maxDaysInMonth(date.month)) return false;
   if (date.year < 1000 || date.year > 9999) return false;

   return true;
}

function isPalindrome(string) {
   if (isValidDate(string) === false) return false;

   const date = string.replaceAll("/", "");
   const reversedDate = date.split("").toReversed().join("");

   if (date.localeCompare(reversedDate) === 0) return true;
   return false;
}

function getNextPalindromes(x) {
   const date = new Date();
   const nextPalindromes = [];

   while (x > 0) {
      date.setDate(date.getDate() + 1);
      const stringDate = date.toLocaleString("fr-FR", {dateStyle: "short"});
      if (isPalindrome(stringDate)) {
         nextPalindromes.push(stringDate);
         x--;
      }
   }

   return nextPalindromes;
}

/**********************************************************************/

/*
console.log(isPalindrome("11/02/2011"), "\n");
console.log(isPalindrome("03/04/2001"), "\n");
console.log(isPalindrome("05/12/1992"), "\n");
*/

console.log(getNextPalindromes(8))