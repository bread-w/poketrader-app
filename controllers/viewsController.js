const express = require("express");
const router = express.Router();
const axios = require('axios');

router.get("/", (req, res) => {
  res.render("login");
});

router.get("/add-card", (req, res,) => {
  res.render("add_card");
});

router.get("/add-card", (req, res,) => {
  res.render("add_card");
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
