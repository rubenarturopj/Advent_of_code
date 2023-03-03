/** Rock, paper, scissors
 * Rock defeats Scissors; Scissors defeats Paper; Paper defeats Rock.
 * If both players chose the same, then it's a draw
 *
 * Oponent:
 * A = Rock, B = Paper, C = Scissors
 * You:
 * X = Rock, Y = Paper, Z = Scissors
 *
 * The first column is the oponents moves
 * Second column is your moves
 *
 * Winner is the player with the most points (sum of all their moves)
 * Points
 * Rock = 1, Paper = 2, Scissors = 3.
 * if you lose = 0 points, draw = 3 points, you win = 6 points
 */

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
const X = 1;
const Y = 2;
const Z = 3;
const DRAW = 3;
const WIN = 6;

let oponentMovePoints = 0;
let myMovePoints = 0;

function determineWinner(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "AX") {
            // console.log("It's a draw");
            oponentMovePoints += A + DRAW;
            myMovePoints += X + DRAW;
        }
        if (array[i] === "AY") {
            // console.log("Y wins");
            oponentMovePoints += A;
            myMovePoints += Y + WIN;
        }
        if (array[i] === "AZ") {
            // console.log("A wins");
            oponentMovePoints += A + WIN;
            myMovePoints += Z;
        }
        if (array[i] === "BX") {
            // console.log("B wins");
            oponentMovePoints += B + WIN;
            myMovePoints += X;
        }
        if (array[i] === "BY") {
            // console.log("It's a draw");
            oponentMovePoints += B + DRAW;
            myMovePoints += Y + DRAW;
        }
        if (array[i] === "BZ") {
            // console.log("Z wins");
            oponentMovePoints += B;
            myMovePoints += Z + WIN;
        }
        if (array[i] === "CX") {
            // console.log("X wins");
            oponentMovePoints += C;
            myMovePoints += X + WIN;
        }
        if (array[i] === "CY") {
            // console.log("C wins");
            oponentMovePoints += C + WIN;
            myMovePoints += Y;
        }
        if (array[i] === "CZ") {
            // console.log("It's a draw");
            oponentMovePoints += C + DRAW;
            myMovePoints += Z + DRAW;
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
