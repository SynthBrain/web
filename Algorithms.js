"use strict";

 let arr = [3, 2, 7, 4, 9, 4, 15, 84, 1, 95, 485, 45, 21, 2, 7, 11, 51, 99, 528, 777, 10, 32, 1, 485, 25, 44, 77, 15];
 let asyncArr = [3, 2, 7, 4, 9, 4, 15, 84, 1, 95, 485, 45, 21, 2, 7, 11, 51, 99, 528, 777, 10, 32, 1, 485, 25, 44, 77, 15];

let partition = (arr, low, hi) =>{
    let pivotPos = Math.floor(Math.random() * arr.length);
    let pivot = arr[pivotPos];
    while(hi >= low){
        while(arr[hi] > pivot){
            hi--;
        }
        while(arr[low] < pivot){
            low++;
        }
        if(hi >= low){
            let temp = arr[low];
            arr[low] = arr[hi];
            arr[hi] = temp;
            hi--;
            low++;
        }
    }
    return low;
};

function qsort(arr, low = 0, hi = arr.length-1){
    if(low < hi){
        let indx = partition(arr, low, hi);
        qsort(arr, low, indx - 1);
        qsort(arr, indx, hi);
    }
    return arr;
}

//  function qsort(arr){
//      if(arr.length < 2){
//          return arr;
//      }else{
//          let pivotPos = Math.floor(Math.random() * arr.length);
//          let pivot = arr[pivotPos];
//          let left = arr.filter( value => value < pivot);
//          let rigth = arr.filter( value => value > pivot);
//          let replaysPivot = arr.filter(value => value == pivot);
//          return [...qsort(left),...replaysPivot,...qsort(rigth)];
//      }
//  }

// console.log(arr);
// console.log(qsort(arr));


 //******************************************************** */
 let bubble = arr =>{
     for(let i = arr.length; i > 0; i--){
         for(let j = 0; j < i - 1; j++){
             if(arr[j] > arr[j + 1]){
                 let tmp = arr[j];
                 arr[j] = arr[j + 1];
                 arr[j + 1] = tmp;
             }
         }
     }
     return arr;
 };

// console.log(bubble(arr));

 //************************************************* */

 function binSearch(arr, num){
     let high = arr.length-1;
     let low = 0;
     let mid = 0;

     while(low <= high){
         mid = Math.floor((high + low) / 2);
         if(arr[mid] === num){
             return arr[mid];
         }else if(num > arr[mid]){
             low = mid + 1;
         }else{
             high = mid - 1;
         }
     }
     return -1;
 }

 let arSort = qsort(arr);
//console.log(binSearch(arSort, 3));