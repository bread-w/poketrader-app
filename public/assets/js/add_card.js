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
