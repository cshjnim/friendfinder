// Your `server.js` file should require the basic npm packages we've used in class: `express` and `path`.

// Dependencies
var express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;

// For serving of static CSS

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// router
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//listener
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});