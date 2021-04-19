//01 - Number
let integer = 102;
let float = 13.9;
console.log("integer : " + integer);
console.log("float : " + float);
//02 - Convert
let basic = 34;
let stringified = basic.toString();
console.log("stringified : " + stringified);
//03 - Round
let num = 1.3;
let rounded = Math.round(num);
console.log("rounded : " + rounded);
//04 - Arithmétique
let test = 12;
let bis = 5;
console.log(test + bis);
console.log(test - bis);
console.log(test * bis);
console.log(test / bis);
console.log(test ** bis);
console.log(test % bis);
//05 - Comparaison
test = 143;
bis = 219;
if (test <= bis) {
    console.log(false);
} else {
    console.log(true);
}
//06 - Condition
let limit = 50;
let score = 64;
if (score >= limit) {
    console.log("Ok good !");
} else {
    console.log("Oh nooo...");
}
score = 3;
if (score >= limit) {
    console.log("Ok good !");
} else {
    console.log("Oh nooo...");
}
//07 - Condition II
let password = "azerty";
if (password.length > 5) {
    console.log("The password is secure");
} else {
    console.log("The password is not secure");
}
//08 - Condition III
if (score >= limit && password.length > 5) {
    console.log("Everything is good");
} else if (score >= limit || password.length > 5) {
    console.log("Something is good");
} else {
    console.log("Nothing is good");
}
//Bonus 
let random = Math.floor(Math.random() * (6 - 1 + 1) + 1);
if (random == 6) {
    console.log("Yes I win!");
} else {
    console.log("So close...");
}
console.log("random :" + random);
//Bonus II
let month = "January";
switch (month) {
    case "January":
    case "February":
    case "March":
        console.log("Winter");
        break;
    case "April":
    case "May":
    case "June":
        console.log("Spring");
        break;
    case "July":
    case "August":
    case "September":
        console.log("Summer");
        break;
    case "October":
    case "November":
    case "December":
        console.log("Autumn");
        break;
}
month = "May";

//Bonus III
let roundedNumber = 3.6;
if (roundedNumber >= 0) {
    if (roundedNumber % 1 >= 0.5) {
        console.log(Math.ceil(roundedNumber));
    } else {
        console.log(Math.floor(roundedNumber));
    }
} else {
    if ((roundedNumber * (-1)) % 1 >= 0.5) {
        console.log(Math.floor(roundedNumber));
    } else {
        console.log(Math.ceil(roundedNumber));
    }
}
console.log("Math.round() : " + Math.round(roundedNumber));
let roundedNumberString = roundedNumber.toString();
let positionPoint = roundedNumberString.search(/[.]/);
let partieDecima = roundedNumberString.substring((positionPoint + 1), (positionPoint + 2));
let fristDigit = roundedNumberString.substring((positionPoint - 1), (positionPoint));
let allDigit = roundedNumberString.substring(0, positionPoint);
console.log("toString : ");
if (partieDecima >= 5) {
    if (allDigit.length >= 2) {
        console.log(roundedNumberString.substring(0, positionPoint - 1) + String.fromCharCode((fristDigit.charCodeAt(0) + 1)));
    } else {
        console.log(String.fromCharCode((fristDigit.charCodeAt(0) + 1)));
    }
} else {
    console.log(roundedNumberString.substring(0, positionPoint));
}


console.log("Math.round() : " + Math.round(roundedNumber));