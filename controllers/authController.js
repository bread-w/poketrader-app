const express = require("express");
const router = express.Router();
const db = require("../models");
var passport = require("../config/passport.js");

router.post("/",  passport.authenticate("local"),  function(req, res) {
  db.User.findOne({
    where: {
      email: req.body.email,
    }
  })
  .then(function(response){
     let userName = {
      userInfo: response.dataValues,
    }; 
    console.log(response.dataValues);
    res.render("collection", userName);
  })

});


module.exports = router;
