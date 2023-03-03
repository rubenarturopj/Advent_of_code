// importing input data
const fs = require("fs");
const numeros = fs.readFileSync("./data.txt", "utf-8");

// transforming input data into usable data
let textToArray = numeros.split("\n");
let newArray = [];
function removeSymbols(array) {
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i].replace("\r", ""));
    }
}
removeSymbols(textToArray);
// console.log(newArray);

// doing calculations of the challenge
function createSmallArrays(array) {
    const miniArray = [];
    let temp = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== "") {
            let hola = parseInt(array[i]);
            temp = hola + temp;
        }
        if (array[i] === "") {
            miniArray.push(temp);
            temp = 0;
        }
    }
    return miniArray;
}

const hello = createSmallArrays(newArray);

const watermelon = hello.sort(function (a, b) {
    return b - a;
});

//the greatest
console.log("The greatest number is " + watermelon[0]);

//the 3 greatest
const sum = watermelon[0] + watermelon[1] + watermelon[2];
console.log("The sum of the 3 greatest is " + sum);
