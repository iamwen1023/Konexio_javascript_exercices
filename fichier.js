//01 - Alphabet
console.log("ex01");

function sortLetters(string) {
    let temp = string.split('');
    temp.sort();
    return temp.join("");
}
console.log(sortLetters("konexio"));
//## 02 - XOXO
console.log("ex02");

function countEach(string) {
    let count_x = 0;
    let count_o = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'x') {
            count_x++;
        }
        if (string[i] === 'o') {
            count_o++;
        }
    }
    if (count_x == count_o) {
        console.log("True");
    } else {
        console.log("False");
    }
}
countEach("xxxoooox");
//03 - Palindrome
console.log("ex03");

function checkPal(string) {
    for (i = 0; i < Math.floor(string.length / 2); i++) {
        if (string[i] != string[string.length - i - 1]) {
            console.log("Nope");
            return;
        }
    }
    console.log("Palindrome !");
}
checkPal("racecar");
checkPal("laptop");
//## 04 - Swap
console.log("ex04");

function swap(string) {
    let stringNew = [];
    for (i = 0; i < string.length; i++) {
        if (string.charCodeAt(i) > 64 && string.charCodeAt(i) < 91) {
            stringNew[i] = string[i].toLowerCase();
        } else if (string.charCodeAt(i) > 96 && string.charCodeAt(i) < 123) {
            stringNew[i] = string[i].toUpperCase();
        } else {
            stringNew[i] = string[i];
        }
    }
    return stringNew.join("");
}
console.log(swap("Hello World"));
//### 05 -  Functions Challenge !
console.log("ex05");
//Convert Age to Days
function calcAge(age) {
    return age * 365
}
//Area of a Triangle
function triArea(base, height) {
    return ((base * height) / 2);
}
//Convert Hours into Seconds
function howManySeconds(hours) {
    return (hours * 60 * 60);
}
//Find the Perimeter of a Rectangle
function findPerimeter(length, width) {
    return ((length + width) * 2);
}
//Basketball Points
function points(twoPointers, threePointers) {
    return (twoPointers * 2 + threePointers * 3);
}
//Bonus
console.log("Bonus");

function makeItSpongeBob(string) {
    let stringNew = [];
    let n = 0;
    for (i = 0; i < string.length; i++) {
        if (i == 0 || string[i - 1] == ' ') {
            n = 0;
        }
        if ((string.charCodeAt(i) > 64 && string.charCodeAt(i) < 91) || (string.charCodeAt(i) > 96 && string.charCodeAt(i) < 123)) {
            if (n % 2 == 0) {
                stringNew[i] = string[i].toUpperCase();
            } else {
                stringNew[i] = string[i].toLowerCase();
            }
        } else {
            stringNew[i] = string[i];
        }
        n++;
    }


    return stringNew.join("");
}
console.log(makeItSpongeBob("Javascript is easy"));
//Bonus II
console.log("Bonus II");

function sortLetters2(string) {
    let temp = string.split('');
    temp.sort(function(a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });
    return temp.join("");
}
console.log(sortLetters2("konexIo"));
//Bonus III
console.log("Bonus III");

function countEach(string) {
    let count_x = 0;
    let count_o = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'x' || string[i] === 'X') {
            count_x++;
        } else if (string[i] === 'o' || string[i] === 'O') {
            count_o++;
        } else {
            console.log("Error");
            return;
        }
    }
    if (count_x == count_o) {
        console.log("True");
    } else {
        console.log("False");
    }
}
countEach("xxxoooOx");
countEach("xxxoooAx");