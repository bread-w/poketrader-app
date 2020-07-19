const axios = require('axios');

const queryUrl = 'https://api.pokemontcg.io/v1/cards?name=';
const input = document.querySelector("#search-pokemon")
const pokemonName = document.querySelector(".pokemon-name")

function getPokemon(){
  axios.get(queryUrl + input.value)
  .then(function(response){
    console.log(response);
  })
}
// needed to work with handlebars (but currently not working)

//listener to movie button
$("#search-pokemon-btn").on("click", function (event) {
  event.preventDefault();
  console.log("I've been clicked!");
  var searchEl = document.getElementsByClassName("search-pokemon")[0].value;
  var queryURL = `${mainURL}${searchEl}`;
  searchPokemon(queryURL);
});
// call function
function searchPokemon(queryURL) {
  $.ajax({
    url: queryURL,
    method: "GET",
    success: function (response) {
      // console.log(response);
    },
    error: function (response) {
      // console.log(response);
    },
  }).then(function (response) {
    // console.log(response);
    for (var i = 0; i < 20; i++) {
      var pokeImg = response.cards[i].imageUrl;
      pokemonArray.push(pokeImg);
    }
  });
}

console.log(pokemonArray);

// var pokeObjects = [];

// needed to work with handlebars (but currently not working)
// for (var i = 0; i < pokemonArray.length; i++) {
//   pokeObjects[i] = { imageSRC: pokemonArray[i] };
// }

// var display = { pokeObjects: pokeObjects };
// res.render("add_card", display);
