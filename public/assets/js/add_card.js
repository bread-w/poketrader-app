const mainUrl = 'https://api.pokemontcg.io/v1/cards?name=';
var searchEl = document.getElementsByClassName("search-pokemon")[0].value;
const pokemonName = document.querySelector(".pokemon-name")



//listener to movie button
 $("#search-pokemon-btn").on("click", function (event) {
  event.preventDefault();
  var searchEl = document.getElementsByClassName("search-pokemon")[0].value;

  console.log("I've been clicked!");

  searchPokemon(searchEl);
}); 

$(document).on("click", ".pokemonCards", function (event) {
  event.preventDefault();
  var pokemonValue = $(this).attr("id");
  console.log(pokemonValue);
})

// call function
 function searchPokemon(value){
   $.get("add-card",{
     name: value,
   })
   .then(function(response){
     
     console.log(response);
     window.location.replace("/add-card/" + value);
   })
 };
