var mainURL = "https://api.pokemontcg.io/v1/cards?name=";

var pokemonArray = [];

//listener to movie button
$("#search-pokemon").on("click", function (event) {
  // console.log("I've been clicked!");
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
