//## 01 - Object
console.log("ex01");
let cat = {
    name: "Garfield",
    age: 3,
    isCute: true
}
console.table(cat);
console.log("cat.age : " + cat.age);
if (cat.isCute == true) {
    console.log("So cute !");
}
//02 - Combine
console.log("ex02");
let cat2 = {
    name: "moumou",
    age: 10,
    isCute: false
}
let cats = [cat, cat2];
console.log(cats);
console.log("cat.age : " + cat.age);
console.log("cat.age : " + cats[0].age);
console.log("cat2.isCute : " + cat2.isCute);
console.log("cat2.isCute : " + cat2["isCute"]);
//03 - Even
console.log("ex03");

function checkIfEven(number) {
    if (number % 2 == 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}
console.log("num= 8 : ");
checkIfEven(8);
console.log("num= 7 : ");
checkIfEven(7);
//## 04 - Compare
console.log("ex04");

function compareNum(num1, num2) {
    if (num1 > num2) {
        console.log(num1 + " is bigger");
    } else if (num1 < num2) {
        console.log(num2 + " is bigger");
    } else {
        console.log("both are the same");
    }
}
let n1 = 10;
let n2 = 20;
console.log("n1 & n2 :" + n1 + ", " + n2);
compareNum(n1, n2);
n1 = 100;
n2 = -1;
console.log("n1 & n2 :" + n1 + ", " + n2);
compareNum(n1, n2);
//05 - Add Up
console.log("ex05");

function addUP(num) {
    let total = 0;
    let i = 1;
    while (i <= num) {
        total = total + i;
        i++;
    }
    return total;
}
console.log("addUP to 12 : " + addUP(12));
//## 06 - Time
console.log("ex06");

function format(num) {
    let h = 0;
    let m = 0;
    let s = 0;
    h = Math.floor(num / 3600);
    m = Math.floor((num % 3600) / 60);
    s = (num % 3600) % 60;
    console.log("heures : minutes : secondes == " + h + " : " + m + " : " + s);
}
format(3700);
format(359);
//Bonus
console.log("Bonus 1");

function generatePassword(num) {
    let arr = [];
    let randomNumber;
    if (num < 6 || num > 15) {
        return "error";
    }
    for (let i = 0; i < num; i++) {
        randomNumber = Math.floor(Math.random() * (90 - 65 + 1)) + 65;
        arr.push(String.fromCharCode(randomNumber));
    }
    return arr.join("");
}
console.log(generatePassword(10));
console.log(generatePassword(5));
//Bonus II
console.log("Bonus 2");

function launchDice(numberOfDice) {
    let totalPoint = 0;
    for (let x = 0; x < numberOfDice; x++) {
        randomNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
        totalPoint = totalPoint + randomNumber;
    }
    return totalPoint;
}
let joueur1 = {
    name: "joueur1",
    point: 0
}
let joueur2 = {
    name: "joueur2",
    point: 0
}
joueur1.point = launchDice(5);
joueur2.point = launchDice(5);
console.log("joueur1.point : " + joueur1.point + "; joueur2.point : " + joueur2.point);
if (joueur1.point > joueur2.point) {
    console.log(joueur1.name + " won!");
} else if (joueur1.point < joueur2.point) {
    console.log(joueur2.name + " won!");
} else {
    console.log("Tie");
}
//Matchstick Houses
console.log("Matchstick");

function matchHouses(step) {
    let total;
    if (step <= 0)
        return 0;
    total = 3 * step + 3 * step - (step - 1);
    return total;
}
console.log("matchHouses step=4 : " + matchHouses(4));
console.log("matchHouses step=87 : " + matchHouses(87));