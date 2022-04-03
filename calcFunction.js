'use strict'
// Please don't delete the 'use strict' line above

const hoge = document.getElementById("calc-zone");
console.log(hoge);

function outHistory() {
    // const txt = document.getElementById("history");
    // const blob = new Blob(document.getElementById("history").textContent,{type:"text"});
    const blob = new Blob("abcsk",{type:"text"});
    const link = document.createElement('a');

    link.href = URL.createObjectURL(blob);

    link.download = 'timeStamp.txt';
    link.click();
}

//数字:0, 演算子:1, =:2, C:3, AC:4, ±:5
const charOfFunc = [
    {   //index: 0
        key: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."],
        func: (number) => {
            if(!(number === "." && inputBox.textContent.slice(-1) === " ")) {
                // console.log(number);
                inputBox.textContent += number;
            }
        }
    },
    {   //index: 1
        key: ["+", "-", "*", "/"],
        func: (symbol) => {
            inputBox.textContent += ` ${symbol} `;
        }
    },
    {   //index: 2
        key: ["Enter", "="],
        func: () => {
        const ans = eval(inputBox.textContent);
        calcHistory.textContent += `${inputBox.textContent} = ${ans}\n`;
        // calcHistory.value +=`${inputBox.value} = ${ans}\n`;
        inputBox.textContent = ans;
        if(ans === 1472237) {
            console.log("CC");
            document.getElementsByClassName("CC").style.display = block;
        }
        }
    },
    {   //index: 3
        key: ["Backspace","C"],
        func: () => {
            inputBox.textContent = inputBox.textContent.slice(0,-1);
        }
    },
    {   //index: 4
        key: ["AC", "Escape"],
        func: () => {
            inputBox.textContent = "";
        }
    },
    {   //index: 5
        key: ["%"],
        func: () => {
            if(inputBox.textContent.slice(-1) !== " ") {
                const word = inputBox.textContent.split(" ");
                console.log(word[word.length-1]);
                const tmpNumber = Number(word[word.length-1] / 100);
                console.log(word[word.length-1] / 100);
                inputBox.textContent = inputBox.textContent - word[word.length-1] + String(tmpNumber);
                // console.log(number);
                // inputBox.value += nu;
            }
        }
    },
    {    //index: 6
        key: ["±"],
        func: () => {
            charOfFunc[0].key.map(element => {
                if(element === inputBox.value.slice(-1)) {
                    console.log("ok");
                }
            });
        }
    },
];