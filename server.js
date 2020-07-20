/**
 * REQUIRE NPM PACKAGES
 * REQUIRE EXTERNAL FILES
 */
const express = require("express");
const axios = require("axios");
const session = require("express-session");
const exphbs = require("express-handlebars");
const passport = require("./config/passport");

/**
 * DEFINE VARIABLES
 */
const PORT = process.env.PORT || 8080;
const app = express();
const db = require("./models");

/**
 * MIDDLEWARE
 */
// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Handlebars setup
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
  );
  app.use(passport.initialize());
  app.use(passport.session());
  
  /**
   * VIEW ROUTES
   * API ROUTES
   */
  // Serve static content for the app from the "public" directory in the application directory.
  app.use(express.static("public"));
  
  // Routes
  const ViewsController = require("./controllers/viewsController.js");
  const APIController = require("./controllers/apiController");
  const UsersController = require("./controllers/usersController");
  const CardsController = require("./controllers/cardsController");
  app.use(ViewsController);
  app.use(APIController);
  app.use("/users", UsersController);
  app.use("/cards", CardsController);
  
/**
 * DB Connection
 * APP LISTEN
 */
db.sequelize
  .sync(/* { force: false } */)
  //   .sync()
  .then(() => {
    // Start our server so that it can begin listening to client requests.
    app.listen(PORT, function () {
      // Log (server-side) when our server has started
      console.log(`Server listening on: http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to the database.");
    console.log(err);
  });
