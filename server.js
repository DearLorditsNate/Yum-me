// Dependencies
// Express
var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;

// Handlebars
var exphbs = require("express-handlebars");
app.engine(
    "handlebars",
    exphbs({
        defaultLayout: "main"
    })
);
app.set("view engine", "handlebars");


require("./routes/htmlRoutes.js")(app);


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Start server
app.listen(PORT, function() {
    console.log("Listening on port: " + PORT);
});