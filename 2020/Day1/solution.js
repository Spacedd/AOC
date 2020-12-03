const input = require("./input");
const target = 2020;

const part1 = () => {
    let result;
    for (let i = 0; i < input.length; i++){
        for (let j = 0; j < input.length; j++){
            if (input[i] + input[j] === target && i !== j){
                result = input[i] * input[j];
                break;
            }
        }
    }
    return result;
}

//console.log(part1())

const part2 = () => {
    let result;
    for (let i = 0; i < input.length; i++){
        for (let j = 0; j < input.length; j++){
            for (let k = 0; k < input.length; k++){
                if (input[i] + input[j] + input[k] === target && i !== j && i !== k && j !== k){
                    result = input[i] * input[j] * input[k];
                    break;
                }
            }
        }
    }
    return result;
}

console.log(part2())
