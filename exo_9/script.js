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
   let gap = extraFloors + 1; //spaces on the left of each line, decrement by 1 the lower the line

   //star on top of the tree
   treeArray[0] = addSpaces(gap) + "+";
   gap--;

   //first floor of the tree
   treeArray[1] = addSpaces(gap) + "/*\\";
   gap--;

   //next floors of the tree
   for (let i = 0, floor = 2; i < extraFloors; i++, floor++, gap--) {
      treeArray[floor] = addSpaces(gap) + "/*" + addStars((floor-1) * 2) + "\\";
   }


   return treeArray.join("\n");
}

console.log(displayTree(5));