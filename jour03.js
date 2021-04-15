//01 - Array
console.log("ex01");
let fruits = ["mango", "lemon", "blueberry"];
console.log(fruits);
console.table(fruits);
// 02 - Access
console.log("ex02");
let ingredients = ["eggs", "milk", "butter"];
console.log(ingredients[1]);
console.log(ingredients.indexOf("butter"));
//03 - Add and Remove
console.log("ex03");
let objects = ["pen", "book", "lamp"];
console.log("original : " + objects);
objects.unshift("chair");
console.log("unshift : " + objects);
objects.pop();
console.log("pop : " + objects);
objects.push("laptop");
console.log("push : " + objects);
objects.shift();
console.log("shift : " + objects);
//04 - Order
console.log("ex04");
let numbers = [4, 10, 8, 12, 6];
console.log("original : " + numbers);
console.log("reverse : " + numbers.reverse());
console.log("sort : " + numbers.sort((a, b) => a - b));
//05 - Boucle
console.log("ex05");
let total = 0;
let limit = 10;
let i = 1;
while (i <= limit) {
    total = total + i;
    i++;
}
console.log("total : " + total);
//06 - Reverse
console.log("ex06");
let sentence = "Hello Konexio !";
let newSentence = '';
let s = sentence.length - 1;
console.log(s);
while (s >= 0) {
    newSentence = newSentence + sentence[s];
    s--
}
console.log(newSentence);
//Bonus
console.log("Bonus");
for (let b1 = 1; b1 <= 50; b1++) {
    if (b1 % 3 == 0 && b1 % 5 == 0) {
        console.log("fizzbuzz");
    } else if (b1 % 3 == 0) {
        console.log("fizz");
    } else if (b1 % 5 == 0) {
        console.log("buzz");
    } else if (b1 % 7 == 0) {
        console.log("");
    } else {
        console.log(b1);
    }
}
//Bonus II
console.log("Bonus II");
b1 = 1
while (b1 <= 50) {
    if (b1 % 3 == 0 && b1 % 7 == 0) {
        console.log("fizzbuzz");
    } else if (b1 % 3 == 0) {
        console.log("fizz");
    } else if (b1 % 5 == 0) {
        console.log("buzz");
    } else if (b1 % 7 == 0) {
        console.log("");
    } else {
        console.log(b1);
    }
    b1++;
}
//Bonus III
console.log("Bonus III");
let promo = ["Aneta", "Anna", "Fadela", "Fanny", "Jules", "Malika", "Sara", "Lucie", "Ophelie", "Sarah"];
let randomNumber = Math.floor(Math.random() * (10 - 0) + 0);
console.log("randomNumber : " + randomNumber);
console.log("Name: " + promo[randomNumber]);
//Bonus IV
console.log("Bonus IV");
let n = 0;
let arry = [];
while (n < 20) {
    randomNumber = Math.floor(Math.random() * (100 - 0) + 0);
    arry.push(randomNumber);
    n++;
}
console.log(arry);
n = 0;
let maxNumber = 0;
while (n < arry.length) {
    if (maxNumber < arry[n]) {
        maxNumber = arry[n];
    }
    n++;
}
console.log("Max : " + maxNumber);