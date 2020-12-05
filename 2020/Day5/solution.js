const input = require("./input");

const seats = input.split("\n");

const binarySort = (min, max, instruction, index) => {
    let character = instruction[index];
    if (index === instruction.length){
        if (character === "F" || character === "L"){
            return min;
        } else {
            return max;
        }
    } else {
        if (character === "F" || character === "L"){
            max -= Math.round((max - min) / 2);
        } else {
            min += Math.round((max - min) / 2);
        }
        index ++;
    }   
    return binarySort(min, max, instruction, index);
}

let seatIDs = seats.map((seat) => {
    let fb = seat.substring(0,7);
    let lr = seat.substring(7,10); 
    return (binarySort(0, 127, fb, 0) * 8) + binarySort(0, 7, lr, 0);
})

//part 1
console.log(seatIDs.reduce((seatID, value) => {
    return Math.max(seatID, value)
}))

//part 2
seatIDs.forEach((seatID) => {
    if (seatIDs.includes(seatID + 2) && !seatIDs.includes(seatID + 1)){
        console.log(seatID + 1);
    }
})