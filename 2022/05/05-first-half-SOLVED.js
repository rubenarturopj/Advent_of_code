/*                   
    [D]                           [Z]
[N] [C]                           [D]
[Z] [M] [P]               [C] [M] [P]
 1   2   3                 1   2   3

move 1 from 2 to 1     Resultado (on top) CMZ
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2                            */

const smallInput = `move 3 from 6 to 2
move 5 from 6 to 7
move 6 from 2 to 5
move 1 from 9 to 7
move 1 from 1 to 9
move 1 from 5 to 3
move 1 from 2 to 5
move 3 from 4 to 5
move 10 from 7 to 3
move 1 from 4 to 9
move 6 from 8 to 7
move 4 from 7 to 8
move 1 from 7 to 3
move 1 from 1 to 2
move 1 from 2 to 8
move 1 from 9 to 1
move 3 from 9 to 4
move 4 from 8 to 3
move 4 from 7 to 1
move 4 from 4 to 6
move 2 from 8 to 7
move 9 from 3 to 8
move 2 from 7 to 4
move 3 from 4 to 9
move 4 from 1 to 9
move 4 from 3 to 9
move 2 from 1 to 4
move 1 from 4 to 6
move 3 from 3 to 2
move 1 from 2 to 8
move 1 from 2 to 7
move 3 from 6 to 2
move 2 from 6 to 7
move 4 from 2 to 3
move 3 from 7 to 9
move 2 from 5 to 6
move 15 from 9 to 4
move 4 from 9 to 2
move 12 from 5 to 4
move 9 from 8 to 5
move 25 from 4 to 7
move 1 from 4 to 7
move 1 from 4 to 8
move 2 from 2 to 5
move 1 from 4 to 2
move 23 from 7 to 6
move 2 from 5 to 2
move 22 from 6 to 8
move 4 from 5 to 9
move 1 from 7 to 9
move 2 from 6 to 4
move 2 from 4 to 7
move 25 from 8 to 3
move 1 from 2 to 1
move 3 from 2 to 3
move 1 from 6 to 8
move 1 from 1 to 8
move 1 from 2 to 8
move 1 from 8 to 1
move 4 from 5 to 7
move 1 from 8 to 4
move 5 from 9 to 8
move 5 from 8 to 9
move 1 from 8 to 5
move 3 from 5 to 4
move 3 from 9 to 1
move 30 from 3 to 4
move 3 from 1 to 4
move 2 from 9 to 5
move 4 from 7 to 9
move 16 from 4 to 8
move 6 from 3 to 9
move 3 from 7 to 3
move 19 from 4 to 7
move 8 from 9 to 4
move 1 from 1 to 9
move 13 from 7 to 9
move 3 from 7 to 8
move 3 from 5 to 9
move 4 from 8 to 3
move 2 from 7 to 3
move 14 from 9 to 4
move 10 from 3 to 1
move 12 from 4 to 8
move 6 from 1 to 9
move 1 from 1 to 2
move 1 from 7 to 1
move 6 from 9 to 3
move 17 from 8 to 6
move 10 from 8 to 5
move 1 from 7 to 8
move 1 from 9 to 5
move 2 from 3 to 1
move 4 from 5 to 9
move 1 from 8 to 7
move 6 from 9 to 7
move 4 from 4 to 2
move 3 from 4 to 6
move 4 from 5 to 9
move 4 from 9 to 3
move 1 from 2 to 4
move 4 from 4 to 7
move 3 from 5 to 3
move 1 from 4 to 5
move 5 from 1 to 2
move 1 from 1 to 9
move 7 from 2 to 7
move 1 from 5 to 7
move 8 from 3 to 5
move 20 from 6 to 7
move 9 from 7 to 9
move 2 from 2 to 9
move 2 from 3 to 1
move 2 from 1 to 3
move 2 from 3 to 4
move 2 from 4 to 6
move 1 from 3 to 9
move 1 from 4 to 9
move 1 from 6 to 9
move 2 from 5 to 8
move 2 from 8 to 5
move 1 from 6 to 7
move 2 from 5 to 8
move 6 from 9 to 5
move 2 from 8 to 6
move 11 from 9 to 2
move 1 from 6 to 5
move 11 from 2 to 5
move 1 from 6 to 4
move 7 from 5 to 9
move 7 from 9 to 1
move 1 from 4 to 9
move 28 from 7 to 5
move 1 from 7 to 5
move 5 from 5 to 9
move 5 from 9 to 3
move 6 from 1 to 8
move 1 from 1 to 7
move 5 from 3 to 2
move 1 from 7 to 8
move 7 from 8 to 1
move 1 from 9 to 4
move 2 from 2 to 5
move 22 from 5 to 3
move 1 from 7 to 8
move 1 from 4 to 7
move 1 from 8 to 9
move 1 from 9 to 4
move 14 from 5 to 7
move 5 from 5 to 9
move 19 from 3 to 4
move 1 from 2 to 9
move 2 from 2 to 5
move 1 from 5 to 1
move 6 from 1 to 7
move 2 from 7 to 6
move 1 from 1 to 9
move 2 from 5 to 8
move 8 from 4 to 5
move 3 from 4 to 7
move 3 from 3 to 5
move 2 from 8 to 9
move 16 from 7 to 5
move 9 from 4 to 6
move 22 from 5 to 3
move 1 from 5 to 8
move 1 from 8 to 7
move 10 from 3 to 4
move 1 from 5 to 4
move 10 from 4 to 5
move 8 from 5 to 2
move 5 from 2 to 7
move 5 from 7 to 1
move 4 from 7 to 6
move 3 from 9 to 7
move 2 from 2 to 3
move 3 from 5 to 1
move 6 from 9 to 7
move 5 from 7 to 8
move 6 from 1 to 5
move 6 from 3 to 4
move 4 from 4 to 2
move 1 from 4 to 6
move 5 from 8 to 7
move 3 from 2 to 3
move 1 from 1 to 4
move 1 from 1 to 9
move 2 from 2 to 1
move 2 from 4 to 3
move 4 from 3 to 7
move 3 from 7 to 3
move 13 from 6 to 1
move 1 from 9 to 2
move 6 from 3 to 5
move 8 from 1 to 4
move 1 from 2 to 7
move 9 from 4 to 9
move 7 from 5 to 1
move 2 from 5 to 6
move 1 from 1 to 4
move 1 from 4 to 3
move 2 from 1 to 2
move 5 from 3 to 6
move 2 from 6 to 1
move 13 from 7 to 6
move 2 from 3 to 4
move 2 from 2 to 9
move 2 from 7 to 8
move 6 from 9 to 2
move 1 from 9 to 3
move 1 from 5 to 2
move 7 from 1 to 2
move 1 from 6 to 7
move 1 from 4 to 8
move 1 from 3 to 1
move 1 from 7 to 8
move 7 from 1 to 9
move 4 from 8 to 6
move 1 from 5 to 3
move 9 from 9 to 5
move 1 from 1 to 2
move 14 from 2 to 7
move 2 from 9 to 3
move 13 from 5 to 3
move 24 from 6 to 9
move 6 from 3 to 5
move 14 from 7 to 9
move 1 from 4 to 1
move 20 from 9 to 7
move 9 from 3 to 8
move 15 from 9 to 6
move 1 from 5 to 8
move 1 from 2 to 3
move 14 from 6 to 3
move 2 from 3 to 4
move 2 from 3 to 6
move 13 from 7 to 1
move 8 from 3 to 5
move 1 from 3 to 9
move 8 from 5 to 4
move 4 from 5 to 2
move 10 from 1 to 3
move 6 from 4 to 5
move 4 from 5 to 1
move 3 from 1 to 6
move 7 from 8 to 2
move 4 from 4 to 3
move 13 from 3 to 6
move 3 from 8 to 1
move 3 from 7 to 8
move 3 from 8 to 4
move 1 from 4 to 2
move 2 from 3 to 4
move 1 from 5 to 7
move 4 from 7 to 1
move 2 from 3 to 5
move 3 from 2 to 1
move 1 from 4 to 7
move 7 from 2 to 4
move 2 from 4 to 3
move 1 from 7 to 5
move 4 from 9 to 5
move 1 from 4 to 2
move 3 from 2 to 9
move 8 from 1 to 7
move 1 from 3 to 5
move 7 from 5 to 7
move 10 from 6 to 4
move 1 from 5 to 1
move 4 from 1 to 3
move 9 from 7 to 6
move 3 from 1 to 8
move 12 from 4 to 6
move 5 from 4 to 6
move 2 from 9 to 3
move 3 from 8 to 7
move 1 from 1 to 3
move 3 from 7 to 8
move 5 from 7 to 5
move 1 from 7 to 5
move 2 from 3 to 1
move 2 from 8 to 7
move 3 from 5 to 1
move 1 from 9 to 7
move 1 from 8 to 3
move 4 from 7 to 8
move 4 from 5 to 9
move 4 from 1 to 7
move 3 from 8 to 6
move 1 from 8 to 1
move 1 from 7 to 1
move 1 from 5 to 8
move 1 from 8 to 7
move 7 from 3 to 1
move 3 from 9 to 1
move 1 from 9 to 3
move 28 from 6 to 3
move 3 from 7 to 8
move 2 from 8 to 2
move 1 from 2 to 7
move 2 from 6 to 1
move 18 from 3 to 9
move 5 from 3 to 4
move 2 from 7 to 4
move 2 from 1 to 8
move 1 from 2 to 6
move 7 from 6 to 4
move 4 from 4 to 3
move 3 from 8 to 1
move 4 from 9 to 8
move 1 from 4 to 8
move 9 from 1 to 6
move 5 from 1 to 3
move 4 from 6 to 7
move 7 from 6 to 3
move 5 from 8 to 1
move 12 from 3 to 6
move 7 from 6 to 4
move 4 from 3 to 5
move 5 from 6 to 7
move 12 from 4 to 3
move 6 from 1 to 4
move 4 from 4 to 2
move 14 from 9 to 8
move 17 from 3 to 2
move 5 from 4 to 9
move 1 from 9 to 6
move 5 from 2 to 1
move 1 from 9 to 8
move 5 from 1 to 6
move 2 from 2 to 6
move 12 from 2 to 4
move 6 from 7 to 2
move 3 from 7 to 6
move 3 from 9 to 8
move 5 from 4 to 7
move 4 from 2 to 6
move 3 from 6 to 8
move 5 from 8 to 2
move 7 from 6 to 8
move 1 from 7 to 3
move 6 from 4 to 3
move 1 from 8 to 1
move 1 from 5 to 7
move 2 from 6 to 8
move 13 from 8 to 2
move 3 from 5 to 4
move 1 from 1 to 2
move 3 from 6 to 2
move 1 from 1 to 4
move 4 from 4 to 8
move 8 from 3 to 1
move 2 from 4 to 8
move 15 from 2 to 4
move 16 from 8 to 3
move 1 from 8 to 6
move 1 from 7 to 2
move 8 from 1 to 2
move 1 from 6 to 8
move 6 from 3 to 1
move 3 from 3 to 8
move 6 from 3 to 1
move 6 from 2 to 9
move 2 from 1 to 4
move 1 from 8 to 5
move 8 from 2 to 9
move 8 from 1 to 4
move 3 from 8 to 6
move 21 from 4 to 7
move 1 from 9 to 7
move 2 from 6 to 8
move 1 from 5 to 1
move 1 from 3 to 9
move 8 from 9 to 4
move 1 from 1 to 7
move 1 from 1 to 4
move 1 from 6 to 8
move 1 from 9 to 3
move 2 from 9 to 5
move 2 from 5 to 3
move 1 from 9 to 4
move 3 from 8 to 2
move 1 from 1 to 4
move 4 from 4 to 9
move 3 from 3 to 2
move 5 from 9 to 1
move 17 from 7 to 1
move 1 from 9 to 1
move 2 from 2 to 4
move 1 from 4 to 2
move 8 from 2 to 9
move 5 from 4 to 5
move 6 from 4 to 8
move 20 from 1 to 6
move 2 from 9 to 8
move 1 from 2 to 9
move 2 from 8 to 7
move 8 from 7 to 8
move 4 from 5 to 9
move 14 from 8 to 7
move 1 from 5 to 7
move 7 from 9 to 1
move 3 from 6 to 4
move 3 from 9 to 7
move 12 from 6 to 7
move 22 from 7 to 9
move 2 from 2 to 5
move 10 from 1 to 7
move 1 from 4 to 1
move 2 from 6 to 1
move 1 from 1 to 3
move 2 from 4 to 8
move 2 from 8 to 6
move 1 from 3 to 8
move 1 from 4 to 1
move 2 from 5 to 3
move 1 from 8 to 4
move 2 from 3 to 7
move 19 from 9 to 7
move 1 from 1 to 4
move 2 from 9 to 1
move 2 from 1 to 6
move 1 from 6 to 5
move 42 from 7 to 8
move 1 from 7 to 6
move 2 from 4 to 8
move 7 from 6 to 8
move 2 from 1 to 5
move 2 from 9 to 5
move 14 from 8 to 3
move 22 from 8 to 2
move 3 from 5 to 6
move 10 from 8 to 6
move 5 from 8 to 9
move 12 from 6 to 7
move 2 from 5 to 1
move 5 from 3 to 2
move 7 from 3 to 5
move 2 from 5 to 1
move 2 from 3 to 7
move 4 from 1 to 2
move 1 from 5 to 7
move 1 from 5 to 4
move 1 from 6 to 2
move 1 from 9 to 2
move 9 from 7 to 3
move 1 from 4 to 1
move 3 from 7 to 5
move 4 from 3 to 2
move 5 from 2 to 3
move 2 from 5 to 2
move 34 from 2 to 9
move 1 from 1 to 5
move 15 from 9 to 3
move 2 from 3 to 2
move 1 from 5 to 4
move 7 from 3 to 8
move 3 from 9 to 2
move 6 from 9 to 4
move 5 from 9 to 3
move 4 from 4 to 6
move 1 from 6 to 8
move 1 from 3 to 5
move 6 from 3 to 2
move 1 from 4 to 9
move 2 from 4 to 2
move 4 from 5 to 8
move 1 from 5 to 6
move 1 from 7 to 6
move 1 from 9 to 6
move 1 from 7 to 2
move 12 from 8 to 7
move 2 from 7 to 3
move 4 from 6 to 9
move 7 from 9 to 4
move 9 from 3 to 9
move 11 from 7 to 4
move 3 from 9 to 6
move 1 from 4 to 1
move 15 from 4 to 3
move 2 from 4 to 1
move 3 from 1 to 4
move 17 from 3 to 7
move 4 from 3 to 7
move 7 from 9 to 2
move 3 from 4 to 1
move 4 from 6 to 9
move 1 from 9 to 6
move 1 from 3 to 1
move 5 from 7 to 9
move 8 from 9 to 4
move 1 from 1 to 6
move 6 from 4 to 9
move 4 from 2 to 3
move 1 from 4 to 3
move 1 from 4 to 9
move 1 from 1 to 7
move 1 from 7 to 9
move 3 from 6 to 2
move 9 from 2 to 3
move 1 from 9 to 4
move 1 from 1 to 5
move 12 from 7 to 6
move 4 from 9 to 8`
// Hay números de 2 cifras tmb

// console.log(smallInput);

function lineToArray(string) {
    const holder = string.split("\n");
    return holder;
};

const eachLineToArray = lineToArray(smallInput);
// console.log(eachLineToArray);

const regex1 = /(move |from |to )/g

function removeText(array) {
    let threeArrays = [];
    
    array.forEach(element => {
        const holder = element.replace(regex1, "");
        // console.log(holder);
        threeArrays.push(holder.split(" "));
    });
    return threeArrays;
};

// this const holds a big array of mini arrays (of 3 elements each) 
// that comes from instructions text input
const noText = removeText(eachLineToArray);
// console.log(noText);

let input1 = "BQC";
let input2 = "RQWZ";
let input3 = "BMRLV";
let input4 = "CZHVTW";
let input5 = "DZHBNVG";
let input6 = "HNPCJFVQ";
let input7 = "DGTRWZS";
let input8 = "CGMNBWZP";
let input9 = "NJBMWQFP";

const stack1 = input1.split("");
const stack2 = input2.split("");
const stack3 = input3.split("");
const stack4 = input4.split("");
const stack5 = input5.split("");
const stack6 = input6.split("");
const stack7 = input7.split("");
const stack8 = input8.split("");
const stack9 = input9.split("");

function movingBoxes(array){
    console.log("Initial stacks");
    console.log(stack1);
    console.log(stack2);
    console.log(stack3);
    console.log(stack4);
    console.log(stack5);
    console.log(stack6);
    console.log(stack7);
    console.log(stack8);
    console.log(stack9);

    const stackArray = [stack1, stack2, stack3, stack4, stack5, stack6, stack7, stack8, stack9];

    array.forEach(subArray => {
        let boxesToMove = subArray[0];
        let boxOrigin = subArray[1];
        let boxDestination = subArray[2];

        let box;
        
        console.log(`Moving ${boxesToMove} box/es from stack ${boxOrigin} to stack ${boxDestination}`);

        let numberOfBoxes = parseInt(boxesToMove);
        let stackOrigin = parseInt(boxOrigin);
        let stackDestination = parseInt(boxDestination);

        for (let i = 0; i < numberOfBoxes; i++) {
            box = stackArray[stackOrigin-1].pop();
            stackArray[stackDestination-1].push(box);
        }
    });

    // console.log("Final stacks");
    // console.log(stack1);
    // console.log(stack2);
    // console.log(stack3);
    // console.log(stack4);
    // console.log(stack5);
    // console.log(stack6);
    // console.log(stack7);
    // console.log(stack8);
    // console.log(stack9);
    let topStack1 = stack1[stack1.length-1];
    let topStack2 = stack2[stack2.length-1];
    let topStack3 = stack3[stack3.length-1];
    let topStack4 = stack4[stack4.length-1];
    let topStack5 = stack5[stack5.length-1];
    let topStack6 = stack6[stack6.length-1];
    let topStack7 = stack7[stack7.length-1];
    let topStack8 = stack8[stack8.length-1];
    let topStack9 = stack9[stack9.length-1];
    
    return `Boxes at the top of each stack are ${topStack1}${topStack2}${topStack3}${topStack4}${topStack5}${topStack6}${topStack7}${topStack8}${topStack9}`
};
const result = movingBoxes(noText);
console.log(result);
