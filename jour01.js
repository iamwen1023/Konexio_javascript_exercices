// 01 - Hello World
console.log("Hello World !");
//02 - String
var test;
test = "My name is wen";
console.log(test);
//03 - Concatenation
var name;
name = "wen";
console.log("Nice to meet you " + name);
//04 - String Length
var testLength = "I'm very long !";
console.log(testLength.length);
//05 - Replace
var food = "croissant is meh";
console.log(food.replace("meh", "so good"));
//06 - Up and Down
var basic = "This is Cool";
console.log(basic);
var basicUp = basic.toUpperCase();
console.log(basicUp);
var basicDown = basic.toLowerCase();
console.log(basicDown);
//## 07 - Split
var word = "banana";
var letters = word.split("");
console.log(letters);
//08 - Template
var age = 18;
var template = "I'm " + age + " years old";
console.log(template);
//10 - Includes
var phrase1 = "casse toi pov'con";
var phrase2 = "bisou mon chérie";
console.log(phrase1.includes("bisou"));
console.log(phrase2.includes("bisou"));
//11 - PadEnd & PadStart
var nombre1 = "11";
console.log(nombre1.padStart(4, '0'));
var nombre1 = "999";
console.log(nombre1.padStart(4, '0'));
var nombre2 = "2.2";
console.log(nombre2.padEnd(4, '0'));
var nombre2 = '10.9';
console.log(nombre2.padEnd(5, '0'));
//12 - Cryptographie
var phrase = "@g3v0@l03d0oil8j0ts31c0sim@0s3l0t8l@S";
phrase = phrase.replace(/@/g, "a");
phrase = phrase.replace(/3/g, "e");
phrase = phrase.replace(/8/g, "u");
phrase = phrase.replace(/0/g, " ");
phrase = phrase.split("");
console.log(phrase.reverse());