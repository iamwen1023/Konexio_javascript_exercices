//01 - File System
console.log("ex01");
let fs = require("fs");
fs.readFile("jour07.txt", function(err, data) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data.toString());
});
//## 02 - Map Double
console.log("ex02");
let array = [1, 2, 3, 4, 5];
let double = array.map((n) => n * 2);
console.log(double);
//03 - Map Names
console.log("ex03");
let longNames = [{
        firstName: "Jane",
        lastName: "Doe"
    },
    {
        firstName: "John",
        lastName: "Smith"
    }
]
let shortNames = longNames.map(function(n) {
    let person = {
        name: n.firstName + " " + n.lastName
    }
    return person;
})
console.log(shortNames);
//04 - Filter Numbers
console.log("ex04");
let array1 = [1, "toto", 34, "javascript", 8];
let numbers = array1.filter((n) =>
    !isNaN(n));
console.log(numbers);
//05 - Filter Even
console.log("ex05");
let array2 = [1, 2, 3, 4, 5, 6, 7, 8];
let even = array2.filter((n) => !(n % 2));
console.log(even);
//## 06 - Cakes
console.log("ex06");
let cakes = [{
        name: "cake",
        flavor: "vanilla",
        status: "available"
    },
    {
        name: "brownie",
        flavor: "chocolate",
        status: "available"
    },
    {
        name: "pie",
        flavor: "strawberry",
        status: "available"
    },
    {
        name: "muffin",
        flavor: "pistachio",
        status: "available"
    },
    {
        name: "donut",
        flavor: "chocolate",
        status: "available"
    },
];
let res = cakes.filter((n) => n.flavor == "chocolate");
res.forEach((n) => n.status = "sold out !");
console.log(res);
//Bonus
console.log("Bonus");
var prompt = require('prompt');
var randomWords = require('random-words');
let arr = randomWords().split("");
let arrResult = arr.map(e => "_");
console.log(arrResult.join(" "));
let count = 10;
let i;
prompt.start();

function onErr(err) { // permet de gérer les erreurs
    console.log(err);
    return;
}

function playPerdu() {
    prompt.get({ description: 'Please enter a letter', name: 'w' }, function(err, result) {
        if (err) {
            return onErr(err);
        }
        if (!arr.includes(result.w.toLowerCase())) {
            count--;
        }
        for (i = 0; i < arr.length; i++) {
            if (arr[i] == result.w.toLowerCase()) {
                arrResult[i] = arr[i];
            }
        }
        console.log(arrResult.join(" "));
        if (arrResult.join("") === arr.join("") && count > 0) {
            console.log("You won!");
        } else if (arr.includes(result.w.toLowerCase()) && count > 0) {
            playPerdu();
        } else if (!arr.includes(result.w.toLowerCase()) && count > 0) {
            console.log("oups... plus que " + count + " chances !");
            playPerdu();
        } else {
            console.log("You lose !");
        }
    });
}
playPerdu();