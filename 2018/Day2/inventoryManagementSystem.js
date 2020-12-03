const puzzleInput = require("./puzzleInput");

//const puzzleInput = [
//     "abcdef",
//     "bababc",
//     "abbcde",
//     "abcccd",
//     "aabcdd",
//     "abcdee",
//     "ababab"
// ];

checkId = (id, count) => {
    let matches = false;
    id.split("").forEach((firstChar, i) => {
        let charCount = 1;
        id.split("").forEach((secondChar, j) => {
            if(firstChar === secondChar && i !== j){
                charCount++;
            }
        })
        if(charCount === count){
            matches = true;
        }
    })
    return matches
}

scanAllIds = () => {
    let noOfTwice = 0, noOfThrice = 0;
    puzzleInput.forEach((id) => {
        if(checkId(id, 2)){
            noOfTwice++;
        }
        if(checkId(id, 3)){
            noOfThrice++;
        }
    })
    return (noOfTwice * noOfThrice)
}


scanAllIds2 = () => {
    let commonString;
    for (let i = 0; i < puzzleInput.length; i++) {
        for (let j = 0; j < puzzleInput.length; j++) {
            let matchingChars = 0, temp;
            puzzleInput[i].split("").forEach((character, k) => {
                if (puzzleInput[j][k] === character && i !==j) {
                    matchingChars ++;
                } else {
                    temp = k;
                }
            })
            if (matchingChars === puzzleInput[i].length - 1) {
                commonString = puzzleInput[i].slice(0, temp) + puzzleInput[i].slice(temp + 1);
            }
        }
    }
    return commonString;
}
//part 1
console.log(scanAllIds());

//part 2
console.log(scanAllIds2());