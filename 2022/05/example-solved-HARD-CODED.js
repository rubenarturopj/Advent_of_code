/*                   
    [D]                           [Z]
[N] [C]                           [D]
[Z] [M] [P]               [C] [M] [P]
 1   2   3                 1   2   3

move 1 from 2 to 1     Resultado (on top) CMZ
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2                            */

const smallInput = `move 01 from 02 to 01
move 3 from 1 to 3
move 2 from 02 to 1
move 01 from 1 to 2`
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
const noText = removeText(eachLineToArray);
// console.log(noText);

const stack1 = ["Z", "N"];
const stack2 = ["M", "C", "D"];
const stack3 = ["P"];

function movingBoxes(array){
    console.log("Initial stacks");
    console.log(stack1);
    console.log(stack2);
    console.log(stack3);

    array.forEach(subArray => {
        let boxesToMove = subArray[0];
        let boxOrigin = subArray[1];
        let boxDestination = subArray[2];
        // console.log(boxesToMove);
        // console.log(boxOrigin);
        // console.log(boxDestination);
        let box;

        if (boxOrigin === "1" || boxOrigin === "01") {
            console.log("Moving from stack 1");
            if (boxDestination === "1" || boxDestination === "01") {
                console.log(" Sending to stack 1");
                console.log(`  Moving ${boxesToMove} box/es`);

                numberOfBoxes = parseInt(boxesToMove);
                for (let i = 0; i < numberOfBoxes; i++) {
                    box = stack1.pop();
                    stack1.push(box);
                }
                console.log("    AFTER");
                console.log(stack1);
                console.log(stack2);
                console.log(stack3);
            }
            if (boxDestination === "2" || boxDestination === "02") {
                console.log(" Sending to stack 2");
                console.log(`  Moving ${boxesToMove} box/es`);

                numberOfBoxes = parseInt(boxesToMove);
                for (let i = 0; i < numberOfBoxes; i++) {
                    box = stack1.pop();
                    stack2.push(box);
                }
                console.log("    AFTER");
                console.log(stack1);
                console.log(stack2);
                console.log(stack3);
            }
            if (boxDestination === "3" || boxDestination === "03") {
                console.log(" Sending to stack 3");
                console.log(`  Moving ${boxesToMove} box/es`);

                numberOfBoxes = parseInt(boxesToMove);
                for (let i = 0; i < numberOfBoxes; i++) {
                    box = stack1.pop();
                    stack3.push(box);
                }
                console.log("    AFTER");
                console.log(stack1);
                console.log(stack2);
                console.log(stack3);
            }
        }
        if (boxOrigin === "2" || boxOrigin === "02") {
            console.log("Moving from stack 2");
            if (boxDestination === "1" || boxDestination === "01") {
                console.log(" Sending to stack 1");
                console.log(`  Moving ${boxesToMove} box/es`);

                    numberOfBoxes = parseInt(boxesToMove);
                    for (let i = 0; i < numberOfBoxes; i++) {
                        box = stack2.pop();
                        stack1.push(box);
                    }
                    console.log("    AFTER");
                    console.log(stack1);
                    console.log(stack2);
                    console.log(stack3);
            }
            if (boxDestination === "2" || boxDestination === "02") {
                console.log(" Sending to stack 2");
                console.log(`  Moving ${boxesToMove} box/es`);

                numberOfBoxes = parseInt(boxesToMove);
                for (let i = 0; i < numberOfBoxes; i++) {
                    box = stack2.pop();
                    stack2.push(box);
                }
                console.log("    AFTER");
                console.log(stack1);
                console.log(stack2);
                console.log(stack3);
            }
            if (boxDestination === "3" || boxDestination === "03") {
                console.log(" Sending to stack 3");
                console.log(`  Moving ${boxesToMove} box/es`);

                numberOfBoxes = parseInt(boxesToMove);
                for (let i = 0; i < numberOfBoxes; i++) {
                    box = stack2.pop();
                    stack3.push(box);
                }
                console.log("    AFTER");
                console.log(stack1);
                console.log(stack2);
                console.log(stack3);
            }
        }
        if (boxOrigin === "3" || boxOrigin === "03") {
            console.log("Moving from stack 3");
            if (boxDestination === "1" || boxDestination === "01") {
                console.log(" Sending to stack 1");
                console.log(`  Moving ${boxesToMove} box/es`);

                numberOfBoxes = parseInt(boxesToMove);
                for (let i = 0; i < numberOfBoxes; i++) {
                    box = stack3.pop();
                    stack1.push(box);
                }
                console.log("    AFTER");
                console.log(stack1);
                console.log(stack2);
                console.log(stack3);
            }
            if (boxDestination === "2" || boxDestination === "02") {
                console.log(" Sending to stack 2");
                console.log(`  Moving ${boxesToMove} box/es`);

                numberOfBoxes = parseInt(boxesToMove);
                for (let i = 0; i < numberOfBoxes; i++) {
                    box = stack3.pop();
                    stack2.push(box);
                }
                console.log("    AFTER");
                console.log(stack1);
                console.log(stack2);
                console.log(stack3);
            }
            if (boxDestination === "3" || boxDestination === "03") {
                console.log(" Sending to stack 3");
                console.log(`  Moving ${boxesToMove} box/es`);

                numberOfBoxes = parseInt(boxesToMove);
                for (let i = 0; i < numberOfBoxes; i++) {
                    box = stack3.pop();
                    stack3.push(box);
                }
                console.log("    AFTER");
                console.log(stack1);
                console.log(stack2);
                console.log(stack3);
            }
        }
    });
    let topStack1 = stack1[stack1.length-1];
    let topStack2 = stack2[stack2.length-1];
    let topStack3 = stack3[stack3.length-1];
    
    // let topStack2 = ;
    // let topStack3 = ;
    return `${topStack1}${topStack2}${topStack3}`
};
const result = movingBoxes(noText);
console.log(result);
