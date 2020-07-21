const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/", (req, res) => {
  const cardPayload = {
    card_code: req.body.card_code,
    card_img: req.body.card_img,
  };
  db.Card.create(cardPayload)
    .then((cardResult) => {
      const userCardPayload = {
        user_id: req.user.id,
        card_id: req.body.card_code,
        card_img: req.body.card_img,
      };
      return db.UserCard.create(userCardPayload).then((userCardResult) => {
        console.log(userCardResult);
        res.json({
          error: false,
          data: userCardResult,
          message: "Successfully created new card",
        });
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

router.put("/:id", (req, res) => {
  res.json({
    message: "Put route",
  });
});

router.delete("/:id", (req, res) => {
  res.json({
    message: "Delete route",
  });
});

module.exports = router;
