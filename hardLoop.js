//01 - Sum
console.log("ex01");
let numbers = [];
let total = 0;
for (let i = 0; i < 50; i++) {
    numbers[i] = Math.floor(Math.random() * (100 - 0 + 1));
}
for (i = 0; i < 50; i++) {
    total = total + numbers[i];
}
console.log("total : " + total);
//02 - Max
console.log("ex02");
let maxNum = 50;
for (let i = 0; i < 50; i++) {
    numbers[i] = Math.floor(Math.random() * (200 - 50 + 1) + 50);
}
for (i = 0; i < 50; i++) {
    if (numbers[i] > maxNum) {
        maxNum = numbers[i];
    }
}
console.log("Max : " + maxNum);
//03 - Unique
console.log("ex03");
for (let i = 0; i < 50; i++) {
    numbers[i] = Math.floor(Math.random() * (200 - 50 + 1) + 50);
}
i = 0;
while (numbers[i] < 75 || numbers[i] > 100) {
    i++;
}
console.log("num = " + numbers[i] + ", nth num : " + (i + 1));
//04 - Nested Loop
console.log("ex04");
let tab = [];
let words = ["hello", "goodbye", "yes", "no", "stop", "go go go"];
let count = 0;
for (i = 0; i < 6; i++) {
    for (let y = 0; y < (words[i].length); y++) {
        tab = tab + words[i][y];
        if (words[i][y] == 'o') {
            count++;
        }
    }
}
console.log("count  : " + count);