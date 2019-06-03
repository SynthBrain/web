"use sctrict";

//1 1 2 3 5 8
function fib(indx){
  return (indx > 2) ? fib(indx - 1) + fib(indx - 2) : 1;
}
console.log(fib(8));

function fib2(indx){
  let res = 0;
  let res1 = 1;
  let res2 = 1;

  for(let i = 0; i <= indx-3; i++){
    res = res1 + res2;
    res1 = res2;
    res2 = res;
  }
  return res;
}
console.log(fib2(8));

//*******Ханойская БАШНЯ */
const car1 = [400, 300, 200, 100];
const buffer = [];
const car2 = [];

let slabNumber = car1.length;

function crane(stack, A, B, C) {
    if (stack >= 1) {
        crane(stack - 1, A, C, B);
        moveSlab(A, B);
        crane(stack - 1, C, B, A);
    }
}

function moveSlab(from, to) {
    to.push(from.pop());
}

crane(slabNumber, car1, car2, buffer);

console.log(car1, buffer, car2);
//******************************************* */

// let matrix = [
//     [1,545,154,95,659],
//     [15,154,84,15,65],
//     [84,652,268,1,548],
//     [545,51,2,15,659],
//     [45,84,158,96,487]
// ]
// console.log(matrix);


// for( let i = 1; i < matrix.length; i++){
//   for( let j = 0; j < i; j++){
//     console.log(matrix[i][j]);
//   }
// };
// console.log("")

// for( let i = 0; i < matrix.length; i++){
//   for( let j = matrix.length - 1 ; j > i; j--){
//     console.log(matrix[i][j]);
//   }
// };

//*************PROMISE***********/
let foo = (a, b) => {
  return new Promise((resolve, reject) => {
    if(a > 3){
      resolve(a + b);
    }else reject("err");
  })
}

foo(5, 3)
  .then((res) => {console.log("Hello result = " + res)})
  .catch((errorMessage) => {console.log("ERROR " + errorMessage)});

  console.log("Some Work");
//********************************************************************** */

let asyncArr = [3, 2, 7, 4, 9, 4, 15, 84, 1, 95, 485, 45, 21, 2, 7, 11, 51, 99, 528, 777, 10, 32, 1, 485, 25, 44, 77, 15];
console.log(asyncArr);

function AsyncFoo(arr, cb){
    arr.forEach(function(value, indx, arr){
      setTimeout(cb(value , indx, arr), 0);
    });
}

AsyncFoo(asyncArr, function(i, indx, arr) {
  arr[indx] = i + 10;
});

console.log(asyncArr);
//************************************************************************* */

let myMass = [12, 15, 84, {a:1}, "555"];
console.log(myMass.indexOf("555"));

// var myV = 10;

// var foo = {
//   my2: 77,
// };

// ( () =>  mmm = 20)();
// console.log(myV);
// console.log(mmm);
// console.log(my2);

// let mass = [15, 23, 68, 48, 55,489, 555, 1789, 123, 4]
// var stRr = "+7(903)-123-45-67";

// var str3 = "The sun is rising!";
// console.log( str3.match(/\w+/g) ); // The, sun, is, rising
// //console.log(mass.indexOf(555));

// let str = "hello";
// let tmp = str.match(/el/);
// //let tmp = str.search(/el/);
// //str = str.split("").reverse().join("");
// //str = str.slice(2);
// console.log(str);
// console.log(tmp["index"]);