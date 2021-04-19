//01 - Somme des carrés
console.log("ex01");
let i = 5;
let total = 0;
while (i <= 10) {
    total = total + (i * i);
    i++;
}
console.log("total : " + total);
//02 - Comptons
console.log("ex02");
let number = 0;
for (i = 105; i <= 1000; i = i + 7) {
    if (i % 7 == 0) {
        number++;
    }
}
console.log("result : " + number);
//03 - Chanceux
console.log("ex03");
total = 0;
randomNum = 0;
for (i = 0; i < 20; i++) {
    randomNum = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    if (randomNum >= 5) {
        total = total + randomNum;
    }
    console.log("Random Num : " + randomNum);
}
console.log("Total : " + total);
// 04 - Des boites
console.log("ex04");
console.log(10);
console.log(12);
console.log(7);
console.log(6);
console.log(14);
//### 05 - Des setiob
console.log("ex05");
console.log(12);
console.log(12 + 9);
console.log(12 + 6);
console.log(12 + 3);
console.log(0);
//06 - Encore des boites
console.log("ex06");
console.log(0);
console.log(3);
console.log(-1);
console.log(2);
console.log("box 1 : " + -2);
console.log("box 2 : " + 5);
console.log("i : " + -4);