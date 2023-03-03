/** Partir el input en grupos de 3 líneas
 * Revisar las 3 strings y encontrar la letra que está presente en las tres líneas
 * estimar su valor
 *
 * sumar todos los valores de todos los grupos
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

// dividir el array en arrays de 3
const biggerArray = [];

function groupsOfThree(array, groupSize) {
    const tempArray = [];
    for (let i = 0; i < array.length; i += groupSize) {
        const group = array.slice(i, i + groupSize);
        tempArray.push(group);
    }
    return tempArray;
}

const threeItemArrays = groupsOfThree(usableArray, 3);
// console.log(threeItemArrays);

let totalSum = 0;

function findRepeatedLetter(array) {
    let counter2 = 0;

    array.forEach((subArray) => {
        let groupOne = subArray[0].split("");
        let groupTwo = subArray[1].split("");
        let groupThree = subArray[2].split("");

        // console.log(groupOne);

        function sharedLetter(array1, array2, array3) {
            let repeatedLetter = [];

            for (let i = 0; i < array1.length; i++) {
                for (let j = 0; j < array2.length; j++) {
                    for (let k = 0; k < array3.length; k++) {
                        if (
                            array1[i] === array2[j] &&
                            array2[j] === array3[k]
                        ) {
                            if (!repeatedLetter.includes(array1[i])) {
                                repeatedLetter.push(array1[i]);
                            } else {
                                break;
                            }
                        }
                    }
                }
            }
            return repeatedLetter;
        }
        const repeatedItem = sharedLetter(groupOne, groupTwo, groupThree);
        // console.log(repeatedItem);

        const backToString = repeatedItem.join("");
        // console.log(backToString);

        ///// suma de valores//////
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
        // console.log(counter);

        counter2 += counter;
        // console.log(counter2);
    });

    totalSum = counter2;
    // console.log(totalSum);
    return totalSum;
}

const result = findRepeatedLetter(threeItemArrays);
console.log("The sum of all priorities is:");
console.log(result);
