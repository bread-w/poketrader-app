const express = require("express");
const router = express.Router();
const axios = require('axios');

router.get("/", (req, res) => {
  res.render("login");
});

router.get("/add-card", (req, res,) => {
  res.render("add_card");
});

router.get("/add-card/:name", (req, res,) => {
  axios.get('https://api.pokemontcg.io/v1/cards?name=' + req.params.name)
  .then(function(response){
    let pokeObject = {
      pokemon: response.data.cards,
    };
     console.log(pokeObject) 
    res.render("add_card", pokeObject);
  });
});



router.get("/collection", (req, res) => {
  res.render("collection");
});

router.get("/sign-up", (req, res) => {
  res.render("sign_up");
});

router.get("/update", (req, res) => {
  res.render("update");
});

module.exports = router;
