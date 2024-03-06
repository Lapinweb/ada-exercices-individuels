function sum1(arr) {
   let res = 0;
   for (n of arr) {
      res += n;
   }
   return res;
}

function sum2(arr) {
   const newArray = arr.splice(1);

   if (newArray.length > 0) {
      return arr[0] +  sum2(newArray)
   }
   return arr[0];
}

function factorial(n) {
   if (n - 1 > 0) {
      return n * factorial(n-1)
   }
   return n;
}

function fibonnacci(x) {
   if (x - 2 > 0) return fibonnacci(x-1) + fibonnacci(x-2);

   if (x > 0) return 1;
   return 0;
}

/**************************************************************************************/
const nArray1 = [1,5,30,46] //sum = 10
const nArray2 = [1,2,10] // sum = 13

/**************************************************************************************/

//console.log(sum2(nArray1), "\n");
//console.log(sum2(nArray2));

//console.log(factorial(4))

for (let i = 0; i < 16; i++) {
   console.log(`f${i} =`, fibonnacci(i));
}