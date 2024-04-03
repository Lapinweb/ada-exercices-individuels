function addSpaces(numberOfSpaces) {
   let res = "";
   for (let i = 0; i < numberOfSpaces; i++) {
      res += " ";
   }
   return res;
}

function addStars(numberOfStars) {
   let res = "";
   for (let i = 0; i < numberOfStars; i++) {
      res += "*";
   }
   return res;
}

function displayTree(extraFloors) {
   let treeArray = [];
   let highestFloorStarNumbers = 5;

   //star on top of the tree
   treeArray[0] = "+";

   //floors of the tree
   for (
      let floor = 1, starsNumber = 1;
      floor <= extraFloors + 1;
      floor++, starsNumber += 2
   ) {
      if ((floor-1) % 3 === 0 && floor != 1) { // if previous floor is mutiple of 3
         starsNumber = highestFloorStarNumbers;
         highestFloorStarNumbers += 2;
      }
      treeArray[floor] = `/${addStars(starsNumber)}\\`;
   }

   //add gap to the left of the tree
   let gap = 0;
   if ((extraFloors + 1) % 3 === 1) gap = 2;
   if ((extraFloors + 1) % 3 === 2) gap = 1;
      for (let floor = extraFloors + 1; floor >= 0; floor--, gap++) {
         treeArray[floor] = addSpaces(gap) + treeArray[floor];
         if (floor - 1 === 0) continue;
         else if (floor - 1 === 3) gap -= 1;
         else if ((floor - 1) % 3 === 0) gap -= 2;
      }

   return treeArray.join("\n");
}

console.log(displayTree(9));
