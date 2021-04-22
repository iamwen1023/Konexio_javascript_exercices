//console.log(process.argv);
//let args = process.argv.slice(2);
//console.log(args);
//var a = require("./external.js");
//console.log(a);
var prompt = require("prompt");
var properties = [{
        name: "username",
        validator: /^[a-zA-Z\s\-]+$/, // Regex de validation : lettres maj / min, espaces et tirets
        warning: "Le username ne doit contenir que des lettres, espaces et tirets"
    },
    {
        name: "password",
        hidden: true // n'affichera pas la saisie de l'utilisateur à l'écran
    }
];

prompt.start(); // démarre le prompt

var properties = [{
        name: "username",
        validator: /^[a-zA-Z\s\-]+$/, // Regex de validation : lettres maj / min, espaces et tirets
        description: "Le username ne doit contenir que des lettres, espaces et tirets",
        default: "motdepassenul"
    },
    {
        name: "password",
        hidden: true // n'affichera pas la saisie de l'utilisateur à l'écran
    }
];

prompt.start(); // démarre le prompt

function onErr(err) { // permet de gérer les erreurs
    console.log(err);
    return 1;
}

prompt.get(properties, function(err, res) {
    if (err) {
        return onErr(err);
    }

    console.log("Données reçues :");
    console.log("=> Username : " + res.username);
    console.log("=> Password : " + res.password);
});