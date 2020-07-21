const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

router.delete("/api/usercards/:id", function (req, res) {
  db.UserCard.destroy({
    where: {
      id: req.params.id,
    },
  }).then(function (response) {
    res.json(response);
  });
});
router.put("/api/userscards/:id", function (req, res) {
  db.UserCard.update({
    where: {
      id: req.params.id,
    },
  }).then(function (response) {
    res.json({
      data: response,
    });
  }) .catch((err) => {
    console.log(err);
    res.status(500).json({
      error: true,
      data: null,
      message: "error",
    });
  });
});
module.exports = router;
