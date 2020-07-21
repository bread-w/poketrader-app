const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

router.delete("/api/usercards/:id", function (req, res) {
  // We just have to specify which todo we want to destroy with "where"
  db.UserCard.destroy({
    where: {
      id: req.params.id,
    },
  }).then(function (response) {
    res.json(response);
  });
});

module.exports = router;
