//## 01 - Countries
console.log("ex01");
var request = require("request");
let countriesNames = [];

function getCountries() {

    request.get("https://restcountries.eu/rest/v2/all", function(err, res, body) {
        if (err) {
            console.log(err);
            return;
        }
        if (res.statusCode !== 200 && res.statusCode !== 201 && res.statusCode !== 204) {
            console.log("Error of link");
            return;
        }
        var result = JSON.parse(body);
        result.forEach(element => {
            countriesNames.push(element.name);
        });
        var list = countriesNames.join(" - ");
        console.log(list);
    });
};
getCountries();
//## 02 - Chuck Norris
console.log("ex02");

function getFact() {
    request.get("https://api.chucknorris.io/jokes/random", function(err, res, body) {
        if (err) {
            console.log(err);
            return;
        }
        if (res.statusCode !== 200 && res.statusCode !== 201 && res.statusCode !== 204) {
            console.log("Error of link");
            return;
        }
        var result = JSON.parse(body);
        console.log(result.value);
    });
}
getFact();
getFact();
//## 03 - Pokemon
console.log("ex03");

function catchPokemon(num) {

    let link = "https://pokeapi.co/api/v2/pokemon-form/" + num + "/";
    request.get(link, function(err, res, body) {
        if (err) {
            console.log(err);
            return;
        }
        if (res.statusCode !== 200 && res.statusCode !== 201 && res.statusCode !== 204) {
            console.log("Error of link");
            return;
        }
        var result = JSON.parse(body);
        console.log("id : ", num);
        console.log("name :", result.name);
    });
}
catchPokemon(1);
catchPokemon(315);
//Bonus : Movie DB
console.log("bonus Movie");
var prompt = require('prompt');
prompt.start();

function searchMovie() {
    prompt.get({
        description: 'Which film do you search? (enter the name of film)',
        name: "movie"
    }, function(err, result) {
        if (err) {
            console.log(err);
        }
        var link = "https://api.themoviedb.org/3/search/movie?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&query=" + result.movie + "&page=1";
        request.get(link, function(err, res, body) {
            if (err) {
                console.log(err);
                return;
            }
            if (res.statusCode !== 200 && res.statusCode !== 201 && res.statusCode !== 204) {
                console.log("Error of link");
                return;
            }
            var result = JSON.parse(body);
            result.results.forEach(element => {
                console.log("date de sortie : ", element.release_date);
                console.log("titre du film complet : ", element.title);
                console.log("synopsis : ", element.overview);
                console.log("id : ", element.id);
                console.log("vote_count : ", element.vote_count);
                console.log("vote_average : ", element.vote_average);
            });
        });
    });
}
searchMovie();
//Bonus - Black Jack
console.log("Bonus - Black Jack");

function playBlackJack() {
    let numBanque = Math.floor(Math.random() * (21 - 16 + 1) + 16);
    let numplayer = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    let total = numplayer
    console.log("Your card is  :", numplayer, "Total : " + total);

    function playerDecision() {
        prompt.get({
            description: 'Drwa a new card or pass? entre "d or p"',
            name: "decision"
        }, function(err, result) {
            if (err) {
                console.log(err);
                return;
            }
            if (result.decision.toLowerCase() === 'd') {
                numplayer = Math.floor(Math.random() * (10 - 1 + 1) + 1);
                total = total + numplayer;
                console.log("Your card is  :", numplayer, "Total : " + total);
                if (total > 21) {
                    console.log("Bomp! You lose!");
                    return;
                } else {
                    playerDecision();
                }
            } else if (result.decision.toLowerCase() === 'p') {
                console.log("your score : " + total);
                console.log("bank score : " + numBanque);
                if (total === 21) {
                    console.log("Black Jack! You win!");
                } else if (numBanque >= total) {
                    console.log("Bank wins! You lose");
                } else {
                    console.log("You wins! Bank loses");
                }
            } else {
                console.log("Input error, Please retry again!");
                playerDecision();
            }
        });
    }
    playerDecision();
}
playBlackJack();