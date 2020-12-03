const puzzleInput = require("./puzzleInput");

//let puzzleInput = "dabAcCaCBAcCcaDA";

checkUnits = (polymer) => {
    let hit;
    do{
        hit = false;
        for(let i = 0; i < polymer.length -1; i++){
            if(polymer[i].toLowerCase() === polymer[i+1].toLowerCase() && polymer[i] !== polymer[i+1]){
                polymer = polymer.slice(0, i) + polymer.slice(i+2, polymer.length);
                hit = true;
            }
        }
    }while(hit);
    return polymer.length;
}

findShortest = () => {
    let shortestPolymer = 0;
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    for(i in alphabet){
        letter = alphabet[i];
        let regex = new RegExp("[{{lowerCaseLetter}}{{upperCaseLetter}}]"
        .replace(/{{lowerCaseLetter}}/, letter)
        .replace(/{{upperCaseLetter}}/, letter.toUpperCase()), 
        'g');
        let polymer = puzzleInput.replace(regex, "")
        polymerLength = checkUnits(polymer);
        if(!shortestPolymer || polymerLength < shortestPolymer){
            shortestPolymer = polymerLength;
        }
    }
    return shortestPolymer;
}
console.log(findShortest())