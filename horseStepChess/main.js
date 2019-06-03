"use strict";

window.onload = function(){
    let btn = document.createElement("button");
    btn.style.width = 100 + "px";
    btn.style.height = 100 + "px";
    btn.style.background = "blue";

    btn.addEventListener('click', (e) => {
        console.log(e);
        console.log(e.type + " ClickPower");
    });

    let block = document.createElement("div");
    block.appendChild(btn);
    //block.innerHTML += '<strong>Ура!</strong> Вы прочитали это важное сообщение.';

    document.body.appendChild(block);

    document.body.appendChild(tble);
};

let chess = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
];

console.log(chess.length);
console.log( {}.toString );
let count = 0;

let tble = document.createElement("table");

tble.addEventListener("click", function (event) {
    let target = event.target;
    count = 0;
    while (target !== tble) {
        if (target.tagName === "TD") {

            step(target);
            return;
        }
        target = target.parentNode;
    }
});


function step(target) {
    document.body.querySelectorAll("TD").forEach(function (elem) {
        elem.style.background = "";
    });
    target.style.background = "green";
}

for(let i = 0; i < chess.length; i++){
    chess[i] = document.createElement("tr");
    //chess[i].style.background = "grey";
    chess[i].classList.add("backGrndGrey");
    tble.appendChild(chess[i]);
    for(let j = 0; j < chess.length; j++){
        chess[i][j] = document.createElement("td");
        chess[i][j].style.height = 40 + "px";
        chess[i][j].style.width = 40 + "px";

        if(count % 2 === 0 ){
            //chess[i][j].style.background = "white";
            chess[i][j].classList.add("backGrndWhite");
        }
        tble.rows[i].appendChild(chess[i][j]);
        count++;
    }
    count++;
}