const input = require("./input");

const getMin = (entry) => {
    return entry.slice(0, entry.search("-"))
}

const getMax = (entry) => {
    return entry.slice(entry.search("-") + 1, entry.search(" "))
}

const getLetter = (entry) => {
    return entry.slice(entry.search(" ") + 1, entry.search(":"))
}

const getPassword = (entry) => {
    return entry.slice(entry.search(": ") + 2, entry.length)
}

const getOccurences = (password, letter) => {
    let regex = new RegExp(`[^${letter}]`, "g");
    return password.replace(regex,"").length;
}


const part1 = () => {
    let min, max, letter, password, count=0;

    for (i = 0; i < input.length; i++){
        min = getMin(input[i]);
        max = getMax(input[i]);
        letter = getLetter(input[i]);
        password = getPassword(input[i]);
        occurences = getOccurences(password, letter);
        if (occurences <= max && occurences >= min){
            count++;
        }
    }
    console.log(count);
}

const part2 = () => {
    let pos1, pos2, letter, password, count=0;

    for (i = 0; i < input.length; i++){
        pos1 = getMin(input[i]) - 1;
        pos2 = getMax(input[i]) - 1;
        letter = getLetter(input[i]);
        password = getPassword(input[i]).split("").join("");
        if ((password[pos1] === letter || password[pos2] === letter) && password[pos1] !== password[pos2]){
            count++; 
        }
    }
    console.log(count);
}

//part1()
part2()
