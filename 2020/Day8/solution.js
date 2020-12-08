const input = require("./input");

const instructionsRaw = input.split("\n");

// const loopInstructions = (instructions) => {
//     let opArr = []
//     instructions.forEach((instruction) => {
//         opArr.push(instruction.split(" "));
//     })
//     return doNextInstruction(opArr);
// }

let formatLog = [];
let formatIndex = 0;

const reformat = (opArr, index, log) => {
    if (log.includes(opArr[index])){
        
    }
    formatIndex ++;
}


const doNextInstruction = (opArr, index = 0, total = 0, log = []) => {
    let [instruction, value] = opArr[index].split(" ");
    if (log.includes(`${index} ${opArr[index]}`)){
        reformat(opArr, formatIndex, formatLog)
        return total;
    } else {
        log.push(`${index} ${opArr[index]}`);
        value = parseInt(value);
        if (instruction === "acc"){
            total += value;
            index ++;
        } else if (instruction === "jmp"){
            index += value;
        } else {
            index ++;            
        }
        return doNextInstruction(opArr, index , total, log);
    }
}

console.log(doNextInstruction(instructionsRaw));



// let value = opArr[index][1].split(/[0-9]*/g).filter((value) => {
//     return value;
// });;
// let number = opArr[index][1].split(/[-+]/g).filter((value) => {
//     return value;
// });