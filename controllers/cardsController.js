const express = require("express");
const router = express.Router();
const db = require("../models");
const { default: Axios } = require("axios");
// const axios = require("axios");

// async () => {
//   console.log(
//     await axios({
//       url: "https://api.pokemontcg.io/v1/cards?name=pikachu",
//     })
//   );
// };

// This post creates new card inside users collection.

router.post("/", (req, res) => {
  db.Card.create(req.params.card_code)
    .then((result) => {
      res.json({
        error: false,
        data: result,
        message: "Successfully created new card",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to create new card.",
      });
    });
});

// /api/cards/:id
router.put("/:id", (req, res) => {
  res.json({
    message: "Put route",
  });
});

// /api/cards/:id
router.delete("/:id", (req, res) => {
  res.json({
    message: "Delete route",
  });
});

module.exports = router;
