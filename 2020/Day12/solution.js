const input = require("./input");

const rotate = (orientation, direction, value) => {
    const orientations = ["N", "E", "S", "W"];
    let newOrientation = orientation;
    let changeValue = (value/90);
    if (direction === "L"){
        newOrientation = (4 + orientations.indexOf(orientation) - changeValue)%4;
    } else {
        newOrientation = (4 + orientations.indexOf(orientation) + changeValue)%4;
    }
    return orientations[newOrientation];
}

const rotate2 = (direction, waypointCoordinates, boatCoordinates, angle) => {
    let newWaypointCoordinates = JSON.parse(JSON.stringify(waypointCoordinates));
    let radians;
    if (direction === "L"){
        radians = (Math.PI / 180) * -angle;
    } else {
        radians = (Math.PI / 180) * angle;
    }
    const cos = Math.cos(radians), sin = Math.sin(radians);
    newWaypointCoordinates.x += (cos * (waypointCoordinates.x - boatCoordinates.x)) + (sin * (waypointCoordinates.y - boatCoordinates.y)) + boatCoordinates.x;
    newWaypointCoordinates.y += (cos * (waypointCoordinates.y - boatCoordinates.y)) - (sin * (waypointCoordinates.x - boatCoordinates.x)) + boatCoordinates.y;
}

const move = (direction, value, coordinates) => {
    let newCoordinates = JSON.parse(JSON.stringify(coordinates));
    if (direction === "N"){
        newCoordinates.y += value;
    } else if (direction === "S"){
        newCoordinates.y -= value;
    } else if (direction === "E"){
        newCoordinates.x += value;
    } else if (direction === "W"){
        newCoordinates.x -= value;
    };
    return newCoordinates;
}

const moveToWaypoint = (waypointCoordinates, boatCoordinates, value) => {
    let newBoatCoordinates = JSON.parse(JSON.stringify(boatCoordinates));
    let newWaypointCoordinates = JSON.parse(JSON.stringify(waypointCoordinates));
    for (i = 0; i < value; i++) {
        newBoatCoordinates.x += waypointCoordinates.x - boatCoordinates.x;
        newBoatCoordinates.y += waypointCoordinates.y - boatCoordinates.y;
        newWaypointCoordinates.x +=  waypointCoordinates.x - boatCoordinates.x;
        newWaypointCoordinates.y += waypointCoordinates.y - boatCoordinates.y;
    }
    return [newWaypointCoordinates, newBoatCoordinates];
}

const readInstructions = (instructions) => {
    let boatCoordinates = {x:0,y:0};
    let waypointCoordinates = {x:10, y:1};
    let orientation = "E";
    instructions.forEach((instruction) => {
        let direction = instruction.substring(0,1);
        let value = parseInt(instruction.substring(1,instruction.length));
        if (direction.match(/[NSEW]/g)){
            waypointCoordinates = move(direction, value, waypointCoordinates);
        } else if (direction === "F"){
            [waypointCoordinates, boatCoordinates] = moveToWaypoint(waypointCoordinates, boatCoordinates, value);
        } else if (direction === "L" || direction === "R"){
            //p1 
            //orientation = rotate1(orientation, direction, value);
            //p2
            waypointCoordinates = rotate2(direction, waypointCoordinates, boatCoordinates, value);
        }
    })
    return Math.abs(boatCoordinates.x) + Math.abs(boatCoordinates.y);
}

console.log(readInstructions(input.split("\n")));


