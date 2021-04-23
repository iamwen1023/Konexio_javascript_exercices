console.log("ex04_bonus");

function exports_game() {
    var prompt = require("prompt");
    var properties = [{
        name: "number",
        type: 'number',
        description: "Quel est le nombre mystère ? (1 - 100)",
        warning: "error"
    }];
    prompt.start();

    function onErr(err) { // permet de gérer les erreurs
        console.log(err);
        return 1;
    }

    function play_again() {
        let mysteryNum = Math.floor(Math.random() * (100 - 1 + 1) + 1);
        let count = 8;

        function play_bonus() {
            prompt.get(properties, function(err, res) {
                if (err) {
                    return onErr(err);
                }
                if (count < 0) {
                    console.log("Gros naze");
                    prompt.get({ name: "q", description: "Voulez vous refaire une partie ? y = yes, n = no" }, function(err, res1) {
                        if (err) {
                            return onErr(err);
                        }
                        if (res1.q.toLowerCase() === 'y') {
                            play_again();
                        } else {
                            console.log("ByeBye");
                        }
                    });
                } else if (isNaN(res.number) === true || res.number < 1 || res.number > 100) {
                    count--;
                    console.log("Error! il reste " + count + " fois pour essayer!");
                    play_bonus();
                } else if (res.number < mysteryNum) {
                    count--;
                    console.log("C'est plus ! il reste " + count + " fois pour essayer!");
                    play_bonus();
                } else if (res.number > mysteryNum) {
                    count--;
                    console.log("C'est moins ! il reste " + count + " fois pour essayer!");
                    play_bonus();
                } else if (res.number === mysteryNum) {
                    console.log("Bravo !!");
                    console.log("Mystery number : " + mysteryNum);
                    prompt.get({ name: "q", description: "Voulez vous refaire une partie ? y = yes, n = no" }, function(err, res1) {
                        if (err) {
                            return onErr(err);
                        }
                        if (res1.q.toLowerCase() === 'y') {
                            play_again();
                        } else {
                            console.log("ByeBye");
                        }
                    });
                }
            });
        }
        play_bonus();
    }
    play_again();
}
module.exports = { exports_game };