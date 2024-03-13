function maxDaysInMonth(monthNumber, year) {
   if (monthNumber === 2)
      if ((year % 4 === 0 && year % 100 > 0) || year % 400 === 0) return 29;
      return 28;
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
   if (date.day < 0 || date.day > maxDaysInMonth(date.month, date.year)) return false;
   if (date.year < 1000 || date.year > 9999) return false;

   return true;
}

function isPalindrome(string) {
   const reversedString = string.split("").toReversed().join("");

   if (string.localeCompare(reversedString) === 0) return true;
   return false;
}

function getNextPalindromes(x) {
   const date = new Date();
   const nextPalindromes = [];

   while (x > 0) {
      date.setDate(date.getDate() + 1);
      const stringDate = date.toLocaleString("fr-FR", {dateStyle: "short"});
      if (isDatePalindrome(stringDate)) {
         nextPalindromes.push(stringDate);
         x--;
      }
   }

   return nextPalindromes;
}

function isDatePalindrome(string) {
   if (isValidDate(string) === false) return false;

   const dateString = string.replaceAll("/", "");
   if (isPalindrome(dateString)) return true;
   return false;
}


/**********************************************************************/

/*
console.log(isPalindrome("11/02/2011"), "\n");
console.log(isPalindrome("03/04/2001"), "\n");
console.log(isPalindrome("05/12/1992"), "\n");
*/

console.log(getNextPalindromes(1))

console.log(isValidDate("29/02/2024"));
console.log(isValidDate("29/02/2023"));
console.log(isValidDate("29/02/1900"));
console.log(isValidDate("29/02/2000"));