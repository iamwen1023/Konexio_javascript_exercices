//01 - Format
console.log("ex01");

function formatDate(dateString) {
    let test = new Date(dateString);
    let year = test.getFullYear();
    let month = test.getMonth() + 1;
    let date = test.getDate();
    console.log(typeof(year));
    let newFomat = date.toString().padStart(2, '0') + "/" + month.toString().padStart(2, '0') + "/" + year;
    return newFomat;
}
console.log(formatDate("1960-8-01"));
//02 - Age
console.log("ex02");

function calculateAge(birthday) {
    let newBirthday = new Date(birthday);
    let diff = new Date() - newBirthday.getTime();
    let age = new Date(diff);
    console.log(age.getFullYear() - 1970);
}
calculateAge("1978-04-27");
//## 03 - Validator
console.log("ex03");
var prompt = require('prompt');

var schema = {
    properties: {
        username: {
            description: 'Enter your username (Must be only letters, numbers, or dashes)',
            required: true
        },
        email: {
            description: 'Enter your email',
            required: true
        },
        password: {
            //pattern: "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$",
            description: 'Enter your password (Minimum six characters, at least one letter and one number)',
            required: true
        }
    }
};
prompt.start();
//prompt.get(schema, function(err, result) {
//    let patternName = /^[a-zA-Z0-9\-]+$/;
//    let resultName = patternName.test(result.username);
//    let patternEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
//    let resultEmail = patternEmail.test(result.email);
//    let patternPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\-]{6,}$/;
//    let resultPassword = patternPassword.test(result.password);
//console.log(resultName);
//console.log(resultEmail);
//console.log(resultPassword);
//    if (resultName == true && resultEmail == true && resultPassword == true) {
//        console.log("All good !");
//    } else {
//        console.log("Error");
//    }
//})

//Bonus
console.log("Bonus");
var moment = require('moment');

function formatDate_m(dateString) {
    var day = moment(dateString, "YYYY-MM-DD").format("MM/DD/YYYY");
    return day;
}
console.log(formatDate_m("2020-12-1"));

function calculateAge_m(birthday) {
    var a = moment(birthday, "YYYY-MM-DD");
    var day = moment().diff(a, 'years');
    return day;
}
console.log(calculateAge_m("2015-4-8"));