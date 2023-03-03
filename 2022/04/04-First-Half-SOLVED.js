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

let regex1 = /(-|,)/g;

const subArrays = [];

usableArray.forEach((elemento) => {
    const dividido = elemento.split(regex1);
    // console.log(dividido);

    const tempArray = [];

    for (let i = 0; i < dividido.length; i++) {
        if (dividido[i] !== "-" && dividido[i] !== ",") {
            tempArray.push(dividido[i]);
        }
    }
    // console.log(tempArray);
    subArrays.push(tempArray);
    return;
});

// console.log(subArrays);

let bigCounter = 0;

function makeSubArrays(array) {
    let counter = 0;

    array.forEach((element) => {
        let firstListLowEnd = parseInt(element[0]);
        let firstListHighEnd = parseInt(element[1]);
        let secondListLowEnd = parseInt(element[2]);
        let secondListHighEnd = parseInt(element[3]);
        // console.log(firstListLowEnd);
        // console.log(firstListHighEnd);
        // console.log(secondListLowEnd);
        // console.log(secondListHighEnd);

        const list1 = [];
        for (let i = firstListLowEnd; i <= firstListHighEnd; i++) {
            list1.push(i);
        }
        const list2 = [];
        for (let i = secondListLowEnd; i <= secondListHighEnd; i++) {
            list2.push(i);
        }
        // console.log(list1);
        // console.log(list2);

        if (list1.length > list2.length) {
            // console.log("Is Array2 contained in Array1?");

            const containsAll1 = list2.every((element) => {
                return list1.includes(element);
            });

            if (containsAll1 === true) {
                counter++;
            }

            // console.log(containsAll1);
        } else if (list1.length < list2.length) {
            // console.log("Is Array1 contained in Array2?");

            const containsAll2 = list1.every((element) => {
                return list2.includes(element);
            });

            if (containsAll2 === true) {
                counter++;
            }

            // console.log(containsAll2);
        } else {
            // console.log("Same length, are Array1 and Array2 identical?");

            const containsAll3 = list1.every((element) => {
                return list2.includes(element);
            });

            if (containsAll3 === true) {
                counter++;
            }

            // console.log(containsAll3);
        }
    });

    bigCounter += counter;
    return;
}

makeSubArrays(subArrays);

console.log("One range fully contains the other one in");
console.log(bigCounter);
console.log("assignment pairs");
