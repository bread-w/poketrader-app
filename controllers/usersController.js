const express = require("express");
const router = express.Router();
const db = require("../models");

// /api/users/
router.post("/", (req, res) => {
  db.User.create(req.body)
    .then((result) => {
      res.json({
        error: false,
        data: result,
        message: "Successfully created new user",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to create new user.",
      });
    });
});

// /api/users/:id
router.put("/:id", (req, res) => {
  res.json({
    message: "Put route",
  });
});

// /api/users/:id
router.delete("/:id", (req, res) => {
  res.json({
    message: "Delete route",
  });
});

module.exports = router;
