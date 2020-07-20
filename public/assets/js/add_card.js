$(document).ready(function () {

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

// Not working yet. Trying to pull the the value of the ID from the card chosen
$(document).on("click", ".pokemonCards", function (event) {
  event.preventDefault();
  var pokemonValue = $(this).attr("id");
  var cardData = {
    card_code: pokemonValue,
  };
  // const pokemonValue = document.getElementById(this).value;
  console.log(pokemonValue);
  console.log(cardData);
  makeNewCard(cardData.card_code);
  pokemonValue.val("");
})

function makeNewCard(card_code) {
  $.post("/cards", {
    card_code: card_code,
  })
    .then(function (data) {
      console.log(data)
      // window.location.replace("/add-card");
    })
    // .catch(function (err) {
    //   console.log(err);
    //   alert("Oops! There's been an error adding your card. Please try again.");
    // });
};

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
});
