const puzzleInput = require("./puzzleInput");
let frequencyList = new Set();
let duplicateFrequency;
calculateDuplicate = (currentFrequency) => {
    puzzleInput.forEach((frequency) => {
        let operator = frequency.substring(0, 1);
        let newFrequency = parseInt(frequency.substring(1, frequency.length));
        switch(operator) {
            case '+':
                currentFrequency += newFrequency;
                break;
            case '-':
                currentFrequency -= newFrequency;
                break;
        }
        if (frequencyList.has(currentFrequency)){
            if (!duplicateFrequency){
                duplicateFrequency = currentFrequency;
            } 
        } else {
            frequencyList.add(currentFrequency);
        };
    })
    if (duplicateFrequency){
        return duplicateFrequency;        
    } else {
        return calculateDuplicate(currentFrequency);
    }
};
console.log(calculateDuplicate(0))