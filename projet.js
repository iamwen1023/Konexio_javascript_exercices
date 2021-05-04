var prompt = require('prompt');

var grid = [
    ["N", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];
var rover = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: [0, 0]
}

function turnLeft(obj) {
    obj.direction = 'W';
    console.log("Direction : " + obj.direction);
    return obj;
}

function turnRight(obj) {
    obj.direction = 'E';
    console.log("Direction : " + obj.direction);
    return obj;
}

function turnUp(obj) {
    obj.direction = 'N';
    console.log("Direction : " + obj.direction);
    return obj;
}

function turnDown(obj) {
    obj.direction = 'S';
    console.log("Direction : " + obj.direction);
    return obj;
}

function moveForward(obj) {
    console.log("travelLog : ", obj.travelLog);
    grid[obj.y][obj.x] = " ";
    if (obj.direction === 'E') {
        obj.x++;
    } else if (obj.direction === 'W') {
        obj.x--;
    } else if (obj.direction === 'N') {
        obj.y--;
    } else if (obj.direction === 'S') {
        obj.y++;
    } else {
        console.log("Error");
    }
    console.log(obj);
    obj.travelLog = [obj.x, obj.y];
    grid[obj.y][obj.x] = obj.direction;
    console.table(grid);
    //grid.forEach(Element => console.log(element));
    return obj;
}

prompt.start();

function onErr(err) { // permet de gérer les erreurs
    console.log(err);
    return;
}

function moveTest() {
    prompt.get({ name: "direct", description: "Enter a direction (N, E, W, S)" }, function(err, result) {
        if (err) {
            return onErr(err);
        };
        if (result.direct.toUpperCase() === 'W' && rover.x > 0) {
            turnLeft(rover);
        } else if (result.direct.toUpperCase() === 'E' && rover.x < 9) {
            turnRight(rover);
        } else if (result.direct.toUpperCase() === 'N' && rover.y > 0) {
            turnUp(rover);
        } else if (result.direct.toUpperCase() === 'S' && rover.y < 9) {
            turnDown(rover);
        } else {
            console.log("input Error");
            moveTest();
            return;
        }
        moveForward(rover);
        moveTest();
    });
}
moveTest();