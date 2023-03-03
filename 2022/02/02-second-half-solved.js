const fs = require("fs");
const rawData = fs.readFileSync("./input.txt", "utf-8");

let usableArray = [];

function transformData(data) {
    let newArray = data.split("\n");
    // console.log(newArray);
    for (let i = 0; i < newArray.length; i++) {
        const element = newArray[i].replace("\r", "");
        const element2 = element.replace(" ", "");
        usableArray.push(element2);
    }
}

transformData(rawData);

// console.log(usableArray);

// puntos
const A = 1;
const B = 2;
const C = 3;
const rock = 1;
const paper = 2;
const scissors = 3;
const DRAW = 3;
const WIN = 6;

let oponentMovePoints = 0;
let myMovePoints = 0;

function determineWinner(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "AX") {
            // console.log("I lose. I need scissors");
            oponentMovePoints += A + WIN;
            myMovePoints += scissors;
        }
        if (array[i] === "AY") {
            // console.log("It's a draw. I need rock");
            oponentMovePoints += A + DRAW;
            myMovePoints += rock + DRAW;
        }
        if (array[i] === "AZ") {
            // console.log("I win. I need paper");
            oponentMovePoints += A;
            myMovePoints += paper + WIN;
        }
        if (array[i] === "BX") {
            // console.log("I lose. I need rock");
            oponentMovePoints += B + WIN;
            myMovePoints += rock;
        }
        if (array[i] === "BY") {
            // console.log("It's a draw. I need paper");
            oponentMovePoints += B + DRAW;
            myMovePoints += paper + DRAW;
        }
        if (array[i] === "BZ") {
            // console.log("I win. I need scissors");
            oponentMovePoints += B;
            myMovePoints += scissors + WIN;
        }
        if (array[i] === "CX") {
            // console.log("I lose. I need paper");
            oponentMovePoints += C + WIN;
            myMovePoints += paper;
        }
        if (array[i] === "CY") {
            // console.log("It's a draw. I need scissors");
            oponentMovePoints += C + DRAW;
            myMovePoints += scissors + DRAW;
        }
        if (array[i] === "CZ") {
            // console.log("I win. I need rock");
            oponentMovePoints += C;
            myMovePoints += rock + WIN;
        }
    }
    return "The end";
}

const results1 = determineWinner(usableArray);
// console.log(results1);

console.log();
console.log("The oponent's total amount of points is:");
console.log(oponentMovePoints);
console.log("My total amount of points is:");
console.log(myMovePoints);
