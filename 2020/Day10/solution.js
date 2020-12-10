const input = require("./input");

const adaptersSorted = input.split("\n").sort((a,b) => a-b);

const testAdapters = (adapters) => {
    let oneJolt = 0;
    let threeJolt = 1;
    for (i = 0; i < adapters.length - 1 ; i ++){
        if (adapters[i + 1] - adapters[i] === 1){
            oneJolt ++;
        } else if (adapters[i + 1] - adapters[i] === 3){
            threeJolt ++;
        }
    }
    return oneJolt * threeJolt;
}


console.log(testAdapters(adaptersSorted));