const treeNode = document.getElementById("tree");

/*****************************************/

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
      //randomly add decorations
      if (i > 0 && i < numberOfStars - 1 && res.slice(-1) === "*") {
         let random = Math.random();
         if (random < 0.15) res += "o";
         else if (random > 0.85) res += "+";
         else res += "*";
      } else res += "*";
   }
   return res;
}

function drawTree(extraFloors) {
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
      if ((floor - 1) % 3 === 0 && floor != 1) {
         // if previous floor is mutiple of 3
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

   //add trunk
   if ((extraFloors + 1) / 3 <= 1) {
      treeArray[extraFloors + 2] = addSpaces(gap - 1) + "#";
   } else {
      //number of "triangles" on the tree
      let treeLevels = Math.ceil((extraFloors + 1) / 3);
      //for each "triangle", add a line for the trunk
      for (let i = 0, floor = extraFloors + 2; i < treeLevels; i++, floor++) {
         treeArray[floor] = addSpaces(gap - 2) + "##";
      }
   }

   return treeArray;
}

function displayTree(floorNumber) {
   const treeArray = drawTree(floorNumber);
   const treeLineArray = [];
   treeArray.forEach((treeElement) => {
      treeLineArray.push(treeElement.split(""));
   });

   for (let i = 0; i < treeLineArray.length; i++) {
      const treeLine = treeLineArray[i];
      for (let j = 0; j < treeLine.length; j++) {
         const element = document.createElement("span");
         element.append(treeLine[j]);
         switch (treeLine[j]) {
            case "/":
            case "\\":
            case "*":
               element.classList.toggle("green");
               break;

            case "+":
               element.classList.toggle("yellow");
               break;

            case "o":
               element.classList.toggle("red");
               break;

            case "#":
               element.classList.toggle("brown");
               break;

            default:
               break;
         }
         treeNode.append(element);
      }

      const linebreak = document.createElement("br");
      if (i != treeArray.length - 1) treeNode.append(linebreak);
   }
}


/***********************************************/
const treeInput = document.getElementById("tree-height");
treeInput.addEventListener("change", () => {
   treeNode.replaceChildren();
   displayTree(parseInt(treeInput.value));
});

displayTree(parseInt(treeInput.value));
