const input = require("./input");

const rulesRaw = input.split("\n");

const ruleSplit = (rulesRaw) => {
    return rulesRaw.map((rule) => {
        let instructionArray = rule.split(/ bag[s]*[,. contain no other bags]*|[0-9] */g).filter((property) => {
            return property;
        });
        
        return {parent: instructionArray.shift(), children: instructionArray};
    })
}

const createMap = (instructions) => {
    let bagMap = {};
    instructions.forEach((instruction) => {
        if (!bagMap.hasOwnProperty(instruction.parent)){
            bagMap[instruction.parent] = {parents: [], children: []};
        }
        bagMap[instruction.parent]["children"].push(instruction.children);
        instruction.children.forEach((child) => {
            if (!bagMap.hasOwnProperty(child)){
                bagMap[child] = {parents: [], children: []};
            } 
            bagMap[child]["parents"].push(instruction.parent);
        })
    }) 
    return bagMap;
}

const parentBagLookUp = (bagMap, bagToFind, parents = []) => {
    bagMap[bagToFind]["parents"].forEach((parent) => {
        if (!parents.includes(parent)){
            parents.push(parent);
        }
        parentBagLookUp(bagMap, parent, parents);
    });
    return parents.length;
}

const childBagLookUp = (bagMap, bagToFind, parents = []) => {
    
};

//part1
console.log(parentBagLookUp(createMap(ruleSplit(rulesRaw)), "shiny gold"));

//part2
console.log(childBagLookUp(createMap(ruleSplit(rulesRaw)), "shiny gold"));