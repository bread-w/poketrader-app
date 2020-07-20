const express = require("express");
const router = express.Router();
const axios = require("axios");
var isAuthenticated = require("../config/middleware/isAuthenticated");

router.get("/", (req, res) => {
  if (req.user) {
    res.redirect("/collection");
  }
  res.render("login");
});

router.get("/login", (req, res) => {});

router.get("/add_card", (req, res) => {
  res.render("add_card");
});

router.get("/add_card/:name", (req, res) => {
  axios
    .get("https://api.pokemontcg.io/v1/cards?name=" + req.params.name)
    .then(function (response) {
      let pokeObject = {
        pokemon: response.data.cards,
      };
      console.log(pokeObject);
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
