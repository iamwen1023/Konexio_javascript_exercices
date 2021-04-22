//import multiply from './jour05.js';

function multiply_1(num) {
    if (num == undefined || isNaN(num) == true) {
        console.log("Error");
        return;
    }
    for (let i = 1; i < 11; i++) {
        console.log(i + " x " + num + " = " + i * parseInt(num));
    }
}

function addition(num) {
    if (num == undefined || isNaN(num) == true) {
        console.log("Error");
        return;
    }
    for (let i = 1; i < 11; i++) {
        console.log(i + " + " + num + " = " + i + parseInt(num));
    }
}
module.exports = { addition, multiply_1 };