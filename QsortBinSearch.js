"use strict";

let arrBin = [12, 52, 84, 95, 62, 1885, 51, 756, 25, 852, 45, 65, 95, 12, 8, 32, 123];


function replacer(arr, low, hi){
    let pos = Math.floor(Math.random() * arr.length);
    let pivot = arr[pos];
    while(low <= hi){
        while(arr[hi] > pivot){
            hi--
        }
        while(arr[low] < pivot){
            low++;
        }
        if(low <= hi){
            let tmp = arr[hi];
            arr[hi] = arr[low];
            arr[low] = tmp;
            hi--;
            low++;
        }
    }
    return low;
}

function Qsorts(arr, low = 0, hi = arr.length -1){
    if(low < hi){
        let indx = replacer(arr, low, hi);
        Qsorts(arr, low, indx -1);
        Qsorts(arr, indx, hi);
    }
    return arr;
}
console.log(Qsorts(arrBin));


/**
 * @return {string}
 */
function BinSearch(arr, num){
    let min = 0;
    let max = arr.length;
    let point = 0;
    while(min <= max){
        point = Math.floor((min + max) / 2);
        if(num === arr[point]){
            return "Succes "+ num + " indx "+ point
        }else if(num > arr[point]){
            min = point + 1;
        }else max = point - 1;
    }
    return -1;
}

console.log(BinSearch(arrBin, 84));










































// let arrBin = [12, 52, 84, 95, 62, 1885, 51, 756, 25, 852, 45, 65, 95, 12, 8, 32, 123];

// function replacer(arr, hi , low){
//     let pos = Math.floor(Math.random() * arr.length);
//     let pivot = arr[pos];
//     while(hi >= low){
//         while(arr[hi] > pivot){
//             hi--;
//         }
//         while(arr[low] < pivot){
//             low++;
//         }
//         if(hi >= low){
//             let tmp = arr[low];
//             arr[low] = arr[hi];
//             arr[hi] = tmp;
//             hi--;
//             low++;
//         }
//     }
//     return low;
// }

// function Qsorts(arr, hi = arr.length-1, low = 0){
//     if(hi > low){
//         let indx = replacer(arr, hi, low);
//         Qsorts(arr, hi , indx);
//         Qsorts(arr, indx-1, low);
//     }
//     return arr
// }
// Qsorts(arrBin);
// console.log(arrBin);

// function BinSearch(arr, num){
//     let min = 0;
//     let max = arr.length -1;
//     let anchor = 0 //

//     while(max >= min){
//         anchor = Math.floor((min + max) /2);
//         if(arr[anchor] == num){
//             return arr[anchor] + " index = " + anchor;
//         }else if(num > arr[anchor]){
//             min = anchor + 1;
//         }else max = anchor - 1;
//     }
//     return -1;
// }


// console.log(BinSearch(arrBin, 756));