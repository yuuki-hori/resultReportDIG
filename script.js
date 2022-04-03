'use strict'

const historyOutput = document.getElementById("outTxt");
const historyErase = document.getElementById("historyErase");
// console.log(historyOutput);
// console.log(historyErase);
const inputBox = document.getElementById("txt-input");
const calcHistory = document.getElementById("history");
const btnNum = document.querySelectorAll(".btn-number");
const btnSymbol = document.querySelectorAll(".btn-symbol");

historyOutput.addEventListener("click", outHistory);
historyErase.addEventListener("click", () => {
    console.log(document.getElementById("history").textContent);
    calcHistory.textContent = "";
});

// document.getElementsByTagName("h1")[0].style.fontSize = "6vw";

btnNum.forEach(function(target) {
    target.addEventListener("click", function() {
        charOfFunc[0].func(target.textContent);
    });
});

btnSymbol.forEach(function(target) {
    target.addEventListener("click", function() {
        charOfFunc[1].func(target.textContent);
    });
});

document.getElementById("btn-enter").addEventListener("click", charOfFunc[2].func);
document.getElementById("btn-bs").addEventListener("click", charOfFunc[3].func);
document.getElementById("btn-clear").addEventListener("click", charOfFunc[4].func);
document.getElementById("btn-percent").addEventListener("click", charOfFunc[5].func);
// document.getElementById("btn-invert").addEventListener("click", charOfFunc[5].func);

document.body.addEventListener("keydown",function(e) {
    const inputChar = (element) => element === e.key;
    // console.log(e.key);

    for(const keys of charOfFunc) {
        // console.log(keys.key);
        if(keys.key.some(inputChar)) {
            keys.func(e.key);
            break;
        }
    }
});