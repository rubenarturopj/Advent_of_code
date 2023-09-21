const fs = require("fs");
// const rawInput = fs.readFileSync("./smallInput.txt", "utf-8");
const rawInput = fs.readFileSync("./bigInput.txt", "utf-8");
// console.log(rawInput);

function transformData(array) {
    let usableArray = [];
    let newArray = array.split("\n");
    for (let i = 0; i < newArray.length; i++) {
        const element = newArray[i].replace("\r", "");
        usableArray.push(element);
    }
    return usableArray;
}

const input = transformData(rawInput);
// console.log(input);

///////////////////////////////////////////////////////
//////////////////////////// first parte //////////////
///////////////////////////////////////////////////////

// creating the grid
let grid = [];

for (const line of input) {
    // making each line: parsing each number and creating an array of arrays
    const arrayOfLine = line.split("");
    const parsedLine = arrayOfLine.map((numberInString) =>
        parseInt(numberInString)
    );
    grid.push(parsedLine);
}
console.log(grid);

// defining the number of elements in the rows and columns
const rows = grid.length; // rows = the amount of lines in the grid
const cols = grid[0].length; // cols = how many elements there is in one line, or the columns
console.log(rows);
console.log(cols);

// a constant will carry an arrow function, we're passing 2 arguments: Y and X.
// Y represents the Y axis (rows), and X the X axis (cols)
// function will return TRUE or FALSE only. TRUE means the tree it is visible.
const isVisible = (y, x) => {
    // from the grid, the array with index Y (line) and from that array the element in position X.
    const selectedTree = grid[y][x];
    // if we're on the first row/line or the last row/line return true. 1 means the last index
    // because it means the tree is at the top or bottom border and it is visible.
    if (y === 0 || y === rows - 1) {
        return true;
    }
    // if we're on the first column or the last column return true. 1 means the last index
    // because it means the tree is at the left or right border and it is visible
    if (x === 0 || x === cols - 1) {
        return true;
    }

    let isBlockedFromTop = false;
    let isBlockedFromBottom = false;
    let isBlockedFromLeft = false;
    let isBlockedFromRight = false;

    for (let iy = 0; iy < rows; iy++) {
        for (let ix = 0; ix < cols; ix++) {
            if (grid[iy][ix] >= selectedTree) {
                if (iy === y && ix < x) {
                    isBlockedFromLeft = true;
                }

                if (iy === y && ix > x) {
                    isBlockedFromRight = true;
                }

                if (ix === x && iy < y) {
                    isBlockedFromTop = true;
                }

                if (ix === x && iy > y) {
                    isBlockedFromBottom = true;
                }
            }
        }
    }

    return (
        !isBlockedFromTop ||
        !isBlockedFromBottom ||
        !isBlockedFromLeft ||
        !isBlockedFromRight
    );
};

let visibleTrees = 0;

// could have been named "i" and "j" but the "x/y" clarifies which one it is.
// the for in "iy" will go through every line, the for in "ix" means it will go through every element in each line
// then it will check if the coordinates y/x belong to a visible tree, and if it returns true, then it will increase the count.
// For exmaple: first iteration will be a tree in positions x0/y0, because it is in the border it returns true very fast.
// in the second line the first real iteration will be: x1/y1
for (let iy = 0; iy < rows; iy++) {
    for (let ix = 0; ix < cols; ix++) {
        if (isVisible(iy, ix)) {
            visibleTrees++;
        }
    }
}

console.log(`visibleTrees: ${visibleTrees}`);

///////////////////////////////////////////////////////
//////////////////////////// second part //////////////
///////////////////////////////////////////////////////

/** like in the first part, before we are defining the function and then we're calling in below
 *
 * in the caller function, we are looping over every line and then over every element on each line.
 * Then we are comparing an accumulator number that starts on zero and the number obtained in each
 * iteration, this will give us the max number, we are always going to take the higher number.
 *
 * In the task function, ee are passing each element's coordinates into it to find the tree
 * we will compare.
 * Then we are going to pass 4 loops, one to each cardinal direction, to find out how many trees
 * can be seen from our selectedTree.
 */

const calculateScenicScore = (y, x) => {
    const selectedTree = grid[y][x];

    let toTop = 0;
    let toBottom = 0;
    let toLeft = 0;
    let toRight = 0;

    // X is our current position on the X axis, or the position of the element on each line,
    // we're decreasing it by 1 to start from the one to the left of my item and then decreasing
    // one until we reach the left border.
    for (let ix = x - 1; ix >= 0; ix--) {
        toLeft++;

        if (grid[y][ix] >= selectedTree) {
            break;
        }
    }

    // checking to the right, we start on to the right until hitting the right border
    for (let ix = x + 1; ix < cols; ix++) {
        toRight++;

        if (grid[y][ix] >= selectedTree) {
            break;
        }
    }

    // checking upwards
    for (let iy = y - 1; iy >= 0; iy--) {
        toTop++;

        if (grid[iy][x] >= selectedTree) {
            break;
        }
    }

    // checking downwards
    for (let iy = y + 1; iy < rows; iy++) {
        toBottom++;

        if (grid[iy][x] >= selectedTree) {
            break;
        }
    }

    return toTop * toBottom * toLeft * toRight;
};

let maxScenicScore = 0;

for (let iy = 0; iy < rows; iy++) {
    for (let ix = 0; ix < cols; ix++) {
        maxScenicScore = Math.max(maxScenicScore, calculateScenicScore(iy, ix));
    }
}

console.log(`maxScenicScore: ${maxScenicScore}`);
