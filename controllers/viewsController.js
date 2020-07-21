const express = require("express");
const router = express.Router();
const axios = require("axios");
var isAuthenticated = require("../config/middleware/isAuthenticated");
const db = require("../models");

router.get("/", (req, res) => {
  if (req.user) {
    res.redirect("/collection");
    return;
  }
  res.render("login");
});

router.get("/login", (req, res) => {});

router.get("/add-card", (req, res) => {
  res.render("add_card");
});

router.get("/add-card/:name", (req, res) => {
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

router.get("/api/usercards", function (req, res) {
  db.UserCard.findAll({}).then(function(response){
    // let cardsObject = {
    //   bitch: response,
    // };
    console.log(response);
    // console.log(response);
    // res.render("collection", cardsObject);
  }).catch((err) => {
    console.log(err);
    res.status(500).json({
      error: true,
      data: null,
      message: "error",
    });
  });
});



router.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});


router.get("/collection/", (req, res) => {
  console.log(req.user);
  db.UserCard.findAll({
    where: {
      user_id: req.user.id,
    },
  }).then((cards) => {
    console.log(cards);
    res.render("collection", { userInfo: req.user, pokemon: cards });
  });
});

// router.get("/collection/", (req, res) => {
//   console.log(req.user);
//   res.render("collection", { userInfo: req.user });
// });

router.get("/sign-up", (req, res) => {
  res.render("sign_up");
});

// router.get("/update", (req, res) => {
//   res.render("update");
// });

router.get("/update/", (req, res) => {
  console.log(req.user);
  db.UserCard.findAll({
    where: {
      user_id: req.user.id,
    },
  }).then((cards) => {
    console.log(cards);
    res.render("update", { userInfo: req.user, pokemon: cards });
  });
});

// router.get("/api/usercards", function (req, res) {
//   var query = {};
//   if (req.query.user_id) {
//     query.UserId = req.query.user_id;
//   }
//   db.UserCard.findAll({
//     where: query,
//     include: [db.User],
//   }).then(function (dbPost) {
//     res.json(dbPost);
//   });
// });

// db.UserCard.findAll({
//   where: {
//     user_id: 3,
//   },
// }).then(function(response) {
//   console.log(response);
// });



// const something = db.UserCard.findAll({ include: db.User });
// console.log(JSON.stringify(something, null, 2));

module.exports = router;
