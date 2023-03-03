/** Cómo hacer una lista de números partiendo de dos valores strings */


let value = "2-4";
let valueArray = value.split("-");
// console.log(valueArray);

let lowEnd = parseInt(valueArray[0]);
let highEnd = parseInt(valueArray[1]);
// console.log(lowEnd);
// console.log(highEnd);

const list = [];
for (let i = lowEnd; i <= highEnd; i++) {
    list.push(i);
}
console.log(list);