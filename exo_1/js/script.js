function askName() {
   let bonjour = `👋 Bonjour ${prompt("Quel est votre nom ?")}!`;
   document.body.innerHTML += `<h2>${bonjour}</h2>`;
}

function askBirthYear() {
   let currentDate = new Date();
   let age =
      currentDate.getFullYear() -
      parseInt(prompt("Quel est votre année de naissance ?"));
   document.body.innerHTML += `<h3>Vous avez ${age - 1} ou ${age} ans.</h3>`;
}

function askBirthMonth() {
   let birthYear = prompt("Quel est votre année de naissance ?");
   let birthMonth = prompt("Quel est votre mois de naissance ?");
   let birthMonthNum = 0;
   let age = 0;
   let currentDate = new Date();

   const months   = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
   
   if (isNaN(birthMonth)) { //si la valeur récupérée du mois n'est pas un chiffre, on compare au tableau e mois
      for (i = 0; i < months.length; i++) {
         if (birthMonth.localeCompare(months[i], "fr", { sensitivity: "base"}) === 0) { // localeCompare pour "case insensitive"
            birthMonthNum = i + 1;
            console.log(birthMonth + " = " + months[i]);
         }
      }
      if (birthMonthNum === 0) { // sinon, valeur invalide
        console.log("Mois invalide!");
      }
   } else if (0 < parseInt(birthMonth) && parseInt(birthMonth) <= 12) { //si la valeur récupérée est un nombre
      birthMonthNum = parseInt(birthMonth);
   } else { // sinon, valeur invalide
      console.log("Mois invalide");
   }

   age = currentDate.getFullYear() - parseInt(birthYear);
   age = currentDate.getMonth() + 1 - birthMonthNum >= 0 ? age : age - 1;

   document.body.innerHTML += `<h3>Vous avez ${age} ans.</h3>`;
}

askName();
//askBirthYear();
askBirthMonth();