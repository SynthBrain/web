"use strict";

let asyncArr1 = [3, 2, 7, 4, 9, 4, 15, 84, 1, 95, 485, 45, 21, 2, 7, 11, 51, 99, 528, 777, 10, 32, 1, 485, 25, 44, 77, 15];

//**********ASYNC-FOREACH */
function AsyncFoo(arr, func){

    arr.forEach(function(i, ind, mass){
        setTimeout(()=>func(i, ind, mass), 0);
    }, 0);

}
AsyncFoo(asyncArr1, (i, ind, mass) => mass[ind] =  i + 10);
setTimeout(()=> console.log(asyncArr1), 1000);