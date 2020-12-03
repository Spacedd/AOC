const input = require("./input");

let map = [];
let line = [];

input.split("").forEach((character, i) => {
    if (character === "\n"){
        map.push(line);
        line = [];
    } else {
        line.push(character);
    }
}); 

const traversing = (pos, move, trees) => {
    let newPos = {x:(pos.x + move.x), y:(pos.y + move.y)};
    // map console.log(prettyMap(map));
    if (newPos.y > map.length - 1){
        return trees;
    } else {
        if (newPos.x > map[0].length - 1){
            newPos.x -= map[0].length;
        }
        if (map[newPos.y][newPos.x] === "#"){
            trees ++;
            //map[newPos.y][newPos.x] = "X";
        } else { 
            //map[newPos.y][newPos.x] = "O";
        }
    return traversing(newPos, move, trees);
    }
}

const prettyMap = (map) => {
    let string = ``
    for (y = 0; y < map.length; y++){
        for (x = 0; x < map[0].length; x++){
            string += map[y][x];
        }
        string += `\n`;
    }
    return string;
}

const paths = (testX, testY) => {
    const move = {x:testX, y:testY};
    let pos = {x:0, y:0};
    return traversing(pos, move, 0);
}

//part1
console.log(`Part 1 : ${paths(3,1)}`);

//part2
console.log(`Part 2 : ${paths(1,1) * paths(3,1) * paths(5,1) * paths(7,1) * paths(1,2)}`);



