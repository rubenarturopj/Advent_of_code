/** Tenemos una string de 24 caracteres. La partimos en mitades.
 *  Revisamos cada parte y encontramos el caracter que aparece en ambas mitades.
 *
 *  Valor de cada letra minúscula
 *  a  b  c  d  e  f  g  h  i  j  k  l  m  n  o  p  q  r  s  t  u  v  w  x  y  z
 *  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26
 *
 *  Valor de cada letra mayúscula
 *  A  B  C  D  E  F  G  H  I  J  K  L  M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z
 *  27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52
 *
 *  Ejemplo: 16 (p), 38 (L), 42 (P), 22 (v), 20 (t), and 19 (s); the sum of these is 157.
 */

const fs = require("fs");
const rawData = fs.readFileSync("./input.txt", "utf-8");

let usableArray = [];

function transformData(data) {
    let newArray = data.split("\n");
    for (let i = 0; i < newArray.length; i++) {
        const element = newArray[i].replace("\r", "");
        usableArray.push(element);
    }
}

transformData(rawData);
// console.log(usableArray);

let duplicatesSum = 0;

function splitInTwo(array) {
    let half = "";
    let firstHalf = "";
    let secondHalf = "";
    let firstHalfArray = [];
    let secondHalfArray = [];
    let counter2 = 0;

    array.forEach((string) => {
        // console.log(string.length / 2);
        half = string.length / 2;
        firstHalf = string.slice(0, half);
        secondHalf = string.slice(half, string.length);

        // hasta aqui ya los tengo divididos en mitades
        // ahora tengo que comparar ambas mitades y ver cual es la letra que se repite
        // dos for loops

        firstHalfArray = firstHalf.split("");
        secondHalfArray = secondHalf.split("");

        function findDuplicate(array) {
            let repeatedLetter = [];

            for (let i = 0; i < array.length; i++) {
                for (let j = 0; j < secondHalfArray.length; j++) {
                    if (array[i] === secondHalfArray[j]) {
                        if (!repeatedLetter.includes(array[i])) {
                            repeatedLetter.push(array[i]);
                        } else {
                            break;
                        }
                    }
                }
            }
            return repeatedLetter;
        }

        commonLetter = findDuplicate(firstHalfArray);
        // console.log(commonLetter);
        let backToString = commonLetter.join("");
        // console.log(backToString);

        /////////// valores de las letras ////////////
        let counter = 0;
        function findValue(value) {
            if (value === "a") {counter += 1} // prettier-ignore
            if (value === "b") {counter += 2} // prettier-ignore
            if (value === "c") {counter += 3} // prettier-ignore
            if (value === "d") {counter += 4} // prettier-ignore
            if (value === "e") {counter += 5} // prettier-ignore
            if (value === "f") {counter += 6} // prettier-ignore
            if (value === "g") {counter += 7} // prettier-ignore
            if (value === "h") {counter += 8} // prettier-ignore
            if (value === "i") {counter += 9} // prettier-ignore
            if (value === "j") {counter += 10} // prettier-ignore
            if (value === "k") {counter += 11} // prettier-ignore
            if (value === "l") {counter += 12} // prettier-ignore
            if (value === "m") {counter += 13} // prettier-ignore
            if (value === "n") {counter += 14} // prettier-ignore
            if (value === "o") {counter += 15} // prettier-ignore
            if (value === "p") {counter += 16} // prettier-ignore
            if (value === "q") {counter += 17} // prettier-ignore
            if (value === "r") {counter += 18} // prettier-ignore
            if (value === "s") {counter += 19} // prettier-ignore
            if (value === "t") {counter += 20} // prettier-ignore
            if (value === "u") {counter += 21} // prettier-ignore
            if (value === "v") {counter += 22} // prettier-ignore
            if (value === "w") {counter += 23} // prettier-ignore
            if (value === "x") {counter += 24} // prettier-ignore
            if (value === "y") {counter += 25} // prettier-ignore
            if (value === "z") {counter += 26} // prettier-ignore
            if (value === "A") {counter += 27} // prettier-ignore
            if (value === "B") {counter += 28} // prettier-ignore
            if (value === "C") {counter += 29} // prettier-ignore
            if (value === "D") {counter += 30} // prettier-ignore
            if (value === "E") {counter += 31} // prettier-ignore
            if (value === "F") {counter += 32} // prettier-ignore
            if (value === "G") {counter += 33} // prettier-ignore
            if (value === "H") {counter += 34} // prettier-ignore
            if (value === "I") {counter += 35} // prettier-ignore
            if (value === "J") {counter += 36} // prettier-ignore
            if (value === "K") {counter += 37} // prettier-ignore
            if (value === "L") {counter += 38} // prettier-ignore
            if (value === "M") {counter += 39} // prettier-ignore
            if (value === "N") {counter += 40} // prettier-ignore
            if (value === "O") {counter += 41} // prettier-ignore
            if (value === "P") {counter += 42} // prettier-ignore
            if (value === "Q") {counter += 43} // prettier-ignore
            if (value === "R") {counter += 44} // prettier-ignore
            if (value === "S") {counter += 45} // prettier-ignore
            if (value === "T") {counter += 46} // prettier-ignore
            if (value === "U") {counter += 47} // prettier-ignore
            if (value === "V") {counter += 48} // prettier-ignore
            if (value === "W") {counter += 49} // prettier-ignore
            if (value === "X") {counter += 50} // prettier-ignore
            if (value === "Y") {counter += 51} // prettier-ignore
            if (value === "Z") {counter += 52} // prettier-ignore
        }

        findValue(backToString);
        // console.log(firstHalf);
        // console.log(secondHalf);
        // console.log(firstHalfArray);
        // console.log(secondHalfArray);
        // console.log(commonLetter);

        counter2 += counter;
    });
    // return duplicatesSum
    duplicatesSum = counter2;
    // return duplicatesSum
}

// para activar la mega funciôn que hice
const inHalves = splitInTwo(usableArray);

console.log("The total sum of the items repeated in both compartments is:");
console.log(duplicatesSum);
