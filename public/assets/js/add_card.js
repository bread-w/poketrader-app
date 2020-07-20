$(document).ready(function () {
  const mainUrl = "https://api.pokemontcg.io/v1/cards?name=";
  var searchEl = document.getElementsByClassName("search-pokemon")[0].value;
  var pokeInput = $("button.pokemonCards");

  //listener to movie button
  $("#search-pokemon-btn").on("click", function (event) {
    event.preventDefault();
    var searchEl = document.getElementsByClassName("search-pokemon")[0].value;

    console.log("I've been clicked!");

    searchPokemon(searchEl);
  });

  pokeInput.on("click", function (event) {
    var pokemonValue = $(this).attr("id");

    var cardData = {
      card_code: pokemonValue,
    };
    console.log(pokemonValue);
    console.log(cardData);
    makeNewCard(cardData.card_code);
  });

  function makeNewCard(pokemonValue) {
    $.post("/cards", {
      card_code: pokemonValue,
    }).then(function (data) {
      console.log(data);
      window.location.replace("/add-card");
    });
  }

  // call function
  function searchPokemon(value) {
    $.get("add-card", {
      name: value,
    }).then(function (response) {
      console.log(response);
      window.location.replace("/add-card/" + value);
    });
  }
});
