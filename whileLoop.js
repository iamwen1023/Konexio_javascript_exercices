//01 - Comptons
console.log("ex01");
let i = 50;
while (i <= 200) {
    console.log(i);
    i = i + 2;
}
//02 - Try again
console.log("ex02");
let dice;
let count = 0;
do {
    dice = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    count++;
    console.log(dice);

}
while (dice != 6);
console.log("count : " + count);
//### 03 - Course
console.log("ex03");
let ussainBolt = 0;
let tysonGay = 0;
let randomNum1;
let randomNum2;
while (ussainBolt < 100 && tysonGay < 100) {
    randomNum1 = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    randomNum2 = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    ussainBolt = ussainBolt + randomNum1;
    tysonGay = tysonGay + randomNum2;
}
if (ussainBolt > tysonGay) {
    console.log("ussainBolt : " + ussainBolt);
} else if (ussainBolt < tysonGay) {
    console.log("tysonGay : " + tysonGay);
} else {
    console.log("Tie");
}
//### 04 - Des boites
console.log("ex04");
console.log(5);
console.log(2);
console.log(5);
console.log(-8);
//### 05 - Encore des boites
console.log("ex05");
console.log(0);
console.log(7);