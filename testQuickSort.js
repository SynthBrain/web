"use strict";

let arrQ = [15, 26, 18, 99, 47, 15, 2, 36, 96, 85, 74, 25, 63, 14, 74, 1, 74, 25, 63, 14, 74];

function replacer(arr, low, hi) {
    let pos = Math.floor(Math.random() * arr.length);
    let pivot = arr[pos];
    while (low <= hi){
        while (arr[hi] > pivot){
            hi--;
        }
        while (arr[low] < pivot){
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

console.log(replacer(arrQ, 0, arrQ.length - 1));

function Qsort(arr, low = 0, hi = arr.length - 1) {
    if (low < hi){
        let indx = replacer(arr, low, hi);
        Qsort(arr, low, indx - 1);
        Qsort(arr, indx, hi);
    }
    return arr;
}

console.log(Qsort(arrQ));


function tbleMult( num) {
    let arr = [];
    for(let i = 1; i <= 99; i++) {
        arr.push(`${i}*${num}=${i * num}`);
    }

    console.log(arr);
}
tbleMult(3);