"use strict";

function getSumOf(indx, max, action){
    let result = 0;
    for(; indx <= max; indx++){
        result += action(indx);
    }
    return result;
}

let sum = getSumOf(0, 10, i => i);
console.log(sum);
let sumSquare = getSumOf(0, 10, i => i * i);
console.log(sumSquare);

//**************Замыкания*******************
function foo(num){
    return (num1, num2) => (num1 + num2) * num;
}

let f = foo(3);
console.log(f(3, 5));

//**********
function setup(list){
    let i = 0;
    return () => list[i++];
}
let listChar = ["a", "b", "c"];
let next = setup(listChar);
console.log(next());
console.log(next());
console.log(next());
// a, b, c
//*******************************************

function makeArmy() {

    var shooters = [];

    // если через var обьявить ,ссылка в функции будет ссылаться на конечное состояние 
    // а если через let то зсработает замукание, так как let каждый раз проходит новую инициализацию
    for (let i = 0; i < 10; i++) {
    //   var shooter = function() { // функция-стрелок
    //     alert( i ); // выводит свой номер
    //   };
    //   shooters.push(shooter);

      (function(i){ // IIFE (немедленно самозапускаемые функции)
          var shooter = function() { // функция-стрелок
                console.log(i); // выводит свой номер
          };
          shooters.push(shooter);
        })(i);
    }
    

    return shooters;
  }
  
  var army = makeArmy();
  
  army[0](); // стрелок выводит 10, а должен 0
  army[5](); // стрелок выводит 10...
  // .. все стрелки выводят 10 вместо 0,1,2...9
  //************************************************************